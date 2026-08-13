#!/usr/bin/env node
/**
 * validate-feed.mjs
 *
 * Kontrollerar src/content/gear-reviews/ mot Adtractions produktfeeds.
 * Rapporterar avvikelser, patchar aldrig innehåll.
 *
 * Matchning och normalisering följer src/lib/feed.ts. Ändras den ena måste den
 * andra följa med, annars rapporterar skriptet avvikelser som sajten inte har.
 *
 * VAD SOM RÄKNAS SOM FEL
 *
 * Sedan feed.ts hämtar priset vid byggtid är price i frontmatter ett
 * reservvärde, inte det som visas. En prisavvikelse är därför inte ett fel på
 * sidan, bara ett dåligt reservvärde, och rapporteras som varning.
 *
 * Fel är sådant som gör att en sida inte fungerar: saknad eller felformaterad
 * affiliateUrl, och price som inte är ett tal. Bara dessa fäller --strict, så
 * att varken pågående kampanjer eller slutsålda produkter kan bryta ett bygge.
 *
 * VARFÖR EN GRÄNS PÅ PRISAVVIKELSER
 *
 * Reservvärdets fel spelar roll i proportion till sin storlek. Några procent
 * märks inte om en feed en dag uteblir, och priceRange påverkas först vid
 * större skillnader. Avvikelser under gränsen räknas därför bara samman.
 *
 * PRODUKTER SOM SAKNAS I FEEDEN
 *
 * Feedsen innehåller bara produkter i lager. En produkt som saknas är alltså
 * normalt tillfälligt slut, inte borttagen. Kontrollerat 2026-08-13: samtliga
 * nio saknade FiskeOnline-produkter svarade HTTP 200 hos butiken. Därför
 * varning och inte fel. Vid upprepade träffar bör länken ändå ses över.
 *
 * BUTIKER UTAN FEED
 *
 * Fritid och Vildmark har ingen feed uppsatt. Produkterna hoppas över och
 * räknas bara samman, eftersom det inte finns något att jämföra mot.
 *
 * Körning:
 *   node --env-file=.env validate-feed.mjs
 *   node --env-file=.env validate-feed.mjs --rea      lista pågående kampanjer
 *   node --env-file=.env validate-feed.mjs --json     maskinläsbar utdata
 *   node --env-file=.env validate-feed.mjs --strict   exit 1 vid fel, för CI
 *
 * Enskild feed från fil, för felsökning utan nätverk:
 *   node validate-feed.mjs --file /tmp/feed.xml --merchant FiskeOnline
 */

import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

/**
 * Butiker med feed. adId är det annons-ID som ska finnas i publicerade
 * affiliateUrl. Feedernas egna länkar använder ett annat ID i båda
 * programmen, se BESLUT.md.
 */
const SOURCES = [
  { name: 'FiskeOnline', env: 'ADTRACTION_FEED_URL_FISKEONLINE', legacyEnv: 'ADTRACTION_FEED_URL', adId: '1954031990' },
  { name: 'Outl1', env: 'ADTRACTION_FEED_URL_OUTL1', adId: '1728546059' },
];

/** Prisavvikelser under denna andel räknas bara samman, de listas inte. */
const PRICE_TOLERANCE = 0.10;

const GEAR_DIR = 'src/content/gear-reviews';

const args = process.argv.slice(2);
const flag = (n) => args.includes(`--${n}`);
const opt = (n) => {
  const i = args.indexOf(`--${n}`);
  return i !== -1 ? args[i + 1] : null;
};

/* ---------- XML ---------- */

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
  const m = raw.replace(/\u00a0/g, ' ').match(/([\d\s.,]+)\s*([A-Z]{3})?/);
  if (!m) return null;
  const amount = Number(m[1].replace(/\s/g, '').replace(',', '.'));
  return Number.isFinite(amount) ? { amount, currency: m[2] || null } : null;
}

/* ---------- länkar, speglar feed.ts ---------- */

function productUrlFrom(trackingUrl) {
  if (!trackingUrl) return null;
  const i = trackingUrl.indexOf('&url=');
  if (i === -1) return null;
  return normalise(decode(trackingUrl.slice(i + 5)));
}

/** Gemener, utan querystring, fragment eller avslutande slash. */
function normalise(url) {
  return url.trim().toLowerCase().split('#')[0].split('?')[0].replace(/\/+$/, '');
}

