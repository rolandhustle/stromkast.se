/**
 * src/components/KalenderWidget.tsx
 *
 * Interaktiv nappkalender med dagsvyer, artfilter och regionfilter.
 * Två lager per dag: säsongsfärg (bakgrund) + månfaschip (daglig variation).
 * Prognosdagar markeras med SMHI-badge.
 */

import { useState, useMemo } from 'react';

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

const WIND_DIRS = ['N','NNO','NO','ONO','O','OSO','SO','SSO','S','SSV','SV','VSV','V','VNV','NV','NNV'];
function windDirLabel(deg: number): string {
  return WIND_DIRS[Math.round(deg / 22.5) % 16];
}

// ---------------------------------------------------------------------------
// Säsongsfärg (bakgrund per dag) -- baseras enbart på säsong
// ---------------------------------------------------------------------------

// moonScore 1-10 → intensitet 0=låg, 1=medel, 2=hög
function moonIntensity(moonScore: number): 0 | 1 | 2 {
  if (moonScore >= 8) return 2;
  if (moonScore >= 6) return 1;
  return 0;
}

function getSeasonStyle(month: number, speciesSlug: string | null, species: SpeciesInfo[], moonScore: number = 5): {
  bg: string; border: string; textColor: string;
} {
  let level: 'peak' | 'ok' | 'low' | 'off' = 'off';

  if (speciesSlug) {
    const sp = species.find(s => s.slug === speciesSlug);
    if (sp) {
      if (sp.peakMonths.includes(month))    level = 'peak';
      else if (sp.okMonths.includes(month)) level = 'ok';
      else                                  level = 'off';
    }
  } else {
    if ([4,5,9,10].includes(month))      level = 'peak';
    else if ([3,6,8,11].includes(month)) level = 'ok';
    else if ([2,7].includes(month))      level = 'low';
    else                                 level = 'off';
  }

  const mi = moonIntensity(moonScore);

  // Tre nyanser per säsongsnivå -- ljusare = sämre månfas, mörkare = bättre månfas
  const PALETTES = {
    peak: [
      { bg: '#f0fdf4', border: '#d1fae5', textColor: '#166534' }, // låg månfas
      { bg: '#dcfce7', border: '#bbf7d0', textColor: '#166534' }, // neutral
      { bg: '#bbf7d0', border: '#6ee7b7', textColor: '#065f46' }, // gynnsam
    ],
    ok: [
      { bg: '#fffbeb', border: '#fef3c7', textColor: '#92400e' },
      { bg: '#fef3c7', border: '#fde68a', textColor: '#92400e' },
      { bg: '#fde68a', border: '#fbbf24', textColor: '#78350f' },
    ],
    low: [
      { bg: '#f9fafb', border: '#f3f4f6', textColor: '#6b7280' },
      { bg: '#f3f4f6', border: '#e5e7eb', textColor: '#6b7280' },
      { bg: '#e5e7eb', border: '#d1d5db', textColor: '#4b5563' },
    ],
    off: [
      { bg: '#f9fafb', border: '#f3f4f6', textColor: '#9ca3af' },
      { bg: '#f3f4f6', border: '#e5e7eb', textColor: '#9ca3af' },
      { bg: '#e5e7eb', border: '#d1d5db', textColor: '#6b7280' },
    ],
  };

  return PALETTES[level][mi];
}



// ---------------------------------------------------------------------------
// Månadspoäng (för sidopanelens månadsöversikt)
// ---------------------------------------------------------------------------

