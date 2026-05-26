/**
 * src/lib/forecast.ts
 *
 * Hämtar SMHI SNOW1gv1-prognos per region och aggregerar till dagsvärden.
 * Används av nappkalender/index.astro vid byggtid.
 *
 * API: https://opendata-download-metfcst.smhi.se/api/category/snow1g/version/1
 * Licens: Creative Commons CC BY 4.0
 */

// ---------------------------------------------------------------------------
// Regionkoordinater -- en representativ punkt per region
// ---------------------------------------------------------------------------

export const FORECAST_REGIONS: Record<string, { lat: number; lng: number; label: string }> = {
  'sodra-sverige':  { lat: 55.6,  lng: 13.0,  label: 'Södra Sverige'  },
  'mellansverige':  { lat: 59.33, lng: 18.07, label: 'Mellansverige'  },
  'norra-sverige':  { lat: 63.18, lng: 14.64, label: 'Norra Sverige'  },
  'fjallvarlden':   { lat: 63.4,  lng: 13.08, label: 'Fjällvärlden'   },
};

// ---------------------------------------------------------------------------
// Typer
// ---------------------------------------------------------------------------

export interface DayForecast {
  date:        string;  // YYYY-MM-DD
  tempMin:     number;
  tempMax:     number;
  tempMean:    number;
  windSpeed:   number;  // m/s medel
  windDir:     number;  // grader
  precip:      number;  // mm
  cloudiness:  number;  // 0–8 oktas (mappat från %)
  symbolCode:  number;  // SMHI symbol 1–27
  isPrognosis: true;
}

export interface RegionForecast {
  region:      string;
  label:       string;
  days:        DayForecast[];
  fetchedAt:   string;
  error:       boolean;
}

// ---------------------------------------------------------------------------
// SMHI symbol → beskrivning
// ---------------------------------------------------------------------------

export const SYMBOL_LABELS: Record<number, string> = {
  1:  'Klart',
  2:  'Nästan klart',
  3:  'Halvklart',
  4:  'Halvmulet',
  5:  'Mulet',
  6:  'Mulet',
  7:  'Dimma',
  8:  'Lätt regnskur',
  9:  'Regnskur',
  10: 'Kraftig regnskur',
  11: 'Åskskur',
  12: 'Lätt snöblandad regnskur',
  13: 'Snöblandad regnskur',
  14: 'Kraftig snöblandad regnskur',
  15: 'Lätt snöskur',
  16: 'Snöskur',
  17: 'Kraftig snöskur',
  18: 'Lätt regn',
  19: 'Regn',
  20: 'Kraftigt regn',
  21: 'Åska',
  22: 'Lätt snöblandat regn',
  23: 'Snöblandat regn',
  24: 'Kraftigt snöblandat regn',
  25: 'Lätt snöfall',
  26: 'Snöfall',
  27: 'Kraftigt snöfall',
};

export const SYMBOL_EMOJI: Record<number, string> = {
  1: '☀️', 2: '🌤️', 3: '⛅', 4: '🌥️', 5: '☁️', 6: '☁️', 7: '🌫️',
  8: '🌦️', 9: '🌦️', 10: '🌧️', 11: '⛈️',
  12: '🌨️', 13: '🌨️', 14: '🌨️',
  15: '🌨️', 16: '❄️', 17: '❄️',
  18: '🌧️', 19: '🌧️', 20: '🌧️', 21: '⛈️',
  22: '🌨️', 23: '🌨️', 24: '🌨️',
  25: '❄️', 26: '❄️', 27: '❄️',
};

// ---------------------------------------------------------------------------
// Hämtning och aggregering
// ---------------------------------------------------------------------------

