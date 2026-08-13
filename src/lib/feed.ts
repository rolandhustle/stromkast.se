/**
 * src/lib/feed.ts
 *
 * Hämtar Adtractions produktfeeds vid byggtid och slår upp aktuellt pris per
 * produkt. Används av AffiliateCard och produktsidan via produktens
 * affiliateUrl.
 *
 * Format: Google Shopping RSS (XML) med g:-namnrymd. Adtraction genererar
 * samma struktur för alla butiker.
 *
 * VARFÖR BYGGTID OCH INTE FRONTMATTER
 *
 * price i gear-reviews är ett statiskt tal som åldras. FiskeOnline har haft
 * kampanj på ungefär hälften av de produkter vi skriver om, och Outl1 kör
 * outletkampanjer i perioder. Ett handinmatat pris är därför nästan alltid
 * fel. Feeden hämtas i stället vid varje bygge, och med den dagliga
 * cron-körningen blir priset aldrig äldre än ett dygn.
 *
 * VARFÖR ETT GEMENSAMT UPPSLAG
 *
 * Alla feeds slås ihop till en karta i stället för att väljas utifrån
 * merchant. Produkt-URL:erna skiljer sig redan åt på domännivå, så nycklarna
 * kan inte krocka mellan butiker. Det gör att uppslaget inte behöver veta
 * vilken butik det gäller, och att merchant i frontmatter aldrig kan hamna i
 * otakt med affiliateUrl.
 *
 * FALLBACK
 *
 * Feeden får aldrig fälla ett bygge. Saknas miljövariabeln, svarar Adtraction
 * med fel, eller finns produkten inte i feeden, returneras null och anropande
 * komponent faller tillbaka på price i frontmatter. Frontmatter ska därför
 * alltid innehålla ordinarie pris, aldrig ett reapris.
 *
 * Butiker utan feed, i dag Fritid och Vildmark, hanteras av samma mekanism och
 * kräver ingen egen kod.
 *
 * VARFÖR QUERYSTRING STRIPPAS VID MATCHNING
 *
 * Outl1 lägger ett internt ID sist i varje produkt-URL, till exempel
 * ?var=14174, medan våra publicerade länkar saknar det. Utan strippning
 * matchar ingen Outl1-produkt. Kontrollerat 2026-08-13: feeden innehöll 2 798
 * produkter fördelade på 2 798 unika produktsidor, alltså är parametern ett
 * internt ID och inte en variantväljare.
 *
 * Strippningen är generell och gäller alla butiker, eftersom querystring i
 * produkt-URL:er nästan alltid är spårning eller interna ID:n. Antagandet
 * bryter om en ny butik använder query för att skilja produkter åt. Därför
 * varnar modulen vid bygget om två produkter i samma feed normaliserar till
 * samma nyckel. Se BESLUT.md.
 */

/** En butik och miljövariabeln som pekar ut dess feed. */
interface FeedSource {
  name: string;
  env: string;
}

const SOURCES: FeedSource[] = [
  { name: 'FiskeOnline', env: 'ADTRACTION_FEED_URL_FISKEONLINE' },
  { name: 'Outl1', env: 'ADTRACTION_FEED_URL_OUTL1' },
];

/** FiskeOnlines feed ligger på ca 13 MB och behöver marginal. */
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
  /** Butiken produkten kom från. */
  merchant: string;
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

/** "389 SEK" -> 389. Null när fältet saknas, är tomt eller inte går att tolka. */
function money(raw: string): number | null {
  if (!raw) return null;
  const m = raw.replace(/\u00a0/g, ' ').match(/([\d\s.,]+)/);
  if (!m) return null;
  const n = Number(m[1].replace(/\s/g, '').replace(',', '.'));
  return Number.isFinite(n) ? n : null;
}

/**
 * Produktens rena URL ur en Adtraction-länk. Allt efter url= är målet, och
 * parametern ligger sist i både feedens och våra egna länkar.
 */
