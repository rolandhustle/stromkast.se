/**
 * src/lib/smhi.ts
 *
 * Delad logik för SMHI-data, månfas, betningsindikator och artjusterad säsongspoäng.
 * Används av /forhallanden/, /destinationer/[slug]/ och startsidans FiskeKarta.
 *
 * Stationsmatchning sker automatiskt från koordinater via smhi-stations.json.
 * Ingen manuell station-mapping behövs -- nya destinationer matchas automatiskt.
 */

import stationsData from '../data/smhi-stations.json';
import { getScore, SPECIES } from '../data/calendar';

// ---------------------------------------------------------------------------
// Typer
// ---------------------------------------------------------------------------

interface Station {
  id:   number;
  name: string;
  lat:  number;
  lng:  number;
}

export interface SMHIData {
  airTemp:     number | null;
  windSpeed:   number | null;
  windDir:     number | null;
  humidity:    number | null;
  stationName: string;
  stationId:   number;
  error:       boolean;
}

export interface BiteScore {
  label:  string;
  color:  'green' | 'amber' | 'stone';
  score:  number;
  dots:   number;
}

export interface MoonData {
  name:         string;
  emoji:        string;
  illumination: number;
}

// ---------------------------------------------------------------------------
// Stationsmatchning: närmaste aktiva station från koordinater
// ---------------------------------------------------------------------------

const stations = stationsData as Station[];

function distSq(lat1: number, lng1: number, lat2: number, lng2: number): number {
  return (lat1 - lat2) ** 2 + (lng1 - lng2) ** 2;
}

export function getNearestStation(lat: number, lng: number): Station {
  return stations.reduce((best, s) =>
    distSq(lat, lng, s.lat, s.lng) < distSq(lat, lng, best.lat, best.lng) ? s : best
  );
}

// ---------------------------------------------------------------------------
// SMHI-hämtning
// ---------------------------------------------------------------------------

async function fetchParam(stationId: number, parameterId: number): Promise<number | null> {
  const url = `https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/${parameterId}/station/${stationId}/period/latest-hour/data.json`;
  try {
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const latest = data?.value?.at(-1);
    if (!latest || latest.value === '') return null;
    return parseFloat(latest.value);
  } catch {
    return null;
  }
}

export async function fetchSMHIForStation(stationId: number, stationName: string): Promise<SMHIData> {
  const [airTemp, windSpeed, windDir, humidity] = await Promise.all([
    fetchParam(stationId, 1),
    fetchParam(stationId, 4),
    fetchParam(stationId, 3),
    fetchParam(stationId, 6),
  ]);
  return {
    airTemp,
    windSpeed,
    windDir,
    humidity,
    stationName,
    stationId,
    error: airTemp === null && windSpeed === null,
  };
}

/**
 * Hämtar SMHI-data för en destination givet dess koordinater.
 * Väljer automatiskt närmaste aktiva station från smhi-stations.json.
 */
export async function fetchSMHIForCoords(lat: number, lng: number): Promise<SMHIData> {
  const station = getNearestStation(lat, lng);
  return fetchSMHIForStation(station.id, station.name);
}

// ---------------------------------------------------------------------------
// Månfas
// ---------------------------------------------------------------------------

export function getMoonPhase(date: Date): MoonData {
  const SYNODIC        = 29.53059;
  const KNOWN_NEW_MOON = new Date('2000-01-06T18:14:00Z').getTime();
  const diffDays       = (date.getTime() - KNOWN_NEW_MOON) / (1000 * 60 * 60 * 24);
  const cyclePos       = ((diffDays % SYNODIC) + SYNODIC) % SYNODIC;
  const illumination   = Math.round(50 * (1 - Math.cos((2 * Math.PI * cyclePos) / SYNODIC)));

  let name: string;
  let emoji: string;

  if (cyclePos < 1.85)       { name = 'Nymåne';           emoji = '🌑'; }
  else if (cyclePos < 7.38)  { name = 'Växande skära';    emoji = '🌒'; }
  else if (cyclePos < 9.22)  { name = 'Första kvarteret'; emoji = '🌓'; }
  else if (cyclePos < 14.77) { name = 'Växande gibbös';   emoji = '🌔'; }
  else if (cyclePos < 16.61) { name = 'Fullmåne';         emoji = '🌕'; }
  else if (cyclePos < 22.15) { name = 'Avtagande gibbös'; emoji = '🌖'; }
  else if (cyclePos < 23.99) { name = 'Sista kvarteret';  emoji = '🌗'; }
  else                       { name = 'Avtagande skära';  emoji = '🌘'; }

  return { name, emoji, illumination };
}