function adIdFrom(url) {
  const m = (url || '').match(/[?&]a=(\d+)/);
  return m ? m[1] : null;
}

/* ---------- hämtning ---------- */

function urlFor(source) {
  return process.env[source.env] ?? (source.legacyEnv ? process.env[source.legacyEnv] : undefined) ?? '';
}

function parseInto(xml, source, index, warnings) {
  let added = 0;
  let collisions = 0;
  const re = /<item[\s>][\s\S]*?<\/item>/gi;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const block = m[0];
    const key = productUrlFrom(tag(block, 'link'));
    if (!key) continue;
    const price = money(tag(block, 'g:price'));
    if (price === null) continue;

    if (index.has(key)) {
      collisions++;
      continue;
    }

    index.set(key, {
      merchant: source.name,
      availability: tag(block, 'g:availability'),
      price,
      salePrice: money(tag(block, 'g:sale_price')),
      label1: tag(block, 'g:custom_label_1'),
    });
    added++;
  }

  if (collisions > 0) {
    warnings.push(`${source.name}: ${collisions} produkter delade nyckel efter normalisering, se BESLUT.md om querystring`);
  }
  return added;
}

async function loadFeeds() {
  const index = new Map();
  const counts = [];
  const warnings = [];

  const file = opt('file');
  if (file) {
    const name = opt('merchant') || SOURCES[0].name;
    const source = SOURCES.find((s) => s.name === name);
    if (!source) {
      console.error(`Okänd butik "${name}". Kända: ${SOURCES.map((s) => s.name).join(', ')}`);
      process.exit(2);
    }
    const added = parseInto(await readFile(file, 'utf8'), source, index, warnings);
    counts.push({ name: source.name, added });
    return { index, counts, warnings, only: source.name };
  }

  for (const source of SOURCES) {
    const url = urlFor(source);
    if (!url) {
      warnings.push(`${source.name}: ${source.env} saknas, butiken kontrolleras inte`);
      continue;
    }
    let res;
    try {
      res = await fetch(url);
    } catch (err) {
      warnings.push(`${source.name}: hämtning misslyckades (${err.message})`);
      continue;
    }
    if (!res.ok) {
      warnings.push(`${source.name}: Adtraction svarade ${res.status}`);
      continue;
    }
    const added = parseInto(await res.text(), source, index, warnings);
    counts.push({ name: source.name, added });
  }

  return { index, counts, warnings, only: null };
}

/* ---------- gear-reviews ---------- */

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-zA-Z]+):\s*(.*)$/);
    if (!kv) continue;
    const v = kv[2].trim();
    if (v === '' || v.startsWith('-')) continue;
    fm[kv[1]] = v.replace(/^["']|["']$/g, '');
  }
  return fm;
}

async function loadReviews(dir) {
  let files;
  try {
    files = await readdir(dir);
  } catch {
    console.error(`Hittar inte ${dir}. Kör skriptet från projektroten.`);
    process.exit(2);
  }
  const out = [];
  for (const f of files) {
    if (!/\.mdx?$/.test(f)) continue;
    const fm = parseFrontmatter(await readFile(join(dir, f), 'utf8'));
    if (fm) out.push({ file: f, ...fm });
  }
  return out;
}

/* ---------- kontroll ---------- */

