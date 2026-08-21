import { useMemo, useState } from 'react';
import { trackAffiliateClick } from '../../lib/track';

/**
 * MultiValjare
 * En deterministisk multirulleväljare i samma anda som RullValjare, LinValjare
 * och EkolodValjare. Tre val ger direkt en rekommendation ur de tolv
 * multirullarna i gear-reviews-collectionen.
 *
 * Skillnad mot RullValjare: primäraxeln är betesvikt, inte art. Spolens
 * tröghet avgör vilka beten en multirulle kan kasta, och det valet gör folk
 * fel oftare än artvalet. Art kommer in först i andra hand via bromskraft.
 *
 * Rekommendationslogiken bygger på verifierade specar från tillverkarnas egna
 * tabeller (utväxling, linintag, vikt, bromskraft, lager). BFT saknar
 * publicerad bromskraft och visar taggen "Bromskraft anges ej" öppet, samma
 * ärlighetslinje som i guiden.
 */

interface MultiProduct {
  slug: string;
  title: string;
  brand: string;
  price: number;
  priceRange: 'budget' | 'mellanklass' | 'premium';
  affiliateUrl: string;
  merchant: string;
}

interface Props {
  multirullar: MultiProduct[];
}

type Bete = 'latt' | 'medel' | 'tungt';
type Tempo = 'kraft' | 'allround' | 'snabb';
type Budget = 'lag' | 'mellan' | 'oavsett';

const BETEN: { value: Bete; label: string }[] = [
  { value: 'latt', label: 'Under 10 g' },
  { value: 'medel', label: '10 till 40 g' },
  { value: 'tungt', label: 'Över 40 g' },
];

/**
 * Etiketterna namnger beten i stället för utväxling. Läsaren vet vad hen fiskar
 * med, inte vilket utväxlingstal det motsvarar, och den översättningen är
 * väljarens jobb. Alla tre är grammatiskt parallella och kräver ingen
 * förförståelse.
 *
 * Singular i 'kraft'-etiketten är medvetet. Plural drar tanken mot stora
 * gäddbeten, vilket krockar med viktvalet 'under 10 g'. 'Djupgående' beskriver
 * hur betet går, inte hur stort det är, och små crankbaits under tio gram har
 * verkligt vattenmotstånd.
 */
const TEMPON: { value: Tempo; label: string }[] = [
  { value: 'kraft', label: 'Djupgående wobbler och gummifisk' },
  { value: 'allround', label: 'Jigg och blandat fiske' },
  { value: 'snabb', label: 'Jerkbait och ytbeten' },
];

const BUDGETAR: { value: Budget; label: string }[] = [
  { value: 'lag', label: 'Under 1 500 kr' },
  { value: 'mellan', label: 'Under 3 000 kr' },
  { value: 'oavsett', label: 'Spelar ingen roll' },
];

/** Visningstaggar per slug. Endast verifierade uppgifter ur tillverkarnas tabeller. */
const ATTR: Record<string, { storlek: string; taggar: string[] }> = {
  'kinetic-ozor-bc-200': { storlek: '200', taggar: ['6.3:1', '220 g', '5 kg broms', 'Bromstyp anges ej'] },
  'shimano-caius-c-151-hg': { storlek: '150', taggar: ['72 cm/vev', '185 g', '5 kg broms', 'Komposit'] },
  'shimano-slx-151-hg': { storlek: '150', taggar: ['72 cm/vev', '195 g', '5 kg broms', 'Aluminium'] },
  '13-fishing-modus-c2': { storlek: '2', taggar: ['6.6:1', '210 g', '8,2 kg broms', 'Endast sötvatten'] },
  'shimano-slx-xt-a-151-hg': { storlek: '150', taggar: ['72 cm/vev', '205 g', '5,5 kg broms', 'Extern bromsratt'] },
  'westin-w4-101-ssg': { storlek: '100', taggar: ['66 cm/vev', '195 g', '5,5 kg broms', 'Intern bromsjustering'] },
  'bft-rebel-x8': { storlek: '300-klass', taggar: ['6.2:1', '280 g', 'Magnet och centrifugal', 'Bromskraft anges ej'] },
  'shimano-curado-bfs-xg': { storlek: 'BFS', taggar: ['82 cm/vev', '175 g', '3,5 kg broms', 'Extern bromsratt'] },
  'westin-w6-bc-301-hd': { storlek: '300', taggar: ['70 cm/vev', '284 g', '13 kg broms', 'Intern bromsjustering'] },
  'shimano-curado-m-151-hg': { storlek: '150', taggar: ['74 cm/vev', '190 g', '6 kg broms', 'Extern bromsratt'] },
  'shimano-curado-k-301-hg': { storlek: '300', taggar: ['88 cm/vev', '305 g', '8 kg broms', '230 m 0,30'] },
  'shimano-tranx-b-301-hg': { storlek: '300', taggar: ['103 cm/vev', '345 g', '8 kg broms', 'Extern bromsratt'] },
};

