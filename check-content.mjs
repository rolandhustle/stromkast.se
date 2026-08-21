#!/usr/bin/env node
/**
 * check-content.mjs - innehallsvalidering for Stromkast
 *
 * Kors med:  node check-content.mjs   (eller: npm run check)
 * Tackningsrapport:  node check-content.mjs --coverage  (npm run check:coverage)
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

// Nar GearModul.astro ar live pa art- och tekniksidor genererar targetSpecies och
// techniques riktiga lankar, och brutna varden ska da stoppa bygget. Fram till
// dess racker varningar. Flippa till true samtidigt som modulen deployas.
const GEAR_LINKS_LIVE = false;

// Speglar TEKNIK_ALIAS i src/components/GearModul.astro. HALL TABELLERNA I SYNK.
// jerkbait och wobbler ar betestyper utan tekniksida och ar giltiga varden.
const TEKNIK_ALIAS = {
  jigg: 'jiggfiske',
  spinn: 'spinnfiske',
  dropshot: 'dropshot',
  trolling: 'trolling',
  vertikal: 'vertikalfiske',
  vertikalfiske: 'vertikalfiske',
  mete: 'mete',
  isfiske: 'isfiske',
  flugfiske: 'flugfiske',
  havsfiske: 'havsfiske',
};
const BETESTYPER = new Set(['jerkbait', 'wobbler']);
// Kategorier dar tomma targetSpecies/techniques ar ett medvetet beslut:
// vagnar och bensinmotorer ar inte art- eller teknikspecifika.
const KATEGORIER_UTAN_KOPPLING = new Set(['battrailers', 'utombordare']);

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

const speciesIdByFold = new Map();     // fold(id|slug|titel) -> kanoniskt filnamn
const techIdByKey = new Map();         // id|slug -> kanoniskt filnamn
const speciesFiles = [];               // { id, title }
const techFiles = [];                  // { id, title }
const gearRefs = [];                   // { file, title, species[], techniques[] }

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
    speciesFiles.push({ id, title: title ?? id });
    speciesIdByFold.set(fold(id), id);
    if (slug) speciesIdByFold.set(fold(slug), id);
    if (title) speciesIdByFold.set(fold(title), id);
  }
  if (coll === 'techniques') {
    techFiles.push({ id, title: title ?? id });
    techIdByKey.set(id, id);
    if (slug) techIdByKey.set(slug, id);
  }
  if (coll === 'gear-reviews') {
    gearRefs.push({
      file: f,
      title: title ?? id,
      species: getArray(fm, 'targetSpecies') ?? [],
      techniques: getArray(fm, 'techniques') ?? [],
    });
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
  // Kopplingsfalt i gear-reviews. Fel har ar tysta: ett filter som inte matchar
  // ger noll traffar, inte ett byggfel, sa produkten forsvinner utan varning.
  if (coll === 'gear-reviews') {
    const level = GEAR_LINKS_LIVE ? errors : warnings;

    const kopplingsfri = KATEGORIER_UTAN_KOPPLING.has(getField(fm, 'category'));
    const specs = getArray(fm, 'targetSpecies');
    if (specs === null || specs.length === 0) {
      if (!kopplingsfri) warnings.push(`${file}: targetSpecies saknas eller ar tom. Produkten syns inte pa nagon artsida.`);
    } else {
      for (const v of specs) {
        if (!speciesIds.has(v.toLowerCase())) {
          const guess = speciesIdByFold.get(fold(v));
          level.push(
            `${file}: targetSpecies "${v}" matchar ingen artsida` +
            (guess ? ` (skriv "${guess}")` : '')
          );
        }
      }
    }

    const techs = getArray(fm, 'techniques');
    if (techs === null || techs.length === 0) {
      if (!kopplingsfri) warnings.push(`${file}: techniques saknas eller ar tom. Produkten syns inte pa nagon tekniksida.`);
    } else {
      for (const v of techs) {
        if (BETESTYPER.has(v)) continue;
        const upplost = TEKNIK_ALIAS[v] ?? v;
        if (!techIdByKey.has(upplost)) {
          const guess = [...techIdByKey.keys()].find((k) => k.startsWith(v) || v.startsWith(k));
          level.push(
            `${file}: techniques "${v}" matchar ingen tekniksida` +
            (guess ? ` (menade du "${guess}"?)` : '')
          );
        }
      }
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

/**
 * Innehallspastaenden som bryter mot reglerna i BESLUT.md och CLAUDE.md.
 *
 * Varningar, inte fel: monstren ar heuristiska och kan sla fel. De fangar de
 * aterkommande fallen fran genomgangen i augusti 2026, da 30 produktsidor
 * visade sig innehalla prisrelativa jamforelser, uppfunnen precision och
 * superlativ utan underlag. BESLUT.md skrevs i juli, alltsa efter att sidorna
 * skapades i maj och juni, sa texterna brot inte mot nagot nar de skrevs.
 * Kontrollen finns for att samma fel inte ska uppsta igen.
 */