async function fetchForecastForRegion(
  region: string,
  lat: number,
  lng: number,
  label: string
): Promise<RegionForecast> {
  const url = `https://opendata-download-metfcst.smhi.se/api/category/snow1g/version/1/geotype/point/lon/${lng}/lat/${lat}/data.json`;

  try {
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) {
      return { region, label, days: [], fetchedAt: new Date().toISOString(), error: true };
    }

    const data = await res.json();
    const timeSeries: Array<{ time: string; data: Record<string, number> }> = data.timeSeries;

    // Gruppera per datum
    const byDate = new Map<string, Array<Record<string, number>>>();
    for (const entry of timeSeries) {
      const date = entry.time.split('T')[0];
      if (!byDate.has(date)) byDate.set(date, []);
      byDate.get(date)!.push(entry.data);
    }

    const days: DayForecast[] = [];
    for (const [date, entries] of byDate) {
      const temps   = entries.map(e => e.air_temperature).filter(v => v != null);
      const winds   = entries.map(e => e.wind_speed).filter(v => v != null);
      const windDir = entries[Math.floor(entries.length / 2)]?.wind_from_direction ?? 0;
      const precips = entries.map(e => e.precipitation_amount_mean ?? 0);
      const clouds  = entries.map(e => e.cloud_area_fraction ?? 0);
      const symbol  = entries[Math.floor(entries.length / 2)]?.symbol_code ?? 1;

      if (temps.length === 0) continue;

      days.push({
        date,
        tempMin:    Math.round(Math.min(...temps) * 10) / 10,
        tempMax:    Math.round(Math.max(...temps) * 10) / 10,
        tempMean:   Math.round((temps.reduce((a, b) => a + b, 0) / temps.length) * 10) / 10,
        windSpeed:  Math.round((winds.reduce((a, b) => a + b, 0) / winds.length) * 10) / 10,
        windDir:    Math.round(windDir),
        precip:     Math.round(precips.reduce((a, b) => a + b, 0) * 10) / 10,
        cloudiness: Math.round(clouds.reduce((a, b) => a + b, 0) / clouds.length / 12.5), // % → oktas
        symbolCode: Math.round(symbol),
        isPrognosis: true,
      });
    }

    return {
      region,
      label,
      days: days.sort((a, b) => a.date.localeCompare(b.date)),
      fetchedAt: new Date().toISOString(),
      error: false,
    };
  } catch {
    return { region, label, days: [], fetchedAt: new Date().toISOString(), error: true };
  }
}

export async function fetchAllForecasts(): Promise<Record<string, RegionForecast>> {
  const results = await Promise.all(
    Object.entries(FORECAST_REGIONS).map(([region, { lat, lng, label }]) =>
      fetchForecastForRegion(region, lat, lng, label)
    )
  );

  return Object.fromEntries(results.map(r => [r.region, r]));
}

// ---------------------------------------------------------------------------
// Klimatnormaler 1991-2020 per region och månad
// Källa: SMHI klimatnormaler, representativa stationer
// ---------------------------------------------------------------------------

export const CLIMATE_NORMALS: Record<string, number[]> = {
  // Månadsvis medeltemperatur (°C), index 0=jan
  'sodra-sverige': [-0.4, -0.5, 2.8, 7.8, 13.2, 17.0, 19.2, 18.6, 13.8, 8.7, 4.0, 0.7],
  'mellansverige': [-3.0, -3.2, 0.5, 6.0, 11.8, 16.2, 18.2, 17.0, 11.8, 6.5, 1.8, -1.5],
  'norra-sverige': [-8.5, -8.0, -3.5, 2.5, 8.8, 13.8, 16.2, 14.5, 9.0, 3.2, -2.5, -6.5],
  'fjallvarlden':  [-10.5,-10.0,-6.0, 0.0, 5.8, 10.5, 13.0, 12.0, 7.0, 1.5, -4.5, -8.5],
};

// ---------------------------------------------------------------------------
// Hjälpfunktion: väderpoäng från prognosdata
// ---------------------------------------------------------------------------

export function getForecastBiteBonus(day: DayForecast): number {
  let bonus = 0;

  // Temperatur
  if (day.tempMean >= 8 && day.tempMean <= 18) bonus += 15;
  else if (day.tempMean >= 4 && day.tempMean < 8) bonus += 5;
  else if (day.tempMean > 18 && day.tempMean <= 24) bonus += 8;
  else if (day.tempMean < 0) bonus -= 15;

  // Vind
  if (day.windSpeed >= 1 && day.windSpeed <= 4) bonus += 10;
  else if (day.windSpeed > 7 && day.windSpeed <= 10) bonus -= 8;
  else if (day.windSpeed > 10) bonus -= 18;

  // Nederbörd
  if (day.precip > 5) bonus -= 5;

  return bonus;
}
