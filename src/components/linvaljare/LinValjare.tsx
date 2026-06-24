import { useMemo, useState } from 'react';
import { trackAffiliateClick } from '../../lib/track';

/**
 * LinValjare
 * En deterministisk linväljare för guiden om val av flätlina.
 * Till skillnad från SpoQuiz är det ingen flerstegsquiz utan en live-panel:
 * art + teknik (+ om du vill läsa hugget på linan) ger direkt rekommendation
 * av diameter/PE, färg och tafs, plus matchande flätlina och fluorocarbontafs
 * ur sortimentet där en finns.
 *
 * Komponenten är medvetet ärlig om sortimentets gränser: när rätt svar är
 * monofilament (trolling, lax) säger den det rakt ut i stället för att tvinga
 * fram en flätlina, och den varnar för gäddtafs och flätförbud på laxsträckor.
 */

interface LineProduct {
  slug: string;
  title: string;
  brand: string;
  price: number;
  affiliateUrl: string;
  merchant: string;
}

interface Props {
  lines: LineProduct[];
  leaders: LineProduct[];
  monos: LineProduct[];
}

type Art = 'abborre' | 'gadda' | 'gos' | 'havsoring' | 'lax' | 'blandat';
type Teknik = 'jigg' | 'dropshot' | 'vertikal' | 'spinn' | 'jerkbait' | 'trolling';

const ARTER: { value: Art; label: string }[] = [
  { value: 'abborre', label: 'Abborre' },
  { value: 'gadda', label: 'Gädda' },
  { value: 'gos', label: 'Gös' },
  { value: 'havsoring', label: 'Havsöring / kust' },
  { value: 'lax', label: 'Lax (älv)' },
  { value: 'blandat', label: 'Blandat' },
];

const TEKNIKER: { value: Teknik; label: string }[] = [
  { value: 'jigg', label: 'Jigg / softbait' },
  { value: 'dropshot', label: 'Dropshot' },
  { value: 'vertikal', label: 'Vertikal' },
  { value: 'spinn', label: 'Spinn / wobbler' },
  { value: 'jerkbait', label: 'Jerkbait' },
  { value: 'trolling', label: 'Trolling' },
];

interface Rec {
  /** Huvudlina som flätlina, eller null när mono är rätt val */
  braid: string | null;
  /** Tafsrekommendation i text */
  leader: string;
  /** Slugs på flätlinor i prioritetsordning */
  preferred: string[];
  /** Slugs på fluorocarbontafsar i prioritetsordning */
  leaderSlugs: string[];
  /** Sätts när monofilament är rätt huvudlina i stället för fläta */
  mono?: { dim: string; why: string };
  /** Gädda kräver alltid stål/titan eller grov FC */
  wireWarning?: boolean;
  /** Lax: flätförbud och Östersjöregler */
  laxWarning?: boolean;
  /** Extra not, t.ex. lucka i sortimentet */
  note?: string;
}

