import { useMemo, useState } from 'react';
import { trackAffiliateClick } from '../../lib/track';

/**
 * EkolodValjare
 * En deterministisk ekolodsväljare i samma anda som LinValjare. Tre val (var du
 * fiskar, vad som är viktigast, budget) ger direkt en rekommendation ur de tolv
 * ekoloden i gear-reviews-collectionen, med ärliga noter när valet inte går ihop.
 *
 * Den centrala distinktionen verktyget löser, och som vanliga butikslistor
 * förklarar dåligt: Striker-serien har GPS och Quickdraw för egna kartor men
 * läser inte Navionics-sjökort, medan Echomap-serien är kartplotter med sjökort.
 * Deeper START exkluderas medvetet ur isfiske eftersom modellen inte stödjer det.
 */

interface EkolodProduct {
  slug: string;
  title: string;
  brand: string;
  price: number;
  priceRange: 'budget' | 'mellanklass' | 'premium';
  affiliateUrl: string;
  merchant: string;
}

interface Props {
  ekolod: EkolodProduct[];
}

type Plats = 'land' | 'bat' | 'is';
type Fokus = 'enkelt' | 'kartor' | 'sjokort' | 'basta';
type Budget = 'lag' | 'mellan' | 'oavsett';

const PLATSER: { value: Plats; label: string }[] = [
  { value: 'land', label: 'Land, brygga, kajak eller flytring' },
  { value: 'bat', label: 'Från båt' },
  { value: 'is', label: 'Isfiske' },
];

const FOKUS: { value: Fokus; label: string }[] = [
  { value: 'enkelt', label: 'Komma igång enkelt och billigt' },
  { value: 'kartor', label: 'Rita egna kartor och hitta tillbaka' },
  { value: 'sjokort', label: 'Färdiga sjökort för navigering' },
  { value: 'basta', label: 'Bästa möjliga bild' },
];

const BUDGETAR: { value: Budget; label: string }[] = [
  { value: 'lag', label: 'Upp till ca 2 000 kr' },
  { value: 'mellan', label: 'Upp till ca 4 500 kr' },
  { value: 'oavsett', label: 'Spelar ingen roll' },
];

/** Egenskapstaggar per slug, enbart för visning. Ekolodsdata ligger inte i schemat. */
const ATTR: Record<string, { typ: 'Kastbart' | 'Fast monterat'; taggar: string[] }> = {
  'deeper-start-global': { typ: 'Kastbart', taggar: ['Instegsmodell'] },
  'garmin-striker-cast-no-gps': { typ: 'Kastbart', taggar: ['Isfiske'] },
  'garmin-striker-cast-worldwide': { typ: 'Kastbart', taggar: ['GPS', 'Isfiske'] },
  'deeper-smart-sonar-pro-plus-2': { typ: 'Kastbart', taggar: ['GPS', 'Isfiske'] },
  'deeper-smart-sonar-chirp-plus-3': { typ: 'Kastbart', taggar: ['CHIRP', 'GPS', 'Isfiske'] },
  'deeper-smart-sonar-chirp-plus-4': { typ: 'Kastbart', taggar: ['CHIRP', 'AI', 'GPS', 'Isfiske'] },
  'garmin-striker-vivid-4cv': { typ: 'Fast monterat', taggar: ['GPS', '4 tum'] },
  'garmin-striker-vivid-5cv': { typ: 'Fast monterat', taggar: ['GPS', '5 tum'] },
  'garmin-striker-vivid-7cv': { typ: 'Fast monterat', taggar: ['GPS', 'Wi-Fi', '7 tum'] },
  'garmin-striker-vivid-9sv': { typ: 'Fast monterat', taggar: ['SideScan', 'GPS', '9 tum'] },
  'garmin-echomap-uhd2-52cv': { typ: 'Fast monterat', taggar: ['Sjökort', 'GPS', '5 tum'] },
  'garmin-echomap-uhd2-92sv': { typ: 'Fast monterat', taggar: ['Sjökort', 'SideScan', '9 tum'] },
};

interface Rec {
  /** Slugs i prioritetsordning */
  slugs: string[];
  /** Ärlig not när valet behöver en förklaring */
  note?: string;
  /** Echomap är topval, visa sjökortsnot */
  showChart?: boolean;
}

