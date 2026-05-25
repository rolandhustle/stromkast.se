/**
 * src/lib/smhi.ts
 *
 * Delad logik för SMHI-data, månfas och betningsindikator.
 * Används av /forhallanden/ och /destinationer/[slug]/.
 *
 * SMHI Open Data API, ingen nyckel krävs.
 * Parametrar: 1=lufttemp, 3=vindriktning, 4=vindhastighet, 6=luftfuktighet
 */

// ---------------------------------------------------------------------------
// Stationskarta: destinations-slug → SMHI-station
// ---------------------------------------------------------------------------

export const STATION_BY_SLUG: Record<
  string,
  { stationId: number; stationName: string }
> = {
  vanern:     { stationId: 83420,  stationName: 'Naven A' },
  vattern:    { stationId: 84310,  stationName: 'Karlsborg' },
  morrum:     { stationId: 64020,  stationName: 'Hanö A' },
  storsjon:   { stationId: 134110, stationName: 'Östersund-Frösön' },
  malaren:    { stationId: 97370,  stationName: 'Enköping' },
  tornealven: { stationId: 163960, stationName: 'Haparanda A' },
};

// ---------------------------------------------------------------------------
// Typer
// ---------------------------------------------------------------------------

export interface SMHIData {
  airTemp:   number | null;
  windSpeed: number | null;
  windDir:   number | null;
  humidity:  number | null;
  stationName: string;
  error: boolean;
}

export interface BiteScore {
  label: string;
  color: 'green' | 'amber' | 'stone';
  dots: number;
}

export interface MoonData {
  name: string;
  emoji: string;
  illumination: number;
}

// ---------------------------------------------------------------------------
// SMHI-hämtning
// ---------------------------------------------------------------------------

async function fetchParam(
  stationId: number,
  parameterId: number
): Promise<number | null> {
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

export async function fetchSMHIForStation(
  stationId: number,
  stationName: string
): Promise<SMHIData> {
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
    error: airTemp === null && windSpeed === null,
  };
}

/**
 * Hämtar SMHI-data för en destinations-slug.
 * Returnerar null om destinationen saknar stationskoppling.
 */
export async function fetchSMHIForSlug(
  slug: string
): Promise<SMHIData | null> {
  const station = STATION_BY_SLUG[slug];
  if (!station) return null;
  return fetchSMHIForStation(station.stationId, station.stationName);
}

// ---------------------------------------------------------------------------
// Månfas
// ---------------------------------------------------------------------------

export function getMoonPhase(date: Date): MoonData {
  const SYNODIC = 29.53059;
  const KNOWN_NEW_MOON = new Date('2000-01-06T18:14:00Z').getTime();
  const diffDays = (date.getTime() - KNOWN_NEW_MOON) / (1000 * 60 * 60 * 24);
  const cyclePos = ((diffDays % SYNODIC) + SYNODIC) % SYNODIC;
  const illumination = Math.round(
    50 * (1 - Math.cos((2 * Math.PI * cyclePos) / SYNODIC))
  );

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
// Betningsindikator
// ---------------------------------------------------------------------------

export function getBiteScore(
  airTemp: number | null,
  windSpeed: number | null,
  moonIllumination: number
): BiteScore {
  let score = 50;

  if (airTemp !== null) {
    if (airTemp >= 8 && airTemp <= 18)      score += 20;
    else if (airTemp >= 4 && airTemp < 8)   score += 5;
    else if (airTemp > 18 && airTemp <= 24) score += 10;
    else if (airTemp < 0)                   score -= 20;
    else if (airTemp > 24)                  score -= 10;
  }

  if (windSpeed !== null) {
    if (windSpeed >= 1 && windSpeed <= 4)       score += 15;
    else if (windSpeed > 7 && windSpeed <= 10)  score -= 10;
    else if (windSpeed > 10)                    score -= 25;
    else if (windSpeed < 1)                     score -= 5;
  }

  if (moonIllumination > 90 || moonIllumination < 10) score += 15;
  else if (moonIllumination > 75 || moonIllumination < 25) score += 8;

  score = Math.max(0, Math.min(100, score));

  if (score >= 70) return { label: 'Aktivt',   color: 'green', dots: 3 };
  if (score >= 45) return { label: 'Varierat', color: 'amber', dots: 2 };
  return              { label: 'Lugnt',    color: 'stone', dots: 1 };
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
