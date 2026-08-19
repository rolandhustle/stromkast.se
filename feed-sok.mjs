#!/usr/bin/env node
/**
 * feed-sok.mjs
 *
 * Slår upp produkter i Adtractions feeds och skriver ut en kompakt post per
 * träff, avsedd att klistras in i en chatt eller ett dokument som underlag för
 * att skriva produktsidor.
 *
 * VARFÖR
 *
 * Innehållet skrivs inte i terminalen utan i chatt eller editor. Det som ändå
 * måste komma ur feeden är exakt titel, ordinarie pris, produktens URL, bild
 * och EAN, plus en färdigbyggd affiliatelänk. Skriptet hämtar just det och
 * inget mer, så att skrivandet kan ske någon annanstans.
 *
 * Ordinarie pris (g:price) skrivs ut som det värde som ska in i frontmatter.
 * Kampanjpris (g:sale_price) visas separat och ska aldrig hamna där, eftersom
 * sajten hämtar det visade priset vid byggtid via src/lib/feed.ts.
 *
 * Varje träff märks NY eller FINNS, utifrån om produktens URL redan används av
 * en fil i gear-reviews. Det förhindrar att samma produkt skrivs två gånger.
 *
 * Normaliseringen speglar src/lib/feed.ts. Ändras den ena måste den andra
 * följa med.
 *
 * ANVÄNDNING
 *
 *   node --env-file=.env feed-sok.mjs <sökord...>
 *   node --env-file=.env feed-sok.mjs <produkt-URL...>
 *
 * Flaggor:
 *   --butik <namn>      begränsa till FiskeOnline eller Outl1
 *   --pris 500-1500     prisintervall i kr, "-1500" och "500-" fungerar
 *   --typ <text>        filtrera på produktkategori i feeden
 *   --antal <n>         antal träffar, standard 15
 *   --ny                visa bara produkter som inte redan har en sida
 *   --kort              en rad per träff, för att skanna av ett sortiment
 *   --bild slug=SKU     ladda ner bilder till public/images/gear/<slug>.jpg
 *
 * Exempel:
 *   node --env-file=.env feed-sok.mjs shimano haspelrulle --pris 800-2000 --ny
 *   node --env-file=.env feed-sok.mjs --butik Outl1 --typ marint --kort
 *   node --env-file=.env feed-sok.mjs --bild shimano-miravel-2500=109272
 */

import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const SOURCES = [
  {
    name: 'FiskeOnline',
    env: 'ADTRACTION_FEED_URL_FISKEONLINE',
    base: 'https://pin.fiskeonline.com/t/t?a=1954031990&as=2072765905&t=2&tk=1',
  },
  {
    name: 'Outl1',
    env: 'ADTRACTION_FEED_URL_OUTL1',
    base: 'https://do.outl1.se/t/t?a=1728546059&as=2072765905&t=2&tk=1',
  },
];

const GEAR_DIR = 'src/content/gear-reviews';
const IMAGES_DIR = 'public/images/gear';

/** Adtractions gräns för egna parametervärden. */
const MAX_SKU_LENGTH = 128;

/** Tecken som är säkra i en querystring utan kodning. */
const SAFE_SKU = /^[A-Za-z0-9._-]+$/;

/* ---------- argument ---------- */

const argv = process.argv.slice(2);
const flags = new Map();
const terms = [];

for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a.startsWith('--')) {
    const name = a.slice(2);
    const takesValue = ['butik', 'pris', 'typ', 'antal', 'bild'].includes(name);
    if (name === 'bild') {
      // Kan upprepas: --bild slug=SKU --bild slug2=SKU2
      const list = flags.get('bild') ?? [];
      list.push(argv[++i]);
      flags.set('bild', list);
    } else if (takesValue) {
      flags.set(name, argv[++i]);
    } else {
      flags.set(name, true);
    }
  } else {
    terms.push(a);
  }
}

const LIMIT = Number(flags.get('antal') ?? 15);

function parsePriceRange(raw) {
  if (!raw) return null;
  const m = raw.match(/^(\d*)\s*-\s*(\d*)$/);
  if (!m) {
    const one = Number(raw);
    return Number.isFinite(one) ? { min: 0, max: one } : null;
  }
  return {
    min: m[1] ? Number(m[1]) : 0,
    max: m[2] ? Number(m[2]) : Infinity,
  };
}

const priceRange = parsePriceRange(flags.get('pris'));

/* ---------- XML, speglar feed.ts ---------- */

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };

