/**
 * src/data/hydro-stations.ts
 *
 * Kurerad koppling mellan alvdestination och SMHI:s vattenforingsstation
 * (hydroobs, https://opendata-download-hydroobs.smhi.se).
 *
 * ---------------------------------------------------------------------------
 * VARFOR EN HANDPLOCKAD TABELL OCH INTE EN ALGORITM
 * ---------------------------------------------------------------------------
 *
 * Narmaste station efter fagelvagen ar fel matchning for vattenforing. Ett
 * flode har bara betydelse i sitt eget vattendrag. En kartlaggning av alla 23
 * alvdestinationer gav direkt falska traffar i flera fall:
 *
 *   Gota alv  -> narmaste var Vrangebacken, 279 km2. Huvudfaran ar 46 883.
 *   Helge a   -> narmaste var Kopinge, 2 km2. Det ar ett dike.
 *   Nissan    -> narmaste stationen ligger i Fyllean, en annan a.
 *   Klaralven -> narmaste var Edsvalla, som sitter i Norsalven.
 *   Damman    -> narmaste var Sallsjon, som avvattnas at motsatt hall.
 *
 * SMHI:s falt catchmentName anger dessutom HUVUDavrinningsomradet, inte
 * vattendraget. Giman redovisas under LJUNGAN, Vindelalven under UMEALVEN,
 * Klaralven under GOTA ALV. Namnmatchning duger alltsa inte heller.
 *
 * ---------------------------------------------------------------------------
 * VARFOR BARA 16 AV 27 ALVAR
 * ---------------------------------------------------------------------------
 *
 * Hydroobs har tre perioder: latest-hour, latest-day och corrected-archive.
 * Kraftbolagens stationer (KRV) levererar med efterslapning och har BARA
 * corrected-archive, som ligger veckor efter. De far alltsa aldrig ett
 * aktuellt varde, aven om de ar markta "active" i stationslistan.
 *
 * Det slar ut tio alvar: Angermanalven, Indalsalven, Mellanljusnan, Dalalven,
 * Klaralven, Gota alv, Atran, Nissan, Lagan och Damman. For dem finns ingen
 * station i RATT vattendrag med aktuell data. De alternativ SMHI erbjuder
 * ligger i biflode (Roan 584 km2 mot Angermanalvens 30 638) eller i fel vatten
 * (Saffle sitter i Byalven, inte Klaralven). Ett tomt falt ar battre an en
 * siffra fran fel alv.
 *
 * Det som blir kvar ar dock inte slumpmassigt. Kvar ar alla fyra nationalalvar
 * plus Giman, Byskealven och Ranealven, alltsa just de OREGLERADE vattnen dar
 * flodet speglar naturlig avrinning och faktiskt betyder nagot for fisket. Det
 * vi tappar ar i huvudsak reglerade kraftverksalvar, dar korttidsflodet anda
 * styrs av turbinschemat snarare an av vader.
 *
 * ---------------------------------------------------------------------------
 * TILLAGG AUGUSTI 2026: LJUNGAN, RONNE A, VOXNAN
 * ---------------------------------------------------------------------------
 *
 * Ljungan far inget flode. Sju aktiva stationer i systemet (12 850 km2). De
 * fyra som tacker mer an 20 procent av arealen ar alla utan aktuell data,
 * daribland Skallbole KRV (12 088 km2) som sitter strax uppstroms Viforsen och
 * alltsa precis dar man vill mata. De tre som lever tacker 17, 1,1 och 0,1
 * procent. Gimdalsby lever men ar redan kopplad till Giman.
 *
 * Ronne a och Voxnan far bada flode och ar inlagda nedan.
 *
 * KRV-agarskap ar en VARNINGSSIGNAL, inte en garanti. Forsmollan i Ronne a ar
 * kraftbolagsagd, tacker 50 procent av arealen och levererar anda latest-day.
 * Kontrollera alltid periodtillgangen per station i stallet for att sortera
 * bort pa agarskap.
 *
 * Arealandel ar daremot en palitlig nyckel for huvudfara mot biflode. Under
 * ungefar 20 procent av vattendragets totala areal sitter stationen i ett
 * biflode eller en kallgren.
 *
 * ---------------------------------------------------------------------------
 * TILLAGG AUGUSTI 2026: RANEALVEN
 * ---------------------------------------------------------------------------
 *
 * Ranealven redovisas under catchmentName RANEALVEN, huvudavrinningsomrade 7
 * (catchmentNumber 7000). Tolv stationer finns i systemet, tre av dem aktiva.
 * Niemisel tacker 3 778,63 km2 av alvens 4 207, alltsa 90 procent, och ar
 * darmed otvetydigt huvudfara.
 *
 * De tva andra aktiva ar fallgropar av samma slag som tidigare beskrivits.
 * Ytterholmen (1 012 km2) ligger bara ett par mil fran destinationens
 * koordinat och hade sett rimlig ut i en avstandsmatchning, men tacker 24
 * procent och sitter i biflode. Vuoddasbacken tacker 41,3 km2. Ovriga nio
 * stationer i systemet ar inaktiva sedan 1970-talet, daribland Livastorpet
 * (366 km2) och Lombergsfallet (177 km2), som bada namnger platser i alvdalen
 * och darfor lockar till fel val.
 *
 * Niemisel ar SMHI-agd, har bade latest-day och corrected-archive, och har med
 * 44 526 dygn den langsta arkivserien av samtliga kopplade stationer, alltsa
 * ca 122 ar. Det ar samma station som SMHI anvander som exempel pa en station
 * i grundnatet och som referenspunkt i sin redovisning av varfloden 2018.
 *
 * ---------------------------------------------------------------------------
 * TILLAGG AUGUSTI 2026: LAINIOALVEN
 * ---------------------------------------------------------------------------
 *
 * Lainioalven ar Torneälvens storsta biflode och producerar ca 60 procent av
 * systemets vildlax. Alven ar helt oreglerad och skyddad som nationalälv.
 *
 * Lannavaara (id 5) ar den enda aktiva stationen i systemet och ar dessutom
 * SMHIs langst lopande station med oforändrad troskel, med matningar fran 1923.
 * Den tacker 3 856 km2, vilket motsvarar ca 65 procent av Lainioalvens
 * avrinningsomrade. Stationen ligger i Lannavaara by, ca 50 km uppstroms
 * Kangos, i det mest frekventerade laxfiskeomradet.
 *
 * Kaitumälven: enda kandidaten var Lappeasuvanto (id 813, 5 647 km2) men den
 * stangdes 2001. Ingen aktiv station finns i Kaitumälvens system. Ingen post
 * laggs in for kaitumalven.
 */