function getMonthAvgScore(
  year: number, month: number,
  moonDays: MoonDay[],
  region: string,
  climateNormals: Record<string, number[]>,
  forecasts: Record<string, DayForecast[]>,
  speciesSlug: string | null,
  species: SpeciesInfo[]
): number {
  const daysInMonth = new Date(year, month, 0).getDate();
  let total = 0;
  for (let d = 1; d <= daysInMonth; d++) {
    const date = `${year}-${String(month).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    total += getDayScore(date, moonDays, region, climateNormals, forecasts, speciesSlug, species).score;
  }
  return Math.round(total / daysInMonth);
}

// ---------------------------------------------------------------------------
// Poängberäkning
// ---------------------------------------------------------------------------

function getDayScore(
  date: string,
  moonDays: MoonDay[],
  region: string,
  climateNormals: Record<string, number[]>,
  forecasts: Record<string, DayForecast[]>,
  speciesSlug: string | null,
  species: SpeciesInfo[]
): { score: number; moonScore: number; seasonScore: number; isPrognosis: boolean } {
  const d        = new Date(date + 'T12:00:00Z');
  const month    = d.getUTCMonth() + 1;
  const moonDay  = moonDays.find(m => m.date === date);
  const moonScore = moonDay?.score ?? 5;
  const forecast  = forecasts[region]?.find(f => f.date === date);
  const isPrognosis = !!forecast;

  let seasonScore = 2;
  if (speciesSlug) {
    const sp = species.find(s => s.slug === speciesSlug);
    if (sp) {
      if (sp.peakMonths.includes(month))    seasonScore = 9;
      else if (sp.okMonths.includes(month)) seasonScore = 6;
    }
  } else {
    const norm = climateNormals[region]?.[month - 1] ?? 10;
    if (norm >= 8 && norm <= 18)      seasonScore = 8;
    else if (norm >= 4 && norm < 8)   seasonScore = 6;
    else if (norm > 18 && norm <= 22) seasonScore = 5;
    else if (norm < 0)                seasonScore = 2;
    else                              seasonScore = 4;
  }

  let weatherBonus = 0;
  if (forecast) {
    if (forecast.tempMean >= 8 && forecast.tempMean <= 18)  weatherBonus += 12;
    else if (forecast.tempMean >= 4)                        weatherBonus += 4;
    else if (forecast.tempMean < 0)                         weatherBonus -= 10;
    if (forecast.windSpeed >= 1 && forecast.windSpeed <= 4) weatherBonus += 8;
    else if (forecast.windSpeed > 10)                       weatherBonus -= 15;
    if (forecast.precip > 5)                                weatherBonus -= 5;
  }

  const base  = Math.round(moonScore * 0.25 + seasonScore * 0.75);
  const score = Math.max(1, Math.min(10, base + Math.round(weatherBonus / 10)));

  return { score, moonScore, seasonScore, isPrognosis };
}

// ---------------------------------------------------------------------------
// Kalenderrutnät
// ---------------------------------------------------------------------------

function MonthGrid({
  year, month, moonDays, forecasts, climateNormals, region, speciesSlug, species,
  onDayClick, selectedDate, today,
}: {
  year: number; month: number;
  moonDays: MoonDay[]; forecasts: Record<string, DayForecast[]>;
  climateNormals: Record<string, number[]>; region: string;
  speciesSlug: string | null; species: SpeciesInfo[];
  onDayClick: (date: string) => void; selectedDate: string | null; today: string;
}) {
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

          const { moonScore, isPrognosis } = getDayScore(date, moonDays, region, climateNormals, forecasts, speciesSlug, species);
          const moon       = moonDays.find(m => m.date === date);
          const d          = new Date(date + 'T12:00:00Z');
          const month      = d.getUTCMonth() + 1;
          const dayNum     = d.getUTCDate();
          const season     = getSeasonStyle(month, speciesSlug, species, moonScore);
          const isToday    = date === today;
          const isSelected = date === selectedDate;

          return (
            <button
              key={date}
              onClick={() => onDayClick(date)}
              style={{
                position: 'relative',
                borderRadius: '10px',
                padding: '6px 4px 5px',
                border: isSelected
                  ? '2px solid #1F3A2E'
                  : isToday
                  ? '2px solid #1F3A2E'
                  : `1.5px solid ${season.border}`,
                background: isSelected ? '#e8f5e9' : season.bg,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3px',
                minHeight: '64px',
                transition: 'transform 0.1s, box-shadow 0.1s',
                boxShadow: isSelected ? '0 0 0 2px #1F3A2E' : 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = isSelected ? '0 0 0 2px #1F3A2E' : 'none'; }}
            >
              {/* Datum */}
              <span style={{ fontSize: '13px', fontWeight: 700, color: season.textColor, lineHeight: 1 }}>
                {dayNum}
              </span>

              {/* Emoji enbart vid fullmåne eller nymåne */}
              {moon && (moon.phase === 'Fullmåne' || moon.phase === 'Nymåne') && (
                <span style={{ fontSize: '11px', lineHeight: 1 }}>{moon.emoji}</span>
              )}

              {/* SMHI-badge för prognosdagar */}
              {isPrognosis && (
                <span style={{
                  position: 'absolute', top: '3px', right: '3px',
                  fontSize: '6px', fontWeight: 700, color: '#2563eb',
                  background: '#eff6ff', border: '1px solid #bfdbfe',
                  borderRadius: '3px', padding: '1px 2px', lineHeight: 1,
                  letterSpacing: '0.02em',
                }}>
                  SMHI
                </span>
              )}

              {/* Idag-markering */}
              {isToday && (
                <span style={{
                  position: 'absolute', bottom: '3px', left: '50%',
                  transform: 'translateX(-50%)',
                  width: '4px', height: '4px', borderRadius: '50%',
                  background: '#1F3A2E', display: 'inline-block',
                }}></span>
              )}
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
  const { score, moonScore, seasonScore, isPrognosis } = getDayScore(date, moonDays, region, climateNormals, forecasts, speciesSlug, species);
  const season     = getSeasonStyle(month, speciesSlug, species);

  const speciesData = speciesSlug ? species.find(s => s.slug === speciesSlug) : null;
  const artSeason   = speciesData
    ? speciesData.peakMonths.includes(month) ? 'Högsäsong'
    : speciesData.okMonths.includes(month)   ? 'Bra säsong'
    : 'Lågsäsong'
    : null;

  const scoreColor = score >= 7 ? '#16a34a' : score >= 5 ? '#d97706' : '#9ca3af';
  const scoreLabel = score >= 7 ? 'Toppläge' : score >= 5 ? 'Värt att testa' : 'Trögt';

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
            {scoreLabel} · {score}/10
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
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '0.75rem', marginBottom: '1rem' }}>
          <p style={{ fontSize: '10px', color: '#166534', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>{speciesData.name}</p>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>{artSeason}</p>
          <p style={{ fontSize: '11px', color: '#6b7280', marginTop: '2px' }}>Säsongspoäng: {seasonScore}/10</p>
        </div>
      )}

      {/* Poängsammansättning */}
      <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '0.75rem' }}>
        <p style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', fontWeight: 600 }}>Poängsammansättning</p>
        {[
          { label: 'Säsong', pct: '70%', val: seasonScore, color: '#16a34a' },
          { label: 'Månfas', pct: '25%', val: moonScore,   color: '#7c3aed' },
          { label: 'Väder',  pct: '5%',  val: forecast ? Math.min(10, Math.max(1, score)) : null, color: '#2563eb' },
        ].map(({ label, pct, val, color }) => val !== null && (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', color: '#6b7280', width: '50px', flexShrink: 0 }}>{label}</span>
            <span style={{ fontSize: '10px', color: '#9ca3af', width: '28px', flexShrink: 0 }}>{pct}</span>
            <div style={{ flex: 1, height: '6px', background: '#f3f4f6', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: `${val * 10}%`, height: '100%', background: color, borderRadius: '3px' }}></div>
            </div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#111827', width: '20px', textAlign: 'right' }}>{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Huvudkomponent
// ---------------------------------------------------------------------------

export default function KalenderWidget({
  year, moonDays, forecasts, climateNormals, species, symbolLabels, symbolEmojis,
}: Props) {
  const today        = new Date().toISOString().split('T')[0];
  const currentMonth = new Date().getMonth() + 1;

  const [selectedMonth,   setSelectedMonth]   = useState(currentMonth);
  const [selectedRegion,  setSelectedRegion]  = useState('mellansverige');
  const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null);
  const [selectedDate,    setSelectedDate]    = useState<string | null>(null);

  const monthScores = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const month = i + 1;
      return {
        month,
        score: getMonthAvgScore(year, month, moonDays, selectedRegion, climateNormals, forecasts, selectedSpecies, species),
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

  return (
    <div style={{ fontFamily: 'inherit' }}>

      {/* Filter */}
      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '1rem 1.25rem', marginBottom: '1rem' }}>
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
              <button onClick={() => setSelectedSpecies(null)} style={FILTER_BTN(selectedSpecies === null)}>Alla arter</button>
              {species.map(sp => (
                <button key={sp.slug} onClick={() => setSelectedSpecies(sp.slug)} style={FILTER_BTN(selectedSpecies === sp.slug)}>{sp.name}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Förklaring */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #f3f4f6', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', color: '#374151', fontWeight: 600 }}>Bakgrundsfärg = säsong:</span>
          {[
            { color: '#f0fdf4', border: '#bbf7d0', label: 'Högsäsong' },
            { color: '#fffbeb', border: '#fde68a', label: 'Bra säsong' },
            { color: '#f9fafb', border: '#e5e7eb', label: 'Lågsäsong'  },
          ].map(({ color, border, label }) => (
            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#6b7280' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: color, border: `1.5px solid ${border}`, display: 'inline-block', flexShrink: 0 }}></span>
              {label}
            </span>
          ))}
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#2563eb', marginLeft: 'auto' }}>
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
            Mörkare = gynnsam månfas 🌕
          </span>
        </div>
      </div>

      {/* Huvud-layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '1rem', alignItems: 'stretch' }}>

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
            moonDays={moonDays} forecasts={forecasts} climateNormals={climateNormals}
            region={selectedRegion} speciesSlug={selectedSpecies} species={species}
            onDayClick={setSelectedDate} selectedDate={selectedDate} today={today}
          />
        </div>

        {/* Sidopanel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', height: '100%' }}>
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
                {monthScores.map(({ month, score }) => {
                  const seasonSt = getSeasonStyle(month, selectedSpecies, species);
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
                        <div style={{ width: `${score * 10}%`, height: '100%', background: seasonSt.border, borderRadius: '4px', transition: 'width 0.3s' }}></div>
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#111827', width: '20px', textAlign: 'right' }}>{score}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '0.875rem 1rem', marginTop: 'auto' }}>
            <p style={{ fontSize: '11px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
              <strong style={{ color: '#374151' }}>Färgton</strong> = säsong × månfas. Mörkare nyans = gynnsam månfas den dagen. 🌕🌑 visas vid fullmåne och nymåne. <strong style={{ color: '#2563eb' }}>SMHI</strong> = aktuell prognos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
