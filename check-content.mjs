#!/usr/bin/env node
/**
 * check-content.mjs - innehallsvalidering for Stromkast
 *
 * Kors med:  node check-content.mjs   (eller: npm run check)
 *
 * Strukturfel (brutna slug-referenser, interna lankar utan avslutande slash,
 * gear-review med felaktig category) ger avslutskod 1 sa att ett bygge kan
 * stoppas. Stilvarningar (en-streck med mellanslag, em-streck) skrivs ut men
 * paverkar inte avslutskoden.
 *
 * Konventioner som respekteras:
 *   topDestinations, targetTechniques -> valideras mot SLUGS
 *   targetSpecies, primarySpecies     -> valideras mot ARTNAMN (titel eller slug)
 *   gear-reviews category             -> valideras mot gear-kategorins SLUG
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'src/content';

function walk(dir) {
  if (!existsSync(dir)) return [];
  let out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out = out.concat(walk(p));
    else if (/\.(mdx?|json)$/.test(name)) out.push(p);
  }
  return out;
}

function splitFrontmatter(text) {
  if (text.startsWith('---')) {
    const end = text.indexOf('\n---', 3);
    if (end !== -1) return { fm: text.slice(3, end), body: text.slice(end + 4) };
  }
  return { fm: text, body: '' };
}

function getField(fm, field) {
  const m = fm.match(new RegExp(`^${field}:\\s*["']?(.+?)["']?\\s*$`, 'm'));
  return m ? m[1].trim() : null;
}

// Hanterar bade inline ["a", "b"] och block-yaml (rader med "  - value")
function getArray(fm, field) {
  const lines = fm.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(new RegExp(`^${field}:\\s*(.*)$`));
    if (!m) continue;
    const rest = m[1].trim();
    if (rest.startsWith('[')) {
      const inner = rest.replace(/^\[/, '').replace(/\]$/, '');
      if (!inner.trim()) return [];
      return inner.split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
    }
    const vals = [];
    for (let j = i + 1; j < lines.length; j++) {
      const bm = lines[j].match(/^\s*-\s*(.+)$/);
      if (bm) vals.push(bm[1].trim().replace(/^["']|["']$/g, ''));
      else if (/^\S/.test(lines[j])) break;
      else if (lines[j].trim() === '') continue;
      else break;
    }
    return vals;
  }
  return null;
}

// --- Samla giltiga identifierare ---
// Rutterna byggs pa filnamnet (entry.id), men frontmatter-slug kan skilja sig,
// sa vi accepterar bada. Arter matchas dessutom mot titel (artnamn).
const files = walk(ROOT);
const destSlugs = new Set();
const techSlugs = new Set();
const speciesIds = new Set();          // lowercased: filnamn, slug och titel
const speciesTitleByFold = new Map();  // fold(slug|titel) -> kanoniskt visningsnamn
const gearCategorySlugs = new Set();   // filnamn + JSON-slug for gear-categories
const gearReviewSlugs = new Set();     // filnamn + slug for gear-reviews (ProduktRuta)

function baseId(path) {
  return path.split('/').pop().replace(/\.(mdx?|json)$/, '');
}

// Vik ner till ASCII-nyckel sa att "gadda" och "gädda" hamnar pa samma plats.
function fold(s) {
  return s.toLowerCase().replace(/[åä]/g, 'a').replace(/ö/g, 'o');
}

for (const f of files) {
  const coll = f.split('/')[2];
  const { fm } = splitFrontmatter(readFileSync(f, 'utf-8'));
  const slug = getField(fm, 'slug');
  const title = getField(fm, 'title');
  const id = baseId(f);
  if (coll === 'destinations') { destSlugs.add(id); if (slug) destSlugs.add(slug); }
  if (coll === 'techniques') { techSlugs.add(id); if (slug) techSlugs.add(slug); }
  if (coll === 'gear-reviews') { gearReviewSlugs.add(id); if (slug) gearReviewSlugs.add(slug); }
  if (coll === 'gear-categories') {
    // JSON-fil: getField traffar inte "slug": "...", sa las slug via JSON ocksa.
    gearCategorySlugs.add(id);
    try {
      const j = JSON.parse(readFileSync(f, 'utf-8'));
      if (j.slug) gearCategorySlugs.add(j.slug);
    } catch { /* trasig JSON fangas av Astros schema vid bygge */ }
  }
  if (coll === 'species') {
    speciesIds.add(id.toLowerCase());
    if (slug) speciesIds.add(slug.toLowerCase());
    if (title) speciesIds.add(title.toLowerCase());
    if (title) {
      speciesTitleByFold.set(fold(id), title);
      if (slug) speciesTitleByFold.set(fold(slug), title);
      speciesTitleByFold.set(fold(title), title);
    }
  }
}

// --- Kontroller ---
const errors = [];
const warnings = [];

const MONTHS = 'januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december';