export interface HydroStation {
  /** SMHI hydroobs station-id */
  id: number;
  /**
   * Parameter. 1 = Vattenforing (Dygn), 2 = Vattenforing (15 min).
   * Emsfors saknar latest-day pa parameter 1 men har det pa parameter 2.
   */
  param: 1 | 2;
  /** Stationens namn, visas for lasaren sa att kallan ar tydlig */
  name: string;
  /** Avrinningsomrade i km2 */
  catchmentKm2: number;
  /** Ungefarligt avstand fran destinationens koordinat, km */
  distanceKm: number;
  /**
   * Ar vattendraget reglerat?
   *
   * I en oreglerad alv speglar flodet naturlig avrinning och sager nagot om
   * snosmaltning, regn och torka. I en reglerad alv styrs korttidsflodet av
   * kraftverkens tappning.
   */
  regulated: boolean;
  /** Forbehall som visas nar stationen ligger langt bort */
  note?: string;
}

export const HYDRO_STATIONS: Record<string, HydroStation> = {
  // --- Nationalalvar, oreglerade --------------------------------------------
  tornealven: {
    id: 2395, param: 1, name: 'Kallio', catchmentKm2: 14477, distanceKm: 9,
    regulated: false,
  },
  kalixalven: {
    id: 17, param: 1, name: 'Räktfors', catchmentKm2: 23103, distanceKm: 54,
    regulated: false,
    note: 'Mäts vid Räktfors, längre ned i älven.',
  },
  pitealven: {
    // Sikfors KRV har bara arkivdata. Gransel tacker 6 931 km2, alltsa mer an
    // halva systemet, och kan darfor inte sitta i ett biflode.
    id: 1387, param: 1, name: 'Gransel', catchmentKm2: 6931, distanceKm: 63,
    regulated: false,
    note: 'Mäts vid Gransel, 63 km uppströms.',
  },
  vindelalven: {
    id: 2238, param: 1, name: 'Sorsele', catchmentKm2: 6054, distanceKm: 2,
    regulated: false,
  },

  // --- Ovriga oreglerade ----------------------------------------------------
  byskealven: {
    id: 2284, param: 1, name: 'Byske', catchmentKm2: 3620, distanceKm: 1,
    regulated: false,
  },
  lainioalven: {
    // Lannavaara ar den enda aktiva stationen i systemet och SMHIs langst
    // lopande station med oforandrad troskel (matningar fran 1923). Tacker
    // 3 856 km2, ca 65 procent av avrinningsomradet. Stationen ligger i det
    // mest frekventerade laxfiskeomradet, 50 km uppstroms Kangos.
    // Alven ar oreglerad nationalälv -- flodet speglar ren avrinning.
    id: 5, param: 1, name: 'Lannavaara', catchmentKm2: 3856, distanceKm: 50,
    regulated: false,
    note: 'Mäts vid Lannavaara, ca 50 km uppströms Kangos.',
  },
  giman: {
    // Verifierad mot VISS: stationen GIMDALSBY har atgardsomrade Giman.
    // Giman ar Ljungans storsta biflode och en av de sista outbyggda
    // skogsalvarna, skyddad enligt miljobalken.
    id: 97, param: 1, name: 'Gimdalsby', catchmentKm2: 2164, distanceKm: 3,
    regulated: false,
  },
  orealven: {
    id: 2506, param: 1, name: 'Torrböle', catchmentKm2: 2859, distanceKm: 18,
    regulated: false,
  },
  ranealven: {
    // Ytterholmen ar aktiv och ligger nara, men tacker 1 012 km2 av 4 207 och
    // sitter alltsa i biflode. Niemisel tacker 90 procent av systemet.
    // Alven ar helt oreglerad och skyddad enligt 4 kap. 6 § miljobalken, sa
    // flodet speglar ren avrinning utan tappningsschema.
    id: 20, param: 1, name: 'Niemisel', catchmentKm2: 3779, distanceKm: 14,
    regulated: false,
    note: 'Mäts vid Niemisel, nedströms Gunnarsbyn.',
  },

  // --- Reglerade ------------------------------------------------------------
  umealven: {
    // Stornorrfors KRV har bara arkivdata. Granaker tacker 11 846 km2 av
    // Umealvens system och ar darmed huvudfara.
    id: 2237, param: 1, name: 'Granåker', catchmentKm2: 11846, distanceKm: 44,
    regulated: true,
    note: 'Mäts vid Granåker, 44 km uppströms.',
  },
  tidan: {
    // MSB:s oversvamningskartering av Tidan namnger Moholm som berakningspunkt.
    id: 1221, param: 1, name: 'Moholm', catchmentKm2: 1135, distanceKm: 17,
    regulated: true,
  },
  eman: {
    // Emsfors saknar latest-day pa parameter 1, men har det pa parameter 2.
    id: 20002, param: 2, name: 'Emsfors', catchmentKm2: 4441, distanceKm: 10,
    regulated: true,
  },
  morrum: {
    id: 186, param: 1, name: 'Mörrum', catchmentKm2: 3361, distanceKm: 2,
    regulated: true,
  },
  'helge-a': {
    // Narmaste station var Kopinge pa 2 km2, alltsa ett dike.
    id: 2525, param: 1, name: 'Torsebro', catchmentKm2: 3668, distanceKm: 16,
    regulated: true,
  },
  'ronne-a': {
    // Forsmollan ar KRV men levererar latest-day, till skillnad fran de flesta
    // kraftbolagsstationer. Enda stationen i huvudfaran: ovriga fem aktiva i
    // systemet ligger i biflode (Arrarp, Klippan 2, Heakra) eller vid
    // Ringsjons utlopp. 953 km2 av aons dryga 1 900 kan inte vara ett biflode.
    id: 2372, param: 1, name: 'Forsmöllan', catchmentKm2: 953, distanceKm: 12,
    regulated: true,
    note: 'Flödet påverkas av regleringen vid Ringsjöns utlopp.',
  },
  voxnan: {
    // Voxnan redovisas under catchmentName LJUSNAN, alltsa samma biflodesfalla
    // som Giman under Ljungan. En sokning pa vattendragets eget namn ger noll
    // traffar. Storsta stationen i Voxnans dalgang ar Alfta KRV (3 130 km2)
    // men den saknar aktuell data. Nybro tacker 2 251 km2, alltsa 62 procent
    // av Voxnans system, och kan darfor inte sitta i ett biflode.
    id: 740, param: 1, name: 'Nybro', catchmentKm2: 2251, distanceKm: 2,
    regulated: true,
  },
  kavlingean: {
    // Kavlingean byter namn till Lodde a just vid Hogsmolla (Kavlinge kommuns
    // oversiktsplan). VISS anger vattenforekomsten "Kavlingean: Havet-Braan",
    // alltsa nedre huvudfaran. Fiskevardsomradets egen fiskevardsplan anvander
    // Hogsmolla som referenspunkt.
    id: 2171, param: 1, name: 'Högsmölla', catchmentKm2: 1185, distanceKm: 3,
    regulated: true,
    note: 'Flödet regleras vid Vombsjöns utlopp.',
  },
};

export function getHydroStation(slug: string): HydroStation | null {
  return HYDRO_STATIONS[slug] ?? null;
}
