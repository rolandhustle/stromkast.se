import { useState } from 'react';
import { trackQuizStart, trackQuizCompleted } from '../../lib/track';

interface QuizResult {
  slug: string;
  title: string;
  brand: string;
  price: number;
  reason: string;
  affiliateUrl: string;
}

interface QuizAnswers {
  targetSpecies?: string;
  waterType?: string;
  technique?: string;
  experience?: string;
  budget?: string;
}

const RESULTS: Record<string, QuizResult[]> = {
  pike_lake_softbait_beginner_low: [
    { slug: 'berkley-maxfire-pike', title: 'Berkley Maxfire Pike 240MH', brand: 'Berkley', price: 1199, reason: 'Perfekt för nybörjaren: bra känsla, enkel att kasta och prisvärd.', affiliateUrl: '' },
    { slug: 'savage-gear-sg2-pike', title: 'Savage Gear SG2 Pike Specialist', brand: 'Savage Gear', price: 1899, reason: 'Nästa steg när du vill uppgradera: lätt och responsivt spö.', affiliateUrl: '' },
  ],
  default: [
    { slug: 'berkley-maxfire-pike', title: 'Berkley Maxfire Pike 240MH', brand: 'Berkley', price: 1199, reason: 'Utmärkt allround-val för de flesta fiskesituationer.', affiliateUrl: '' },
    { slug: 'savage-gear-sg2-pike', title: 'Savage Gear SG2 Pike Specialist', brand: 'Savage Gear', price: 1899, reason: 'Premium-alternativet för den som vill ha det bästa.', affiliateUrl: '' },
  ],
};

const QUESTIONS = [
  {
    id: 'targetSpecies',
    question: 'Vilken art vill du fiska mest?',
    options: [
      { value: 'pike', label: 'Gädda' },
      { value: 'perch', label: 'Abborre' },
      { value: 'pike_perch', label: 'Gös' },
      { value: 'trout', label: 'Öring / Lax' },
    ],
  },
  {
    id: 'waterType',
    question: 'Var fiskar du mest?',
    options: [
      { value: 'lake', label: 'Sjö' },
      { value: 'river', label: 'Å / Älv' },
      { value: 'coastal', label: 'Kust / Hav' },
      { value: 'mixed', label: 'Blandat' },
    ],
  },
  {
    id: 'technique',
    question: 'Vilken teknik föredrar du?',
    options: [
      { value: 'softbait', label: 'Jigg / Softbait' },
      { value: 'lure', label: 'Hårdplugg / Wobbler' },
      { value: 'fly', label: 'Flugfiske' },
      { value: 'unsure', label: 'Inte säker ännu' },
    ],
  },
  {
    id: 'experience',
    question: 'Hur erfaren är du?',
    options: [
      { value: 'beginner', label: 'Nybörjare (0–2 år)' },
      { value: 'intermediate', label: 'Mellannivå (2–5 år)' },
      { value: 'advanced', label: 'Erfaren (5+ år)' },
    ],
  },
  {
    id: 'budget',
    question: 'Vad är din budget för ett spö?',
    options: [
      { value: 'low', label: 'Under 1 000 kr' },
      { value: 'mid', label: '1 000–2 000 kr' },
      { value: 'high', label: '2 000–4 000 kr' },
      { value: 'premium', label: 'Ingen gräns' },
    ],
  },
];

function getResults(answers: QuizAnswers): QuizResult[] {
  const key = `${answers.targetSpecies}_${answers.waterType}_${answers.technique}_${answers.experience}_${answers.budget}`;
  return RESULTS[key] ?? RESULTS['default']!;
}