function productUrlFrom(trackingUrl: string): string | null {
  if (!trackingUrl) return null;
  const i = trackingUrl.indexOf('&url=');
  if (i === -1) return null;
  return normalise(decode(trackingUrl.slice(i + 5)));
}

/** Gemener, utan querystring, fragment eller avslutande slash. */
function normalise(url: string): string {
  return url
    .trim()
    .toLowerCase()
    .split('#')[0]
    .split('?')[0]
    .replace(/\/+$/, '');
}

// ---------------------------------------------------------------------------
// Hämtning, en gång per bygge
// ---------------------------------------------------------------------------

function urlFor(source: FeedSource): string {
  // import.meta.env finns bara i Astro. Optional chaining gör att modulen även
  // kan importeras av fristående skript i projektroten utan att krascha.
  const env = import.meta.env as Record<string, string | undefined> | undefined;
  const proc = process.env as Record<string, string | undefined>;
  return env?.[source.env] ?? proc[source.env] ?? '';
}

async function loadSource(
  source: FeedSource,
  index: Map<string, FeedPrice>,
  fetchedAt: string
): Promise<void> {
  const url = urlFor(source);
  if (!url) {
    console.warn(`[feed] ${source.name}: ${source.env} saknas, priser faller tillbaka på frontmatter`);
    return;
  }

  let xml: string;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    if (!res.ok) {
      console.warn(`[feed] ${source.name}: Adtraction svarade ${res.status}, priser faller tillbaka på frontmatter`);
      return;
    }
    xml = await res.text();
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'okänt fel';
    console.warn(`[feed] ${source.name}: hämtning misslyckades (${msg}), priser faller tillbaka på frontmatter`);
    return;
  }

  let added = 0;
  let collisions = 0;

  const re = /<item[\s>][\s\S]*?<\/item>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    const block = m[0];
    const key = productUrlFrom(tag(block, 'link'));
    if (!key) continue;

    const price = money(tag(block, 'g:price'));
    if (price === null) continue;

    if (index.has(key)) {
      // Två produkter delar nyckel efter normalisering. Om butiken använder
      // querystring för att skilja produkter åt håller inte antagandet ovan.
      collisions++;
      if (collisions <= 3) {
        console.warn(`[feed] ${source.name}: två produkter delar nyckel efter normalisering: ${key}`);
      }
      continue;
    }

    index.set(key, {
      price,
      salePrice: money(tag(block, 'g:sale_price')),
      label: tag(block, 'g:custom_label_1') || null,
      availability: tag(block, 'g:availability'),
      merchant: source.name,
      fetchedAt,
    });
    added++;
  }

  if (collisions > 3) {
    console.warn(`[feed] ${source.name}: ytterligare ${collisions - 3} nyckelkrockar, se BESLUT.md om querystring`);
  }

  if (added === 0) {
    console.warn(`[feed] ${source.name}: inga produkter kunde läsas, kontrollera formatet`);
  } else {
    console.log(`[feed] ${source.name}: ${added} produkter inlästa`);
  }
}

let feedPromise: Promise<Map<string, FeedPrice>> | null = null;

async function loadFeeds(): Promise<Map<string, FeedPrice>> {
  const index = new Map<string, FeedPrice>();
  const fetchedAt = new Date().toISOString().slice(0, 10);

  // Sekventiellt, inte parallellt. Feedsen är stora och ordningen gör
  // varningar om nyckelkrockar läsbara per butik.
  for (const source of SOURCES) {
    await loadSource(source, index, fetchedAt);
  }

  return index;
}

/** Feedsen hämtas en gång per bygge, oavsett hur många sidor som frågar. */
function getFeeds(): Promise<Map<string, FeedPrice>> {
  if (!feedPromise) feedPromise = loadFeeds();
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
  const feeds = await getFeeds();
  return feeds.get(key) ?? null;
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
