/**
 * finish-intro.mjs
 *
 * Efterarbete till add-intro.mjs.
 *
 * PROBLEMET
 *
 * add-intro.mjs lyfte ETT stycke per sida. Pa de flesta sidor lag bara ett
 * stycke fore forsta underrubriken, sa brodtexten borjar nu direkt med
 * "## Fiskekort och regler". Bra. Men mallens rubrik "Om {titel}" star da tom,
 * med en underrubrik direkt under sig.
 *
 * Pa ett par sidor (Morrum, Bolmen) lag DVA stycken fore forsta rubriken. Tar
 * vi bara bort mallrubriken svavar det andra stycket hemlost.
 *
 * LOSNINGEN
 *
 * Flytta ALL prosa som ligger fore forsta underrubriken upp i intro. Da far
 * alla 48 sidor samma struktur: ingress overst, brodtext som borjar med
 * "## Fiskekort och regler". Rubriken "Om {titel}" kan da tas bort ur mallen
 * utan undantag, och det finns inga specialfall att underhalla.
 *
 * Skriptet stadar ocksa bort en naken --- som blivit kvar forst i brodtexten
 * (Kavlingean), eftersom den renderas som en horisontell linje och i varsta
 * fall kan tolkas som ny frontmatter.
 *
 * Torrkorning:  node finish-intro.mjs
 * Skriv:        node finish-intro.mjs --write
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DIR   = 'src/content/destinations';
const WRITE = process.argv.includes('--write');

function toBlockScalar(text, width = 88) {
  const words = text.replace(/\s+/g, ' ').trim().split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    if ((line + ' ' + w).trim().length > width) {
      lines.push(line.trim());
      line = w;
    } else {
      line += ' ' + w;
    }
  }
  if (line.trim()) lines.push(line.trim());
  return 'intro: >-\n' + lines.map((l) => '  ' + l).join('\n');
}

const files = (await readdir(DIR)).filter((f) => /\.mdx?$/.test(f)).sort();

let moved = 0, cleaned = 0, untouched = 0;

for (const file of files) {
  const full = path.join(DIR, file);
  const raw  = await readFile(full, 'utf8');

  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) { console.log(`  HOPPAR  ${file}: kunde inte lasa frontmatter`); continue; }

  let [, fm, body] = m;

  // --- Las ut befintlig intro (blockskalar, ligger sist i frontmattern) -----
  const introMatch = fm.match(/\nintro: >-\n((?:  .*\n?)+)$/);
  if (!introMatch) { console.log(`  HOPPAR  ${file}: hittade ingen intro`); continue; }

  const existingIntro = introMatch[1]
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .join(' ');

  const fmWithoutIntro = fm.slice(0, introMatch.index).trimEnd();

  // --- Stada bort naken --- forst i brodtexten -----------------------------
  const hadRule = /^\s*---\s*\n/.test(body);
  if (hadRule) { body = body.replace(/^\s*---\s*\n/, ''); cleaned++; }

  // --- Samla prosa som ligger fore forsta rubriken --------------------------
  const paras = body.split(/\n\s*\n/);
  const lead = [];
  let i = 0;

  for (; i < paras.length; i++) {
    const p = paras[i].trim();
    if (!p) continue;
    if (/^#/.test(p)) break;                       // forsta rubriken, stopp
    if (/^(import|export)\s/.test(p)) continue;    // lamna importer i kroppen
    if (/^</.test(p)) break;                       // JSX, ror inte
    lead.push(p.replace(/\s+/g, ' '));
  }

  if (!lead.length) {
    if (hadRule) {
      const out = `---\n${fmWithoutIntro}\n${toBlockScalar(existingIntro)}\n---\n\n${body.trimStart()}`;
      console.log(`  ${WRITE ? 'STADAR ' : 'SKULLE '} ${file.padEnd(28)} tog bort naken ---`);
      if (WRITE) await writeFile(full, out, 'utf8');
    } else {
      untouched++;
    }
    continue;
  }

  // --- Slå ihop och skriv om ------------------------------------------------
  const newIntro = [existingIntro, ...lead].join(' ');
  const newBody  = paras.slice(i).join('\n\n').trimStart();
  const out = `---\n${fmWithoutIntro}\n${toBlockScalar(newIntro)}\n---\n\n${newBody}`;

  const words = newIntro.split(' ').length;
  console.log(
    `  ${WRITE ? 'FLYTTAR' : 'SKULLE '} ${file.padEnd(28)} ` +
    `+${lead.length} stycke${lead.length > 1 ? 'n' : ''} till intro (nu ${words} ord)`
  );
  moved++;

  if (WRITE) await writeFile(full, out, 'utf8');
}

console.log('');
console.log(`  ${moved} sidor fick prosa flyttad, ${cleaned} nakna --- stadade, ${untouched} redan klara.`);

if (!WRITE) {
  console.log('\n  Torrkorning. Kor med --write for att skriva.\n');
} else {
  console.log('\n  Ta nu bort raden med "Om {d.title}" ur [slug].astro.');
  console.log('  Kor sedan: npm run check && npm run build\n');
}