function recommend(art: Art, teknik: Teknik): Rec {
  // Trolling hanteras separat för alla arter: mono dämpar huggen.
  if (teknik === 'trolling') {
    if (art === 'gadda') {
      return {
        braid: null,
        leader: 'Stål, titan eller grov fluorocarbon, minst 0,60 till 0,80 mm. Aldrig enbart fläta eller tunn FC mot gädda.',
        preferred: [],
        leaderSlugs: ['westin-w6-st3-hard-062mm'],
        mono: {
          dim: 'Nylon 0,30 till 0,40 mm, eller fläta 0,28 till 0,33 mm med mono- eller FC-topshot.',
          why: 'Vid trolling dämpar monofilamentets stretch de hårda huggen och minskar antalet lösryckta krokar. Fläta används för djupare gång men då med stötdämpande topshot.',
        },
        wireWarning: true,
        note: 'Sortimentet har i dag ingen ren trollinglina. Flätlinorna nedan fungerar som djupfläta bakom planerboard eller downrigger, men komplettera med mono- eller FC-topshot.',
      };
    }
    return {
      braid: null,
      leader: 'Fluorocarbon 0,30 till 0,40 mm beroende på art.',
      preferred: [],
      leaderSlugs: ['westin-w6-st5-soft-038mm'],
      mono: {
        dim: 'Nylon 0,28 till 0,40 mm, eller fläta med mono- eller FC-topshot.',
        why: 'Vid trolling dämpar monofilamentets stretch de hårda huggen och minskar antalet lösryckta krokar.',
      },
      note: 'Sortimentet har i dag ingen ren trollinglina i mono.',
    };
  }

  switch (art) {
    case 'abborre':
      return {
        braid: '0,08 till 0,13 mm (ungefär PE 0,4 till 0,8)',
        leader: 'Fluorocarbon 0,18 till 0,30 mm, 0,5 till 1 meter. Vid risk för gädda: tunn stål- eller titantafs, eller grov FC från 0,40 mm.',
        preferred: ['shimano-kairiki-8-013mm', 'hurricane-x8-braid-012mm', 'westin-w3-8-braid-smokey-grey'],
        leaderSlugs: ['strike-wire-fluorocarbon-022mm-invisible', 'westin-w6-st5-soft-030mm'],
      };
    case 'gos':
      return {
        braid: '0,10 till 0,15 mm (ungefär PE 0,6 till 1,0)',
        leader: 'Fluorocarbon 0,28 till 0,40 mm, 0,5 till 1 meter. Gösen är inte ledarskygg men huggtänderna kan skada tunnare tafs.',
        preferred: ['shimano-kairiki-8-013mm', 'westin-w6-8-braid-0148mm', 'strike-wire-extreme-015mm', 'kinetic-8-braid-014mm'],
        leaderSlugs: ['westin-w6-st5-soft-038mm', 'westin-w6-st5-soft-030mm'],
      };
    case 'gadda':
      if (teknik === 'jerkbait') {
        return {
          braid: '0,20 till 0,30 mm (ungefär PE 1,5 till 3,0)',
          leader: 'Stål, titan eller grov fluorocarbon, minst 0,60 till 0,80 mm. Vid stora jerkbaits ofta 0,90 till 1,2 mm. Aldrig enbart fläta eller tunn FC mot gädda.',
          preferred: ['strike-wire-extreme-015mm', 'westin-w6-8-braid-0148mm', 'kinetic-8-braid-014mm'],
          leaderSlugs: ['strike-wire-shockleader-090mm', 'westin-w6-st3-hard-062mm'],
          wireWarning: true,
          note: 'Sortimentet saknar i dag en grövre gäddafläta (0,20 till 0,28 mm). Linorna nedan fungerar för lättare jerkfiske. För tunga jerkbaits vill du ha en grövre lina med högre brottstyrka.',
        };
      }
      return {
        braid: '0,17 till 0,25 mm (ungefär PE 1,2 till 2,0)',
        leader: 'Stål, titan eller grov fluorocarbon, minst 0,60 till 0,80 mm. Aldrig enbart fläta eller tunn FC mot gädda.',
        preferred: ['strike-wire-extreme-015mm', 'westin-w6-8-braid-0148mm', 'kinetic-8-braid-014mm', 'kinetic-4-braid-012mm'],
        leaderSlugs: ['westin-w6-st3-hard-062mm', 'strike-wire-shockleader-090mm'],
        wireWarning: true,
        note: 'För tunga gummibeten och stora gäddor vill du ha en grövre lina (0,20 till 0,28 mm) än de tunnaste i sortimentet.',
      };
    case 'havsoring':
      return {
        braid: '0,12 till 0,17 mm (ungefär PE 0,8 till 1,2)',
        leader: 'Fluorocarbon 0,30 till 0,40 mm, 1,5 till 2 meter. Skyddar mot sten och musselkanter och ger diskret presentation.',
        preferred: ['westin-w10-13-braid-coastal', 'westin-w3-8-braid-smokey-grey'],
        leaderSlugs: ['westin-w6-st5-soft-038mm', 'westin-w6-st5-soft-030mm'],
        note: 'Lågsynlig färg rekommenderas i klart kustvatten oavsett om du vill läsa hugget på linan.',
      };
    case 'lax':
      return {
        braid: null,
        leader: 'Nylon eller fluorocarbon från 0,40 mm, grövre i högt och grumligt vatten.',
        preferred: [],
        leaderSlugs: [],
        mono: {
          dim: 'Nylon 0,40 till 0,50 mm, många kör 0,50 till 0,60 mm.',
          why: 'Stretchen parerar laxens rusningar och minskar lösryckta krokar, och nylon tål nötning mot sten bättre än fläta.',
        },
        laxWarning: true,
        note: 'Flätlina är förbjuden på många laxsträckor. Kontrollera alltid de lokala kortreglerna innan du fiskar.',
      };
    case 'blandat':
    default:
      return {
        braid: '0,12 till 0,15 mm (ungefär PE 0,8 till 1,0) som allround',
        leader: 'Fluorocarbon 0,25 till 0,40 mm beroende på art. Stål eller titan om gädda kan dyka upp.',
        preferred: ['kinetic-8-braid-014mm', 'westin-w6-8-braid-0148mm', 'hurricane-x8-braid-012mm'],
        leaderSlugs: ['westin-w6-st5-soft-038mm', 'westin-w6-st3-hard-062mm'],
      };
  }
}

