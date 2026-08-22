/**
 * hydro-normals.mjs
 *
 * Genererar src/data/hydro-normals.json.
 *
 * En naken vattenforingssiffra sager ingenting. "0,2 m3/s" ar meningslost for
 * en lasare. "0,2 m3/s, extremt lagt, normalt for juli ar 8,4" sager allt.
 *
 * Normalerna raknas ur SMHI:s korrigerade arkiv, som gar tillbaka till
 * 1900-talet for manga stationer. De ar historiska och andras inte, sa de
 * beraknas EN gang och checkas in. Att hamta flera megabyte arkiv per station
 * vid varje bygge vore slosaktigt och skort.
 *
 * Kor:  node hydro-normals.mjs
 */

import { writeFile, mkdir } from 'node:fs/promises';

const BASE = 'https://opendata-download-hydroobs.smhi.se/api/version/1.0';
const OUT  = 'src/data/hydro-normals.json';

// De 16 alvar som faktiskt har aktuell data. Se hydro-stations.ts.
const STATIONS = [
  [2395,  'Kallio',      'Torneälven'],
  [17,    'Räktfors',    'Kalixälven'],
  [1387,  'Gransel',     'Piteälven'],
  [2238,  'Sorsele',     'Vindelälven'],
  [2284,  'Byske',       'Byskeälven'],
  [20,    'Niemisel',    'Råneälven'],
  [2237,  'Granåker',    'Umeälven'],
  [2506,  'Torrböle',    'Öreälven'],
  [97,    'Gimdalsby',   'Gimån'],
  [1221,  'Moholm',      'Tidan'],
  [20002, 'Emsfors',     'Emån'],
  [186,   'Mörrum',      'Mörrumsån'],
  [2525,  'Torsebro',    'Helge å'],
  [2171,  'Högsmölla',   'Lödde å'],
  [2372,  'Forsmöllan',  'Rönne å'],
  [740,   'Nybro',       'Voxnan'],
];

function quantile(sorted, q) {
  const i = (sorted.length - 1) * q;
  const lo = Math.floor(i), hi = Math.ceil(i);
  if (lo === hi) return sorted[lo];
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (i - lo);
}

const round = (n) => Math.round(n * 100) / 100;

async function normalsFor(id) {
  const res = await fetch(`${BASE}/parameter/1/station/${id}/period/corrected-archive/data.csv`);
  if (!res.ok) return null;

  const text = await res.text();
  const byMonth = Array.from({ length: 12 }, () => []);

  for (const line of text.split('\n')) {
    // Format: 1984-08-16;0.284;G;;;
    const m = line.match(/^(\d{4})-(\d{2})-\d{2};([\d.]+);/);
    if (!m) continue;
    const month = parseInt(m[2], 10);
    const value = parseFloat(m[3]);
    if (!Number.isFinite(value)) continue;
    byMonth[month - 1].push(value);
  }

  const months = byMonth.map((vals) => {
    if (vals.length < 30) return null;   // for tunt underlag
    vals.sort((a, b) => a - b);
    return {
      p10:    round(quantile(vals, 0.10)),
      p25:    round(quantile(vals, 0.25)),
      median: round(quantile(vals, 0.50)),
      p75:    round(quantile(vals, 0.75)),
      p90:    round(quantile(vals, 0.90)),
      n:      vals.length,
    };
  });

  const total = byMonth.reduce((sum, v) => sum + v.length, 0);
  return months.every((m) => m === null) ? null : { months, observations: total };
}

const out = {};

for (const [id, name, river] of STATIONS) {
  process.stdout.write(`${river.padEnd(15)} ${name.padEnd(12)} `);
  const n = await normalsFor(id);

  if (!n) {
    console.log('ARKIV SAKNAS');
    continue;
  }

  out[id] = n.months;

  const jul = n.months[6];
  console.log(
    `${String(n.observations).padStart(7)} dygn i arkivet   ` +
    (jul ? `juli: median ${jul.median} m³/s (p10 ${jul.p10}, p90 ${jul.p90})` : 'juli saknas')
  );
}

await mkdir('src/data', { recursive: true });
await writeFile(OUT, JSON.stringify(out, null, 2) + '\n', 'utf8');

console.log(`\nSkrev ${OUT} med normaler för ${Object.keys(out).length} stationer.`);
console.log('Checka in filen. Normalerna är historiska och behöver inte räknas om.\n');
