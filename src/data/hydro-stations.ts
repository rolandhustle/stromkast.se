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
 * VARFOR BARA 13 AV 23 ALVAR
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
 * plus Giman och Byskealven, alltsa just de OREGLERADE vattnen dar flodet
 * speglar naturlig avrinning och faktiskt betyder nagot for fisket. Det vi
 * tappar ar i huvudsak reglerade kraftverksalvar, dar korttidsflodet anda
 * styrs av turbinschemat snarare an av vader.
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
