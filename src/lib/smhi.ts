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
import seasonsData  from '../data/seasons.json';

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
// Säsongsbonus per art
// ---------------------------------------------------------------------------

type SeasonEntry = { peak: number[]; ok: number[] };
const seasons = seasonsData as Record<string, SeasonEntry>;

export function getSeasonBonus(species: string[], month: number): number {
  let best = 0;
  for (const art of species) {
    const entry = seasons[art.toLowerCase()];
    if (!entry) continue;
    if (entry.peak.includes(month)) { best = Math.max(best, 25); break; }
    if (entry.ok.includes(month))     best = Math.max(best, 12);
  }
  return best;
}

// ---------------------------------------------------------------------------
// Betningsindikator
// ---------------------------------------------------------------------------

export function getBiteScore(
  airTemp:          number | null,
  windSpeed:        number | null,
  moonIllumination: number,
  species:          string[] = [],
  month:            number   = new Date().getMonth() + 1
): BiteScore {
  let score = 40;

  if (airTemp !== null) {
    if (airTemp >= 8 && airTemp <= 18)      score += 20;
    else if (airTemp >= 4 && airTemp < 8)   score += 8;
    else if (airTemp > 18 && airTemp <= 24) score += 10;
    else if (airTemp < 0)                   score -= 15;
    else if (airTemp > 24)                  score -= 8;
  }

  if (windSpeed !== null) {
    if (windSpeed >= 1 && windSpeed <= 4)      score += 15;
    else if (windSpeed > 4 && windSpeed <= 7)  score += 5;
    else if (windSpeed > 7 && windSpeed <= 10) score -= 10;
    else if (windSpeed > 10)                   score -= 22;
    else if (windSpeed < 1)                    score -= 5;
  }

  if (moonIllumination > 90 || moonIllumination < 10) score += 12;
  else if (moonIllumination > 75 || moonIllumination < 25) score += 6;

  score += getSeasonBonus(species, month);
  score  = Math.max(0, Math.min(100, score));

  if (score >= 68) return { label: 'Toppläge',       color: 'green', score, dots: 3 };
  if (score >= 42) return { label: 'Värt att testa', color: 'amber', score, dots: 2 };
  return              { label: 'Trögt',           color: 'stone', score, dots: 1 };
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