/**
 * Rullar där tillverkaren uttryckligen anger att bromsen justeras under
 * sidoplattan. Endast dessa två är verifierade. För övriga anger tillverkaren
 * inte var justeringen sker, och då påstås ingenting.
 */
const INTERN_BROMS = new Set<string>(['westin-w4-101-ssg', 'westin-w6-bc-301-hd']);

const INTERN_BROMS_NOT =
  'Bromsen på toppvalet justeras under sidoplattan, inte med en ratt på utsidan. I praktiken betyder det att du ställer in den en gång per pass i stället för när betet byts. Är du ny på multirulle är det värt att veta.';

interface Rec {
  /** Slugs i prioritetsordning */
  slugs: string[];
  /** Ärlig not när valet behöver en förklaring */
  note?: string;
}

const HASPELNOT =
  'Beten under tio gram ligger i underkant för de flesta multirullar. Spolen behöver rörelseenergi för att komma igång, och för lätta beten ger korta kast oavsett bromsinställning. En haspelrulle är oftast både enklare och kastar längre i det spannet.';

function recommend(bete: Bete, tempo: Tempo): Rec {
  if (bete === 'latt') {
    switch (tempo) {
      case 'kraft':
        return {
          slugs: ['shimano-slx-151-hg', 'shimano-caius-c-151-hg'],
          note: 'Kraft och lätta beten drar åt olika håll. En 150-rulle är kompromissen, men fiskar du mest under tio gram är haspel rätt verktyg.',
        };
      case 'allround':
        return {
          slugs: ['shimano-caius-c-151-hg', 'shimano-slx-151-hg', 'kinetic-ozor-bc-200'],
          note: HASPELNOT,
        };
      case 'snabb':
        return {
          slugs: ['shimano-curado-bfs-xg', 'shimano-slx-xt-a-151-hg'],
          note: 'Curado BFS är den enda rullen i sortimentet som är byggd för beten under fem gram. Den har en mycket lätt spole men bara 3,5 kilo bromskraft, så den är fel val om gädda kan dyka upp.',
        };
    }
  }

  if (bete === 'medel') {
    switch (tempo) {
      case 'kraft':
        return { slugs: ['westin-w4-101-ssg', '13-fishing-modus-c2', 'shimano-curado-k-301-hg'] };
      case 'allround':
        return { slugs: ['shimano-slx-151-hg', 'shimano-slx-xt-a-151-hg', 'shimano-curado-m-151-hg'] };
      case 'snabb':
        return { slugs: ['shimano-curado-m-151-hg', 'shimano-slx-xt-a-151-hg', 'shimano-slx-151-hg'] };
    }
  }

  // bete === 'tungt'
  switch (tempo) {
    case 'kraft':
      return {
        slugs: ['westin-w6-bc-301-hd', 'bft-rebel-x8', 'shimano-curado-k-301-hg'],
        note: 'Låg utväxling ger mer kraft per vevtag, vilket är vad som krävs för stora gummifiskar och djupgående beten. Priset är att inveving av långa kast tar fler varv.',
      };
    case 'allround':
      return { slugs: ['shimano-curado-k-301-hg', 'westin-w6-bc-301-hd', 'bft-rebel-x8'] };
    case 'snabb':
      return {
        slugs: ['shimano-tranx-b-301-hg', 'shimano-curado-k-301-hg'],
        note: 'Tranx tar hem 103 cm per vev, mest i sortimentet, vilket är byggt för att hinna ta upp slack mellan jerkryck. Den väger också 345 gram och kräver ett spö som balanserar vikten.',
      };
  }
}

