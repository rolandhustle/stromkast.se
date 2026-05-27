/**
 * src/components/FiskeKarta.tsx
 *
 * Interaktiv fiskekarta för startsidan.
 * Sidopanel: scrollbar lista med alla destinationer, betningsindikator och artchips.
 * Detaljvy vid klick på nål eller destination i listan.
 */

import { useState, useEffect, useRef } from 'react';

// ---------------------------------------------------------------------------
// Hook: detekterar mobilvy
// ---------------------------------------------------------------------------
function useIsMobile(breakpoint = 640): boolean {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}
import type { Map as LeafletMap, CircleMarker } from 'leaflet';

// ---------------------------------------------------------------------------
// Säsongsdata (speglar src/data/seasons.json)
// ---------------------------------------------------------------------------

const SEASONS: Record<string, { peak: number[]; ok: number[] }> = {
  'gädda':        { peak: [3,4,9,10],    ok: [2,5,8,11] },
  'abborre':      { peak: [4,5,9,10],    ok: [3,6,8,11] },
  'gös':          { peak: [6,7,8],       ok: [5,9] },
  'öring':        { peak: [3,4,9,10],    ok: [2,5,8,11] },
  'havsöring':    { peak: [3,4,10,11],   ok: [2,5,9,12] },
  'lax':          { peak: [6,7,8,9],     ok: [5,10] },
  'harr':         { peak: [6,8,9],       ok: [5,7,10] },
  'röding':       { peak: [4,5,10,11],   ok: [3,6,9,12] },
  'kanadaröding': { peak: [4,5,10,11],   ok: [3,6,9,12] },
  'asp':          { peak: [5,6],         ok: [4,7] },
  'sik':          { peak: [10,11],       ok: [9,12] },
};

type SpeciesSeason = 'peak' | 'ok' | 'off';

function getSpeciesSeason(art: string, month: number): SpeciesSeason {
  const entry = SEASONS[art.toLowerCase()];
  if (!entry) return 'off';
  if (entry.peak.includes(month)) return 'peak';
  if (entry.ok.includes(month))   return 'ok';
  return 'off';
}

// ---------------------------------------------------------------------------
// Typer
// ---------------------------------------------------------------------------

export interface DestinationPin {
  slug:        string;
  name:        string;
  region:      string;
  lat:         number;
  lng:         number;
  species:     string[];
  airTemp:     number | null;
  windSpeed:   number | null;
  windDir:     string;
  humidity:    number | null;
  stationName: string;
  biteLabel:   string;
  biteColor:   'green' | 'amber' | 'stone';
  biteScore:   number;
  error:       boolean;
}

interface Props {
  destinations: DestinationPin[];
  moonEmoji:    string;
  moonName:     string;
}

// ---------------------------------------------------------------------------
// Konstanter
// ---------------------------------------------------------------------------

const PIN_COLORS: Record<string, string> = {
  green: '#16a34a',
  amber: '#d97706',
  stone: '#9ca3af',
};

const BADGE_STYLE: Record<string, { bg: string; text: string }> = {
  green: { bg: '#dcfce7', text: '#166534' },
  amber: { bg: '#fef3c7', text: '#92400e' },
  stone: { bg: '#f3f4f6', text: '#6b7280' },
};

const SPECIES_CHIP: Record<SpeciesSeason, { bg: string; text: string; dot: string }> = {
  peak: { bg: '#dcfce7', text: '#166534', dot: '#16a34a' },
  ok:   { bg: '#fef9ec', text: '#92400e', dot: '#d97706' },
  off:  { bg: '#f3f4f6', text: '#9ca3af', dot: '#d1d5db' },
};

function fmt(val: number | null, unit = ''): string {
  return val !== null ? `${val.toFixed(1)}${unit}` : '–';
}

const MONTH = new Date().getMonth() + 1;

// ---------------------------------------------------------------------------
// Artchips
// ---------------------------------------------------------------------------

