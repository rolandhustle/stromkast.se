/**
 * Booking.com-lankar.
 *
 * BOOKING_AID ar partner-id:t som identifierar Stromkast i Bookings
 * sparning. Det ar tomt tills det ar bekraftat i partnerverktyget. Sa lange
 * det ar tomt renderas ingen soklank, eftersom en osparad lank ger arbete
 * utan intakt och samtidigt ser ut som en affiliatelank for lasaren.
 *
 * Gar godkannandet via CJ i stallet for direkt mot Booking ser lanken
 * annorlunda ut, med en redirectdoman. Da byts hela byggfunktionen har, inte
 * varje enskild lank i innehallsfilerna.
 */
export const BOOKING_AID = '';

/** Vardnamn som raknas som Booking-lankar i valideringen. */
export const BOOKING_HOSTS = ['booking.com', 'www.booking.com'];

/**
 * Soklank till Booking for en ort.
 *
 * Returnerar null nar partner-id saknas, sa att anropande komponent kan
 * utelamna knappen i stallet for att rendera en trasig lank.
 */
export function bookingSearchUrl(ort: string): string | null {
  if (!BOOKING_AID) return null;
  const params = new URLSearchParams({
    ss: ort,
    aid: BOOKING_AID,
  });
  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}

/** Sant nar lanken pekar pa Booking och alltsa ska markas som reklam. */
export function isBookingUrl(url: string): boolean {
  try {
    return BOOKING_HOSTS.includes(new URL(url).hostname);
  } catch {
    return false;
  }
}