const CLAIM_PATTERNS = [
  {
    re: /\d[\d\s]*\s?(kr|kronor)\s+(billigare|dyrare|mer|mindre|lagre|l\u00e4gre|hogre|h\u00f6gre|extra)/i,
    why: 'prisrelativ jamforelse i kronor, aldras inom dagar',
  },
  {
    re: /\d+\s*(procent|%)\s+av\s+(prestandan|kapaciteten|kvaliteten|funktionen)/i,
    why: 'uppfunnen precision, andelen gar inte att mata',
  },
  {
    re: /(marknadens|varldens|v\u00e4rldens)\s+(basta|b\u00e4sta|framsta|fr\u00e4msta|mest)/i,
    why: 'superlativ om marknaden utan underlag',
  },
  {
    re: /b(a|\u00e4)st[ae]?\s+(pa|p\u00e5|i)\s+marknaden/i,
    why: 'superlativ om marknaden utan underlag',
  },
  {
    re: /ett\s+av\s+de\s+b(a|\u00e4)sta\s+alternativen/i,
    why: 'superlativ utan underlag',
  },
  {
    re: /utan\s+(motstycke|konkurrens)/i,
    why: 'superlativ utan underlag',
  },
  {
    re: /(inget|ingen|inga)\s+(direkt\s+)?j(a|\u00e4)mf(o|\u00f6)rbar/i,
    why: 'pastaende om att inget alternativ finns, gar inte att belagga',
  },
  {
    re: /\bidag\b/i,
    why: 'skriv "i dag" i tva ord',
  },
  {
    re: /\bgratis\b/i,
    why: 'skriv "kostnadsfri"',
  },
  {
    re: /\S\s--\s\S/,
    why: 'dubbelt bindestreck som tankstreck, byt mot komma, kolon eller punkt',
  },
  {
    re: /[a-z\u00e5\u00e4\u00f6] - [a-z\u00e5\u00e4\u00f6]/i,
    why: 'spatierat bindestreck som tankstreck, byt mot komma, kolon eller punkt',
  },
];

function checkClaims(file, text) {
  text.split('\n').forEach((line, idx) => {
    // YAML-listrader borjar med "- " och ar inte tankstreck.
    const prose = line.replace(/^\s*-\s/, '');
    for (const { re, why } of CLAIM_PATTERNS) {
      if (re.test(prose)) warnings.push(`${file}:${idx + 1}: ${why}`);
    }
  });
}

/**
 * Filer helt utan svenska tecken.
 *
 * 30 av 94 gear-reviews skapades maj-juni 2026 utan a, a och o genomgaende,
 * vilket var synligt for lasaren pa publicerade sidor. Felet upptacktes forst
 * i augusti. En svensk innehallsfil utan ett enda svenskt tecken ar nastan
 * alltid ett teckenkodningsfel.
 */
/** Kortare an sa ar for lite text for att slutsatsen ska halla. */
const SWEDISH_MIN_CHARS = 200;

function checkSwedishChars(file, text) {
  const svenska = /[\u00e5\u00e4\u00f6\u00c5\u00c4\u00d6]/;

  if (!svenska.test(text)) {
    warnings.push(`${file}: inga svenska tecken i hela filen, kontrollera teckenkodning`);
    return;
  }

  // Per stycke, inte per fil. En fil kan ha korrekt frontmatter och trasig
  // brodtext, vilket den tidigare filnivakontrollen slapp igenom.
  const rader = text.split('\n');
  let stycke = [];
  let start = 0;

  const provaStycke = () => {
    const prosa = stycke.join(' ').trim();
    stycke = [];
    if (prosa.length < SWEDISH_MIN_CHARS) return;
    if (svenska.test(prosa)) return;
    warnings.push(
      `${file}:${start + 1}: stycke pa ${prosa.length} tecken utan svenska tecken, kontrollera teckenkodning`
    );
  };

  // Tabellrader och kodblock ar inte prosa. En specifikationstabell med
  // produktnamn, matt och enheter saknar diakriter av naturliga skal.
  let iKodblock = false;

  rader.forEach((rad, idx) => {
    const t = rad.trim();

    if (t.startsWith('```')) {
      iKodblock = !iKodblock;
      provaStycke();
      return;
    }
    if (iKodblock || t.startsWith('|')) {
      provaStycke();
      return;
    }

    if (t === '') {
      provaStycke();
    } else {
      if (stycke.length === 0) start = idx;
      stycke.push(rad);
    }
  });
  provaStycke();
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
  if (!f.endsWith('.json')) checkClaims(f, raw);
  if (!f.endsWith('.json')) checkSwedishChars(f, raw);
}

// --- Tackning: hur manga produkter varje art- och tekniksida kan visa ---
const perSpecies = new Map(speciesFiles.map((s) => [s.id, 0]));
const perTech = new Map(techFiles.map((t) => [t.id, 0]));

for (const g of gearRefs) {
  const seenS = new Set();
  for (const v of g.species) {
    const id = speciesIdByFold.get(fold(v));
    if (id && !seenS.has(id)) { perSpecies.set(id, perSpecies.get(id) + 1); seenS.add(id); }
  }
  const seenT = new Set();
  for (const v of g.techniques) {
    const id = techIdByKey.get(TEKNIK_ALIAS[v] ?? v);
    if (id && !seenT.has(id)) { perTech.set(id, perTech.get(id) + 1); seenT.add(id); }
  }
}

// Varna bara pa noll. Full fordelning far du med --coverage.
for (const [id, n] of perSpecies) {
  if (n === 0) warnings.push(`artsida "${id}": noll matchande produkter, utrustningsmodulen blir tom`);
}
for (const [id, n] of perTech) {
  if (n === 0) warnings.push(`tekniksida "${id}": noll matchande produkter, utrustningsmodulen blir tom`);
}

// --- Rapport ---
console.log(`\nKontrollerade ${files.length} innehallsfiler.\n`);

if (process.argv.includes('--coverage')) {
  const rad = ([id, n]) => `  ${id.padEnd(26)} ${String(n).padStart(3)}`;
  const fallande = (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]);
  console.log('TACKNING, produkter per artsida:');
  [...perSpecies.entries()].sort(fallande).forEach((e) => console.log(rad(e)));
  console.log('\nTACKNING, produkter per tekniksida:');
  [...perTech.entries()].sort(fallande).forEach((e) => console.log(rad(e)));
  console.log('');
}

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