// ---------------------------------------------------------------------------
// Artmatchning och latitudförskjutning
// ---------------------------------------------------------------------------

// Normaliserar bort diakritik så "Gädda", "gadda" och "GÄDDA" matchar artens slug.
function fold(s: string): string {
  return s.toLowerCase()
    .replace(/[åä]/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/[éè]/g, 'e')
    .replace(/[^a-z0-9]/g, '');
}

// Latitud → månadsförskjutning. 0 vid mellansverige, +1 i söder, −1 i norr.
function offsetFromLat(lat: number): number {
  return Math.max(-2.5, Math.min(1.5, (59.33 - lat) / 3.7));
}

// ---------------------------------------------------------------------------
// Betningsindikator
// ---------------------------------------------------------------------------

export function getBiteScore(
  airTemp:   number | null,
  windSpeed: number | null,
  species:   string[] = [],
  lat:       number   = 59.33,
  date:      Date     = new Date()
): BiteScore {
  const region  = { slug: 'lat', name: '', offset: offsetFromLat(lat) };
  const weather = (airTemp !== null && windSpeed !== null)
    ? { tempMean: airTemp, windSpeed, precip: 0 }
    : undefined;

  // Matcha vattnets arter mot kalenderns SPECIES via diakritik-fold
  const matched = species
    .map(name => SPECIES.find(sp => sp.slug === fold(name)))
    .filter((sp): sp is NonNullable<typeof sp> => sp != null);

  // Fredade arter (t.ex. asp i april och maj) ska inte styra ett vattens poäng
  const openScores = matched
    .map(sp => getScore({ species: sp, date, region, forecast: weather }))
    .filter(r => !r.closed)
    .map(r => r.score);

  let raw: number;
  if (openScores.length) {
    // Bästa art i säsong styr (måne och väder är lika för alla arter)
    raw = Math.max(...openScores);
  } else {
    // Ingen känd eller öppen säsong: allmän utsikt = snitt av alla arter
    const all = SPECIES.map(sp => getScore({ species: sp, date, region, forecast: weather }).score);
    raw = all.reduce((a, b) => a + b, 0) / all.length;
  }

  const score = Math.max(0, Math.min(100, Math.round(raw)));

  if (score >= 68) return { label: 'Toppläge',       color: 'green', score, dots: 3 };
  if (score >= 42) return { label: 'Värt att testa', color: 'amber', score, dots: 2 };
  return                  { label: 'Trögt',          color: 'stone', score, dots: 1 };
}

// ---------------------------------------------------------------------------
// Formatering
// ---------------------------------------------------------------------------

export function windDirLabel(deg: number | null): string {
  if (deg === null) return '–';
  const dirs = ['N','NNO','NO','ONO','O','OSO','SO','SSO','S','SSV','SV','VSV','V','VNV','NV','NNV'];
  return dirs[Math.round(deg / 22.5) % 16];
}

export const DOT_COLOR: Record<string, string> = {
  green: 'bg-green-500',
  amber: 'bg-amber-400',
  stone: 'bg-stone/40',
};

export const DOT_BG: Record<string, string> = {
  green: 'bg-green-50 border-green-200 text-green-700',
  amber: 'bg-amber-50 border-amber-200 text-amber-700',
  stone: 'bg-stone/10 border-stone/20 text-stone',
};
