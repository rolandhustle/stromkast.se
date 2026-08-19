/**
 * src/components/KalenderWidget.tsx
 *
 * Interaktiv nappkalender med dagsvyer, artfilter och regionfilter.
 * Varje dag visar sin totalpoäng (säsong + måne + väder) på tre sätt:
 * bakgrundsfärg, stapel och siffra. Alla tre härleds ur samma poäng genom
 * getScoreLabel i calendar.ts, så trösklarna finns på ett enda ställe.
 * Månfasen syns dessutom som nyansdjup inom färgnivån.
 * Prognosdagar markeras med SMHI-badge.
 */

import { useState, useMemo, useEffect } from 'react';
import { getScore, getScoreLabel, moonColorIntensity, REGIONS as REGION_DATA } from '../data/calendar';

function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}

// ---------------------------------------------------------------------------
// Typer
// ---------------------------------------------------------------------------

interface DayForecast {
  date:       string;
  tempMin:    number;
  tempMax:    number;
  tempMean:   number;
  windSpeed:  number;
  windDir:    number;
  precip:     number;
  symbolCode: number;
  isPrognosis: true;
}

interface MoonDay {
  date:         string;
  phase:        string;
  illumination: number;
  score:        number;
  emoji:        string;
}

interface SpeciesInfo {
  slug:        string;
  name:        string;
  peakMonths:  number[];
  okMonths:    number[];
  spawningMonths: number[];
  closedMonths?:  number[];
  group?:         string;
  absentRegions?: string[];
}

interface Props {
  year:           number;
  moonDays:       MoonDay[];
  forecasts:      Record<string, DayForecast[]>;
  climateNormals: Record<string, number[]>;
  species:        SpeciesInfo[];
  symbolLabels:   Record<number, string>;
  symbolEmojis:   Record<number, string>;
}

// ---------------------------------------------------------------------------
// Konstanter
// ---------------------------------------------------------------------------

const MONTHS_SV  = ['Januari','Februari','Mars','April','Maj','Juni','Juli','Augusti','September','Oktober','November','December'];
const MONTHS_ABB = ['Jan','Feb','Mar','Apr','Maj','Jun','Jul','Aug','Sep','Okt','Nov','Dec'];
const DAYS_SV    = ['Mån','Tis','Ons','Tor','Fre','Lör','Sön'];

const REGIONS = [
  { slug: 'mellansverige', label: 'Mellansverige'  },
  { slug: 'sodra-sverige', label: 'Södra Sverige'  },
  { slug: 'norra-sverige', label: 'Norra Sverige'  },
  { slug: 'fjallvarlden',  label: 'Fjällvärlden'   },
];

const SPECIES_GROUPS: { key: string; label: string }[] = [
  { key: 'rovfisk', label: 'Rovfisk' },
  { key: 'laxfisk', label: 'Laxfisk' },
  { key: 'vitfisk', label: 'Vitfisk' },
  { key: 'kust',    label: 'Kust' },
];

const WIND_DIRS = ['N','NNO','NO','ONO','O','OSO','SO','SSO','S','SSV','SV','VSV','V','VNV','NV','NNV'];
function windDirLabel(deg: number): string {
  return WIND_DIRS[Math.round(deg / 22.5) % 16];
}

// ---------------------------------------------------------------------------
// Dagsfärg -- härleds ur totalpoängen via getScoreLabel i calendar.ts
//
// Trösklarna 68 och 42 räknas aldrig om här. Widgeten frågar calendar.ts vilken
// nivå en poäng hör till och slår upp paletten på färgnamnet. Samma poäng styr
// bakgrund, stapel, siffra och etikett, så de kan inte glida isär.
// Månfasen syns som nyansdjup inom nivån, inte som egen nivå.
// ---------------------------------------------------------------------------

// moonColorIntensity 0..1 → nyanssteg 0=låg, 1=medel, 2=hög (utspridd runt ny/full)
function moonIntensity(intensity: number): 0 | 1 | 2 {
  if (intensity >= 0.66) return 2;
  if (intensity >= 0.33) return 1;
  return 0;
}