/**
 * Gränserna följer priceRange-indelningen för kategorin: budget under 1 500,
 * mellanklass 1 500 till 2 999, premium från 3 000. Samma brytpunkter som i
 * frontmattern, så väljaren och kategorisidan säger samma sak. Testat mot alla
 * nio kombinationer av betesvikt och tempo: budgetvalet ändrar utfallet i
 * samtliga. Ändras gränserna, kontrollera om det fortfarande gäller.
 */
function budgetCap(b: Budget): number {
  if (b === 'lag') return 1500;
  if (b === 'mellan') return 3000;
  return Infinity;
}

const COLOR_ACTIVE = 'bg-pine text-white border-pine';
const COLOR_IDLE = 'bg-white text-deep border-mist hover:border-pine';

export default function MultiValjare({ multirullar }: Props) {
  const [bete, setBete] = useState<Bete>('medel');
  const [tempo, setTempo] = useState<Tempo>('allround');
  const [budget, setBudget] = useState<Budget>('oavsett');

  const result = useMemo(() => {
    const rec = recommend(bete, tempo);
    const bySlug = new Map(multirullar.map((p) => [p.slug, p]));
    const ranked = rec.slugs
      .map((s) => bySlug.get(s))
      .filter((p): p is MultiProduct => Boolean(p));

    const cap = budgetCap(budget);
    const within = ranked.filter((p) => p.price <= cap);

    if (within.length === 0 && ranked.length > 0) {
      const cheapest = [...ranked].sort((a, b) => a.price - b.price).slice(0, 1);
      return {
        picks: cheapest,
        notes: ['Inget alternativ i den här gruppen ligger under vald budget. Det billigaste visas i stället.'],
      };
    }

    const top = within[0];
    const notes = [rec.note, top && INTERN_BROMS.has(top.slug) ? INTERN_BROMS_NOT : undefined].filter(
      (n): n is string => Boolean(n),
    );

    return { picks: within, notes };
  }, [bete, tempo, budget, multirullar]);

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
        <h2 className="font-display text-2xl font-bold text-deep mb-2">Multirulleväljaren</h2>
        <p className="text-stone text-sm leading-relaxed">
          Börja med betesvikten. Den avgör spolstorleken, och spolstorleken avgör resten.
          Rekommendationerna bygger på tillverkarnas egna tabeller för linintag, vikt och
          bromskraft, inte på kullagerantal.
        </p>
      </div>

      <fieldset className="mb-5">
        <legend className="text-xs font-semibold uppercase tracking-wider text-stone mb-2">
          Hur tunga är dina vanligaste beten?
        </legend>
        {renderChips(BETEN, bete, setBete)}
      </fieldset>

      <fieldset className="mb-5">
        <legend className="text-xs font-semibold uppercase tracking-wider text-stone mb-2">
          Vilken typ av bete fiskar du mest?
        </legend>
        {renderChips(TEMPON, tempo, setTempo)}
      </fieldset>

      <fieldset className="mb-7">
        <legend className="text-xs font-semibold uppercase tracking-wider text-stone mb-2">Budget</legend>
        {renderChips(BUDGETAR, budget, setBudget)}
      </fieldset>

      <div>
        {result.notes.map((n) => (
          <div key={n} className="mb-4 bg-white border border-mist rounded-2xl px-4 py-3">
            <p className="text-deep text-sm leading-relaxed">{n}</p>
          </div>
        ))}

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
              Vi har i dag ingen multirulle i sortimentet som matchar exakt för det här valet. Prova
              en annan budget eller ett annat tempo.
            </p>
            <a
              href="/utrustning/multirullar/"
              className="inline-flex items-center gap-1.5 text-pine text-sm font-semibold hover:text-deep transition-colors underline underline-offset-2"
            >
              Se alla multirullar
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
