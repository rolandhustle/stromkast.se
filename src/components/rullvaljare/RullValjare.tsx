import { useMemo, useState } from 'react';
import { trackAffiliateClick } from '../../lib/track';

/**
 * RullValjare
 * En deterministisk rullväljare i samma anda som LinValjare och EkolodValjare.
 * Tre val (art, fisketempo, budget) ger direkt en rekommendation ur de tolv
 * haspelrullarna i gear-reviews-collectionen.
 *
 * Rekommendationslogiken bygger på verifierade specar (vevtag, vikt, broms).
 * Kinetic-modellerna saknar publicerade nyckelspecar och deltar därför på pris
 * och storlek, aldrig med motiveringar de saknar täckning för. Taggen
 * "Specar ej publicerade" visas öppet, samma ärlighetslinje som i rullguiden.
 */

interface RullProduct {
  slug: string;
  title: string;
  brand: string;
  price: number;
  priceRange: 'budget' | 'mellanklass' | 'premium';
  affiliateUrl: string;
  merchant: string;
}

interface Props {
  rullar: RullProduct[];
}

type Art = 'abborre' | 'gos' | 'gadda' | 'kust';
type Tempo = 'allround' | 'snabb' | 'kraft' | 'basta';
type Budget = 'lag' | 'mellan' | 'oavsett';

const ARTER: { value: Art; label: string }[] = [
  { value: 'abborre', label: 'Abborre och finesse' },
  { value: 'gos', label: 'Gös och allround' },
  { value: 'gadda', label: 'Gädda' },
  { value: 'kust', label: 'Havsöring från kust' },
];

const TEMPON: { value: Tempo; label: string }[] = [
  { value: 'allround', label: 'Blandat fiske' },
  { value: 'snabb', label: 'Snabb invevning för jerk och spinnare' },
  { value: 'kraft', label: 'Kraft för tunga beten' },
  { value: 'basta', label: 'Bästa möjliga rulle' },
];

const BUDGETAR: { value: Budget; label: string }[] = [
  { value: 'lag', label: 'Upp till ca 1 000 kr' },
  { value: 'mellan', label: 'Upp till ca 2 500 kr' },
  { value: 'oavsett', label: 'Spelar ingen roll' },
];

/** Visningstaggar per slug. Endast verifierade uppgifter, rullspecar ligger inte i schemat. */
const ATTR: Record<string, { storlek: string; taggar: string[] }> = {
  'shimano-nexave-fi-2500': { storlek: '2500', taggar: ['73 cm/vev', '250 g', 'Instegsmodell'] },
  'okuma-ceymar-hd-2500a': { storlek: '2500', taggar: ['78 cm/vev', 'Filtbroms'] },
  'okuma-inspira-2500a': { storlek: '2500', taggar: ['88 cm/vev', '226 g'] },
  'okuma-itx-cb-2500h': { storlek: '2500', taggar: ['85 cm/vev', 'Kolfiberkropp'] },
  'shimano-miravel-2500': { storlek: '2500', taggar: ['73 cm/vev', '205 g'] },
  'shimano-vanford-fa-2500': { storlek: '2500', taggar: ['75 cm/vev', '175 g'] },
  'shimano-stella-fk-2500': { storlek: '2500', taggar: ['75 cm/vev', '210 g', 'Flaggskepp'] },
  'shimano-stradic-fm-c3000-hg': { storlek: 'C3000', taggar: ['86 cm/vev', '225 g', 'Kompakt kropp'] },
  'kinetic-marshall-4000-fd': { storlek: '4000', taggar: ['Förspolad fläta', 'Specar ej publicerade'] },
  'westin-w3-4000-fd': { storlek: '4000', taggar: ['79 cm/vev', '310 g', 'Kolfiberbroms'] },
  'shimano-vanford-fa-4000': { storlek: '4000', taggar: ['87 cm/vev', '215 g'] },
  'kinetic-brutalis-5000-fd': { storlek: '5000', taggar: ['Kolfiberbroms', 'Specar ej publicerade'] },
};

interface Rec {
  /** Slugs i prioritetsordning */
  slugs: string[];
  /** Ärlig not när valet behöver en förklaring */
  note?: string;
}

