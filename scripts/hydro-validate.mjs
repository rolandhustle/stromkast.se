/**
 * hydro-validate.mjs
 *
 * Tva fragor kvarstar, och bada ska avgoras pa data.
 *
 * FRAGA A: elva alvar har bara corrected-archive, alltsa ingen aktuell siffra.
 * Finns det NAGON annan aktiv station i samma avrinningsomrade som HAR
 * latest-day, och som ar stor nog att vara huvudfara?
 *
 * FRAGA B: Helge a visar 0,18 m3/s vid Torsebro for 3 668 km2, medan
 * Morrumsan visar 8,8 for nastan identiska 3 361 km2. Misstanken ar att vissa
 * stationer mater restflodet forbi ett kraftverk och inte hela alven.
 * Vi prover varje fungerande station mot dess EGEN historik: om dagens varde
 * ligger langt under vad stationen brukar visa i juli, ar nagot fel. Ligger
 * det inom det normala ar stationen frisk och siffran bara lag.
 *
 * Kor:  node hydro-validate.mjs
 */

const BASE = 'https://opendata-download-hydroobs.smhi.se/api/version/1.0';

// Alvar som saknar aktuell data. Avrinningsomrade enligt SMHI:s catchmentName.
const MISSING = [
  { river: 'Piteälven',      catchment: 'PITEÄLVEN',     lat: 65.435, lng: 21.295 },
  { river: 'Umeälven',       catchment: 'UMEÄLVEN',      lat: 63.853, lng: 20.049 },
  { river: 'Ångermanälven',  catchment: 'ÅNGERMANÄLVEN', lat: 63.171, lng: 17.272 },
  { river: 'Indalsälven',    catchment: 'INDALSÄLVEN',   lat: 63.112, lng: 16.354 },
  { river: 'Mellanljusnan',  catchment: 'LJUSNAN',       lat: 61.915, lng: 15.640 },
  { river: 'Dalälven',       catchment: 'DALÄLVEN',      lat: 60.567, lng: 17.433 },
  { river: 'Klarälven',      catchment: 'GÖTA ÄLV',      lat: 59.400, lng: 13.500 },
  { river: 'Göta älv',       catchment: 'GÖTA ÄLV',      lat: 58.100, lng: 12.150 },
  { river: 'Ätran',          catchment: 'ÄTRAN',         lat: 56.901, lng: 12.495 },
  { river: 'Nissan',         catchment: 'NISSAN',        lat: 56.675, lng: 12.858 },
  { river: 'Lagan',          catchment: 'LAGAN',         lat: 56.510, lng: 13.039 },
];

// Stationer som fungerar i dag, plus Emsfors som kan raddas via parameter 2.
const WORKING = [
  [2395,  'Kallio',        'Torneälven',  14477],
  [17,    'Räktfors',      'Kalixälven',  23103],
  [2238,  'Sorsele',       'Vindelälven',  6054],
  [2284,  'Byske',         'Byskeälven',   3620],
  [2506,  'Torrböle',      'Öreälven',     2859],
  [97,    'Gimdalsby',     'Gimån',        2164],
  [1221,  'Moholm',        'Tidan',        1135],
  [186,   'Mörrum',        'Mörrumsån',    3361],
  [2525,  'Torsebro',      'Helge å',      3668],
  [2171,  'Högsmölla',     'Lödde å',      1185],
  [20002, 'Emsfors',       'Emån',         4441],
];

const MIN_SIZE = 500;   // km2. Under detta ar det biflode, inte huvudfara.