function decode(s) {
  if (!s) return '';
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z]+);/gi, (m, name) => ENTITIES[name.toLowerCase()] ?? m);
}

function tag(block, name) {
  const m = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, 'i'));
  if (!m) return '';
  const cdata = m[1].match(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/);
  return cdata ? cdata[1].trim() : decode(m[1]).trim();
}

function money(raw) {
  if (!raw) return null;
  const m = raw.replace(/\u00a0/g, ' ').match(/([\d\s.,]+)/);
  if (!m) return null;
  const n = Number(m[1].replace(/\s/g, '').replace(',', '.'));
  return Number.isFinite(n) ? n : null;
}

/** Gemener, utan querystring, fragment eller avslutande slash. */
function normalise(url) {
  return url ? url.trim().toLowerCase().split('#')[0].split('?')[0].replace(/\/+$/, '') : null;
}

/** Produktens rena URL, med querystring kvar. Behövs för publicerade länkar. */
function rawProductUrlFrom(trackingUrl) {
  const i = (trackingUrl || '').indexOf('&url=');
  return i === -1 ? null : decode(trackingUrl.slice(i + 5));
}

/* ---------- hämtning ---------- */

async function loadFeeds() {
  const items = [];
  const only = flags.get('butik');

  for (const source of SOURCES) {
    if (only && source.name.toLowerCase() !== String(only).toLowerCase()) continue;

    const url = process.env[source.env];
    if (!url) {
      console.error(`  ${source.name}: ${source.env} saknas, hoppas över`);
      continue;
    }

    let xml;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.error(`  ${source.name}: Adtraction svarade ${res.status}`);
        continue;
      }
      xml = await res.text();
    } catch (err) {
      console.error(`  ${source.name}: hämtning misslyckades (${err.message})`);
      continue;
    }

    const seen = new Set();
    const re = /<item[\s>][\s\S]*?<\/item>/gi;
    let m;
    while ((m = re.exec(xml)) !== null) {
      const b = m[0];
      const raw = rawProductUrlFrom(tag(b, 'link'));
      const key = normalise(raw);
      const price = money(tag(b, 'g:price'));
      if (!key || price === null || seen.has(key)) continue;
      seen.add(key);

      items.push({
        merchant: source.name,
        base: source.base,
        sku: tag(b, 'g:id'),
        title: tag(b, 'title'),
        brand: tag(b, 'g:brand'),
        type: tag(b, 'g:product_type'),
        price,
        salePrice: money(tag(b, 'g:sale_price')),
        label: tag(b, 'g:custom_label_1'),
        image: tag(b, 'g:image_link'),
        gtin: tag(b, 'g:gtin'),
        rawUrl: raw,
        key,
      });
    }
  }
  return items;
}

