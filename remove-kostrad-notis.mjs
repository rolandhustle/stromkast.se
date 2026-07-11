/**
 * remove-kostrad-notis.mjs
 *
 * Tar bort raden "**Att ata fangsten:** Det finns kostrad att kanna till for
 * fisk fran det har vattnet. Las mer under Kostrad och miljogifter langre ned."
 * ur brodtexten, tillsammans med strecken som ramar in den.
 *
 * VARFOR
 *
 * Notisen sager bara att det finns kostrad och att de star langre ned. Den
 * svarar inte pa vilket kostrad, varfor, eller vad lasaren ska gora. Den ar en
 * innehallsforteckning pa en rad. Den som ser den maste anda scrolla, och den
 * som inte ser den hittar sektionen anda.
 *
 * Sjalva kostradssektionen langre ned star kvar och gor jobbet. Ingen
 * information forsvinner.
 *
 * Skriptet tar bort notisen OCH strecken runt den, men bara de strecken.
 * Avdelare langre ned i dokumentet lamnas ororda.
 *
 * Torrkorning:  node remove-kostrad-notis.mjs
 * Skriv:        node remove-kostrad-notis.mjs --write
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DIR   = 'src/content/destinations';
const WRITE = process.argv.includes('--write');

// Notisen med omgivande streck och tomrader. Ankaret ar fetstilen.
// Strecken ar valfria, eftersom de kan saknas i enstaka filer.
const BLOCK = /\n*(?:^---[ \t]*\n\n)?^\*\*Att äta fångsten:\*\*[^\n]*\n(?:\n^---[ \t]*\n)?/m;

const files = (await readdir(DIR)).filter((f) => /\.mdx?$/.test(f)).sort();
let hits = 0;

for (const file of files) {
  const full = path.join(DIR, file);
  const raw  = await readFile(full, 'utf8');

  const m = raw.match(/^(---\n[\s\S]*?\n---\n)([\s\S]*)$/);
  if (!m) { console.log(`  ${file}: kunde inte lasa frontmatter`); continue; }

  const [, frontmatter] = m;
  let body = m[2];

  if (!/\*\*Att äta fångsten:\*\*/.test(body)) continue;

  const before = body;
  body = body.replace(BLOCK, '\n\n');
  body = body.replace(/\n{3,}/g, '\n\n');

  if (body === before) {
    console.log(`  ${file.padEnd(28)} HITTADE NOTIS MEN KUNDE INTE TA BORT DEN`);
    continue;
  }

  // Kontroll: notisen ska vara borta, och inget annat ska ha forsvunnit
  const kvar = /\*\*Att äta fångsten:\*\*/.test(body);
  const tappat = before.replace(BLOCK, '').length - body.length;

  console.log(
    `  ${WRITE ? 'TAR BORT' : 'SKULLE  '} ${file.padEnd(26)}` +
    (kvar ? '  VARNING: notis kvar!' : '')
  );

  hits++;
  if (WRITE) await writeFile(full, frontmatter + '\n' + body.trimStart() + '\n', 'utf8');
}

console.log(`\n  ${hits} filer ${WRITE ? 'andrade' : 'skulle andras'}.`);
console.log(WRITE
  ? '\n  Kor nu: npm run check && npm run build\n'
  : '\n  Torrkorning. Kor med --write for att skriva.\n');
