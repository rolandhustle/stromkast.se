/**
 * move-kostrad.mjs
 *
 * Lagger tillbaka kostradsnotisen dar den hor hemma i Dalalven och Siljan.
 *
 * BAKGRUND
 *
 * fix-intro.mjs plockade ut notisen ur ingressen, vilket var ratt, men lade
 * den forst i brodtexten, vilket var fel. I de 40 friska filerna ligger den
 * SIST i regelsektionen, avgransad med ett streck fore och ett efter:
 *
 *     ... regeltext ...
 *
 *     ---
 *
 *     **Att ata fangsten:** ...
 *
 *     ---
 *
 *     ## Nasta rubrik
 *
 * Det ar logiskt: har man just last om fredningar och regler ar kostradet
 * nasta sak att veta.
 *
 * Torrkorning:  node move-kostrad.mjs
 * Skriv:        node move-kostrad.mjs --write
 */

import { readFile, writeFile } from 'node:fs/promises';

const WRITE = process.argv.includes('--write');
const FILES = [
  'src/content/destinations/dalalven.mdx',
  'src/content/destinations/siljan.mdx',
];

for (const path of FILES) {
  const raw = await readFile(path, 'utf8');

  const m = raw.match(/^(---\n[\s\S]*?\n---\n)([\s\S]*)$/);
  if (!m) { console.log(`  ${path}: kunde inte lasa frontmatter`); continue; }

  const frontmatter = m[1];
  let body = m[2];

  // --- 1. Plocka ut notisen -------------------------------------------------
  const nm = body.match(/^\*\*Att äta fångsten:\*\*[^\n]*$/m);
  if (!nm) { console.log(`  ${path}: ingen notis, hoppar`); continue; }
  const notice = nm[0];

  body = body.slice(0, nm.index) + body.slice(nm.index + notice.length);

  // --- 2. Stada bort ledande tomrader och ETT ledande streck ----------------
  // Bara i borjan. Ror inte avdelare langre ned i dokumentet.
  body = body.replace(/^\s*\n/, '');
  body = body.replace(/^---[ \t]*\n\s*/, '');
  body = body.replace(/^\s+/, '');

  // --- 3. Hitta regelsektionen och nasta rubrik pa samma niva ----------------
  const heading = body.match(/^## Fiskekort och regler[ \t]*$/m);
  if (!heading) { console.log(`  ${path}: ingen regelsektion, hoppar`); continue; }

  const after = body.slice(heading.index + heading[0].length);
  const next  = after.match(/^## /m);

  const insertAt = next
    ? heading.index + heading[0].length + next.index
    : body.length;

  // --- 4. Satt in notisblocket ----------------------------------------------
  const before = body.slice(0, insertAt).replace(/\s+$/, '');
  const rest   = body.slice(insertAt);

  body = `${before}\n\n---\n\n${notice}\n\n---\n\n${rest}`.replace(/\n{3,}/g, '\n\n');

  const out = frontmatter + '\n' + body.trimStart() + '\n';

  // --- 5. Visa resultatet ---------------------------------------------------
  const lines = out.split('\n');
  const i = lines.findIndex((l) => l.includes('Att äta fångsten'));
  console.log(`\n  ${WRITE ? 'SKRIVER' : 'SKULLE '} ${path}`);
  for (let n = Math.max(0, i - 4); n < Math.min(lines.length, i + 4); n++) {
    console.log((n === i ? '  >>> ' : '      ') + lines[n].slice(0, 68));
  }

  if (WRITE) await writeFile(path, out, 'utf8');
}

console.log(WRITE
  ? '\n  Klart. Kor: npm run check && npm run build\n'
  : '\n  Torrkorning. Kor med --write for att skriva.\n');