function recommend(art: Art, tempo: Tempo): Rec {
  if (art === 'abborre') {
    switch (tempo) {
      case 'allround':
        return { slugs: ['shimano-vanford-fa-2500', 'shimano-miravel-2500', 'okuma-ceymar-hd-2500a'] };
      case 'snabb':
        return { slugs: ['okuma-inspira-2500a', 'okuma-itx-cb-2500h', 'shimano-stradic-fm-c3000-hg'] };
      case 'kraft':
        return {
          slugs: ['shimano-miravel-2500', 'shimano-nexave-fi-2500', 'shimano-vanford-fa-2500'],
          note: 'Tunga beten på lätt abborrutrustning är en kompromiss. Långsammare invevning ger mer kraft, men fiskar du mest stora jiggar är en större rulle rätt väg.',
        };
      case 'basta':
        return { slugs: ['shimano-stella-fk-2500', 'shimano-vanford-fa-2500'] };
    }
  }

  if (art === 'gos') {
    switch (tempo) {
      case 'allround':
        return { slugs: ['shimano-stradic-fm-c3000-hg', 'shimano-vanford-fa-2500', 'okuma-inspira-2500a'] };
      case 'snabb':
        return { slugs: ['shimano-stradic-fm-c3000-hg', 'okuma-inspira-2500a', 'okuma-itx-cb-2500h'] };
      case 'kraft':
        return { slugs: ['shimano-vanford-fa-4000', 'westin-w3-4000-fd', 'kinetic-marshall-4000-fd'] };
      case 'basta':
        return { slugs: ['shimano-stella-fk-2500', 'shimano-stradic-fm-c3000-hg'] };
    }
  }

  if (art === 'gadda') {
    switch (tempo) {
      case 'allround':
        return { slugs: ['westin-w3-4000-fd', 'shimano-vanford-fa-4000', 'kinetic-marshall-4000-fd'] };
      case 'snabb':
        return { slugs: ['shimano-vanford-fa-4000', 'westin-w3-4000-fd'] };
      case 'kraft':
        return { slugs: ['westin-w3-4000-fd', 'kinetic-brutalis-5000-fd', 'kinetic-marshall-4000-fd'] };
      case 'basta':
        return { slugs: ['shimano-vanford-fa-4000', 'westin-w3-4000-fd'] };
    }
  }

  // art === 'kust'
  switch (tempo) {
    case 'allround':
      return {
        slugs: ['shimano-vanford-fa-2500', 'shimano-stradic-fm-c3000-hg', 'okuma-itx-cb-2500h'],
        note: 'Skölj alltid rullen i kranvatten efter pass i bräckt kustvatten, det gör mer för livslängden än något köpbeslut.',
      };
    case 'snabb':
      return {
        slugs: ['shimano-stradic-fm-c3000-hg', 'okuma-inspira-2500a'],
        note: 'Skölj alltid rullen i kranvatten efter pass i bräckt kustvatten, det gör mer för livslängden än något köpbeslut.',
      };
    case 'kraft':
      return {
        slugs: ['shimano-vanford-fa-4000', 'westin-w3-4000-fd'],
        note: 'Skölj alltid rullen i kranvatten efter pass i bräckt kustvatten, det gör mer för livslängden än något köpbeslut.',
      };
    case 'basta':
      return {
        slugs: ['shimano-stella-fk-2500', 'shimano-vanford-fa-2500'],
        note: 'Skölj alltid rullen i kranvatten efter pass i bräckt kustvatten, det gör mer för livslängden än något köpbeslut.',
      };
  }
}

function budgetCap(b: Budget): number {
  if (b === 'lag') return 1000;
  if (b === 'mellan') return 2500;
  return Infinity;
}

const COLOR_ACTIVE = 'bg-pine text-white border-pine';
const COLOR_IDLE = 'bg-white text-deep border-mist hover:border-pine';

export default function RullValjare({ rullar }: Props) {
  const [art, setArt] = useState<Art>('abborre');
  const [tempo, setTempo] = useState<Tempo>('allround');
  const [budget, setBudget] = useState<Budget>('oavsett');

  const result = useMemo(() => {
    const rec = recommend(art, tempo);
    const bySlug = new Map(rullar.map((p) => [p.slug, p]));
    const ranked = rec.slugs
      .map((s) => bySlug.get(s))
      .filter((p): p is RullProduct => Boolean(p));

    const cap = budgetCap(budget);
    const within = ranked.filter((p) => p.price <= cap);

    if (within.length === 0 && ranked.length > 0) {
      const cheapest = [...ranked].sort((a, b) => a.price - b.price).slice(0, 1);
      return {
        picks: cheapest,
        note: 'Inget alternativ i den här gruppen ligger under vald budget. Det billigaste visas i stället.',
      };
    }

    return { picks: within, note: rec.note };
  }, [art, tempo, budget, rullar]);

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
        <h2 className="font-display text-2xl font-bold text-deep mb-2">Rullväljaren</h2>
        <p className="text-stone text-sm leading-relaxed">
          Välj vad du fiskar, hur du fiskar och din budget. Du får direkt rätt rulle ur sortimentet,
          rangordnad på verifierade specar som vevtag och vikt, inte på kullagerantal.
        </p>
      </div>

      <fieldset className="mb-5">
        <legend className="text-xs font-semibold uppercase tracking-wider text-stone mb-2">Vad fiskar du mest?</legend>
        {renderChips(ARTER, art, setArt)}
      </fieldset>

      <fieldset className="mb-5">
        <legend className="text-xs font-semibold uppercase tracking-wider text-stone mb-2">Hur fiskar du?</legend>
        {renderChips(TEMPON, tempo, setTempo)}
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
                        {attr.storlek}
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
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-mist p-5">
            <p className="text-deep text-sm leading-relaxed mb-3">
              Vi har i dag ingen rulle i sortimentet som matchar exakt för det här valet. Prova en
              annan budget eller ett annat tempo.
            </p>
            <a
              href="/utrustning/haspelrullar/"
              className="inline-flex items-center gap-1.5 text-pine text-sm font-semibold hover:text-deep transition-colors underline underline-offset-2"
            >
              Se alla haspelrullar
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
