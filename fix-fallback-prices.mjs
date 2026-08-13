#!/usr/bin/env node
/**
 * fix-fallback-prices.mjs
 *
 * Engångsrättning av price i src/content/gear-reviews/ till ordinarie pris
 * enligt Adtractions produktfeed.
 *
 * BAKGRUND
 *
 * price i frontmatter är sedan src/lib/feed.ts infördes ett reservvärde som
 * visas när feeden inte svarar eller saknar produkten. Vid genomgången
 * 2026-08-13 låg 37 av 51 matchade priser på en reanivå i stället för
 * ordinarie, eftersom de matats in under pågående kampanj. Ett reservvärde på
 * gammal reanivå är sämre än ett på ordinarie, och priceRange räknas dessutom
 * på ordinarie pris.
 *
 * SÄKERHET
 *
 * Skriptet skriver ingenting utan --apply. Raden byts bara när det nuvarande
 * värdet är exakt det som valideringen läste, och bara när price förekommer
 * precis en gång i frontmatterblocket. Allt annat lämnas orört och rapporteras.
 *
 * Detta är en engångsåtgärd. Löpande avvikelser rapporteras av
 * validate-feed.mjs och ska bedömas redaktionellt, inte skrivas automatiskt.
 *
 * Körning:
 *   node --env-file=.env fix-fallback-prices.mjs            torrkörning
 *   node --env-file=.env fix-fallback-prices.mjs --apply    skriver filer
 *
 * Enskild feed från fil, för felsökning utan nätverk:
 *   node fix-fallback-prices.mjs --file /tmp/feed.xml
 *
 * Matchning och normalisering speglar src/lib/feed.ts. Ändras den ena måste
 * detta skript och validate-feed.mjs följa med, annars rättar skriptet mot
 * andra produkter än de sajten faktiskt visar.
 */

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const GEAR_DIR = 'src/content/gear-reviews';
/**
 * Butiker med feed. Speglar SOURCES i src/lib/feed.ts och validate-feed.mjs.
 * Butiker som saknas här hoppas över, eftersom det inte finns något att
 * jämföra mot.
 */
const SOURCES = [
  { name: 'FiskeOnline', env: 'ADTRACTION_FEED_URL_FISKEONLINE', legacyEnv: 'ADTRACTION_FEED_URL' },
  { name: 'Outl1', env: 'ADTRACTION_FEED_URL_OUTL1' },
];
const MERCHANTS = new Set(SOURCES.map((s) => s.name));

const args = process.argv.slice(2);
const flag = (n) => args.includes(`--${n}`);
const opt = (n) => {
  const i = args.indexOf(`--${n}`);
  return i !== -1 ? args[i + 1] : null;
};

const APPLY = flag('apply');

/* ---------- feed ---------- */

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

function productUrlFrom(trackingUrl) {
  if (!trackingUrl) return null;
  const i = trackingUrl.indexOf('&url=');
  return i === -1 ? null : decode(trackingUrl.slice(i + 5));
}

/** Gemener, utan querystring, fragment eller avslutande slash. Speglar feed.ts. */
const normUrl = (u) =>
  u ? u.trim().toLowerCase().split('#')[0].split('?')[0].replace(/\/+$/, '') : null;

function parseInto(xml, index) {
  let added = 0;
  const re = /<item[\s>][\s\S]*?<\/item>/gi;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const key = normUrl(productUrlFrom(tag(m[0], 'link')));
    const price = money(tag(m[0], 'g:price'));
    // Första posten vinner, som i feed.ts.
    if (key && price !== null && !index.has(key)) {
      index.set(key, price);
      added++;
    }
  }
  return added;
}

