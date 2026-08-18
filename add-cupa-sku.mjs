#!/usr/bin/env node
/**
 * add-cupa-sku.mjs
 *
 * Lägger till cupa_sku i affiliateUrl för produkter som finns i Adtractions
 * feeds. Parametern gör att konverteringar kan följas per produkt i stället
 * för bara per kanal.
 *
 * BAKGRUND
 *
 * Feedens egna länkar bär cupa_sku, våra egenbyggda gjorde inte det. Adtraction
 * bekräftade 2026-08-14 att parametern fungerar på egenbyggda länkar med det
 * vanliga annons-ID:t, alltså 1954031990 för FiskeOnline och 1728546059 för
 * Outl1. Feedens ID är en systemgenererad intern annons som inte ska användas.
 * Värdet får vara högst 128 tecken.
 *
 * PLACERING I LÄNKEN
 *
 * Parametern måste ligga före &url=. Adtraction URL-kodar inte målet, så allt
 * efter &url= tolkas som produktens adress. En parameter placerad efter skulle
 * hamna i mål-URL:en i stället för i spårningen.
 *
 * VILKA SOM BERÖRS
 *
 * Bara produkter som finns i en feed får parametern. Slutsålda produkter saknas
 * i feeden och Fritid och Vildmark har ingen feed alls. Deras länkar lämnas
 * orörda och fungerar som förut.
 *
 * Skriptet är idempotent. En länk som redan har rätt cupa_sku lämnas i fred.
 *
 * Körning:
 *   node --env-file=.env add-cupa-sku.mjs            torrkörning
 *   node --env-file=.env add-cupa-sku.mjs --apply    skriver filerna
 */

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const SOURCES = [
  { name: 'FiskeOnline', env: 'ADTRACTION_FEED_URL_FISKEONLINE' },
  { name: 'Outl1', env: 'ADTRACTION_FEED_URL_OUTL1' },
];

const GEAR_DIR = 'src/content/gear-reviews';

/** Adtractions gräns för egna parametervärden. */
const MAX_SKU_LENGTH = 128;

/** Tecken som är säkra i en querystring utan kodning. */
const SAFE_SKU = /^[A-Za-z0-9._-]+$/;

const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const opt = (n) => {
  const i = args.indexOf(`--${n}`);
  return i !== -1 ? args[i + 1] : null;
};

/* ---------- feed, speglar feed.ts ---------- */

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

function normalise(url) {
  return url ? url.trim().toLowerCase().split('#')[0].split('?')[0].replace(/\/+$/, '') : null;
}

function productUrlFrom(trackingUrl) {
  const i = (trackingUrl || '').indexOf('&url=');
  return i === -1 ? null : normalise(decode(trackingUrl.slice(i + 5)));
}

async function loadFeeds() {
  const index = new Map();
  console.log('\nFeeds');

  for (const source of SOURCES) {
    const url = process.env[source.env];
    if (!url) {
      console.log(`  ${source.name}: ${source.env} saknas, butiken hoppas över`);
      continue;
    }

    let xml;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.log(`  ${source.name}: Adtraction svarade ${res.status}`);
        continue;
      }
      xml = await res.text();
    } catch (err) {
      console.log(`  ${source.name}: hämtning misslyckades (${err.message})`);
      continue;
    }

    let added = 0;
    const re = /<item[\s>][\s\S]*?<\/item>/gi;
    let m;
    while ((m = re.exec(xml)) !== null) {
      const key = productUrlFrom(tag(m[0], 'link'));
      const sku = tag(m[0], 'g:id');
      if (key && sku && !index.has(key)) {
        index.set(key, sku);
        added++;
      }
    }
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

