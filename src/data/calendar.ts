/**
 * src/data/calendar.ts
 *
 * Kalenderdata för Strömkasts nappkalender.
 * Månfaser beräknade astronomiskt för 2026.
 * Säsongsdata per art baserat på biologiska fakta.
 */

// ---------------------------------------------------------------------------
// Månfaser 2026
// ---------------------------------------------------------------------------

export interface MoonDay {
  date: string;       // YYYY-MM-DD
  phase: 'new' | 'waxing' | 'first' | 'waxing_gibbous' | 'full' | 'waning_gibbous' | 'last' | 'waning';
  illumination: number; // 0–100
  score: number;      // 0–10 betningspoäng för månfas
}

/** Beräknar månfas för ett givet datum */
export function getMoonData(date: Date): { phase: MoonDay['phase']; illumination: number; score: number } {
  const SYNODIC = 29.53059;
  const KNOWN_NEW_MOON = new Date('2000-01-06T18:14:00Z').getTime();
  const diffDays = (date.getTime() - KNOWN_NEW_MOON) / (1000 * 60 * 60 * 24);
  const cyclePos = ((diffDays % SYNODIC) + SYNODIC) % SYNODIC;
  const illumination = Math.round(50 * (1 - Math.cos((2 * Math.PI * cyclePos) / SYNODIC)));

  let phase: MoonDay['phase'];
  let score: number;

  if (cyclePos < 1.85)       { phase = 'new';            score = 9; }
  else if (cyclePos < 7.38)  { phase = 'waxing';         score = 6; }
  else if (cyclePos < 9.22)  { phase = 'first';          score = 5; }
  else if (cyclePos < 14.77) { phase = 'waxing_gibbous'; score = 7; }
  else if (cyclePos < 16.61) { phase = 'full';           score = 9; }
  else if (cyclePos < 22.15) { phase = 'waning_gibbous'; score = 7; }
  else if (cyclePos < 23.99) { phase = 'last';           score = 5; }
  else                       { phase = 'waning';         score = 6; }

  return { phase, illumination, score };
}

export const MOON_PHASE_LABELS: Record<MoonDay['phase'], string> = {
  new:            'Nymåne',
  waxing:         'Växande skära',
  first:          'Första kvarteret',
  waxing_gibbous: 'Växande gibbös',
  full:           'Fullmåne',
  waning_gibbous: 'Avtagande gibbös',
  last:           'Sista kvarteret',
  waning:         'Avtagande skära',
};

export const MOON_PHASE_EMOJI: Record<MoonDay['phase'], string> = {
  new:            '🌑',
  waxing:         '🌒',
  first:          '🌓',
  waxing_gibbous: '🌔',
  full:           '🌕',
  waning_gibbous: '🌖',
  last:           '🌗',
  waning:         '🌘',
};

// ---------------------------------------------------------------------------
// Månadsdata
// ---------------------------------------------------------------------------

export const MONTHS_SV = [
  'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni',
  'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'
];

export const MONTHS_SLUG = [
  'januari', 'februari', 'mars', 'april', 'maj', 'juni',
  'juli', 'augusti', 'september', 'oktober', 'november', 'december'
];

// ---------------------------------------------------------------------------
// Arter
// ---------------------------------------------------------------------------

export interface SpeciesData {
  slug:        string;
  name:        string;
  latin:       string;
  description: string; // kort beskrivning för kalenderkontext
  peakMonths:  number[]; // 1–12
  okMonths:    number[];
  // Biologisk data
  spawningMonths: number[];
  spawningTemp:   string;  // t.ex. "8–10°C"
  activeTemp:     string;  // t.ex. "8–18°C"
  // Säsongsbeskrivningar per fas
  preLek:      string;
  postLek:     string;
  summer:      string;
  autumn:      string;
  winter:      string;
  // Toppmetoder per säsong
  springMethods: string[];
  summerMethods: string[];
  autumnMethods: string[];
  // Tips per månad (index 0=jan, 11=dec)
  monthlyTips: string[];
}

