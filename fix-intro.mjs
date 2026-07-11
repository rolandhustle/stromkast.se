/**
 * fix-intro.mjs
 *
 * Stadar tva fel som finish-intro.mjs lamnade efter sig i ingresserna.
 *
 * FEL 1: kostradsnotisen ("**Att ata fangsten:** ... langre ned.")
 *   Den ar en HANVISNING till en sektion langre ned pa sidan, inte prosa. En
 *   ingress som slutar med "las mer langre ned" ar oskick. Drabbar Dalalven
 *   och Siljan, dar notisen lag fore forsta rubriken.
 *
 * FEL 2: avslutande horisontell linje (---)
 *   Skriptet drog med avdelaren som lag efter sista stycket. Drabbar Bolmen,
 *   Morrum, Dalalven och Siljan.
 *
 * Notisen laggs tillbaka forst i brodtexten, dar den lag. Strecket kastas.
 *
 * Torrkorning:  node fix-intro.mjs
 * Skriv:        node fix-intro.mjs --write
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DIR   = 'src/content/destinations';
const WRITE = process.argv.includes('--write');

// Notisen borjar med fetstil och slutar vid meningens punkt. Ankaret ar
// fetstilen, inte frasen "langre ned", eftersom den aven forekommer i prosa
// ("chansen pa vildlax langre ned" i Vindelalven).
const NOTICE = /\*\*Att äta fångsten:\*\*[^*]*?längre ned\./;

function toBlockScalar(text, width = 88) {
  const words = text.replace(/\s+/g, ' ').trim().split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    if ((line + ' ' + w).trim().length > width) { lines.push(line.trim()); line = w; }
    else line += ' ' + w;
  }
  if (line.trim()) lines.push(line.trim());
  return 'intro: >-\n' + lines.map((l) => '  ' + l).join('\n');
}

const files = (await readdir(DIR)).filter((f) => /\.mdx?$/.test(f)).sort();
let fixed = 0;

for (const file of files) {
  const full = path.join(DIR, file);
  const raw  = await readFile(full, 'utf8');

  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) continue;
  const [, fm, body] = m;

  const im = fm.match(/\nintro: >-\n((?:  .*\n?)+)$/);
  if (!im) continue;

  let intro = im[1].split('\n').map((l) => l.trim()).filter(Boolean).join(' ');
  const before = intro;

  // Plocka ut notisen om den finns
  const hit = intro.match(NOTICE);
  const notice = hit ? hit[0].trim() : null;
  if (notice) intro = intro.replace(NOTICE, ' ');

  // Stada avslutande streck och dubbla mellanslag
  intro = intro.replace(/\s*---\s*$/, '').replace(/\s+/g, ' ').trim();

  if (intro === before) continue;   // inget att gora

  const fmClean = fm.slice(0, im.index).trimEnd();
  const newFm   = fmClean + '\n' + toBlockScalar(intro);
  const newBody = notice
    ? `${notice}\n\n---\n\n${body.trimStart()}`
    : body.trimStart();

  const flags = [notice ? 'kostrådsnotis' : null, /---\s*$/.test(before) ? 'streck' : null]
    .filter(Boolean).join(' + ');

  console.log(`  ${WRITE ? 'FIXAR ' : 'SKULLE'} ${file.padEnd(16)} tar bort ${flags}`);
  console.log(`         slutar nu: ...${intro.slice(-72)}\n`);
  fixed++;

  if (WRITE) await writeFile(full, `---\n${newFm}\n---\n\n${newBody}`, 'utf8');
}

console.log(`  ${fixed} filer ${WRITE ? 'fixade' : 'skulle fixas'}.`);
console.log(WRITE
  ? '\n  Kor nu: npm run check && npm run build\n'
  : '\n  Torrkorning. Kor med --write for att skriva.\n');