function validate(reviews, index, only) {
  const findings = [];
  const rea = [];
  let smallDiffs = 0;
  let matched = 0;
  let noFeed = 0;

  const add = (level, slug, type, message) => findings.push({ level, slug, type, message });
  const byName = new Map(SOURCES.map((s) => [s.name, s]));

  for (const r of reviews) {
    const slug = r.slug || r.file;
    const source = r.merchant ? byName.get(r.merchant) : null;

    // Butiker utan feed går inte att jämföra mot något.
    if (!source) {
      noFeed++;
      continue;
    }

    // Vid --file kontrolleras bara den butik filen tillhör.
    if (only && source.name !== only) continue;

    if (!r.affiliateUrl) {
      add('fel', slug, 'saknar-lank', 'affiliateUrl saknas');
      continue;
    }

    const adId = adIdFrom(r.affiliateUrl);
    if (adId && adId !== source.adId) {
      add('varning', slug, 'annons-id',
        `${source.name}: affiliateUrl använder a=${adId}, förväntat a=${source.adId}`);
    }

    const target = productUrlFrom(r.affiliateUrl);
    if (!target) {
      add('fel', slug, 'lankformat', 'affiliateUrl saknar &url=-parameter');
      continue;
    }

    const fmPrice = Number(r.price);
    if (!Number.isFinite(fmPrice)) {
      add('fel', slug, 'pris-saknas', 'price saknas eller är inte ett tal');
    }

    const p = index.get(target);
    if (!p) {
      add('varning', slug, 'ur-feed', `${source.name}: saknas i feeden, troligen slut i lager`);
      continue;
    }

    matched++;

    const ordinarie = p.price?.amount;

    if (Number.isFinite(fmPrice) && Number.isFinite(ordinarie) && ordinarie !== fmPrice) {
      const ratio = Math.abs(ordinarie - fmPrice) / fmPrice;
      if (ratio >= PRICE_TOLERANCE) {
        const diff = Math.round(((ordinarie - fmPrice) / fmPrice) * 100);
        add('varning', slug, 'reservpris',
          `price ${fmPrice} kr, ordinarie i feeden ${ordinarie} kr (${diff > 0 ? '+' : ''}${diff} %)`);
      } else {
        smallDiffs++;
      }
    }

    if (p.salePrice && Number.isFinite(ordinarie) && p.salePrice.amount < ordinarie) {
      rea.push({ slug, sale: p.salePrice.amount, ordinarie, label: p.label1 || null });
    }

    const cur = p.price?.currency;
    if (cur && cur !== 'SEK') {
      add('varning', slug, 'valuta', `feedens valuta är ${cur}`);
    }
  }

  return { findings, rea, smallDiffs, matched, noFeed };
}

/* ---------- utdata ---------- */

const ORDER = { fel: 0, varning: 1 };
const RUBRIK = { fel: 'FEL', varning: 'VARNING' };

function report(res, meta) {
  const { findings, rea, smallDiffs, matched, noFeed } = res;

  if (flag('json')) {
    console.log(JSON.stringify({ ...meta, matched, noFeed, smallDiffs, findings, rea }, null, 2));
    return;
  }

  console.log('\nFeedvalidering');
  for (const c of meta.counts) console.log(`  ${c.name}: ${c.added} produkter i feeden`);
  console.log(`\n${meta.reviews} produktsidor, ${matched} matchade mot feed`);
  if (noFeed > 0) console.log(`${noFeed} produkter tillhör butiker utan feed och kontrolleras inte`);

  for (const w of meta.warnings) console.log(`\nOBS  ${w}`);

  console.log('');

  if (findings.length === 0) {
    console.log('Inga avvikelser.');
  } else {
    const sorted = [...findings].sort(
      (a, b) => ORDER[a.level] - ORDER[b.level] || a.slug.localeCompare(b.slug, 'sv')
    );
    let current = null;
    for (const f of sorted) {
      if (f.level !== current) {
        current = f.level;
        console.log(RUBRIK[f.level]);
      }
      console.log(`  ${f.slug.padEnd(34)} ${f.message}`);
    }
    const n = (l) => findings.filter((f) => f.level === l).length;
    console.log(`\n${n('fel')} fel, ${n('varning')} varningar`);
  }

  if (smallDiffs > 0) {
    console.log(`${smallDiffs} reservpriser avviker mindre än ${Math.round(PRICE_TOLERANCE * 100)} procent och listas inte`);
  }

  if (rea.length > 0) {
    if (flag('rea')) {
      console.log('\nPÅGÅENDE KAMPANJER');
      for (const x of [...rea].sort((a, b) => a.slug.localeCompare(b.slug, 'sv'))) {
        const l = x.label ? `, märkt ${x.label}` : '';
        console.log(`  ${x.slug.padEnd(34)} ${x.sale} kr mot ordinarie ${x.ordinarie} kr${l}`);
      }
    } else {
      console.log(`${rea.length} produkter är nedsatta just nu, kör med --rea för lista`);
    }
  }

  console.log('');
}

/* ---------- main ---------- */

const { index, counts, warnings, only } = await loadFeeds();
if (index.size === 0) {
  console.error('Inga produkter kunde läsas ur någon feed.');
  for (const w of warnings) console.error(`  ${w}`);
  process.exit(2);
}

const reviews = await loadReviews(opt('dir') || GEAR_DIR);
const res = validate(reviews, index, only);
report(res, { reviews: reviews.length, counts, warnings });

if (flag('strict') && res.findings.some((f) => f.level === 'fel')) process.exit(1);