// Fredad (stängt fiske): egen lugn slate-ton, inte grå "Trögt"
const FREDAD_STYLE = { bg: '#f1f5f9', border: '#cbd5e1', textColor: '#475569' };

// Tre nyanser per nivå -- ljusare = sämre månfas, mörkare = bättre månfas
const PALETTES = {
  green: [
    { bg: '#f0fdf4', border: '#d1fae5', textColor: '#166534' }, // låg månfas
    { bg: '#dcfce7', border: '#bbf7d0', textColor: '#166534' }, // neutral
    { bg: '#bbf7d0', border: '#6ee7b7', textColor: '#065f46' }, // gynnsam
  ],
  amber: [
    { bg: '#fffbeb', border: '#fef3c7', textColor: '#92400e' },
    { bg: '#fef3c7', border: '#fde68a', textColor: '#92400e' },
    { bg: '#fde68a', border: '#fbbf24', textColor: '#78350f' },
  ],
  stone: [
    { bg: '#f9fafb', border: '#f3f4f6', textColor: '#6b7280' },
    { bg: '#f3f4f6', border: '#e5e7eb', textColor: '#6b7280' },
    { bg: '#e5e7eb', border: '#d1d5db', textColor: '#4b5563' },
  ],
  slate: [FREDAD_STYLE, FREDAD_STYLE, FREDAD_STYLE],
};

// Stapelfärg per nivå, samma färgnamn som getScoreLabel returnerar
const BAR_COLOR = {
  green: '#16a34a',
  amber: '#d97706',
  stone: '#9ca3af',
  slate: '#94a3b8',
};

function getScoreStyle(score: number, closed = false, date: string | null = null): {
  bg: string; border: string; textColor: string;
} {
  const { color } = getScoreLabel(score, closed);
  if (color === 'slate') return FREDAD_STYLE;
  const mi = date ? moonIntensity(moonColorIntensity(new Date(date + 'T12:00:00Z'))) : 1;
  return PALETTES[color][mi];
}



// ---------------------------------------------------------------------------
// Månadspoäng (för sidopanelens månadsöversikt)
// ---------------------------------------------------------------------------