export default function SpoQuiz() {
  const [step, setStep] = useState<'intro' | number | 'email' | 'results'>('intro');
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [email, setEmail] = useState('');
  const [results, setResults] = useState<QuizResult[]>([]);

  const currentQ = typeof step === 'number' ? QUESTIONS[step] : null;
  const progress = typeof step === 'number' ? ((step) / QUESTIONS.length) * 100 : step === 'email' ? 95 : step === 'results' ? 100 : 0;

  function handleStart() {
    trackQuizStart();
    setStep(0);
  }

  function handleAnswer(qid: string, value: string) {
    const newAnswers = { ...answers, [qid]: value };
    setAnswers(newAnswers);
    const nextStep = typeof step === 'number' ? step + 1 : 0;
    if (nextStep >= QUESTIONS.length) {
      setStep('email');
    } else {
      setStep(nextStep);
    }
  }

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    const r = getResults(answers);
    setResults(r);
    trackQuizCompleted(r.map((x) => x.slug));
    setStep('results');
  }

  function handleSkipEmail() {
    const r = getResults(answers);
    setResults(r);
    trackQuizCompleted(r.map((x) => x.slug));
    setStep('results');
  }

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress bar */}
      {step !== 'intro' && step !== 'results' && (
        <div className="mb-8">
          <div className="flex justify-between text-xs text-stone mb-2">
            <span>Fråga {typeof step === 'number' ? step + 1 : QUESTIONS.length} av {QUESTIONS.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 bg-mist rounded-full overflow-hidden">
            <div
              className="h-full bg-rust rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      )}

      {/* Intro */}
      {step === 'intro' && (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-rust/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M4 24L14 4L24 24" stroke="#B45D3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 17h12" stroke="#B45D3C" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h2 className="font-display text-2xl font-bold text-deep mb-3">Hitta ditt perfekta spö</h2>
          <p className="text-stone leading-relaxed mb-8">Svara på fem korta frågor om hur du fiskar. Vi matchar dig med de bästa spöna för dina behov.</p>
          <button
            onClick={handleStart}
            className="inline-flex items-center gap-2 bg-rust text-white font-bold px-8 py-4 rounded-full hover:bg-copper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2"
          >
            Starta quizen
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}

      {/* Question */}
      {currentQ && (
        <div>
          <h2 className="font-display text-2xl font-bold text-deep mb-8 text-center">{currentQ.question}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQ.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(currentQ.id, opt.value)}
                className="bg-white border-2 border-mist text-deep text-left px-5 py-4 rounded-2xl hover:border-pine hover:bg-mist/50 transition-all font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Email capture */}
      {step === 'email' && (
        <div className="text-center py-4">
          <h2 className="font-display text-2xl font-bold text-deep mb-3">Skicka resultaten till din inbox?</h2>
          <p className="text-stone mb-6 text-sm leading-relaxed">Valfritt. Ange din e-post för att spara dina rekommendationer och få veckans bästa fisketips.</p>
          <form onSubmit={handleEmailSubmit} className="flex gap-3 mb-4">
            <label className="sr-only" htmlFor="quiz-email">E-postadress</label>
            <input
              id="quiz-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="din@email.se"
              className="flex-1 border border-mist bg-white rounded-full px-5 py-3 text-sm text-deep placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-pine"
            />
            <button
              type="submit"
              className="bg-pine text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine"
            >
              Skicka
            </button>
          </form>
          <button
            onClick={handleSkipEmail}
            className="text-stone text-sm underline hover:text-pine transition-colors"
          >
            Hoppa över, visa resultaten direkt
          </button>
        </div>
      )}

      {/* Results */}
      {step === 'results' && (
        <div>
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12l5 5L19 7" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="font-display text-2xl font-bold text-deep mb-2">Dina rekommendationer</h2>
            <p className="text-stone text-sm">Baserat på dina svar har vi valt ut de bästa spöna för dig.</p>
          </div>

          <div className="space-y-4">
            {results.map((result, i) => (
              <div
                key={result.slug}
                className={`bg-white rounded-2xl p-5 border-2 ${i === 0 ? 'border-rust' : 'border-mist'}`}
              >
                {i === 0 && (
                  <span className="inline-block bg-rust text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide mb-3">
                    Bästa match
                  </span>
                )}
                <p className="text-xs text-stone font-medium uppercase tracking-wider mb-1">{result.brand}</p>
                <h3 className="font-display font-bold text-deep text-lg mb-2">{result.title}</h3>
                <p className="text-stone text-sm leading-relaxed mb-4">{result.reason}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-deep">{new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK', maximumFractionDigits: 0 }).format(result.price)}</p>
                  <a
                    href={result.affiliateUrl || `/utrustning/test/${result.slug}/`}
                    className="inline-flex items-center gap-1.5 bg-pine text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine"
                    target={result.affiliateUrl ? '_blank' : undefined}
                    rel={result.affiliateUrl ? 'noopener noreferrer sponsored' : undefined}
                  >
                    Se pris
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => { setStep('intro'); setAnswers({}); setResults([]); }}
              className="text-stone text-sm underline hover:text-pine transition-colors"
            >
              Ta om quizen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