function checkRefs(file, coll, fm) {
  // Felregler: dessa falt genererar lankar, brutna varden ger trasiga lankar.
  const errorRules = [];
  if (coll === 'species') {
    errorRules.push(['targetTechniques', techSlugs, 'teknik']);
    errorRules.push(['topDestinations', destSlugs, 'destination']);
  }
  if (coll === 'techniques') {
    errorRules.push(['targetSpecies', speciesIds, 'art']);
    errorRules.push(['topDestinations', destSlugs, 'destination']);
  }
  for (const [field, valid, kind] of errorRules) {
    const arr = getArray(fm, field);
    if (!arr) continue;
    for (const v of arr) {
      const probe = kind === 'art' ? v.toLowerCase() : v;
      if (!valid.has(probe)) {
        errors.push(`${file}: ${field} "${v}" matchar ingen befintlig ${kind}`);
      }
    }
  }
  // Felregel: gear-review category maste vara en gear-kategoris slug.
  // Kategorisidan filtrerar pa "review.data.category === cat.data.slug", sa
  // fel skiftlage eller displaynamn ger en TOM kategorisida utan felmeddelande.
  // category ar z.string() i schemat, sa Astro fangar inte detta vid bygge.
  if (coll === 'gear-reviews') {
    const cat = getField(fm, 'category');
    if (cat && !gearCategorySlugs.has(cat)) {
      errors.push(
        `${file}: category "${cat}" matchar ingen gear-kategori. ` +
        `Anvand kategorins slug med sma bokstaver (t.ex. flatlinor, fluorocarbon, nylon), inte displaynamnet.`
      );
    }
  }
  // Varningsregel: primarySpecies ar visningstext.
  // - Art utan egen sida: ok om avsiktligt.
  // - Art med sida men i slug-/fel form: bor skrivas som visningsnamn.
  if (coll === 'destinations') {
    const arr = getArray(fm, 'primarySpecies');
    if (arr) {
      for (const v of arr) {
        const canonical = speciesTitleByFold.get(fold(v));
        if (!canonical) {
          warnings.push(`${file}: primarySpecies "${v}" saknar artsida (ok om avsiktligt)`);
        } else if (v !== canonical) {
          warnings.push(`${file}: primarySpecies "${v}" bor skrivas "${canonical}"`);
        }
      }
    }
  }
}

function checkLinks(file, text) {
  const linkRe = /\]\((\/[^)\s]*)\)/g;
  let m;
  while ((m = linkRe.exec(text)) !== null) {
    const path = m[1];
    if (path.includes('#')) continue;                 // ankarlank
    const last = path.split('/').filter(Boolean).pop() || '';
    if (last.includes('.')) continue;                 // fil, t.ex. /rss.xml
    if (!path.endsWith('/')) {
      errors.push(`${file}: intern lank "${path}" saknar avslutande slash`);
    }
  }
}

function checkDashes(file, text) {
  const lines = text.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('—')) {
      warnings.push(`${file}:${idx + 1}: em-streck (—) - byt mot komma, kolon eller punkt`);
    }
    // en-streck med mellanslag, men inte i intervall (manad-manad / siffra-siffra)
    if (/ – /.test(line)) {
      const rangeOnly = line
        .replace(new RegExp(`(${MONTHS})\\s*–\\s*(${MONTHS})`, 'gi'), '')
        .replace(/\d\s*–\s*\d/g, '');
      if (/ – /.test(rangeOnly)) {
        warnings.push(`${file}:${idx + 1}: en-streck med mellanslag ( – ) i lopande text`);
      }
    }
  });
}

// Varningsregel: kampanjpriser med slutdatum ("gäller till 29 juli 2026").
// Passerat datum betyder fel pris pa sajten. Varning, inte fel, sa att
// schemalagda byggen inte stoppas av att ett datum passerar.
// Forvarning ges KAMPANJ_DAGAR dagar innan (standard 3).
const MONTH_INDEX = Object.fromEntries(MONTHS.split('|').map((m, i) => [m, i]));

function checkCampaignDates(file, text) {
  const re = new RegExp(`g[aä]ller till(?: den)?\\s+(\\d{1,2})\\s+(${MONTHS})\\s+(\\d{4})`, 'gi');
  const horizon = Number(process.env.KAMPANJ_DAGAR) || 3;
  let m;
  while ((m = re.exec(text)) !== null) {
    const d = new Date(Number(m[3]), MONTH_INDEX[m[2].toLowerCase()], Number(m[1]), 23, 59, 59);
    const daysLeft = Math.ceil((d - new Date()) / 86400000);
    if (daysLeft < 0) {
      warnings.push(`${file}: kampanjdatum "${m[1]} ${m[2]} ${m[3]}" har passerat - uppdatera pris och text`);
    } else if (daysLeft <= horizon) {
      warnings.push(`${file}: kampanjdatum "${m[1]} ${m[2]} ${m[3]}" gar ut om ${daysLeft} dagar`);
    }
  }
}


// Felregel: <ProduktRuta slug="..."> maste peka pa en befintlig gear-review,
// annars kastar komponenten vid bygge. Fanga det redan i npm run check.
function checkProduktRuta(file, text) {
  const re = /<ProduktRuta\s+slug="([^"]+)"/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (!gearReviewSlugs.has(m[1])) {
      errors.push(`${file}: ProduktRuta slug "${m[1]}" matchar ingen gear-review`);
    }
  }
}

for (const f of files) {
  const coll = f.split('/')[2];
  const raw = readFileSync(f, 'utf-8');
  const { fm, body } = splitFrontmatter(raw);
  checkRefs(f, coll, fm);
  checkLinks(f, raw);
  if (!f.endsWith('.json')) checkDashes(f, raw);
  if (!f.endsWith('.json')) checkCampaignDates(f, raw);
  if (!f.endsWith('.json')) checkProduktRuta(f, raw);
}

// --- Rapport ---
console.log(`\nKontrollerade ${files.length} innehallsfiler.\n`);

if (warnings.length) {
  console.log(`VARNINGAR (${warnings.length}):`);
  for (const w of warnings) console.log('  ! ' + w);
  console.log('');
}

if (errors.length) {
  console.log(`FEL (${errors.length}):`);
  for (const e of errors) console.log('  x ' + e);
  console.log('\nByggning bor stoppas tills felen ar atgardade.');
  process.exit(1);
}

console.log(warnings.length ? 'Inga strukturfel. Se varningar ovan.' : 'Allt rent. Inga fel eller varningar.');
process.exit(0);