function getMonthAvgScore(
  year: number, month: number,
  region: string,
  forecasts: Record<string, DayForecast[]>,
  speciesSlug: string | null,
  species: SpeciesInfo[]
): number {
  const daysInMonth = new Date(year, month, 0).getDate();
  let total = 0;
  for (let d = 1; d <= daysInMonth; d++) {
    const date = `${year}-${String(month).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    total += getDayScore(date, region, forecasts, speciesSlug, species).score;
  }
  return Math.round(total / daysInMonth);
}

// ---------------------------------------------------------------------------
// Poängberäkning
// ---------------------------------------------------------------------------

function getDayScore(
  date: string,
  region: string,
  forecasts: Record<string, DayForecast[]>,
  speciesSlug: string | null,
  species: SpeciesInfo[]
): { score: number; season: number; moonAdj: number; weatherAdj: number; isPrognosis: boolean; closed: boolean } {
  const dateObj  = new Date(date + 'T12:00:00Z');
  const forecast = forecasts[region]?.find(f => f.date === date);
  const rdata    = REGION_DATA.find(r => r.slug === region) ?? REGION_DATA[0];

  if (speciesSlug) {
    const sp = species.find(s => s.slug === speciesSlug);
    if (sp) {
      const r = getScore({ species: sp, date: dateObj, region: rdata, forecast });
      return { score: r.score, season: r.season, moonAdj: r.moonAdj, weatherAdj: r.weatherAdj, isPrognosis: !!forecast, closed: r.closed };
    }
  }

  // Alla arter: snitta säsongsbaslinjerna, lägg på måne och väder en gång.
  // Fredade arter exkluderas den månaden så de inte stänger eller drar ner gruppen.
  const month = dateObj.getUTCMonth() + 1;
  const openSpecies = species.filter(sp => !sp.closedMonths?.includes(month));
  const pool = openSpecies.length ? openSpecies : species;
  const results = pool.map(sp => getScore({ species: sp, date: dateObj, region: rdata, forecast }));
  const mean = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / (xs.length || 1);
  const seasonMean = mean(results.map(r => r.season));
  const moonAdj    = results[0]?.moonAdj ?? 0;
  const weatherAdj = results[0]?.weatherAdj ?? 0;
  const score = Math.max(0, Math.min(100, Math.round(seasonMean + moonAdj + weatherAdj)));
  return {
    score,
    season:      Math.round(seasonMean),
    moonAdj,
    weatherAdj,
    isPrognosis: !!forecast,
    closed:      false,
  };
}

// ---------------------------------------------------------------------------
// Kalenderrutnät
// ---------------------------------------------------------------------------

function MonthGrid({
  year, month, moonDays, forecasts, region, speciesSlug, species,
  onDayClick, selectedDate, today,
}: {
  year: number; month: number;
  moonDays: MoonDay[]; forecasts: Record<string, DayForecast[]>;
  region: string;
  speciesSlug: string | null; species: SpeciesInfo[];
  onDayClick: (date: string) => void; selectedDate: string | null; today: string;
}) {
  const isMobile = useIsMobile();
  const firstDay = new Date(`${year}-${String(month).padStart(2,'0')}-01`);
  let startDow = firstDay.getDay() - 1;
  if (startDow < 0) startDow = 6;

  const daysInMonth = new Date(year, month, 0).getDate();
  const cells: (string | null)[] = [
    ...Array(startDow).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => {
      const d = i + 1;
      return `${year}-${String(month).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    }),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div>
      {/* Veckodagar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '6px' }}>
        {DAYS_SV.map(d => (
          <div key={d} style={{ textAlign: 'center', fontSize: '11px', fontWeight: 600, color: '#9ca3af', padding: '2px 0' }}>{d}</div>
        ))}
      </div>

      {/* Dagar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
        {cells.map((date, i) => {
          if (!date) return <div key={i}></div>;

          const { isPrognosis, score, closed } = getDayScore(date, region, forecasts, speciesSlug, species);
          const moon       = moonDays.find(m => m.date === date);
          const d          = new Date(date + 'T12:00:00Z');
          const month      = d.getUTCMonth() + 1;
          const dayNum     = d.getUTCDate();
          const season     = getScoreStyle(score, closed, date);
          const barColor   = BAR_COLOR[getScoreLabel(score, closed).color];
          const isToday    = date === today;
          const isSelected = date === selectedDate;

          return (
            <button
              key={date}
              onClick={() => onDayClick(date)}
              style={{
                position: 'relative',
                borderRadius: '10px',
                padding: '6px 4px 0',
                overflow: 'hidden',
                border: isSelected
                  ? '2px solid #1F3A2E'
                  : isToday
                  ? '2px solid #1F3A2E'
                  : `1.5px solid ${season.border}`,
                background: isSelected ? '#e8f5e9' : season.bg,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                minHeight: '64px',
                transition: 'transform 0.1s, box-shadow 0.1s',
                boxShadow: isSelected ? '0 0 0 2px #1F3A2E' : 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = isSelected ? '0 0 0 2px #1F3A2E' : 'none'; }}
            >
              {/* Topprad: SMHI-badge för prognosdagar */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', minHeight: '12px' }}>
                {isPrognosis && (
                  <span style={{
                    fontSize: '7px', fontWeight: 700, color: '#2563eb',
                    background: '#eff6ff', border: '1px solid #bfdbfe',
                    borderRadius: '4px', padding: '0 3px', lineHeight: '12px',
                    letterSpacing: '0.02em',
                  }}>SMHI</span>
                )}
              </div>

              {/* Datum (mitten, fokus) */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1px' }}>
                <span style={{ fontSize: '15px', fontWeight: 700, color: season.textColor, lineHeight: 1 }}>{dayNum}</span>
                {closed ? (
                  <span style={{ fontSize: '8px', fontWeight: 700, color: '#475569', lineHeight: 1, letterSpacing: '0.03em', textTransform: 'uppercase' }}>Fredad</span>
                ) : !isMobile && (
                  <span style={{ fontSize: '10px', fontWeight: 600, color: season.textColor, opacity: 0.7, lineHeight: 1 }}>{score}</span>
                )}
              </div>

              {/* Bottenrad: månsymbol. Idag markeras av ramen, inte av en prick,
                  eftersom en mörk prick är omöjlig att skilja från 🌑 nymåne. */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '4px', minHeight: '14px' }}>
                {moon && (moon.phase === 'Fullmåne' || moon.phase === 'Nymåne') && (
                  <span style={{ fontSize: '12px', lineHeight: 1 }}>{moon.emoji}</span>
                )}
              </div>

              {/* Poängstapel: samma poäng som färgen och siffran */}
              <div style={{ height: '4px', marginTop: '4px', background: 'rgba(0,0,0,0.06)', width: '100%' }}>
                {!closed && (
                  <div style={{ height: '100%', width: `${score}%`, background: barColor }}></div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Dagspanel
// ---------------------------------------------------------------------------

function DayPanel({
  date, moonDays, forecasts, climateNormals, region, speciesSlug, species, symbolLabels, symbolEmojis, onClose,
}: {
  date: string; moonDays: MoonDay[]; forecasts: Record<string, DayForecast[]>;
  climateNormals: Record<string, number[]>; region: string;
  speciesSlug: string | null; species: SpeciesInfo[];
  symbolLabels: Record<number, string>; symbolEmojis: Record<number, string>; onClose: () => void;
}) {
  const d          = new Date(date + 'T12:00:00Z');
  const dayName    = ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'][d.getUTCDay()];
  const month      = d.getUTCMonth() + 1;
  const dayNum     = d.getUTCDate();
  const moon       = moonDays.find(m => m.date === date);
  const forecast   = forecasts[region]?.find(f => f.date === date);
  const norm       = climateNormals[region]?.[month - 1];
  const { score, season: seasonScore, moonAdj, weatherAdj, isPrognosis, closed } = getDayScore(date, region, forecasts, speciesSlug, species);
  const moonScore = moon?.score ?? 5;

  // Chipet färgas av samma poäng som står i det, via samma trösklar som rutan
  const season     = getScoreStyle(score, closed, date);
  const scoreLabel = getScoreLabel(score, closed).label;

  // Säsongsnivån är en egen upplysning om arten och använder därför sina egna
  // ord, men trösklarna kommer fortfarande från getScoreLabel.
  const SEASON_WORD = { green: 'Högsäsong', amber: 'Bra säsong', stone: 'Lågsäsong', slate: 'Fredad' };
  const speciesData = speciesSlug ? species.find(s => s.slug === speciesSlug) : null;
  const artSeason   = speciesData
    ? SEASON_WORD[getScoreLabel(seasonScore, closed).color]
    : null;

  const moonDots = moonScore >= 8 ? 3 : moonScore >= 6 ? 2 : 1;
  const moonColor = moonScore >= 8 ? '#6366f1' : moonScore >= 6 ? '#8b5cf6' : '#c4b5fd';

  return (
    <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '1.25rem', position: 'relative' }}>
      <button
        onClick={onClose}
        style={{ position: 'absolute', top: '12px', right: '12px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#9ca3af' }}
        aria-label="Stäng"
      >×</button>

      {/* Datum */}
      <div style={{ marginBottom: '1rem' }}>
        <p style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '2px' }}>{dayName}</p>
        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
          {dayNum} {MONTHS_SV[month - 1]}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: season.bg, color: season.textColor, border: `1px solid ${season.border}`, fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '20px' }}>
            {closed ? 'Fredad' : `${scoreLabel} · ${score}/100`}
          </span>
          {isPrognosis && (
            <span style={{ fontSize: '11px', color: '#2563eb', fontWeight: 600, background: '#eff6ff', border: '1px solid #bfdbfe', padding: '3px 8px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb', display: 'inline-block' }}></span>
              SMHI-prognos
            </span>
          )}
        </div>
      </div>

      {/* Prognosväder */}
      {forecast ? (
        <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '0.875rem', marginBottom: '1rem' }}>
          <p style={{ fontSize: '11px', color: '#2563eb', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>☁️</span> Väderprognos · SMHI
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[
              { label: 'Temp', val: `${forecast.tempMin}–${forecast.tempMax}°C` },
              { label: 'Vind', val: `${forecast.windSpeed} m/s ${windDirLabel(forecast.windDir)}` },
              { label: 'Nbd', val: `${forecast.precip} mm` },
              { label: 'Väder', val: (symbolEmojis[forecast.symbolCode] ?? '') + ' ' + (symbolLabels[forecast.symbolCode] ?? '–') },
            ].map(({ label, val }) => (
              <div key={label}>
                <p style={{ fontSize: '10px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1px' }}>{label}</p>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#111827' }}>{val}</p>
              </div>
            ))}
          </div>
        </div>
      ) : norm !== undefined && (
        <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '0.75rem', marginBottom: '1rem' }}>
          <p style={{ fontSize: '10px', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Historisk normaltemperatur</p>
          <p style={{ fontSize: '18px', fontWeight: 700, color: '#111827' }}>{norm > 0 ? '+' : ''}{norm}°C</p>
          <p style={{ fontSize: '10px', color: '#9ca3af' }}>Klimatnormal 1991–2020 · SMHI</p>
        </div>
      )}

      {/* Månfas -- tydlig med förklaring */}
      {moon && (
        <div style={{ background: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: '12px', padding: '0.875rem', marginBottom: '1rem' }}>
          <p style={{ fontSize: '10px', color: '#7c3aed', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
            Månfas
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '28px' }}>{moon.emoji}</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '13px', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>{moon.phase}</p>
              <p style={{ fontSize: '11px', color: '#6b7280', marginBottom: '6px' }}>{moon.illumination}% belyst</p>
              {/* Månfasprickar med förklaring */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: i < moonDots ? moonColor : '#e5e7eb', display: 'inline-block' }}></span>
                  ))}
                </div>
                <span style={{ fontSize: '11px', color: '#7c3aed', fontWeight: 500 }}>
                  {moonScore >= 8 ? 'Gynnsam månfas' : moonScore >= 6 ? 'Neutral månfas' : 'Ogynnsam månfas'}
                </span>
              </div>
              <p style={{ fontSize: '10px', color: '#9ca3af', marginTop: '4px', lineHeight: 1.5 }}>
                Månfas påverkar fisket svagt (~5%). Nymåne och fullmåne ger historiskt något fler hugg.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Artinfo */}
      {speciesData && artSeason && (
        <div style={{ background: closed ? FREDAD_STYLE.bg : '#f0fdf4', border: `1px solid ${closed ? FREDAD_STYLE.border : '#bbf7d0'}`, borderRadius: '12px', padding: '0.75rem', marginBottom: '1rem' }}>
          <p style={{ fontSize: '10px', color: closed ? FREDAD_STYLE.textColor : '#166534', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>{speciesData.name}</p>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>{artSeason}</p>
          <p style={{ fontSize: '11px', color: '#6b7280', marginTop: '2px' }}>{closed ? 'Fredningstid. Fiske efter arten kan vara förbjudet.' : `Säsong (baslinje): ${seasonScore}`}</p>
        </div>
      )}

      {/* Så räknas poängen */}
      {closed ? (
        <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '0.75rem' }}>
          <p style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', fontWeight: 600 }}>Fredad</p>
          <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5 }}>Fiske efter arten är fredat den här perioden, så ingen poäng visas. Kontrollera alltid de lokala reglerna för ditt vatten.</p>
        </div>
      ) : (
      <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '0.75rem' }}>
        <p style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', fontWeight: 600 }}>Så räknas poängen</p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ fontSize: '11px', color: '#6b7280', width: '64px', flexShrink: 0 }}>Säsong</span>
          <div style={{ flex: 1, height: '6px', background: '#f3f4f6', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${seasonScore}%`, height: '100%', background: '#16a34a', borderRadius: '3px' }}></div>
          </div>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#111827', width: '32px', textAlign: 'right' }}>{seasonScore}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', color: '#6b7280', width: '64px', flexShrink: 0 }}>Månfas</span>
          <span style={{ fontSize: '10px', color: '#9ca3af', flex: 1 }}>justering</span>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#7c3aed', width: '32px', textAlign: 'right' }}>{moonAdj >= 0 ? '+' : ''}{moonAdj}</span>
        </div>

        {forecast && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', color: '#6b7280', width: '64px', flexShrink: 0 }}>Väder</span>
            <span style={{ fontSize: '10px', color: '#9ca3af', flex: 1 }}>SMHI-prognos</span>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#2563eb', width: '32px', textAlign: 'right' }}>{weatherAdj >= 0 ? '+' : ''}{weatherAdj}</span>
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f3f4f6', marginTop: '8px', paddingTop: '8px' }}>
          <span style={{ fontSize: '11px', color: '#374151', fontWeight: 600 }}>Totalt</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>{score}/100</span>
        </div>
      </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Huvudkomponent
// ---------------------------------------------------------------------------

export default function KalenderWidget({
  year, moonDays, forecasts, climateNormals, species, symbolLabels, symbolEmojis,
}: Props) {
  const isMobile     = useIsMobile();
  const today        = new Date().toISOString().split('T')[0];
  const currentMonth = new Date().getMonth() + 1;

  const [selectedMonth,   setSelectedMonth]   = useState(currentMonth);
  const [selectedRegion,  setSelectedRegion]  = useState('mellansverige');
  const [selectedSpecies, setSelectedSpecies] = useState<string | null>('gadda');
  const [selectedDate,    setSelectedDate]    = useState<string | null>(null);

  const monthScores = useMemo(() => {
    const sp = selectedSpecies ? species.find(s => s.slug === selectedSpecies) : null;
    return Array.from({ length: 12 }, (_, i) => {
      const month = i + 1;
      return {
        month,
        score: getMonthAvgScore(year, month, selectedRegion, forecasts, selectedSpecies, species),
        closed: !!sp?.closedMonths?.includes(month),
      };
    });
  }, [selectedRegion, selectedSpecies]);

  const FILTER_BTN = (active: boolean) => ({
    padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 500,
    cursor: 'pointer',
    border: active ? '1px solid #1F3A2E' : '1px solid #e5e7eb',
    background: active ? '#1F3A2E' : '#fff',
    color: active ? '#fff' : '#374151',
    transition: 'all 0.1s',
    whiteSpace: 'nowrap' as const,
  });

  const prevMonth = selectedMonth > 1  ? selectedMonth - 1 : null;
  const nextMonth = selectedMonth < 12 ? selectedMonth + 1 : null;

  const selectedSpeciesData = selectedSpecies ? species.find(s => s.slug === selectedSpecies) : null;
  const selectedRegionLabel = REGIONS.find(r => r.slug === selectedRegion)?.label ?? '';
  const isAbsentHere        = !!selectedSpeciesData?.absentRegions?.includes(selectedRegion);

  return (
    <div style={{ fontFamily: 'inherit' }}>

      {/* Filter */}
      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '1rem 1.25rem', marginBottom: '1rem', overflowX: 'auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
          <div>
            <p style={{ fontSize: '10px', color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>Region</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {REGIONS.map(r => (
                <button key={r.slug} onClick={() => setSelectedRegion(r.slug)} style={FILTER_BTN(selectedRegion === r.slug)}>{r.label}</button>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontSize: '10px', color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>Art</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {SPECIES_GROUPS.flatMap(g =>
                species.filter(sp => sp.group === g.key).map(sp => (
                  <button key={sp.slug} onClick={() => setSelectedSpecies(sp.slug)} style={FILTER_BTN(selectedSpecies === sp.slug)}>{sp.name}</button>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Förklaring */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '8px 14px' : '16px', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #f3f4f6', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', color: '#374151', fontWeight: 600 }}>Färg och stapel = dagens poäng:</span>
          {[
            { color: '#dcfce7', border: '#bbf7d0', label: 'Toppläge'       },
            { color: '#fef3c7', border: '#fde68a', label: 'Värt att testa' },
            { color: '#f3f4f6', border: '#e5e7eb', label: 'Trögt'          },
            { color: '#f1f5f9', border: '#cbd5e1', label: 'Fredad'         },
          ].map(({ color, border, label }) => (
            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#6b7280' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: color, border: `1.5px solid ${border}`, display: 'inline-block', flexShrink: 0 }}></span>
              {label}
            </span>
          ))}
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#2563eb', marginLeft: isMobile ? 0 : 'auto' }}>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#2563eb', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '3px', padding: '1px 3px' }}>SMHI</span>
            Väderprognos (10 dgn)
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#374151' }}>
            <span style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: '#f0fdf4', border: '1.5px solid #d1fae5', display: 'inline-block' }}></span>
              <span style={{ fontSize: '11px', color: '#9ca3af' }}>→</span>
              <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: '#dcfce7', border: '1.5px solid #bbf7d0', display: 'inline-block' }}></span>
              <span style={{ fontSize: '11px', color: '#9ca3af' }}>→</span>
              <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: '#bbf7d0', border: '1.5px solid #6ee7b7', display: 'inline-block' }}></span>
            </span>
            Mörkare färg = mer gynnsam månfas 🌕
          </span>
        </div>
      </div>

      {/* Utbredningsnotis.
          Visas när arten har begränsad utbredning, alltså när forekomst är satt.
          Poängen beskriver säsong och månfas, inte om arten finns i vattnet
          framför läsaren. Ett toppläge för makrill i en region där arten knappt
          förekommer är falsk precision av samma slag som en påhittad
          flödessiffra: den ser ut som kunskap.

          Texten beskriver artens utbredning i sig och inte per region, eftersom
          regionerna saknar geografisk definition. Arter som finns i stort sett
          överallt saknar fältet och får ingen notis. */}
      {!isAbsentHere && selectedSpeciesData?.forekomst && (
        <div style={{
          background: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '10px',
          padding: '10px 14px',
          marginBottom: '1rem',
          display: 'flex',
          gap: '8px',
          alignItems: 'flex-start',
        }}>
          <span aria-hidden="true" style={{ fontSize: '13px', lineHeight: 1.5, flexShrink: 0 }}>📍</span>
          <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: 1.5, margin: 0 }}>
            <strong style={{ color: '#374151' }}>Utbredning:</strong> {selectedSpeciesData.forekomst}
          </p>
        </div>
      )}

      {/* Huvud-layout */}
      {isAbsentHere ? (
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '2.5rem 1.5rem', textAlign: 'center' as const }}>
          <p style={{ fontSize: '15px', fontWeight: 700, color: '#374151', marginBottom: '6px' }}>{selectedSpeciesData?.name} förekommer inte här</p>
          <p style={{ fontSize: '13px', color: '#6b7280', maxWidth: '380px', margin: '0 auto', lineHeight: 1.5 }}>Arten finns inte i {selectedRegionLabel}. Välj en annan region eller art för att se nappkalendern.</p>
        </div>
      ) : (
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 280px', gap: '1rem', alignItems: 'stretch' }}>

        {/* Kalender */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <button onClick={() => prevMonth && setSelectedMonth(prevMonth)} disabled={!prevMonth}
              style={{ background: 'none', border: 'none', cursor: prevMonth ? 'pointer' : 'default', opacity: prevMonth ? 1 : 0.25, fontSize: '22px', color: '#374151', padding: '4px 8px', lineHeight: 1 }}>‹</button>
            <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#111827' }}>{MONTHS_SV[selectedMonth - 1]} {year}</h2>
            <button onClick={() => nextMonth && setSelectedMonth(nextMonth)} disabled={!nextMonth}
              style={{ background: 'none', border: 'none', cursor: nextMonth ? 'pointer' : 'default', opacity: nextMonth ? 1 : 0.25, fontSize: '22px', color: '#374151', padding: '4px 8px', lineHeight: 1 }}>›</button>
          </div>

          <MonthGrid
            year={year} month={selectedMonth}
            moonDays={moonDays} forecasts={forecasts}
            region={selectedRegion} speciesSlug={selectedSpecies} species={species}
            onDayClick={setSelectedDate} selectedDate={selectedDate} today={today}
          />
        </div>

        {/* Sidopanel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', height: isMobile ? 'auto' : '100%' }}>
          {selectedDate ? (
            <DayPanel
              date={selectedDate} moonDays={moonDays} forecasts={forecasts}
              climateNormals={climateNormals} region={selectedRegion}
              speciesSlug={selectedSpecies} species={species}
              symbolLabels={symbolLabels} symbolEmojis={symbolEmojis}
              onClose={() => setSelectedDate(null)}
            />
          ) : (
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #f0f0f0' }}>
                <p style={{ fontSize: '12px', fontWeight: 600, color: '#374151' }}>📅 Månadsöversikt {year}</p>
              </div>
              <div style={{ padding: '0.5rem' }}>
                {monthScores.map(({ month, score, closed }) => {
                  const seasonSt = getScoreStyle(score, closed, null);
                  const isSel    = month === selectedMonth;
                  const isNow    = month === currentMonth;
                  return (
                    <button key={month} onClick={() => setSelectedMonth(month)}
                      style={{
                        width: '100%', display: 'flex', alignItems: 'center', gap: '8px',
                        padding: '5px 8px', borderRadius: '8px', cursor: 'pointer',
                        border: isSel ? '1px solid #1F3A2E' : '1px solid transparent',
                        background: isSel ? '#f0fdf4' : 'transparent',
                        transition: 'background 0.1s',
                      }}
                      onMouseEnter={e => { if (!isSel) e.currentTarget.style.background = '#f9fafb'; }}
                      onMouseLeave={e => { if (!isSel) e.currentTarget.style.background = 'transparent'; }}
                    >
                      <span style={{ fontSize: '11px', color: isNow ? '#1F3A2E' : '#6b7280', fontWeight: isNow ? 700 : 400, width: '28px', textAlign: 'left', flexShrink: 0 }}>
                        {MONTHS_ABB[month - 1]}
                      </span>
                      <div style={{ flex: 1, height: '8px', background: '#f3f4f6', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: closed ? '100%' : `${score}%`, height: '100%', background: seasonSt.border, borderRadius: '4px', transition: 'width 0.3s' }}></div>
                      </div>
                      <span style={{ fontSize: closed ? '9px' : '11px', fontWeight: 700, color: closed ? '#475569' : '#111827', width: closed ? 'auto' : '20px', textAlign: 'right', flexShrink: 0 }}>{closed ? 'Fredad' : score}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '0.875rem 1rem', marginTop: isMobile ? '0' : 'auto' }}>
            <p style={{ fontSize: '11px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
              <strong style={{ color: '#374151' }}>Färg, stapel och siffra</strong> visar samma poäng: säsong plus månfas, och väder de närmaste tio dygnen. Mörkare nyans = mer gynnsam månfas. 🌕🌑 visas vid fullmåne och nymåne. <strong style={{ color: '#2563eb' }}>SMHI</strong> = dagar där prognosen vägs in.
            </p>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}