function recommend(plats: Plats, fokus: Fokus): Rec {
  if (plats === 'land') {
    switch (fokus) {
      case 'enkelt':
        return { slugs: ['deeper-start-global', 'garmin-striker-cast-no-gps'] };
      case 'kartor':
        return {
          slugs: ['garmin-striker-cast-worldwide', 'deeper-smart-sonar-pro-plus-2', 'deeper-smart-sonar-chirp-plus-3'],
        };
      case 'sjokort':
        return {
          slugs: ['garmin-striker-cast-worldwide', 'deeper-smart-sonar-pro-plus-2'],
          note: 'Färdiga sjökort kräver en fast monterad kartplotter och båt. Från land får du i stället egna djupkartor med ett kastbart ekolod med GPS.',
        };
      case 'basta':
        return { slugs: ['deeper-smart-sonar-chirp-plus-4', 'deeper-smart-sonar-chirp-plus-3'] };
    }
  }

  if (plats === 'bat') {
    switch (fokus) {
      case 'enkelt':
        return { slugs: ['garmin-striker-vivid-4cv', 'garmin-striker-vivid-5cv'] };
      case 'kartor':
        return {
          slugs: ['garmin-striker-vivid-5cv', 'garmin-striker-vivid-7cv', 'garmin-striker-vivid-4cv'],
          note: 'Striker Vivid har GPS och Quickdraw för egna kartor men läser inte Navionics-sjökort. Vill du ha färdiga sjökort, byt fokus till navigering.',
        };
      case 'sjokort':
        return { slugs: ['garmin-echomap-uhd2-52cv', 'garmin-echomap-uhd2-92sv'], showChart: true };
      case 'basta':
        return { slugs: ['garmin-echomap-uhd2-92sv', 'garmin-striker-vivid-9sv'], showChart: true };
    }
  }

  // plats === 'is'. Deeper START exkluderas, den stödjer inte isfiske.
  switch (fokus) {
    case 'enkelt':
      return { slugs: ['garmin-striker-cast-no-gps', 'garmin-striker-cast-worldwide'] };
    case 'kartor':
      return {
        slugs: ['garmin-striker-cast-worldwide', 'deeper-smart-sonar-pro-plus-2', 'deeper-smart-sonar-chirp-plus-3'],
      };
    case 'sjokort':
      return {
        slugs: ['garmin-striker-cast-worldwide', 'deeper-smart-sonar-pro-plus-2'],
        note: 'Sjökort är inte aktuellt på isen. Här räknas snabb, tydlig ekolodsbild och GPS för att märka ut hålen.',
      };
    case 'basta':
      return {
        slugs: ['deeper-smart-sonar-chirp-plus-4', 'deeper-smart-sonar-chirp-plus-3', 'deeper-smart-sonar-pro-plus-2'],
      };
  }
}

function budgetCap(b: Budget): number {
  if (b === 'lag') return 2000;
  if (b === 'mellan') return 4500;
  return Infinity;
}

const COLOR_ACTIVE = 'bg-pine text-white border-pine';
const COLOR_IDLE = 'bg-white text-deep border-mist hover:border-pine';

