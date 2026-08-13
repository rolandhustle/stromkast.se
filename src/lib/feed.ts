/**
 * src/lib/feed.ts
 *
 * Hämtar FiskeOnlines produktfeed från Adtraction vid byggtid och slår upp
 * aktuellt pris per produkt. Används av AffiliateCard via produktens
 * affiliateUrl.
 *
 * Format: Google Shopping RSS (XML) med g:-namnrymd. Feeden ligger på ca 13 MB
 * och 6 400 produkter, och hämtas därför exakt en gång per bygge.
 *
 * VARFÖR BYGGTID OCH INTE FRONTMATTER
 *
 * Priset i gear-reviews är ett statiskt tal som åldras. FiskeOnline har haft
 * kampanj på ungefär hälften av de produkter vi skriver om, vilket gör att ett
 * handinmatat pris nästan alltid är fel. Feeden hämtas i stället vid varje
 * bygge, och med den dagliga cron-körningen blir priset aldrig äldre än ett
 * dygn. Datumet exponeras så att kortet kan visa när priset hämtades.
 *
 * FALLBACK
 *
 * Feeden får aldrig fälla ett bygge. Saknas ADTRACTION_FEED_URL, svarar
 * Adtraction med fel, eller finns produkten inte i feeden, returneras null och
 * anropande komponent faller tillbaka på price i frontmatter. Frontmatter ska
 * därför alltid innehålla ordinarie pris, aldrig ett reapris.
 *
 * VARFÖR PRODUKT-URL SOM NYCKEL
 *
 * Feedens <link> är en spårningslänk med ett annat annons-ID än det vi
 * publicerar, så länkarna kan inte jämföras rakt av. Produktens rena URL ligger
 * i url-parametern i båda, och den är stabil. Se BESLUT.md om annons-ID.
 */

// import.meta.env finns bara i Astro. Optional chaining gör att modulen även
// kan importeras av fristående skript i projektroten utan att krascha.
const FEED_URL =
  import.meta.env?.ADTRACTION_FEED_URL ?? process.env.ADTRACTION_FEED_URL ?? '';

/** 13 MB över nätet behöver mer marginal än SMHI:s JSON-svar. */
const TIMEOUT_MS = 30_000;

export interface FeedPrice {
  /** Ordinarie pris i SEK. Styr prisklass och visas överstruket vid kampanj. */
  price: number;
  /** Kampanjpris i SEK, eller null när produkten inte är nedsatt. */
  salePrice: number | null;
  /** Feedens kampanjetikett, t.ex. "REA". Null när den saknas. */
  label: string | null;
  /** in_stock, out_of_stock eller tomt när feeden inte anger något. */
  availability: string;
  /** ISO-datum för när feeden hämtades. Visas som "hämtat 13 augusti". */
  fetchedAt: string;
}

// ---------------------------------------------------------------------------
// XML
// ---------------------------------------------------------------------------

const ENTITIES: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
};

function decode(s: string): string {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z]+);/gi, (m, name) => ENTITIES[name.toLowerCase()] ?? m);
}

function tag(block: string, name: string): string {
  const m = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, 'i'));
  if (!m) return '';
  const cdata = m[1].match(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/);
  return cdata ? cdata[1].trim() : decode(m[1]).trim();
}

/** "389 SEK" -> 389. Null när fältet saknas eller inte går att tolka. */
function money(raw: string): number | null {
  if (!raw) return null;
  const m = raw.replace(/\u00a0/g, ' ').match(/([\d\s.,]+)/);
  if (!m) return null;
  const n = Number(m[1].replace(/\s/g, '').replace(',', '.'));
  return Number.isFinite(n) ? n : null;
}

/**
 * Produktens rena URL ur en Adtraction-länk. Allt efter url= är målet,
 * och parametern ligger sist i både feedens och våra egna länkar.
 */
function productUrlFrom(trackingUrl: string): string | null {
  if (!trackingUrl) return null;
  const i = trackingUrl.indexOf('&url=');
  if (i === -1) return null;
  return normalise(decode(trackingUrl.slice(i + 5)));
}

/** Gemener och utan avslutande slash, så att små skillnader inte missar. */
function normalise(url: string): string {
  return url.trim().toLowerCase().replace(/\/+$/, '');
}

// ---------------------------------------------------------------------------
// Hämtning, en gång per bygge
// ---------------------------------------------------------------------------

let feedPromise: Promise<Map<string, FeedPrice>> | null = null;

async function loadFeed(): Promise<Map<string, FeedPrice>> {
  const index = new Map<string, FeedPrice>();

  if (!FEED_URL) {
    console.warn('[feed] ADTRACTION_FEED_URL saknas, priser faller tillbaka på frontmatter');
    return index;
  }

  const fetchedAt = new Date().toISOString().slice(0, 10);

  let xml: string;
  try {
    const res = await fetch(FEED_URL, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    if (!res.ok) {
      console.warn(`[feed] Adtraction svarade ${res.status}, priser faller tillbaka på frontmatter`);
      return index;
    }
    xml = await res.text();
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'okänt fel';
    console.warn(`[feed] hämtning misslyckades (${msg}), priser faller tillbaka på frontmatter`);
    return index;
  }

  const re = /<item[\s>][\s\S]*?<\/item>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    const block = m[0];
    const key = productUrlFrom(tag(block, 'link'));
    if (!key) continue;

    const price = money(tag(block, 'g:price'));
    if (price === null) continue;

    index.set(key, {
      price,
      salePrice: money(tag(block, 'g:sale_price')),
      label: tag(block, 'g:custom_label_1') || null,
      availability: tag(block, 'g:availability'),
      fetchedAt,
    });
  }

  if (index.size === 0) {
    console.warn('[feed] inga produkter kunde läsas ur feeden, kontrollera formatet');
  } else {
    console.log(`[feed] ${index.size} produkter inlästa från Adtraction`);
  }

  return index;
}

/** Feeden hämtas en gång per bygge, oavsett hur många sidor som frågar. */
function getFeed(): Promise<Map<string, FeedPrice>> {
  if (!feedPromise) feedPromise = loadFeed();
  return feedPromise;
}

// ---------------------------------------------------------------------------
// Publikt API
// ---------------------------------------------------------------------------

/**
 * Slår upp aktuellt pris för en produkt utifrån dess affiliateUrl.
 * Returnerar null när feeden saknas, inte svarar, eller inte innehåller
 * produkten. Produkter som är slut i lager saknas i feeden.
 */
export async function getFeedPrice(affiliateUrl: string | undefined): Promise<FeedPrice | null> {
  if (!affiliateUrl) return null;
  const key = productUrlFrom(affiliateUrl);
  if (!key) return null;
  const feed = await getFeed();
  return feed.get(key) ?? null;
}

/** "1 299 kr" */
export function formatPrice(value: number): string {
  return `${value.toLocaleString('sv-SE')} kr`;
}

const MONTHS_SV = [
  'januari', 'februari', 'mars', 'april', 'maj', 'juni',
  'juli', 'augusti', 'september', 'oktober', 'november', 'december',
];

/** ISO-datum till "13 augusti", för prisets hämtningsdatum. */
export function formatFetchedAt(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m || !d) return '';
  return `${d} ${MONTHS_SV[m - 1]}`;
}