function distKm(a, b, c, d) {
  const R = 6371, dLat = ((c - a) * Math.PI) / 180, dLng = ((d - b) * Math.PI) / 180;
  const x = Math.sin(dLat / 2) ** 2 +
    Math.cos((a * Math.PI) / 180) * Math.cos((c * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}

async function hasLatestDay(param, id) {
  try {
    const r = await fetch(`${BASE}/parameter/${param}/station/${id}.json`);
    if (!r.ok) return false;
    const d = await r.json();
    return (d.period ?? []).some((p) => p.key === 'latest-day');
  } catch { return false; }
}

// ---------------------------------------------------------------------------
// FRÅGA A
// ---------------------------------------------------------------------------
console.log('='.repeat(80));
console.log('FRÅGA A: finns alternativ station med aktuell data?');
console.log('='.repeat(80));

const res = await fetch(`${BASE}/parameter/1.json`);
const all = (await res.json()).station ?? [];
const active = all.filter((s) => s.active && s.latitude && s.longitude);

for (const m of MISSING) {
  const candidates = active
    .filter((s) => (s.catchmentName || '').trim() === m.catchment)
    .filter((s) => s.catchmentSize >= MIN_SIZE)
    .map((s) => ({ ...s, km: distKm(m.lat, m.lng, s.latitude, s.longitude) }))
    .sort((a, b) => a.km - b.km);

  console.log(`\n${m.river}`);

  let found = 0;
  for (const c of candidates) {
    const [p1, p2] = await Promise.all([hasLatestDay(1, c.id), hasLatestDay(2, c.id)]);
    if (!p1 && !p2) continue;
    found++;
    const via = p1 ? 'param 1' : 'param 2';
    console.log(
      `   ${c.km.toFixed(0).padStart(4)} km  ${String(c.id).padStart(6)}  ` +
      `${c.name.padEnd(24)} ${String(Math.round(c.catchmentSize)).padStart(6)} km²  AKTUELL via ${via}`
    );
    if (found >= 5) break;
  }
  if (!found) console.log('   ingen station med aktuell data i systemet');
}

// ---------------------------------------------------------------------------
// FRÅGA B
// ---------------------------------------------------------------------------
console.log('\n\n' + '='.repeat(80));
console.log('FRÅGA B: är dagens värde rimligt mot stationens egen historik?');
console.log('='.repeat(80));
console.log('\nJämför dagens värde med stationens median och lägsta värde i juli,');
console.log('räknat på hela det korrigerade arkivet.\n');

async function archiveJuly(id) {
  const r = await fetch(`${BASE}/parameter/1/station/${id}/period/corrected-archive/data.csv`);
  if (!r.ok) return null;
  const text = await r.text();
  const july = [];
  for (const line of text.split('\n')) {
    const m = line.match(/^(\d{4})-07-\d{2};([\d.]+);/);
    if (m) july.push(parseFloat(m[2]));
  }
  if (!july.length) return null;
  july.sort((a, b) => a - b);
  return {
    n: july.length,
    min: july[0],
    p10: july[Math.floor(july.length * 0.1)],
    median: july[Math.floor(july.length * 0.5)],
  };
}

async function current(id) {
  const r = await fetch(`${BASE}/parameter/1/station/${id}/period/latest-day/data.json`);
  if (!r.ok) return null;
  const d = await r.json();
  const v = (d.value ?? []).filter((x) => x.value !== null && x.value !== '');
  return v.length ? parseFloat(v[v.length - 1].value) : null;
}

console.log('  station          älv            areal    idag    juli-min  juli-p10  juli-median  omdöme');
console.log('  ' + '-'.repeat(94));

for (const [id, name, river, size] of WORKING) {
  const [hist, now] = await Promise.all([archiveJuly(id), current(id)]);

  if (!hist) { console.log(`  ${name.padEnd(15)} ${river.padEnd(14)} ${String(size).padStart(6)}  arkiv saknas`); continue; }

  const cur = now ?? NaN;
  let verdict = 'ser rimligt ut';
  if (!Number.isFinite(cur))      verdict = 'inget aktuellt värde';
  else if (cur < hist.min * 0.5)  verdict = 'MISSTÄNKT: långt under allt som mätts i juli';
  else if (cur < hist.min)        verdict = 'lågt: under lägsta juliv ärde någonsin';
  else if (cur < hist.p10)        verdict = 'lågt men inom historiken';

  console.log(
    `  ${name.padEnd(15)} ${river.padEnd(14)} ${String(size).padStart(6)}  ` +
    `${String(Number.isFinite(cur) ? cur.toFixed(1) : '-').padStart(6)}  ` +
    `${hist.min.toFixed(1).padStart(8)}  ${hist.p10.toFixed(1).padStart(8)}  ${hist.median.toFixed(1).padStart(11)}  ${verdict}`
  );
}

console.log('');
