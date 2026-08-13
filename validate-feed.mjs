#!/usr/bin/env node
/**
 * validate-feed.mjs
 *
 * Kontrollerar src/content/gear-reviews/ mot Adtractions produktfeed för
 * FiskeOnline (Google Shopping RSS, XML). Rapporterar avvikelser, patchar
 * aldrig innehåll.
 *
 * VAD SOM RÄKNAS SOM FEL
 *
 * Sedan src/lib/feed.ts hämtar priset vid byggtid är price i frontmatter ett
 * reservvärde, inte det som visas. En prisavvikelse är därför inte längre ett
 * fel på sidan, bara ett dåligt reservvärde, och rapporteras som varning.
 *
 * Fel är sådant som gör att en sida inte fungerar: saknad eller felformaterad
 * affiliateUrl, och price som inte är ett tal. Bara dessa fäller --strict, så
 * att varken pågående kampanjer eller slutsålda produkter kan bryta ett bygge.
 *
 * VARFÖR EN GRÄNS PÅ PRISAVVIKELSER
 *
 * Reservvärdets fel spelar roll i proportion till sin storlek. Några procent
 * märks inte om feeden en dag uteblir, och priceRange påverkas först vid
 * större skillnader. Avvikelser under gränsen räknas därför bara samman i
 * stället för att listas, annars drunknar de stora i de små.
 *
 * PRODUKTER SOM SAKNAS I FEEDEN
 *
 * Feeden innehåller bara produkter i lager. En produkt som saknas är alltså
 * normalt tillfälligt slut, inte borttagen. Kontrollerat 2026-08-13: samtliga
 * nio saknade produkter svarade HTTP 200 hos butiken. Därför varning och inte
 * fel. Vid upprepade träffar över tid bör länken ändå ses över.
 *
 * Körning:
 *   ADTRACTION_FEED_URL="https://..." node validate-feed.mjs
 *   node validate-feed.mjs --file /tmp/feed.xml     lokal fil
 *   node validate-feed.mjs --rea                    lista pågående kampanjer
 *   node validate-feed.mjs --json                   maskinläsbar utdata
 *   node validate-feed.mjs --strict                 exit 1 vid fel, för CI
 */

import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

/** Annons-ID i publicerade affiliateUrl. Feedens egna länkar använder ett annat. */
const EXPECTED_AD_ID = '1954031990';

/** Prisavvikelser under denna andel räknas bara samman, de listas inte. */
const PRICE_TOLERANCE = 0.10;

const GEAR_DIR = 'src/content/gear-reviews';
const MERCHANT = 'FiskeOnline';

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

/** "389 SEK" -> { amount: 389, currency: "SEK" } */
function money(raw) {
  if (!raw) return null;
  const m = raw.replace(/\u00a0/g, ' ').match(/([\d\s.,]+)\s*([A-Z]{3})?/);
  if (!m) return null;
  const amount = Number(m[1].replace(/\s/g, '').replace(',', '.'));
  return Number.isFinite(amount) ? { amount, currency: m[2] || null } : null;
}

function parseFeed(xml) {
  const items = [];
  const re = /<item[\s>][\s\S]*?<\/item>/gi;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const b = m[0];
    items.push({
      id: tag(b, 'g:id'),
      title: tag(b, 'title'),
      productUrl: productUrlFrom(tag(b, 'link')),
      availability: tag(b, 'g:availability'),
      price: money(tag(b, 'g:price')),
      salePrice: money(tag(b, 'g:sale_price')),
      label1: tag(b, 'g:custom_label_1'),
    });
  }
  return items;
}

async function loadFeed() {
  const file = opt('file');
  if (file) return parseFeed(await readFile(file, 'utf8'));

  const url = process.env.ADTRACTION_FEED_URL;
  if (!url) {
    console.error('Saknar ADTRACTION_FEED_URL. Sätt miljövariabeln eller kör med --file.');
    process.exit(2);
  }
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Feed svarade ${res.status} ${res.statusText}`);
    process.exit(2);
  }
  return parseFeed(await res.text());
}

/* ---------- länkar ---------- */

function productUrlFrom(trackingUrl) {
  if (!trackingUrl) return null;
  const i = trackingUrl.indexOf('&url=');
  return i === -1 ? null : decode(trackingUrl.slice(i + 5));
}

function adIdFrom(url) {
  const m = (url || '').match(/[?&]a=(\d+)/);
  return m ? m[1] : null;
}

function normUrl(u) {
  return u ? u.trim().toLowerCase().replace(/\/+$/, '') : null;
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

function validate(reviews, feed) {
  const byUrl = new Map();
  for (const p of feed) {
    const k = normUrl(p.productUrl);
    if (k) byUrl.set(k, p);
  }

  const findings = [];
  const rea = [];
  let smallDiffs = 0;
  let matched = 0;

  const add = (level, slug, type, message) => findings.push({ level, slug, type, message });

  for (const r of reviews) {
    const slug = r.slug || r.file;
    if (r.merchant && r.merchant !== MERCHANT) continue;

    if (!r.affiliateUrl) {
      add('fel', slug, 'saknar-lank', 'affiliateUrl saknas');
      continue;
    }

    const adId = adIdFrom(r.affiliateUrl);
    if (adId && adId !== EXPECTED_AD_ID) {
      add('varning', slug, 'annons-id', `affiliateUrl använder a=${adId}, förväntat a=${EXPECTED_AD_ID}`);
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

    const p = byUrl.get(normUrl(target));
    if (!p) {
      add('varning', slug, 'ur-feed', 'saknas i feeden, troligen slut i lager');
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

  return { findings, rea, smallDiffs, matched };
}

/* ---------- utdata ---------- */

const ORDER = { fel: 0, varning: 1 };
const RUBRIK = { fel: 'FEL', varning: 'VARNING' };

function report(res, counts) {
  const { findings, rea, smallDiffs, matched } = res;

  if (flag('json')) {
    console.log(JSON.stringify({ ...counts, matched, smallDiffs, findings, rea }, null, 2));
    return;
  }

  console.log('\nFeedvalidering FiskeOnline');
  console.log(`${counts.reviews} produktsidor kontrollerade mot ${counts.feed} produkter i feeden`);
  console.log(`${matched} matchade mot feeden\n`);

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
    const pct = Math.round(PRICE_TOLERANCE * 100);
    console.log(`${smallDiffs} reservpriser avviker mindre än ${pct} procent och listas inte`);
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

const feed = await loadFeed();
if (feed.length === 0) {
  console.error('Feeden innehåller inga item-element. Kontrollera att filen är XML.');
  process.exit(2);
}

const reviews = await loadReviews(opt('dir') || GEAR_DIR);
const res = validate(reviews, feed);
report(res, { reviews: reviews.length, feed: feed.length });

if (flag('strict') && res.findings.some((f) => f.level === 'fel')) process.exit(1);
