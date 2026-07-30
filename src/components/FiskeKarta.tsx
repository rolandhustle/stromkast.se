/**
 * src/components/FiskeKarta.tsx
 *
 * Interaktiv fiskekarta för startsidan.
 * Sidopanel: scrollbar lista med alla destinationer, betningsindikator och artchips.
 * Detaljvy vid klick på nål eller destination i listan.
 */

import { useState, useEffect, useRef } from 'react';
import { getScore, getScoreLabel, SPECIES } from '../data/calendar';
import 'leaflet/dist/leaflet.css';

function useIsMobile(breakpoint = 640): boolean {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}
import type { Map as LeafletMap, CircleMarker } from 'leaflet';

// Artchipsens säsong läses direkt ur calendar.ts SPECIES, samma källa som
// nappkalendern och destinationspoängen. Regionen tas per vatten via latitud.
function fold(s: string): string {
  return s.toLowerCase()
    .replace(/[åä]/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/[éè]/g, 'e')
    .replace(/[^a-z0-9]/g, '');
}

function regionFromLat(lat: number): { slug: string; name: string; offset: number } {
  const offset = Math.max(-2.5, Math.min(1.5, (59.33 - lat) / 3.7));
  return { slug: 'lat', name: '', offset };
}

type SpeciesSeason = 'peak' | 'ok' | 'off' | 'fredad';

function getSpeciesSeason(art: string, lat: number, now: Date): SpeciesSeason {
  const sp = SPECIES.find(s => s.slug === fold(art));
  if (!sp) return 'off';
  const { season, closed } = getScore({ species: sp, date: now, region: regionFromLat(lat) });
  // Trösklarna ägs av getScoreLabel i calendar.ts och räknas inte om här.
  // Chipet beskriver artens säsong, så det är säsongsbaslinjen som skickas in,
  // inte totalpoängen. Nivåindelningen är däremot densamma som överallt annars.
  const { color } = getScoreLabel(season, closed);
  if (color === 'slate') return 'fredad';
  if (color === 'green') return 'peak';
  if (color === 'amber') return 'ok';
  return 'off';
}

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
  excerpt:     string;
  waterType:   string;
  iFiskeUrl:   string;
  heroImage:   string;
}

interface Props {
  destinations: DestinationPin[];
  moonEmoji:    string;
  moonName:     string;
}

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
  peak:   { bg: '#dcfce7', text: '#166534', dot: '#16a34a' },
  ok:     { bg: '#fef9ec', text: '#92400e', dot: '#d97706' },
  off:    { bg: '#f3f4f6', text: '#9ca3af', dot: '#d1d5db' },
  fredad: { bg: '#f1f5f9', text: '#475569', dot: '#94a3b8' },
};

function fmt(val: number | null, unit = ''): string {
  return val !== null ? `${val.toFixed(1)}${unit}` : '–';
}

const NOW = new Date();

function SpeciesChips({ species, lat }: { species: string[]; lat: number }) {
  const sorted = [...species].sort((a, b) => {
    const order = { peak: 0, ok: 1, fredad: 2, off: 3 };
    return order[getSpeciesSeason(a, lat, NOW)] - order[getSpeciesSeason(b, lat, NOW)];
  });

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '6px' }}>
      {sorted.map(art => {
        const season = getSpeciesSeason(art, lat, NOW);
        const style  = SPECIES_CHIP[season];
        return (
          <span key={art} style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '10px', fontWeight: 500, padding: '2px 6px', borderRadius: '10px', background: style.bg, color: style.text }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: style.dot, display: 'inline-block', flexShrink: 0 }}></span>
            {art.charAt(0).toUpperCase() + art.slice(1)}
          </span>
        );
      })}
    </div>
  );
}

