/**
 * restore-rules.mjs
 *
 * ATERSTALLER de horisontella avdelare (---) som felaktigt raderades ur tolv
 * destinationsfiler.
 *
 * VAD SOM HANDE
 *
 * Efter att kostradsnotisen tagits bort lag ett ensamt streck kvar dar den
 * hade statt. Jag antog att ALLA streck fore en rubrik var sadana rester och
 * raderade dem. Men i tolv filer var strecken ett medvetet formatgrepp,
 * avdelare mellan sektioner genom hela dokumentet. Vanern hade nio i
 * brodtexten. Sex till atta per fil forsvann.
 *
 * ATERSTALLNINGEN
 *
 * Skriptet laser den senast committade versionen ur git, ser vilka rubriker
 * som hade ett streck fore sig, och lagger tillbaka strecken fore exakt samma
 * rubriker i den nuvarande filen. Dagens ingressarbete ror det inte.
 *
 * Notisens EGET streck laggs inte tillbaka, eftersom notisen ar borttagen med
 * flit. Det kanns igen pa att det statt precis fore den nu raderade notisen.
 *
 * Torrkorning:  node restore-rules.mjs
 * Skriv:        node restore-rules.mjs --write
 */

import { readFile, writeFile } from 'node:fs/promises';
import { execSync } from 'node:child_process';

const WRITE = process.argv.includes('--write');

const FILES = [
  'bolmen', 'damman', 'eman', 'hornavan', 'kavlingean', 'malaren',
  'morrum', 'stockholms-skargard', 'storsjon', 'tidan', 'vanern', 'vattern',
];

function splitFrontmatter(text) {
  const m = text.match(/^(---\n[\s\S]*?\n---\n)([\s\S]*)$/);
  return m ? { fm: m[1], body: m[2] } : null;
}

/** Rubriker som hade ett --- omedelbart fore sig i originalet. */
function headingsWithRule(body) {
  const out = new Set();
  const lines = body.split('\n');

  for (let i = 0; i < lines.length; i++) {
    if (!lines[i].startsWith('## ')) continue;

    // Gå bakåt förbi tomrader
    let j = i - 1;
    while (j >= 0 && lines[j].trim() === '') j--;

    if (j >= 0 && lines[j].trim() === '---') {
      // Var detta notisens streck? Da lag notisen precis fore.
      let k = j - 1;
      while (k >= 0 && lines[k].trim() === '') k--;
      const wasNotice = k >= 0 && lines[k].includes('Att äta fångsten');
      if (!wasNotice) out.add(lines[i].trim());
    }
  }
  return out;
}

let total = 0;

for (const name of FILES) {
  const path = `src/content/destinations/${name}.mdx`;

  const original = execSync(`git show HEAD:${path}`, { encoding: 'utf8' });
  const current  = await readFile(path, 'utf8');

  const o = splitFrontmatter(original);
  const c = splitFrontmatter(current);
  if (!o || !c) { console.log(`  ${name}: kunde inte lasa, hoppar`); continue; }

  const wanted = headingsWithRule(o.body);
  if (!wanted.size) { console.log(`  ${name.padEnd(22)} inga streck att atersalla`); continue; }

  // Lagg tillbaka strecket fore samma rubriker i den nuvarande filen
  const lines = c.body.split('\n');
  const out = [];
  let added = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('## ') && wanted.has(line.trim())) {
      // Har den redan ett streck fore sig?
      let j = out.length - 1;
      while (j >= 0 && out[j].trim() === '') j--;

      if (!(j >= 0 && out[j].trim() === '---')) {
        while (out.length && out[out.length - 1].trim() === '') out.pop();
        if (out.length) out.push('', '---', '');
        added++;
      }
    }
    out.push(line);
  }

  const body = out.join('\n').replace(/\n{3,}/g, '\n\n');
  const text = c.fm + '\n' + body.trimStart() + '\n';

  console.log(`  ${WRITE ? 'SKRIVER' : 'SKULLE '} ${name.padEnd(22)} ${added} streck aterstalls (originalet hade ${wanted.size})`);
  total += added;

  if (WRITE) await writeFile(path, text, 'utf8');
}

console.log(`\n  ${total} streck ${WRITE ? 'aterstallda' : 'skulle aterstallas'}.`);
console.log(WRITE
  ? '\n  Kontrollera sedan mot git: git diff --stat src/content/destinations/\n'
  : '\n  Torrkorning. Kor med --write for att skriva.\n');