export const SPECIES: SpeciesData[] = [
  {
    slug:        'gadda',
    name:        'Gädda',
    latin:       'Esox lucius',
    description: 'Gäddan är en av Sveriges mest eftertraktade rovfiskar. Den leker tidigt på våren och är som mest aktiv när vattnet är kallt.',
    peakMonths:  [3, 4, 9, 10],
    okMonths:    [2, 5, 8, 11],
    spawningMonths: [3, 4],
    spawningTemp:   '6–10°C',
    activeTemp:     '8–18°C',
    preLek:   'Gäddan rör sig mot grundare vatten och är aggressiv och lätt att nå. Förleksfönstret är ofta säsongens bästa fiske.',
    postLek:  'Direkt efter leken går gäddan in i ett intensivt hungerfönster. Stora honor är hungriga och nybetet är aktivt.',
    summer:   'Vid temperaturer över 18°C blir gäddan trögare och rör sig djupare. Fiske tidigt på morgonen eller sent på kvällen ger bäst resultat.',
    autumn:   'Hösten är gäddans andra toppsäsong. Vattentemperaturen sjunker, bytesfimstimusen stiger och gäddan passar på att lagra fett inför vintern.',
    winter:   'Gäddan är aktiv även under is men rör sig långsammare. Pimpel och jigg på kanter fungerar bra.',
    springMethods: ['Spinnfiske', 'Jiggfiske', 'Wobbler'],
    summerMethods: ['Trolling', 'Nattfiske med storagoda'],
    autumnMethods: ['Jiggfiske', 'Jerkbait', 'Stor wobbler'],
    monthlyTips: [
      'Gäddan är aktiv men kräver tålamod. Fiska kanter och djupgränser med jigg.',
      'Förleksperioden börjar. Gäddan rör sig mot grundare vatten. Utmärkt tid för spinnfiske.',
      'Högsäsong. Leken lockar gäddan till vassbälten och grunda vikar. Stora honor nås på spinn och wobbler.',
      'Efterleksfönstret -- hungerfasen. Gäddan äter aggressivt. En av årets bästa månader.',
      'Bra fiske tidigt och sent. Undvik den varmaste delen av dagen när temp stiger.',
      'Sommarlugn börjar. Fiska djupare kanter och gryningar.',
      'Högsommar -- trögast. Nattfiske eller tidiga morgnar ger bäst chanser.',
      'Fisket vaknar igen i takt med sjunkande temp. Jigg och jerkbait fungerar bra.',
      'Höstens inledning -- utmärkt fiske. Gäddan jagar aktivt längs kanter och uddar.',
      'Högsäsong höst. Kallt vatten, aggressiva hugg. Stor bete fungerar bra.',
      'Bra fiske fortsätter men gäddan rör sig djupare. Jigg och långsamma presentationer.',
      'Vinterfiske under is eller på öppet vatten. Långsam presentation nära botten.',
    ],
  },
  {
    slug:        'abborre',
    name:        'Abborre',
    latin:       'Perca fluviatilis',
    description: 'Abborren finns i nästan alla svenska sötvatten och är en populär sportfisk för alla nivåer. Leker på våren och är som mest aktiv på hösten.',
    peakMonths:  [4, 5, 9, 10],
    okMonths:    [3, 6, 8, 11],
    spawningMonths: [4, 5],
    spawningTemp:   '7–15°C',
    activeTemp:     '15–25°C',
    preLek:   'Stor abborre rör sig mot grundare vatten. Dropshot och jigg längs kanter ger bra resultat.',
    postLek:  'Abborren äter intensivt efter leken. Lättfiskad period där även nybörjare lyckas väl.',
    summer:   'Sommarabborren stimer och jagar aktivt vid yta på morgnar och kvällar. Ytterst roligt fiske.',
    autumn:   'Höstens inledning ger storfiskfiske. Stora abborrar samlas djupare i stim.',
    winter:   'Abborren är aktiv hela vintern och är en av de bästa islaksfiskarna.',
    springMethods: ['Dropshot', 'Jigg', 'Maskkrok'],
    summerMethods: ['Topwater', 'Lättjigg', 'Spinnare'],
    autumnMethods: ['Jigg', 'Dropshot', 'Vertikalfiske'],
    monthlyTips: [
      'Abborren är aktiv under is. Pimpel och dropshot nära botten fungerar bra.',
      'Fisket vaknar successivt. Dropshot längs kanter ger resultat.',
      'Förleksperioden -- bra storfiskfiske på grunt vatten.',
      'Leken pågår. Stor abborre på kanter och djupgränser med dropshot.',
      'Efterlek och hungerfönster. Utmärkt allroundfiske -- abborren biter på det mesta.',
      'Sommarstimuler vid ytan. Topwater och spinnare ger spektakulära napp.',
      'Högsommar -- fiska tidigt och sent. Stim syns ofta vid yta gryning och skymning.',
      'Fisket tar fart igen. Abborren börjar samlas i djupare stim.',
      'Höstens bästa abborrfiske. Stora stim på 3–8 meters djup. Vertikalfiske och jigg.',
      'Toppsäsong för storabborre. Kalla nätter driver stim till kanter och djupgränser.',
      'Bra fiske fortsätter. Dropshot och jigg längs kanter och på djup.',
      'Vinterfiske -- abborren aktiv hela dagen. Pimpel och jigg under is.',
    ],
  },
  {
    slug:        'gos',
    name:        'Gös',
    latin:       'Sander lucioperca',
    description: 'Gösen är en nattaktiv rovfisk som föredrar grumligt vatten och dyker upp i grupper längs kanter och strukturer. Leker i maj–juni.',
    peakMonths:  [6, 7, 8],
    okMonths:    [5, 9],
    spawningMonths: [5, 6],
    spawningTemp:   '12–15°C',
    activeTemp:     '18–25°C',
    preLek:   'Förleksrörelse mot grundare vatten. Gösen är aggressiv och lättfångad på kvällar.',
    postLek:  'Intensivt matbeteende direkt efter leken. Jigg längs kanter och på djup.',
    summer:   'Gösen trivs i sommarhettan. Nattfiske med gummibete längs kanter och vid strukturer ger bäst resultat.',
    autumn:   'Gösen rör sig djupare men förblir aktiv. Vertikalfiske och jigg på djupkanter.',
    winter:   'Trögast fiske. Gösen rör sig djupt och långsamt. Kräver tålamod.',
    springMethods: ['Jigg', 'Gummibete', 'Wobbler'],
    summerMethods: ['Nattfiske', 'Jigg', 'Dropshot'],
    autumnMethods: ['Vertikalfiske', 'Jigg', 'Dropshot'],
    monthlyTips: [
      'Svårt fiske. Gösen rör sig djupt. Långsam presentation nära botten.',
      'Något aktivare men fortfarande utmanande. Jigg på djupkanter.',
      'Förleksperioden börjar. Gösen rör sig mot grundare vatten kvällstid.',
      'Bra kvällsfiske längs kanter. Jigg och gummibete.',
      'Förleks- och lekperiod. Gösen är aggressiv. Bra jiggfiske på kvällar.',
      'Högsäsong -- gösen leker och jagar intensivt. Nattfiske ger mest.',
      'Sommarpeak. Nattfiske med ljus lockar stim. Jigg och twister längs kanter.',
      'Fortfarande bra fiske. Kvällar och nätter mest produktiva.',
      'Gösen börjar röra sig djupare. Bra period för vertikalfiske.',
      'Höstgös på djupkanter. Jigg och dropshot. Tålamod lönar sig.',
      'Trögare fiske. Gösen rör sig djupt och är selektiv.',
      'Vinterfiske -- krävande men möjligt på rätt djupkanter.',
    ],
  },
  {
    slug:        'oring',
    name:        'Öring',
    latin:       'Salmo trutta',
    description: 'Öringen är en av Sveriges mest älskade sportfiskar. Finns i bäckar, sjöar och längs kusten. Leker på hösten och är aktiv i kallt klart vatten.',
    peakMonths:  [3, 4, 9, 10],
    okMonths:    [2, 5, 8, 11],
    spawningMonths: [10, 11],
    spawningTemp:   '4–8°C',
    activeTemp:     '8–16°C',
    preLek:   'Öringen samlas vid lekbottnar. Stor aktivitet men fiske nära lekplatser bör undvikas.',
    postLek:  'Direkt efter leken är öringen utmattad. Fiske bör ske varsamt och återutsättning rekommenderas.',
    summer:   'Öringen söker sig till svalt vatten -- djupa sjöar, skuggade bäckar och tidiga morgnar.',
    autumn:   'En av de bästa perioderna. Öringen är aktiv och aggressiv inför höstleken.',
    winter:   'Aktiv men kräver långsamma presentationer. Lyfter nymfer och liten jigg.',
    springMethods: ['Flugfiske', 'Spinnare', 'Mask'],
    summerMethods: ['Flugfiske tidigt/sent', 'Torra flugor', 'Liten spinnare'],
    autumnMethods: ['Flugfiske', 'Spinnare', 'Wobbler'],
    monthlyTips: [
      'Öringen aktiv i svalt vatten. Flugfiske med nymf och liten jigg.',
      'Fisket vaknar. Bäcköring aktiv vid islossningstid.',
      'Bra vårfiske. Öringen jagar intensivt efter vintern.',
      'Utmärkt fiske. Öringen aktiv och lättfångad i bäckar och vid ström.',
      'Bra fiske men försommarvärmen börjar tränga undan öringen mot svalare vatten.',
      'Söker djupa svala lägen. Fiska tidigt på morgonen.',
      'Högsommar -- fiska gryning och skymning. Torra flugor kvällstid.',
      'Fisket tar fart. Öringen aktiv igen i takt med sjunkande temperatur.',
      'Höstpeak -- öringen aktiv och aggressiv. Utmärkt flugfiske.',
      'Lekperiod börjar. Respektera fredningstider och lekbottnar.',
      'Lekperioden fortsätter. Kolla lokala fredningstider.',
      'Vinterfiske i bäckar -- öringen aktiv i svalt strömmande vatten.',
    ],
  },
  {
    slug:        'havsoring',
    name:        'Havsöring',
    latin:       'Salmo trutta trutta',
    description: 'Havsöringen vandrar mellan havet och sötvattnet för att leka. Eftertraktad längs hela svenska kusten och i de stora laxälvarna.',
    peakMonths:  [3, 4, 10, 11],
    okMonths:    [2, 5, 9, 12],
    spawningMonths: [10, 11],
    spawningTemp:   '4–8°C',
    activeTemp:     '5–16°C',
    preLek:   'Havsöringen vandrar upp i älvar och bäckar. Intensivt fiske längs kusten strax innan uppvandringen.',
    postLek:  'Utmattad efter leken. Varsamt fiske och gärna återutsättning.',
    summer:   'Havsöringen är ute i havet och svårfångad från land. Trolling fungerar på djupare vatten.',
    autumn:   'En av årets absolut bästa perioder. Havsöringen vandrar längs kusten mot älvarna.',
    winter:   'Bra fiske längs kusten på milda dagar. Havsöringen aktiv i svalt havsvatten.',
    springMethods: ['Spinnfiske från strand', 'Flugfiske i mynningar', 'Blink'],
    summerMethods: ['Trolling', 'Flugfiske tidigt'],
    autumnMethods: ['Spinnfiske', 'Flugfiske', 'Blink'],
    monthlyTips: [
      'Bra vinterfiske längs kusten på milda dagar. Blink och spinnare.',
      'Kustfisket fortsätter. Milda perioder ger bra fiske.',
      'Utmärkt vårfiske längs kusten. Havsöringen aktiv och aggressiv.',
      'Toppsäsong vår. Havsöringen betar intensivt längs stränder och mynningar.',
      'Fisket avtar något men fortfarande bra vid rätt tidpunkt.',
      'Havsöringen drar ut i öppet hav. Trolling ger resultat.',
      'Svårast fiske -- havsöringen långt ut till havs.',
      'Lite bättre. Enstaka fisk vandrar in mot kusten.',
      'Höstfisket börjar. Havsöringen vandrar längs kusten mot älvarna.',
      'Toppsäsong höst. Intensiv aktivitet längs kusten. Utmärkt spinnfiske.',
      'Lekperiod. Fisket längs kusten bra men respektera fredningstider.',
      'Bra vinterfiske på milda dagar längs kusten.',
    ],
  },
  {
    slug:        'lax',
    name:        'Lax',
    latin:       'Salmo salar',
    description: 'Laxen är en ikonisk sportfisk som vandrar upp i svenska älvar för att leka. Mörrum och Torneälven är världskända laxvatten.',
    peakMonths:  [6, 7, 8, 9],
    okMonths:    [5, 10],
    spawningMonths: [10, 11],
    spawningTemp:   '4–8°C',
    activeTemp:     '10–18°C',
    preLek:   'Laxen vandrar upp i älvarna. Bästa perioden för laxfiske i de stora älvarna.',
    postLek:  'Utmattad efter leken. Flertalet laxar dör efter leken. Kolla fredningstider.',
    summer:   'Högsäsong för laxfiske i älvarna. Laxen vandrar upp och kan fångas på fluga och blink.',
    autumn:   'Laxen förbereder sig för lek. Sista chansen i älvarna innan fredning.',
    winter:   'Laxen håller sig ute i havet. Inget meningsfullt älvfiske.',
    springMethods: ['Flugfiske', 'Blink', 'Wobbler'],
    summerMethods: ['Flugfiske', 'Blink', 'Harling'],
    autumnMethods: ['Flugfiske', 'Blink'],
    monthlyTips: [
      'Laxen ute i havet. Inget älvfiske.',
      'Laxen ute i havet. Inget älvfiske.',
      'Laxen börjar röra sig mot kusterna.',
      'Förberedelse inför säsongen. Kolla lokala bestämmelser och fiskekort.',
      'Säsongen öppnar på flera älvar. Tidiga laxar vandrar upp.',
      'Högsäsong börjar. Laxen vandrar aktivt i älvarna.',
      'Toppsäsong. Flest laxar i älvarna. Utmärkt flugfiske.',
      'Fortsatt bra fiske. Laxen aktiv och aggressiv.',
      'Lekförberedelserna börjar. Sista bra månaden på flera älvar.',
      'Leken pågår. De flesta älvar stänger för fiske. Kolla lokala regler.',
      'Fredningsperiod på de flesta älvar.',
      'Laxen ute i havet. Vila och planera nästa säsong.',
    ],
  },
  {
    slug:        'harr',
    name:        'Harr',
    latin:       'Thymallus thymallus',
    description: 'Harren är en elegant sportfisk som lever i klara, syrerika strömmande vatten. Flugfiske efter harr i fjällälvar är en upplevelse utöver det vanliga.',
    peakMonths:  [6, 8, 9],
    okMonths:    [5, 7, 10],
    spawningMonths: [4, 5],
    spawningTemp:   '6–10°C',
    activeTemp:     '10–18°C',
    preLek:   'Harren är fredad under lekperioden på de flesta vatten. Kolla lokala regler.',
    postLek:  'Direkt efter fredningen är harren aggressiv och aktiv. Utmärkt flugfiske.',
    summer:   'Sommaren är högsäsong för harr. Torra flugor kvällstid ger spektakulära resultat.',
    autumn:   'Utmärkt höstfiske. Harren aktiv och aggressiv i svalt klart vatten.',
    winter:   'Harren är aktiv men kräver nymffiske nära botten i saktare partier.',
    springMethods: ['Flugfiske med nymf', 'Liten spinnare'],
    summerMethods: ['Torrflugefiske', 'Nymffiske', 'Flugfiske'],
    autumnMethods: ['Flugfiske', 'Nymffiske', 'Liten jigg'],
    monthlyTips: [
      'Harren aktiv i svalt vatten. Nymffiske nära botten.',
      'Fortfarande aktiv. Nymffiske under yta fungerar bra.',
      'Lekförberedelserna börjar. Harren rör sig och är aktiv.',
      'Lekperiod -- fredad på de flesta vatten. Kolla lokala regler.',
      'Fredning fortsätter. Kontrollera när säsongen öppnar på ditt vatten.',
      'Säsongen öppnar. Harren jagar aktivt på yta. Utmärkt torrflugefiske.',
      'Sommarpeak. Kvällsfiske med torra flugor ger fantastiska upplevelser.',
      'Fortsatt utmärkt fiske. Harren aktiv hela dagen.',
      'Höstfiske -- harren aggressiv och vacker i höstfärger. Nymf och torr fluga.',
      'Bra höstfiske. Harren aktiv i svalt vatten.',
      'Fisket avtar. Harren rör sig djupare.',
      'Vinterfiske möjligt men kräver rätt vatten och tålamod.',
    ],
  },
  {
    slug:        'roding',
    name:        'Röding',
    latin:       'Salvelinus alpinus',
    description: 'Rödingen är en kall vattenspecialist som lever i djupa klara sjöar i Norrland och fjällvärlden. En av Sveriges vackraste sportfiskar.',
    peakMonths:  [4, 5, 10, 11],
    okMonths:    [3, 6, 9, 12],
    spawningMonths: [10, 11],
    spawningTemp:   '4–8°C',
    activeTemp:     '4–12°C',
    preLek:   'Rödingen rör sig mot grundare vatten. Bra period för trolling och jigg.',
    postLek:  'Rödingen går djupt och återhämtar sig. Utmanande fiske.',
    summer:   'Rödingen söker sig till djupa svala lager. Trolling på rätt djup ger resultat.',
    autumn:   'Toppsäsong. Rödingen aktiv och uppgrundar inför höstleken.',
    winter:   'Utmärkt isfiske. Rödingen jagar aktivt nära bottnens kanter.',
    springMethods: ['Trolling', 'Jigg', 'Isfiskerigg'],
    summerMethods: ['Trolling på djup', 'Nymffiske'],
    autumnMethods: ['Trolling', 'Flugfiske', 'Jigg'],
    monthlyTips: [
      'Utmärkt isfiske. Rödingen aktiv nära botten.',
      'Isfisket fortsätter. En av de bästa månaderna för pimpel och jigg.',
      'Isen lägger sig upp. Trolling och jigg i klart vatten.',
      'Bra vårfiske. Rödingen aktiv i kylslaget vatten.',
      'Utmärkt fiske. Rödingen betar intensivt efter vintern.',
      'Rödingen börjar dra djupare. Trolling på rätt djuplinje.',
      'Sommartrögheten. Trolling på 15–25 meter ger resultat.',
      'Fisket börjar ta fart. Rödingen rör sig mot grundare vatten.',
      'Höstfisket börjar. Rödingen aktiv och uppgrundar.',
      'Toppsäsong. Rödingen leker och är aktiv. Trolling och flugfiske.',
      'Lekperiod. Respektera fredningstider på ditt vatten.',
      'Vinterfiske under is -- rödingen aktiv hela dagen.',
    ],
  },
];

