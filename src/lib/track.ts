type PageType = 'home' | 'destination' | 'article' | 'gear-review' | 'gear-category' | 'quiz' | 'species' | 'unknown';

interface AffiliateClickEvent {
  event: 'affiliate_click';
  merchant: string;
  product_id: string;
  position: number;
  page_type: PageType;
}

interface NewsletterSignupEvent {
  event: 'newsletter_signup';
  placement: 'footer' | 'inline' | 'modal';
}

interface QuizStartEvent {
  event: 'quiz_start';
}

interface QuizCompletedEvent {
  event: 'quiz_completed';
  result_product_ids: string[];
}

type TrackEvent = AffiliateClickEvent | NewsletterSignupEvent | QuizStartEvent | QuizCompletedEvent;

declare global {
  interface Window {
    dataLayer: TrackEvent[];
  }
}

export function track(event: TrackEvent): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(event);
}

export function trackAffiliateClick(merchant: string, product_id: string, position: number, page_type: PageType): void {
  track({ event: 'affiliate_click', merchant, product_id, position, page_type });
}

export function trackNewsletterSignup(placement: 'footer' | 'inline' | 'modal'): void {
  track({ event: 'newsletter_signup', placement });
}

export function trackQuizStart(): void {
  track({ event: 'quiz_start' });
}

export function trackQuizCompleted(result_product_ids: string[]): void {
  track({ event: 'quiz_completed', result_product_ids });
}