const COLOR_HIGHVIS =
  'High-vis (gul, orange, ljusgrön). Du ser linan, läser subtila hugg och håller koll på linvinkeln. Bäst vid dropshot, vertikal och isfiske.';
const COLOR_LOWVIS =
  'Lågsynlig (smokey grey, moss green, grått). Diskret i klart vatten och mot skygg fisk.';
const COLOR_CAVEAT =
  'Färgen spelar störst roll för dig, inte för fisken. Det är fluorocarbontafsen närmast betet som avgör synligheten mot fisken.';

/** Nylonlinor som matchar väljarens mono-fall (trolling och lax). */
function monoSlugsFor(art: Art, teknik: Teknik): string[] {
  if (teknik === 'trolling') {
    return art === 'gadda' ? ['stroft-abr-030mm'] : ['stroft-abr-028mm', 'stroft-abr-030mm'];
  }
  if (art === 'lax') {
    return ['stroft-abr-040mm'];
  }
  return [];
}

function priceFormat(price: number): string {
  return new Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: 'SEK',
    maximumFractionDigits: 0,
  }).format(price);
}

export default function LinValjare({ lines, leaders, monos }: Props) {
  const [art, setArt] = useState<Art>('abborre');
  const [teknik, setTeknik] = useState<Teknik>('jigg');
  const [readLine, setReadLine] = useState(false);

  const rec = useMemo(() => recommend(art, teknik), [art, teknik]);

  const matched = useMemo(() => {
    const bySlug = new Map(lines.map((l) => [l.slug, l]));
    return rec.preferred
      .map((slug) => bySlug.get(slug))
      .filter((l): l is LineProduct => Boolean(l))
      .slice(0, 2);
  }, [lines, rec]);

  const matchedLeaders = useMemo(() => {
    const bySlug = new Map(leaders.map((l) => [l.slug, l]));
    return rec.leaderSlugs
      .map((slug) => bySlug.get(slug))
      .filter((l): l is LineProduct => Boolean(l))
      .slice(0, 2);
  }, [leaders, rec]);

  const matchedMonos = useMemo(() => {
    const bySlug = new Map(monos.map((l) => [l.slug, l]));
    return monoSlugsFor(art, teknik)
      .map((slug) => bySlug.get(slug))
      .filter((l): l is LineProduct => Boolean(l))
      .slice(0, 2);
  }, [monos, art, teknik]);

  const colorAdvice = art === 'havsoring' ? COLOR_LOWVIS : readLine ? COLOR_HIGHVIS : COLOR_LOWVIS;

  return (
    <div className="max-w-xl mx-auto bg-mist/40 border border-mist rounded-3xl p-6 sm:p-8 not-prose">
      <div className="mb-6">
        <h2 className="font-display text-2xl font-bold text-deep mb-2">Linväljaren</h2>
        <p className="text-stone text-sm leading-relaxed">
          Välj art och teknik. Du får direkt rätt diameter, färg och tafs, plus en matchande lina ur
          sortimentet där en finns. Är rätt svar mono säger vi det rakt ut.
        </p>
      </div>

      {/* Art */}
      <fieldset className="mb-5">
        <legend className="text-xs font-semibold uppercase tracking-wider text-stone mb-2">Art</legend>
        <div className="flex flex-wrap gap-2">
          {ARTER.map((a) => {
            const active = art === a.value;
            return (
              <button
                key={a.value}
                type="button"
                aria-pressed={active}
                onClick={() => setArt(a.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2 ${
                  active
                    ? 'bg-pine text-white border-pine'
                    : 'bg-white text-deep border-mist hover:border-pine'
                }`}
              >
                {a.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Teknik */}
      <fieldset className="mb-5">
        <legend className="text-xs font-semibold uppercase tracking-wider text-stone mb-2">Teknik</legend>
        <div className="flex flex-wrap gap-2">
          {TEKNIKER.map((t) => {
            const active = teknik === t.value;
            return (
              <button
                key={t.value}
                type="button"
                aria-pressed={active}
                onClick={() => setTeknik(t.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2 ${
                  active
                    ? 'bg-pine text-white border-pine'
                    : 'bg-white text-deep border-mist hover:border-pine'
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Läsa hugg på linan */}
      <div className="mb-7 flex items-center justify-between gap-4 bg-white border border-mist rounded-2xl px-4 py-3">
        <span className="text-sm text-deep font-medium">
          Vill du läsa hugget på linan?
          <span className="block text-xs text-stone font-normal">Påverkar rekommenderad färg</span>
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={readLine}
          onClick={() => setReadLine((v) => !v)}
          disabled={art === 'havsoring'}
          className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2 disabled:opacity-40 ${
            readLine ? 'bg-rust' : 'bg-stone/30'
          }`}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
              readLine ? 'translate-x-5' : 'translate-x-0.5'
            }`}
          />
        </button>
      </div>

      {/* Resultat */}
      <div className="space-y-4">
        {/* Diameter / huvudlina */}
        <div className="bg-white rounded-2xl border-2 border-pine/30 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-pine mb-1">Huvudlina</p>
          {rec.braid ? (
            <p className="text-deep font-medium leading-relaxed">Flätlina {rec.braid}</p>
          ) : (
            <p className="text-deep font-medium leading-relaxed">
              Här är monofilament rätt val, inte flätlina.
            </p>
          )}
        </div>

        {/* Mono-förklaring */}
        {rec.mono && (
          <div className="bg-white rounded-2xl border border-mist p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone mb-1">Monofilament</p>
            <p className="text-deep font-medium leading-relaxed mb-1">{rec.mono.dim}</p>
            <p className="text-stone text-sm leading-relaxed">{rec.mono.why}</p>

            {/* Matchande nylonlinor */}
            {matchedMonos.length > 0 && (
              <div className="mt-4 space-y-2">
                {matchedMonos.map((mono, i) => (
                  <div
                    key={mono.slug}
                    className="flex items-center justify-between gap-3 bg-mist/40 border border-mist rounded-xl px-4 py-2.5"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-deep truncate">{mono.title}</p>
                      <p className="text-xs text-stone">{priceFormat(mono.price)}</p>
                    </div>
                    <a
                      href={mono.affiliateUrl || `/utrustning/test/${mono.slug}/`}
                      onClick={() => {
                        if (mono.affiliateUrl) {
                          trackAffiliateClick(mono.merchant, mono.slug, i, 'article');
                        }
                      }}
                      className="shrink-0 inline-flex items-center gap-1 text-pine text-sm font-semibold hover:text-deep transition-colors underline underline-offset-2"
                      target={mono.affiliateUrl ? '_blank' : undefined}
                      rel={mono.affiliateUrl ? 'noopener noreferrer sponsored' : undefined}
                    >
                      Se lina
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Färg */}
        <div className="bg-white rounded-2xl border border-mist p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone mb-1">Färg</p>
          <p className="text-deep leading-relaxed mb-2">{colorAdvice}</p>
          <p className="text-stone text-sm leading-relaxed">{COLOR_CAVEAT}</p>
        </div>

        {/* Tafs */}
        <div
          className={`rounded-2xl p-5 border ${
            rec.wireWarning ? 'bg-amber-50 border-amber-200' : 'bg-white border-mist'
          }`}
        >
          <p
            className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
              rec.wireWarning ? 'text-amber-700' : 'text-stone'
            }`}
          >
            {rec.wireWarning ? 'Tafs (obligatoriskt mot gädda)' : 'Tafs'}
          </p>
          <p className="text-deep leading-relaxed">{rec.leader}</p>

          {/* Matchande fluorocarbontafsar */}
          {matchedLeaders.length > 0 && (
            <div className="mt-4 space-y-2">
              {matchedLeaders.map((leader, i) => (
                <div
                  key={leader.slug}
                  className="flex items-center justify-between gap-3 bg-white/70 border border-mist rounded-xl px-4 py-2.5"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-deep truncate">{leader.title}</p>
                    <p className="text-xs text-stone">{priceFormat(leader.price)}</p>
                  </div>
                  <a
                    href={leader.affiliateUrl || `/utrustning/test/${leader.slug}/`}
                    onClick={() => {
                      if (leader.affiliateUrl) {
                        trackAffiliateClick(leader.merchant, leader.slug, i, 'article');
                      }
                    }}
                    className="shrink-0 inline-flex items-center gap-1 text-pine text-sm font-semibold hover:text-deep transition-colors underline underline-offset-2"
                    target={leader.affiliateUrl ? '_blank' : undefined}
                    rel={leader.affiliateUrl ? 'noopener noreferrer sponsored' : undefined}
                  >
                    Se tafs
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Lax-varning */}
        {rec.laxWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">
              Regler att kontrollera
            </p>
            <p className="text-deep text-sm leading-relaxed">
              Flätlina är förbjuden på många laxsträckor. Kontrollera alltid de lokala kortreglerna. Riktat
              laxfiske i Östersjön är i grunden förbjudet sedan 2025, och endast fettfeneklippt lax får
              behållas där fiske alls är tillåtet.
            </p>
          </div>
        )}

        {/* Not om sortimentet */}
        {rec.note && <p className="text-stone text-sm leading-relaxed px-1">{rec.note}</p>}

        {/* Matchande flätlinor */}
        {matched.length > 0 ? (
          <div className="pt-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone mb-3">
              {rec.braid ? 'Matchande linor i sortimentet' : 'Närmast i sortimentet'}
            </p>
            <div className="space-y-3">
              {matched.map((line, i) => (
                <div
                  key={line.slug}
                  className={`bg-white rounded-2xl p-5 border-2 ${i === 0 ? 'border-rust' : 'border-mist'}`}
                >
                  {i === 0 && rec.braid && (
                    <span className="inline-block bg-rust text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide mb-3">
                      Bästa match
                    </span>
                  )}
                  <p className="text-xs text-stone font-medium uppercase tracking-wider mb-1">{line.brand}</p>
                  <h3 className="font-display font-bold text-deep text-lg mb-3">{line.title}</h3>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xl font-bold text-deep">{priceFormat(line.price)}</p>
                    <a
                      href={line.affiliateUrl || `/utrustning/test/${line.slug}/`}
                      onClick={() => {
                        if (line.affiliateUrl) {
                          trackAffiliateClick(line.merchant, line.slug, i, 'article');
                        }
                      }}
                      className="inline-flex items-center gap-1.5 bg-pine text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine"
                      target={line.affiliateUrl ? '_blank' : undefined}
                      rel={line.affiliateUrl ? 'noopener noreferrer sponsored' : undefined}
                    >
                      {line.affiliateUrl ? `Se pris hos ${line.merchant}` : 'Läs recension'}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-mist p-5">
            <p className="text-deep text-sm leading-relaxed mb-3">
              Vi har i dag ingen flätlina i sortimentet som matchar exakt för det här fisket. Råden ovan
              gäller ändå.
            </p>
            <a
              href="/utrustning/"
              className="inline-flex items-center gap-1.5 text-pine text-sm font-semibold hover:text-deep transition-colors underline underline-offset-2"
            >
              Se all utrustning
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