/** Produkt-URL:er som redan har en sida, för att inte skriva samma två gånger. */
async function loadExisting() {
  const map = new Map();
  let files;
  try {
    files = await readdir(GEAR_DIR);
  } catch {
    return map;
  }
  for (const f of files) {
    if (!/\.mdx?$/.test(f)) continue;
    const text = await readFile(join(GEAR_DIR, f), 'utf8');
    const fm = text.match(/^---\n([\s\S]*?)\n---/);
    if (!fm) continue;
    const url = fm[1].match(/^affiliateUrl:\s*["']?(.*?)["']?\s*$/m)?.[1];
    const slug = fm[1].match(/^slug:\s*["']?(.*?)["']?\s*$/m)?.[1] ?? f;
    const key = normalise(rawProductUrlFrom(url));
    if (key) map.set(key, slug);
  }
  return map;
}

/* ---------- filtrering ---------- */

function matches(item) {
  if (priceRange && (item.price < priceRange.min || item.price > priceRange.max)) return false;

  const typ = flags.get('typ');
  if (typ && !item.type.toLowerCase().includes(String(typ).toLowerCase())) return false;

  if (terms.length === 0) return true;

  // URL-sökning: exakt uppslag
  if (terms.some((t) => t.startsWith('http'))) {
    return terms.some((t) => normalise(t) === item.key);
  }

  // Fritext: alla ord måste finnas i titel eller varumärke
  const hay = `${item.title} ${item.brand} ${item.type}`.toLowerCase();
  return terms.every((t) => hay.includes(t.toLowerCase()));
}

/* ---------- bildnedladdning ---------- */

async function downloadImages(items) {
  const specs = flags.get('bild');
  await mkdir(IMAGES_DIR, { recursive: true });

  for (const spec of specs) {
    const [slug, sku] = String(spec).split('=');
    if (!slug || !sku) {
      console.error(`Ogiltigt format: ${spec}. Använd slug=SKU.`);
      continue;
    }
    const item = items.find((i) => i.sku === sku);
    if (!item) {
      console.error(`${slug}: hittar ingen produkt med SKU ${sku}`);
      continue;
    }
    if (!item.image) {
      console.error(`${slug}: produkten saknar bild i feeden`);
      continue;
    }
    try {
      const res = await fetch(item.image);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 1000) throw new Error('bilden verkar tom');
      const dest = join(IMAGES_DIR, `${slug}.jpg`);
      await writeFile(dest, buf);
      console.log(`${dest}  (${Math.round(buf.length / 1024)} kB)`);
    } catch (err) {
      console.error(`${slug}: kunde inte hämta bilden (${err.message})`);
    }
  }
}

/* ---------- utskrift ---------- */

const kr = (v) => `${v.toLocaleString('sv-SE')} kr`;

function printItem(item, status) {
  console.log(`SKU ${item.sku} | ${item.title}`);
  console.log(`  Butik:       ${item.merchant}`);
  if (item.brand) console.log(`  Varumärke:   ${item.brand}`);
  console.log(`  Ordinarie:   ${kr(item.price)}   <- detta värde ska in i price`);
  if (item.salePrice !== null && item.salePrice < item.price) {
    const label = item.label ? ` (${item.label})` : '';
    console.log(`  Kampanj nu:  ${kr(item.salePrice)}${label}   visas automatiskt, skrivs inte in`);
  }
  if (item.type) console.log(`  Kategori:    ${item.type}`);
  if (item.gtin) console.log(`  EAN:         ${item.gtin}`);
  console.log(`  Produkt:     ${item.rawUrl}`);
  if (item.image) console.log(`  Bild:        ${item.image}`);

  // Affiliatelänken byggs utan querystring, som de befintliga länkarna.
  // Feedens interna ID (?var= hos Outl1) behövs inte för att landa rätt och
  // Adtraction URL-kodar inte målet, så färre parametrar är säkrare.
  //
  // cupa_sku måste ligga före &url=, eftersom allt efter &url= tolkas som
  // produktens adress. Parametern ger konverteringsrapportering per produkt.
  const target = item.rawUrl.split('?')[0];
  const sku = SAFE_SKU.test(item.sku) && item.sku.length <= MAX_SKU_LENGTH ? item.sku : null;
  const tracking = sku ? `${item.base}&cupa_sku=${sku}` : item.base;
  console.log(`  affiliateUrl: ${tracking}&url=${target}`);
  if (!sku) {
    console.log(`               (cupa_sku utelämnad, SKU "${item.sku}" kräver kodning eller är för långt)`);
  }
  if (target !== item.rawUrl) {
    console.log(`               (${item.rawUrl.slice(target.length)} borttaget, som i befintliga länkar)`);
  }
  console.log(`  Status:      ${status}`);
  console.log('');
}

function printShort(item, status) {
  const sale = item.salePrice !== null && item.salePrice < item.price ? ` (nu ${item.salePrice})` : '';
  const flagg = status.startsWith('FINNS') ? ' [har sida]' : '';
  console.log(`${item.sku.padEnd(12)} ${kr(item.price).padStart(10)}${sale.padEnd(12)} ${item.title.slice(0, 60)}${flagg}`);
}

/* ---------- main ---------- */

const items = await loadFeeds();
if (items.length === 0) {
  console.error('Inga produkter kunde läsas. Kontrollera miljövariablerna.');
  process.exit(2);
}

if (flags.has('bild')) {
  await downloadImages(items);
  process.exit(0);
}

const existing = await loadExisting();
let hits = items.filter(matches);

if (flags.has('ny')) {
  hits = hits.filter((i) => !existing.has(i.key));
}

hits.sort((a, b) => a.price - b.price);

const total = hits.length;
const shown = hits.slice(0, LIMIT);

console.log('');
if (total === 0) {
  console.log('Inga träffar.');
  if (terms.length > 0) console.log('Pröva färre eller bredare sökord.');
  console.log('');
  process.exit(0);
}

for (const item of shown) {
  const slug = existing.get(item.key);
  const status = slug ? `FINNS redan som ${slug}` : 'NY, ingen sida';
  if (flags.has('kort')) printShort(item, status);
  else printItem(item, status);
}

console.log(`${shown.length} av ${total} träffar visas.`);
if (total > shown.length) console.log(`Kör med --antal ${Math.min(total, 50)} för fler.`);
console.log('');
