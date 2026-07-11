/**
 * src/lib/hydro.ts
 *
 * Hämtar vattenföring från SMHI:s hydroobs-API vid byggtid, och sätter siffran
 * i sitt historiska sammanhang.
 *
 * API:    https://opendata-download-hydroobs.smhi.se
 * Param:  1 = Vattenföring (Dygn), 2 = Vattenföring (15 min). Båda i m³/s.
 * Period: latest-day. Hydroobs har BARA latest-hour, latest-day och
 *         corrected-archive. Det finns inget latest-months, till skillnad från
 *         metobs. Arkivet ligger dessutom veckor efter och ges bara som CSV.
 * Licens: Creative Commons Erkännande 4.0 SE. Källa ska anges.
 *
 * VARFÖR NORMALER
 *
 * En naken siffra säger ingenting. "0,2 m³/s" är meningslöst för en läsare.
 * "0,2 m³/s, mycket lågt, normalt för juli är 8,4" säger allt. Normalerna
 * ligger i hydro-normals.json, framräknade ur SMHI:s korrigerade arkiv av
 * scripts/hydro-normals.mjs. De är historiska och räknas därför en gång.
 *
 * Kontexten skyddar oss också: skulle en station gå sönder ser läsaren direkt
 * att värdet är orimligt i stället för att tro på det.
 *
 * FLÖDET VÄGS INTE IN I BETNINGSPOÄNGEN. Det finns ingen källbelagd modell för
 * hur flöde påverkar bett per art, och att gissa en sådan vore samma sorts
 * falska precision som vi städat bort på andra håll. Flödet visas som egen
 * data och läsaren gör tolkningen.
 */

import { getHydroStation, type HydroStation } from '../data/hydro-stations';
import normalsData from '../data/hydro-normals.json';

interface MonthNormal {
  p10: number;
  p25: number;
  median: number;
  p75: number;
  p90: number;
  n: number;
}

/** Station-id -> tolv månader. null där arkivet är för tunt. */
const NORMALS = normalsData as Record<string, Array<MonthNormal | null>>;

export type FlowLevel =
  | 'mycket-lagt'
  | 'lagt'
  | 'normalt'
  | 'hogt'
  | 'mycket-hogt';

export const FLOW_LABEL: Record<FlowLevel, string> = {
  'mycket-lagt': 'Mycket lågt',
  'lagt':        'Lågt',
  'normalt':     'Normalt',
  'hogt':        'Högt',
  'mycket-hogt': 'Mycket högt',
};

export interface HydroFlow {
  station: HydroStation;
  /** Vattenföring i m³/s. null om SMHI inte svarade eller saknar värde. */
  value:   number | null;
  /** Datum för mätningen, YYYY-MM-DD. */
  date:    string | null;
  /** Antal dygn mellan mätningen och bygget. */
  ageDays: number | null;
  /** Hur värdet förhåller sig till vad stationen brukar visa denna månad. */
  level:   FlowLevel | null;
  /** Vad stationen normalt visar denna månad, m³/s. */
  normal:  number | null;
  error:   boolean;
}

const BASE = 'https://opendata-download-hydroobs.smhi.se/api/version/1.0';

const cache = new Map<string, Promise<{ value: number | null; date: string | null }>>();

async function fetchStation(param: 1 | 2, id: number) {
  const key = `${param}:${id}`;
  const hit = cache.get(key);
  if (hit) return hit;

  const p = (async () => {
    try {
      const url = `${BASE}/parameter/${param}/station/${id}/period/latest-day/data.json`;
      const res = await fetch(url, {
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(10000),
      });

      if (!res.ok) {
        // Tyst bortfall döljer buggar. Ett trasigt anrop ska synas i bygget.
        console.warn(`[hydro] station ${id} (param ${param}): SMHI svarade ${res.status}`);
        return { value: null, date: null };
      }

      const data = await res.json();
      const series: Array<{ date: number; value: string | null }> = data?.value ?? [];

      // Sista posten med ett faktiskt värde. SMHI kan lämna luckor i slutet.
      for (let i = series.length - 1; i >= 0; i--) {
        const raw = series[i]?.value;
        if (raw === null || raw === undefined || raw === '') continue;

        const num = parseFloat(raw);
        if (!Number.isFinite(num)) continue;

        return {
          value: Math.round(num * 100) / 100,
          date: new Date(series[i].date).toISOString().slice(0, 10),
        };
      }

      console.warn(`[hydro] station ${id} (param ${param}): inget värde i svaret`);
      return { value: null, date: null };
    } catch (err) {
      console.warn(`[hydro] station ${id}: ${err instanceof Error ? err.message : 'okänt fel'}`);
      return { value: null, date: null };
    }
  })();

  cache.set(key, p);
  return p;
}

function classify(value: number, n: MonthNormal): FlowLevel {
  if (value < n.p10) return 'mycket-lagt';
  if (value < n.p25) return 'lagt';
  if (value > n.p90) return 'mycket-hogt';
  if (value > n.p75) return 'hogt';
  return 'normalt';
}

/**
 * Hämtar vattenföring för en destination. Returnerar null för destinationer
 * som saknar station i den kurerade kartan, alltså sjöar, kustvatten och de
 * älvar där SMHI bara har arkivdata.
 */
export async function fetchHydroFlow(slug: string, when = new Date()): Promise<HydroFlow | null> {
  const station = getHydroStation(slug);
  if (!station) return null;

  const { value, date } = await fetchStation(station.param, station.id);

  let ageDays: number | null = null;
  if (date) {
    const ms = Date.now() - new Date(`${date}T12:00:00Z`).getTime();
    ageDays = Math.max(0, Math.round(ms / 86400000));
  }

  // Normalen tas för den månad mätningen gäller, inte för byggmånaden.
  const month = date ? parseInt(date.slice(5, 7), 10) : when.getUTCMonth() + 1;
  const norm  = NORMALS[String(station.id)]?.[month - 1] ?? null;

  return {
    station,
    value,
    date,
    ageDays,
    level:  value !== null && norm ? classify(value, norm) : null,
    normal: norm ? norm.median : null,
    error:  value === null,
  };
}

/** "142 m³/s", "8,8 m³/s", "0,2 m³/s" */
export function formatFlow(value: number): string {
  const decimals = value >= 100 ? 0 : value >= 10 ? 1 : 2;
  return `${value.toLocaleString('sv-SE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  })} m³/s`;
}
