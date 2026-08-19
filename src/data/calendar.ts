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
  group:       'rovfisk' | 'laxfisk' | 'vitfisk' | 'kust';
  description: string; // kort beskrivning för kalenderkontext
  forekomst?:  string;  // begränsad utbredning (kust, fåtal vatten)
  absentRegions?: string[]; // regioner där arten inte förekommer (slugs)
  peakMonths:  number[]; // 1–12
  okMonths:    number[];
  // Biologisk data
  spawningMonths: number[];
  closedMonths?:  number[]; // fredningsmånader, visas som "Fredad" i kalendern
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
    group:       'rovfisk',
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
    group:       'rovfisk',
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
    group:       'rovfisk',
    forekomst:   'Främst i de stora sjösystemen och i näringsrika sjöar i söder, samt i Östersjöns innerskärgårdar. Saknas i fjällen och i större delen av Norrlands inland.',
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
    group:       'laxfisk',
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
    group:       'laxfisk',
    forekomst:   'Kustnära art längs hela svenska kusten som leker i vattendrag som mynnar i havet. I insjöar uppträder öring i stället som insjööring eller bäcköring.',
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
    group:       'laxfisk',
    forekomst:   'Finns i havet runt hela kusten men leker bara i vissa vattendrag. Sötvattenlevande bestånd finns i Vänern, med lek i Klarälven och Gullspångsälven.',
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
    group:       'laxfisk',
    forekomst:   'Främst en nordlig art. Finns i hela Norrland och längs kusten från Norrbotten ned till norra Gästrikland, samt söderut i Klarälvens vattensystem och i Vättern.',
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
    group:       'laxfisk',
    forekomst:   'Fjällröding finns från Värmland och norrut längs fjällkedjan. Storröding i ett fåtal sydligare sjöar, bland annat Vättern, Sommen och Unden. Bestånden söder om Dalälven har minskat kraftigt.',
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
  {
    slug:        'lake',
    group:       'rovfisk',
    name:        'Lake',
    latin:       'Lota lota',
    description: 'Laken är Sveriges enda sötvattenstorskfisk och en utpräglad vinterart. Den leker mitt i vintern och fångas bäst på pimpel och ismete under den kalla årstiden.',
    peakMonths:  [12, 1, 2],
    okMonths:    [11, 3],
    spawningMonths: [],
    spawningTemp:   '0,5–4°C',
    activeTemp:     'kallt, under 10°C',
    preLek:   'Inför vinterleken samlas laken på grunda grus- och sandbottnar. Förvintern är en utmärkt tid för bottenmete med betesfisk.',
    postLek:  'Efter leken sprider sig laken till djupare vatten igen och blir svårfångad fram till nästa vinter.',
    summer:   'Större lakar står djupt och svalt och är svåra att nå. Sommaren är artens tydliga lågsäsong.',
    autumn:   'När vattnet kallnar vaknar laken och söker sig grundare. Fisket tar fart mot förvintern.',
    winter:   'Lakens högsäsong. Under och kring leken fångas den på pimpel och ismete nattetid, nästan alltid nära botten.',
    springMethods: ['Bottenmete', 'Jiggfiske'],
    summerMethods: ['Djupt bottenmete'],
    autumnMethods: ['Bottenmete med betesfisk', 'Jiggfiske'],
    monthlyTips: [
      'Högsäsong. Laken leker och fångas bäst på pimpel och ismete nära botten, gärna nattetid.',
      'Fortsatt toppfiske under isen. Agna med betesfisk eller mask på botten.',
      'Leken ebbar ut. Sen vinteris kan fortfarande ge fisk nära botten.',
      'Laken drar mot djupet och lågsäsongen inleds.',
      'Svårfångad. Större lakar står djupt och svalt.',
      'Lågsäsong. Mest småfisk strandnära.',
      'Årets trögaste period. Laken vilar djupt.',
      'Fortsatt tyst. Vänta in svalare vatten.',
      'Vattnet börjar kallna och laken vaknar långsamt på djupet.',
      'Aktiviteten ökar. Bottenmete på djupare kanter kan ge napp.',
      'Förvintern. Laken söker sig grundare inför leken. Bra bottenmete.',
      'Högsäsong inleds. Första isen samlar lake på lekbottnarna.',
    ],
  },
  {
    slug:        'regnbage',
    group:       'laxfisk',
    forekomst:   'Främmande art som sällan reproducerar sig i svenska vatten. Förekomsten består i huvudsak av utsatt fisk i put and take-vatten och rymlingar från odlingar.',
    name:        'Regnbåge',
    latin:       'Oncorhynchus mykiss',
    description: 'Regnbågen sätts ut i put and take-vatten över hela landet och är en tacksam art för nybörjare. Den trivs i svalt vatten och fiskas bäst vår och höst.',
    peakMonths:  [4, 5, 9, 10],
    okMonths:    [1, 2, 3, 6, 11, 12],
    spawningMonths: [],
    spawningTemp:   'Leker ej naturligt i Sverige',
    activeTemp:     '10–14°C',
    preLek:   'Vår är en av regnbågens bästa perioder. Svalt vatten gör fisken aktiv ytligt och strandnära, mottaglig för både fluga och powerbait.',
    postLek:  'Försommaren håller fortfarande svalt vatten på många vatten. Fiska tidigt och sent när dagarna börjar bli varma.',
    summer:   'I vatten över 20 grader blir regnbågen trög och känslig. Fiska gryning och kväll, och hantera fisken varsamt vid återutsättning.',
    autumn:   'Hösten är toppsäsong igen. Sjunkande temperatur väcker fisken och den betar aktivt inför vintern.',
    winter:   'Regnbågen är aktiv även i kallt vatten. På islagda put and take-vatten fungerar pimpel med liten blink och maggot.',
    springMethods: ['Flugfiske', 'Powerbait', 'Spinnfiske'],
    summerMethods: ['Flugfiske gryning och kväll', 'Djupare mete'],
    autumnMethods: ['Flugfiske', 'Spinnfiske', 'Powerbait'],
    monthlyTips: [
      'Pimpelfiske på säkra isar med liten blink och maggot. Fisken står ofta på tre till sex meter.',
      'Fortsatt isfiske. Regnbågen är aktiv även i kallt vatten.',
      'Vårfisket vaknar. Svalt vatten ger aktiv fisk strandnära.',
      'Toppsäsong. Fluga och powerbait fungerar bra i tio till fjorton graders vatten.',
      'Fortsatt utmärkt vårfiske. Vakande fisk på torrfluga morgon och kväll.',
      'Bra fiske tidigt och sent. Fisken söker svalare lägen mitt på dagen.',
      'Varmt vatten gör fisket trögare. Fiska gryning och kväll, hantera fisken varsamt.',
      'Fortsatt sommarslöhet. Djupare och svalare vatten ger bäst chans.',
      'Hösten lyfter fisket. Regnbågen betar aktivt i svalnande vatten.',
      'Toppsäsong höst. Streamers och spinnare provocerar hugg hela dagen.',
      'Bra senhöstfiske fram tills vattnen stänger eller lägger sig.',
      'Isfiske där säkra isar finns. Liten blink nära botten.',
    ],
  },
  {
    slug:        'sik',
    group:       'laxfisk',
    name:        'Sik',
    latin:       'Coregonus maraena',
    description: 'Siken är en nordlig laxfisk med liten mun som kräver fingertoppskänsla. Den vandrar upp i älvarna på hösten och fiskas på fluga, mete och pimpel.',
    peakMonths:  [9, 10, 11],
    okMonths:    [1, 2, 3, 8, 12],
    spawningMonths: [],
    spawningTemp:   '~7°C',
    activeTemp:     'svalt vatten',
    preLek:   'Lekvandringen inleds redan i augusti när lekmogen sik söker sig mot älvar och stränder. Flugfiske kan ge fisk i strömmande vatten.',
    postLek:  'Efter leken övervintrar vandringssiken i älvarna. Pimpel på säkra isar kan ge fisk.',
    summer:   'Sommarsik tas på liten torrfluga i sjöar och längs kusten. Den lilla munnen gör huggen svåra att kroka.',
    autumn:   'Höstens lekvandring är sikfiskets höjdpunkt. Mete och flugfiske i älvar och vid stränder.',
    winter:   'Pimpelfiske på is med liten pirk och maggot där isarna är säkra. Längs kusten går fisket året om.',
    springMethods: ['Pimpelfiske', 'Mete'],
    summerMethods: ['Flugfiske med torrfluga', 'Mete med maggot'],
    autumnMethods: ['Mete', 'Flugfiske'],
    monthlyTips: [
      'Pimpelfiske på säkra isar med liten pirk och maggot.',
      'Vinterns isfiske fortsätter. Sök siken på måttligt djup.',
      'Vårisar kan ge fint pimpelfiske innan isen släpper.',
      'Mellanperiod. Siken sprider sig efter vintern.',
      'Lugnare fiske. Kustsik kan tas på fluga vid stränderna.',
      'Sommarfluga börjar fungera. Liten torrfluga på kvällar.',
      'Flugfiske efter sik på kvällar. Tålamod krävs för den lilla munnen.',
      'Lekvandringen inleds. De första fiskarna söker sig mot älvarna.',
      'Höstens lekvandring tar fart. Mete och fluga i strömmande vatten.',
      'Toppsäsong. Siken samlas på lekplatserna i älvar och vid stränder.',
      'Fortsatt starkt höstfiske kring leken över grus- och sandbottnar.',
      'Leken ebbar ut. Tidig is kan ge pimpelfiske där det är säkert.',
    ],
  },
  {
    slug:        'karp',
    group:       'vitfisk',
    forekomst:   'Inplanterad art som främst finns i sydsvenska sjöar och anlagda karpvatten. Naturlig reproduktion lyckas bara i landets sydligaste delar.',
    name:        'Karp',
    latin:       'Cyprinus carpio',
    description: 'Karpen är en storväxt sommarart med en hängiven skara specialister. Den betar bara i varmt vatten och fiskas med mete från sen vår till tidig höst.',
    peakMonths:  [6, 7, 8],
    okMonths:    [5, 9],
    spawningMonths: [],
    spawningTemp:   '20–22°C',
    activeTemp:     'bäst över 18°C',
    preLek:   'Sen vår väcker karpen ur vintervilan när vattnet passerar tio grader. Förbeta platser och vänta in värmen.',
    postLek:  'Efter leken i försommaren betar karpen intensivt. Högsommaren är artens bästa tid.',
    summer:   'Högsäsong. Karpen betar aktivt i varmt vatten. Bottenmete med boilies eller majs vid gryning och skymning.',
    autumn:   'Fram till att vattnet kallnar håller fisket i sig. När temperaturen sjunker under tio grader avtar betandet.',
    winter:   'Karpen ligger i dvala i bottenslammet och slutar äta under cirka åtta grader. Lågsäsong.',
    springMethods: ['Bottenmete', 'Förbete'],
    summerMethods: ['Bottenmete med boilies', 'Mete med majs', 'Hårmontage'],
    autumnMethods: ['Bottenmete', 'Mete med majs'],
    monthlyTips: [
      'Lågsäsong. Karpen ligger i dvala på botten.',
      'Fortsatt vintervila. Karpen betar inte.',
      'Fortsatt tyst. Vänta in varmare vatten.',
      'Karpen börjar röra sig när vattnet stiger mot tio grader. Förbeta platser.',
      'Fisket vaknar. Karpen söker sig till grunda varma vikar inför leken.',
      'Högsäsong inleds. Lek och intensivt betande. Bottenmete vid gryning och skymning.',
      'Toppsäsong. Varmt vatten och aktiv fisk. Boilies och majs på botten.',
      'Fortsatt utmärkt karpfiske. Tidig morgon och sen kväll är bäst.',
      'Bra fiske håller i sig. Karpen lagrar fett inför vintern.',
      'Fisket avtar när vattnet kallnar. Karpen betar mindre.',
      'Lågsäsong inleds. Enstaka fisk i varmare vatten.',
      'Vintervila. Karpen står stilla på botten.',
    ],
  },
  {
    slug:        'id',
    group:       'vitfisk',
    name:        'Id',
    latin:       'Leuciscus idus',
    description: 'Iden är Sveriges största mörtfisk och en växande sportfiskeart. Den samlas i stora stim vid vårleken och tar både fluga, drag och mete.',
    peakMonths:  [4, 5],
    okMonths:    [3, 6, 7, 8],
    spawningMonths: [],
    spawningTemp:   'tidig vår, rinnande vatten',
    activeTemp:     'sval till lagom',
    preLek:   'Vårleken samlar id i stora stim som vandrar upp i åar och strömmande vatten. Detta är årets bästa idfiske, på drag och fluga.',
    postLek:  'Efter leken vandrar iden tillbaka till sjö eller kust för näringssök. Fortsatt bra fiske i takt med stigande temperatur.',
    summer:   'Sommarid tas på fluga, mete och små spinnare i sjöar och längs kusten. En stark och uthållig motståndare.',
    autumn:   'Fisket avtar när vattnet kallnar och iden drar mot djupare vatten.',
    winter:   'Lågsäsong. Iden är passiv i kallt vatten.',
    springMethods: ['Spinnfiske', 'Flugfiske', 'Mete'],
    summerMethods: ['Flugfiske', 'Mete med majs', 'Små spinnare'],
    autumnMethods: ['Mete', 'Spinnfiske'],
    monthlyTips: [
      'Lågsäsong. Iden står djupt och passiv.',
      'Fortsatt vinterlugn.',
      'Iden börjar samlas inför leken. Tidiga stim i åmynningar.',
      'Högsäsong. Vårleken samlar stora stim i strömmande vatten. Drag och fluga.',
      'Fortsatt toppfiske kring leken och direkt efter. Aktiv och stark fisk.',
      'Försommarid på fluga och mete i sjöar och längs kusten.',
      'Sommarfiske. Små spinnare och flytande bete vid ytan.',
      'Fortsatt bra mete och flugfiske efter id i varmt vatten.',
      'Fisket avtar när vattnet kallnar. Iden drar djupare.',
      'Lågsäsong inleds. Enstaka fisk på mete.',
      'Passiv fisk i kallt vatten.',
      'Vinterlugn. Iden står djupt.',
    ],
  },
  {
    slug:        'asp',
    group:       'vitfisk',
    forekomst:   'Huvudbestånden finns i Vänern, Mälaren och Hjälmaren med tillrinnande vattendrag. Mindre bestånd i bland annat Göta älv, Motala ström, Emån och Dalälven.',
    name:        'Asp',
    latin:       'Leuciscus aspius',
    description: 'Aspen är Sveriges största karpfisk och en rovlevande spinnfiskeart. Den är rödlistad och fredad under leken, men ett spännande sommarmål på öppet vatten.',
    peakMonths:  [6, 7, 8],
    okMonths:    [3, 9],
    spawningMonths: [],
    closedMonths:   [4, 5],
    spawningTemp:   'vår, strömmande vatten',
    activeTemp:     'lagom till varmt',
    preLek:   'Tidig vår, innan fredningen, kan stora aspar samlas inför lekvandringen. Respektera lokala regler noga.',
    postLek:  'Efter fredningen i juni sprider sig aspen på öppet vatten och jagar löja vid ytan. Spinnfiskets bästa tid börjar.',
    summer:   'Högsäsong. Aspen jagar ytaktivt i stim eller solitärt. Snabba spinnare och ytbeten som imiterar småfisk.',
    autumn:   'Fortsatt fiske på öppet vatten medan temperaturen håller. Aktiviteten avtar mot senhösten.',
    winter:   'Lågsäsong. Aspen är passiv i kallt vatten.',
    springMethods: ['Spinnfiske utanför fredningstid'],
    summerMethods: ['Spinnfiske', 'Ytbeten', 'Imitationer av löja'],
    autumnMethods: ['Spinnfiske', 'Jiggfiske'],
    monthlyTips: [
      'Lågsäsong. Aspen står djupt och passiv.',
      'Fortsatt vinterlugn.',
      'Stora aspar kan samlas inför lekvandringen. Kontrollera lokala regler innan du fiskar.',
      'Fredad. Fiske efter asp är förbjudet 1 april till 31 maj i Vänerns, Mälarens och Hjälmarens tillrinnande vattendrag.',
      'Fredad. Låt den lekvandrande aspen vara. Fredningen skyddar en rödlistad art.',
      'Fredningen släpper. Aspen sprider sig på öppet vatten och jagar löja. Spinnfisket vaknar.',
      'Högsäsong. Ytaktiv asp på snabba spinnare och ytbeten.',
      'Fortsatt toppfiske på öppet vatten. Sök jagande fisk vid ytan.',
      'Bra höstfiske medan vattnet håller värmen. Aktiviteten börjar avta.',
      'Fisket avtar. Aspen drar mot djupare vatten.',
      'Lågsäsong. Passiv fisk.',
      'Vinterlugn. Aspen står djupt.',
    ],
  },
  {
    slug:        'kanadaroding',
    group:       'laxfisk',
    forekomst:   'Finns bara i ett fåtal svenska vatten, främst Storsjön och Indalsälvens avrinningsområde.',
    name:        'Kanadaröding',
    latin:       'Salvelinus namaycush',
    description: 'Kanadaröding är en inplanterad nordamerikansk laxfisk i stora kalla sjöar. Den ligger djupt på sommaren och går grunt på hösten och vintern.',
    peakMonths:  [9, 10, 11],
    okMonths:    [1, 5, 6, 7, 8, 12],
    spawningMonths: [],
    spawningTemp:   'cirka 8°C',
    activeTemp:     '4–12°C',
    preLek:   'Inför höstleken går kanadarödingen upp på grunt vatten över sten och grus och blir aggressiv och lättare att nå. Förhösten är ofta årets bästa fiske.',
    postLek:  'Efter leken står fisken kvar grunt en bra bit in på vintern, där den kan nås även genom isen.',
    summer:   'På sommaren söker sig kanadarödingen till kalla djuppartier, ofta långt ner. Då gäller trolling och dragutter med djuprigg för att nå den.',
    autumn:   'Hösten är toppsäsong. Fisken går grunt för att leka, jagar aktivt och nås på spinn, jigg och trolling längs grynnor och branter.',
    winter:   'Kanadarödingen står ofta grunt under isen fram till islossningen. Pimpel och vertikalfiske över rätt botten kan ge fina fiskar.',
    springMethods: ['Trolling', 'Spinnfiske', 'Jiggfiske'],
    summerMethods: ['Djuptrolling', 'Dragutter med djuprigg', 'Vertikalfiske'],
    autumnMethods: ['Trolling', 'Spinnfiske', 'Jiggfiske'],
    monthlyTips: [
      'Fisken står ofta grunt under isen. Pimpel och vertikalfiske över sten och grynnor kan ge napp.',
      'Trögt under tjock is. Fisken är långsam, sök grunt med tålamod under ljusare fönster.',
      'Fortsatt trögt sent på vintern. Korta fönster kan ge fisk grunt mot slutet av månaden.',
      'Islossningen närmar sig och isen blir osäker. Avvakta tills öppet vatten ger säkert fiske.',
      'Efter islossningen står fisken fortfarande relativt grunt. Spinn och trolling längs branter fungerar.',
      'Fisken börjar söka sig djupare när vattnet värms. Trolling längs djupkanter ger bäst chans.',
      'Högsommar. Kanadarödingen står djupt och kallt och nås med djuptrolling och dragutter.',
      'Fisken börjar röra sig grundare inför hösten. Trolling fungerar fortfarande bäst.',
      'Höstfisket drar igång. Fisken går grunt och jagar aktivt över grynnor och branter.',
      'Toppsäsong. Lekvandring mot grunt vatten ger aggressiva hugg på spinn, jigg och trolling.',
      'Fortsatt starkt fiske grunt. Kallt vatten och fisk i lekområden ger fina exemplar.',
      'Fisken står kvar grunt in på vintern. Sök sten och grynnor på öppet vatten eller tidig is.',
    ],
  },
  {
    slug:        'makrill',
    group:       'kust',
    forekomst:   'Kustart på väst- och sydkusten, saknas i insjöar.',
    absentRegions: ['norra-sverige', 'fjallvarlden'],
    name:        'Makrill',
    latin:       'Scomber scombrus',
    description: 'Makrill är västkustens snabbsimmande sommargäst. Den kommer in mot kusten på sensommaren för att leka och äta och drar ut till djupt vatten på hösten.',
    peakMonths:  [6, 7, 8],
    okMonths:    [5, 9],
    spawningMonths: [],
    spawningTemp:   'cirka 14°C',
    activeTemp:     '12–18°C',
    preLek:   'På vårkanten kommer makrillen in från djupare vatten för att leka. I slutet av maj når de första stimmen västkusten och fisket vaknar.',
    postLek:  'Efter leken jagar makrillen aktivt nära ytan hela sommaren och går ofta strandnära, lätt att nå från land.',
    summer:   'Högsommar är toppsäsong. Stimmen står ofta grunt och nära land. Spana efter måsdyk som avslöjar jagande fisk.',
    autumn:   'Mot hösten drar stimmen ut mot djupare vatten. Öresund kan ge bra fiske en bit in i september innan säsongen ebbar ut.',
    winter:   'Makrillen övervintrar långt ute i djupare vatten i Nordsjön. Inget kustfiske den här tiden.',
    springMethods: ['Spinnfiske', 'Häckla', 'Flötmete'],
    summerMethods: ['Häckla', 'Spinnfiske', 'Flötmete med sillfilé'],
    autumnMethods: ['Spinnfiske', 'Häckla', 'Ränndörj'],
    monthlyTips: [
      'Makrillen står långt ute i djupare vatten. Inget kustfiske den här tiden.',
      'Fortsatt ute till havs. Vänta på vårens inflyttning.',
      'Makrillen är kvar i djupare vatten. Säsongen har inte börjat.',
      'En varm vår kan ge tidiga rapporter, men fisket drar sällan igång på allvar än.',
      'I slutet av maj kommer makrillen in mot västkusten. Spana efter måsdyk och jagande stim.',
      'Högsäsong. Makrillen går ofta grunt och nära land. Häckla och spinn ger fina fångster.',
      'Toppfiske längs hela västkusten. Stim nära ytan, kul fiske från både land och båt.',
      'Fortsatt starkt, men mot slutet börjar stimmen dra mot djupare vatten.',
      'Fisket avtar när makrillen rör sig utåt. Öresund kan ge bra fiske in i september.',
      'Makrillen lämnar kusten för djupare vatten. Säsongen ebbar ut.',
      'Ute till havs igen. Inget kustfiske.',
      'Makrillen övervintrar i djupare vatten. Vänta på våren.',
    ],
  },
  {
    slug:        'horngadda',
    group:       'kust',
    forekomst:   'Kustart längs väst- och sydkusten och i Östersjön, saknas i insjöar.',
    absentRegions: ['norra-sverige', 'fjallvarlden'],
    name:        'Horngädda',
    latin:       'Belone belone',
    description: 'Horngädda är makrillens förlöpare och ett säkert vårtecken på kusten. Den kommer in på grunt vatten för att leka och drar ut till havs efter leken.',
    peakMonths:  [5, 6],
    okMonths:    [4, 7, 8],
    spawningMonths: [],
    spawningTemp:   'cirka 15°C',
    activeTemp:     '10–18°C',
    preLek:   'Som ett av vårens första kusttecken kommer horngäddan in från Atlanten. Öresund och Skånekusten får den först, västkusten någon vecka senare.',
    postLek:  'Efter leken lämnar fisken grundvattnen och söker sig ut i friare vatten, men stannar i svenska farvatten en bit in på sensommaren.',
    summer:   'Leken på grunt vatten över tång är säsongens höjdpunkt. Fisket sker ofta på samma platser och med samma teknik som kustöring.',
    autumn:   'Horngäddan drar ut mot Atlanten igen. Kustfisket är i princip över för säsongen.',
    winter:   'Arten övervintrar ute i Atlanten och saknas helt vid kusten. Inget fiske den här tiden.',
    springMethods: ['Spinnfiske', 'Flötmete', 'Flugfiske'],
    summerMethods: ['Spinnfiske', 'Flugfiske', 'Flötmete'],
    autumnMethods: ['Spinnfiske', 'Flötmete'],
    monthlyTips: [
      'Horngäddan övervintrar ute i Atlanten. Inget kustfiske.',
      'Fortsatt ute till havs. Säsongen är långt borta.',
      'Arten är på väg mot kusterna längre söderut men når inte Sverige än.',
      'De första näbbgäddorna når Öresund och Skånekusten mot slutet av månaden.',
      'Högsäsong. Lekvandringen fyller grunda vikar. Spinn och flugfiske grunt ger toppfiske.',
      'Fortsatt starkt grunt fiske. Längst upp i Östersjön kommer fisken in nu.',
      'Efter leken drar fisken utåt i friare vatten. Mer spridd men fortfarande fångbar.',
      'Horngäddan finns kvar i svenska vatten men är svårare att nå från land.',
      'Fisket avtar när näbbgäddan börjar lämna kusterna.',
      'Arten drar ut mot Atlanten. Säsongen är i princip slut.',
      'Ute till havs. Inget kustfiske.',
      'Horngäddan övervintrar i Atlanten. Vänta på våren.',
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
// Samlad poängmodell (0-100): säsong = grund, måne och väder = justeringar
// ---------------------------------------------------------------------------

const MELLAN = REGIONS.find(r => r.slug === 'mellansverige')!;

function dayOfYear(date: Date): number {
  const start = Date.UTC(date.getUTCFullYear(), 0, 1);
  const cur   = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  return Math.floor((cur - start) / 86400000);
}

type SeasonInput  = { peakMonths: number[]; okMonths: number[]; spawningMonths: number[]; closedMonths?: number[] };
type WeatherInput = { tempMean: number; windSpeed: number; precip: number };

const ANCHOR = { peak: 92, ok: 66, off: 32 };

/**
 * Etiketttrosklar. Ligger avsiktligt bredvid ANCHOR eftersom de tva maste lasas
 * ihop. Regeln ar att avstandet mellan ANCHOR.ok och TOP maste vara storre an
 * manens maximala utslag, annars kan manfasen ensam lyfta en helt medelmattig
 * sasongsplata till "Topplage" och tillbaka igen fyra ganger i manaden.
 *
 * ANCHOR.ok = 66, TOP = 72, marginal 6. moonAdjustment ger som mest +5.
 * Vadret far fortfarande korsa granen (spann -25 .. +20), vilket ar avsikten:
 * vadret ar faktisk information om just det dygnet, manfasen ar det inte.
 *
 * Tidigare lag TOP pa 68, alltsa 2 poang over ANCHOR.ok. 82 procent av alla
 * fargbyten i kalendern orsakades da av manfasen ensam.
 */
const SCORE_TOP = 72;
const SCORE_OK  = 42;

function monthlyAnchor(sp: SeasonInput, month: number): number {
  if (sp.peakMonths.includes(month)) return ANCHOR.peak;
  if (sp.okMonths.includes(month))   return ANCHOR.ok;
  return ANCHOR.off;
}

function cosBlend(a: number, b: number, t: number): number {
  return a + (b - a) * (1 - Math.cos(Math.PI * t)) / 2;
}

function spawningDip(sp: SeasonInput, doy: number): number {
  if (!sp.spawningMonths.length) return 0;
  const centers = sp.spawningMonths.map(m => (m - 1) * 30.4 + 15);
  const center  = centers.reduce((s, d) => s + d, 0) / centers.length;
  let dist = Math.abs(doy - center);
  dist = Math.min(dist, 365 - dist);
  const WIDTH = 22, DEPTH = 18;
  if (dist > WIDTH) return 0;
  return DEPTH * (1 + Math.cos(Math.PI * dist / WIDTH)) / 2;
}

function seasonBaseline(sp: SeasonInput, doy: number): number {
  const pos = (doy - 15) / 30.4;
  const m0  = Math.floor(pos);
  const t   = pos - m0;
  const mA  = ((m0 % 12) + 12) % 12 + 1;
  const mB  = (((m0 + 1) % 12) + 12) % 12 + 1;
  let base  = cosBlend(monthlyAnchor(sp, mA), monthlyAnchor(sp, mB), t);
  base     -= spawningDip(sp, doy);
  return Math.max(20, Math.min(100, base));
}

function regionalDay(doy: number, region: RegionData): number {
  // Asymmetrisk regionforskjutning. En likformig forskjutning flyttar bade var-
  // och hosttoppen at samma hall, vilket ger orimliga host- och vintertoppar i
  // kalla regioner (t.ex. fjallens hosttopp i nov-dec trots is). Multiplikatorn
  // gar mjukt fran +1 over varen (jan-midsommar) till -1 over hosten (midsommar-dec),
  // sa varen skjuts senare norrut medan hosten skjuts tidigare norrut. Tanh ger
  // plattare plataer sa maj och juni behaller hela varskiftet. Overgangarna ligger
  // kring mitten av juli och arsskiftet, bada i lagsasong, sa eventuella knyckar ar sma.
  const raw     = Math.cos((2 * Math.PI * (doy - 100)) / 365);
  const m       = Math.tanh(3 * raw) / Math.tanh(3);
  const shifted = doy + region.offset * 30.4 * m;
  return ((shifted % 365) + 365) % 365;
}

function moonAdjustment(phase: MoonDay['phase']): number {
  switch (phase) {
    case 'new': case 'full':                      return 5;
    case 'waxing_gibbous': case 'waning_gibbous': return 2;
    case 'waxing': case 'waning':                 return 0;
    case 'first': case 'last':                    return -2;
  }
}

/**
 * Linjar interpolation mellan ankarpunkter, klampad i andarna.
 * Ersatter trappsteg. Ett trappsteg innebar att 18.0 grader ger +12 och
 * 18.1 grader ger +5, alltsa att en tiondels grad flyttar poangen sju steg.
 * Den klippkanten ar ett artefakt, inte en fiskesignal, och den gor att
 * dygn i en prognos kan bli utpekade som "basta" pa fel grunder.
 */
function lerpAnchors(x: number, anchors: [number, number][]): number {
  if (x <= anchors[0][0]) return anchors[0][1];
  const last = anchors[anchors.length - 1];
  if (x >= last[0]) return last[1];

  for (let i = 0; i < anchors.length - 1; i++) {
    const [x0, y0] = anchors[i];
    const [x1, y1] = anchors[i + 1];
    if (x >= x0 && x <= x1) {
      const t = (x - x0) / (x1 - x0);
      return y0 + t * (y1 - y0);
    }
  }
  return 0;
}

// Ankarpunkterna foljer samma avsikt som den tidigare trappan, men kurvan
// ar kontinuerlig. Spannvidden ar oforandrad (-25 .. +20).
const TEMP_ANCHORS:   [number, number][] = [
  [-10, -12], [0, -8], [4, 2], [8, 12], [17, 12], [21, 5], [25, -4], [32, -8],
];
const WIND_ANCHORS:   [number, number][] = [
  [0, -3], [1, 5], [2.5, 8], [4, 6], [6, 3], [8, -1], [10, -8], [13, -16], [18, -22],
];
const PRECIP_ANCHORS: [number, number][] = [
  [0, 0], [1, -1], [3, -3], [6, -6], [12, -8],
];

function weatherAdjustment(f: WeatherInput): number {
  const w =
    lerpAnchors(f.tempMean,  TEMP_ANCHORS) +
    lerpAnchors(f.windSpeed, WIND_ANCHORS) +
    lerpAnchors(f.precip,    PRECIP_ANCHORS);

  return Math.max(-25, Math.min(20, w));
}

export function getScore(opts: {
  species: SeasonInput; date: Date; region?: RegionData; forecast?: WeatherInput;
}): { score: number; season: number; moonAdj: number; weatherAdj: number; hasForecast: boolean; closed: boolean } {
  const region     = opts.region ?? MELLAN;
  const doy        = dayOfYear(opts.date);
  const month      = opts.date.getUTCMonth() + 1;
  const closed     = !!opts.species.closedMonths?.includes(month);
  const season     = seasonBaseline(opts.species, regionalDay(doy, region));
  const moonAdj    = moonAdjustment(getMoonData(opts.date).phase);
  const weatherAdj = opts.forecast ? weatherAdjustment(opts.forecast) : 0;
  const score = Math.max(0, Math.min(100, Math.round(season + moonAdj + weatherAdj)));
  return { score, season: Math.round(season), moonAdj, weatherAdj, hasForecast: !!opts.forecast, closed };
}

// Fargkanal: 0 (kvarter) .. 1 (ny/full), mjukt utspridd. Endast for nyans.
export function moonColorIntensity(date: Date): number {
  const SYNODIC = 29.53059, half = SYNODIC / 2;
  const known = new Date('2000-01-06T18:14:00Z').getTime();
  const pos = ((((date.getTime() - known) / 86400000) % SYNODIC) + SYNODIC) % SYNODIC;
  const d = Math.min(Math.min(pos, SYNODIC - pos), Math.abs(pos - half));
  return Math.max(0, 1 - d / (half / 2));
}

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
  closed:      boolean;   // fredad månad
}

export function getWeekScores(species: SpeciesData, year = 2026, region: RegionData = MELLAN): WeekScore[] {
  const weeks: WeekScore[] = [];
  const startOfYear = new Date(`${year}-01-01`);

  for (let week = 1; week <= 52; week++) {
    const weekStart = new Date(startOfYear.getTime() + (week - 1) * 7 * 86400000);
    const midWeek   = new Date(weekStart.getTime() + 3 * 86400000);
    const month     = midWeek.getMonth() + 1;
    const moon      = getMoonData(midWeek);
    const { score, season, moonAdj, closed } = getScore({ species, date: midWeek, region });

    weeks.push({
      week,
      startDate:   weekStart.toISOString().split('T')[0],
      month,
      moonScore:   moonAdj,   // justering -2..+5 (tidigare 0-10)
      seasonScore: season,    // baslinje 0-100 (tidigare 0-10)
      totalScore:  score,     // 0-100 (tidigare 0-10)
      moonPhase:   moon.phase,
      moonEmoji:   MOON_PHASE_EMOJI[moon.phase],
      closed,
    });
  }

  return weeks;
}

// ---------------------------------------------------------------------------
// Hjälpfunktioner
// ---------------------------------------------------------------------------

export function getScoreLabel(score: number, closed = false): { label: string; color: 'green' | 'amber' | 'stone' | 'slate' } {
  if (closed)             return { label: 'Fredad',         color: 'slate' };
  if (score >= SCORE_TOP) return { label: 'Toppläge',       color: 'green' };
  if (score >= SCORE_OK)  return { label: 'Värt att testa', color: 'amber' };
  return                         { label: 'Trögt',          color: 'stone' };
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