async function loadFeed() {
  const index = new Map();

  const file = opt('file');
  if (file) {
    const added = parseInto(await readFile(file, 'utf8'), index);
    console.log(`  ${file}: ${added} produkter`);
    return index;
  }

  for (const source of SOURCES) {
    const url =
      process.env[source.env] ??
      (source.legacyEnv ? process.env[source.legacyEnv] : undefined);

    if (!url) {
      console.log(`  ${source.name}: ${source.env} saknas, butiken hoppas över`);
      continue;
    }

    let res;
    try {
      res = await fetch(url);
    } catch (err) {
      console.log(`  ${source.name}: hämtning misslyckades (${err.message})`);
      continue;
    }
    if (!res.ok) {
      console.log(`  ${source.name}: Adtraction svarade ${res.status}`);
      continue;
    }

    const added = parseInto(await res.text(), index);
    console.log(`  ${source.name}: ${added} produkter`);
  }

  return index;
}

/* ---------- filer ---------- */

function frontmatterBlock(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  return m ? m[1] : null;
}

function readField(fm, name) {
  const m = fm.match(new RegExp(`^${name}:\\s*(.*)$`, 'm'));
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : null;
}

/* ---------- main ---------- */

console.log('\nFeeds');
const feed = await loadFeed();
if (feed.size === 0) {
  console.error('Inga produkter lästes ur feeden. Kontrollera filen.');
  process.exit(2);
}

const dir = opt('dir') || GEAR_DIR;
let files;
try {
  files = await readdir(dir);
} catch {
  console.error(`Hittar inte ${dir}. Kör skriptet från projektroten.`);
  process.exit(2);
}

const changed = [];
const skipped = [];

for (const f of files) {
  if (!/\.mdx?$/.test(f)) continue;

  const path = join(dir, f);
  const text = await readFile(path, 'utf8');
  const fm = frontmatterBlock(text);
  if (!fm) continue;

  const merchant = readField(fm, 'merchant');
  if (!merchant || !MERCHANTS.has(merchant)) continue;

  const slug = readField(fm, 'slug') || f;
  const affiliateUrl = readField(fm, 'affiliateUrl');
  if (!affiliateUrl) continue;

  const target = normUrl(productUrlFrom(affiliateUrl));
  const ordinarie = target ? feed.get(target) : undefined;
  if (ordinarie === undefined) continue;

  const current = Number(readField(fm, 'price'));
  if (!Number.isFinite(current) || current === ordinarie) continue;

  // Raden måste finnas exakt en gång i frontmatterblocket.
  const lineRe = new RegExp(`^price:\\s*${current}\\s*$`, 'gm');
  const hits = fm.match(lineRe);
  if (!hits || hits.length !== 1) {
    skipped.push({ slug, reason: `price: ${current} förekommer ${hits ? hits.length : 0} gånger i frontmatter` });
    continue;
  }

  const newFm = fm.replace(new RegExp(`^price:\\s*${current}\\s*$`, 'm'), `price: ${ordinarie}`);
  const newText = text.replace(`---\n${fm}\n---`, `---\n${newFm}\n---`);

  if (newText === text) {
    skipped.push({ slug, reason: 'kunde inte byta ut raden, frontmatter oväntat formaterad' });
    continue;
  }

  changed.push({ slug, file: f, from: current, to: ordinarie });
  if (APPLY) await writeFile(path, newText, 'utf8');
}

console.log(`\nReservpriser mot ordinarie pris i feeden${APPLY ? '' : ' (torrkörning)'}\n`);

if (changed.length === 0) {
  console.log('Inget att rätta.\n');
} else {
  for (const c of changed.sort((a, b) => a.slug.localeCompare(b.slug, 'sv'))) {
    const diff = Math.round(((c.to - c.from) / c.from) * 100);
    console.log(`  ${c.slug.padEnd(34)} ${c.from} -> ${c.to} kr (${diff > 0 ? '+' : ''}${diff} %)`);
  }
  console.log(`\n${changed.length} filer ${APPLY ? 'rättade' : 'skulle rättas'}`);
}

if (skipped.length > 0) {
  console.log('\nHOPPADE ÖVER');
  for (const s of skipped) console.log(`  ${s.slug.padEnd(34)} ${s.reason}`);
}

if (!APPLY && changed.length > 0) {
  console.log('\nKör om med --apply för att skriva filerna.');
}

console.log('');