export default function EkolodValjare({ ekolod }: Props) {
  const [plats, setPlats] = useState<Plats>('bat');
  const [fokus, setFokus] = useState<Fokus>('enkelt');
  const [budget, setBudget] = useState<Budget>('oavsett');

  const result = useMemo(() => {
    const rec = recommend(plats, fokus);
    const bySlug = new Map(ekolod.map((p) => [p.slug, p]));
    const ranked = rec.slugs
      .map((s) => bySlug.get(s))
      .filter((p): p is EkolodProduct => Boolean(p));

    const cap = budgetCap(budget);
    const within = ranked.filter((p) => p.price <= cap);

    if (within.length === 0 && ranked.length > 0) {
      const cheapest = [...ranked].sort((a, b) => a.price - b.price).slice(0, 1);
      return {
        picks: cheapest,
        note: 'Inget alternativ i den här gruppen ligger under vald budget. Det billigaste visas i stället.',
        showChart: false,
      };
    }

    return { picks: within, note: rec.note, showChart: Boolean(rec.showChart) && within.length > 0 };
  }, [plats, fokus, budget, ekolod]);

  const renderChips = <T extends string>(
    options: { value: T; label: string }[],
    selected: T,
    onSelect: (v: T) => void,
  ) => (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = selected === o.value;
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={active}
            onClick={() => onSelect(o.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2 ${
              active ? COLOR_ACTIVE : COLOR_IDLE
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="max-w-xl mx-auto bg-mist/40 border border-mist rounded-3xl p-6 sm:p-8 not-prose">
      <div className="mb-6">
        <h2 className="font-display text-2xl font-bold text-deep mb-2">Ekolodsväljaren</h2>
        <p className="text-stone text-sm leading-relaxed">
          Välj var du fiskar, vad som är viktigast och din budget. Du får direkt rätt ekolod ur
          sortimentet. Behöver du sjökort säger vi det rakt ut, och löser valet inte ihop sig
          förklarar vi varför.
        </p>
      </div>

      <fieldset className="mb-5">
        <legend className="text-xs font-semibold uppercase tracking-wider text-stone mb-2">Var fiskar du mest?</legend>
        {renderChips(PLATSER, plats, setPlats)}
      </fieldset>

      <fieldset className="mb-5">
        <legend className="text-xs font-semibold uppercase tracking-wider text-stone mb-2">Vad är viktigast?</legend>
        {renderChips(FOKUS, fokus, setFokus)}
      </fieldset>

      <fieldset className="mb-7">
        <legend className="text-xs font-semibold uppercase tracking-wider text-stone mb-2">Budget</legend>
        {renderChips(BUDGETAR, budget, setBudget)}
      </fieldset>

      <div>
        {result.note && (
          <div className="mb-4 bg-white border border-mist rounded-2xl px-4 py-3">
            <p className="text-deep text-sm leading-relaxed">{result.note}</p>
          </div>
        )}

        {result.picks.length > 0 ? (
          <div className="space-y-3">
            {result.picks.map((p, i) => {
              const attr = ATTR[p.slug];
              return (
                <div key={p.slug} className="bg-white rounded-2xl border border-mist p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {i === 0 && (
                        <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-pine mb-1">
                          Bäst för dig
                        </span>
                      )}
                      <h3 className="font-display text-lg font-bold text-deep leading-tight">{p.title}</h3>
                      <p className="text-stone text-xs mt-0.5">{p.brand}</p>
                    </div>
                    <span className="text-deep font-bold whitespace-nowrap">{p.price.toLocaleString('sv-SE')} kr</span>
                  </div>

                  {attr && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      <span className="text-[11px] font-medium text-stone bg-mist/60 rounded-full px-2.5 py-1">
                        {attr.typ}
                      </span>
                      {attr.taggar.map((t) => (
                        <span key={t} className="text-[11px] font-medium text-stone bg-mist/60 rounded-full px-2.5 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={p.affiliateUrl}
                    target={p.affiliateUrl ? '_blank' : undefined}
                    rel={p.affiliateUrl ? 'noopener noreferrer sponsored' : undefined}
                    onClick={() => trackAffiliateClick(p.merchant, p.slug, i + 1, 'article')}
                    className="inline-flex items-center gap-1.5 mt-4 text-pine text-sm font-semibold hover:text-deep transition-colors underline underline-offset-2"
                  >
                    Se pris hos {p.merchant}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path
                        d="M2 10L10 2M10 2H4M10 2v6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              );
            })}

            {result.showChart && (
              <div className="bg-white rounded-2xl border border-mist p-5">
                <p className="text-deep text-sm leading-relaxed">
                  Echomap stödjer Garmin Navionics-sjökort, som köps separat. Välj sjökort för ditt
                  område, till exempel Bottenviken om du fiskar norra kusten.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-mist p-5">
            <p className="text-deep text-sm leading-relaxed mb-3">
              Vi har i dag inget ekolod i sortimentet som matchar exakt för det här valet. Prova en
              annan budget eller ett annat fokus.
            </p>
            <a
              href="/utrustning/"
              className="inline-flex items-center gap-1.5 text-pine text-sm font-semibold hover:text-deep transition-colors underline underline-offset-2"
            >
              Se all utrustning
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M3 6h6M6 3l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        )}
      </div>

      <p className="text-xs text-stone/60 text-center mt-6">
        Rekommendationerna bygger på vår redaktionella bedömning. Affiliatelänkar kan förekomma.
      </p>
    </div>
  );
}
