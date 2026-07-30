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
import { getScore, getScoreLabel, SPECIES } from '../data/calendar';
import type { DayForecast } from './forecast';

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

  // Trösklarna ägs av getScoreLabel i calendar.ts och räknas inte om här.
  const { label, color } = getScoreLabel(score);
  const dots = color === 'green' ? 3 : color === 'amber' ? 2 : 1;
  return { label, color: color as 'green' | 'amber' | 'stone', score, dots };
}

// ---------------------------------------------------------------------------
// Tiodagarsutsikt per vatten
//
// For varje prognosdygn kors samma modell som i nappkalendern, med dygnets
// prognos som vaderjustering. Basta oppna art styr, precis som i getBiteScore.
// Fredade arter raknas bort. Har vattnet ingen kand art anvands snittet.
// ---------------------------------------------------------------------------

export interface OutlookDay {
  date:      string;                        // YYYY-MM-DD
  score:     number;                        // 0-100, kapad. Styr etikett och farg.
  raw:       number;                        // okapad (sasong + man + vader). Styr stapelhojd.
  label:     string;
  color:     'green' | 'amber' | 'stone';
  topSpecies: string | null;                // arten som styr dagens poang
  tempMean:  number;
  windSpeed: number;
  symbolCode: number;
}

// Stapelskala. Modellens tak pa 100 doljer verklig variation i hogsasong:
// sasongstopp 92 + man 5 + vader 20 = 117, som kapas. Staplarna ritas darfor
// mot den okapade poangen over ett fast intervall, sa att de forblir
// jamforbara mellan vatten och dygn.
const OUTLOOK_MIN = 20;
const OUTLOOK_MAX = 120;

export function outlookBarHeight(raw: number): number {
  const pct = ((raw - OUTLOOK_MIN) / (OUTLOOK_MAX - OUTLOOK_MIN)) * 100;
  return Math.round(Math.max(8, Math.min(100, pct)));
}

/**
 * Sammanfattar en utsikt.
 *
 * En basta dag pekas ut bara nar bada villkoren ar uppfyllda:
 *
 *  1. Den ar meningsfullt battre an ett TYPISKT dygn (basta minus median).
 *     Max minus min duger inte som matt: en vecka med nio likvardiga dygn och
 *     ett uselt far stor spridning, men den nyttiga informationen ar da vilket
 *     dygn man ska undvika, inte vilket man ska valja. Att utse ett godtyckligt
 *     av de nio vore falsk precision.
 *
 *  2. Skillnaden andrar faktiskt rekommendationen, alltsa att det typiska
 *     dygnet ligger i ett lagre lage an det basta. Ar alla tio dygnen redan
 *     Topplage finns inget val att gora, och da ska vi saga det i stallet.
 */
export function getOutlookSummary(
  outlook: OutlookDay[],
  minLift = 8
): { bestDay: OutlookDay | null; flat: boolean } {
  if (!outlook.length) return { bestDay: null, flat: false };

  const sorted = [...outlook].sort((a, b) => a.raw - b.raw);
  const median = sorted[Math.floor(sorted.length / 2)];
  const best   = outlook.reduce((a, b) => (b.raw > a.raw ? b : a));

  const lift        = best.raw - median.raw;
  const tierDiffers = best.color !== median.color;

  if (lift >= minLift && tierDiffers) return { bestDay: best, flat: false };

  return { bestDay: null, flat: true };
}

export function getOutlook(
  species: string[],
  lat: number,
  days: DayForecast[],
  limit = 10
): OutlookDay[] {
  const region = { slug: 'lat', name: '', offset: offsetFromLat(lat) };

  const matched = species
    .map(name => SPECIES.find(sp => sp.slug === fold(name)))
    .filter((sp): sp is NonNullable<typeof sp> => sp != null);

  return days.slice(0, limit).map((day) => {
    const date    = new Date(`${day.date}T12:00:00Z`);
    const weather = { tempMean: day.tempMean, windSpeed: day.windSpeed, precip: day.precip };

    // Okapad poang: modellens tak doljer variation i hogsasong, sa vi behaller
    // summan for stapelhojden och kapar bara for etiketten.
    const rawOf = (r: { season: number; moonAdj: number; weatherAdj: number }) =>
      r.season + r.moonAdj + r.weatherAdj;

    let raw = 0;
    let topSpecies: string | null = null;

    const open = matched
      .map(sp => ({ sp, r: getScore({ species: sp, date, region, forecast: weather }) }))
      .filter(x => !x.r.closed);

    if (open.length) {
      const best = open.reduce((a, b) => (rawOf(b.r) > rawOf(a.r) ? b : a));
      raw        = rawOf(best.r);
      topSpecies = best.sp.name;
    } else {
      const all = SPECIES.map(sp => rawOf(getScore({ species: sp, date, region, forecast: weather })));
      raw = all.reduce((a, b) => a + b, 0) / all.length;
    }

    raw = Math.round(raw);
    const score = Math.max(0, Math.min(100, raw));

    // Trösklarna ägs av getScoreLabel i calendar.ts och räknas inte om här.
    const { label, color } = getScoreLabel(score) as { label: string; color: 'green' | 'amber' | 'stone' };

    return {
      date: day.date,
      score,
      raw,
      label,
      color,
      topSpecies,
      tempMean:   day.tempMean,
      windSpeed:  day.windSpeed,
      symbolCode: day.symbolCode,
    };
  });
}

/**
 * Periodens basta art.
 *
 * Svarar pa "vad ska jag fiska efter har den narmaste tiden", vilket har ett
 * svar oavsett om nagot enskilt dygn sticker ut. Raknar snittet over hela
 * fonstret per art, i stallet for att ta den art som vinner flest enskilda
 * dygn, eftersom tva arter som ligger jamnt annars skulle avgoras av brus.
 * Fredade arter raknas bort helt.
 */
export function getPeriodTopSpecies(
  species: string[],
  lat: number,
  days: DayForecast[],
  limit = 10
): string | null {
  if (!days.length) return null;

  const region = { slug: 'lat', name: '', offset: offsetFromLat(lat) };
  const window = days.slice(0, limit);

  const matched = species
    .map(name => SPECIES.find(sp => sp.slug === fold(name)))
    .filter((sp): sp is NonNullable<typeof sp> => sp != null);

  if (!matched.length) return null;

  let bestName: string | null = null;
  let bestMean = -Infinity;

  for (const sp of matched) {
    const vals: number[] = [];

    for (const day of window) {
      const date    = new Date(`${day.date}T12:00:00Z`);
      const weather = { tempMean: day.tempMean, windSpeed: day.windSpeed, precip: day.precip };
      const r       = getScore({ species: sp, date, region, forecast: weather });
      if (r.closed) continue;
      vals.push(r.season + r.moonAdj + r.weatherAdj);
    }

    // Arten ar fredad hela perioden
    if (!vals.length) continue;

    const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
    if (mean > bestMean) {
      bestMean = mean;
      bestName = sp.name;
    }
  }

  return bestName;
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