function Panel({
  destinations, active, onSelect, onClear, moonEmoji, moonName, isMobile,
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', height: isMobile ? 'auto' : '100%' }}>

      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', flex: 1 }}>

        {/* Rubrik */}
        <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
          <div style={{ flex: 1, overflowY: 'auto', maxHeight: '580px' }}>
            {sorted.map((d, i) => {
              const bd = BADGE_STYLE[d.biteColor];
              return (
                <div key={d.slug} onClick={() => onSelect(d)}
                  style={{ padding: '0.7rem 1rem', cursor: 'pointer', borderBottom: i < sorted.length - 1 ? '1px solid #f5f5f5' : 'none', transition: 'background 0.1s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#f9fafb')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ fontSize: '11px', fontWeight: 500, color: '#d1d5db', width: '14px', flexShrink: 0, textAlign: 'center' }}>{i + 1}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>{d.name}</span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', fontWeight: 500, padding: '2px 7px', borderRadius: '12px', flexShrink: 0, background: bd.bg, color: bd.text }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: PIN_COLORS[d.biteColor], display: 'inline-block' }}></span>
                          {d.biteLabel}
                        </span>
                      </div>
                      <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>
                        {fmt(d.airTemp, '°C')} · {fmt(d.windSpeed, ' m/s')} {d.windDir}
                      </div>
                      <SpeciesChips species={d.species} lat={d.lat} />
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
            <div style={{ overflowY: 'auto', flex: 1 }}>

              {/* Hero-bild */}
              {active.heroImage && (
                <div style={{ height: '250px', overflow: 'hidden' }}>
                  <img src={active.heroImage} alt={active.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              )}

              <div style={{ padding: '1rem' }}>
                <div style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '2px' }}>{active.name}</div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '0.5rem' }}>{active.region}</div>

                {active.excerpt && (
                  <p style={{ fontSize: '12px', color: '#4b5563', lineHeight: '1.6', marginBottom: '0.875rem', borderLeft: '2px solid #e5e7eb', paddingLeft: '0.75rem' }}>
                    {active.excerpt}
                  </p>
                )}

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

                <div style={{ marginBottom: '0.875rem' }}>
                  <div style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Arter i säsong</div>
                  <SpeciesChips species={active.species} lat={active.lat} />
                  <div style={{ display: 'flex', gap: '12px', marginTop: '6px', fontSize: '10px', color: '#9ca3af' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#16a34a', display: 'inline-block' }}></span>Högsäsong</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#d97706', display: 'inline-block' }}></span>Bra säsong</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#d1d5db', display: 'inline-block' }}></span>Lågsäsong</span>
                  </div>
                </div>

                {active.iFiskeUrl && (
                  <a href={active.iFiskeUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#185FA5', marginBottom: '0.875rem', textDecoration: 'none' }}>
                    Fiskekort via ifiske.se →
                  </a>
                )}

                <a href={`/destinationer/${active.slug}/`}
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
            </div>
          );
        })()}
      </div>

      {/* Månfas + CTA */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem', marginTop: 'auto' }}>
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '0.875rem 1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '22px' }} role="img" aria-label={moonName}>{moonEmoji}</span>
          <div>
            <div style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>Månfas</div>
            <div style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>{moonName}</div>
          </div>
        </div>
        <a href="/forhallanden/"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#1F3A2E', borderRadius: '100px', padding: '1rem 2rem', textDecoration: 'none', fontSize: '16px', fontWeight: 600, color: '#fff', transition: 'opacity 0.12s' }}
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

export default function FiskeKarta({ destinations, moonEmoji, moonName }: Props) {
  const isMobile   = useIsMobile();
  const mapRef     = useRef<HTMLDivElement>(null);
  const leafletRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Map<string, CircleMarker>>(new Map());
  const [active, setActive] = useState<DestinationPin | null>(null);

  useEffect(() => {
    if (!mapRef.current || leafletRef.current) return;

    import('leaflet').then(L => {

      const swedenBounds = L.latLngBounds(L.latLng(55.2, 11.0), L.latLng(69.1, 24.2));

      const map = L.map(mapRef.current!, {
        center:             [62.5, 17.5],
        zoom:               5,
        minZoom:            5,
        maxZoom:            5,
        zoomControl:        false,
        attributionControl: true,
        scrollWheelZoom:    false,
        dragging:           false,
        touchZoom:          false,
        doubleClickZoom:    false,
        boxZoom:            false,
        keyboard:           false,
        maxBounds:          swedenBounds,
        maxBoundsViscosity: 1.0,
      });

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        { attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> · © <a href="https://carto.com/">CARTO</a>', subdomains: 'abcd', maxZoom: 19 }
      ).addTo(map);

      destinations.forEach(dest => {
        const color  = PIN_COLORS[dest.biteColor] ?? PIN_COLORS.stone;
        const marker = L.circleMarker([dest.lat, dest.lng], {
          radius: dest.error ? 7 : 9, fillColor: color, color: '#fff', weight: 2.5, opacity: 1, fillOpacity: 1,
        }).addTo(map);

        marker.bindTooltip(
          `<strong style="font-size:12px">${dest.name}</strong><br/><span style="font-size:11px;color:#6b7280">${dest.biteLabel}${dest.airTemp !== null ? ' · ' + dest.airTemp.toFixed(1) + '°C' : ''}</span>`,
          { permanent: false, direction: 'top', offset: [0, -8], className: 'stromkast-tooltip' }
        );

        marker.on('click', () => setActive(dest));
        markersRef.current.set(dest.slug, marker);
      });

      leafletRef.current = map;

      setTimeout(() => {
        map.invalidateSize();
        map.setView([62.5, 17.5], 5);
      }, 400);
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

  if (isMobile) {
    return (
      <div style={{ width: '100%' }}>
        <Panel
          destinations={destinations}
          active={active}
          onSelect={setActive}
          onClear={() => setActive(null)}
          moonEmoji={moonEmoji}
          moonName={moonName}
          isMobile={true}
        />
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: '1.5rem', alignItems: 'stretch' }}>

      <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', background: '#dde8d8', width: '100%', height: '760px' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 800, background: 'rgba(31,58,46,0.88)', color: '#fff', fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '6px', pointerEvents: 'none' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite', display: 'inline-block' }}></span>
            Live · SMHI
          </div>
        </div>
        <div ref={mapRef} style={{ width: '100%', height: '720px' }} aria-label="Karta över svenska fiskevatten med betningsindikator" />
        <div style={{ padding: '0.7rem 1rem', borderTop: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', background: '#fff' }}>
          <span style={{ fontSize: '11px', color: '#9ca3af' }}>Data: SMHI Open Data · CC BY 4.0</span>
        </div>
      </div>

      <Panel
        destinations={destinations}
        active={active}
        onSelect={setActive}
        onClear={() => setActive(null)}
        moonEmoji={moonEmoji}
        moonName={moonName}
        isMobile={false}
      />

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