/**
 * Booking.com via CJ Affiliate.
 *
 * Programmet ar Booking.com Nordics (annonsor 5095558) och nas via CJ, inte
 * direkt. Lankarna gar darfor genom CJ:s klickdoman och inte till
 * booking.com.
 *
 * I innehallsfilerna lagras alltid den rena Booking-adressen, till exempel
 * https://www.booking.com/hotel/se/kultsjogarden-saxnas-marsfjall-10.sv.html
 *
 * CJ-inpackningen sker har vid rendering. Tre skal:
 *  - sid satts automatiskt till destinationens slug, i stallet for att
 *    skrivas for hand i varje fil
 *  - byter vi kreativ eller publisher-id andras det pa ett stalle
 *  - frontmatter forblir lasbar: man ser vilket hotell posten pekar pa
 *
 * Verifierat 2026-09-26: sid kommer tillbaka som clkid i Bookings
 * label-parameter efter omdirigeringen, tillsammans med cjevent.
 */

/** Strömkast.se i CJ. */
export const CJ_PUBLISHER_ID = '101869268';

/**
 * Evergreen Link for Booking.com Nordics.
 *
 * Vald med flit framfor kampanjkreativerna, som har slutdatum. En kreativ
 * som loper ut skulle ta med sig lankarna pa samtliga destinationssidor
 * utan att nagot gar sonder i bygget.
 */
export const CJ_LINK_ID = '15734870';

/** Klickdomanen for just den har kreativen. CJ roterar mellan flera. */
const CJ_CLICK_HOST = 'https://www.jdoqocy.com';

/** Vardnamn som raknas som Booking-adresser i innehallsfilerna. */
export const BOOKING_HOSTS = ['booking.com', 'www.booking.com'];

/** Sant nar adressen pekar pa Booking. */
export function isBookingUrl(url: string): boolean {
  try {
    return BOOKING_HOSTS.includes(new URL(url).hostname);
  } catch {
    return false;
  }
}

/**
 * Packar en Booking-adress i en sparad CJ-lank.
 *
 * sid blir clkid i Bookings label och visar vilken destinationssida klicket
 * kom fran. Returnerar null for adresser som inte gar till Booking, sa att
 * en felaktig lank utelamnas i stallet for att renderas omarkt.
 */
export function bookingLink(target: string, sid?: string): string | null {
  if (!isBookingUrl(target)) return null;

  const params = new URLSearchParams({ url: target });
  if (sid) params.set('sid', sid);

  return `${CJ_CLICK_HOST}/click-${CJ_PUBLISHER_ID}-${CJ_LINK_ID}?${params.toString()}`;
}

/**
 * Soklank till Booking for en ort, packad i samma CJ-lank.
 *
 * Svensk sokresultatsida med flit. Programmet tacker Norden och lasarna ar
 * svenska.
 */
export function bookingSearchUrl(ort: string, sid?: string): string | null {
  const sok = new URLSearchParams({ ss: ort });
  return bookingLink(`https://www.booking.com/searchresults.sv.html?${sok.toString()}`, sid);
}