// ---------------------------------------------------------------------------
// Regioner
// ---------------------------------------------------------------------------

export interface RegionData {
  slug:  string;
  name:  string;
  // Temperaturförskjutning i månader jämfört med mellansverige
  // Negativ = kallare/senare, positiv = varmare/tidigare
  offset: number;
}

export const REGIONS: RegionData[] = [
  { slug: 'sodra-sverige',    name: 'Södra Sverige',    offset:  1 },
  { slug: 'mellansverige',    name: 'Mellansverige',     offset:  0 },
  { slug: 'norra-sverige',    name: 'Norra Sverige',     offset: -1 },
  { slug: 'fjallvarlden',     name: 'Fjällvärlden',      offset: -2 },
];

// ---------------------------------------------------------------------------
// Veckovis betningspoäng
// ---------------------------------------------------------------------------

export interface WeekScore {
  week:        number;    // 1–52
  startDate:   string;    // YYYY-MM-DD
  month:       number;    // 1–12
  moonScore:   number;    // 0–10
  seasonScore: number;    // 0–10
  totalScore:  number;    // 0–10
  moonPhase:   MoonDay['phase'];
  moonEmoji:   string;
}

export function getWeekScores(species: SpeciesData, year = 2026): WeekScore[] {
  const weeks: WeekScore[] = [];
  const startOfYear = new Date(`${year}-01-01`);

  for (let week = 1; week <= 52; week++) {
    const dayOfYear  = (week - 1) * 7;
    const weekStart  = new Date(startOfYear.getTime() + dayOfYear * 86400000);
    const midWeek    = new Date(weekStart.getTime() + 3 * 86400000);
    const month      = midWeek.getMonth() + 1;

    const moon        = getMoonData(midWeek);
    const moonScore   = moon.score;
    let seasonScore   = 0;

    if (species.peakMonths.includes(month))      seasonScore = 9;
    else if (species.okMonths.includes(month))   seasonScore = 6;
    else if (species.spawningMonths.includes(month)) seasonScore = 3;
    else                                          seasonScore = 2;

    const totalScore = Math.round((moonScore * 0.3 + seasonScore * 0.7));

    weeks.push({
      week,
      startDate: weekStart.toISOString().split('T')[0],
      month,
      moonScore,
      seasonScore,
      totalScore,
      moonPhase: moon.phase,
      moonEmoji: MOON_PHASE_EMOJI[moon.phase],
    });
  }

  return weeks;
}

// ---------------------------------------------------------------------------
// Hjälpfunktioner
// ---------------------------------------------------------------------------

export function getScoreLabel(score: number): { label: string; color: 'green' | 'amber' | 'stone' } {
  if (score >= 7) return { label: 'Toppläge',       color: 'green' };
  if (score >= 5) return { label: 'Värt att testa', color: 'amber' };
  return              { label: 'Trögt',           color: 'stone' };
}

export function getSpeciesBySlug(slug: string): SpeciesData | undefined {
  return SPECIES.find(s => s.slug === slug);
}

export function getMonthName(month: number): string {
  return MONTHS_SV[month - 1];
}

export function getMonthSlug(month: number): string {
  return MONTHS_SLUG[month - 1];
}

export function getMonthFromSlug(slug: string): number {
  return MONTHS_SLUG.indexOf(slug) + 1;
}