function SpeciesChips({ species }: { species: string[] }) {
  // Sortera: peak först, ok sen, off sist
  const sorted = [...species].sort((a, b) => {
    const order = { peak: 0, ok: 1, off: 2 };
    return order[getSpeciesSeason(a, MONTH)] - order[getSpeciesSeason(b, MONTH)];
  });

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '6px' }}>
      {sorted.map(art => {
        const season = getSpeciesSeason(art, MONTH);
        const style  = SPECIES_CHIP[season];
        return (
          <span
            key={art}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '3px',
              fontSize: '10px', fontWeight: 500, padding: '2px 6px',
              borderRadius: '10px', background: style.bg, color: style.text,
            }}
          >
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: style.dot, display: 'inline-block', flexShrink: 0 }}></span>
            {art.charAt(0).toUpperCase() + art.slice(1)}
          </span>
        );
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sidopanel
// ---------------------------------------------------------------------------

function Panel({
  destinations,
  active,
  onSelect,
  onClear,
  moonEmoji,
  moonName,
  isMobile,
}: {
  destinations: DestinationPin[];
  active:        DestinationPin | null;
  onSelect:      (d: DestinationPin) => void;
  onClear:       () => void;
  moonEmoji:     string;
  moonName:      string;
  isMobile:      boolean;
}) {
  const sorted = [...destinations]
    .filter(d => !d.error)
    .sort((a, b) => b.biteScore - a.biteScore);

  return (
    <div style={{ display: isMobile ? 'none' : 'flex', flexDirection: 'column', gap: '0.875rem', height: '100%' }}>

      {/* Huvudpanel */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}>
        {/* Rubrik */}
        <div style={{
          padding: '0.75rem 1rem',
          borderBottom: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {active ? (
            <>
              <span style={{ fontSize: '12px', fontWeight: 500, color: '#374151', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1C5.1 1 3.5 2.6 3.5 4.5c0 2.8 3.5 8.5 3.5 8.5s3.5-5.7 3.5-8.5C10.5 2.6 8.9 1 7 1Z" fill="#1F3A2E"/>
                  <circle cx="7" cy="4.5" r="1.5" fill="#fff"/>
                </svg>
                Destination
              </span>
              <button onClick={onClear} style={{ fontSize: '11px', color: '#185FA5', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px', padding: 0, fontFamily: 'inherit' }}>
                ← Alla vatten
              </button>
            </>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <span style={{ fontSize: '12px', fontWeight: 500, color: '#374151', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '14px' }}>🏆</span> Bäst just nu
              </span>
              <div style={{ display: 'flex', gap: '8px', fontSize: '10px', color: '#9ca3af' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16a34a', display: 'inline-block' }}></span>Toppläge</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#d97706', display: 'inline-block' }}></span>Värt att testa</span>
              </div>
            </div>
          )}
        </div>

        {/* Destinationslista */}
        {!active && (
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {sorted.map((d, i) => {
              const bd = BADGE_STYLE[d.biteColor];
              return (
                <div
                  key={d.slug}
                  onClick={() => onSelect(d)}
                  style={{
                    padding: '0.7rem 1rem',
                    cursor: 'pointer',
                    borderBottom: i < sorted.length - 1 ? '1px solid #f5f5f5' : 'none',
                    transition: 'background 0.1s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#f9fafb')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  {/* Rad 1: rang, namn, badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ fontSize: '11px', fontWeight: 500, color: '#d1d5db', width: '14px', flexShrink: 0, textAlign: 'center' }}>
                      {i + 1}
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>{d.name}</span>
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: '4px',
                          fontSize: '10px', fontWeight: 500, padding: '2px 7px',
                          borderRadius: '12px', flexShrink: 0,
                          background: bd.bg, color: bd.text,
                        }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: PIN_COLORS[d.biteColor], display: 'inline-block' }}></span>
                          {d.biteLabel}
                        </span>
                      </div>
                      {/* Rad 2: väder */}
                      <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>
                        {fmt(d.airTemp, '°C')} · {fmt(d.windSpeed, ' m/s')} {d.windDir}
                      </div>
                      {/* Rad 3: artchips */}
                      <SpeciesChips species={d.species} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Detaljvy */}
        {active && (() => {
          const bd = BADGE_STYLE[active.biteColor];
          return (
            <div style={{ padding: '1rem' }}>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '2px' }}>{active.name}</div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '0.875rem' }}>{active.region}</div>

              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 500, padding: '3px 9px', borderRadius: '14px', marginBottom: '0.875rem', background: bd.bg, color: bd.text }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: PIN_COLORS[active.biteColor], display: 'inline-block' }}></span>
                {active.biteLabel}
              </span>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.875rem' }}>
                {[
                  { label: 'Lufttemp', val: fmt(active.airTemp, '°C') },
                  { label: 'Vind',     val: active.windSpeed !== null ? `${fmt(active.windSpeed, '')} m/s ${active.windDir}` : '–' },
                ].map(({ label, val }) => (
                  <div key={label} style={{ background: '#f9fafb', borderRadius: '8px', padding: '0.5rem 0.75rem' }}>
                    <div style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>{label}</div>
                    <div style={{ fontSize: '15px', fontWeight: 500, color: '#111827' }}>{val}</div>
                  </div>
                ))}
              </div>

              {/* Artchips i detaljvy */}
              <div style={{ marginBottom: '0.875rem' }}>
                <div style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Arter i säsong</div>
                <SpeciesChips species={active.species} />
                <div style={{ display: 'flex', gap: '12px', marginTop: '6px', fontSize: '10px', color: '#9ca3af' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#16a34a', display: 'inline-block' }}></span>Högsäsong</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#d97706', display: 'inline-block' }}></span>Bra säsong</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#d1d5db', display: 'inline-block' }}></span>Lågsäsong</span>
                </div>
              </div>

              <a
                href={`/destinationer/${active.slug}/`}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', width: '100%', padding: '0.55rem', borderRadius: '8px', background: '#1F3A2E', color: '#fff', fontSize: '13px', fontWeight: 500, textDecoration: 'none', transition: 'opacity 0.12s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Guide till {active.name}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {!active.error && (
                <div style={{ fontSize: '10px', color: '#9ca3af', marginTop: '0.6rem', textAlign: 'center' }}>
                  SMHI: {active.stationName}
                </div>
              )}
            </div>
          );
        })()}
      </div>

      {/* Månfas + Fiskeprognos CTA -- sida vid sida */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '0.875rem', marginTop: 'auto' }}>

        {/* Månfas */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '0.875rem 1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '22px' }} role="img" aria-label={moonName}>{moonEmoji}</span>
          <div>
            <div style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>Månfas</div>
            <div style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>{moonName}</div>
          </div>
        </div>

        {/* Fiskeprognos CTA */}
        <a
          href="/forhallanden/"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            background: '#1F3A2E', borderRadius: '100px',
            padding: '1rem 2rem', textDecoration: 'none',
            fontSize: '16px', fontWeight: 600, color: '#fff',
            transition: 'opacity 0.12s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Förhållanden just nu
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Huvudkomponent
// ---------------------------------------------------------------------------

export default function FiskeKarta({ destinations, moonEmoji, moonName }: Props) {
  const isMobile   = useIsMobile();
  const mapRef     = useRef<HTMLDivElement>(null);
  const leafletRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Map<string, CircleMarker>>(new Map());
  const [active, setActive] = useState<DestinationPin | null>(null);

  useEffect(() => {
    if (!mapRef.current || leafletRef.current) return;

    import('leaflet').then(L => {
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id   = 'leaflet-css';
        link.rel  = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      const swedenBounds = isMobile
        ? L.latLngBounds(L.latLng(54.0, 8.0), L.latLng(70.0, 28.0))
        : L.latLngBounds(L.latLng(55.2, 11.0), L.latLng(69.1, 24.2));

      const map = L.map(mapRef.current!, {
        center:              isMobile ? [62.5, 18.0] : [62.5, 17.5],
        zoom:                isMobile ? 4 : 5,
        minZoom:             isMobile ? 4 : 5,
        maxZoom:             isMobile ? 4 : 5,
        zoomControl:         false,
        attributionControl:  true,
        scrollWheelZoom:     false,
        dragging:            false,
        touchZoom:           false,
        doubleClickZoom:     false,
        boxZoom:             false,
        keyboard:            false,
        maxBounds:           swedenBounds,
        maxBoundsViscosity:  1.0,
      });

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> · © <a href="https://carto.com/">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19,
        }
      ).addTo(map);

      destinations.forEach(dest => {
        const color  = PIN_COLORS[dest.biteColor] ?? PIN_COLORS.stone;
        const marker = L.circleMarker([dest.lat, dest.lng], {
          radius:      dest.error ? 7 : 9,
          fillColor:   color,
          color:       '#fff',
          weight:      2.5,
          opacity:     1,
          fillOpacity: 1,
        }).addTo(map);

        marker.bindTooltip(
          `<strong style="font-size:12px">${dest.name}</strong><br/><span style="font-size:11px;color:#6b7280">${dest.biteLabel}${dest.airTemp !== null ? ' · ' + dest.airTemp.toFixed(1) + '°C' : ''}</span>`,
          { permanent: false, direction: 'top', offset: [0, -8], className: 'stromkast-tooltip' }
        );

        marker.on('click', () => setActive(dest));
        markersRef.current.set(dest.slug, marker);
      });

      leafletRef.current = map;

      // Tvinga Leaflet att räkna om storlek och centrering efter rendering
      setTimeout(() => {
        map.invalidateSize();
        map.setView(
          isMobile ? [62.5, 18.0] : [62.5, 17.5],
          isMobile ? 5 : 5
        );
      }, 100);
    });

    return () => {
      leafletRef.current?.remove();
      leafletRef.current = null;
    };
  }, []);

  useEffect(() => {
    markersRef.current.forEach((marker, slug) => {
      const dest     = destinations.find(d => d.slug === slug);
      const isActive = active?.slug === slug;
      if (!dest) return;
      marker.setStyle({
        weight: isActive ? 3.5 : 2.5,
        color:  isActive ? '#1F3A2E' : '#fff',
        radius: isActive ? 11 : (dest.error ? 7 : 9),
      });
    });
  }, [active]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '420px 1fr', gap: '1.5rem', alignItems: 'stretch' }}>

      {/* Karta */}
      <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', background: '#dde8d8' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 800, background: 'rgba(31,58,46,0.88)', color: '#fff', fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '6px', pointerEvents: 'none' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite', display: 'inline-block' }}></span>
            Live · SMHI
          </div>
        </div>
        <div ref={mapRef} style={{ width: '100%', height: isMobile ? '280px' : '700px' }} aria-label="Karta över svenska fiskevatten med betningsindikator" />
        <div style={{ padding: '0.7rem 1rem', borderTop: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff' }}>
          <span style={{ fontSize: '11px', color: '#9ca3af' }}>Data: SMHI Open Data · CC BY 4.0</span>
        </div>
      </div>

      {/* Sidopanel -- dölj på mobil */}
      {!isMobile && <Panel
        destinations={destinations}
        active={active}
        onSelect={setActive}
        onClear={() => setActive(null)}
        moonEmoji={moonEmoji}
        moonName={moonName}
        isMobile={isMobile}
      />}

      {/* Mobil: horisontell destinationslista */}
      {isMobile && (
        <div style={{ marginTop: '0.875rem' }}>
          <p style={{ fontSize: '11px', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>🏆 Bäst just nu</p>
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '8px' }}>
            {[...destinations].filter(d => !d.error).sort((a, b) => b.biteScore - a.biteScore).map(d => {
              const bd = ({ green: { bg: '#dcfce7', text: '#166534' }, amber: { bg: '#fef3c7', text: '#92400e' }, stone: { bg: '#f3f4f6', text: '#6b7280' } } as Record<string,{bg:string;text:string}>)[d.biteColor];
              return (
                <a key={d.slug} href={`/destinationer/${d.slug}/`}
                  style={{ flexShrink: 0, width: '140px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '0.75rem', textDecoration: 'none' }}>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>{d.name}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', fontWeight: 500, padding: '2px 7px', borderRadius: '10px', background: bd.bg, color: bd.text, marginBottom: '6px' }}>{d.biteLabel}</span>
                  <p style={{ fontSize: '11px', color: '#6b7280' }}>{d.airTemp !== null ? `${d.airTemp.toFixed(1)}°C` : ''}{d.windSpeed !== null ? ` · ${d.windSpeed.toFixed(1)} m/s` : ''}</p>
                </a>
              );
            })}
          </div>
          <a href="/forhallanden/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px', padding: '0.75rem', borderRadius: '12px', background: '#1F3A2E', color: '#fff', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
            Förhållanden just nu →
          </a>
        </div>
      )}

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.35} }
        .stromkast-tooltip {
          background: rgba(31,58,46,0.92) !important;
          border: none !important;
          border-radius: 8px !important;
          color: #fff !important;
          padding: 5px 10px !important;
          box-shadow: none !important;
          font-family: inherit;
        }
        .stromkast-tooltip::before { display: none !important; }
        .leaflet-tooltip-top.stromkast-tooltip::before { display: none !important; }
      `}</style>
    </div>
  );
}