/** Sätter in cupa_sku före &url=, eller ersätter ett befintligt värde. */
function withCupaSku(affiliateUrl, sku) {
  const i = affiliateUrl.indexOf('&url=');
  if (i === -1) return null;

  const tracking = affiliateUrl.slice(0, i);
  const target = affiliateUrl.slice(i);

  const stripped = tracking.replace(/&cupa_sku=[^&]*/g, '');
  return `${stripped}&cupa_sku=${sku}${target}`;
}

function currentCupaSku(affiliateUrl) {
  const i = affiliateUrl.indexOf('&url=');
  const tracking = i === -1 ? affiliateUrl : affiliateUrl.slice(0, i);
  return tracking.match(/[?&]cupa_sku=([^&]*)/)?.[1] ?? null;
}

/* ---------- main ---------- */

const feed = await loadFeeds();
if (feed.size === 0) {
  console.error('\nInga produkter kunde läsas ur någon feed.');
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
let alreadyOk = 0;
let noFeed = 0;

for (const f of files) {
  if (!/\.mdx?$/.test(f)) continue;

  const path = join(dir, f);
  const text = await readFile(path, 'utf8');
  const fm = frontmatterBlock(text);
  if (!fm) continue;

  const slug = readField(fm, 'slug') || f;
  const affiliateUrl = readField(fm, 'affiliateUrl');
  if (!affiliateUrl) continue;

  const target = productUrlFrom(affiliateUrl);
  const sku = target ? feed.get(target) : undefined;

  if (!sku) {
    noFeed++;
    continue;
  }

  if (sku.length > MAX_SKU_LENGTH) {
    skipped.push({ slug, reason: `SKU är ${sku.length} tecken, gränsen är ${MAX_SKU_LENGTH}` });
    continue;
  }
  if (!SAFE_SKU.test(sku)) {
    skipped.push({ slug, reason: `SKU "${sku}" innehåller tecken som kräver kodning` });
    continue;
  }

  const current = currentCupaSku(affiliateUrl);
  if (current === sku) {
    alreadyOk++;
    continue;
  }

  const updated = withCupaSku(affiliateUrl, sku);
  if (!updated || updated === affiliateUrl) {
    skipped.push({ slug, reason: 'kunde inte bygga om länken' });
    continue;
  }

  // Byt bara ut den exakta raden, och bara när den förekommer en gång.
  const line = fm.match(new RegExp(`^affiliateUrl:.*$`, 'gm'));
  if (!line || line.length !== 1) {
    skipped.push({ slug, reason: `affiliateUrl förekommer ${line ? line.length : 0} gånger` });
    continue;
  }

  const newText = text.replace(affiliateUrl, updated);
  if (newText === text) {
    skipped.push({ slug, reason: 'länken kunde inte bytas ut i filen' });
    continue;
  }

  changed.push({ slug, sku, replacing: current });
  if (APPLY) await writeFile(path, newText, 'utf8');
}

console.log(`\ncupa_sku i affiliateUrl${APPLY ? '' : ' (torrkörning)'}\n`);

if (changed.length === 0) {
  console.log('Inget att ändra.');
} else {
  for (const c of changed.sort((a, b) => a.slug.localeCompare(b.slug, 'sv'))) {
    const note = c.replacing ? ` (ersätter ${c.replacing})` : '';
    console.log(`  ${c.slug.padEnd(38)} cupa_sku=${c.sku}${note}`);
  }
  console.log(`\n${changed.length} filer ${APPLY ? 'uppdaterade' : 'skulle uppdateras'}`);
}

if (alreadyOk > 0) console.log(`${alreadyOk} hade redan rätt cupa_sku`);
if (noFeed > 0) console.log(`${noFeed} saknas i feeden eller tillhör butik utan feed, lämnas orörda`);

if (skipped.length > 0) {
  console.log('\nHOPPADE ÖVER');
  for (const s of skipped) console.log(`  ${s.slug.padEnd(38)} ${s.reason}`);
}

if (!APPLY && changed.length > 0) {
  console.log('\nKör om med --apply för att skriva filerna.');
}

console.log('');
