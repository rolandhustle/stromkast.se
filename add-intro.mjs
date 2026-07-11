/**
 * add-intro.mjs
 *
 * Lyfter forsta stycket ur varje destinations brodtext till ett nytt
 * frontmatterfalt `intro`, sa att mallen kan rendera det hogst upp pa sidan.
 *
 * VARFOR
 *
 * I dag landar en lasare pa Helge a och moter hero, sedan tre datapaneler,
 * innan sidan berattar vad Helge a faktiskt AR. Sidan bor saga vad platsen ar
 * innan den sager dagens vindstyrka. Det galler oavsett vad Google gor.
 *
 * Att det forsta stycket ocksa ar det mest citerbara (fakta, siffror,
 * fristaende) ar en bonus, inte skalet.
 *
 * STYCKET FLYTTAS, DET DUPLICERAS INTE. En sida ska inte saga samma sak tva
 * ganger.
 *
 * Kor forst utan flagga for att se vad som skulle handa:
 *   node add-intro.mjs
 *
 * Skriv sedan pa riktigt:
 *   node add-intro.mjs --write
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DIR   = 'src/content/destinations';
const WRITE = process.argv.includes('--write');

/** Bryt en lang rad till YAML-blockskalar med 2 stegs indrag. */
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

let changed = 0;
let skipped = 0;

for (const file of files) {
  const full = path.join(DIR, file);
  const raw = await readFile(full, 'utf8');

  // Frontmatter ligger mellan de tva forsta --- pa egen rad
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) {
    console.log(`  HOPPAR  ${file.padEnd(28)} kunde inte lasa frontmatter`);
    skipped++;
    continue;
  }

  const [, fm, body] = m;

  if (/^intro:/m.test(fm)) {
    console.log(`  KLART   ${file.padEnd(28)} har redan intro`);
    skipped++;
    continue;
  }

  // Dela brodtexten i stycken och hitta det forsta som ar riktig prosa
  const paras = body.split(/\n\s*\n/);

  let idx = -1;
  for (let i = 0; i < paras.length; i++) {
    const p = paras[i].trim();
    if (!p) continue;
    // Hoppa over importer, JSX, rubriker och listor
    if (/^(import|export)\s/.test(p)) continue;
    if (/^[<#\-*>|]/.test(p)) continue;
    idx = i;
    break;
  }

  if (idx === -1) {
    console.log(`  HOPPAR  ${file.padEnd(28)} hittade inget prosastycke`);
    skipped++;
    continue;
  }

  const intro = paras[idx].trim().replace(/\s+/g, ' ');
  const words = intro.split(' ').length;

  // Ta bort stycket ur brodtexten
  paras.splice(idx, 1);
  const newBody = paras.join('\n\n').replace(/^\n+/, '');

  const newFm = fm.trimEnd() + '\n' + toBlockScalar(intro);
  const out = `---\n${newFm}\n---\n\n${newBody.trimStart()}`;

  console.log(`  ${WRITE ? 'SKRIVER' : 'SKULLE '} ${file.padEnd(28)} ${String(words).padStart(3)} ord: ${intro.slice(0, 60)}...`);

  if (WRITE) await writeFile(full, out, 'utf8');
  changed++;
}

console.log('');
console.log(`  ${changed} filer ${WRITE ? 'ändrade' : 'skulle ändras'}, ${skipped} hoppades over.`);

if (!WRITE) {
  console.log('\n  Detta var en torrkorning. Kor med --write for att skriva pa riktigt.');
  console.log('  Committa forst, sa kan du angra med git checkout om nagot blir fel.\n');
} else {
  console.log('\n  Kor nu: npm run check && npm run build\n');
}
