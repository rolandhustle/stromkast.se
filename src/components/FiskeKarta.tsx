/**
 * src/components/FiskeKarta.tsx
 *
 * Interaktiv fiskekarta för startsidan.
 * En enda LeafletMap-instans. Höjd styrs via CSS-mediafråga.
 * Desktop: karta till vänster, panel till höger.
 * Mobil: karta överst, lista under.
 */

import { useState, useEffect, useRef } from 'react';
import { getScore, getScoreLabel, SPECIES } from '../data/calendar';
import 'leaflet/dist/leaflet.css';
import type { Map as LeafletMap, CircleMarker } from 'leaflet';

function fold(s: string): string {
  return s.toLowerCase()
    .replace(/[åä]/g, 'a').replace(/ö/g, 'o').replace(/[éè]/g, 'e')
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
  biteRaw:     number;
  error:       boolean;
  excerpt:     string;
  waterType:   string;
  iFiskeUrl:   string;
  heroImage:   string;
}

interface Props {
  showPanel?:   boolean;
  destinations: DestinationPin[];
  moonEmoji:    string;
  moonName:     string;
}

const PIN_COLORS: Record<string, string> = {
  green: '#16a34a', amber: '#d97706', stone: '#9ca3af',
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

function DestinationsList({
  destinations, active, onSelect, onClear, moonEmoji, moonName, scrollable,
}: {
  destinations: DestinationPin[];
  active:        DestinationPin | null;
  onSelect:      (d: DestinationPin) => void;
  onClear:       () => void;
  moonEmoji:     string;
  moonName:      string;
  scrollable?:   boolean;
}) {
  const sorted = [...destinations]
    .filter(d => !d.error)
    .sort((a, b) => b.biteRaw - a.biteRaw);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', height: scrollable ? '100%' : 'auto' }}>
      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', flex: scrollable ? 1 : 'none' }}>
        <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {active ? (
            <>
              <span style={{ fontSize: '12px', fontWeight: 500, color: '#374151' }}>Destination</span>
              <button onClick={onClear} style={{ fontSize: '11px', color: '#185FA5', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}>
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

        {!active && (
          <div style={{ overflowY: 'auto', maxHeight: scrollable ? '540px' : 'none' }}>
            {sorted.map((d, i) => {
              const bd = BADGE_STYLE[d.biteColor];
              return (
                <div key={d.slug} onClick={() => onSelect(d)}
                  style={{ padding: '0.7rem 1rem', cursor: 'pointer', borderBottom: i < sorted.length - 1 ? '1px solid #f5f5f5' : 'none', transition: 'background 0.1s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#f9fafb')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ fontSize: '11px', color: '#d1d5db', width: '14px', flexShrink: 0, textAlign: 'center' }}>{i + 1}</span>
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

        {active && (() => {
          const bd = BADGE_STYLE[active.biteColor];
          return (
            <div style={{ overflowY: 'auto' }}>
              {active.heroImage && (
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img src={active.heroImage} alt={active.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              )}
              <div style={{ padding: '1rem' }}>
                <div style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '2px' }}>{active.name}</div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '0.75rem' }}>{active.region}</div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 500, padding: '3px 9px', borderRadius: '14px', marginBottom: '0.75rem', background: bd.bg, color: bd.text }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: PIN_COLORS[active.biteColor], display: 'inline-block' }}></span>
                  {active.biteLabel}
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  {[
                    { label: 'Lufttemp', val: fmt(active.airTemp, '°C') },
                    { label: 'Vind', val: active.windSpeed !== null ? `${fmt(active.windSpeed, '')} m/s ${active.windDir}` : '–' },
                  ].map(({ label, val }) => (
                    <div key={label} style={{ background: '#f9fafb', borderRadius: '8px', padding: '0.5rem 0.75rem' }}>
                      <div style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>{label}</div>
                      <div style={{ fontSize: '15px', fontWeight: 500, color: '#111827' }}>{val}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <SpeciesChips species={active.species} lat={active.lat} />
                </div>
                {active.iFiskeUrl && (
                  <a href={active.iFiskeUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', width: '100%', padding: '0.45rem', borderRadius: '8px', background: '#f0fdf4', color: '#166534', fontSize: '12px', fontWeight: 500, textDecoration: 'none', marginBottom: '0.5rem', border: '1px solid #bbf7d0' }}
                  >
                    Fiskekort via ifiske.se →
                  </a>
                )}
                <a href={`/destinationer/${active.slug}/`}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', width: '100%', padding: '0.55rem', borderRadius: '8px', background: '#1F3A2E', color: '#fff', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}
                >
                  Guide till {active.name}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                {!active.error && (
                  <div style={{ fontSize: '10px', color: '#9ca3af', marginTop: '0.5rem', textAlign: 'center' }}>
                    SMHI: {active.stationName}
                  </div>
                )}
              </div>
            </div>
          );
        })()}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '0.875rem 1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '22px' }} role="img" aria-label={moonName}>{moonEmoji}</span>
          <div>
            <div style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>Månfas</div>
            <div style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>{moonName}</div>
          </div>
        </div>
        <a href="/forhallanden/"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#1F3A2E', borderRadius: '12px', padding: '1rem', textDecoration: 'none', fontSize: '13px', fontWeight: 600, color: '#fff' }}
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

export default function FiskeKarta({ destinations, moonEmoji, moonName, showPanel = true }: Props) {
  const [active, setActive] = useState<DestinationPin | null>(null);
  const mapRef     = useRef<HTMLDivElement>(null);
  const leafletRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Map<string, CircleMarker>>(new Map());

  useEffect(() => {
    if (!mapRef.current || leafletRef.current) return;

    import('leaflet').then(L => {
      const swedenBounds = L.latLngBounds(L.latLng(55.2, 11.0), L.latLng(69.1, 24.2));
      const map = L.map(mapRef.current!, {
        center: [63.0, 14.0], zoom: 4,
        minZoom: 4, maxZoom: 7,
        zoomControl: false, attributionControl: true,
        scrollWheelZoom: false, dragging: false, touchZoom: false,
        doubleClickZoom: false, boxZoom: false, keyboard: false,
        maxBounds: swedenBounds, maxBoundsViscosity: 1.0,
      });

      L.tileLayer(
        `https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png${import.meta.env.PUBLIC_CARTO_KEY ? `?key=${import.meta.env.PUBLIC_CARTO_KEY}` : ''}`,
        { attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> · © <a href="https://carto.com/">CARTO</a>', subdomains: 'abcd', maxZoom: 19 }
      ).addTo(map);

      destinations.forEach(dest => {
        const color  = PIN_COLORS[dest.biteColor] ?? PIN_COLORS.stone;
        const marker = L.circleMarker([dest.lat, dest.lng], {
          radius: dest.error ? 4 : 6, fillColor: color, color: '#fff', weight: 2.5, opacity: 1, fillOpacity: 1,
        }).addTo(map);

        const dotColor = dest.biteColor === 'green' ? '#16a34a' : dest.biteColor === 'amber' ? '#d97706' : '#9ca3af';
        const tempStr = dest.airTemp !== null ? dest.airTemp.toFixed(1) + '°C' : '–';
        const windStr = dest.windSpeed !== null ? dest.windSpeed.toFixed(1) + ' m/s ' + dest.windDir : '–';
        marker.bindPopup(
          `<div style="font-family:inherit;min-width:160px">
            <div style="font-size:13px;font-weight:600;color:#111827;margin-bottom:4px">${dest.name}</div>
            <div style="display:flex;align-items:center;gap:5px;margin-bottom:6px">
              <span style="width:7px;height:7px;border-radius:50%;background:${dotColor};display:inline-block;flex-shrink:0"></span>
              <span style="font-size:11px;font-weight:500;color:#374151">${dest.biteLabel}</span>
            </div>
            <div style="font-size:11px;color:#6b7280;margin-bottom:2px">🌡 ${tempStr} &nbsp; 💨 ${windStr}</div>
            <div style="margin-top:8px">
              <a href="/destinationer/${dest.slug}/" style="display:block;text-align:center;background:#1F3A2E;color:#fff;font-size:12px;font-weight:500;padding:6px 10px;border-radius:7px;text-decoration:none">
                Visa guide →
              </a>
            </div>
          </div>`,
          { closeButton: false, className: 'stromkast-popup', maxWidth: 200 }
        );

        marker.on('click', () => setActive(dest));
        markersRef.current.set(dest.slug, marker);
      });

      leafletRef.current = map;
      setTimeout(() => { map.invalidateSize(); map.setView([62.0, 16.0], 5); }, 400);
    });

    return () => {
      leafletRef.current?.remove();
      leafletRef.current = null;
      markersRef.current.clear();
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
        radius: isActive ? 8 : (dest.error ? 4 : 6),
      });
    });
  }, [active]);

  return (
    <>
      <style>{`
        .sk-map-container {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
          background: #dde8d8;
          width: 100%;
          position: relative;
        }
        .sk-map-inner {
          width: 100%;
          height: 700px;
        }
        @media (min-width: 640px) {
          .sk-map-inner {
            height: 720px;
          }
        }
        .sk-layout {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .sk-layout {
            display: grid;
            grid-template-columns: 420px 1fr;
            gap: 1.5rem;
            align-items: start;
          }
        }
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
        .stromkast-popup .leaflet-popup-content-wrapper {
          border-radius: 10px !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15) !important;
          padding: 0 !important;
          border: 1px solid #e5e7eb !important;
        }
        .stromkast-popup .leaflet-popup-content {
          margin: 12px 14px !important;
        }
        .stromkast-popup .leaflet-popup-tip-container { display: none !important; }
      `}</style>

      <div className="sk-layout">
        {/* Karta */}
        <div className="sk-map-container">
          <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 800, background: 'rgba(31,58,46,0.88)', color: '#fff', fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '6px', pointerEvents: 'none' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite', display: 'inline-block' }}></span>
            Live · SMHI
          </div>
          <div ref={mapRef} className="sk-map-inner" aria-label="Karta över svenska fiskevatten" />
          <div style={{ padding: '0.5rem 1rem', borderTop: '1px solid #f0f0f0', background: '#fff' }}>
            <span style={{ fontSize: '11px', color: '#9ca3af' }}>Data: SMHI Open Data · CC BY 4.0</span>
          </div>
        </div>

        {/* Lista */}
        {showPanel && (
        <DestinationsList
          destinations={destinations}
          active={active}
          onSelect={setActive}
          onClear={() => setActive(null)}
          moonEmoji={moonEmoji}
          moonName={moonName}
          scrollable={true}
        />
        )}
      </div>
    </>
  );
}
