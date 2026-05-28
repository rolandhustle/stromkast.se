# Strömkast.se — samlad projektkontext för Claude

Genererad automatiskt av generate-claude-context.sh.
Ersätter inte CLAUDE.md — är ett komplement med faktiskt filinnehåll.
Ladda upp den här filen till Claude-projektet och ersätt tidigare version.

---

## Filträd (src/)
```
src/
src/.DS_Store
src/assets
src/assets/images
src/components
src/components/.DS_Store
src/components/{quiz}
src/components/AffiliateCard.astro
src/components/ConsentBanner.astro
src/components/DestinationMap.tsx
src/components/FiskeKarta.tsx
src/components/Footer.astro
src/components/Header.astro
src/components/KalenderWidget.tsx
src/components/NewsletterForm.astro
src/components/quiz
src/components/quiz/SpoQuiz.tsx
src/components/SEO.astro
src/content
src/content.config.ts
src/content/.DS_Store
src/content/articles
src/content/articles/.DS_Store
src/content/articles/basta-fiskespon-2026.mdx
src/content/articles/nappkalender-guide.mdx
src/content/authors
src/content/authors/rikard-giby.json
src/content/destinations
src/content/destinations/.DS_Store
src/content/destinations/bolmen.mdx
src/content/destinations/eman.mdx
src/content/destinations/malaren.mdx
src/content/destinations/morrum.mdx
src/content/destinations/stockholms-skargard.mdx
src/content/destinations/storsjon.mdx
src/content/destinations/tornealven.mdx
src/content/destinations/vanern.mdx
src/content/destinations/vattern.mdx
src/content/gear-categories
src/content/gear-categories/haspelrullar.json
src/content/gear-categories/spon.json
src/content/gear-reviews
src/content/gear-reviews/bft-lizzard-x-stefan-trumstedt.mdx
src/content/gear-reviews/bft-ninety-two-mimic-stick.mdx
src/content/gear-reviews/bft-raptor-g2-jerkbait.mdx
src/content/gear-reviews/kinetic-brutalis-5000-fd.mdx
src/content/gear-reviews/kinetic-marshall-4000-fd.mdx
src/content/gear-reviews/kinetic-xarann-predator-trigger-ct.mdx
src/content/gear-reviews/mikado-inazuma-pro-zander.mdx
src/content/gear-reviews/okuma-ceymar-hd-2500a.mdx
src/content/gear-reviews/okuma-inspira-2500a.mdx
src/content/gear-reviews/okuma-itx-cb-2500h.mdx
src/content/gear-reviews/shimano-26-zodias-haspelspo.mdx
src/content/gear-reviews/shimano-expride-haspelspo-198m.mdx
src/content/gear-reviews/shimano-miravel-2500.mdx
src/content/gear-reviews/shimano-nexave-fi-2500.mdx
src/content/gear-reviews/shimano-nexave-haspelspo-191m.mdx
src/content/gear-reviews/shimano-stella-fk-2500.mdx
src/content/gear-reviews/shimano-stradic-fm-c3000-hg.mdx
src/content/gear-reviews/shimano-vanford-fa-2500.mdx
src/content/gear-reviews/shimano-vanford-fa-4000.mdx
src/content/gear-reviews/shimano-yasei-bb-pike-xh.mdx
src/content/gear-reviews/westin-w2-powercast-t-spinnspo.mdx
src/content/gear-reviews/westin-w3-4000-fd.mdx
src/content/gear-reviews/westin-w3-finesse-jig-3rd.mdx
src/content/gear-reviews/westin-w3-finesse-tc-2nd.mdx
src/content/gear-reviews/westin-w3-hybridcast-t-3rd.mdx
src/content/gear-reviews/westin-w3-powerteez-3rd.mdx
src/content/gear-reviews/westin-w6-dropshot-haspelspo.mdx
src/content/gear-reviews/westin-w6-jerk-swimbait-t-2nd.mdx
src/content/gear-reviews/westin-w6-powercast-t-spinnspo.mdx
src/content/gear-reviews/westin-w6-powerteez-haspelspo.mdx
src/content/species
src/content/species/.DS_Store
src/content/species/abborre.mdx
src/content/species/asp.mdx
src/content/species/gadda.mdx
src/content/species/gos.mdx
src/content/species/harr.mdx
src/content/species/havsoring.mdx
src/content/species/lax.mdx
src/content/species/oring.mdx
src/content/species/roding.mdx
src/content/techniques
src/content/techniques/.DS_Store
src/content/techniques/dropshot.mdx
src/content/techniques/flugfiske.mdx
src/content/techniques/isfiske.mdx
src/content/techniques/jiggfiske.mdx
src/content/techniques/mete.mdx
src/content/techniques/spinnfiske.mdx
src/content/techniques/trolling.mdx
src/content/techniques/vertikalfiske.mdx
src/data
src/data/calendar.ts
src/data/seasons.json
src/data/smhi-stations.json
src/layouts
src/layouts/BaseLayout.astro
src/lib
src/lib/.DS_Store
src/lib/forecast.ts
src/lib/smhi.ts
src/lib/track.ts
src/pages
src/pages/.DS_Store
src/pages/404.astro
src/pages/arter
src/pages/arter/.DS_Store
src/pages/arter/[slug].astro
src/pages/arter/index.astro
src/pages/cookiepolicy.astro
src/pages/destinationer
src/pages/destinationer/[slug].astro
src/pages/destinationer/index.astro
src/pages/forhallanden
src/pages/forhallanden/index.astro
src/pages/guider
src/pages/guider/.DS_Store
src/pages/guider/[slug].astro
src/pages/guider/index.astro
src/pages/index.astro
src/pages/nappkalender
src/pages/nappkalender/.DS_Store
src/pages/nappkalender/[art]
src/pages/nappkalender/[art].astro
src/pages/nappkalender/[art]/[manad].astro
src/pages/nappkalender/index.astro
src/pages/nyhetsbrev
src/pages/nyhetsbrev/index.astro
src/pages/om
src/pages/om/index.astro
src/pages/rss.xml.ts
src/pages/sok
src/pages/sok/index.astro
src/pages/spovaljaren
src/pages/spovaljaren.astro
src/pages/teknik
src/pages/teknik/[slug].astro
src/pages/teknik/index.astro
src/pages/utrustning
src/pages/utrustning/.DS_Store
src/pages/utrustning/[kategori].astro
src/pages/utrustning/{test}
src/pages/utrustning/index.astro
src/pages/utrustning/test
src/pages/utrustning/test/[slug].astro
src/styles
src/styles/global.css
src/styles/tokens.css
```

# Konfiguration

## src/content.config.ts
```
import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const destinations = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/destinations' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    heroImage: z.string(),
    lat: z.number(),
    lng: z.number(),
    län: z.string(),
    primarySpecies: z.array(z.string()),
    waterType: z.enum(['lake', 'river', 'coastal', 'stream']),
    iFiskeUrl: z.string().url(),
    recommendedGear: z.array(z.string()),
    publishedAt: z.string(),
    updatedAt: z.string(),
    excerpt: z.string().optional(),  // Korttext för indexsidan (40–80 tecken)
  }),
});

const species = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/species' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    heroImage: z.string(),
    season: z.string().optional().default(''),
    techniques: z.array(z.string()).optional().default([]),
    targetTechniques: z.array(z.string()).optional().default([]),
    gearRecs: z.array(z.string()).optional().default([]),
    topDestinations: z.array(z.string()).optional().default([]),
    excerpt: z.string().optional(),  // Korttext för indexsidan (40–80 tecken)
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional().default([]),
    publishedAt: z.string().optional(),
    updatedAt: z.string().optional(),
  }),
});

const techniques = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/techniques' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    heroImage: z.string(),
    targetSpecies: z.array(z.string()),
    difficulty: z.enum(['nybörjare', 'mellannivå', 'avancerad']),
    topDestinations: z.array(z.string()).optional().default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional().default([]),
  }),
});

const gearCategories = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/gear-categories' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    heroImage: z.string(),
    guideUrl: z.string().optional(),  // URL till redaktionell guide för kategorin, t.ex. "/artiklar/basta-fiskespon-2026/"
    excerpt: z.string().optional(),   // Korttext för indexsidan (40–80 tecken)
  }),
});

const gearReviews = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/gear-reviews' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    heroImage: z.string(),
    brand: z.string(),
    category: z.string(),
    price: z.number(),
    rating: z.number().min(0).max(5),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    affiliateUrl: z.string(),
    merchant: z.string(),
    featured: z.boolean().default(false),
    budgetPick: z.boolean().default(false),
    targetSpecies: z.array(z.enum(['abborre', 'gadda', 'gos', 'oring', 'lax', 'harr', 'havsoring'])).default([]),
    techniques: z.array(z.enum(['jigg', 'dropshot', 'spinn', 'wobbler', 'jerkbait', 'flugfiske', 'mete', 'trolling', 'isfiske'])).default([]),
    priceRange: z.enum(['budget', 'mellanklass', 'premium']),
    quizEnabled: z.boolean().default(false),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    heroImage: z.string(),
    publishedAt: z.string(),
    updatedAt: z.string(),
    author: z.string(),
    category: z.enum(['destination', 'teknik', 'utrustning', 'guide']),
    excerpt: z.string().optional(),  // Korttext för indexsidan (40–80 tecken)
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional().default([]),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    bio: z.string(),
    photo: z.string(),
    expertise: z.array(z.string()),
    social: z.object({
      instagram: z.string().optional(),
      twitter: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  destinations,
  species,
  techniques,
  'gear-categories': gearCategories,
  'gear-reviews': gearReviews,
  articles,
  authors,
};
```

## astro.config.mjs
```
// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import rss from '@astrojs/rss';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://stromkast.se',
  trailingSlash: 'always',
  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    sitemap({
      customPages: [],
      serialize(item) {
        if (item.url.includes('/destinationer/')) item.priority = 0.8;
        else if (item.url.includes('/utrustning/test/')) item.priority = 0.7;
        else if (item.url.includes('/guider/')) item.priority = 0.6;
        return item;
      },
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

## tsconfig.json
```
{
  "extends": "astro/tsconfigs/strict",
  "include": [
    ".astro/types.d.ts",
    "**/*"
  ],
  "exclude": [
    "dist"
  ],
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  }
}```

## package.json
```
{
  "name": "stromkast",
  "type": "module",
  "version": "0.0.1",
  "engines": {
    "node": ">=22.12.0"
  },
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/check": "^0.9.9",
    "@astrojs/mdx": "^5.0.4",
    "@astrojs/react": "^5.0.4",
    "@astrojs/rss": "^4.0.18",
    "@astrojs/sitemap": "^3.7.2",
    "@astrojs/vercel": "^10.0.6",
    "@fontsource-variable/fraunces": "^5.2.9",
    "@fontsource-variable/inter": "^5.2.8",
    "@fontsource/bitter": "^5.2.10",
    "@tailwindcss/typography": "^0.5.19",
    "@tailwindcss/vite": "^4.2.4",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "astro": "^6.2.2",
    "leaflet": "^1.9.4",
    "marked": "^18.0.3",
    "react": "^19.2.5",
    "react-dom": "^19.2.5",
    "react-leaflet": "^5.0.0",
    "sharp": "^0.34.5",
    "tailwindcss": "^4.2.4",
    "typescript": "^6.0.3",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@types/leaflet": "^1.9.21"
  }
}
```

# Stilar

## src/styles/tokens.css
```
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme {
  --color-deep:   #0E1B22;
  --color-pine:   #1F3A2E;
  --color-stone:  #6B7470;
  --color-mist:   #E8E4DC;
  --color-paper:  #F7F4EE;
  --color-rust:   #B45D3C;
  --color-copper: #D08A5C;
  --color-sky:    #6E8FA0;

  --font-display: "Bitter", Georgia, serif;
  --font-body:    "Inter Variable", system-ui, sans-serif;

  --spacing-base: 8px;
  --max-w-prose:  72ch;
  --max-w-layout: 1280px;
}

:root {
  --color-deep:   #0E1B22;
  --color-pine:   #1F3A2E;
  --color-stone:  #6B7470;
  --color-mist:   #E8E4DC;
  --color-paper:  #F7F4EE;
  --color-rust:   #B45D3C;
  --color-copper: #D08A5C;
  --color-sky:    #6E8FA0;
}

@font-face {
  font-family: "Bitter";
  src: url("/fonts/bitter-700.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter Variable";
  src: url("/fonts/inter-variable.woff2") format("woff2-variations");
  font-weight: 100 900;
  font-display: swap;
}

html {
  font-family: "Inter Variable", system-ui, sans-serif;
  background-color: var(--color-paper);
  color: var(--color-deep);
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

:focus-visible {
  outline: 2px solid var(--color-rust);
  outline-offset: 3px;
}
```

## src/styles/global.css
```
@plugin "@tailwindcss/typography";```

# Layouts

## src/layouts/BaseLayout.astro
```
---
import SEO from '../components/SEO.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import ConsentBanner from '../components/ConsentBanner.astro';
import '../styles/tokens.css';

interface Props {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
  schema?: object | object[];
  heroOverlay?: boolean;
  pageType?: string;
  transparentHeader?: boolean;
}

const { title, description, ogImage, canonical, noindex, schema, heroOverlay = false, pageType = 'unknown', transparentHeader = false } = Astro.props;
---

<!doctype html>
<html lang="sv" class="scroll-smooth">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />

    <!-- Preload fonts -->
    <link rel="preload" href="/fonts/bitter-700.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
    <link rel="preload" href="/fonts/inter-variable.woff2" as="font" type="font/woff2" crossorigin="anonymous" />

    <SEO
      title={title}
      description={description}
      ogImage={ogImage}
      canonical={canonical}
      noindex={noindex}
      schema={schema}
    />
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-BP2R8TQWQP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-BP2R8TQWQP');
</script>
  </head>
  <body class="bg-paper text-deep antialiased" data-page-type={pageType}>
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-rust text-white px-4 py-2 rounded-full text-sm font-medium">
      Hoppa till innehåll
    </a>

    <Header transparent={transparentHeader} />

    <main id="main-content" tabindex="-1">
      <slot />
    </main>

    <Footer />
    <ConsentBanner />
  </body>
</html>
```

# Komponenter

## src/components/AffiliateCard.astro
```
---
interface Props {
  title: string;
  brand: string;
  price: number;
  rating: number;
  description: string;
  image: string;
  affiliateUrl: string;
  merchant: string;
  slug?: string;
  featured?: boolean;
  budgetPick?: boolean;
}

const { title, brand, price, rating, description, image, affiliateUrl, merchant, slug, featured = false, budgetPick = false } = Astro.props;
const reviewHref = slug ? `/utrustning/test/${slug}/` : null;

const stars = Math.round(rating);
const priceFormatted = new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK', maximumFractionDigits: 0 }).format(price);
---

<article class={`relative bg-white rounded-2xl overflow-hidden border ${featured ? 'border-rust shadow-lg shadow-rust/10' : 'border-mist'} transition-shadow hover:shadow-md`}>
  {featured && (
    <div class="absolute top-3 left-3 z-10 bg-rust text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
      Bästa val
    </div>
  )}
  {budgetPick && !featured && (
    <div class="absolute top-3 left-3 z-10 bg-copper text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
      Bästa budget
    </div>
  )}

  <div class="aspect-[4/3] bg-mist overflow-hidden">
    <img
      src={image}
      alt={title}
      loading="lazy"
      decoding="async"
      class="w-full h-full object-cover"
      onerror="this.src='/images/placeholder-gear.jpg'"
    />
  </div>

  <div class="p-4">
    <p class="text-xs text-stone uppercase tracking-wider mb-1">{brand}</p>
    {reviewHref ? (
      <h3 class="font-display font-semibold text-deep text-lg leading-snug mb-2">
        <a href={reviewHref} class="hover:text-pine transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine rounded">{title}</a>
      </h3>
    ) : (
      <h3 class="font-display font-semibold text-deep text-lg leading-snug mb-2">{title}</h3>
    )}

    <div class="flex items-center gap-1 mb-3" role="img" aria-label={`Betyg ${rating} av 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg width="14" height="14" viewBox="0 0 14 14" fill={i < stars ? '#B45D3C' : '#E8E4DC'} aria-hidden="true">
          <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5L7 1z"/>
        </svg>
      ))}
      <span class="text-xs text-stone ml-1">{rating}</span>
    </div>

    <p class="text-sm text-stone leading-relaxed mb-4">{description}</p>

    <div class="flex items-center justify-between">
      <div>
        <p class="text-xl font-bold text-deep">{priceFormatted}</p>
        <p class="text-xs text-stone">{merchant}</p>
      </div>
      <a
        href={affiliateUrl || '#'}
        target="_blank"
        rel="noopener noreferrer sponsored"
        class="inline-flex items-center gap-1.5 bg-pine text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
        data-affiliate-merchant={merchant}
        data-affiliate-product={title}
      >
        Se pris
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>

    <p class="text-xs text-stone/60 mt-3">*Affiliatelänk. Vi tjänar en provision utan kostnad för dig.</p>
  </div>
</article>

<script>
  document.querySelectorAll('[data-affiliate-merchant]').forEach(el => {
    el.addEventListener('click', () => {
      if (typeof window !== 'undefined' && (window as { dataLayer?: unknown[] }).dataLayer) {
        (window as { dataLayer: unknown[] }).dataLayer.push({
          event: 'affiliate_click',
          merchant: (el as HTMLElement).dataset.affiliateMerchant,
          product_id: (el as HTMLElement).dataset.affiliateProduct,
          position: 0,
          page_type: document.body.dataset.pageType ?? 'unknown',
        });
      }
    });
  });
</script>
```

## src/components/ConsentBanner.astro
```
---
const gtmId = import.meta.env.PUBLIC_GTM_ID;
---

<div
  id="consent-banner"
  class="fixed bottom-0 left-0 right-0 z-50 bg-deep text-white border-t border-white/10 p-4 sm:p-5"
  role="dialog"
  aria-label="Cookie-samtycke"
  aria-live="polite"
>
  <div class="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
    <p class="text-sm text-white/80 flex-1 leading-relaxed">
      Vi använder cookies för analys och affiliate-spårning. Inga personuppgifter säljs.
      <a href="/cookiepolicy/" class="underline hover:text-white ml-1">Cookiepolicy</a>.
    </p>
    <div class="flex gap-3 shrink-0">
      <button
        id="consent-decline"
        class="text-sm text-white/60 hover:text-white transition-colors px-4 py-2"
      >
        Neka
      </button>
      <button
        id="consent-accept"
        class="bg-rust text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-copper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Godkänn
      </button>
    </div>
  </div>
</div>

<script define:vars={{ gtmId }}>
  const CONSENT_KEY = 'sk_consent';
  const banner = document.getElementById('consent-banner');

  function loadGTM() {
    if (!gtmId) return;
    if (document.querySelector(`script[src*="${gtmId}"]`)) return;
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  }

  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored === 'accepted') {
    banner?.remove();
    loadGTM();
  } else if (stored === 'declined') {
    banner?.remove();
  }

  document.getElementById('consent-accept')?.addEventListener('click', () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    banner?.remove();
    loadGTM();
  });

  document.getElementById('consent-decline')?.addEventListener('click', () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    banner?.remove();
  });
</script>
```

## src/components/Footer.astro
```
---
import { getCollection } from 'astro:content';

const currentYear = new Date().getFullYear();

const allCategories = await getCollection('gear-categories');
const topCategories = allCategories
  .sort((a, b) => a.data.title.localeCompare(b.data.title, 'sv'))
  .slice(0, 3);

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Strömkast',
  url: 'https://stromkast.se',
  description: 'Sveriges modernaste fiskeguide. Destinationsguider, utrustningsrecensioner och levande förhållanden.',
};
---

<footer class="bg-deep text-white/80 mt-24">
  <div class="max-w-[1280px] mx-auto px-4 sm:px-6 py-16">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
      <div class="col-span-2 md:col-span-1">
        <a href="/" class="inline-flex items-center gap-2 text-white font-display font-bold text-lg mb-3">
          <img src="/stromkast-logotype.svg" alt="" aria-hidden="true" style="height:1em;width:auto;" />
          Strömkast
        </a>
        <p class="text-sm text-white/60 leading-relaxed max-w-xs">
          Sveriges modernaste guide till sportfiske. Utformad av fiskare, för fiskare.
        </p>
      </div>

      <div>
        <h3 class="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Destinationer</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="/destinationer/vanern/" class="hover:text-white transition-colors">Vänern</a></li>
          <li><a href="/destinationer/vattern/" class="hover:text-white transition-colors">Vättern</a></li>
          <li><a href="/destinationer/malaren/" class="hover:text-white transition-colors">Mälaren</a></li>
          <li><a href="/destinationer/morrum/" class="hover:text-white transition-colors">Mörrum</a></li>
          <li><a href="/destinationer/" class="hover:text-white transition-colors text-sky">Alla destinationer</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Utrustning</h3>
        <ul class="space-y-2 text-sm">
          {topCategories.map((cat) => (
            <li><a href={`/utrustning/${cat.data.slug}/`} class="hover:text-white transition-colors">{cat.data.title}</a></li>
          ))}
          <li><a href="/spovaljaren/" class="hover:text-white transition-colors text-copper">Ta spövaljarquiz</a></li>
          <li><a href="/utrustning/" class="hover:text-white transition-colors text-sky">Allt i utrustning</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Om Strömkast</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="/om/" class="hover:text-white transition-colors">Om oss</a></li>
          <li><a href="/guider/" class="hover:text-white transition-colors">Guider</a></li>
          <li><a href="/rss.xml" class="hover:text-white transition-colors">RSS</a></li>
          <li><a href="/cookiepolicy/" class="hover:text-white transition-colors">Cookiepolicy</a></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <p class="text-xs text-white/40">
        &copy; {currentYear} Strömkast. Alla rättigheter förbehållna.
      </p>
      <p class="text-xs text-white/40 max-w-md">
        <strong class="text-white/60">Affiliateinfo:</strong> Strömkast innehåller affiliatelänkar. Om du köper via våra länkar får vi en liten provision utan kostnad för dig. Det påverkar aldrig vår redaktionella bedömning.
      </p>
    </div>
  </div>

  <script type="application/ld+json" set:html={JSON.stringify(orgSchema)} />
</footer>
```

## src/components/Header.astro
```
---
interface Props {
  transparent?: boolean;
}

const { transparent = false } = Astro.props;

const navLinks = [
  { href: '/destinationer/', label: 'Destinationer' },
  { href: '/arter/', label: 'Arter' },
  { href: '/teknik/', label: 'Teknik' },
  { href: '/utrustning/', label: 'Utrustning' },
  { href: '/guider/', label: 'Guider' },
  { href: '/nappkalender/', label: 'Kalender' },
  { href: '/forhallanden/', label: 'Förhållanden' },
];

const pathname = Astro.url.pathname;
const initialBg = transparent ? 'transparent' : 'rgba(31, 58, 46, 0.97)';
---

<header
  id="site-header"
  class="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
  style={`background: ${initialBg};`}
  data-transparent={transparent ? 'true' : 'false'}
>
  <div class="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
    <a href="/" class="flex items-center gap-2 text-white font-display font-bold text-xl tracking-tight">
      <img src="/stromkast-logotype.svg" alt="" aria-hidden="true" style="height:1em;width:auto;" />
      Strömkast
    </a>

    <nav class="hidden md:flex items-center gap-6" aria-label="Huvudnavigering">
      {navLinks.map(({ href, label }) => (
        <a
          href={href}
          class={`text-sm font-medium transition-colors ${
            pathname.startsWith(href)
              ? 'text-white'
              : 'text-white/75 hover:text-white'
          }`}
        >
          {label}
        </a>
      ))}
    </nav>

    <div class="flex items-center gap-2">
      <a
        href="/sok/"
        class="text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Sök"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="5.5" stroke="currentColor" stroke-width="1.5"/>
          <path d="M13 13l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </a>
      <a
        href="/spovaljaren/"
        class="hidden sm:inline-flex items-center gap-1.5 bg-rust text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-copper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
      >
        Hitta rätt spö
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>

      <button
        id="mobile-menu-toggle"
        class="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
        aria-label="Öppna meny"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>

  <nav
    id="mobile-menu"
    class="md:hidden hidden bg-pine/95 backdrop-blur-sm border-t border-white/10"
    aria-label="Mobilnavigering"
  >
    <div class="max-w-[1280px] mx-auto px-4 py-4 flex flex-col gap-1">
      {navLinks.map(({ href, label }) => (
        <a
          href={href}
          class="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          {label}
        </a>
      ))}
      <a
        href="/sok/"
        class="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
      >
        <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="5.5" stroke="currentColor" stroke-width="1.5"/>
          <path d="M13 13l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        Sök
      </a>
      <a
        href="/spovaljaren/"
        class="mt-2 inline-flex items-center justify-center gap-1.5 bg-rust text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-copper transition-colors"
      >
        Hitta rätt spö
      </a>
    </div>
  </nav>
</header>

<script>
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');

  if (header?.dataset.transparent === 'true') {
    window.addEventListener('scroll', () => {
      if (!header) return;
      if (window.scrollY > 60) {
        header.style.background = 'rgba(31, 58, 46, 0.97)';
        header.style.backdropFilter = 'blur(12px)';
        header.style.boxShadow = '0 1px 0 rgba(255,255,255,0.08)';
      } else {
        header.style.background = 'transparent';
        header.style.backdropFilter = 'none';
        header.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  toggle?.addEventListener('click', () => {
    const open = menu?.classList.toggle('hidden') === false;
    toggle.setAttribute('aria-expanded', String(open));
    const svg = toggle.querySelector('svg path');
    if (svg) {
      svg.setAttribute('d', open
        ? 'M4 4l12 12M4 16L16 4'
        : 'M3 5h14M3 10h14M3 15h14');
    }
  });
</script>
```

## src/components/NewsletterForm.astro
```
---
interface Props {
  placement: 'footer' | 'inline' | 'modal';
  heading?: string;
  subheading?: string;
}

const {
  placement,
  heading = 'Få veckans bästa fiskespots i mailen',
  subheading = 'Gratis. Inga spammail. Avregistrera när du vill.',
} = Astro.props;
---

<div class={`newsletter-form-wrap ${placement === 'inline' ? 'bg-mist rounded-2xl p-8 my-12' : ''}`} data-placement={placement}>
  <h3 class={`font-display font-bold text-deep ${placement === 'inline' ? 'text-2xl' : 'text-xl'} mb-2`}>
    {heading}
  </h3>
  <p class="text-stone text-sm mb-5">{subheading}</p>

  <form
    class="flex flex-col sm:flex-row gap-3"
    data-newsletter-form
    novalidate
  >
    <label class="sr-only" for={`email-${placement}`}>Din e-postadress</label>
    <input
      type="email"
      id={`email-${placement}`}
      name="email"
      placeholder="din@email.se"
      required
      autocomplete="email"
      class="flex-1 bg-white border border-mist rounded-full px-5 py-3 text-sm text-deep placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-pine focus:border-transparent"
    />
    <button
      type="submit"
      class="bg-pine text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2 whitespace-nowrap"
    >
      Prenumerera
    </button>
  </form>

  <div class="success-msg hidden mt-4 text-sm text-pine font-medium" role="alert">
    Tack! Kolla din inbox för bekräftelse.
  </div>
</div>

<script>
  document.querySelectorAll('[data-newsletter-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const wrap = form.closest('[data-placement]') as HTMLElement;
      const placement = wrap?.dataset.placement ?? 'unknown';

      // GTM event
      if (typeof window !== 'undefined' && (window as { dataLayer?: unknown[] }).dataLayer) {
        (window as { dataLayer: unknown[] }).dataLayer.push({
          event: 'newsletter_signup',
          placement,
        });
      }

      // Show success
      const msg = wrap?.querySelector('.success-msg');
      if (msg) msg.classList.remove('hidden');
      (form as HTMLFormElement).reset();
    });
  });
</script>
```

## src/components/SEO.astro
```
---
interface Props {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
  schema?: object | object[];
}

const {
  title,
  description,
  ogImage = '/images/og-default.jpg',
  canonical,
  noindex = false,
  schema,
} = Astro.props;

const siteUrl = import.meta.env.PUBLIC_SITE_URL ?? 'https://stromkast.se';
const canonicalUrl = canonical ? `${siteUrl}${canonical}` : `${siteUrl}${Astro.url.pathname}`;
const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Strömkast',
  url: siteUrl,
  logo: `${siteUrl}/images/logo.svg`,
  sameAs: [],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Strömkast',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/sok/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const schemas = [orgSchema, websiteSchema, ...(schema ? (Array.isArray(schema) ? schema : [schema]) : [])];
---

<title>{title} | Strömkast</title>
<meta name="description" content={description} />
{noindex && <meta name="robots" content="noindex, nofollow" />}
<link rel="canonical" href={canonicalUrl} />

<meta property="og:type" content="website" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={ogImageUrl} />
<meta property="og:url" content={canonicalUrl} />
<meta property="og:site_name" content="Strömkast" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogImageUrl} />

{schemas.map((s) => (
  <script type="application/ld+json" set:html={JSON.stringify(s)} />
))}
```

## src/components/DestinationMap.tsx
```
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon broken in bundlers
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface Props {
  lat: number;
  lng: number;
  title: string;
}

export default function DestinationMap({ lat, lng, title }: Props) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={11}
      style={{ width: '100%', height: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>{title}</Popup>
      </Marker>
    </MapContainer>
  );
}
```

## src/components/FiskeKarta.tsx
```
/**
 * src/components/FiskeKarta.tsx
 *
 * Interaktiv fiskekarta för startsidan.
 * Sidopanel: scrollbar lista med alla destinationer, betningsindikator och artchips.
 * Detaljvy vid klick på nål eller destination i listan.
 */

import { useState, useEffect, useRef } from 'react';

function useIsMobile(breakpoint = 640): boolean {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}
import type { Map as LeafletMap, CircleMarker } from 'leaflet';

const SEASONS: Record<string, { peak: number[]; ok: number[] }> = {
  'gädda':        { peak: [3,4,9,10],    ok: [2,5,8,11] },
  'abborre':      { peak: [4,5,9,10],    ok: [3,6,8,11] },
  'gös':          { peak: [6,7,8],       ok: [5,9] },
  'öring':        { peak: [3,4,9,10],    ok: [2,5,8,11] },
  'havsöring':    { peak: [3,4,10,11],   ok: [2,5,9,12] },
  'lax':          { peak: [6,7,8,9],     ok: [5,10] },
  'harr':         { peak: [6,8,9],       ok: [5,7,10] },
  'röding':       { peak: [4,5,10,11],   ok: [3,6,9,12] },
  'kanadaröding': { peak: [4,5,10,11],   ok: [3,6,9,12] },
  'asp':          { peak: [5,6],         ok: [4,7] },
  'sik':          { peak: [10,11],       ok: [9,12] },
};

type SpeciesSeason = 'peak' | 'ok' | 'off';

function getSpeciesSeason(art: string, month: number): SpeciesSeason {
  const entry = SEASONS[art.toLowerCase()];
  if (!entry) return 'off';
  if (entry.peak.includes(month)) return 'peak';
  if (entry.ok.includes(month))   return 'ok';
  return 'off';
}

export interface DestinationPin {
  slug:        string;
  name:        string;
  region:      string;
  lat:         number;
  lng:         number;
  species:     string[];
  airTemp:     number | null;
  windSpeed:   number | null;
  windDir:     string;
  humidity:    number | null;
  stationName: string;
  biteLabel:   string;
  biteColor:   'green' | 'amber' | 'stone';
  biteScore:   number;
  error:       boolean;
  excerpt:     string;
  waterType:   string;
  iFiskeUrl:   string;
  heroImage:   string;
}

interface Props {
  destinations: DestinationPin[];
  moonEmoji:    string;
  moonName:     string;
}

const PIN_COLORS: Record<string, string> = {
  green: '#16a34a',
  amber: '#d97706',
  stone: '#9ca3af',
};

const BADGE_STYLE: Record<string, { bg: string; text: string }> = {
  green: { bg: '#dcfce7', text: '#166534' },
  amber: { bg: '#fef3c7', text: '#92400e' },
  stone: { bg: '#f3f4f6', text: '#6b7280' },
};

const SPECIES_CHIP: Record<SpeciesSeason, { bg: string; text: string; dot: string }> = {
  peak: { bg: '#dcfce7', text: '#166534', dot: '#16a34a' },
  ok:   { bg: '#fef9ec', text: '#92400e', dot: '#d97706' },
  off:  { bg: '#f3f4f6', text: '#9ca3af', dot: '#d1d5db' },
};

function fmt(val: number | null, unit = ''): string {
  return val !== null ? `${val.toFixed(1)}${unit}` : '–';
}

const MONTH = new Date().getMonth() + 1;

function SpeciesChips({ species }: { species: string[] }) {
  const sorted = [...species].sort((a, b) => {
    const order = { peak: 0, ok: 1, off: 2 };
    return order[getSpeciesSeason(a, MONTH)] - order[getSpeciesSeason(b, MONTH)];
  });

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '6px' }}>
      {sorted.map(art => {
        const season = getSpeciesSeason(art, MONTH);
        const style  = SPECIES_CHIP[season];
        return (
          <span key={art} style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '10px', fontWeight: 500, padding: '2px 6px', borderRadius: '10px', background: style.bg, color: style.text }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: style.dot, display: 'inline-block', flexShrink: 0 }}></span>
            {art.charAt(0).toUpperCase() + art.slice(1)}
          </span>
        );
      })}
    </div>
  );
}

function Panel({
  destinations, active, onSelect, onClear, moonEmoji, moonName, isMobile,
}: {
  destinations: DestinationPin[];
  active:        DestinationPin | null;
  onSelect:      (d: DestinationPin) => void;
  onClear:       () => void;
  moonEmoji:     string;
  moonName:      string;
  isMobile:      boolean;
}) {
  const sorted = [...destinations]
    .filter(d => !d.error)
    .sort((a, b) => b.biteScore - a.biteScore);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', height: isMobile ? 'auto' : '100%' }}>

      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', flex: 1 }}>

        {/* Rubrik */}
        <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {active ? (
            <>
              <span style={{ fontSize: '12px', fontWeight: 500, color: '#374151', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1C5.1 1 3.5 2.6 3.5 4.5c0 2.8 3.5 8.5 3.5 8.5s3.5-5.7 3.5-8.5C10.5 2.6 8.9 1 7 1Z" fill="#1F3A2E"/>
                  <circle cx="7" cy="4.5" r="1.5" fill="#fff"/>
                </svg>
                Destination
              </span>
              <button onClick={onClear} style={{ fontSize: '11px', color: '#185FA5', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px', padding: 0, fontFamily: 'inherit' }}>
                ← Alla vatten
              </button>
            </>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <span style={{ fontSize: '12px', fontWeight: 500, color: '#374151', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '14px' }}>🏆</span> Bäst just nu
              </span>
              <div style={{ display: 'flex', gap: '8px', fontSize: '10px', color: '#9ca3af' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16a34a', display: 'inline-block' }}></span>Toppläge</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#d97706', display: 'inline-block' }}></span>Värt att testa</span>
              </div>
            </div>
          )}
        </div>

        {/* Destinationslista */}
        {!active && (
          <div style={{ flex: 1, overflowY: 'auto', maxHeight: '580px' }}>
            {sorted.map((d, i) => {
              const bd = BADGE_STYLE[d.biteColor];
              return (
                <div key={d.slug} onClick={() => onSelect(d)}
                  style={{ padding: '0.7rem 1rem', cursor: 'pointer', borderBottom: i < sorted.length - 1 ? '1px solid #f5f5f5' : 'none', transition: 'background 0.1s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#f9fafb')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ fontSize: '11px', fontWeight: 500, color: '#d1d5db', width: '14px', flexShrink: 0, textAlign: 'center' }}>{i + 1}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>{d.name}</span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', fontWeight: 500, padding: '2px 7px', borderRadius: '12px', flexShrink: 0, background: bd.bg, color: bd.text }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: PIN_COLORS[d.biteColor], display: 'inline-block' }}></span>
                          {d.biteLabel}
                        </span>
                      </div>
                      <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>
                        {fmt(d.airTemp, '°C')} · {fmt(d.windSpeed, ' m/s')} {d.windDir}
                      </div>
                      <SpeciesChips species={d.species} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Detaljvy */}
        {active && (() => {
          const bd = BADGE_STYLE[active.biteColor];
          return (
            <div style={{ overflowY: 'auto', flex: 1 }}>

              {/* Hero-bild */}
              {active.heroImage && (
                <div style={{ height: '250px', overflow: 'hidden' }}>
                  <img src={active.heroImage} alt={active.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              )}

              <div style={{ padding: '1rem' }}>
                <div style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '2px' }}>{active.name}</div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '0.5rem' }}>{active.region}</div>

                {active.excerpt && (
                  <p style={{ fontSize: '12px', color: '#4b5563', lineHeight: '1.6', marginBottom: '0.875rem', borderLeft: '2px solid #e5e7eb', paddingLeft: '0.75rem' }}>
                    {active.excerpt}
                  </p>
                )}

                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 500, padding: '3px 9px', borderRadius: '14px', marginBottom: '0.875rem', background: bd.bg, color: bd.text }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: PIN_COLORS[active.biteColor], display: 'inline-block' }}></span>
                  {active.biteLabel}
                </span>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.875rem' }}>
                  {[
                    { label: 'Lufttemp', val: fmt(active.airTemp, '°C') },
                    { label: 'Vind',     val: active.windSpeed !== null ? `${fmt(active.windSpeed, '')} m/s ${active.windDir}` : '–' },
                  ].map(({ label, val }) => (
                    <div key={label} style={{ background: '#f9fafb', borderRadius: '8px', padding: '0.5rem 0.75rem' }}>
                      <div style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>{label}</div>
                      <div style={{ fontSize: '15px', fontWeight: 500, color: '#111827' }}>{val}</div>
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: '0.875rem' }}>
                  <div style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Arter i säsong</div>
                  <SpeciesChips species={active.species} />
                  <div style={{ display: 'flex', gap: '12px', marginTop: '6px', fontSize: '10px', color: '#9ca3af' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#16a34a', display: 'inline-block' }}></span>Högsäsong</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#d97706', display: 'inline-block' }}></span>Bra säsong</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#d1d5db', display: 'inline-block' }}></span>Lågsäsong</span>
                  </div>
                </div>

                {active.iFiskeUrl && (
                  <a href={active.iFiskeUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#185FA5', marginBottom: '0.875rem', textDecoration: 'none' }}>
                    Fiskekort via ifiske.se →
                  </a>
                )}

                <a href={`/destinationer/${active.slug}/`}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', width: '100%', padding: '0.55rem', borderRadius: '8px', background: '#1F3A2E', color: '#fff', fontSize: '13px', fontWeight: 500, textDecoration: 'none', transition: 'opacity 0.12s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Guide till {active.name}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>

                {!active.error && (
                  <div style={{ fontSize: '10px', color: '#9ca3af', marginTop: '0.6rem', textAlign: 'center' }}>
                    SMHI: {active.stationName}
                  </div>
                )}
              </div>
            </div>
          );
        })()}
      </div>

      {/* Månfas + CTA */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem', marginTop: 'auto' }}>
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '0.875rem 1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '22px' }} role="img" aria-label={moonName}>{moonEmoji}</span>
          <div>
            <div style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>Månfas</div>
            <div style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>{moonName}</div>
          </div>
        </div>
        <a href="/forhallanden/"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#1F3A2E', borderRadius: '100px', padding: '1rem 2rem', textDecoration: 'none', fontSize: '16px', fontWeight: 600, color: '#fff', transition: 'opacity 0.12s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Förhållanden just nu
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function FiskeKarta({ destinations, moonEmoji, moonName }: Props) {
  const isMobile   = useIsMobile();
  const mapRef     = useRef<HTMLDivElement>(null);
  const leafletRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Map<string, CircleMarker>>(new Map());
  const [active, setActive] = useState<DestinationPin | null>(null);

  useEffect(() => {
    if (!mapRef.current || leafletRef.current) return;

    import('leaflet').then(L => {
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id   = 'leaflet-css';
        link.rel  = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      const swedenBounds = L.latLngBounds(L.latLng(55.2, 11.0), L.latLng(69.1, 24.2));

      const map = L.map(mapRef.current!, {
        center:             [62.5, 17.5],
        zoom:               5,
        minZoom:            5,
        maxZoom:            5,
        zoomControl:        false,
        attributionControl: true,
        scrollWheelZoom:    false,
        dragging:           false,
        touchZoom:          false,
        doubleClickZoom:    false,
        boxZoom:            false,
        keyboard:           false,
        maxBounds:          swedenBounds,
        maxBoundsViscosity: 1.0,
      });

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        { attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> · © <a href="https://carto.com/">CARTO</a>', subdomains: 'abcd', maxZoom: 19 }
      ).addTo(map);

      destinations.forEach(dest => {
        const color  = PIN_COLORS[dest.biteColor] ?? PIN_COLORS.stone;
        const marker = L.circleMarker([dest.lat, dest.lng], {
          radius: dest.error ? 7 : 9, fillColor: color, color: '#fff', weight: 2.5, opacity: 1, fillOpacity: 1,
        }).addTo(map);

        marker.bindTooltip(
          `<strong style="font-size:12px">${dest.name}</strong><br/><span style="font-size:11px;color:#6b7280">${dest.biteLabel}${dest.airTemp !== null ? ' · ' + dest.airTemp.toFixed(1) + '°C' : ''}</span>`,
          { permanent: false, direction: 'top', offset: [0, -8], className: 'stromkast-tooltip' }
        );

        marker.on('click', () => setActive(dest));
        markersRef.current.set(dest.slug, marker);
      });

      leafletRef.current = map;

      setTimeout(() => {
        map.invalidateSize();
        map.setView([62.5, 17.5], 5);
      }, 400);
    });

    return () => {
      leafletRef.current?.remove();
      leafletRef.current = null;
    };
  }, []);

  useEffect(() => {
    markersRef.current.forEach((marker, slug) => {
      const dest     = destinations.find(d => d.slug === slug);
      const isActive = active?.slug === slug;
      if (!dest) return;
      marker.setStyle({
        weight: isActive ? 3.5 : 2.5,
        color:  isActive ? '#1F3A2E' : '#fff',
        radius: isActive ? 11 : (dest.error ? 7 : 9),
      });
    });
  }, [active]);

  if (isMobile) {
    return (
      <div style={{ width: '100%' }}>
        <Panel
          destinations={destinations}
          active={active}
          onSelect={setActive}
          onClear={() => setActive(null)}
          moonEmoji={moonEmoji}
          moonName={moonName}
          isMobile={true}
        />
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: '1.5rem', alignItems: 'stretch' }}>

      <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', background: '#dde8d8', width: '100%', height: '760px' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 800, background: 'rgba(31,58,46,0.88)', color: '#fff', fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '6px', pointerEvents: 'none' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite', display: 'inline-block' }}></span>
            Live · SMHI
          </div>
        </div>
        <div ref={mapRef} style={{ width: '100%', height: '720px' }} aria-label="Karta över svenska fiskevatten med betningsindikator" />
        <div style={{ padding: '0.7rem 1rem', borderTop: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', background: '#fff' }}>
          <span style={{ fontSize: '11px', color: '#9ca3af' }}>Data: SMHI Open Data · CC BY 4.0</span>
        </div>
      </div>

      <Panel
        destinations={destinations}
        active={active}
        onSelect={setActive}
        onClear={() => setActive(null)}
        moonEmoji={moonEmoji}
        moonName={moonName}
        isMobile={false}
      />

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.35} }
        .stromkast-tooltip {
          background: rgba(31,58,46,0.92) !important;
          border: none !important;
          border-radius: 8px !important;
          color: #fff !important;
          padding: 5px 10px !important;
          box-shadow: none !important;
          font-family: inherit;
        }
        .stromkast-tooltip::before { display: none !important; }
        .leaflet-tooltip-top.stromkast-tooltip::before { display: none !important; }
      `}</style>
    </div>
  );
}
```

## src/components/KalenderWidget.tsx
```
/**
 * src/components/KalenderWidget.tsx
 *
 * Interaktiv nappkalender med dagsvyer, artfilter och regionfilter.
 * Två lager per dag: säsongsfärg (bakgrund) + månfaschip (daglig variation).
 * Prognosdagar markeras med SMHI-badge.
 */

import { useState, useMemo, useEffect } from 'react';

function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}

// ---------------------------------------------------------------------------
// Typer
// ---------------------------------------------------------------------------

interface DayForecast {
  date:       string;
  tempMin:    number;
  tempMax:    number;
  tempMean:   number;
  windSpeed:  number;
  windDir:    number;
  precip:     number;
  symbolCode: number;
  isPrognosis: true;
}

interface MoonDay {
  date:         string;
  phase:        string;
  illumination: number;
  score:        number;
  emoji:        string;
}

interface SpeciesInfo {
  slug:        string;
  name:        string;
  peakMonths:  number[];
  okMonths:    number[];
}

interface Props {
  year:           number;
  moonDays:       MoonDay[];
  forecasts:      Record<string, DayForecast[]>;
  climateNormals: Record<string, number[]>;
  species:        SpeciesInfo[];
  symbolLabels:   Record<number, string>;
  symbolEmojis:   Record<number, string>;
}

// ---------------------------------------------------------------------------
// Konstanter
// ---------------------------------------------------------------------------

const MONTHS_SV  = ['Januari','Februari','Mars','April','Maj','Juni','Juli','Augusti','September','Oktober','November','December'];
const MONTHS_ABB = ['Jan','Feb','Mar','Apr','Maj','Jun','Jul','Aug','Sep','Okt','Nov','Dec'];
const DAYS_SV    = ['Mån','Tis','Ons','Tor','Fre','Lör','Sön'];

const REGIONS = [
  { slug: 'mellansverige', label: 'Mellansverige'  },
  { slug: 'sodra-sverige', label: 'Södra Sverige'  },
  { slug: 'norra-sverige', label: 'Norra Sverige'  },
  { slug: 'fjallvarlden',  label: 'Fjällvärlden'   },
];

const WIND_DIRS = ['N','NNO','NO','ONO','O','OSO','SO','SSO','S','SSV','SV','VSV','V','VNV','NV','NNV'];
function windDirLabel(deg: number): string {
  return WIND_DIRS[Math.round(deg / 22.5) % 16];
}

// ---------------------------------------------------------------------------
// Säsongsfärg (bakgrund per dag) -- baseras enbart på säsong
// ---------------------------------------------------------------------------

// moonScore 1-10 → intensitet 0=låg, 1=medel, 2=hög
function moonIntensity(moonScore: number): 0 | 1 | 2 {
  if (moonScore >= 8) return 2;
  if (moonScore >= 6) return 1;
  return 0;
}

function getSeasonStyle(month: number, speciesSlug: string | null, species: SpeciesInfo[], moonScore: number = 5): {
  bg: string; border: string; textColor: string;
} {
  let level: 'peak' | 'ok' | 'low' | 'off' = 'off';

  if (speciesSlug) {
    const sp = species.find(s => s.slug === speciesSlug);
    if (sp) {
      if (sp.peakMonths.includes(month))    level = 'peak';
      else if (sp.okMonths.includes(month)) level = 'ok';
      else                                  level = 'off';
    }
  } else {
    if ([4,5,9,10].includes(month))      level = 'peak';
    else if ([3,6,8,11].includes(month)) level = 'ok';
    else if ([2,7].includes(month))      level = 'low';
    else                                 level = 'off';
  }

  const mi = moonIntensity(moonScore);

  // Tre nyanser per säsongsnivå -- ljusare = sämre månfas, mörkare = bättre månfas
  const PALETTES = {
    peak: [
      { bg: '#f0fdf4', border: '#d1fae5', textColor: '#166534' }, // låg månfas
      { bg: '#dcfce7', border: '#bbf7d0', textColor: '#166534' }, // neutral
      { bg: '#bbf7d0', border: '#6ee7b7', textColor: '#065f46' }, // gynnsam
    ],
    ok: [
      { bg: '#fffbeb', border: '#fef3c7', textColor: '#92400e' },
      { bg: '#fef3c7', border: '#fde68a', textColor: '#92400e' },
      { bg: '#fde68a', border: '#fbbf24', textColor: '#78350f' },
    ],
    low: [
      { bg: '#f9fafb', border: '#f3f4f6', textColor: '#6b7280' },
      { bg: '#f3f4f6', border: '#e5e7eb', textColor: '#6b7280' },
      { bg: '#e5e7eb', border: '#d1d5db', textColor: '#4b5563' },
    ],
    off: [
      { bg: '#f9fafb', border: '#f3f4f6', textColor: '#9ca3af' },
      { bg: '#f3f4f6', border: '#e5e7eb', textColor: '#9ca3af' },
      { bg: '#e5e7eb', border: '#d1d5db', textColor: '#6b7280' },
    ],
  };

  return PALETTES[level][mi];
}



// ---------------------------------------------------------------------------
// Månadspoäng (för sidopanelens månadsöversikt)
// ---------------------------------------------------------------------------

function getMonthAvgScore(
  year: number, month: number,
  moonDays: MoonDay[],
  region: string,
  climateNormals: Record<string, number[]>,
  forecasts: Record<string, DayForecast[]>,
  speciesSlug: string | null,
  species: SpeciesInfo[]
): number {
  const daysInMonth = new Date(year, month, 0).getDate();
  let total = 0;
  for (let d = 1; d <= daysInMonth; d++) {
    const date = `${year}-${String(month).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    total += getDayScore(date, moonDays, region, climateNormals, forecasts, speciesSlug, species).score;
  }
  return Math.round(total / daysInMonth);
}

// ---------------------------------------------------------------------------
// Poängberäkning
// ---------------------------------------------------------------------------

function getDayScore(
  date: string,
  moonDays: MoonDay[],
  region: string,
  climateNormals: Record<string, number[]>,
  forecasts: Record<string, DayForecast[]>,
  speciesSlug: string | null,
  species: SpeciesInfo[]
): { score: number; moonScore: number; seasonScore: number; isPrognosis: boolean } {
  const d        = new Date(date + 'T12:00:00Z');
  const month    = d.getUTCMonth() + 1;
  const moonDay  = moonDays.find(m => m.date === date);
  const moonScore = moonDay?.score ?? 5;
  const forecast  = forecasts[region]?.find(f => f.date === date);
  const isPrognosis = !!forecast;

  let seasonScore = 2;
  if (speciesSlug) {
    const sp = species.find(s => s.slug === speciesSlug);
    if (sp) {
      if (sp.peakMonths.includes(month))    seasonScore = 9;
      else if (sp.okMonths.includes(month)) seasonScore = 6;
    }
  } else {
    const norm = climateNormals[region]?.[month - 1] ?? 10;
    if (norm >= 8 && norm <= 18)      seasonScore = 8;
    else if (norm >= 4 && norm < 8)   seasonScore = 6;
    else if (norm > 18 && norm <= 22) seasonScore = 5;
    else if (norm < 0)                seasonScore = 2;
    else                              seasonScore = 4;
  }

  let weatherBonus = 0;
  if (forecast) {
    if (forecast.tempMean >= 8 && forecast.tempMean <= 18)  weatherBonus += 12;
    else if (forecast.tempMean >= 4)                        weatherBonus += 4;
    else if (forecast.tempMean < 0)                         weatherBonus -= 10;
    if (forecast.windSpeed >= 1 && forecast.windSpeed <= 4) weatherBonus += 8;
    else if (forecast.windSpeed > 10)                       weatherBonus -= 15;
    if (forecast.precip > 5)                                weatherBonus -= 5;
  }

  const base  = Math.round(moonScore * 0.25 + seasonScore * 0.75);
  const score = Math.max(1, Math.min(10, base + Math.round(weatherBonus / 10)));

  return { score, moonScore, seasonScore, isPrognosis };
}

// ---------------------------------------------------------------------------
// Kalenderrutnät
// ---------------------------------------------------------------------------

function MonthGrid({
  year, month, moonDays, forecasts, climateNormals, region, speciesSlug, species,
  onDayClick, selectedDate, today,
}: {
  year: number; month: number;
  moonDays: MoonDay[]; forecasts: Record<string, DayForecast[]>;
  climateNormals: Record<string, number[]>; region: string;
  speciesSlug: string | null; species: SpeciesInfo[];
  onDayClick: (date: string) => void; selectedDate: string | null; today: string;
}) {
  const firstDay = new Date(`${year}-${String(month).padStart(2,'0')}-01`);
  let startDow = firstDay.getDay() - 1;
  if (startDow < 0) startDow = 6;

  const daysInMonth = new Date(year, month, 0).getDate();
  const cells: (string | null)[] = [
    ...Array(startDow).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => {
      const d = i + 1;
      return `${year}-${String(month).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    }),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div>
      {/* Veckodagar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '6px' }}>
        {DAYS_SV.map(d => (
          <div key={d} style={{ textAlign: 'center', fontSize: '11px', fontWeight: 600, color: '#9ca3af', padding: '2px 0' }}>{d}</div>
        ))}
      </div>

      {/* Dagar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
        {cells.map((date, i) => {
          if (!date) return <div key={i}></div>;

          const { moonScore, isPrognosis } = getDayScore(date, moonDays, region, climateNormals, forecasts, speciesSlug, species);
          const moon       = moonDays.find(m => m.date === date);
          const d          = new Date(date + 'T12:00:00Z');
          const month      = d.getUTCMonth() + 1;
          const dayNum     = d.getUTCDate();
          const season     = getSeasonStyle(month, speciesSlug, species, moonScore);
          const isToday    = date === today;
          const isSelected = date === selectedDate;

          return (
            <button
              key={date}
              onClick={() => onDayClick(date)}
              style={{
                position: 'relative',
                borderRadius: '10px',
                padding: '6px 4px 5px',
                border: isSelected
                  ? '2px solid #1F3A2E'
                  : isToday
                  ? '2px solid #1F3A2E'
                  : `1.5px solid ${season.border}`,
                background: isSelected ? '#e8f5e9' : season.bg,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3px',
                minHeight: '64px',
                transition: 'transform 0.1s, box-shadow 0.1s',
                boxShadow: isSelected ? '0 0 0 2px #1F3A2E' : 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = isSelected ? '0 0 0 2px #1F3A2E' : 'none'; }}
            >
              {/* Datum */}
              <span style={{ fontSize: '13px', fontWeight: 700, color: season.textColor, lineHeight: 1 }}>
                {dayNum}
              </span>

              {/* Emoji enbart vid fullmåne eller nymåne */}
              {moon && (moon.phase === 'Fullmåne' || moon.phase === 'Nymåne') && (
                <span style={{ fontSize: '11px', lineHeight: 1 }}>{moon.emoji}</span>
              )}

              {/* SMHI-badge för prognosdagar */}
              {isPrognosis && (
                <span style={{
                  position: 'absolute', top: '3px', right: '3px',
                  fontSize: '6px', fontWeight: 700, color: '#2563eb',
                  background: '#eff6ff', border: '1px solid #bfdbfe',
                  borderRadius: '3px', padding: '1px 2px', lineHeight: 1,
                  letterSpacing: '0.02em',
                }}>
                  SMHI
                </span>
              )}

              {/* Idag-markering */}
              {isToday && (
                <span style={{
                  position: 'absolute', bottom: '3px', left: '50%',
                  transform: 'translateX(-50%)',
                  width: '4px', height: '4px', borderRadius: '50%',
                  background: '#1F3A2E', display: 'inline-block',
                }}></span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Dagspanel
// ---------------------------------------------------------------------------

function DayPanel({
  date, moonDays, forecasts, climateNormals, region, speciesSlug, species, symbolLabels, symbolEmojis, onClose,
}: {
  date: string; moonDays: MoonDay[]; forecasts: Record<string, DayForecast[]>;
  climateNormals: Record<string, number[]>; region: string;
  speciesSlug: string | null; species: SpeciesInfo[];
  symbolLabels: Record<number, string>; symbolEmojis: Record<number, string>; onClose: () => void;
}) {
  const d          = new Date(date + 'T12:00:00Z');
  const dayName    = ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'][d.getUTCDay()];
  const month      = d.getUTCMonth() + 1;
  const dayNum     = d.getUTCDate();
  const moon       = moonDays.find(m => m.date === date);
  const forecast   = forecasts[region]?.find(f => f.date === date);
  const norm       = climateNormals[region]?.[month - 1];
  const { score, moonScore, seasonScore, isPrognosis } = getDayScore(date, moonDays, region, climateNormals, forecasts, speciesSlug, species);
  const season     = getSeasonStyle(month, speciesSlug, species);

  const speciesData = speciesSlug ? species.find(s => s.slug === speciesSlug) : null;
  const artSeason   = speciesData
    ? speciesData.peakMonths.includes(month) ? 'Högsäsong'
    : speciesData.okMonths.includes(month)   ? 'Bra säsong'
    : 'Lågsäsong'
    : null;

  const scoreColor = score >= 7 ? '#16a34a' : score >= 5 ? '#d97706' : '#9ca3af';
  const scoreLabel = score >= 7 ? 'Toppläge' : score >= 5 ? 'Värt att testa' : 'Trögt';

  const moonDots = moonScore >= 8 ? 3 : moonScore >= 6 ? 2 : 1;
  const moonColor = moonScore >= 8 ? '#6366f1' : moonScore >= 6 ? '#8b5cf6' : '#c4b5fd';

  return (
    <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '1.25rem', position: 'relative' }}>
      <button
        onClick={onClose}
        style={{ position: 'absolute', top: '12px', right: '12px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#9ca3af' }}
        aria-label="Stäng"
      >×</button>

      {/* Datum */}
      <div style={{ marginBottom: '1rem' }}>
        <p style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '2px' }}>{dayName}</p>
        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
          {dayNum} {MONTHS_SV[month - 1]}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: season.bg, color: season.textColor, border: `1px solid ${season.border}`, fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '20px' }}>
            {scoreLabel} · {score}/10
          </span>
          {isPrognosis && (
            <span style={{ fontSize: '11px', color: '#2563eb', fontWeight: 600, background: '#eff6ff', border: '1px solid #bfdbfe', padding: '3px 8px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb', display: 'inline-block' }}></span>
              SMHI-prognos
            </span>
          )}
        </div>
      </div>

      {/* Prognosväder */}
      {forecast ? (
        <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '0.875rem', marginBottom: '1rem' }}>
          <p style={{ fontSize: '11px', color: '#2563eb', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>☁️</span> Väderprognos · SMHI
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[
              { label: 'Temp', val: `${forecast.tempMin}–${forecast.tempMax}°C` },
              { label: 'Vind', val: `${forecast.windSpeed} m/s ${windDirLabel(forecast.windDir)}` },
              { label: 'Nbd', val: `${forecast.precip} mm` },
              { label: 'Väder', val: (symbolEmojis[forecast.symbolCode] ?? '') + ' ' + (symbolLabels[forecast.symbolCode] ?? '–') },
            ].map(({ label, val }) => (
              <div key={label}>
                <p style={{ fontSize: '10px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1px' }}>{label}</p>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#111827' }}>{val}</p>
              </div>
            ))}
          </div>
        </div>
      ) : norm !== undefined && (
        <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '0.75rem', marginBottom: '1rem' }}>
          <p style={{ fontSize: '10px', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Historisk normaltemperatur</p>
          <p style={{ fontSize: '18px', fontWeight: 700, color: '#111827' }}>{norm > 0 ? '+' : ''}{norm}°C</p>
          <p style={{ fontSize: '10px', color: '#9ca3af' }}>Klimatnormal 1991–2020 · SMHI</p>
        </div>
      )}

      {/* Månfas -- tydlig med förklaring */}
      {moon && (
        <div style={{ background: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: '12px', padding: '0.875rem', marginBottom: '1rem' }}>
          <p style={{ fontSize: '10px', color: '#7c3aed', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
            Månfas
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '28px' }}>{moon.emoji}</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '13px', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>{moon.phase}</p>
              <p style={{ fontSize: '11px', color: '#6b7280', marginBottom: '6px' }}>{moon.illumination}% belyst</p>
              {/* Månfasprickar med förklaring */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: i < moonDots ? moonColor : '#e5e7eb', display: 'inline-block' }}></span>
                  ))}
                </div>
                <span style={{ fontSize: '11px', color: '#7c3aed', fontWeight: 500 }}>
                  {moonScore >= 8 ? 'Gynnsam månfas' : moonScore >= 6 ? 'Neutral månfas' : 'Ogynnsam månfas'}
                </span>
              </div>
              <p style={{ fontSize: '10px', color: '#9ca3af', marginTop: '4px', lineHeight: 1.5 }}>
                Månfas påverkar fisket svagt (~5%). Nymåne och fullmåne ger historiskt något fler hugg.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Artinfo */}
      {speciesData && artSeason && (
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '0.75rem', marginBottom: '1rem' }}>
          <p style={{ fontSize: '10px', color: '#166534', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>{speciesData.name}</p>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>{artSeason}</p>
          <p style={{ fontSize: '11px', color: '#6b7280', marginTop: '2px' }}>Säsongspoäng: {seasonScore}/10</p>
        </div>
      )}

      {/* Poängsammansättning */}
      <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '0.75rem' }}>
        <p style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', fontWeight: 600 }}>Poängsammansättning</p>
        {[
          { label: 'Säsong', pct: '70%', val: seasonScore, color: '#16a34a' },
          { label: 'Månfas', pct: '25%', val: moonScore,   color: '#7c3aed' },
          { label: 'Väder',  pct: '5%',  val: forecast ? Math.min(10, Math.max(1, score)) : null, color: '#2563eb' },
        ].map(({ label, pct, val, color }) => val !== null && (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', color: '#6b7280', width: '50px', flexShrink: 0 }}>{label}</span>
            <span style={{ fontSize: '10px', color: '#9ca3af', width: '28px', flexShrink: 0 }}>{pct}</span>
            <div style={{ flex: 1, height: '6px', background: '#f3f4f6', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: `${val * 10}%`, height: '100%', background: color, borderRadius: '3px' }}></div>
            </div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#111827', width: '20px', textAlign: 'right' }}>{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Huvudkomponent
// ---------------------------------------------------------------------------

export default function KalenderWidget({
  year, moonDays, forecasts, climateNormals, species, symbolLabels, symbolEmojis,
}: Props) {
  const isMobile     = useIsMobile();
  const today        = new Date().toISOString().split('T')[0];
  const currentMonth = new Date().getMonth() + 1;

  const [selectedMonth,   setSelectedMonth]   = useState(currentMonth);
  const [selectedRegion,  setSelectedRegion]  = useState('mellansverige');
  const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null);
  const [selectedDate,    setSelectedDate]    = useState<string | null>(null);

  const monthScores = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const month = i + 1;
      return {
        month,
        score: getMonthAvgScore(year, month, moonDays, selectedRegion, climateNormals, forecasts, selectedSpecies, species),
      };
    });
  }, [selectedRegion, selectedSpecies]);

  const FILTER_BTN = (active: boolean) => ({
    padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 500,
    cursor: 'pointer',
    border: active ? '1px solid #1F3A2E' : '1px solid #e5e7eb',
    background: active ? '#1F3A2E' : '#fff',
    color: active ? '#fff' : '#374151',
    transition: 'all 0.1s',
    whiteSpace: 'nowrap' as const,
  });

  const prevMonth = selectedMonth > 1  ? selectedMonth - 1 : null;
  const nextMonth = selectedMonth < 12 ? selectedMonth + 1 : null;

  return (
    <div style={{ fontFamily: 'inherit' }}>

      {/* Filter */}
      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '1rem 1.25rem', marginBottom: '1rem', overflowX: 'auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
          <div>
            <p style={{ fontSize: '10px', color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>Region</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {REGIONS.map(r => (
                <button key={r.slug} onClick={() => setSelectedRegion(r.slug)} style={FILTER_BTN(selectedRegion === r.slug)}>{r.label}</button>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontSize: '10px', color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>Art</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              <button onClick={() => setSelectedSpecies(null)} style={FILTER_BTN(selectedSpecies === null)}>Alla arter</button>
              {species.map(sp => (
                <button key={sp.slug} onClick={() => setSelectedSpecies(sp.slug)} style={FILTER_BTN(selectedSpecies === sp.slug)}>{sp.name}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Förklaring */}
        <div style={{ display: isMobile ? 'none' : 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #f3f4f6', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', color: '#374151', fontWeight: 600 }}>Bakgrundsfärg = säsong:</span>
          {[
            { color: '#f0fdf4', border: '#bbf7d0', label: 'Högsäsong' },
            { color: '#fffbeb', border: '#fde68a', label: 'Bra säsong' },
            { color: '#f9fafb', border: '#e5e7eb', label: 'Lågsäsong'  },
          ].map(({ color, border, label }) => (
            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#6b7280' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: color, border: `1.5px solid ${border}`, display: 'inline-block', flexShrink: 0 }}></span>
              {label}
            </span>
          ))}
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#2563eb', marginLeft: 'auto' }}>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#2563eb', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '3px', padding: '1px 3px' }}>SMHI</span>
            Väderprognos (10 dgn)
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#374151' }}>
            <span style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: '#f0fdf4', border: '1.5px solid #d1fae5', display: 'inline-block' }}></span>
              <span style={{ fontSize: '11px', color: '#9ca3af' }}>→</span>
              <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: '#dcfce7', border: '1.5px solid #bbf7d0', display: 'inline-block' }}></span>
              <span style={{ fontSize: '11px', color: '#9ca3af' }}>→</span>
              <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: '#bbf7d0', border: '1.5px solid #6ee7b7', display: 'inline-block' }}></span>
            </span>
            Mörkare = gynnsam månfas 🌕
          </span>
        </div>
      </div>

      {/* Huvud-layout */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 280px', gap: '1rem', alignItems: 'stretch' }}>

        {/* Kalender */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <button onClick={() => prevMonth && setSelectedMonth(prevMonth)} disabled={!prevMonth}
              style={{ background: 'none', border: 'none', cursor: prevMonth ? 'pointer' : 'default', opacity: prevMonth ? 1 : 0.25, fontSize: '22px', color: '#374151', padding: '4px 8px', lineHeight: 1 }}>‹</button>
            <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#111827' }}>{MONTHS_SV[selectedMonth - 1]} {year}</h2>
            <button onClick={() => nextMonth && setSelectedMonth(nextMonth)} disabled={!nextMonth}
              style={{ background: 'none', border: 'none', cursor: nextMonth ? 'pointer' : 'default', opacity: nextMonth ? 1 : 0.25, fontSize: '22px', color: '#374151', padding: '4px 8px', lineHeight: 1 }}>›</button>
          </div>

          <MonthGrid
            year={year} month={selectedMonth}
            moonDays={moonDays} forecasts={forecasts} climateNormals={climateNormals}
            region={selectedRegion} speciesSlug={selectedSpecies} species={species}
            onDayClick={setSelectedDate} selectedDate={selectedDate} today={today}
          />
        </div>

        {/* Sidopanel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', height: isMobile ? 'auto' : '100%' }}>
          {selectedDate ? (
            <DayPanel
              date={selectedDate} moonDays={moonDays} forecasts={forecasts}
              climateNormals={climateNormals} region={selectedRegion}
              speciesSlug={selectedSpecies} species={species}
              symbolLabels={symbolLabels} symbolEmojis={symbolEmojis}
              onClose={() => setSelectedDate(null)}
            />
          ) : (
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #f0f0f0' }}>
                <p style={{ fontSize: '12px', fontWeight: 600, color: '#374151' }}>📅 Månadsöversikt {year}</p>
              </div>
              <div style={{ padding: '0.5rem' }}>
                {monthScores.map(({ month, score }) => {
                  const seasonSt = getSeasonStyle(month, selectedSpecies, species);
                  const isSel    = month === selectedMonth;
                  const isNow    = month === currentMonth;
                  return (
                    <button key={month} onClick={() => setSelectedMonth(month)}
                      style={{
                        width: '100%', display: 'flex', alignItems: 'center', gap: '8px',
                        padding: '5px 8px', borderRadius: '8px', cursor: 'pointer',
                        border: isSel ? '1px solid #1F3A2E' : '1px solid transparent',
                        background: isSel ? '#f0fdf4' : 'transparent',
                        transition: 'background 0.1s',
                      }}
                      onMouseEnter={e => { if (!isSel) e.currentTarget.style.background = '#f9fafb'; }}
                      onMouseLeave={e => { if (!isSel) e.currentTarget.style.background = 'transparent'; }}
                    >
                      <span style={{ fontSize: '11px', color: isNow ? '#1F3A2E' : '#6b7280', fontWeight: isNow ? 700 : 400, width: '28px', textAlign: 'left', flexShrink: 0 }}>
                        {MONTHS_ABB[month - 1]}
                      </span>
                      <div style={{ flex: 1, height: '8px', background: '#f3f4f6', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: `${score * 10}%`, height: '100%', background: seasonSt.border, borderRadius: '4px', transition: 'width 0.3s' }}></div>
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#111827', width: '20px', textAlign: 'right' }}>{score}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '0.875rem 1rem', marginTop: isMobile ? '0' : 'auto' }}>
            <p style={{ fontSize: '11px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
              <strong style={{ color: '#374151' }}>Färgton</strong> = säsong × månfas. Mörkare nyans = gynnsam månfas den dagen. 🌕🌑 visas vid fullmåne och nymåne. <strong style={{ color: '#2563eb' }}>SMHI</strong> = aktuell prognos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## src/components/quiz/SpoQuiz.tsx
```
import { useState } from 'react';
import { trackQuizStart, trackQuizCompleted } from '../../lib/track';

interface GearReview {
  slug: string;
  title: string;
  brand: string;
  price: number;
  description: string;
  affiliateUrl: string;
  targetSpecies: string[];
  techniques: string[];
  priceRange: 'budget' | 'mellanklass' | 'premium';
  featured: boolean;
  budgetPick: boolean;
  rating: number;
}

interface QuizAnswers {
  targetSpecies?: string;
  technique?: string;
  experience?: string;
  budget?: string;
}

interface Props {
  rods: GearReview[];
}

const QUESTIONS = [
  {
    id: 'targetSpecies',
    question: 'Vilken art vill du fiska mest?',
    options: [
      { value: 'abborre', label: 'Abborre' },
      { value: 'gadda', label: 'Gädda' },
      { value: 'gos', label: 'Gös' },
      { value: 'mixed', label: 'Blandat / Vet inte' },
    ],
  },
  {
    id: 'technique',
    question: 'Vilken teknik föredrar du?',
    options: [
      { value: 'jigg', label: 'Jigg / Softbait' },
      { value: 'dropshot', label: 'Dropshot' },
      { value: 'spinn', label: 'Spinn / Wobbler' },
      { value: 'jerkbait', label: 'Jerkbait' },
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
      { value: 'budget', label: 'Under 1 000 kr' },
      { value: 'mellanklass', label: '1 000–2 000 kr' },
      { value: 'premium', label: '2 000–4 000 kr' },
    ],
  },
];

function matchRods(rods: GearReview[], answers: QuizAnswers): GearReview[] {
  const { targetSpecies, technique, budget } = answers;

  // Poängsätt varje spö
  const scored = rods.map((rod) => {
    let score = 0;

    // Art-matchning (viktigast)
    if (targetSpecies && targetSpecies !== 'mixed') {
      if (rod.targetSpecies.includes(targetSpecies)) score += 3;
    } else {
      // Blandat: ge poäng för bredd
      score += rod.targetSpecies.length;
    }

    // Teknik-matchning
    if (technique && technique !== 'unsure') {
      if (rod.techniques.includes(technique)) score += 2;
    }

    // Prisklass-matchning
    if (budget) {
      if (rod.priceRange === budget) score += 2;
      // Angränsande prisklass ger ett poäng
      const ranges = ['budget', 'mellanklass', 'premium'];
      const diff = Math.abs(ranges.indexOf(rod.priceRange) - ranges.indexOf(budget));
      if (diff === 1) score += 1;
    }

    // Bonus för featured/budgetPick
    if (rod.featured) score += 1;
    if (budget === 'budget' && rod.budgetPick) score += 1;

    return { rod, score };
  });

  // Sortera på poäng, ta topp 3
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((s) => s.rod);
}

export default function SpoQuiz({ rods }: Props) {
  const [step, setStep] = useState<'intro' | number | 'email' | 'results'>('intro');
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [email, setEmail] = useState('');
  const [results, setResults] = useState<GearReview[]>([]);

  const currentQ = typeof step === 'number' ? QUESTIONS[step] : null;
  const progress = typeof step === 'number'
    ? (step / QUESTIONS.length) * 100
    : step === 'email' ? 95 : step === 'results' ? 100 : 0;

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
    const r = matchRods(rods, answers);
    setResults(r);
    trackQuizCompleted(r.map((x) => x.slug));
    setStep('results');
  }

  function handleSkipEmail() {
    const r = matchRods(rods, answers);
    setResults(r);
    trackQuizCompleted(r.map((x) => x.slug));
    setStep('results');
  }

  const priceFormatted = (price: number) =>
    new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK', maximumFractionDigits: 0 }).format(price);

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
          <p className="text-stone leading-relaxed mb-8">Svara på fyra korta frågor om hur du fiskar. Vi matchar dig med de bästa spöna för dina behov.</p>
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

      {/* Fråga */}
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

      {/* E-postfångst */}
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

      {/* Resultat */}
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
            {results.map((rod, i) => (
              <div
                key={rod.slug}
                className={`bg-white rounded-2xl p-5 border-2 ${i === 0 ? 'border-rust' : 'border-mist'}`}
              >
                {i === 0 && (
                  <span className="inline-block bg-rust text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide mb-3">
                    Bästa match
                  </span>
                )}
                {rod.budgetPick && i !== 0 && (
                  <span className="inline-block bg-copper text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide mb-3">
                    Bästa budget
                  </span>
                )}
                <p className="text-xs text-stone font-medium uppercase tracking-wider mb-1">{rod.brand}</p>
                <h3 className="font-display font-bold text-deep text-lg mb-2">{rod.title}</h3>
                <p className="text-stone text-sm leading-relaxed mb-4">{rod.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-deep">{priceFormatted(rod.price)}</p>
                  <a
                    href={rod.affiliateUrl || `/utrustning/test/${rod.slug}/`}
                    className="inline-flex items-center gap-1.5 bg-pine text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine"
                    target={rod.affiliateUrl ? '_blank' : undefined}
                    rel={rod.affiliateUrl ? 'noopener noreferrer sponsored' : undefined}
                  >
                    {rod.affiliateUrl ? 'Se pris hos FiskeOnline' : 'Läs recension'}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-stone/60 text-center mt-6">
            *Rekommendationerna är baserade på vår redaktionella bedömning. Affiliatelänkar kan förekomma.
          </p>

          <div className="mt-6 text-center">
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
```

# Sidmallar (pages)

## src/pages/404.astro
```
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="Sidan hittades inte"
  description="Den här sidan finns inte. Gå tillbaka till startsidan eller sök efter det du letar efter."
  pageType="error"
>
  <div class="min-h-[80vh] flex items-center justify-center px-4 sm:px-6">
    <div class="max-w-lg text-center">
      <!-- Decorative number -->
      <p class="font-display text-[120px] sm:text-[160px] font-bold leading-none text-pine/10 select-none mb-0" aria-hidden="true">404</p>

      <div class="-mt-6 sm:-mt-10">
        <h1 class="font-display text-3xl sm:text-4xl font-bold text-deep mb-4">
          Sidan hittades inte
        </h1>
        <p class="text-stone text-lg leading-relaxed mb-8">
          Den här sidan verkar ha simmat iväg. Prova att söka efter det du letar efter eller gå tillbaka till startsidan.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/"
            class="inline-flex items-center gap-2 bg-pine text-white font-semibold px-6 py-3 rounded-full hover:bg-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M8 3l-5 5 5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Till startsidan
          </a>
          <a
            href="/sok/"
            class="inline-flex items-center gap-2 bg-mist text-deep font-semibold px-6 py-3 rounded-full hover:bg-stone/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="4.5" stroke="currentColor" stroke-width="1.5"/>
              <path d="M10.5 10.5l2.5 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            Sök på sajten
          </a>
        </div>
      </div>

      <!-- Quick links -->
      <div class="mt-12 pt-8 border-t border-mist">
        <p class="text-stone text-sm font-medium mb-4">Populära sidor</p>
        <nav class="flex flex-wrap justify-center gap-3" aria-label="Populära sidor">
          <a href="/destinationer/" class="text-sm text-pine hover:text-deep transition-colors underline underline-offset-2">Destinationer</a>
          <a href="/teknik/" class="text-sm text-pine hover:text-deep transition-colors underline underline-offset-2">Tekniker</a>
          <a href="/arter/" class="text-sm text-pine hover:text-deep transition-colors underline underline-offset-2">Fiskarter</a>
          <a href="/utrustning/" class="text-sm text-pine hover:text-deep transition-colors underline underline-offset-2">Utrustning</a>
          <a href="/guider/" class="text-sm text-pine hover:text-deep transition-colors underline underline-offset-2">Guider</a>
          <a href="/spovaljaren/" class="text-sm text-pine hover:text-deep transition-colors underline underline-offset-2">Spöväljaren</a>
        </nav>
      </div>
    </div>
  </div>
</BaseLayout>
```

## src/pages/arter/[slug].astro
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import AffiliateCard from '../../components/AffiliateCard.astro';
import { getCollection, render } from 'astro:content';
import { Image, type ImageMetadata } from 'astro:assets';

import abboreSrc from '../../assets/images/species-abborre.png';
import gosSrc    from '../../assets/images/species-gos.png';
import oringSrc  from '../../assets/images/species-oring.jpg';
import gaddaSrc  from '../../assets/images/species-gadda.jpg';

const speciesImages: Record<string, ImageMetadata> = {
  abborre: abboreSrc,
  gos:     gosSrc,
  oring:   oringSrc,
  gadda:   gaddaSrc,
};

export async function getStaticPaths() {
  const species = await getCollection('species');
  return species.map((s) => ({
    params: { slug: s.data.slug },
    props: { species: s },
  }));
}

const { species } = Astro.props;
const s = species.data;
const { Content } = await render(species);

const heroImage = speciesImages[s.slug];

const allReviews = await getCollection('gear-reviews');
const gearRecs = allReviews.filter((r) => s.gearRecs.includes(r.data.slug));

const allDestinations = await getCollection('destinations');
const topDestinations = allDestinations.filter((d) =>
  s.topDestinations.includes(d.data.slug)
);

const allTechniques = await getCollection('techniques');
const relatedTechniques = allTechniques.filter((t) =>
  t.data.targetSpecies.some((ts: string) =>
    ts.toLowerCase() === s.title.toLowerCase() ||
    ts.toLowerCase() === s.slug.toLowerCase()
  )
);

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://stromkast.se/' },
    { '@type': 'ListItem', position: 2, name: 'Arter', item: 'https://stromkast.se/arter/' },
    { '@type': 'ListItem', position: 3, name: s.title, item: `https://stromkast.se/arter/${s.slug}/` },
  ],
};


const faqSchema = s.faq && s.faq.length > 0 ? {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: s.faq.map((item: { q: string; a: string }) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
} : null;

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: `${s.title}: guide till fiske, säsong och utrustning`,
  description: s.description,
  image: `https://stromkast.se${s.heroImage}`,
  url: `https://stromkast.se/arter/${s.slug}/`,
  dateModified: s.updatedAt ?? s.publishedAt,
  publisher: {
    '@type': 'Organization',
    name: 'Strömkast',
    url: 'https://stromkast.se/',
  },
};

const techniqueNames: Record<string, string> = {
  'drop-shot':  'Drop-shot',
  'spinnfiske': 'Spinnfiske',
  'jiggfiske':  'Jiggfiske',
  'isfiske':    'Isfiske',
  'flugfiske':  'Flugfiske',
  'trolling':   'Trolling',
  'mete':       'Mete',
};

const difficultyColor: Record<string, string> = {
  'nybörjare': 'bg-green-100 text-green-700',
  'mellannivå': 'bg-amber-100 text-amber-700',
  'avancerad': 'bg-red-100 text-red-700',
};
---

<BaseLayout
  title={`${s.title}: guide till fiske, säsong och utrustning`}
  description={s.description}
  ogImage={s.heroImage}
  schema={[breadcrumbSchema, articleSchema, ...(faqSchema ? [faqSchema] : [])]}
  pageType="species"
>
  <!-- Breadcrumb -->
  <nav class="pt-24 px-4 sm:px-6 max-w-[1280px] mx-auto" aria-label="Brödsmulor">
    <ol class="flex items-center gap-2 text-sm text-stone">
      <li><a href="/" class="hover:text-pine transition-colors">Hem</a></li>
      <li aria-hidden="true"><span class="text-stone/40">/</span></li>
      <li><a href="/arter/" class="hover:text-pine transition-colors">Arter</a></li>
      <li aria-hidden="true"><span class="text-stone/40">/</span></li>
      <li class="text-deep font-medium capitalize" aria-current="page">{s.title}</li>
    </ol>
  </nav>

  <!-- Hero -->
  <div class="relative h-[45vh] min-h-[320px] mt-4 overflow-hidden bg-pine">
    {heroImage ? (
      <Image
        src={heroImage}
        alt={s.title}
        width={1280}
        height={640}
        format="avif"
        quality={80}
        class="absolute inset-0 w-full h-full object-cover object-center"
        fetchpriority="high"
        decoding="async"
      />
    ) : (
      <div
        class="absolute inset-0 bg-cover bg-center"
        style={`background-image: url('${s.heroImage}'); background-color: #1F3A2E;`}
        aria-hidden="true"
      ></div>
    )}
    <div class="absolute inset-0 bg-gradient-to-t from-deep/85 to-transparent"></div>
    <div class="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-10 max-w-[1280px] mx-auto">
      <h1 class="font-display text-5xl sm:text-6xl font-bold text-white capitalize mb-2">{s.title}</h1>
      <p class="text-white/70 text-sm">{s.season}</p>
    </div>
  </div>

  <div class="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

      <!-- Main content -->
      <div class="lg:col-span-2 space-y-12">

        <!-- MDX body content -->
        <div class="prose prose-sm max-w-[72ch] text-deep/80 leading-relaxed">
          <Content />
        </div>

        <!-- Related techniques -->
        {relatedTechniques.length > 0 && (
          <div>
            <h2 class="font-display text-2xl font-bold text-deep mb-6">Tekniker för {s.title.toLowerCase()}</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTechniques.map((tech) => (
                <a
                  href={`/teknik/${tech.data.slug}/`}
                  class="group flex items-center gap-4 bg-white border border-mist rounded-2xl p-4 hover:border-pine/30 hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
                >
                  <div class="w-14 h-14 rounded-xl bg-mist overflow-hidden shrink-0">
                    <div
                      class="w-full h-full bg-cover bg-center"
                      style={`background-image: url('${tech.data.heroImage}'); background-color: #E8E4DC;`}
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p class="font-semibold text-deep text-sm group-hover:text-pine transition-colors">{tech.data.title}</p>
                    <span class={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mt-1 ${difficultyColor[tech.data.difficulty]}`}>
                      {tech.data.difficulty}
                    </span>
                  </div>
                  <svg class="ml-auto text-stone/40 group-hover:text-pine transition-colors shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M5 8h6M8 5l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        )}

        <!-- FAQ -->
        {s.faq && s.faq.length > 0 && (
          <div class="mt-16">
            <h2 class="font-display text-2xl font-bold text-deep mb-6">Vanliga frågor</h2>
            <div class="space-y-4">
              {s.faq.map((item: { q: string; a: string }) => (
                <details class="bg-white border border-mist rounded-2xl p-5 group">
                  <summary class="font-semibold text-deep cursor-pointer list-none flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine rounded-xl">
                    {item.q}
                    <svg class="shrink-0 transition-transform group-open:rotate-180" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </summary>
                  <p class="mt-3 text-stone text-sm leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>

      <!-- Sidebar -->
      <aside class="space-y-6">
        <!-- Quick facts -->
        <div class="bg-pine text-white rounded-2xl p-6">
          <h2 class="font-display font-bold text-xl mb-5">Snabbfakta</h2>
          <dl class="space-y-4 text-sm">
            {s.season && (
              <div>
                <dt class="text-white/60 text-xs uppercase tracking-wider mb-1">Säsong</dt>
                <dd class="font-medium leading-snug">{s.season}</dd>
              </div>
            )}
            {s.targetTechniques.length > 0 && (
              <div>
                <dt class="text-white/60 text-xs uppercase tracking-wider mb-1">Tekniker</dt>
                <dd class="flex flex-col gap-1">
                  {s.targetTechniques.map((slug: string) => (
                    <a href={`/teknik/${slug}/`} class="font-medium hover:text-copper transition-colors">
                      {techniqueNames[slug] ?? slug}
                    </a>
                  ))}
                </dd>
              </div>
            )}
            <div>
              <dt class="text-white/60 text-xs uppercase tracking-wider mb-1">Fler arter</dt>
              <dd>
                <a href="/arter/" class="text-copper hover:text-white transition-colors underline underline-offset-2">Se alla arter</a>
              </dd>
            </div>
          </dl>
        </div>

        <!-- Destinations -->
        <div class="bg-mist rounded-2xl p-6">
          <h3 class="font-display font-bold text-deep text-lg mb-4">Var fiskar man {s.title.toLowerCase()}?</h3>
          {topDestinations.length > 0 ? (
            <ul class="space-y-2">
              {topDestinations.map((d) => (
                <li>
                  <a
                    href={`/destinationer/${d.data.slug}/`}
                    class="flex items-center justify-between gap-2 text-sm font-medium text-deep hover:text-pine transition-colors"
                  >
                    {d.data.title}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" class="shrink-0 text-stone/40">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p class="text-stone text-sm leading-relaxed mb-4">Hitta de bästa vattnen för {s.title.toLowerCase()} i vår destinationsguide.</p>
          )}
          <a
            href="/destinationer/"
            class="inline-flex items-center gap-1.5 text-pine font-semibold text-sm hover:text-deep transition-colors mt-4"
          >
            Alla destinationer
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </aside>
    </div>

    <!-- Recommended gear -->
    {gearRecs.length > 0 && (
      <div class="mt-16">
        <h2 class="font-display text-2xl font-bold text-deep mb-2">Rekommenderad utrustning</h2>
        <p class="text-stone text-sm mb-8">Testad utrustning för {s.title.toLowerCase()}fiske.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gearRecs.map((review) => (
            <AffiliateCard
              title={review.data.title}
              brand={review.data.brand}
              price={review.data.price}
              rating={review.data.rating}
              description={review.data.description}
              image={review.data.heroImage}
              affiliateUrl={review.data.affiliateUrl}
              merchant={review.data.merchant}
              slug={review.data.slug}
              featured={review.data.featured}
            />
          ))}
        </div>
      </div>
    )}
  </div>
</BaseLayout>
```

## src/pages/arter/index.astro
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';

const species = await getCollection('species');
---

<BaseLayout
  title="Fiskarter i Sverige: guider och tips"
  description="Guider till Sveriges vanligaste sportfiskarter. Lär dig om biologi, bästa säsong och rätt teknik."
  pageType="species-index"
>
  <div class="pt-28 pb-20 px-4 sm:px-6 max-w-[1280px] mx-auto">
    <div class="mb-12">
      <p class="text-stone text-sm font-medium uppercase tracking-wider mb-3">Fiskarter</p>
      <h1 class="font-display text-4xl sm:text-5xl font-bold text-deep mb-4">Svenska sportfiskarter</h1>
      <p class="text-stone text-lg max-w-2xl leading-relaxed">Biologi, bästa säsong, rekommenderade tekniker och utrustning för varje art.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {species.map((s) => (
        <a
          href={`/arter/${s.data.slug}/`}
          class="group bg-white rounded-2xl overflow-hidden border border-mist hover:border-pine/20 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
        >
          <div class="aspect-[4/3] bg-mist overflow-hidden">
            <div
              class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={`background-image: url('${s.data.heroImage}'); background-color: #E8E4DC;`}
              role="img"
              aria-label={s.data.title}
            ></div>
          </div>
          <div class="p-5">
            <h2 class="font-display font-bold text-deep text-xl mb-2 group-hover:text-pine transition-colors capitalize">{s.data.title}</h2>
            <p class="text-stone text-sm leading-relaxed line-clamp-2 mb-3">{s.data.excerpt ?? s.data.description}</p>
            <p class="text-stone/70 text-xs"><span class="font-medium">Säsong:</span> {s.data.season.split('(')[0]?.trim()}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
</BaseLayout>
```

## src/pages/cookiepolicy.astro
```
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="Cookiepolicy"
  description="Information om hur Strömkast använder cookies och hur du hanterar dina inställningar."
  pageType="legal"
>
  <div class="pt-28 pb-20 px-4 sm:px-6 max-w-[1280px] mx-auto">
    <div class="max-w-[72ch] space-y-10 text-stone">

      <div>
        <h1 class="font-display text-4xl font-bold text-deep mb-4">Cookiepolicy</h1>
        <p class="text-sm text-stone/60">Senast uppdaterad: maj 2026</p>
      </div>

      <div class="space-y-4 leading-relaxed">
        <p>Strömkast.se använder ett begränsat antal cookies och liknande spårningstekniker. Den här sidan förklarar vilka de är, varför vi använder dem och hur du kan hantera eller avaktivera dem.</p>
      </div>

      <div class="space-y-4">
        <h2 class="font-display text-2xl font-bold text-deep">Vad är cookies?</h2>
        <p class="leading-relaxed">En cookie är en liten textfil som lagras i din webbläsare när du besöker en webbplats. Cookies används för att webbplatsen ska fungera korrekt, för att förstå hur besökare använder sajten och för att spåra om en länk lett till ett köp.</p>
      </div>

      <div class="space-y-6">
        <h2 class="font-display text-2xl font-bold text-deep">Cookies vi använder</h2>

        <div class="bg-white border border-mist rounded-2xl p-6 space-y-3">
          <h3 class="font-semibold text-deep">Google Tag Manager</h3>
          <p class="text-sm leading-relaxed">Vi använder Google Tag Manager (GTM) för att hantera och läsa in analysskript. GTM i sig lagrar ingen information om dig, men aktiverar övriga spårningsverktyg nedan när du godkänner cookies.</p>
          <p class="text-sm"><span class="text-stone/60">Leverantör:</span> Google LLC</p>
        </div>

        <div class="bg-white border border-mist rounded-2xl p-6 space-y-3">
          <h3 class="font-semibold text-deep">Google Analytics 4</h3>
          <p class="text-sm leading-relaxed">GA4 samlar in anonymiserad information om hur besökare använder sajten: vilka sidor som besöks, hur länge man stannar och ungefärlig geografisk plats (land/region). Ingen information kopplas till en identifierbar person. Vi använder dessa uppgifter för att förbättra innehållet på Strömkast.</p>
          <p class="text-sm"><span class="text-stone/60">Leverantör:</span> Google LLC</p>
          <p class="text-sm"><span class="text-stone/60">Lagringstid:</span> upp till 14 månader</p>
        </div>

        <div class="bg-white border border-mist rounded-2xl p-6 space-y-3">
          <h3 class="font-semibold text-deep">Affiliate-spårning</h3>
          <p class="text-sm leading-relaxed">Strömkast samarbetar med affiliate-nätverk för att finansiera sajten. När du klickar på en produktlänk kan en spårningscookie sättas av nätverket för att registrera att klicket kom från Strömkast. Om du sedan genomför ett köp får vi en liten provision utan att det påverkar ditt pris. Inga personuppgifter delas med oss, bara att ett köp genomförts.</p>
          <p class="text-sm"><span class="text-stone/60">Nätverk:</span> Tradedoubler, Adtraction</p>
          <p class="text-sm"><span class="text-stone/60">Lagringstid:</span> vanligtvis 30 dagar</p>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="font-display text-2xl font-bold text-deep">Inga reklamcookies</h2>
        <p class="leading-relaxed">Vi använder inga cookies för riktad reklam. Vi säljer inte besöksdata till tredje part.</p>
      </div>

      <div class="space-y-4">
        <h2 class="font-display text-2xl font-bold text-deep">Ditt val</h2>
        <p class="leading-relaxed">När du besöker Strömkast för första gången visas en banner där du kan godkänna eller neka cookies. Analysspårning via GA4 och GTM aktiveras bara om du väljer "Godkänn". Affiliate-spårning kan aktiveras när du klickar en produktlänk oavsett val, eftersom den hanteras av det externa nätverket.</p>
        <p class="leading-relaxed">Du kan när som helst återkalla ditt val genom att rensa webbläsarens localStorage eller cookies, varvid bannern visas igen vid nästa besök.</p>
      </div>

      <div class="space-y-4">
        <h2 class="font-display text-2xl font-bold text-deep">Hantera cookies i din webbläsare</h2>
        <p class="leading-relaxed">Du kan blockera eller radera cookies direkt i din webbläsares inställningar. Observera att vissa funktioner på sajten kan sluta fungera om cookies blockeras helt.</p>
        <ul class="list-disc list-inside space-y-1 text-sm">
          <li><a href="https://support.google.com/chrome/answer/95647" class="underline hover:text-deep transition-colors" target="_blank" rel="noopener">Chrome</a></li>
          <li><a href="https://support.mozilla.org/sv/kb/aktivera-och-avaktivera-kakor" class="underline hover:text-deep transition-colors" target="_blank" rel="noopener">Firefox</a></li>
          <li><a href="https://support.apple.com/sv-se/guide/safari/sfri11471/mac" class="underline hover:text-deep transition-colors" target="_blank" rel="noopener">Safari</a></li>
        </ul>
      </div>

      <div class="space-y-4">
        <h2 class="font-display text-2xl font-bold text-deep">Kontakt</h2>
        <p class="leading-relaxed">Frågor om hur vi hanterar cookies besvaras via <a href={`mailto:${'rikard.giby' + '@' + 'gmail.com'}`} class="underline hover:text-deep transition-colors">e-post</a>.</p>
      </div>

    </div>
  </div>
</BaseLayout>
```

## src/pages/destinationer/[slug].astro
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import AffiliateCard from '../../components/AffiliateCard.astro';
import DestinationMap from '../../components/DestinationMap.tsx';
import { getCollection, render } from 'astro:content';
import {
  fetchSMHIForCoords,
  getMoonPhase,
  getBiteScore,
  windDirLabel,
  DOT_COLOR,
  DOT_BG,
} from '../../lib/smhi';

export async function getStaticPaths() {
  const destinations = await getCollection('destinations');
  return destinations.map((dest) => ({
    params: { slug: dest.id },
    props: { destination: dest },
  }));
}

const { destination } = Astro.props;
const d = destination.data;
const { Content } = await render(destination);

const allReviews = await getCollection('gear-reviews');
const recommendedReviews = allReviews.filter((r) =>
  d.recommendedGear.includes(r.data.slug)
);

// SMHI-data och betningsindikator
const now = new Date();
const moon = getMoonPhase(now);
const smhi = await fetchSMHIForCoords(d.lat, d.lng);
const bite = smhi
  ? getBiteScore(smhi.airTemp, smhi.windSpeed, moon.illumination)
  : null;

const waterTypeLabels: Record<string, string> = {
  lake: 'Sjö',
  river: 'Älv / Å',
  coastal: 'Kustvatten',
  stream: 'Bäck',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://stromkast.se/' },
    { '@type': 'ListItem', position: 2, name: 'Destinationer', item: 'https://stromkast.se/destinationer/' },
    { '@type': 'ListItem', position: 3, name: d.title, item: `https://stromkast.se/destinationer/${d.slug}/` },
  ],
};

const destinationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: d.title,
  description: d.description,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: d.lat,
    longitude: d.lng,
  },
  touristType: 'Sportfiskare',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: `Var kan man köpa fiskekort till ${d.title}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Fiskekort till ${d.title} köps via iFiske. Följ länken på sidan för aktuella priser och regler.`,
      },
    },
    {
      '@type': 'Question',
      name: `Vilka fiskar finns i ${d.title}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `De vanligaste arterna i ${d.title} är ${d.primarySpecies.join(', ')}.`,
      },
    },
    {
      '@type': 'Question',
      name: `Vilken utrustning rekommenderas för ${d.title}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `För fiske i ${d.title} rekommenderas utrustning anpassad för ${d.primarySpecies[0] ?? 'lokala arter'}. Se vår utrustningsguide ovan för specifika rekommendationer.`,
      },
    },
  ],
};
---

<BaseLayout
  title={`Fiska ${d.title}: guide, tips och fiskekort`}
  description={d.description}
  ogImage={d.heroImage}
  schema={[breadcrumbSchema, destinationSchema, faqSchema]}
  pageType="destination"
>
  <!-- Breadcrumb -->
  <nav class="pt-24 px-4 sm:px-6 max-w-[1280px] mx-auto" aria-label="Brödsmulor">
    <ol class="flex items-center gap-2 text-sm text-stone">
      <li><a href="/" class="hover:text-pine transition-colors">Hem</a></li>
      <li aria-hidden="true"><span class="text-stone/40">/</span></li>
      <li><a href="/destinationer/" class="hover:text-pine transition-colors">Destinationer</a></li>
      <li aria-hidden="true"><span class="text-stone/40">/</span></li>
      <li class="text-deep font-medium" aria-current="page">{d.title}</li>
    </ol>
  </nav>

  <!-- Hero -->
  <div class="relative h-[50vh] min-h-[360px] mt-4 overflow-hidden bg-pine">
    <div
      class="absolute inset-0 bg-cover bg-center"
      style={`background-image: url('${d.heroImage}'); background-color: #1F3A2E;`}
      role="img"
      aria-label={`${d.title}, fiskevatten`}
    ></div>
    <div class="absolute inset-0 bg-gradient-to-t from-deep/80 to-transparent"></div>
    <div class="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-10 max-w-[1280px] mx-auto">
      <div class="flex flex-wrap gap-2 mb-3">
        {d.primarySpecies.map((s: string) => (
          <span class="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">{s}</span>
        ))}
      </div>
      <h1 class="font-display text-4xl sm:text-5xl font-bold text-white mb-2">{d.title}</h1>
      <p class="text-white/70 text-sm">{d.län} &middot; {waterTypeLabels[d.waterType]}</p>
    </div>
  </div>

  <div class="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">

    <!-- Live conditions bar -->
    <div class="bg-mist rounded-2xl p-5 flex items-center gap-4 mb-12 border border-mist">
      {bite ? (
        <>
          <span class={`w-2.5 h-2.5 rounded-full shrink-0 ${DOT_COLOR[bite.color]}`} aria-hidden="true"></span>
          <div>
            <p class="text-deep text-sm font-semibold">Förhållanden just nu</p>
            <p class="text-stone text-xs mt-0.5">
              {smhi && smhi.airTemp !== null ? `Lufttemp: ${smhi.airTemp.toFixed(1)}°C · ` : ''}
              {smhi && smhi.windSpeed !== null ? `Vind: ${smhi.windSpeed.toFixed(1)} m/s ${windDirLabel(smhi.windDir)} · ` : ''}
              <a href="/forhallanden/" class="text-sky underline hover:text-pine">Se fullständig rapport</a>
            </p>
          </div>
          <div class="ml-auto text-right hidden sm:block shrink-0">
            <span class={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${DOT_BG[bite.color]}`}>
              <span class={`w-2 h-2 rounded-full ${DOT_COLOR[bite.color]}`}></span>
              {bite.label}
            </span>
            {smhi && <p class="text-stone/50 text-xs mt-1">SMHI: {smhi.stationName}</p>}
          </div>
        </>
      ) : (
        <>
          <span class="w-2.5 h-2.5 rounded-full bg-stone/30 shrink-0" aria-hidden="true"></span>
          <div>
            <p class="text-deep text-sm font-semibold">Förhållanden just nu</p>
            <p class="text-stone text-xs mt-0.5">
              Väderdata saknas för detta vatten. <a href="/forhallanden/" class="text-sky underline hover:text-pine">Se fullständig rapport</a>
            </p>
          </div>
        </>
      )}
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- Main content -->
      <div class="lg:col-span-2">
        <h2 class="font-display text-2xl font-bold text-deep mb-6">Om {d.title}</h2>
        <div class="prose prose-sm max-w-[72ch] text-deep/80 leading-relaxed">
          <Content />
        </div>

        <!-- FAQ -->
        <div class="mt-16">
          <h2 class="font-display text-2xl font-bold text-deep mb-6">Vanliga frågor</h2>
          <div class="space-y-4">
            {faqSchema.mainEntity.map((q) => (
              <details class="bg-white border border-mist rounded-2xl p-5 group">
                <summary class="font-semibold text-deep cursor-pointer list-none flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine rounded-xl">
                  {q.name}
                  <svg class="shrink-0 transition-transform group-open:rotate-180" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </summary>
                <p class="mt-3 text-stone text-sm leading-relaxed">{q.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <aside>
        <!-- Buy fishing license CTA -->
        <div class="bg-pine text-white rounded-2xl p-6 mb-6">
          <h3 class="font-display font-bold text-xl mb-2">Köp fiskekort</h3>
          <p class="text-white/70 text-sm mb-5 leading-relaxed">Fiskekort till {d.title} köps via iFiske. Smidigt, digitalt och giltigt direkt.</p>
          <a
            href={d.iFiskeUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 w-full bg-white text-pine font-bold text-sm px-5 py-3 rounded-full hover:bg-mist transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Köp via iFiske
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>

        <!-- Leaflet map -->
        <div class="rounded-2xl overflow-hidden aspect-square mb-6">
          <DestinationMap lat={d.lat} lng={d.lng} title={d.title} client:only="react" />
        </div>
      </aside>
    </div>

    <!-- Recommended gear -->
    {recommendedReviews.length > 0 && (
      <div class="mt-16">
        <h2 class="font-display text-2xl font-bold text-deep mb-2">Rekommenderad utrustning</h2>
        <p class="text-stone text-sm mb-8">Testad och rekommenderad utrustning för fiske i {d.title}.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedReviews.map((review) => (
            <AffiliateCard
              title={review.data.title}
              brand={review.data.brand}
              price={review.data.price}
              rating={review.data.rating}
              description={review.data.description}
              image={review.data.heroImage}
              affiliateUrl={review.data.affiliateUrl}
              merchant={review.data.merchant}
              slug={review.data.slug}
              featured={review.data.featured}
            />
          ))}
        </div>
      </div>
    )}
  </div>
</BaseLayout>
```

## src/pages/destinationer/index.astro
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';

const destinations = await getCollection('destinations');
---

<BaseLayout
  title="Fiskedestinationer i Sverige"
  description="Guider till Sveriges bästa fiskevatten, från Vänern och Vättern till Mörrum och Storsjön. Hitta rätt destination för din fiskestil."
  pageType="destination-index"
>
  <div class="pt-28 pb-20 px-4 sm:px-6 max-w-[1280px] mx-auto">
    <div class="mb-12">
      <p class="text-stone text-sm font-medium uppercase tracking-wider mb-3">Destinationer</p>
      <h1 class="font-display text-4xl sm:text-5xl font-bold text-deep mb-4">Sveriges fiskevatten</h1>
      <p class="text-stone text-lg max-w-2xl leading-relaxed">Från Blekinges världsberömda laxälvar till Jämtlands arktiska fjällvatten. Här är guider till landets bästa fiskemål.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map((dest) => (
        <a
          href={`/destinationer/${dest.data.slug}/`}
          class="group bg-white rounded-2xl overflow-hidden border border-mist hover:border-pine/20 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
        >
          <div class="aspect-[16/9] bg-mist overflow-hidden">
            <div
              class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={`background-image: url('${dest.data.heroImage}'); background-color: #E8E4DC;`}
              role="img"
              aria-label={dest.data.title}
            ></div>
          </div>
          <div class="p-5">
            <p class="text-stone text-xs font-medium uppercase tracking-wider mb-1">{dest.data.län}</p>
            <h2 class="font-display font-bold text-deep text-xl mb-2 group-hover:text-pine transition-colors">{dest.data.title}</h2>
            <p class="text-stone text-sm leading-relaxed line-clamp-2 mb-3">{dest.data.excerpt ?? dest.data.description}</p>
            <div class="flex flex-wrap gap-1.5">
              {dest.data.primarySpecies.slice(0, 3).map((s: string) => (
                <span class="bg-mist text-stone text-xs px-2.5 py-1 rounded-full">{s}</span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</BaseLayout>
```

## src/pages/forhallanden/index.astro
```
---
/**
 * src/pages/forhallanden/index.astro
 *
 * Fiskeförhållanden just nu.
 * Hämtar SMHI-data för alla destinationer vid byggtid.
 * Stationsmatchning sker automatiskt via koordinater (smhi-stations.json).
 */

import BaseLayout from '../../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';
import {
  fetchSMHIForCoords,
  getMoonPhase,
  getBiteScore,
  windDirLabel,
  DOT_COLOR,
  DOT_BG,
} from '../../lib/smhi';

const destinations = await getCollection('destinations');
const now   = new Date();
const moon  = getMoonPhase(now);
const month = now.getMonth() + 1;

const waterTypeLabels: Record<string, string> = {
  lake:    'Sjö',
  river:   'Älv / Å',
  coastal: 'Kustvatten',
  stream:  'Bäck',
};

const regionData = await Promise.all(
  destinations.map(async (dest) => {
    const d    = dest.data;
    const smhi = await fetchSMHIForCoords(d.lat, d.lng);
    const bite = getBiteScore(smhi.airTemp, smhi.windSpeed, moon.illumination, d.primarySpecies, month);
    return {
      slug:        d.slug,
      name:        d.title,
      waterBody:   waterTypeLabels[d.waterType] ?? d.waterType,
      primarySpecies: d.primarySpecies,
      airTemp:     smhi.airTemp,
      windSpeed:   smhi.windSpeed,
      windDir:     smhi.windDir,
      humidity:    smhi.humidity,
      stationName: smhi.stationName,
      bite,
      error:       smhi.error,
    };
  })
);

// Sortera: bäst betning först, sedan felaktiga sist
regionData.sort((a, b) => {
  if (a.error && !b.error) return 1;
  if (!a.error && b.error) return -1;
  return b.bite.score - a.bite.score;
});

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hem',         item: 'https://stromkast.se/' },
    { '@type': 'ListItem', position: 2, name: 'Förhållanden', item: 'https://stromkast.se/forhallanden/' },
  ],
};

const fmt = (val: number | null, decimals = 1, unit = '') =>
  val !== null ? `${val.toFixed(decimals)}${unit}` : '–';
---

<BaseLayout
  title="Fiskeförhållanden just nu – väder och betning för svenska vatten"
  description="Aktuell lufttemperatur, vind och betningsindikator för Sveriges fiskevatten. Data från SMHI:s öppna API, uppdateras vid varje bygge."
  schema={breadcrumbSchema}
  pageType="article"
>

  <!-- Sidhuvud -->
  <div class="pt-28 pb-6 px-4 sm:px-6 max-w-[1280px] mx-auto">

    <nav aria-label="Brödsmulor" class="mb-8">
      <ol class="flex items-center gap-2 text-sm text-stone">
        <li><a href="/" class="hover:text-pine transition-colors">Hem</a></li>
        <li aria-hidden="true"><span class="text-stone/40">/</span></li>
        <li class="text-deep font-medium" aria-current="page">Förhållanden</li>
      </ol>
    </nav>

    <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
      <div>
        <p class="text-stone text-sm font-medium uppercase tracking-wider mb-2">Live data · SMHI</p>
        <h1 class="font-display text-4xl sm:text-5xl font-bold text-deep leading-tight">
          Förhållanden just nu
        </h1>
        <p class="text-stone text-base mt-3 max-w-xl leading-relaxed">
          Lufttemperatur, vind och betningsindikator för Sveriges fiskevatten. Närmaste SMHI-station väljs automatiskt per destination. Uppdateras vid varje bygge.
        </p>
      </div>

      <!-- Månfas -->
      <div class="flex-shrink-0 bg-white border border-mist rounded-2xl px-6 py-4 flex items-center gap-4 shadow-sm">
        <span class="text-4xl" role="img" aria-label={moon.name}>{moon.emoji}</span>
        <div>
          <p class="text-xs text-stone uppercase tracking-wider font-medium mb-0.5">Månfas</p>
          <p class="font-display font-bold text-deep text-lg leading-none">{moon.name}</p>
          <p class="text-stone text-xs mt-1">{moon.illumination}% belyst</p>
        </div>
      </div>
    </div>

    <!-- Förklaringsnot -->
    <div class="bg-mist/60 border border-mist rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3 mb-10 text-sm text-stone">
      <div class="flex items-center gap-3 shrink-0">
        {(['green','amber','stone'] as const).map((color) => {
          const labels = { green: 'Toppläge', amber: 'Värt att testa', stone: 'Trögt' };
          return (
            <span class={`inline-flex items-center gap-1.5 font-medium px-2.5 py-1 rounded-full text-xs border ${DOT_BG[color]}`}>
              <span class={`w-2 h-2 rounded-full ${DOT_COLOR[color]} inline-block`}></span>
              {labels[color]}
            </span>
          );
        })}
      </div>
      <p class="text-stone/80">
        Betningsindikatorn väger samman temperatur, vind, månfas och säsong per art. Den ersätter inte lokal kunskap.
      </p>
    </div>
  </div>

  <!-- Destinationskort -->
  <section class="px-4 sm:px-6 max-w-[1280px] mx-auto pb-20">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {regionData.map((region) => (
        <article class="bg-white border border-mist rounded-2xl overflow-hidden hover:border-pine/20 hover:shadow-md transition-all">

          <div class="px-6 pt-6 pb-4 flex items-start justify-between gap-4">
            <div>
              <p class="text-stone text-xs font-medium uppercase tracking-wider mb-1">{region.waterBody}</p>
              <h2 class="font-display font-bold text-deep text-xl leading-tight">{region.name}</h2>
              <div class="flex flex-wrap gap-1.5 mt-2">
                {region.primarySpecies.slice(0, 3).map((art) => (
                  <span class="bg-mist text-stone text-xs px-2 py-0.5 rounded-full capitalize">{art}</span>
                ))}
              </div>
            </div>

            <div class={`shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${DOT_BG[region.bite.color]}`}>
              <span class={`w-2 h-2 rounded-full ${DOT_COLOR[region.bite.color]}`}></span>
              {region.bite.label}
            </div>
          </div>

          <div class="border-t border-mist mx-6"></div>

          {region.error ? (
            <div class="px-6 py-5 text-stone text-sm">
              Data kunde inte hämtas från SMHI just nu.
            </div>
          ) : (
            <div class="px-6 py-5 grid grid-cols-2 gap-y-4 gap-x-6">
              <div>
                <p class="text-stone text-xs uppercase tracking-wider font-medium mb-0.5">Lufttemp.</p>
                <p class="font-display font-bold text-deep text-2xl leading-none">{fmt(region.airTemp, 1, '°')}</p>
              </div>
              <div>
                <p class="text-stone text-xs uppercase tracking-wider font-medium mb-0.5">Vind</p>
                <p class="font-display font-bold text-deep text-2xl leading-none">{fmt(region.windSpeed, 1, ' m/s')}</p>
                <p class="text-stone text-xs mt-0.5">
                  {region.windDir !== null ? windDirLabel(region.windDir) : ''}
                </p>
              </div>
              <div>
                <p class="text-stone text-xs uppercase tracking-wider font-medium mb-0.5">Fuktighet</p>
                <p class="text-deep text-sm font-semibold">{fmt(region.humidity, 0, '%')}</p>
              </div>
              <div>
                <p class="text-stone text-xs uppercase tracking-wider font-medium mb-0.5">Säsong</p>
                <p class="text-deep text-sm font-semibold">
                  {region.bite.score >= 68 ? 'Högsäsong' : region.bite.score >= 42 ? 'Mellansäsong' : 'Lågsäsong'}
                </p>
              </div>
            </div>
          )}

          <div class="px-6 pb-6 flex items-center justify-between gap-4">
            <a
              href={`/destinationer/${region.slug}/`}
              class="inline-flex items-center gap-1.5 text-sky text-sm font-medium hover:text-pine transition-colors"
            >
              Guide till {region.name}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <span class="text-stone/50 text-xs">SMHI: {region.stationName}</span>
          </div>
        </article>
      ))}
    </div>

    <!-- Om datan -->
    <div class="mt-16 bg-white border border-mist rounded-2xl px-8 py-8 max-w-2xl">
      <h2 class="font-display font-bold text-deep text-xl mb-4">Om datan</h2>
      <div class="space-y-3 text-stone text-sm leading-relaxed">
        <p>
          Väderdata hämtas från <a href="https://opendata.smhi.se/" target="_blank" rel="noopener noreferrer" class="text-sky underline hover:text-pine">SMHI:s öppna API</a> (Creative Commons CC BY 4.0). Närmaste aktiva mätstation väljs automatiskt för varje destination baserat på koordinater.
        </p>
        <p>
          Betningsindikatorn väger samman lufttemperatur, vind, månfas och förväntad säsongsaktivitet per art. Den är ett riktmärke, inte en garanti. Lokal kunskap väger alltid tyngre.
        </p>
        <p>
          Senast uppdaterad: {now.toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}.
        </p>
      </div>
    </div>
  </section>

</BaseLayout>
```

## src/pages/guider/[slug].astro
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { getCollection, render } from 'astro:content';

export async function getStaticPaths() {
  const articles = await getCollection('articles');
  return articles.map((article) => ({
    params: { slug: article.data.slug },
    props: { article },
  }));
}

const { article } = Astro.props;
const { Content, headings } = await render(article);
const d = article.data;

const authors = await getCollection('authors');
const author = authors.find((a) => a.data.slug === d.author);

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: d.title,
  description: d.description,
  image: d.heroImage,
  datePublished: d.publishedAt,
  dateModified: d.updatedAt,
  author: author ? {
    '@type': 'Person',
    name: author.data.name,
    url: `https://stromkast.se/om/`,
  } : undefined,
  publisher: {
    '@type': 'Organization',
    name: 'Strömkast',
    logo: { '@type': 'ImageObject', url: 'https://stromkast.se/images/logo.svg' },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://stromkast.se/' },
    { '@type': 'ListItem', position: 2, name: 'Guider', item: 'https://stromkast.se/guider/' },
    { '@type': 'ListItem', position: 3, name: d.title, item: `https://stromkast.se/guider/${d.slug}/` },
  ],
};

const faqSchema = d.faq && d.faq.length > 0 ? {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: d.faq.map((item: { q: string; a: string }) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
} : null;

const h2headings = headings.filter((h) => h.depth === 2);
---

<BaseLayout
  title={d.title}
  description={d.description}
  ogImage={d.heroImage}
  schema={[articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])]}
  pageType="article"
>
  <!-- Breadcrumb -->
  <nav class="pt-24 px-4 sm:px-6 max-w-[1280px] mx-auto" aria-label="Brödsmulor">
    <ol class="flex items-center gap-2 text-sm text-stone">
      <li><a href="/" class="hover:text-pine transition-colors">Hem</a></li>
      <li aria-hidden="true"><span class="text-stone/40">/</span></li>
      <li><a href="/guider/" class="hover:text-pine transition-colors">Guider</a></li>
      <li aria-hidden="true"><span class="text-stone/40">/</span></li>
      <li class="text-deep font-medium truncate max-w-[200px]" aria-current="page">{d.title}</li>
    </ol>
  </nav>

  <!-- Article hero -->
  <div class="mt-8 px-4 sm:px-6 max-w-[1280px] mx-auto">
    <div class="relative rounded-2xl overflow-hidden aspect-[2/1] bg-pine">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style={`background-image: url('${d.heroImage}'); background-color: #1F3A2E;`}
        role="img"
        aria-label={d.title}
      ></div>
      <div class="absolute inset-0 bg-gradient-to-t from-deep/80 to-transparent"></div>
    </div>
  </div>

  <div class="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
      <!-- TOC sidebar (desktop) -->
      {h2headings.length > 2 && (
        <aside class="hidden lg:block">
          <div class="sticky top-24">
            <p class="text-xs font-bold text-stone uppercase tracking-wider mb-4">Innehåll</p>
            <nav aria-label="Artikelinnehåll">
              <ul class="space-y-2">
                {h2headings.map((h) => (
                  <li>
                    <a
                      href={`#${h.slug}`}
                      class="text-sm text-stone hover:text-pine transition-colors leading-snug block py-0.5"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      )}

      <!-- Article body -->
      <article class={`${h2headings.length > 2 ? 'lg:col-span-3' : 'lg:col-span-3 lg:col-start-2'}`}>
        <header class="mb-10">
          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-deep leading-tight mb-4">
            {d.title}
          </h1>
          <p class="text-stone text-lg leading-relaxed mb-6">{d.description}</p>
          {author && (
            <div class="flex items-center gap-3 pt-6 border-t border-mist">
              <div class="w-10 h-10 rounded-full bg-mist overflow-hidden">
                <img src={author.data.photo} alt={author.data.name} class="w-full h-full object-cover" loading="lazy" onerror="this.style.display='none'" />
              </div>
              <div>
                <p class="text-deep text-sm font-semibold">{author.data.name}</p>
                <p class="text-stone text-xs">{d.publishedAt}</p>
              </div>
            </div>
          )}
        </header>

        <div class="prose prose-slate max-w-[72ch] text-deep/80 leading-relaxed
          prose-headings:font-display prose-headings:text-deep prose-headings:font-bold
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:mb-4 prose-p:leading-relaxed
          prose-a:text-sky prose-a:underline hover:prose-a:text-pine
          prose-strong:text-deep
          prose-ul:my-4 prose-li:mb-2
          prose-table:text-sm prose-table:border-collapse
          prose-th:bg-mist prose-th:px-3 prose-th:py-2 prose-th:border prose-th:border-mist prose-th:text-left
          prose-td:px-3 prose-td:py-2 prose-td:border prose-td:border-mist
        ">
          <Content />
        </div>

        <!-- FAQ -->
        {d.faq && d.faq.length > 0 && (
          <div class="mt-16">
            <h2 class="font-display text-2xl font-bold text-deep mb-6">Vanliga frågor</h2>
            <div class="space-y-4">
              {d.faq.map((item: { q: string; a: string }) => (
                <details class="bg-white border border-mist rounded-2xl p-5 group">
                  <summary class="font-semibold text-deep cursor-pointer list-none flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine rounded-xl">
                    {item.q}
                    <svg class="shrink-0 transition-transform group-open:rotate-180" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </summary>
                  <p class="mt-3 text-stone text-sm leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        <!-- Inline newsletter signup -->
        
        <!-- Author bio -->
        {author && (
          <div class="mt-12 bg-mist rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-start">
            <div class="w-16 h-16 rounded-full bg-stone/20 overflow-hidden shrink-0">
              <img src={author.data.photo} alt={author.data.name} class="w-full h-full object-cover" loading="lazy" onerror="this.style.display='none'" />
            </div>
            <div>
              <p class="font-display font-bold text-deep text-lg mb-1">{author.data.name}</p>
              <p class="text-stone text-sm leading-relaxed mb-3">{author.data.bio}</p>
              <div class="flex flex-wrap gap-1.5">
                {author.data.expertise.map((e: string) => (
                  <span class="bg-white text-stone text-xs px-2.5 py-1 rounded-full border border-mist">{e}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  </div>
</BaseLayout>
```

## src/pages/guider/index.astro
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';

const articles = await getCollection('articles');
const sorted = articles.sort((a, b) => b.data.publishedAt.localeCompare(a.data.publishedAt));

const categoryLabels: Record<string, string> = {
  destination: 'Destination',
  teknik: 'Teknik',
  utrustning: 'Utrustning',
  guide: 'Guide',
};
---

<BaseLayout
  title="Guider och reportage om sportfiske"
  description="Djupgående guider, reportage och tekniktips för svenska sportfiskare."
  pageType="article-index"
>
  <div class="pt-28 pb-20 px-4 sm:px-6 max-w-[1280px] mx-auto">
    <div class="mb-12">
      <p class="text-stone text-sm font-medium uppercase tracking-wider mb-3">Redaktionen</p>
      <h1 class="font-display text-4xl sm:text-5xl font-bold text-deep mb-4">Guider & Reportage</h1>
      <p class="text-stone text-lg max-w-2xl leading-relaxed">Välskrivna guider om destinationer, teknik och utrustning, av fiskare som faktiskt har fiskat.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sorted.map((article) => (
        <a
          href={`/guider/${article.data.slug}/`}
          class="group bg-white rounded-2xl overflow-hidden border border-mist hover:border-pine/20 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
        >
          <div class="aspect-[16/9] bg-mist overflow-hidden">
            <div
              class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={`background-image: url('${article.data.heroImage}'); background-color: #E8E4DC;`}
              role="img"
              aria-label={article.data.title}
            ></div>
          </div>
          <div class="p-5">
            <span class="inline-block bg-mist text-stone text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide mb-3">
              {categoryLabels[article.data.category]}
            </span>
            <h2 class="font-display font-bold text-deep text-xl leading-snug mb-2 group-hover:text-pine transition-colors">{article.data.title}</h2>
            <p class="text-stone text-sm leading-relaxed line-clamp-2">{article.data.excerpt ?? article.data.description}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
</BaseLayout>
```

## src/pages/index.astro
```
---
/**
 * src/pages/index.astro
 *
 * Startsida med interaktiv fiskekarta.
 * SMHI-data och betningspoäng beräknas vid byggtid.
 * FiskeKarta-komponenten renderas client-side med Leaflet.
 */

import BaseLayout from '../layouts/BaseLayout.astro';
import NewsletterForm from '../components/NewsletterForm.astro';
import FiskeKarta from '../components/FiskeKarta.tsx';
import { getCollection } from 'astro:content';
import { getImage } from 'astro:assets';
import { Image } from 'astro:assets';
import {
  
  fetchSMHIForCoords,
  getMoonPhase,
  getBiteScore,
  
  windDirLabel,
} from '../lib/smhi';

import heroSrc from '../assets/images/hero-home.jpg';

const articles = (await getCollection('articles')).slice(0, 3);
const destinations = await getCollection('destinations');

const heroImg    = await getImage({ src: heroSrc, format: 'avif',  width: 1920, height: 1080, quality: 80 });
const heroImgWebP = await getImage({ src: heroSrc, format: 'webp', width: 1920, height: 1080, quality: 80 });

// ---------------------------------------------------------------------------
// Byggtids-SMHI-fetch för alla destinationer
// ---------------------------------------------------------------------------

const now   = new Date();
const moon  = getMoonPhase(now);
const month = now.getMonth() + 1;

const destinationPins = await Promise.all(
  destinations.map(async (dest) => {
    const d       = dest.data;
    const smhi = await fetchSMHIForCoords(d.lat, d.lng);
    const { airTemp, windSpeed, windDir, humidity, stationName, error } = smhi;

    const bite = getBiteScore(airTemp, windSpeed, moon.illumination, d.primarySpecies, month);

    return {
      slug:        d.slug,
      name:        d.title,
      excerpt:     d.excerpt ?? '',
      heroImage:   d.heroImage ?? '',
      waterType:   d.waterType ?? '',
      iFiskeUrl:   d.iFiskeUrl ?? '',
      region:      d.län,
      lat:         d.lat,
      lng:         d.lng,
      species:     d.primarySpecies,
      airTemp,
      windSpeed,
      windDir:     windDirLabel(windDir),
      humidity,
      stationName,
      biteLabel:   bite.label,
      biteColor:   bite.color,
      biteScore:   bite.score,
      error,
    };
  })
);

const categoryLabels: Record<string, string> = {
  destination: 'Destination',
  teknik:      'Teknik',
  utrustning:  'Utrustning',
  guide:       'Guide',
};
---

<BaseLayout
  title="Sveriges modernaste fiskeguide"
  description="Strömkast är den svenska sportfiskarens guide till destinationer, utrustning och teknik. Hitta rätt plats, rätt spö och rätt metod."
  pageType="home"
  transparentHeader={true}
>

  <!-- ==============================
       HERO
  ============================== -->
  <section class="relative min-h-[90vh] flex items-end pb-20 overflow-hidden bg-pine">
    <div class="absolute inset-0 bg-gradient-to-b from-pine/40 via-pine/30 to-deep/90 z-10"></div>
    <picture aria-hidden="true" class="absolute inset-0">
      <source srcset={heroImg.src} type="image/avif" />
      <source srcset={heroImgWebP.src} type="image/webp" />
      <img
        src={heroImgWebP.src}
        alt=""
        class="w-full h-full object-cover object-center"
        width="1920"
        height="1080"
        fetchpriority="high"
        decoding="async"
      />
    </picture>

    <div class="absolute bottom-0 left-0 right-0 h-32 z-10" aria-hidden="true">
      <svg viewBox="0 0 1440 128" preserveAspectRatio="none" class="w-full h-full fill-paper">
        <path d="M0,64 C240,128 480,0 720,64 C960,128 1200,0 1440,64 L1440,128 L0,128 Z"/>
      </svg>
    </div>

    <div class="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 w-full">
      <div class="max-w-2xl">
        <div class="flex flex-wrap gap-3 mb-8">
          <span class="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M6 1C4.3 1 3 2.3 3 4c0 2.5 3 7 3 7s3-4.5 3-7c0-1.7-1.3-3-3-3Z"/>
              <circle cx="6" cy="4" r="1" fill="currentColor" stroke="none"/>
            </svg>
            Svenska fiskevatten
          </span>
          <span class="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M2 1.5h8a.5.5 0 01.5.5v8a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V2a.5.5 0 01.5-.5Z"/>
              <path d="M3.5 4.5h5M3.5 6.5h5M3.5 8.5h3"/>
            </svg>
            Gratis fiskeguide
          </span>
          <span class="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M2 10c0-2 1.5-3 2.5-3.5"/>
              <path d="M3 5.5C3.5 3 5 2 6 2s2.5 1 3 3.5c.3 1.5-.5 2.5-1 3-.3.3-.7.5-1 .7"/>
              <path d="M9 9c.5-.8.8-1.8.5-3"/>
              <path d="M6 10v-1"/>
            </svg>
            Byggt av sportfiskare
          </span>
        </div>

        <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
          Sveriges<br/>modernaste<br/>fiskeguide
        </h1>
        <p class="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
          Destinationsguider, utrustningstest och levande förhållanden. Byggt av svenska sportfiskare för svenska sportfiskare.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href="/nappkalender/"
            class="inline-flex items-center justify-center gap-2 bg-rust text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-copper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Öppna nappkalendern
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a
            href="/destinationer/"
            class="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold text-base px-8 py-4 rounded-full border border-white/30 hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Utforska destinationer
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ==============================
       FISKEKARTA (ersätter Destinations + Bite Indicator)
  ============================== -->
  <section class="py-20 px-4 sm:px-6 overflow-x-hidden">
    <div class="max-w-[1280px] mx-auto">
      <div class="flex items-end justify-between mb-8">
        <div>
          <p class="text-stone text-sm font-medium uppercase tracking-wider mb-2">Live data · SMHI</p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold text-deep">Vad biter just nu?</h2>
          <p class="text-stone text-sm mt-2 hidden sm:block">Klicka på en nål för snabbinfo. Klicka för guide till destinationen.</p>
          <p class="text-stone text-sm mt-2 sm:hidden">Klicka på en destination för ytterligare info.</p>
        </div>
        <a href="/destinationer/" class="hidden sm:inline-flex items-center gap-1.5 text-sky text-sm font-medium hover:text-pine transition-colors">
          Alla destinationer
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <FiskeKarta
        destinations={destinationPins}
        moonEmoji={moon.emoji}
        moonName={moon.name}
        client:only="react"
      />
    </div>
  </section>

  <!-- ==============================
       LATEST GUIDES
  ============================== -->
  <section class="py-20 px-4 sm:px-6 max-w-[1280px] mx-auto">
    <div class="flex items-end justify-between mb-10">
      <div>
        <p class="text-stone text-sm font-medium uppercase tracking-wider mb-2">Guider & Reportage</p>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-deep">Senaste från redaktionen</h2>
      </div>
      <a href="/guider/" class="hidden sm:inline-flex items-center gap-1.5 text-sky text-sm font-medium hover:text-pine transition-colors">
        Alla guider
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>

    {articles.length > 0 ? (
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {articles[0] && (
          <a
            href={`/guider/${articles[0].data.slug}/`}
            class="lg:col-span-3 group relative rounded-2xl overflow-hidden aspect-[16/9] lg:aspect-auto lg:min-h-[420px] bg-pine block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={`background-image: url('${articles[0].data.heroImage}'); background-color: #1F3A2E;`}
              aria-hidden="true"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-7">
              <span class="inline-block bg-rust text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide mb-3">
                {categoryLabels[articles[0].data.category]}
              </span>
              <h3 class="font-display text-white text-2xl sm:text-3xl font-bold leading-snug mb-2 group-hover:text-copper transition-colors">
                {articles[0].data.title}
              </h3>
              <p class="text-white/70 text-sm leading-relaxed line-clamp-2">{articles[0].data.description}</p>
            </div>
          </a>
        )}

        <div class="lg:col-span-2 flex flex-col gap-5">
          {articles.slice(1).map((article) => (
            <a
              href={`/guider/${article.data.slug}/`}
              class="group flex gap-4 bg-white rounded-2xl p-4 border border-mist hover:border-pine/20 hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
            >
              <div class="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-mist">
                <div
                  class="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={`background-image: url('${article.data.heroImage}'); background-color: #E8E4DC;`}
                  role="img"
                  aria-label={article.data.title}
                ></div>
              </div>
              <div class="flex-1 min-w-0">
                <span class="text-xs font-bold text-stone uppercase tracking-wide">{categoryLabels[article.data.category]}</span>
                <h3 class="font-display font-bold text-deep text-base leading-snug mt-1 mb-1.5 group-hover:text-pine transition-colors line-clamp-2">
                  {article.data.title}
                </h3>
                <p class="text-stone text-xs leading-relaxed line-clamp-2">{article.data.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    ) : (
      <p class="text-stone">Inga artiklar ännu.</p>
    )}
  </section>

  <!-- ==============================
       NAPPKALENDER TEASER
  ============================== -->
  <section class="py-20 px-4 sm:px-6 bg-pine text-white">
    <div class="max-w-[1280px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-white/60 text-sm font-medium uppercase tracking-widest mb-4">Fiskekalender 2026</p>
          <h2 class="font-display text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Nappkalendern<br/>dag för dag
          </h2>
          <p class="text-white/80 text-lg leading-relaxed mb-8">
            Daglig betningsindikator för gädda, abborre, gös, öring och fler. Baseras på säsong, månfas och SMHI-väderprognos. Filtrera på art och region.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="/nappkalender/"
              class="inline-flex items-center justify-center gap-2 bg-white text-pine font-bold text-base px-10 py-4 rounded-full hover:bg-mist transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Öppna nappkalendern
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a
              href="/spovaljaren/"
              class="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold text-base px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
            >
              Hitta rätt spö
            </a>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          {[
            { emoji: '🎣', title: 'Alla arter', desc: 'Gädda, abborre, gös, öring, lax, harr och röding.' },
            { emoji: '🗺️', title: 'Per region', desc: 'Mellansverige, södra, norra och fjällvärlden.' },
            { emoji: '🌕', title: 'Månfas', desc: 'Daglig variation synlig direkt i kalendern.' },
            { emoji: '☁️', title: 'SMHI-prognos', desc: 'Faktisk väderprognos för kommande 10 dygn.' },
          ].map(({ emoji, title, desc }) => (
            <div class="bg-white/10 border border-white/10 rounded-2xl p-5">
              <span class="text-2xl mb-3 block">{emoji}</span>
              <p class="font-semibold text-white text-sm mb-1">{title}</p>
              <p class="text-white/60 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  <!-- ==============================
       NEWSLETTER
  ============================== -->
  <section class="py-20 px-4 sm:px-6 overflow-x-hidden">
    <div class="max-w-xl mx-auto text-center">
      <NewsletterForm placement="footer" />
    </div>
  </section>

</BaseLayout>
```

## src/pages/nappkalender/[art].astro
```
---
/**
 * src/pages/nappkalender/[art].astro
 *
 * Artspecifik nappkalender -- veckovis betningsindikator för hela 2026.
 */

import BaseLayout from '../../layouts/BaseLayout.astro';
import {
  SPECIES,
  MONTHS_SV,
  MONTHS_SLUG,
  getWeekScores,
  getScoreLabel,
  getMoonData,
  MOON_PHASE_EMOJI,
  MOON_PHASE_LABELS,
} from '../../data/calendar'

export function getStaticPaths() {
  return SPECIES.map(sp => ({ params: { art: sp.slug } }));
}

const { art } = Astro.params;
const species = SPECIES.find(s => s.slug === art)!;
const year    = 2026;
const weeks   = getWeekScores(species, year);

// Månadsöversikt: snittpoäng per månad
const monthScores = Array.from({ length: 12 }, (_, i) => {
  const month      = i + 1;
  const monthWeeks = weeks.filter(w => w.month === month);
  const avg        = monthWeeks.length
    ? Math.round(monthWeeks.reduce((s, w) => s + w.totalScore, 0) / monthWeeks.length)
    : 0;
  return { month, score: avg, ...getScoreLabel(avg) };
});

// Aktuell vecka och månad
const now          = new Date();
const moon         = getMoonData(now);
const currentMonth = now.getMonth() + 1;
const currentWeek  = Math.ceil(((now.getTime() - new Date(`${year}-01-01`).getTime()) / 86400000 + 1) / 7);

// Topp 3 månader
const topMonths = [...monthScores].sort((a, b) => b.score - a.score).slice(0, 3);

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hem',          item: 'https://stromkast.se/' },
    { '@type': 'ListItem', position: 2, name: 'Nappkalender', item: 'https://stromkast.se/nappkalender/' },
    { '@type': 'ListItem', position: 3, name: species.name,   item: `https://stromkast.se/nappkalender/${species.slug}/` },
  ],
};

const COLOR_CLASSES = {
  green: 'bg-green-50 text-green-700 border-green-100',
  amber: 'bg-amber-50 text-amber-700 border-amber-100',
  stone: 'bg-stone/10 text-stone border-stone/20',
};

const DOT_CLASSES = {
  green: 'bg-green-500',
  amber: 'bg-amber-400',
  stone: 'bg-stone/40',
};

const BAR_CLASSES = {
  green: 'bg-green-500',
  amber: 'bg-amber-400',
  stone: 'bg-stone/25',
};
---

<BaseLayout
  title={`Nappkalender ${species.name} ${year} – bästa fisketiderna vecka för vecka`}
  description={`När nappar ${species.name.toLowerCase()}? Veckovis betningsindikator för ${year} baserat på säsong, vattentemperatur och månfas. Inkluderar fisketips per månad.`}
  schema={breadcrumbSchema}
  pageType="article"
>

  <!-- Sidhuvud -->
  <div class="pt-28 pb-6 px-4 sm:px-6 max-w-[1280px] mx-auto">

    <nav aria-label="Brödsmulor" class="mb-8">
      <ol class="flex items-center gap-2 text-sm text-stone">
        <li><a href="/" class="hover:text-pine transition-colors">Hem</a></li>
        <li aria-hidden="true"><span class="text-stone/40">/</span></li>
        <li><a href="/nappkalender/" class="hover:text-pine transition-colors">Nappkalender</a></li>
        <li aria-hidden="true"><span class="text-stone/40">/</span></li>
        <li class="text-deep font-medium" aria-current="page">{species.name}</li>
      </ol>
    </nav>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
      <div class="lg:col-span-2">
        <p class="text-stone text-sm font-medium uppercase tracking-wider mb-2">Nappkalender {year}</p>
        <h1 class="font-display text-4xl sm:text-5xl font-bold text-deep leading-tight mb-4">
          {species.name}
        </h1>
        <p class="text-stone/70 text-sm italic mb-4">{species.latin}</p>
        <p class="text-stone leading-relaxed max-w-xl">{species.description}</p>

        <!-- Biologiska fakta -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
          {[
            { label: 'Lektemperatur', val: species.spawningTemp },
            { label: 'Aktivt vid',    val: species.activeTemp },
            { label: 'Bästa månader', val: species.peakMonths.map(m => MONTHS_SV[m-1].slice(0,3)).join(', ') },
          ].map(({ label, val }) => (
            <div class="bg-mist/60 rounded-xl p-3">
              <p class="text-stone text-xs uppercase tracking-wider font-medium mb-1">{label}</p>
              <p class="text-deep text-sm font-semibold">{val}</p>
            </div>
          ))}
        </div>
      </div>

      <!-- Topp 3 månader + månfas -->
      <div class="flex flex-col gap-4">
        <div class="bg-white border border-mist rounded-2xl p-5">
          <p class="text-stone text-xs font-semibold uppercase tracking-wider mb-3">Bästa månader {year}</p>
          <div class="space-y-2">
            {topMonths.map((m, i) => {
              const colorCls = COLOR_CLASSES[m.color];
              const dotCls   = DOT_CLASSES[m.color];
              return (
                <a href={`/nappkalender/${species.slug}/${MONTHS_SLUG[m.month - 1]}/`} class="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <span class="text-sm font-bold text-stone/40 w-4">{i + 1}</span>
                  <span class="flex-1 text-sm font-semibold text-deep">{MONTHS_SV[m.month - 1]}</span>
                  <span class={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${colorCls}`}>
                    <span class={`w-1.5 h-1.5 rounded-full ${dotCls}`}></span>
                    {m.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <div class="bg-white border border-mist rounded-2xl p-5 flex items-center gap-4">
          <span class="text-3xl" role="img" aria-label={MOON_PHASE_LABELS[moon.phase]}>{MOON_PHASE_EMOJI[moon.phase]}</span>
          <div>
            <p class="text-xs text-stone uppercase tracking-wider font-medium mb-0.5">Månfas just nu</p>
            <p class="font-display font-bold text-deep text-base leading-none">{MOON_PHASE_LABELS[moon.phase]}</p>
            <p class="text-stone text-xs mt-1">{moon.illumination}% belyst</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Månadsöversikt med staplar -->
  <section class="px-4 sm:px-6 max-w-[1280px] mx-auto pb-12">
    <h2 class="font-display text-2xl font-bold text-deep mb-6">Månadsöversikt</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {monthScores.map(({ month, score, color, label }) => {
        const isNow    = month === currentMonth;
        const barCls   = BAR_CLASSES[color];
        const colorCls = COLOR_CLASSES[color];
        return (
          <a
            href={`/nappkalender/${species.slug}/${MONTHS_SLUG[month - 1]}/`}
            class={`bg-white border rounded-2xl p-4 hover:shadow-md transition-all ${isNow ? 'border-pine shadow-sm' : 'border-mist'}`}
          >
            <div class="flex items-center justify-between mb-2">
              <p class={`text-xs font-semibold uppercase tracking-wider ${isNow ? 'text-pine' : 'text-stone'}`}>
                {MONTHS_SV[month - 1].slice(0, 3)}
                {isNow && <span class="ml-1 text-pine">●</span>}
              </p>
              <span class="text-lg font-display font-bold text-deep">{score}</span>
            </div>
            <!-- Stapel -->
            <div class="h-1.5 bg-mist rounded-full overflow-hidden mb-2">
              <div class={`h-full rounded-full ${barCls} transition-all`} style={`width: ${score * 10}%`}></div>
            </div>
            <p class="text-xs text-stone">{label}</p>
          </a>
        );
      })}
    </div>
  </section>

  <!-- Veckokort -->
  <section class="px-4 sm:px-6 max-w-[1280px] mx-auto pb-12">
    <h2 class="font-display text-2xl font-bold text-deep mb-2">Veckokalender {year}</h2>
    <p class="text-stone text-sm mb-6">Betningsindikator per vecka baserat på säsong (70%) och månfas (30%).</p>

    <div class="space-y-6">
      {MONTHS_SV.map((monthName, mi) => {
        const month      = mi + 1;
        const monthWeeks = weeks.filter(w => w.month === month);
        const isNow      = month === currentMonth;
        return (
          <div>
            <div class="flex items-center gap-3 mb-3">
              <h3 class={`font-display font-bold text-lg ${isNow ? 'text-pine' : 'text-deep'}`}>{monthName}</h3>
              {isNow && <span class="text-xs bg-pine text-white px-2 py-0.5 rounded-full font-medium">Nu</span>}
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {monthWeeks.map(w => {
                const { label, color } = getScoreLabel(w.totalScore);
                const isCurrentWeek    = w.week === currentWeek;
                const barCls           = BAR_CLASSES[color];
                const colorCls         = COLOR_CLASSES[color];
                return (
                  <div class={`bg-white border rounded-xl p-3 ${isCurrentWeek ? 'border-pine ring-1 ring-pine' : 'border-mist'}`}>
                    <div class="flex items-center justify-between mb-1.5">
                      <span class="text-xs text-stone font-medium">Vecka {w.week}</span>
                      <span class="text-sm">{w.moonEmoji}</span>
                    </div>
                    <div class="h-1.5 bg-mist rounded-full overflow-hidden mb-2">
                      <div class={`h-full rounded-full ${barCls}`} style={`width: ${w.totalScore * 10}%`}></div>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full border ${colorCls}`}>
                        {label}
                      </span>
                      <span class="text-xs font-bold text-deep">{w.totalScore}/10</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  </section>

  <!-- Säsongsbeskrivningar + tips -->
  <section class="px-4 sm:px-6 max-w-[1280px] mx-auto pb-12">
    <h2 class="font-display text-2xl font-bold text-deep mb-6">Säsongsbeteende</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
      {[
        { title: 'Förleks- och lekperiod',     text: species.preLek,   months: species.spawningMonths },
        { title: 'Efterlek och hungerfönster', text: species.postLek,  months: [] },
        { title: 'Sommar',                     text: species.summer,   months: [6,7,8] },
        { title: 'Höst',                       text: species.autumn,   months: [9,10,11] },
      ].map(({ title, text, months }) => (
        <div class="bg-white border border-mist rounded-2xl p-5">
          <div class="flex items-center gap-2 mb-2">
            <h3 class="font-semibold text-deep text-base">{title}</h3>
          </div>
          {months.length > 0 && (
            <div class="flex gap-1 mb-2">
              {months.map(m => (
                <span class="text-xs bg-pine/10 text-pine px-2 py-0.5 rounded-full">{MONTHS_SV[m - 1].slice(0, 3)}</span>
              ))}
            </div>
          )}
          <p class="text-stone text-sm leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
  </section>

  <!-- Månadstips -->
  <section class="px-4 sm:px-6 max-w-[1280px] mx-auto pb-20">
    <h2 class="font-display text-2xl font-bold text-deep mb-6">Fisketips per månad</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {species.monthlyTips.map((tip, i) => {
        const month    = i + 1;
        const isNow    = month === currentMonth;
        const mScore   = monthScores[i];
        const barCls   = BAR_CLASSES[mScore.color];
        return (
          <div class={`bg-white border rounded-2xl p-5 ${isNow ? 'border-pine shadow-sm' : 'border-mist'}`}>
            <div class="flex items-center justify-between mb-3">
              <h3 class={`font-display font-bold text-base ${isNow ? 'text-pine' : 'text-deep'}`}>
                {MONTHS_SV[i]}
                {isNow && <span class="ml-2 text-xs bg-pine text-white px-2 py-0.5 rounded-full normal-case font-normal">Nu</span>}
              </h3>
              <span class="text-xs font-bold text-stone">{mScore.score}/10</span>
            </div>
            <div class="h-1 bg-mist rounded-full overflow-hidden mb-3">
              <div class={`h-full rounded-full ${barCls}`} style={`width: ${mScore.score * 10}%`}></div>
            </div>
            <p class="text-stone text-sm leading-relaxed">{tip}</p>
          </div>
        );
      })}
    </div>

    <!-- Metoder -->
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
      {[
        { title: 'Vårmetoder',   methods: species.springMethods },
        { title: 'Sommarmetoder', methods: species.summerMethods },
        { title: 'Höstmetoder',  methods: species.autumnMethods },
      ].map(({ title, methods }) => (
        <div class="bg-mist/60 rounded-2xl p-4">
          <p class="text-stone text-xs font-semibold uppercase tracking-wider mb-3">{title}</p>
          <ul class="space-y-1.5">
            {methods.map(m => (
              <li class="text-deep text-sm flex items-center gap-2">
                <span class="w-1 h-1 rounded-full bg-pine inline-block"></span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <!-- Disclaimer -->
    <div class="mt-10 bg-mist/60 border border-mist rounded-xl px-5 py-4 max-w-2xl">
      <p class="text-stone text-sm leading-relaxed">
        Betningsindikatorn är ett riktmärke baserat på biologiska säsongsmönster och månfasberäkningar. Lokal kunskap och dagsaktuella förhållanden påverkar alltid fisket mer. Källor: Havs- och vattenmyndigheten, SLU, Fiskbarometern.se. Månfaseffekt: Vinson &amp; Angradi (2014), PLOS ONE.
      </p>
    </div>
  </section>

</BaseLayout>
```

## src/pages/nappkalender/[art]/[manad].astro
```
---
/**
 * src/pages/nappkalender/[art]/[manad].astro
 *
 * Art × månad -- detaljsida med veckovis data och specifika tips.
 */

import BaseLayout from '../../../layouts/BaseLayout.astro';
import {
  SPECIES,
  MONTHS_SV,
  MONTHS_SLUG,
  getWeekScores,
  getScoreLabel,
  getMoonData,
  getMonthFromSlug,
  MOON_PHASE_EMOJI,
  MOON_PHASE_LABELS,
} from '../../../data/calendar';

export function getStaticPaths() {
  return SPECIES.flatMap(sp =>
    MONTHS_SLUG.map((manad, i) => ({
      params: { art: sp.slug, manad },
      props:  { month: i + 1 },
    }))
  );
}

const { art, manad }  = Astro.params;
const { month }       = Astro.props as { month: number };
const species         = SPECIES.find(s => s.slug === art)!;
const year            = 2026;
const monthName       = MONTHS_SV[month - 1];
const allWeeks        = getWeekScores(species, year);
const monthWeeks      = allWeeks.filter(w => w.month === month);
const prevMonth       = month > 1  ? MONTHS_SLUG[month - 2] : null;
const nextMonth       = month < 12 ? MONTHS_SLUG[month]     : null;
const now             = new Date();
const moon            = getMoonData(now);
const isCurrentMonth  = now.getMonth() + 1 === month;

// Månadspoäng
const avgScore  = monthWeeks.length
  ? Math.round(monthWeeks.reduce((s, w) => s + w.totalScore, 0) / monthWeeks.length)
  : 0;
const { label, color } = getScoreLabel(avgScore);

// Bästa vecka denna månad
const bestWeek  = [...monthWeeks].sort((a, b) => b.totalScore - a.totalScore)[0];

const COLOR_CLASSES = {
  green: 'bg-green-50 text-green-700 border-green-100',
  amber: 'bg-amber-50 text-amber-700 border-amber-100',
  stone: 'bg-stone/10 text-stone border-stone/20',
};

const DOT_CLASSES = {
  green: 'bg-green-500',
  amber: 'bg-amber-400',
  stone: 'bg-stone/40',
};

const BAR_CLASSES = {
  green: 'bg-green-500',
  amber: 'bg-amber-400',
  stone: 'bg-stone/25',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hem',          item: 'https://stromkast.se/' },
    { '@type': 'ListItem', position: 2, name: 'Nappkalender', item: 'https://stromkast.se/nappkalender/' },
    { '@type': 'ListItem', position: 3, name: species.name,   item: `https://stromkast.se/nappkalender/${art}/` },
    { '@type': 'ListItem', position: 4, name: monthName,      item: `https://stromkast.se/nappkalender/${art}/${manad}/` },
  ],
};
---

<BaseLayout
  title={`${species.name}fiske i ${monthName} ${year} – nappkalender och tips`}
  description={`Veckovis betningsindikator för ${species.name.toLowerCase()}fiske i ${monthName} ${year}. Säsongstips, bästa metoder och månfasöversikt.`}
  schema={breadcrumbSchema}
  pageType="article"
>

  <!-- Sidhuvud -->
  <div class="pt-28 pb-6 px-4 sm:px-6 max-w-[1280px] mx-auto">

    <nav aria-label="Brödsmulor" class="mb-8">
      <ol class="flex items-center gap-2 text-sm text-stone">
        <li><a href="/" class="hover:text-pine transition-colors">Hem</a></li>
        <li aria-hidden="true"><span class="text-stone/40">/</span></li>
        <li><a href="/nappkalender/" class="hover:text-pine transition-colors">Nappkalender</a></li>
        <li aria-hidden="true"><span class="text-stone/40">/</span></li>
        <li><a href={`/nappkalender/${art}/`} class="hover:text-pine transition-colors">{species.name}</a></li>
        <li aria-hidden="true"><span class="text-stone/40">/</span></li>
        <li class="text-deep font-medium" aria-current="page">{monthName}</li>
      </ol>
    </nav>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
      <div class="lg:col-span-2">
        <p class="text-stone text-sm font-medium uppercase tracking-wider mb-2">
          {species.name} · {year}
        </p>
        <h1 class="font-display text-4xl sm:text-5xl font-bold text-deep leading-tight mb-4">
          {species.name}fiske i {monthName}
        </h1>

        <!-- Betningsindikator stor -->
        <div class="flex items-center gap-4 mb-6">
          <span class={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border ${COLOR_CLASSES[color]}`}>
            <span class={`w-2 h-2 rounded-full ${DOT_CLASSES[color]}`}></span>
            {label}
          </span>
          <span class="text-stone text-sm">{avgScore}/10 i snitt denna månad</span>
          {isCurrentMonth && <span class="text-xs bg-pine text-white px-2 py-1 rounded-full font-medium">Aktuell månad</span>}
        </div>

        <!-- Månadstip -->
        <div class="bg-white border border-mist rounded-2xl p-5 mb-4">
          <p class="text-stone text-xs font-semibold uppercase tracking-wider mb-2">Fisketips för {monthName}</p>
          <p class="text-deep leading-relaxed">{species.monthlyTips[month - 1]}</p>
        </div>

        <!-- Bästa vecka -->
        {bestWeek && (
          <div class="flex items-center gap-3 text-sm text-stone">
            <span>Bästa veckan denna månad:</span>
            <span class="font-semibold text-deep">Vecka {bestWeek.week}</span>
            <span>{bestWeek.moonEmoji}</span>
            <span class={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${COLOR_CLASSES[getScoreLabel(bestWeek.totalScore).color]}`}>
              {getScoreLabel(bestWeek.totalScore).label}
            </span>
          </div>
        )}
      </div>

      <!-- Sidebar -->
      <div class="flex flex-col gap-4">
        <!-- Månfas -->
        <div class="bg-white border border-mist rounded-2xl p-5 flex items-center gap-4">
          <span class="text-3xl" role="img" aria-label={MOON_PHASE_LABELS[moon.phase]}>{MOON_PHASE_EMOJI[moon.phase]}</span>
          <div>
            <p class="text-xs text-stone uppercase tracking-wider font-medium mb-0.5">Månfas just nu</p>
            <p class="font-display font-bold text-deep text-base leading-none">{MOON_PHASE_LABELS[moon.phase]}</p>
          </div>
        </div>

        <!-- Rekommenderade metoder -->
        <div class="bg-white border border-mist rounded-2xl p-5">
          <p class="text-stone text-xs font-semibold uppercase tracking-wider mb-3">Rekommenderade metoder</p>
          <ul class="space-y-2">
            {(month >= 3 && month <= 5 ? species.springMethods :
              month >= 6 && month <= 8 ? species.summerMethods :
              species.autumnMethods
            ).map(m => (
              <li class="text-deep text-sm flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-pine inline-block shrink-0"></span>
                {m}
              </li>
            ))}
          </ul>
        </div>

        <!-- Artlänk -->
        <a href={`/arter/${art}/`} class="bg-mist/60 border border-mist rounded-2xl p-4 flex items-center justify-between hover:border-pine/20 transition-colors">
          <span class="text-sm font-semibold text-deep">Guide till {species.name}</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </div>

  <!-- Veckokort -->
  <section class="px-4 sm:px-6 max-w-[1280px] mx-auto pb-12">
    <h2 class="font-display text-2xl font-bold text-deep mb-6">Vecka för vecka</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {monthWeeks.map(w => {
        const ws        = getScoreLabel(w.totalScore);
        const barCls    = BAR_CLASSES[ws.color];
        const colorCls  = COLOR_CLASSES[ws.color];
        const dotCls    = DOT_CLASSES[ws.color];
        const msScore   = getScoreLabel(w.moonScore);
        const ssScore   = getScoreLabel(w.seasonScore);
        return (
          <div class={`bg-white border rounded-2xl p-5 ${w.week === Math.ceil(((now.getTime() - new Date(`${year}-01-01`).getTime()) / 86400000) / 7) ? 'border-pine ring-1 ring-pine' : 'border-mist'}`}>
            <div class="flex items-center justify-between mb-3">
              <span class="font-display font-bold text-deep text-lg">Vecka {w.week}</span>
              <span class="text-2xl">{w.moonEmoji}</span>
            </div>
            <p class="text-stone text-xs mb-3">{w.startDate}</p>

            <!-- Total poäng -->
            <div class="h-2 bg-mist rounded-full overflow-hidden mb-2">
              <div class={`h-full rounded-full ${barCls}`} style={`width: ${w.totalScore * 10}%`}></div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <span class={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${colorCls}`}>
                <span class={`w-1.5 h-1.5 rounded-full ${dotCls}`}></span>
                {ws.label}
              </span>
              <span class="text-sm font-bold text-deep">{w.totalScore}/10</span>
            </div>

            <!-- Delpoäng -->
            <div class="space-y-1.5 border-t border-mist pt-3">
              <div class="flex items-center justify-between text-xs">
                <span class="text-stone">Säsong</span>
                <span class="font-semibold text-deep">{w.seasonScore}/10</span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span class="text-stone">Månfas</span>
                <span class="font-semibold text-deep">{w.moonScore}/10</span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span class="text-stone">Månfas</span>
                <span class="text-stone">{MOON_PHASE_LABELS[w.moonPhase]}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>

  <!-- Navigation mellan månader -->
  <section class="px-4 sm:px-6 max-w-[1280px] mx-auto pb-20">
    <div class="flex items-center justify-between border-t border-mist pt-8">
      {prevMonth ? (
        <a href={`/nappkalender/${art}/${prevMonth}/`} class="inline-flex items-center gap-2 text-sky text-sm font-medium hover:text-pine transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {MONTHS_SV[month - 2]}
        </a>
      ) : <span></span>}

      <a href={`/nappkalender/${art}/`} class="text-stone text-sm hover:text-pine transition-colors">
        Hela årsöversikten
      </a>

      {nextMonth ? (
        <a href={`/nappkalender/${art}/${nextMonth}/`} class="inline-flex items-center gap-2 text-sky text-sm font-medium hover:text-pine transition-colors">
          {MONTHS_SV[month]}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      ) : <span></span>}
    </div>
  </section>

</BaseLayout>
```

## src/pages/nappkalender/index.astro
```
---
/**
 * src/pages/nappkalender/index.astro
 *
 * Nappkalenderns indexsida.
 * KalenderWidget above the fold med daglig betningsindikator.
 * Tabellöversikt och artingångskort under.
 */

import BaseLayout from '../../layouts/BaseLayout.astro';
import KalenderWidget from '../../components/KalenderWidget.tsx';
import {
  SPECIES,
  MONTHS_SV,
  MONTHS_SLUG,
  getWeekScores,
  getScoreLabel,
  getMoonData,
  MOON_PHASE_EMOJI,
  MOON_PHASE_LABELS,
} from '../../data/calendar';
import { fetchAllForecasts, CLIMATE_NORMALS, SYMBOL_LABELS, SYMBOL_EMOJI } from '../../lib/forecast';

const year = 2026;

// Byggtidsdata: månfas för varje dag i 2026
const moonDays = Array.from({ length: 366 }, (_, i) => {
  const d   = new Date(`${year}-01-01T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + i);
  if (d.getUTCFullYear() !== year) return null;
  const date = d.toISOString().split('T')[0];
  const moon = getMoonData(d);
  return {
    date,
    phase:        MOON_PHASE_LABELS[moon.phase],
    illumination: moon.illumination,
    score:        moon.score,
    emoji:        MOON_PHASE_EMOJI[moon.phase],
  };
}).filter(Boolean);

// SMHI-prognoser per region
const forecasts = await fetchAllForecasts();
const forecastsForWidget = Object.fromEntries(
  Object.entries(forecasts).map(([region, data]) => [region, data.days])
);

// Artdata för widgeten
const speciesForWidget = SPECIES.map(sp => ({
  slug:       sp.slug,
  name:       sp.name,
  peakMonths: sp.peakMonths,
  okMonths:   sp.okMonths,
}));

// Månadsöversikt för tabellen
const now          = new Date();
const moon         = getMoonData(now);
const currentMonth = now.getMonth() + 1;

const speciesMonthScores = SPECIES.map(sp => {
  const weeks  = getWeekScores(sp, year);
  const months = Array.from({ length: 12 }, (_, i) => {
    const month      = i + 1;
    const monthWeeks = weeks.filter(w => w.month === month);
    const avg        = monthWeeks.length
      ? Math.round(monthWeeks.reduce((s, w) => s + w.totalScore, 0) / monthWeeks.length)
      : 0;
    return { month, score: avg, ...getScoreLabel(avg) };
  });
  return { species: sp, months };
});

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hem',          item: 'https://stromkast.se/' },
    { '@type': 'ListItem', position: 2, name: 'Nappkalender', item: 'https://stromkast.se/nappkalender/' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad är en nappkalender?',
      acceptedAnswer: { '@type': 'Answer', text: 'En nappkalender visar när under året det är bäst att fiska olika arter baserat på säsongsmönster, vattentemperatur och månfas.' },
    },
    {
      '@type': 'Question',
      name: 'Hur fungerar betningsindikatorn?',
      acceptedAnswer: { '@type': 'Answer', text: 'Betningsindikatorn väger samman tre faktorer: säsong (70%), månfas (25%) och väderprognos (5%). För de kommande 10 dygnen används aktuell SMHI-prognos. Längre fram baseras poängen på historiska klimatnormaler 1991–2020.' },
    },
    {
      '@type': 'Question',
      name: 'Påverkar månfasen fisket?',
      acceptedAnswer: { '@type': 'Answer', text: 'Forskning visar en liten men mätbar effekt. En studie av 341 959 muskellungefångster (Vinson & Angradi 2014) visade ~5% fler fångster runt ny- och fullmåne. Säsong och temperatur påverkar dock mer.' },
    },
    {
      '@type': 'Question',
      name: 'Vad betyder blå kant i kalendern?',
      acceptedAnswer: { '@type': 'Answer', text: 'Blå kant markerar dagar där aktuell SMHI-väderprognos används i beräkningen. Prognosen sträcker sig 10 dygn framåt och uppdateras vid varje bygge.' },
    },
  ],
};

const COLOR_CLASSES = {
  green: 'bg-green-50 text-green-700 border-green-100',
  amber: 'bg-amber-50 text-amber-700 border-amber-100',
  stone: 'bg-stone/10 text-stone border-stone/20',
};

const DOT_CLASSES = {
  green: 'bg-green-500',
  amber: 'bg-amber-400',
  stone: 'bg-stone/40',
};
---

<BaseLayout
  title="Nappkalender 2026 – daglig betningsindikator för svenska fiskearter"
  description="Nappkalender med daglig betningsindikator för gädda, abborre, gös, öring och fler. Baseras på säsong, månfas och SMHI-väderprognos. Filtrera på art och region."
  schema={[breadcrumbSchema, faqSchema]}
  pageType="article"
>

  <!-- Sidhuvud -->
  <div class="pt-28 pb-6 px-4 sm:px-6 max-w-[1280px] mx-auto">

    <nav aria-label="Brödsmulor" class="mb-8">
      <ol class="flex items-center gap-2 text-sm text-stone">
        <li><a href="/" class="hover:text-pine transition-colors">Hem</a></li>
        <li aria-hidden="true"><span class="text-stone/40">/</span></li>
        <li class="text-deep font-medium" aria-current="page">Nappkalender {year}</li>
      </ol>
    </nav>

    <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
      <div>
        <p class="text-stone text-sm font-medium uppercase tracking-wider mb-2">Fiskekalender · {year}</p>
        <h1 class="font-display text-4xl sm:text-5xl font-bold text-deep leading-tight">
          Nappkalender {year}
        </h1>
        <p class="text-stone text-base mt-3 max-w-2xl leading-relaxed">
          Daglig betningsindikator baserad på säsong, månfas och SMHI-väderprognos. Filtrera på art och region. Klicka på en dag för detaljer.
        </p>
      </div>
      <div class="flex-shrink-0 bg-white border border-mist rounded-2xl px-5 py-4 flex items-center gap-4">
        <span class="text-3xl" role="img" aria-label={MOON_PHASE_LABELS[moon.phase]}>{MOON_PHASE_EMOJI[moon.phase]}</span>
        <div>
          <p class="text-xs text-stone uppercase tracking-wider font-medium mb-0.5">Månfas just nu</p>
          <p class="font-display font-bold text-deep text-base leading-none">{MOON_PHASE_LABELS[moon.phase]}</p>
          <p class="text-stone text-xs mt-1">{moon.illumination}% belyst</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Kalenderwidget (above the fold) -->
  <section class="px-4 sm:px-6 max-w-[1280px] mx-auto pb-16">
    <KalenderWidget
      year={year}
      moonDays={moonDays}
      forecasts={forecastsForWidget}
      climateNormals={CLIMATE_NORMALS}
      species={speciesForWidget}
      symbolLabels={SYMBOL_LABELS}
      symbolEmojis={SYMBOL_EMOJI}
      client:only="react"
    />
  </section>

  <!-- Artöversikt -->
  <section class="px-4 sm:px-6 max-w-[1280px] mx-auto pb-12">
    <h2 class="font-display text-2xl font-bold text-deep mb-2">Artspecifika kalender</h2>
    <p class="text-stone text-sm mb-8">Veckovis betningsindikator, säsongsbeskrivning och fisketips per art.</p>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {SPECIES.map(sp => {
        const monthData = speciesMonthScores.find(s => s.species.slug === sp.slug)?.months[currentMonth - 1];
        const colorCls  = monthData ? COLOR_CLASSES[monthData.color] : COLOR_CLASSES.stone;
        const dotCls    = monthData ? DOT_CLASSES[monthData.color]   : DOT_CLASSES.stone;
        return (
          <a
            href={`/nappkalender/${sp.slug}/`}
            class="bg-white border border-mist rounded-2xl p-4 hover:border-pine/20 hover:shadow-md transition-all"
          >
            <div class="flex items-start justify-between gap-2 mb-2">
              <h3 class="font-display font-bold text-deep text-base">{sp.name}</h3>
              {monthData && (
                <span class={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full border shrink-0 ${colorCls}`}>
                  <span class={`w-1.5 h-1.5 rounded-full ${dotCls}`}></span>
                  Nu
                </span>
              )}
            </div>
            <div class="flex flex-wrap gap-1 mt-2">
              {sp.peakMonths.slice(0, 4).map(m => (
                <span class="bg-green-50 text-green-700 text-xs px-1.5 py-0.5 rounded-full">{MONTHS_SV[m - 1].slice(0, 3)}</span>
              ))}
            </div>
          </a>
        );
      })}
    </div>
  </section>

  <!-- Årsöversiktstabell -->
  <section class="px-4 sm:px-6 max-w-[1280px] mx-auto pb-12">
    <h2 class="font-display text-2xl font-bold text-deep mb-2">Årsöversikt per art</h2>
    <p class="text-stone text-sm mb-6">Veckovis snittpoäng per art och månad. Klicka på en cell för detaljsida.</p>

    <div class="overflow-x-auto rounded-2xl border border-mist">
      <table class="w-full border-collapse bg-white" style="min-width: 700px">
        <thead>
          <tr class="border-b border-mist">
            <th class="text-left px-5 py-3 text-xs font-semibold text-stone uppercase tracking-wider w-32">Art</th>
            {MONTHS_SV.map((m, i) => (
              <th class={`text-center px-1 py-3 text-xs font-semibold uppercase tracking-wider ${i + 1 === currentMonth ? 'text-pine' : 'text-stone'}`}>
                {m.slice(0, 3)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {speciesMonthScores.map(({ species, months }) => (
            <tr class="border-b border-mist/60 hover:bg-mist/30 transition-colors">
              <td class="px-5 py-3">
                <a href={`/nappkalender/${species.slug}/`} class="font-semibold text-deep text-sm hover:text-pine transition-colors">
                  {species.name}
                </a>
              </td>
              {months.map(({ month, score, color }) => {
                const isNow = month === currentMonth;
                const bg = color === 'green' ? 'bg-green-500' : color === 'amber' ? 'bg-amber-400' : 'bg-stone/15';
                return (
                  <td class={`text-center px-1 py-3 ${isNow ? 'relative' : ''}`}>
                    <a href={`/nappkalender/${species.slug}/${MONTHS_SLUG[month - 1]}/`}>
                      <span class={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${bg} ${color === 'stone' ? 'text-stone' : 'text-white'} ${isNow ? 'ring-2 ring-pine ring-offset-1' : ''}`}>
                        {score}
                      </span>
                    </a>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>

  <!-- FAQ -->
  <section class="px-4 sm:px-6 max-w-[1280px] mx-auto pb-20">
    <h2 class="font-display text-2xl font-bold text-deep mb-6">Vanliga frågor</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
      {faqSchema.mainEntity.map(q => (
        <details class="bg-white border border-mist rounded-2xl p-5 group">
          <summary class="font-semibold text-deep cursor-pointer list-none flex items-center justify-between gap-4">
            {q.name}
            <svg class="shrink-0 transition-transform group-open:rotate-180" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </summary>
          <p class="mt-3 text-stone text-sm leading-relaxed">{q.acceptedAnswer.text}</p>
        </details>
      ))}
    </div>

    <div class="mt-10 bg-mist/60 border border-mist rounded-xl px-5 py-4 max-w-2xl">
      <p class="text-stone text-sm leading-relaxed">
        Nappkalendern är ett riktmärke. Beteckningarna baseras på biologiska säsongsmönster, månfasberäkningar och SMHI-väderprognos. Lokal kunskap väger alltid tyngre. Källa månfas: astronomisk beräkning. Källa säsong: Havs- och vattenmyndigheten, SLU. Källa klimatnormaler och prognos: SMHI Open Data (CC BY 4.0).
      </p>
    </div>
  </section>

</BaseLayout>
```

## src/pages/nyhetsbrev/index.astro
```
---
return Astro.redirect('/', 301);
---```

## src/pages/om/index.astro
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';

const authors = await getCollection('authors');
---

<BaseLayout
  title="Om Strömkast: redaktionen och vår metodik"
  description="Strömkast är Sveriges modernaste sportfiskeguide. Lär känna redaktionen och vår metodik för oberoende produkttester."
  pageType="about"
>
  <div class="pt-28 pb-20 px-4 sm:px-6 max-w-[1280px] mx-auto">
    <div class="max-w-[72ch]">
      <h1 class="font-display text-4xl sm:text-5xl font-bold text-deep mb-10">Om</h1><div class="space-y-4 text-stone max-w-[65ch] mb-12">
  <p>Strömkast är en guide för dig som fiskar i svenska vatten. Här hittar du information om fiskevatten, utrustning och teknik, samlat på ett ställe och skrivet för att vara faktiskt användbart.</p>
  <p>Rekommendationer baseras på tillgänglig produktinformation, användarerfarenheter och egen research. Vi är tydliga med vad som bygger på egna erfarenheter och vad som kommer från andra källor.</p>
  <p>Sajten finansieras via affiliate-länkar. När du köper något via en länk på Strömkast får vi en liten provision utan kostnad för dig. Det påverkar aldrig vad vi skriver eller hur vi rankar produkter.</p>
</div>
      <div class="space-y-6">
        {authors.map((author) => (
          <div class="bg-white rounded-2xl p-6 border border-mist flex flex-col sm:flex-row gap-5">
            <div class="w-20 h-20 rounded-full overflow-hidden shrink-0">
              <img src="/rikard-giby.jpeg" alt="Rikard Giby" class="w-full h-full object-cover" />
            </div>
            <div>
              <h2 class="font-display font-bold text-deep text-xl mb-2">{author.data.name}</h2>
              <p class="text-stone text-sm leading-relaxed mb-3">{author.data.bio}</p>
              <a
                href={`mailto:${'rikard.giby' + '@' + 'gmail.com'}`}
                class="text-sm hover:underline"
                style="color: #6E8FA0;"
              >E-post</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</BaseLayout>
```

## src/pages/rss.xml.ts
```
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getCollection('articles');
  const sorted = articles.sort((a, b) => b.data.publishedAt.localeCompare(a.data.publishedAt));

  return rss({
    title: 'Strömkast: guider och reportage',
    description: 'Svenska sportfiskeguider, destinationsreportage och utrustningstest från Strömkast.',
    site: context.site ?? 'https://stromkast.se',
    items: sorted.map((article) => ({
      title: article.data.title,
      pubDate: new Date(article.data.publishedAt),
      description: article.data.description,
      link: `/guider/${article.data.slug}/`,
    })),
    customData: `<language>sv-SE</language>`,
  });
}
```

## src/pages/sok/index.astro
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';

const destinations = await getCollection('destinations');
const species = await getCollection('species');
const techniques = await getCollection('techniques');
const articles = await getCollection('articles');
const reviews = await getCollection('gear-reviews');

type Result = {
  title: string;
  description: string;
  href: string;
  type: string;
};

const allContent: Result[] = [
  ...destinations.map((d) => ({ title: d.data.title, description: d.data.description, href: `/destinationer/${d.data.slug}/`, type: 'Destination' })),
  ...species.map((s) => ({ title: s.data.title, description: s.data.description, href: `/arter/${s.data.slug}/`, type: 'Art' })),
  ...techniques.map((t) => ({ title: t.data.title, description: t.data.description, href: `/teknik/${t.data.slug}/`, type: 'Teknik' })),
  ...articles.map((a) => ({ title: a.data.title, description: a.data.description, href: `/guider/${a.data.slug}/`, type: 'Guide' })),
  ...reviews.map((r) => ({ title: r.data.title, description: r.data.description, href: `/utrustning/test/${r.data.slug}/`, type: 'Utrustning' })),
];

const typeColor: Record<string, string> = {
  Destination: 'bg-sky/15 text-sky',
  Art: 'bg-green-100 text-green-700',
  Teknik: 'bg-amber-100 text-amber-700',
  Guide: 'bg-pine/10 text-pine',
  Utrustning: 'bg-rust/10 text-rust',
};
---

<BaseLayout
  title="Sök på Strömkast"
  description="Sök bland destinationer, arter, tekniker, guider och utrustningsrecensioner."
  noindex={true}
  pageType="search"
>
  <div class="pt-28 pb-20 px-4 sm:px-6 max-w-[1280px] mx-auto">
    <div class="max-w-2xl mb-10">
      <h1 class="font-display text-4xl font-bold text-deep mb-4">Sök på Strömkast</h1>

      <div class="relative">
        <label class="sr-only" for="search-input">Sökfråga</label>
        <input
          id="search-input"
          type="search"
          placeholder="Sök destinationer, teknik, utrustning..."
          autocomplete="off"
          class="w-full bg-white border border-mist rounded-full px-6 py-4 pr-12 text-deep placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-pine focus:border-transparent text-base"
        />
        <svg class="absolute right-5 top-1/2 -translate-y-1/2 text-stone pointer-events-none" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="5.5" stroke="currentColor" stroke-width="1.5"/>
          <path d="M13 13l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
    </div>

    <!-- Results list (filtered by JS) -->
    <div id="search-results" class="space-y-3">
      {allContent.map((item) => (
        <a
          href={item.href}
          data-title={item.title.toLowerCase()}
          data-description={item.description.toLowerCase()}
          class="search-result group flex items-start gap-4 bg-white border border-mist rounded-2xl p-4 hover:border-pine/20 hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
        >
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <span class={`text-xs font-bold px-2 py-0.5 rounded-full ${typeColor[item.type] ?? 'bg-mist text-stone'}`}>
                {item.type}
              </span>
            </div>
            <p class="font-semibold text-deep group-hover:text-pine transition-colors">{item.title}</p>
            <p class="text-stone text-sm leading-relaxed mt-0.5 line-clamp-1">{item.description}</p>
          </div>
          <svg class="text-stone/40 group-hover:text-pine transition-colors shrink-0 mt-1" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M5 8h6M8 5l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      ))}
    </div>

    <p id="no-results" class="hidden text-stone mt-8">Inga träffar. Prova ett annat sökord.</p>
  </div>
</BaseLayout>

<script>
  const input = document.getElementById('search-input') as HTMLInputElement;
  const results = document.querySelectorAll<HTMLElement>('.search-result');
  const noResults = document.getElementById('no-results');

  // Pre-fill from URL ?q=
  const params = new URLSearchParams(window.location.search);
  const initialQ = params.get('q') ?? '';
  if (initialQ) input.value = initialQ;

  function filter(q: string) {
    const term = q.trim().toLowerCase();
    let visible = 0;
    results.forEach((el) => {
      const match = !term
        || (el.dataset.title ?? '').includes(term)
        || (el.dataset.description ?? '').includes(term);
      el.style.display = match ? '' : 'none';
      if (match) visible++;
    });
    if (noResults) noResults.classList.toggle('hidden', visible > 0 || !term);
  }

  filter(initialQ);

  input.addEventListener('input', () => {
    filter(input.value);
    const url = new URL(window.location.href);
    input.value ? url.searchParams.set('q', input.value) : url.searchParams.delete('q');
    window.history.replaceState(null, '', url.toString());
  });
</script>
```

## src/pages/spovaljaren.astro
```
---
import BaseLayout from '../layouts/BaseLayout.astro';
import SpoQuiz from '../components/quiz/SpoQuiz';
import { getCollection } from 'astro:content';

const allRods = await getCollection('gear-reviews', (entry) => {
  return entry.data.quizEnabled === true;
});

const rods = allRods.map((entry) => ({
  slug: entry.data.slug,
  title: entry.data.title,
  brand: entry.data.brand,
  price: entry.data.price,
  description: entry.data.description,
  affiliateUrl: entry.data.affiliateUrl,
  targetSpecies: entry.data.targetSpecies,
  techniques: entry.data.techniques,
  priceRange: entry.data.priceRange,
  featured: entry.data.featured,
  budgetPick: entry.data.budgetPick,
  rating: entry.data.rating,
}));

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Hitta rätt fiskespö med Spöväljaren',
  description: 'Besvara 4 frågor om din fiskestil för att få personliga spörekommendationer.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Välj målart' },
    { '@type': 'HowToStep', position: 2, name: 'Välj teknik' },
    { '@type': 'HowToStep', position: 3, name: 'Ange erfarenhetsnivå' },
    { '@type': 'HowToStep', position: 4, name: 'Ange budget' },
  ],
};
---

<BaseLayout
  title="Spöväljaren: hitta rätt fiskespö på 60 sekunder"
  description="Svara på fyra frågor om din fiskestil och budget. Vi matchar dig med de bästa spöna för dina behov."
  schema={howToSchema}
  pageType="quiz"
>
  <div class="pt-28 pb-20 px-4 sm:px-6">
    <div class="max-w-xl mx-auto text-center mb-12">
      <p class="text-stone text-sm font-medium uppercase tracking-wider mb-3">Spöväljaren</p>
      <h1 class="font-display text-4xl sm:text-5xl font-bold text-deep mb-4">Hitta rätt spö<br/>på 60 sekunder</h1>
      <p class="text-stone text-lg leading-relaxed">Fyra enkla frågor. Personliga rekommendationer. Inget krångel.</p>
    </div>

    <div class="max-w-xl mx-auto bg-white rounded-3xl border border-mist p-8 shadow-sm">
      <SpoQuiz client:load rods={rods} />
    </div>

    <p class="text-center text-stone/60 text-xs mt-6 max-w-sm mx-auto">
      *Rekommendationerna är baserade på vår redaktionella bedömning. Affiliatelänkar kan förekomma.
    </p>
  </div>
</BaseLayout>
```

## src/pages/teknik/[slug].astro
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { getCollection, render } from 'astro:content';

export async function getStaticPaths() {
  const techniques = await getCollection('techniques');
  return techniques.map((t) => ({
    params: { slug: t.data.slug },
    props: { technique: t },
  }));
}

const { technique } = Astro.props;
const t = technique.data;
const { Content } = await render(technique);

const allSpecies = await getCollection('species');
const relatedSpecies = allSpecies.filter((s) =>
  t.targetSpecies.some((ts: string) =>
    ts.toLowerCase() === s.data.title.toLowerCase() ||
    ts.toLowerCase() === s.data.slug.toLowerCase()
  )
);

const allDestinations = await getCollection('destinations');
const topDestinations = (t.topDestinations ?? []).length > 0
  ? allDestinations.filter((d) => (t.topDestinations ?? []).includes(d.data.slug))
  : [];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://stromkast.se/' },
    { '@type': 'ListItem', position: 2, name: 'Teknik', item: 'https://stromkast.se/teknik/' },
    { '@type': 'ListItem', position: 3, name: t.title, item: `https://stromkast.se/teknik/${t.slug}/` },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: t.title,
  description: t.description,
  image: `https://stromkast.se${t.heroImage}`,
  tool: t.targetSpecies.map((s: string) => ({ '@type': 'HowToTool', name: s })),
};

const difficultyConfig: Record<string, { label: string; color: string; bg: string }> = {
  'nybörjare':  { label: 'Nybörjare',  color: 'text-green-700',  bg: 'bg-green-100' },
  'mellannivå': { label: 'Mellannivå', color: 'text-amber-700',  bg: 'bg-amber-100' },
  'avancerad':  { label: 'Avancerad',  color: 'text-red-700',    bg: 'bg-red-100'   },
};
const diff = difficultyConfig[t.difficulty] ?? difficultyConfig['nybörjare']!;

const faqSchema = t.faq && t.faq.length > 0 ? {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: t.faq.map((item: { q: string; a: string }) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
} : null;
---

<BaseLayout
  title={`${t.title}: guide för svenska sportfiskare`}
  description={t.description}
  ogImage={t.heroImage}
  schema={[breadcrumbSchema, howToSchema, ...(faqSchema ? [faqSchema] : [])]}
  pageType="technique"
>
  <!-- Breadcrumb -->
  <nav class="pt-24 px-4 sm:px-6 max-w-[1280px] mx-auto" aria-label="Brödsmulor">
    <ol class="flex items-center gap-2 text-sm text-stone">
      <li><a href="/" class="hover:text-pine transition-colors">Hem</a></li>
      <li aria-hidden="true"><span class="text-stone/40">/</span></li>
      <li><a href="/teknik/" class="hover:text-pine transition-colors">Teknik</a></li>
      <li aria-hidden="true"><span class="text-stone/40">/</span></li>
      <li class="text-deep font-medium" aria-current="page">{t.title}</li>
    </ol>
  </nav>

  <!-- Hero -->
  <div class="relative h-[45vh] min-h-[320px] mt-4 overflow-hidden bg-pine">
    <div
      class="absolute inset-0 bg-cover bg-center"
      style={`background-image: url('${t.heroImage}'); background-color: #1F3A2E;`}
      role="img"
      aria-label={t.title}
    ></div>
    <div class="absolute inset-0 bg-gradient-to-t from-deep/85 to-transparent"></div>
    <div class="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-10 max-w-[1280px] mx-auto">
      <span class={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${diff.bg} ${diff.color}`}>
        {diff.label}
      </span>
      <h1 class="font-display text-5xl sm:text-6xl font-bold text-white mb-2">{t.title}</h1>
      <p class="text-white/70 text-sm">
        Målarter: {t.targetSpecies.join(', ')}
      </p>
    </div>
  </div>

  <div class="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

      <!-- Main guide content -->
      <div class="lg:col-span-2">
        <p class="text-stone text-lg leading-relaxed mb-8">{t.description}</p>

        <div class="prose prose-slate max-w-[72ch] text-deep/80 leading-relaxed
          prose-headings:font-display prose-headings:text-deep prose-headings:font-bold
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:mb-4 prose-p:leading-relaxed
          prose-strong:text-deep
          prose-ul:my-4 prose-li:mb-2
        ">
          <Content />
        </div>

        <!-- Related species -->
        {relatedSpecies.length > 0 && (
          <div class="mt-12">
            <h2 class="font-display text-2xl font-bold text-deep mb-6">Målarter</h2>
            <div class="flex flex-wrap gap-4">
              {relatedSpecies.map((sp) => (
                <a
                  href={`/arter/${sp.data.slug}/`}
                  class="group flex items-center gap-3 bg-white border border-mist rounded-2xl px-4 py-3 hover:border-pine/30 hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
                >
                  <div class="w-10 h-10 rounded-lg bg-mist overflow-hidden shrink-0">
                    <div
                      class="w-full h-full bg-cover bg-center"
                      style={`background-image: url('${sp.data.heroImage}'); background-color: #E8E4DC;`}
                      aria-hidden="true"
                    ></div>
                  </div>
                  <span class="font-semibold text-deep text-sm capitalize group-hover:text-pine transition-colors">{sp.data.title}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        <!-- Top destinations -->
        {topDestinations.length > 0 && (
          <div class="mt-12">
            <h2 class="font-display text-2xl font-bold text-deep mb-6">Bra vatten för {t.title.toLowerCase()}</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topDestinations.map((d) => (
                <a
                  href={`/destinationer/${d.data.slug}/`}
                  class="group flex items-center gap-4 bg-white border border-mist rounded-2xl p-4 hover:border-pine/30 hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
                >
                  <div class="w-14 h-14 rounded-xl bg-mist overflow-hidden shrink-0">
                    <div
                      class="w-full h-full bg-cover bg-center"
                      style={`background-image: url('${d.data.heroImage}'); background-color: #E8E4DC;`}
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p class="font-semibold text-deep text-sm group-hover:text-pine transition-colors">{d.data.title}</p>
                    <p class="text-stone text-xs mt-0.5">{d.data.län}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        <!-- FAQ -->
        {t.faq && t.faq.length > 0 && (
          <div class="mt-16">
            <h2 class="font-display text-2xl font-bold text-deep mb-6">Vanliga frågor</h2>
            <div class="space-y-4">
              {t.faq.map((item: { q: string; a: string }) => (
                <details class="bg-white border border-mist rounded-2xl p-5 group">
                  <summary class="font-semibold text-deep cursor-pointer list-none flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine rounded-xl">
                    {item.q}
                    <svg class="shrink-0 transition-transform group-open:rotate-180" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </summary>
                  <p class="mt-3 text-stone text-sm leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>

      <!-- Sidebar -->
      <aside class="space-y-6">
        <div class="bg-pine text-white rounded-2xl p-6">
          <h2 class="font-display font-bold text-xl mb-5">Om tekniken</h2>
          <dl class="space-y-4 text-sm">
            <div>
              <dt class="text-white/60 text-xs uppercase tracking-wider mb-1">Svårighetsgrad</dt>
              <dd>
                <span class={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${diff.bg} ${diff.color}`}>
                  {diff.label}
                </span>
              </dd>
            </div>
            <div>
              <dt class="text-white/60 text-xs uppercase tracking-wider mb-1">Målarter</dt>
              <dd class="font-medium capitalize">{t.targetSpecies.join(', ')}</dd>
            </div>
          </dl>
        </div>

        <div class="bg-mist rounded-2xl p-6">
          <h3 class="font-display font-bold text-deep text-lg mb-2">Hitta rätt utrustning</h3>
          <p class="text-stone text-sm leading-relaxed mb-4">Låt vår quiz hjälpa dig välja rätt spö för din fiskestil.</p>
          <a
            href="/spovaljaren/"
            class="inline-flex items-center gap-1.5 bg-rust text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-copper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2"
          >
            Ta spöväljaren
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>

        <div class="bg-mist rounded-2xl p-6">
          <h3 class="font-display font-bold text-deep text-lg mb-3">Fler tekniker</h3>
          <a href="/teknik/" class="text-sky text-sm font-medium hover:text-pine transition-colors underline underline-offset-2">
            Se alla fisketekniker
          </a>
        </div>
      </aside>
    </div>
  </div>
</BaseLayout>
```

## src/pages/teknik/index.astro
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';

const techniques = await getCollection('techniques');

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://stromkast.se/' },
    { '@type': 'ListItem', position: 2, name: 'Teknik', item: 'https://stromkast.se/teknik/' },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Fisketekniker',
  itemListElement: techniques.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.data.title,
    url: `https://stromkast.se/teknik/${t.data.slug}/`,
  })),
};

const difficultyLabel: Record<string, string> = {
  'nybörjare': 'Nybörjare',
  'mellannivå': 'Mellannivå',
  'avancerad': 'Avancerad',
};

const difficultyColor: Record<string, string> = {
  'nybörjare': 'bg-green-100 text-green-700',
  'mellannivå': 'bg-amber-100 text-amber-700',
  'avancerad': 'bg-red-100 text-red-700',
};
---

<BaseLayout
  schema={[breadcrumbSchema, itemListSchema]}
  title="Fisketekniker: guider för alla nivåer"
  description="Djupgående guider till de vanligaste fisketeknikerna. Från jiggfiske för nybörjare till flugfiske på elitnivå."
  pageType="technique-index"
>
  <div class="pt-28 pb-20 px-4 sm:px-6 max-w-[1280px] mx-auto">
    <div class="mb-12">
      <p class="text-stone text-sm font-medium uppercase tracking-wider mb-3">Teknik</p>
      <h1 class="font-display text-4xl sm:text-5xl font-bold text-deep mb-4">Fisketekniker</h1>
      <p class="text-stone text-lg max-w-2xl leading-relaxed">Lär dig de mest effektiva metoderna för svensk sportfiske, med guides skrivna av fiskare som faktiskt behärskar dem.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {techniques.map((tech) => (
        <a
          href={`/teknik/${tech.data.slug}/`}
          class="group bg-white rounded-2xl overflow-hidden border border-mist hover:border-pine/20 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
        >
          <div class="aspect-[16/9] bg-mist overflow-hidden">
            <div
              class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={`background-image: url('${tech.data.heroImage}'); background-color: #E8E4DC;`}
              role="img"
              aria-label={tech.data.title}
            ></div>
          </div>
          <div class="p-5">
            <div class="flex items-center justify-between mb-2">
              <h2 class="font-display font-bold text-deep text-xl group-hover:text-pine transition-colors">{tech.data.title}</h2>
              <span class={`text-xs font-medium px-2.5 py-1 rounded-full ${difficultyColor[tech.data.difficulty]}`}>
                {difficultyLabel[tech.data.difficulty]}
              </span>
            </div>
            <p class="text-stone text-sm leading-relaxed mb-3">{tech.data.description}</p>
            <div class="flex flex-wrap gap-1.5">
              {tech.data.targetSpecies.slice(0, 3).map((s: string) => (
                <span class="bg-mist text-stone text-xs px-2.5 py-1 rounded-full capitalize">{s}</span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</BaseLayout>
```

## src/pages/utrustning/[kategori].astro
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import AffiliateCard from '../../components/AffiliateCard.astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const categories = await getCollection('gear-categories');
  const allReviews = await getCollection('gear-reviews');

  return categories.map((cat) => ({
    params: { kategori: cat.data.slug },
    props: {
      category: cat,
      reviews: allReviews.filter((r) => r.data.category === cat.data.slug),
    },
  }));
}

const { category, reviews } = Astro.props;
const c = category.data;

const featured = reviews.find((r) => r.data.featured);
const budgetPick = reviews.filter((r) => !r.data.featured).sort((a, b) => a.data.price - b.data.price)[0];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://stromkast.se/' },
    { '@type': 'ListItem', position: 2, name: 'Utrustning', item: 'https://stromkast.se/utrustning/' },
    { '@type': 'ListItem', position: 3, name: c.title, item: `https://stromkast.se/utrustning/${c.slug}/` },
  ],
};
---

<BaseLayout
  title={`Bästa ${c.title} 2026: test och recensioner`}
  description={c.description}
  ogImage={c.heroImage}
  schema={breadcrumbSchema}
  pageType="gear-category"
  noindex={true}
>
  <!-- Breadcrumb -->
  <nav class="pt-24 px-4 sm:px-6 max-w-[1280px] mx-auto" aria-label="Brödsmulor">
    <ol class="flex items-center gap-2 text-sm text-stone">
      <li><a href="/" class="hover:text-pine transition-colors">Hem</a></li>
      <li aria-hidden="true"><span class="text-stone/40">/</span></li>
      <li><a href="/utrustning/" class="hover:text-pine transition-colors">Utrustning</a></li>
      <li aria-hidden="true"><span class="text-stone/40">/</span></li>
      <li class="text-deep font-medium" aria-current="page">{c.title}</li>
    </ol>
  </nav>

  <div class="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
    <!-- Header -->
    <div class="mb-12">
      <h1 class="font-display text-4xl sm:text-5xl font-bold text-deep mb-4">Bästa {c.title} i test 2026</h1>
      <p class="text-stone text-lg max-w-2xl leading-relaxed">{c.description}</p>
    </div>

    <!-- Affiliate disclosure -->
    <div class="bg-mist rounded-2xl p-4 flex items-start gap-3 mb-10 border border-mist">
      <svg class="text-stone shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.2"/>
        <path d="M8 7v4M8 5v.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <p class="text-stone text-xs leading-relaxed">
        <strong class="text-deep">Affiliateinfo:</strong> Sidan innehåller affiliatelänkar. Om du köper via våra länkar tjänar vi en liten provision, utan kostnad för dig. Det påverkar aldrig vår bedömning av produkterna.
      </p>
    </div>

    <!-- Guide banner (visas om kategorin har en kopplad köpguide) -->
    {c.guideUrl && (
      <div class="bg-white border border-pine/20 rounded-2xl p-5 flex items-center gap-4 mb-10">
        <div class="shrink-0 w-10 h-10 bg-pine/10 rounded-xl flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M3 4.5h12M3 9h12M3 13.5h7" stroke="#1F3A2E" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-deep text-sm font-semibold">Osäker på vilket spö du ska välja?</p>
          <p class="text-stone text-xs mt-0.5">Läs vår guide med råd per art och prisklass.</p>
        </div>
        <a
          href={c.guideUrl}
          class="shrink-0 inline-flex items-center gap-1.5 bg-pine text-white font-semibold text-sm px-4 py-2 rounded-full hover:bg-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
        >
          Läs guiden
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    )}

    <!-- Best in test cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {reviews.map((review) => (
        <AffiliateCard
          title={review.data.title}
          brand={review.data.brand}
          price={review.data.price}
          rating={review.data.rating}
          description={review.data.description}
          image={review.data.heroImage}
          affiliateUrl={review.data.affiliateUrl}
          merchant={review.data.merchant}
          slug={review.data.slug}
          featured={review.data.featured}
          budgetPick={review.data.slug === budgetPick?.data.slug}
        />
      ))}
    </div>

    <!-- Comparison table -->
    {reviews.length > 1 && (
      <div class="overflow-x-auto">
        <h2 class="font-display text-2xl font-bold text-deep mb-6">Jämförelsetabell</h2>
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-mist">
              <th class="text-left px-4 py-3 text-stone font-semibold border border-mist rounded-tl-xl">Produkt</th>
              <th class="text-left px-4 py-3 text-stone font-semibold border border-mist">Pris</th>
              <th class="text-left px-4 py-3 text-stone font-semibold border border-mist">Betyg</th>
              <th class="text-left px-4 py-3 text-stone font-semibold border border-mist rounded-tr-xl">Butik</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, i) => (
              <tr class={i % 2 === 0 ? 'bg-white' : 'bg-paper'}>
                <td class="px-4 py-3 border border-mist font-medium text-deep">
                  {review.data.title}
                  {review.data.featured && <span class="ml-2 text-xs bg-rust text-white px-2 py-0.5 rounded-full">Bästa val</span>}
                </td>
                <td class="px-4 py-3 border border-mist text-deep">{new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK', maximumFractionDigits: 0 }).format(review.data.price)}</td>
                <td class="px-4 py-3 border border-mist text-deep">{review.data.rating}/5</td>
                <td class="px-4 py-3 border border-mist text-stone">{review.data.merchant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
</BaseLayout>
```

## src/pages/utrustning/index.astro
```
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';

const categories = await getCollection('gear-categories');
---

<BaseLayout
  title="Utrustning och tester: hitta rätt fiskeutrustning"
  description="Oberoende tester och recensioner av fiskeutrustning. Från gäddspön till ekolod, vi hjälper dig välja rätt."
  pageType="gear-hub"
>
  <div class="pt-28 pb-20 px-4 sm:px-6 max-w-[1280px] mx-auto">
    <div class="mb-12">
      <p class="text-stone text-sm font-medium uppercase tracking-wider mb-3">Utrustning</p>
      <h1 class="font-display text-4xl sm:text-5xl font-bold text-deep mb-4">Bästa utrustningen 2026</h1>
      <p class="text-stone text-lg max-w-2xl leading-relaxed">Testade och rankade produkter inom varje kategori. Inga betalda recensioner. Bara ärliga åsikter från fiskare som använder utrustningen.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {categories.map((cat) => (
        <a
          href={`/utrustning/${cat.data.slug}/`}
          class="group bg-white rounded-2xl overflow-hidden border border-mist hover:border-pine/20 hover:shadow-md transition-all p-6 flex gap-5 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
        >
          <div class="w-20 h-20 rounded-xl bg-mist overflow-hidden shrink-0">
            <div
              class="w-full h-full bg-cover bg-center"
              style={`background-image: url('${cat.data.heroImage}'); background-color: #E8E4DC;`}
              role="img"
              aria-label={cat.data.title}
            ></div>
          </div>
          <div>
            <h2 class="font-display font-bold text-deep text-xl mb-1.5 group-hover:text-pine transition-colors">{cat.data.title}</h2>
            <p class="text-stone text-sm leading-relaxed">{cat.data.excerpt ?? cat.data.description}</p>
          </div>
          <svg class="ml-auto shrink-0 text-stone group-hover:text-pine transition-colors" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      ))}
    </div>
  </div>
</BaseLayout>
```

## src/pages/utrustning/test/[slug].astro
```
---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import { getCollection, render } from 'astro:content';

export async function getStaticPaths() {
  const reviews = await getCollection('gear-reviews');
  return reviews.map((r) => ({
    params: { slug: r.data.slug },
    props: { review: r },
  }));
}

const { review } = Astro.props;
const r = review.data;
const { Content } = await render(review);

const allReviews = await getCollection('gear-reviews');
const related = allReviews
  .filter((x) => x.data.category === r.category && x.data.slug !== r.slug)
  .slice(0, 3);

const priceFormatted = new Intl.NumberFormat('sv-SE', {
  style: 'currency',
  currency: 'SEK',
  maximumFractionDigits: 0,
}).format(r.price);

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: r.title,
  description: r.description,
  brand: { '@type': 'Brand', name: r.brand },
  image: `https://stromkast.se${r.heroImage}`,
  offers: {
    '@type': 'Offer',
    price: r.price,
    priceCurrency: 'SEK',
    availability: 'https://schema.org/InStock',
    url: `https://stromkast.se/utrustning/test/${r.slug}/`,
    seller: { '@type': 'Organization', name: r.merchant },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: r.rating,
    bestRating: 5,
    worstRating: 1,
    reviewCount: 1,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://stromkast.se/' },
    { '@type': 'ListItem', position: 2, name: 'Utrustning', item: 'https://stromkast.se/utrustning/' },
    { '@type': 'ListItem', position: 3, name: r.title, item: `https://stromkast.se/utrustning/test/${r.slug}/` },
  ],
};

const stars = Math.round(r.rating);
---

<BaseLayout
  title={`${r.title}: test och recension ${new Date().getFullYear()}`}
  description={r.description}
  ogImage={r.heroImage}
  schema={[productSchema, breadcrumbSchema]}
  pageType="gear-review"
>
  <!-- Breadcrumb -->
  <nav class="pt-24 px-4 sm:px-6 max-w-[1280px] mx-auto" aria-label="Brödsmulor">
    <ol class="flex items-center gap-2 text-sm text-stone flex-wrap">
      <li><a href="/" class="hover:text-pine transition-colors">Hem</a></li>
      <li aria-hidden="true"><span class="text-stone/40">/</span></li>
      <li><a href="/utrustning/" class="hover:text-pine transition-colors">Utrustning</a></li>
      <li aria-hidden="true"><span class="text-stone/40">/</span></li>
      <li><a href={`/utrustning/${r.category}/`} class="hover:text-pine transition-colors capitalize">{r.category}</a></li>
      <li aria-hidden="true"><span class="text-stone/40">/</span></li>
      <li class="text-deep font-medium" aria-current="page">{r.title}</li>
    </ol>
  </nav>

  <div class="max-w-[1280px] mx-auto px-4 sm:px-6 py-10">
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">

      <!-- Product image + buy box -->
      <div class="lg:col-span-2">
        <div class="sticky top-24 space-y-5">
          <!-- Image -->
          <div class="relative rounded-2xl overflow-hidden aspect-square bg-mist">
            {r.featured && (
              <div class="absolute top-4 left-4 z-10 bg-rust text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Bästa val
              </div>
            )}
            <img
              src={r.heroImage}
              alt={r.title}
              loading="eager"
              fetchpriority="high"
              class="w-full h-full object-contain p-8"
              onerror="this.style.display='none'"
            />
          </div>

          <!-- Buy box -->
          <div class="bg-white border border-mist rounded-2xl p-6">
            <!-- Rating -->
            <div class="flex items-center gap-2 mb-4">
              <div class="flex items-center gap-0.5" role="img" aria-label={`Betyg ${r.rating} av 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg width="18" height="18" viewBox="0 0 14 14" fill={i < stars ? '#B45D3C' : '#E8E4DC'} aria-hidden="true">
                    <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5L7 1z"/>
                  </svg>
                ))}
              </div>
              <span class="text-deep font-bold">{r.rating}</span>
              <span class="text-stone text-sm">/ 5</span>
            </div>

            <p class="text-3xl font-bold text-deep mb-1">{priceFormatted}</p>
            <p class="text-stone text-sm mb-5">{r.merchant}</p>

            <a
              href={r.affiliateUrl || '#'}
              target="_blank"
              rel="noopener noreferrer sponsored"
              class="flex items-center justify-center gap-2 w-full bg-pine text-white font-bold text-base px-6 py-3.5 rounded-full hover:bg-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
              data-affiliate-merchant={r.merchant}
              data-affiliate-product={r.slug}
            >
              Se pris hos {r.merchant}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>

            <p class="text-xs text-stone/60 text-center mt-3">
              *Affiliatelänk. Vi tjänar en provision utan kostnad för dig.
            </p>
          </div>
        </div>
      </div>

      <!-- Review content -->
      <div class="lg:col-span-3">
        <p class="text-stone text-sm font-medium uppercase tracking-wider mb-2">{r.brand}</p>
        <h1 class="font-display text-3xl sm:text-4xl font-bold text-deep leading-tight mb-4">{r.title}</h1>
        <p class="text-stone text-lg leading-relaxed mb-10">{r.description}</p>

        <!-- Affiliate disclosure -->
        <div class="bg-mist rounded-xl p-4 flex gap-3 mb-10 text-xs text-stone leading-relaxed">
          <svg class="shrink-0 mt-0.5 text-stone/60" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="1.2"/>
            <path d="M7 6.5v4M7 4.5v.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <p><strong class="text-deep">Affiliateinfo:</strong> Sidan innehåller affiliatelänkar. Vår redaktionella bedömning påverkas aldrig av kommersiella relationer.</p>
        </div>

        <!-- Pros & cons -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <div class="bg-green-50 rounded-2xl p-5">
            <h2 class="font-display font-bold text-green-800 text-lg mb-4 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8l4 4 6-7" stroke="#166534" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Fördelar
            </h2>
            <ul class="space-y-2">
              {r.pros.map((pro: string) => (
                <li class="flex items-start gap-2 text-sm text-green-800">
                  <span class="w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5 shrink-0" aria-hidden="true"></span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div class="bg-red-50 rounded-2xl p-5">
            <h2 class="font-display font-bold text-red-800 text-lg mb-4 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 4l8 8M12 4l-8 8" stroke="#991b1b" stroke-width="2" stroke-linecap="round"/>
              </svg>
              Nackdelar
            </h2>
            <ul class="space-y-2">
              {r.cons.map((con: string) => (
                <li class="flex items-start gap-2 text-sm text-red-800">
                  <span class="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" aria-hidden="true"></span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <!-- Rating breakdown -->
        <div class="bg-white border border-mist rounded-2xl p-6 mb-10">
          <h2 class="font-display font-bold text-deep text-xl mb-5">Samlat betyg</h2>
          <div class="flex items-end gap-4">
            <p class="font-display text-6xl font-bold text-deep leading-none">{r.rating}</p>
            <div class="pb-1">
              <div class="flex items-center gap-0.5 mb-1" role="img" aria-label={`${r.rating} av 5 stjärnor`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg width="20" height="20" viewBox="0 0 14 14" fill={i < stars ? '#B45D3C' : '#E8E4DC'} aria-hidden="true">
                    <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5L7 1z"/>
                  </svg>
                ))}
              </div>
              <p class="text-stone text-sm">av 5 möjliga</p>
            </div>
          </div>
          <p class="text-xs text-stone/60 mt-4 leading-relaxed">Betyget är ett redaktionellt omdöme baserat på specifikationer, prisnivå och varumärkets rykte. Det är inte baserat på ett eget produkttest.</p>
        </div>

        <!-- Redaktionellt innehåll (MDX body) -->
        <div class="prose prose-stone max-w-none mb-10
          prose-headings:font-display prose-headings:text-deep
          prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
          prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
          prose-p:leading-relaxed prose-p:text-stone
          prose-strong:text-deep prose-strong:font-semibold
          prose-ul:text-stone prose-li:my-1
          prose-a:text-sky prose-a:no-underline hover:prose-a:text-pine">
          <Content />
        </div>

        <!-- Related products -->
        {related.length > 0 && (
          <div>
            <h2 class="font-display text-xl font-bold text-deep mb-5">Fler alternativ i kategorin</h2>
            <div class="space-y-3">
              {related.map((rel) => (
                <a
                  href={`/utrustning/test/${rel.data.slug}/`}
                  class="group flex items-center gap-4 bg-white border border-mist rounded-xl p-4 hover:border-pine/30 hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
                >
                  <div class="w-16 h-16 rounded-lg bg-mist overflow-hidden shrink-0">
                    <img
                      src={rel.data.heroImage}
                      alt={rel.data.title}
                      loading="lazy"
                      class="w-full h-full object-contain p-2"
                      onerror="this.style.display='none'"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs text-stone font-medium">{rel.data.brand}</p>
                    <p class="font-semibold text-deep text-sm group-hover:text-pine transition-colors truncate">{rel.data.title}</p>
                    <p class="text-deep text-sm font-bold mt-0.5">
                      {new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK', maximumFractionDigits: 0 }).format(rel.data.price)}
                    </p>
                  </div>
                  <svg class="text-stone/40 group-hover:text-pine transition-colors shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M5 8h6M8 5l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
            <a href={`/utrustning/${r.category}/`} class="inline-flex items-center gap-1.5 text-sky text-sm font-medium hover:text-pine transition-colors mt-5">
              Se alla i kategorin
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
</BaseLayout>
```

# Lib

## src/lib/forecast.ts
```
/**
 * src/lib/forecast.ts
 *
 * Hämtar SMHI SNOW1gv1-prognos per region och aggregerar till dagsvärden.
 * Används av nappkalender/index.astro vid byggtid.
 *
 * API: https://opendata-download-metfcst.smhi.se/api/category/snow1g/version/1
 * Licens: Creative Commons CC BY 4.0
 */

// ---------------------------------------------------------------------------
// Regionkoordinater -- en representativ punkt per region
// ---------------------------------------------------------------------------

export const FORECAST_REGIONS: Record<string, { lat: number; lng: number; label: string }> = {
  'sodra-sverige':  { lat: 55.6,  lng: 13.0,  label: 'Södra Sverige'  },
  'mellansverige':  { lat: 59.33, lng: 18.07, label: 'Mellansverige'  },
  'norra-sverige':  { lat: 63.18, lng: 14.64, label: 'Norra Sverige'  },
  'fjallvarlden':   { lat: 63.4,  lng: 13.08, label: 'Fjällvärlden'   },
};

// ---------------------------------------------------------------------------
// Typer
// ---------------------------------------------------------------------------

export interface DayForecast {
  date:        string;  // YYYY-MM-DD
  tempMin:     number;
  tempMax:     number;
  tempMean:    number;
  windSpeed:   number;  // m/s medel
  windDir:     number;  // grader
  precip:      number;  // mm
  cloudiness:  number;  // 0–8 oktas (mappat från %)
  symbolCode:  number;  // SMHI symbol 1–27
  isPrognosis: true;
}

export interface RegionForecast {
  region:      string;
  label:       string;
  days:        DayForecast[];
  fetchedAt:   string;
  error:       boolean;
}

// ---------------------------------------------------------------------------
// SMHI symbol → beskrivning
// ---------------------------------------------------------------------------

export const SYMBOL_LABELS: Record<number, string> = {
  1:  'Klart',
  2:  'Nästan klart',
  3:  'Halvklart',
  4:  'Halvmulet',
  5:  'Mulet',
  6:  'Mulet',
  7:  'Dimma',
  8:  'Lätt regnskur',
  9:  'Regnskur',
  10: 'Kraftig regnskur',
  11: 'Åskskur',
  12: 'Lätt snöblandad regnskur',
  13: 'Snöblandad regnskur',
  14: 'Kraftig snöblandad regnskur',
  15: 'Lätt snöskur',
  16: 'Snöskur',
  17: 'Kraftig snöskur',
  18: 'Lätt regn',
  19: 'Regn',
  20: 'Kraftigt regn',
  21: 'Åska',
  22: 'Lätt snöblandat regn',
  23: 'Snöblandat regn',
  24: 'Kraftigt snöblandat regn',
  25: 'Lätt snöfall',
  26: 'Snöfall',
  27: 'Kraftigt snöfall',
};

export const SYMBOL_EMOJI: Record<number, string> = {
  1: '☀️', 2: '🌤️', 3: '⛅', 4: '🌥️', 5: '☁️', 6: '☁️', 7: '🌫️',
  8: '🌦️', 9: '🌦️', 10: '🌧️', 11: '⛈️',
  12: '🌨️', 13: '🌨️', 14: '🌨️',
  15: '🌨️', 16: '❄️', 17: '❄️',
  18: '🌧️', 19: '🌧️', 20: '🌧️', 21: '⛈️',
  22: '🌨️', 23: '🌨️', 24: '🌨️',
  25: '❄️', 26: '❄️', 27: '❄️',
};

// ---------------------------------------------------------------------------
// Hämtning och aggregering
// ---------------------------------------------------------------------------

async function fetchForecastForRegion(
  region: string,
  lat: number,
  lng: number,
  label: string
): Promise<RegionForecast> {
  const url = `https://opendata-download-metfcst.smhi.se/api/category/snow1g/version/1/geotype/point/lon/${lng}/lat/${lat}/data.json`;

  try {
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) {
      return { region, label, days: [], fetchedAt: new Date().toISOString(), error: true };
    }

    const data = await res.json();
    const timeSeries: Array<{ time: string; data: Record<string, number> }> = data.timeSeries;

    // Gruppera per datum
    const byDate = new Map<string, Array<Record<string, number>>>();
    for (const entry of timeSeries) {
      const date = entry.time.split('T')[0];
      if (!byDate.has(date)) byDate.set(date, []);
      byDate.get(date)!.push(entry.data);
    }

    const days: DayForecast[] = [];
    for (const [date, entries] of byDate) {
      const temps   = entries.map(e => e.air_temperature).filter(v => v != null);
      const winds   = entries.map(e => e.wind_speed).filter(v => v != null);
      const windDir = entries[Math.floor(entries.length / 2)]?.wind_from_direction ?? 0;
      const precips = entries.map(e => e.precipitation_amount_mean ?? 0);
      const clouds  = entries.map(e => e.cloud_area_fraction ?? 0);
      const symbol  = entries[Math.floor(entries.length / 2)]?.symbol_code ?? 1;

      if (temps.length === 0) continue;

      days.push({
        date,
        tempMin:    Math.round(Math.min(...temps) * 10) / 10,
        tempMax:    Math.round(Math.max(...temps) * 10) / 10,
        tempMean:   Math.round((temps.reduce((a, b) => a + b, 0) / temps.length) * 10) / 10,
        windSpeed:  Math.round((winds.reduce((a, b) => a + b, 0) / winds.length) * 10) / 10,
        windDir:    Math.round(windDir),
        precip:     Math.round(precips.reduce((a, b) => a + b, 0) * 10) / 10,
        cloudiness: Math.round(clouds.reduce((a, b) => a + b, 0) / clouds.length / 12.5), // % → oktas
        symbolCode: Math.round(symbol),
        isPrognosis: true,
      });
    }

    return {
      region,
      label,
      days: days.sort((a, b) => a.date.localeCompare(b.date)),
      fetchedAt: new Date().toISOString(),
      error: false,
    };
  } catch {
    return { region, label, days: [], fetchedAt: new Date().toISOString(), error: true };
  }
}

export async function fetchAllForecasts(): Promise<Record<string, RegionForecast>> {
  const results = await Promise.all(
    Object.entries(FORECAST_REGIONS).map(([region, { lat, lng, label }]) =>
      fetchForecastForRegion(region, lat, lng, label)
    )
  );

  return Object.fromEntries(results.map(r => [r.region, r]));
}

// ---------------------------------------------------------------------------
// Klimatnormaler 1991-2020 per region och månad
// Källa: SMHI klimatnormaler, representativa stationer
// ---------------------------------------------------------------------------

export const CLIMATE_NORMALS: Record<string, number[]> = {
  // Månadsvis medeltemperatur (°C), index 0=jan
  'sodra-sverige': [-0.4, -0.5, 2.8, 7.8, 13.2, 17.0, 19.2, 18.6, 13.8, 8.7, 4.0, 0.7],
  'mellansverige': [-3.0, -3.2, 0.5, 6.0, 11.8, 16.2, 18.2, 17.0, 11.8, 6.5, 1.8, -1.5],
  'norra-sverige': [-8.5, -8.0, -3.5, 2.5, 8.8, 13.8, 16.2, 14.5, 9.0, 3.2, -2.5, -6.5],
  'fjallvarlden':  [-10.5,-10.0,-6.0, 0.0, 5.8, 10.5, 13.0, 12.0, 7.0, 1.5, -4.5, -8.5],
};

// ---------------------------------------------------------------------------
// Hjälpfunktion: väderpoäng från prognosdata
// ---------------------------------------------------------------------------

export function getForecastBiteBonus(day: DayForecast): number {
  let bonus = 0;

  // Temperatur
  if (day.tempMean >= 8 && day.tempMean <= 18) bonus += 15;
  else if (day.tempMean >= 4 && day.tempMean < 8) bonus += 5;
  else if (day.tempMean > 18 && day.tempMean <= 24) bonus += 8;
  else if (day.tempMean < 0) bonus -= 15;

  // Vind
  if (day.windSpeed >= 1 && day.windSpeed <= 4) bonus += 10;
  else if (day.windSpeed > 7 && day.windSpeed <= 10) bonus -= 8;
  else if (day.windSpeed > 10) bonus -= 18;

  // Nederbörd
  if (day.precip > 5) bonus -= 5;

  return bonus;
}
```

## src/lib/smhi.ts
```
/**
 * src/lib/smhi.ts
 *
 * Delad logik för SMHI-data, månfas, betningsindikator och artjusterad säsongspoäng.
 * Används av /forhallanden/, /destinationer/[slug]/ och startsidans FiskeKarta.
 *
 * Stationsmatchning sker automatiskt från koordinater via smhi-stations.json.
 * Ingen manuell station-mapping behövs -- nya destinationer matchas automatiskt.
 */

import stationsData from '../data/smhi-stations.json';
import seasonsData  from '../data/seasons.json';

// ---------------------------------------------------------------------------
// Typer
// ---------------------------------------------------------------------------

interface Station {
  id:   number;
  name: string;
  lat:  number;
  lng:  number;
}

export interface SMHIData {
  airTemp:     number | null;
  windSpeed:   number | null;
  windDir:     number | null;
  humidity:    number | null;
  stationName: string;
  stationId:   number;
  error:       boolean;
}

export interface BiteScore {
  label:  string;
  color:  'green' | 'amber' | 'stone';
  score:  number;
  dots:   number;
}

export interface MoonData {
  name:         string;
  emoji:        string;
  illumination: number;
}

// ---------------------------------------------------------------------------
// Stationsmatchning: närmaste aktiva station från koordinater
// ---------------------------------------------------------------------------

const stations = stationsData as Station[];

function distSq(lat1: number, lng1: number, lat2: number, lng2: number): number {
  return (lat1 - lat2) ** 2 + (lng1 - lng2) ** 2;
}

export function getNearestStation(lat: number, lng: number): Station {
  return stations.reduce((best, s) =>
    distSq(lat, lng, s.lat, s.lng) < distSq(lat, lng, best.lat, best.lng) ? s : best
  );
}

// ---------------------------------------------------------------------------
// SMHI-hämtning
// ---------------------------------------------------------------------------

async function fetchParam(stationId: number, parameterId: number): Promise<number | null> {
  const url = `https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/${parameterId}/station/${stationId}/period/latest-hour/data.json`;
  try {
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const latest = data?.value?.at(-1);
    if (!latest || latest.value === '') return null;
    return parseFloat(latest.value);
  } catch {
    return null;
  }
}

export async function fetchSMHIForStation(stationId: number, stationName: string): Promise<SMHIData> {
  const [airTemp, windSpeed, windDir, humidity] = await Promise.all([
    fetchParam(stationId, 1),
    fetchParam(stationId, 4),
    fetchParam(stationId, 3),
    fetchParam(stationId, 6),
  ]);
  return {
    airTemp,
    windSpeed,
    windDir,
    humidity,
    stationName,
    stationId,
    error: airTemp === null && windSpeed === null,
  };
}

/**
 * Hämtar SMHI-data för en destination givet dess koordinater.
 * Väljer automatiskt närmaste aktiva station från smhi-stations.json.
 */
export async function fetchSMHIForCoords(lat: number, lng: number): Promise<SMHIData> {
  const station = getNearestStation(lat, lng);
  return fetchSMHIForStation(station.id, station.name);
}

// ---------------------------------------------------------------------------
// Månfas
// ---------------------------------------------------------------------------

export function getMoonPhase(date: Date): MoonData {
  const SYNODIC        = 29.53059;
  const KNOWN_NEW_MOON = new Date('2000-01-06T18:14:00Z').getTime();
  const diffDays       = (date.getTime() - KNOWN_NEW_MOON) / (1000 * 60 * 60 * 24);
  const cyclePos       = ((diffDays % SYNODIC) + SYNODIC) % SYNODIC;
  const illumination   = Math.round(50 * (1 - Math.cos((2 * Math.PI * cyclePos) / SYNODIC)));

  let name: string;
  let emoji: string;

  if (cyclePos < 1.85)       { name = 'Nymåne';           emoji = '🌑'; }
  else if (cyclePos < 7.38)  { name = 'Växande skära';    emoji = '🌒'; }
  else if (cyclePos < 9.22)  { name = 'Första kvarteret'; emoji = '🌓'; }
  else if (cyclePos < 14.77) { name = 'Växande gibbös';   emoji = '🌔'; }
  else if (cyclePos < 16.61) { name = 'Fullmåne';         emoji = '🌕'; }
  else if (cyclePos < 22.15) { name = 'Avtagande gibbös'; emoji = '🌖'; }
  else if (cyclePos < 23.99) { name = 'Sista kvarteret';  emoji = '🌗'; }
  else                       { name = 'Avtagande skära';  emoji = '🌘'; }

  return { name, emoji, illumination };
}

// ---------------------------------------------------------------------------
// Säsongsbonus per art
// ---------------------------------------------------------------------------

type SeasonEntry = { peak: number[]; ok: number[] };
const seasons = seasonsData as Record<string, SeasonEntry>;

export function getSeasonBonus(species: string[], month: number): number {
  let best = 0;
  for (const art of species) {
    const entry = seasons[art.toLowerCase()];
    if (!entry) continue;
    if (entry.peak.includes(month)) { best = Math.max(best, 25); break; }
    if (entry.ok.includes(month))     best = Math.max(best, 12);
  }
  return best;
}

// ---------------------------------------------------------------------------
// Betningsindikator
// ---------------------------------------------------------------------------

export function getBiteScore(
  airTemp:          number | null,
  windSpeed:        number | null,
  moonIllumination: number,
  species:          string[] = [],
  month:            number   = new Date().getMonth() + 1
): BiteScore {
  let score = 40;

  if (airTemp !== null) {
    if (airTemp >= 8 && airTemp <= 18)      score += 20;
    else if (airTemp >= 4 && airTemp < 8)   score += 8;
    else if (airTemp > 18 && airTemp <= 24) score += 10;
    else if (airTemp < 0)                   score -= 15;
    else if (airTemp > 24)                  score -= 8;
  }

  if (windSpeed !== null) {
    if (windSpeed >= 1 && windSpeed <= 4)      score += 15;
    else if (windSpeed > 4 && windSpeed <= 7)  score += 5;
    else if (windSpeed > 7 && windSpeed <= 10) score -= 10;
    else if (windSpeed > 10)                   score -= 22;
    else if (windSpeed < 1)                    score -= 5;
  }

  if (moonIllumination > 90 || moonIllumination < 10) score += 12;
  else if (moonIllumination > 75 || moonIllumination < 25) score += 6;

  score += getSeasonBonus(species, month);
  score  = Math.max(0, Math.min(100, score));

  if (score >= 68) return { label: 'Toppläge',       color: 'green', score, dots: 3 };
  if (score >= 42) return { label: 'Värt att testa', color: 'amber', score, dots: 2 };
  return              { label: 'Trögt',           color: 'stone', score, dots: 1 };
}

// ---------------------------------------------------------------------------
// Formatering
// ---------------------------------------------------------------------------

export function windDirLabel(deg: number | null): string {
  if (deg === null) return '–';
  const dirs = ['N','NNO','NO','ONO','O','OSO','SO','SSO','S','SSV','SV','VSV','V','VNV','NV','NNV'];
  return dirs[Math.round(deg / 22.5) % 16];
}

export const DOT_COLOR: Record<string, string> = {
  green: 'bg-green-500',
  amber: 'bg-amber-400',
  stone: 'bg-stone/40',
};

export const DOT_BG: Record<string, string> = {
  green: 'bg-green-50 border-green-200 text-green-700',
  amber: 'bg-amber-50 border-amber-200 text-amber-700',
  stone: 'bg-stone/10 border-stone/20 text-stone',
};
```

## src/lib/track.ts
```
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
```

# Content: gear-categories

## src/content/gear-categories/haspelrullar.json
```
{
  "title": "Haspelrullar",
  "slug": "haspelrullar",
  "description": "Handplockade haspelrullar för abborre, gädda och gös. Vi har valt ut de bästa alternativen i varje prisklass.",
  "heroImage": "/images/gear/haspelrullar.jpg"
}
```

## src/content/gear-categories/spon.json
```
{
  "title": "Fiskespön",
  "slug": "spon",
  "description": "Handplockade spön för abborre, gädda och gös. Vi har valt ut de bästa alternativen i varje prisklass.",
  "heroImage": "/images/gear/spon.jpg",
  "guideUrl": "/artiklar/basta-fiskespon-2026/",
  "excerpt": "Testade fiskespön för gädda, gös och abborre."
}```

# Content: gear-reviews

# Content: species

## src/content/species/abborre.mdx
```
---
title: "Abborre"
slug: "abborre"
description: "Abborre – biologi, fisketekniker, bästa säsong och rekord. Komplett guide för abborrfiske i svenska vatten med tips om utrustning och lokaler."
heroImage: "/images/species/abborre-hero.jpg"
targetTechniques:
  - jiggfiske
  - isfiske
  - flugfiske
  - spinnfiske
  - drop-shot
  - mete
difficulty: "nybörjare"
excerpt: "Sveriges vanligaste rovfisk. Finns i nästan alla vatten."
topDestinations:
  - malaren
  - vanern
  - hjalmaren
  - storsjon
  - vattern
  - bolmen
  - asnen
season: "Hela året (bäst juni–oktober)"
faq:
  - q: "Vilket minimimått gäller för abborre?"
    a: "Abborre saknar nationellt minimimått i Sverige, men lokala regler kan gälla. Kontrollera alltid med Länsstyrelsen för det vatten du fiskar i."
  - q: "När fiskar man bäst efter abborre?"
    a: "Abborre fiskas hela året men är som mest aktiv under försommaren (maj–juni) och hösten (september–november). Vinterfiske under is fungerar också bra."
  - q: "Vilken teknik är bäst för abborre?"
    a: "Jiggfiske och drop-shot är de mest effektiva teknikerna för abborre. Spinnfiske med små beten fungerar bra i grunda vatten och längs vegetation."
publishedAt: "2025-01-01"
updatedAt: "2026-05-01"
---

Abborren (*Perca fluviatilis*) är en av Sveriges vanligaste fiskar och finns i nästan varje sjö och vattendrag nedanför fjällkedjan. Den klarar bräckt vatten längs hela Östersjökusten och tolererar förhållanden som få andra arter klarar. Riktigt stor abborre är däremot en annan sak: den är svår att hitta och kräver tid, kunskap och rätt vatten.

## Biologi

### Utseende och identifiering

Abborren är omisskännlig. Grönaktig till gulgröna sidor, mörkgrön rygg, ljus buk och 5–9 svarta vertikala tvärränder. Buk-, anal- och stjärtfenorna är röda eller orangeröda. Den har två separata ryggfenor. Den främre har 13–17 vassa taggstrålar och en karakteristisk mörk fläck i bakkanten, den bakre mjuka strålar. Gällockstaggarna är vassa och fjällen sträva, vilket gör hela fisken taggig att hålla i.

Större exemplar utvecklar en tydlig puckel mellan huvud och ryggfena, mest framträdande hos romstinna honor på våren. Abborrar som äter mycket kräftor får intensivt klarröda fenor av karotenoidpigment.

Två sällsynta naturfärgvarianter förekommer: **guldabborre** (enfärgat gul eller orange) och **blåabborre** (blekt blåaktig).

### Storlek och tillväxt

Abborren varierar mer i storlek mellan olika vatten än nästan någon annan art. Två fiskar av samma ålder från olika sjöar kan skilja tio gånger i vikt, beroende på födotillgång, populationstäthet och vattentemperatur.

Inom sportfisket används ofta dessa informella storleksklasser:

- Vanlig fångststorlek: 15–30 cm, 50–400 g
- Bra abborre: 35–40 cm, 700–1 000 g
- Storabborre: över 1,5 kg
- Drömfisk: över 2 kg

Tabellen nedan visar genomsnittsvärden för svenska bestånd. Skillnaderna mellan vatten kan vara mycket stora, och en abborre på exempelvis 5 år kan i ett bördigt vatten väga tio gånger mer än en jämnårig fisk från ett trångbott, näringsfattigt vatten.

| Ålder  | Längd (typiskt) | Vikt (typiskt) |
|--------|-----------------|----------------|
| 1 år   | 5–9 cm          | 3–12 g         |
| 3 år   | 12–18 cm        | 30–80 g        |
| 5 år   | 15–25 cm        | 60–200 g       |
| 7 år   | 20–30 cm        | 150–400 g      |
| 10 år  | 25–35 cm        | 300–600 g      |
| 15+ år | 30–45 cm        | 500–1 500 g    |

Nyckeln till tillväxten är den **ontogenetiska dietväxlingen**: så länge abborren äter djurplankton och bottendjur växer den långsamt. När den går över till fiskdiet, vid ca 10–20 cm beroende på vatten, accelererar tillväxten dramatiskt. Abborrar som aldrig gör den övergången kallas **tusenbröder**: fullvuxna men bara 13–18 cm, ofta 8–10 år gamla. Det sker i tätt befolkade eller näringsfattiga vatten där fisken inte kan växa förbi bottendjursstadiet.

Bland abborrar över ca 800 g är överväldigande majoritet honor. Hannar kan sällan bli mer än 1–1,5 kg. Stora honor är gamla. Många kilosabborrar är 12–18 år och de allra största exemplaren 20 år eller mer.

### Diet

Abborren är en generalist-rovfisk som genomgår tre tydliga dietfaser:

1. **Under ca 4 cm:** nästan uteslutande zooplankton.
2. **4–15 cm:** bottendjur, framför allt chironomidlarver (fjädermygglarver), märlkräftor, vattengråsuggor, iglar och kräftungar.
3. **Över 15–20 cm:** fisk. Mört, löja, nors, spigg, småabborre och kräftor dominerar.

Stora abborrar utvecklar ofta lokala specialiseringar. I en sjö lever de på siklöja på djupt vatten, i en annan på kräftor i strandzonen, i en tredje på pelagisk löja. Vad abborren i just det aktuella vattnet äter är ofta den viktigaste frågan att besvara.

**Kannibalism** är ingen undantagsföreteelse utan en styrande ekosystemkraft. Forskning från Umeå universitet visar att en generation stora kannibaliska abborrar kan undertrycka rekryteringen så kraftigt att nästan inga yngre fiskar växer upp. När kannibalerna sedan dör av leder det till en explosion av ungfisk som kan förändra hela sjöns ekologi.

### Fortplantning

Lektiden styrs av vattentemperatur, inte kalender. Leken sätter igång när vattnet når **7–8 °C** och kulminerar vid 12–15 °C:

- Skåne, Blekinge, Halland: slutet av mars till april
- Götaland och södra Svealand: april
- Norrland: maj till juni
- Fjällnära vatten: ibland så sent som juni

Hanarna anländer först till lekplatserna. Leken sker på grunt vatten (0,5–3 m) med vegetation, ris, grenar eller stubbvass som substrat. Honan lägger rommen i en lång geléartad sträng, **romsträngen**, som kan bli upp till en meter lång och lindas runt växtlighet. En medelstor hona producerar 13 000–20 000 ägg, de allra största upp till 200 000–300 000.

Rommen kläcks efter 2–3 veckor. Rekryteringen är starkt temperaturberoende. Varma somrar ger starka årsklasser, kalla somrar nästan inga yngel alls. Det förklarar varför enstaka årsklasser kan dominera ett bestånd i flera år.

### Habitat och beteende

Abborrens trivseltemperatur är 15–20 °C. Den saknas i mycket kalla vatten och i kraftigt strömmande vattendrag, men tolererar bräckt vatten upp till ca 12 ‰ salthet, pH 5–9 och relativt låga syrenivåer. Det är skälet till att den finns i nästan alla svenska vatten där rovfisk kan leva, från försurade skogstjärnar i Småland till Bottenvikens skärgårdsvikar.

Abborren har **sluten simblåsa** och kan inte tryckkompensera snabbt. Det gör den känslig för lufttrycksförändringar. Vid sjunkande lufttryck drar den sig djupare och är svårfångad. Vid stabilt högtryck är fisket som regel bäst.

Abborren är **dagaktiv** och jagar med synen. Nattfiske ger generellt dåliga resultat.

Småabborren går i täta stimmen om hundratals till tusentals individer. Stimmen är ofta **släktstrukturerade**. Forskning från Bodensjön visar att yngelaggregationer innehåller fler genetiska släktingar än slumpen förklarar, och att abborren kan identifiera släktingar via luktsinnet. Stora abborrar (över 35 cm) är alltmer solitära eller rör sig i små grupper om 3–5 individer.

### Beståndssituation

Längs Östersjöns ytterskärgårdar har abborren haft kraftigt sviktande rekrytering sedan 1990-talet. Orsakerna inkluderar storspiggens expansion (spigg äter abborrens rom och konkurrerar med yngel om djurplankton), övergödning och klimatförändringar. På ostkusten har fångsterna minskat med upp till 80 procent på 20 år.

I inlandsvatten och längs norrlandskusten är bilden den motsatta. Varmare somrar gynnar abborren och den tar allt mer plats i vatten som tidigare dominerades av öring.

## Bästa säsong

Abborren kan fångas året om, men aktivitet och fiskbarhet varierar kraftigt.

### Vår (mars–maj)

Tidig vår **före leken** är en av de bästa perioderna för storabborre. Romstinna honor i toppkondition samlas vid lekvikar och åmynningar. Huggperioderna kan vara korta och oregelbundna. Middag och eftermiddag är ofta bättre än tidigt på morgonen eftersom ytvattnet hinner värmas upp några grader.

Under leken är fisken ointresserad av bete. Abborren är inte fredad under lektid i de flesta svenska vatten, men många sportfiskare väljer att inte rikta sig mot lekande fisk. Romstinna honor i toppkondition är de individer som bär upp beståndet.

Sen maj, efter leken, är abborren mager men äter intensivt för att återhämta sig.

### Sommar (juni–augusti)

Abborren jagar aktivt i strandzoner med vass, bryggor, nedfallna träd och stenrösen på 1–5 meters djup. På morgnar och kvällar driver storabborrarna löja och småfisk upp mot ytan, ibland så intensivt att vattenytan kokar. Det är då ytfiske med poppers och ytwobblers ger mest resultat.

Vid vattentemperaturer över 23 °C kan abborren bli passiv och dra sig djupare. Gryning och sen kväll är då de bättre passen.

### Höst (september–november)

Hösten är av många betraktad som den bästa perioden för abborrfiske. Det finns flera skäl till det.

Abborren är i toppkondition efter en sommar av aktivt jaktande. Den samlas i större stimmen på djupare vatten (4–10 m) och är lättare att lokalisera med ekolod. Den äter intensivt inför vintern.

Branter, grynnor, uddar och sund med hårdbotten är klassiska höstplatser. Jiggfiske och drop-shot från båt med ekolod är effektivast just nu.

### Vinter (december–mars)

Abborrpimpel är en av Sveriges mest utövade former av sportfiske. Abborren är mindre aktiv men äter regelbundet, ofta på 3–10 meters djup vid djupbranter och hårdbotten.

Aktiviteten påverkas av:

- **Lufttryck:** stabilt högtryck ger bäst fiske, sjunkande lufttryck försämrar.
- **Snödjup på isen:** mycket snö ger mörkt vatten och sämre hugg.
- **Senvintern** (februari–mars): fisken börjar röra sig mot lekplatserna och är ofta mer aktiv.

### Dagliga mönster

Abborren är dagaktiv. Klassiska huggtoppar är gryning (1–2 timmar efter soluppgång) och sen eftermiddag till tidig kväll. Nattfiske är generellt dåligt.

## Fisketekniker

Abborren kan fångas med nästan alla sportfiskemetoder. Här följer en kortfattad beskrivning av vad som fungerar och när. Varje teknik beskrivs i detalj på respektive tekniksida.

### Spinnfiske

Det mest mångsidiga alternativet och fungerar hela säsongen. Spinnare, skeddrag, småwobblers och gummijiggar fiskas längs strandzoner, över grynnor och vid djupbranter. Skeddrag i 5–15 g är effektivt när abborren jagar löja i öppet vatten.

[Läs mer om spinnfiske](/teknik/spinnfiske)

### Jiggfiske

Den effektivaste metoden för riktat fiske efter storabborre, framför allt på hösten och tidig vår. En jigg med gummibete (shad, kräftimitation, grub) fiskas aktivt mot botten med ryck och pauser. Hugget kommer ofta i sjunkfasen. Storlek 5–13 cm beroende på målstorlek.

[Läs mer om jiggfiske](/teknik/jiggfiske)

### Drop-shot

En effektiv metod för trög eller försiktig abborre och i djupare vatten. Sänket hålls mot botten medan betet hänger fritt ovanför och rör sig utan att dras framåt. Metoden är känslig för subtila hugg. Beten 3–7 cm, sänken 7–20 g.

### Wobblerfiske

Småwobblers i 3–7 cm är klassiker för abborre. Stop-and-go och twitching utlöser hugg som en jämn invevning missar. Poppers och ytwobblers på sommarkvällar ger spektakulära hugg direkt i ytan.

### Flugfiske

Underskattat men effektivt, framför allt kustnära och i åar. Spö i klass 6–7, 9 fot. Streamers som Clouser Deep Minnow och Woolly Bugger fungerar bra, liksom ytpoppers under varma kvällar i vassbälten.

[Läs mer om flugfiske](/teknik/flugfiske)

### Mete

Flötmete med mask eller maggot från brygga eller strand fungerar nästan överallt under sommarhalvåret och är den klassiska nybörjarmetoden. Bottenmete med mask eller maggot på tung grundkrok är en effektiv metod för riktigt stor abborre, framför allt under försommaren och hösten.

### Isfiske (pimpel)

En av de mest utövade abborrmetoderna i Sverige. Tre huvudvarianter:

- **Vertikalpirk:** klassiska pirkar i silver eller koppar, 5–18 g. Korta snärtiga ryck med 3–4 sekunders pauser. Agnas med maggot, abborreöga eller liten fiskbit.
- **Balanspirk:** imiterar en levande fisk och lockar storabborre från längre håll med breda svepande rörelser. Föredras av många storabborrespecialister.
- **Mormyshka:** liten droppformad blyklump med enkelkrok, fiskas med darrande mikrorörelser. Fungerar när abborren är trög och pirken inte ger hugg.

[Läs mer om isfiske](/teknik/isfiske)

## Utrustning

Val av utrustning beror på teknik. En kortfattad orientering:

**Spö:** Lätt till medeltungt haspelspö 7–8 fot med kastvikt 5–25 g täcker de flesta situationer. För drop-shot passar ett känsligare spö med snärtig topp (Medium-Light, Fast action). För pimpel används korta spön på 20–35 cm i varierande styvhet beroende på teknik.

**Rulle:** Haspelrulle storlek 2000–2500 med mjuk broms och bra linläggning.

**Lina:** Flätlina 0,10–0,15 mm (PE 0,6–1,0) med fluorocarbon-tafs 0,25–0,40 mm på 50–100 cm. Tunn flätlina ger bättre huggkänsel och längre kast. Vid risk för gädda används en kort ståltafs eller titanvajer ytterst.

**Beten:** Färgval anpassas till siktdjup och aktivitet. I klart vatten fungerar naturliga toner som silver, oliv och motoroil. I grumligt vatten ger starka kontraster bättre resultat, till exempel chartreuse eller klaroranje. I kallt vatten används långsammare presentation och mindre beten.

[Utrustningsguider för abborrfiske](/utrustning/abborrspon)

## Rekord

### Svenskt rekord (Sportfiskarnas Storfiskregister)

**3 150 g (3,150 kg), 51 cm**
Fångad av Gary Wickins den 9 mars 1985 i Hällers myr, Lysekils kommun, Bohuslän. Fångsten gjordes under en pimpeltävling med Lysekils Sportfiskeklubb, med en Bergmans-pirk agnad med maggot. Fisken är avgjuten och originalet lämnades till Naturhistoriska Riksmuseet.

Hällers myr är en tjärn på bara 8,4 hektar med ett maxdjup på ca 4 meter. Det föregående rekordet (2 761 g, Per-Erik Jacobsen 1984) kom från samma sjö. Rekordet har inte slagits sedan 1985. Närmast är Leif Krause med 2 875 g (1997) och Mona Widén med 2 859 g (2012).

### Världsrekord (IGFA All-Tackle)

**2,9 kg (6 lb 6 oz)**
Fångad av Kalle Vaaranen, Kökar, Åland (Finland), 4 september 2010.

Det svenska rekordet på 3,150 kg är tyngre men registrerades aldrig hos IGFA och räknas därför inte in i deras rekordbok. Registrering hos IGFA var ovanlig i Sverige på 1980-talet och fångsten gjordes under en lokal klubbtävling utan internationell rapporteringsrutin. Utöver IGFA-rekordet finns inofficiella rapporter om ännu tyngre abborrar, bland annat en fisk på 3,75 kg från Meuse-floden i Nederländerna (januari 2010), men dessa saknar fullständig IGFA-dokumentation.

### Nordiska rekord

- **Norge:** 3,17 kg, Knut Erik Berg, Mjøsa, 28 maj 1965.
- **Finland:** 2,99 kg, Kalle Vaaranen, Kökar, Åland, 4 september 2010 (samma fångst som IGFA-rekordet).
- **Danmark:** ca 3,2 kg, Furesøen (uppgifterna varierar mellan källor).
- **Storbritannien:** 2,806 kg (6 lb 3 oz), River Thames.

## Namn och etymologi

Ordet **abborre** kommer av fornsvenska *aghborre*, med roten *ak-* ("vara vass") och *borre* ("borste"). Det syftar på de vassa ryggfenstrålarna och gällockstaggarna, inte på vatten (å) som ibland felaktigt antas. Det vetenskapliga artnamnet *fluviatilis* betyder "av floden".

Vanliga svenska benämningar inom sportfisket:

- **Borre:** vardaglig kortform, vanlig bland sportfiskare.
- **Tusenbröder:** täta bestånd av småvuxen abborre.
- **Matabborre:** abborre i 200–500 g-klassen.
- **Storabborre / kilosabborre:** abborre över 1 kg.
- **Guldabborre / blåabborre:** sällsynta färgvarianter.

Abborren är **Medelpads landskapsfisk** och **Finlands nationalfisk**.

## Abborre som matfisk

Abborrens kött är vitt, fast och välsmakande. Fiskar i 200–500 g-klassen är lättast att tillaga, enkla att filea och ger benfria filéer om de rensas ordentligt. Klassiska tillagningar är stekt abborre med brynt smör och dill, ugnslagad abborre med citron och abborrfiléer i fiskgryta.

De allra största honorna producerar avsevärt mer rom än yngre fiskar och är viktiga för beståndets fortplantning. Att släppa tillbaka stora exemplar försiktigt gynnar fisket på sikt.

## Juridik och regler

Abborre saknar nationellt minimimått i Sverige. Det är fiskevårdsområdet (FVO) som bestämmer eventuella regler för det enskilda vattendraget eller sjön. Kontrollera alltid lokala regler på [HaV:s webbplats](https://www.havochvatten.se) eller [Länsstyrelsens sidor](https://www.lansstyrelsen.se) inför fiske.

### Fredningstider

Abborren är inte fredad under lektid i de flesta svenska vatten. Enskilda fiskevårdsområden kan ha infört egna fredningstider, framför allt under april–maj när leken pågår. Kontrollera det aktuella vattnets regler.

### Catch and release

Abborre tål catch and release väl. Den har sluten simblåsa men återhämtar sig snabbt vid normal djupfångst. Undvik hantering i extremt varmt vatten (över 22–23 °C) då stressresponsen ökar.

Romstinna honor på våren bör hanteras varsamt och återutsättas skyndsamt. De bär upp nästa generations rekrytering.

## Vanliga frågor

**Vad är skillnaden på en "tusenbror" och en vanlig abborre?**
Ingen genetisk skillnad. Tusenbröder är abborrar som fastnat i bottendjursdieten i ett överpopulerat vatten och aldrig gjort övergången till fiskdiet. Flytta en tusenbroder till ett vatten med god tillgång på betesfisk och den kan börja växa normalt igen.

**Varför hugger abborren bra ett pass och sedan ingenting?**
Vanligtvis beror det på att stimmet rört sig eller att lufttrycket ändrats. Abborren har sluten simblåsa och reagerar snabbt på tryckvariationer. Stabilt högtryck ger generellt bäst fiske. Sjunkande lufttryck försämrar ofta snabbt.

**Är det lämpligt att fiska abborre under leken?**
Abborren är inte fredad under lektid i de flesta svenska vatten, men romstinna honor i toppkondition är de individer som bär upp beståndet. Fisket strax före leken, när honorna är i sin bästa kondition, är både mer produktivt och mer skonsamt.```

## src/content/species/asp.mdx
```
---
title: "Asp"
slug: "asp"
description: "Allt om asp (Leuciscus aspius). Biologi, lekvandring, bästa tekniker, lagstiftning och rekord. Faktabaserad artsida för dig som vill fiska asp i Sverige."
heroImage: "/images/species/asp-hero.jpg"
targetTechniques:
  - spinnfiske
  - flugfiske
  - jiggfiske
  - trolling
difficulty: "mellannivå"
excerpt: "Storvuxen mörtfisk och aktiv rovfiskare. Nära hotad."
season: "Sen vår till tidig höst (maj till september, med juni och juli som toppmånader)"
topDestinations:
  - malaren
  - hjalmaren
  - vanern
  - dalaven
  - kolbacksan
  - emaan
  - gota-alv
faq:
  - q: "Är aspfiske tillåtet hela året?"
    a: "Nej. Asp är fredad 1 april–31 maj i alla vattendrag som mynnar i Vänern, Mälaren och Hjälmaren. I Eskilstunaån och Torshällaån gäller förbud hela året."
  - q: "Hur stor blir aspen?"
    a: "Vuxna aspar når normalt 60–80 cm och 2–5 kg. Fiskar över 3 kg bör återutsättas eftersom bestånden är lokalt svaga och de stora individerna är viktiga för reproduktionen."
  - q: "Var fiskar man bäst efter asp i Sverige?"
    a: "Mälaren är artens kärnområde i Sverige. Även Vänern och Hjälmaren har starka bestånd. Aspen fiskas bäst vid strömsatta sund och åmynningar under sommaren."
publishedAt: "2025-01-01"
updatedAt: "2026-05-01"
---

Aspen (*Leuciscus aspius*, tidigare *Aspius aspius*) är Sveriges största karpfisk och den enda inhemska karpfisken som är en utpräglad rovfisk. Den jagar löja och nors med spektakulära attacker i ytan, ofta synliga från land. För många sportfiskare är aspen en av landets mest eftertraktade arter just för det visuella jaktbeteendet.

## Biologi

### Utseende och identifiering

Aspen har en långsträckt, lateralt komprimerad kropp byggd för snabb acceleration. Munnen är stor med ett tydligt underbett, vilket är artens säkraste kännetecken. Sidorna är silverglänsande, ryggen blågrön till grågrön och fenorna grå till rödbruna. Aspen har 64 till 76 fjäll längs sidolinjen. Ryggfena, bukfenor och analfena är alla spetsiga.

Mindre exemplar förväxlas oftast med id eller färna. Färnan har en utbuktande bakkant på analfenan. Iden saknar aspens karaktäristiska underbett och har ett mindre tilltryckt huvud. Aspen kan hybridisera med id i vatten där båda arterna förekommer.

### Storlek och tillväxt

I svenska vatten är typisk fångststorlek 60 till 75 cm med en vikt på 2 till 5 kg. FishBase (Froese & Pauly, ref. 556) anger maxlängden till 120 cm och publicerad maxvikt till 9,0 kg. Havs- och vattenmyndigheten anger att arten kan väga upp till 15 kg, vilket avspeglar enstaka odokumenterade rapporter från östeuropeiska vatten. Exemplar över 10 kg är extremt sällsynta i Sverige.

Tillväxten varierar kraftigt mellan vattendrag beroende på temperatur, födotillgång och beståndstäthet. Värdena nedan är genomsnitt baserade på nordiska och centraleuropeiska studier. Enskilda individer kan avvika betydligt.

| Ålder  | Längd (cm) | Vikt (g)    |
|--------|-----------|-------------|
| 1 år   | 10–15     | 20–40       |
| 3 år   | 25–35     | 200–400     |
| 5 år   | 40–50     | 800–1 500   |
| 7 år   | 50–60     | 1 500–2 500 |
| 10 år  | 60–70     | 2 500–4 000 |
| 12+ år | 70–90+    | 4 000–8 000+|

Aspen blir könsmogen relativt sent. Hanar mognar normalt vid fyra till fem års ålder, honor något senare. Arten kan bli 20 till 25 år gammal.

### Diet

Som yngel och liten ungfisk äter aspen plankton, kräftdjur och insektslarver. Vid en längd kring 20 till 30 cm sker en tydlig övergång till fiskdiet. Vuxna aspar lever nästan uteslutande på fisk. Löja (*Alburnus alburnus*) och nors (*Osmerus eperlanus*) dominerar födovalet i de flesta svenska vatten. Mört, småabborre och stäm tas också. Stora aspar kan vid enstaka tillfällen ta vattenfågelungar.

Aspen saknar tänder i munnen men har kraftiga svalgben.

### Fortplantning

Aspen leker på våren när vattentemperaturen passerar omkring 6 °C, vilket i Mälardalen normalt inträffar under sista veckan i april eller första veckan i maj. Den vandrar då upp i strömmande biflöden till de stora sjöarna. Leken sker på grunda, forsande sträckor med stenig botten, ofta beväxta med vattenmossa.

Hanarna utvecklar lekvårtor på huvud och främre kropp. Flera fiskar kan stå sida vid sida på lekplatsen. Honan släpper romkornen över botten där de fäster vid sten och vegetation. Upplandsstiftelsens akustiska telemetristudier i Fyrisån, Örsundaån och Sagån, ledda av Johan Persson sedan 2014, visar att aspen är hemortstrogen och återvänder till samma å där den själv kläcktes. Vissa individer vandrar långa sträckor, från centrala Mälaren upp till lekplatser i Fyrisån vid Uppsala.

### Habitat och beteende

Vuxna aspar lever större delen av året i frivattnet i stora sjöar och större vattendrag. De jagar ofta i ytan i öppet vatten, gärna nära strömkanter, uddar, sund och utlopp där bytesfisk koncentreras. Unga aspar lever i stimmen under de första åren. Stimmen löses upp när fisken blir äldre, och vuxna individer är mer solitära eller jagar i mindre grupper.

Aspen är en utpräglad dagfisk. Den jagar synligt vid soluppgång och solnedgång och kan vara aktiv hela ljusa sommardagen. Vid kallare vatten och hård sol drar den sig djupare.

### Beståndssituation

Aspen var länge rödlistad i Sverige och bedömdes som Nära hotad (NT) i rödlistan 2020. I rödlistan 2025, fastställd av SLU Artdatabanken den 24 mars 2026, lämnar aspen rödlistan och klassas som Livskraftig (LC). Förbättringen kopplas till ett långvarigt åtgärdsprogram med fiskvägar, utrivning av vandringshinder och restaurerade lekmiljöer. Aspen omfattas fortfarande av EU:s art- och habitatdirektiv (bilaga II och V), vilket innebär att Sverige har skyldigheter att bevara arten och dess livsmiljö.

Huvudbeståndet finns i Vänern, Mälaren och Hjälmaren med tillrinnande vattendrag. Mindre bestånd finns i Göta älv, Motala ströms vattensystem, Emån, Dalälven och i sjön Garnsviken.

## Bästa säsong

### Vår

Lekvandringen är artens mest synliga skede. Aspen är dock fredad i alla tillrinnande vattendrag till Vänern, Mälaren och Hjälmaren från 1 april till och med 31 maj. Riktat fiske på lekande asp är förbjudet. När fredningen släpper och fisken återvänder till sjöarna börjar fisket öppna sig, först i grunda fjärdar och vid åmynningar.

### Sommar

Juni till augusti är toppsäsong. Aspen står i frivattnet och jagar löja i ytan, ofta i större grupper. Stimmen rör sig snabbt och kan dyka upp överraskande nära land. Spana efter brytningar i ytan, plaskande löja och måsar som dyker. Soliga, vindstilla morgnar och kvällar är klassiska tillfällen. Aspen kan dock hugga mitt på dagen, särskilt vid molnigt väder och lätt krusning.

### Höst

Septembers svalare vatten håller aspen kvar i ytan ytterligare några veckor. Allt eftersom temperaturen sjunker går fisken djupare och blir mer svårfångad. Oktober kan ge enstaka fångster, men aktiviteten är då markant lägre.

### Vinter

Aspen är i princip ofångbar vintertid och fångas extremt sällan vid pimpelfiske. Den står djupt i sjön och är inaktiv.

### Dagliga mönster

Tidig morgon från första ljuset till några timmar efter soluppgång är den mest produktiva tiden under sommaren. Aspjakten i ytan är då som mest intensiv. Kvällarna från ett par timmar före solnedgång ger ofta liknande aktivitet. Mitt på dagen vid hård sol drar sig fisken djupare och fisket går trögare.

## Fisketekniker

Varje teknik beskrivs i detalj på respektive tekniksida. Här ges en kortfattad orientering om vad som fungerar för asp.

### Spinnfiske

Spinnfiske är den klart vanligaste tekniken. Långsmala, snabbgående skeddrag i 10 till 25 gram efterliknar flyende löja och kan kastas långt, vilket är avgörande eftersom asp ofta är skygg. Vobblers i löjeimitation samt mindre jerkbaits fungerar väl. Snabb, jämn invevning med korta accelerationer triggar oftast hugg.

[Läs mer om spinnfiske](/teknik/spinnfiske)

### Jiggfiske

Lättare jiggar med smala shads i 7 till 12 cm, riggade på lätt jiggskalle, fungerar när aspen står något djupare eller är passiv. Tekniken är användbar runt strömkanter och vid åmynningar.

[Läs mer om jiggfiske](/teknik/jiggfiske)

### Flugfiske

Aspen är ett av Sveriges mest givande mål för flugfiskare med ytinriktning. Streamers i löjeimitation, klassiska zonkers och poppers fungerar bra. Klass 7 till 9 enhandsspö ger tillräcklig kastlängd. Snabba, ryckiga inspolningar imiterar flyende bytesfisk. Hugg i ytan på popper är ett av flugfiskets mest visuella upplevelser.

[Läs mer om flugfiske](/teknik/flugfiske)

### Trolling

Asp tas regelbundet som bifångst vid gös- och gäddtrolling i Mälaren och Vänern, främst på vobblers i löjefärger som dras grunt, mellan 1 och 4 meter. Riktad trolling efter asp är ovanligt men fungerar längs öppna ytor där fisken jagar i frivattnet.

[Läs mer om trolling](/teknik/trolling)

### Ytbeten och poppers

Poppers, walkers och propellerbeten är extremt effektiva när aspen jagar i ytan. Tekniken faller under spinnfiske men förtjänar omnämnande, eftersom de visuella huggen är en stor del av aspfiskets dragningskraft.

## Utrustning

Val av utrustning beror på teknik. En kortfattad orientering:

**Spö:** Spinnspö 9 till 10 fot i kastvikt 10 till 35 gram. Längden ger kastlängd, vilket är centralt eftersom aspen är skygg på öppet vatten. För flugfiske används enhandsspö i klass 7 till 9, gärna 9 fot.

**Rulle:** Haspelrulle i storlek 3000 till 4000 med jämn broms och hög inspolningshastighet. Snabbhet är viktigare än vid till exempel gäddfiske, eftersom man ofta vill veva betet undan från fisken i hög fart.

**Lina:** Flätlina 0,12 till 0,17 mm är standard. Tunn lina ger längre kast och bättre kontakt med betet.

**Tafs:** Fluorocarbon 0,30 till 0,40 mm, omkring 1 till 1,5 meter. Stållina behövs inte. Aspen saknar tänder i munnen och tar normalt betet hårt och snabbt utan att skada tafsen.

**Beten:** Långsmala skeddrag i 10 till 25 gram, vobblers i löjeimitation, poppers, mindre jerkbaits, jiggar i 7 till 12 cm och stora streamers för fluga. Naturliga silverfärger och vita nyanser fungerar oftast bäst i klart vatten.

[Utrustningsguide för aspfiske](/utrustning/aspspoen)

## Rekord

### Svenskt rekord (Sportfiskarnas Storfiskregister)

**8 030 gram, 90 cm**
Fångad av Anna Tainio i Mälaren, 15 augusti 2013. Aspen togs från en brygga vid Enhörna under abborrfiske. Vågen kontrollerades efter fångsten av Sportfiskarnas storfiskregistrerare Nicka Hellenberg. Omkretsen var 54 cm. Rekordet slog det tidigare med 15 gram.

### Världsrekord (IGFA All-Tackle)

**10,34 kg (22 lb 12 oz)**
Fångad av Giovanni Stanzione i Lake Mantova, Italien, 12 april 2018.

Det svenska rekordet på 8,03 kg är tyngre än det norska och det officiellt spöfångade finska rekordet, men har inte rapporterats in till IGFA. Rekordlistan för Sverige förs separat av Sportfiskarna.

### Nordiska rekord

- **Norge:** 5,34 kg, Eivind Thilesen, Øyeren, 31 augusti 2008. Aspen förekommer i Norge bara i Glommas vattensystem.
- **Finland:** 8,3 kg, Vanajanselkä, Valkeakoski, 11 februari 2023 (nätfångst, enl. Vapaa-ajankalastajien Keskusjärjestö). Största officiellt registrerade spöfångade exemplaret är ca 7,31 kg, Lojo, 2016.
- **Danmark:** Inget rekord finns. Asp förekommer inte naturligt i Danmark.

## Namn och etymologi

Det svenska namnet *asp* är belagt sedan tidigt 1600-tal som fiskbenämning. Namnet kommer sannolikt av att aspens fjäll i färg och struktur påminner om aspträdets bark. Ordet är besläktat med fornvästnordiska *ǫsp* och fornengelska *æspe*, alla med betydelsen aspträd.

Det vetenskapliga artepitetet *aspius* är en latinisering av det svenska namnet, skapad av Carl Linnaeus i tionde upplagan av *Systema Naturae* 1758. Typlokal är angiven som "Sveriges sjöar". Tidigare placerades arten i ett eget släkte *Aspius*, men modern molekylär systematik har fört den till släktet *Leuciscus* tillsammans med id och stäm. Det giltiga vetenskapliga namnet är i dag *Leuciscus aspius* (Linnaeus, 1758).

Aspen är Upplands landskapsfisk.

Informella sportfiskarbenämningar är bland annat *asping* (småländsk dialekt) och *stam* (östgötsk och värmländsk dialekt). Dessa namn är dialektala och förekommer sällan i modernt fiskespråk.

## Asp som matfisk

Aspens kött är vitt och fast men benigt. Många små Y-formade ben i ryggen gör fisken besvärlig att filea. Exemplar i 1 till 2 kg-klassen har bäst köttkvalitet och är lättast att hantera. Klassiska tillagningar är inkokning, rökning och färsbullar där benen mals ned. Stekt asp fungerar men kräver tålamod vid filéarbetet.

Stora aspar över 3 kg bör alltid återutsättas varsamt. Det tar fisken över tio år att nå den storleken, och bestånden är lokalt svaga i många vatten. De stora individerna är viktiga för beståndets reproduktion och återhämtning.

## Juridik och regler

Kontrollera alltid lokala regler på [HaV:s webbplats](https://www.havochvatten.se) eller [Länsstyrelsens sidor](https://www.lansstyrelsen.se) inför fiske.

### Minimimått och fönsteruttag

Sverige har inget nationellt minimimått i centimeter för asp. Inget nationellt fönsteruttag finns heller. Skyddet sker i stället uteslutande genom fredningstid i lekvattendrag. Vissa fiskevårdsområden och länsstyrelser har infört lokala minimimått eller fångstbegränsningar.

### Fredningstider

Fiske efter asp är förbjudet från och med 1 april till och med 31 maj i alla vattendrag som mynnar i Vänern, Mälaren och Hjälmaren. I Eskilstunaån och Torshällaån gäller fiskeförbud efter asp året om. Garnsviken i Mälaren har sedan 2024 ett vidare fiskeförbud 1 april till 15 juni för att skydda asp och gös under lek. Om asp fångas av misstag under fredningstid ska den omedelbart återutsättas med största varsamhet.

### Catch and release

Återutsättning av asp är inte juridiskt obligatorisk utanför fredningstider och fredningsområden, men starkt rekommenderat för stora individer. Aspen tål drillning väl om den hanteras varsamt. Använd håv med fiskvänlig knutlös nätduk, fukta händerna före hantering, kroka av i vattnet om möjligt och håll fisken under ytan vid foto. Lossa kroken försiktigt och vänta tills fisken simmar iväg av egen kraft.

## Vanliga frågor

**När är bästa tiden på året att fiska asp?**
Juni och juli är toppmånaderna. Aspen jagar då i ytan i frivattnet och är som mest aggressiv. Tidig morgon och sen kväll ger flest hugg. Maj kan vara bra efter att fredningen släppt, särskilt nära åmynningar dit aspen återvänder efter leken.

**Är asp fredad i Sverige?**
Asp är fredad i alla tillrinnande vattendrag till Vänern, Mälaren och Hjälmaren från 1 april till 31 maj. Utanför dessa vatten och perioder är fisket tillåtet, men lokala regler kan gälla. Aspen lämnade rödlistan 2025 och klassas nu som Livskraftig (LC), men omfattas fortfarande av EU:s art- och habitatdirektiv.

**Var fiskar man asp bäst i Sverige?**
Mälaren, Hjälmaren och Vänern hyser de starkaste bestånden. Inom Mälaren är fjärdar som Ekoln, Lårstaviken och Görväln klassiska. Hjälmaren erbjuder gott aspfiske vid sundet mellan Hemfjärden och Mellanfjärden. I Vänern är de södra delarna kring Lurö skärgård produktiva. Mindre bestånd finns i Dalälven, Emån, Kolbäcksån och Göta älv.

**Vad äter asp?**
Vuxen asp lever nästan uteslutande på fisk, främst löja och nors. Mört och småabborre tas också. Yngel och små ungaspar upp till omkring 20 cm äter plankton, kräftdjur och insektslarver innan de övergår till fiskdiet.

**Hur skiljer jag asp från id och färna?**
Aspens tydliga underbett är det säkraste kännetecknet. Iden har ett mer rundat huvud utan underbett och är generellt kortare och tjockare. Färnan har en utbuktande bakkant på analfenan, medan aspens analfena är spetsig. Aspen blir också betydligt större än både id och färna i svenska vatten.```

## src/content/species/gadda.mdx
```
---
title: "Gädda"
slug: "gadda"
description: "Fakta om gädda i svenska vatten – biologi, bästa säsong, tekniker, rekord och regler. Baserat på SLU Aqua, HaV och Sportfiskarnas Storfiskregister."
heroImage: "/images/species/gadda-hero.jpg"
targetTechniques:
  - jiggfiske
  - flugfiske
  - isfiske
  - trolling
difficulty: "nybörjare"
excerpt: "Toppredator i svenska sjöar och vattendrag."
topDestinations:
  - vanern
  - vattern
  - malaren
  - hjalmaren
  - storsjon
season: "Hela året (bäst vår och höst)"
faq:
  - q: "Vilket minimimått gäller för gädda?"
    a: "Nationellt minimimått saknas, men många vatten har lokala regler. Gädda under 40–50 cm bör alltid återutsättas. Honor under lekvåren bör alltid återutsättas varsamt."
  - q: "När är bäst tid att fiska gädda?"
    a: "Bäst fiske är april–maj direkt efter leken, samt september–november när gäddan aktivt jagar inför vintern. Sommaren kan vara trögare, särskilt i varmt väder."
  - q: "Måste man använda stålledare vid gäddafiske?"
    a: "Ja, alltid. Gäddans tänder skär igenom nylonlina och fluorocarbon på sekunder. Använd alltid stållina eller tjock fluorocarbonledare på minst 0,60 mm."
publishedAt: "2025-01-01"
updatedAt: "2026-05-01"
---

Gäddan (*Esox lucius*) är den mest eftertraktade rovfisken i Sverige och förekommer i nästan alla svenska vatten, från skärgårdens grunda vikar till de djupa insjöarna i norr. Den är en toppredator med avgörande ekologisk roll och ett av sportfiskets mest mångsidiga målobjekt.

## Biologi

### Utseende och identifiering

Gäddan är svår att förväxla med någon annan inhemsk fisk. Kroppen är långsträckt och spolformad, huvudet brett och tillplattat uppifrån med en utdragen, andliknande nos. Det stora gapet rymmer ett par hundra bakåtriktade tänder i underkäke, gomtak och tunga.

Rygg- och analfena sitter långt bak vid stjärtroten, vilket är en typisk byggnad hos bakhållspredatorer som accelererar explosivt från stillastående.

Grundfärgen är olivgrön på ryggen, ljusare med gula ränder eller fläckar på sidorna, och vit till gulaktig buk. Hos unga gäddor dominerar tydliga längsränder som på äldre individer bryts upp till oregelbundna fläckar. Färgteckningen varierar med livsmiljö. Gäddor som lever pelagiskt i öppet vatten är ofta blekare och mer gulaktiga än de som håller sig i tät vegetation.

En sällsynt genetisk mutation ger upphov till den så kallade **silvergäddan**, som saknar normal pricknyans och framstår stålblå eller silvergrå. Det är inte en underart, utan en ovanlig färgvariant som påträffas sporadiskt i svenska vatten.

### Storlek och tillväxt

Honor blir betydligt större än hanar. Nästan alla gäddor över 8 kg är honor. En hona når typiskt 70 cm vid sex års ålder. Hanar stagnerar ofta vid 70–75 cm.

Nedanstående tabell visar ungefärliga medelvärden från äldre svenska tillväxtdata. Variationen är stor. Tillväxten beror på vattentemperatur, tillgång på bytesfisk och populationstäthet. Siffrorna ska inte läsas som exakta riktvärden för ett enskilt vatten.

| Ålder | Längd (ca) | Vikt (ca) |
|---|---|---|
| 1 år | 12–20 cm | ~30 g |
| 2 år | 28–35 cm | ~200 g |
| 3 år | 35–50 cm | ~500 g |
| 5 år | 50–55 cm | ~1 kg |
| 7 år | 59–68 cm | ~2 kg |
| 9 år | 89–97 cm | ~6 kg |
| 11 år | ~99 cm | ~7–8 kg |

SLU Aqua har i en studie publicerad 2022 (*Canadian Journal of Fisheries and Aquatic Sciences*) visat att gäddans tillväxttakt har ökat längs svenska Östersjökusten i takt med stigande vattentemperaturer, baserat på åldersdata från 1963 till 2019. Paradoxen är att andelen riktigt stora individer ändå minskar, eftersom dödligheten (framför allt från säl och skarv) också har ökat.

### Diet

Gäddan är en utpräglad bakhållspredator. Den ligger stilla vid vegetation, längs strukturer eller i mörker mot ljusare bakgrund och utlöser en explosiv attack från stillastående.

Nyfödda yngel lever de första dagarna på gulesäcken, fästa vid vegetation. Vid fyra till fem centimeters längd övergår dieten till fiskyngel. Vuxna gäddor är uteslutande rovfiskar, ofta specialiserade på de talrikaste bytesfiskarna i det vatten de lever i. Vanliga byten är mört, benlöja, abborre, strömming och siklöja.

Gäddan tar också kräftor, grodor, smådäggdjur och sjöfågel vid tillfälle. Kannibalism är vanligt. Stora gäddor äter regelbundet mindre gäddor, vilket tvingar yngel att söka skydd i tät vegetation.

### Fortplantning

Leken sker i Sverige från mars till juni med stor geografisk variation. I södra Sverige kan den starta i mars, i norra Sverige pågår den ibland in i juni. Lektemperaturen är ungefär 6–10 °C, med tydlig aktivitet vid 8–12 °C.

Sportfiskare talar ofta om tre lekfaser: **isgädda** (tidigt, kallast vatten), **lövgädda** (mitt i säsongen, när löven slår ut) och **blomstergädda** (sista vågen). Det är informella termer, inte biologiska klassificeringar.

Leken sker på grunda, vegetationsrika bottnar som värms upp snabbt. Längs Östersjökusten vandrar många gäddor upp i sötvattendrag, åar och översvämmade marker för att leka. Forskning från Linnéuniversitetet har visat att dessa gäddor har ett tydligt homingbeteende. De återvänder år efter år till samma vattendrag där de själva kläcktes.

En 5-kilos hona producerar omkring 90 000 ägg. Rommen är klibbig och fäster vid vegetation. Kläckning sker efter 10–15 dygn beroende på temperatur.

### Habitat och beteende

Gäddan förekommer i nästan hela Sverige, med undantag av högt belägna fjällvatten. Den finns i insjöar, vattendrag och längs Östersjöns och Bottniska vikens kuster. På västkusten förekommer den bara i åmynningar. Den trivs inte i ren saltvatten.

Mindre gäddor håller sig stationärt i grunda, vegetationsrika vikar. Större individer söker sig i högre grad till djupkanter och öppet vatten, särskilt under sommaren då ytvattnet värms upp. Märkningsstudier visar att över 90 procent av märkta gäddor återfångas inom 5 km från märkningsplatsen.

Genetiska studier visar att gäddpopulationer i Östersjön är separerade på mycket korta geografiska avstånd. Bestånd i grannvikar kan vara genetiskt åtskilda. Det innebär att om ett lokalt bestånd slås ut är återkolonisering långsam.

### Beståndssituation

Situationen skiljer sig mellan vatten.

**Egentliga Östersjön:** SLU Aqua och Havs- och vattenmyndigheten bedömer beståndet som "mycket sannolikt inte inom biologiskt säkra gränser". Antalet storvuxna gäddor har minskat sedan 1990-talets början. Orsaker är ökad predation från säl och skarv, ökande bestånd av storspigg som äter gäddrom och -yngel, och förlust av grunda lekhabitat.

**Vänern:** Bedöms som "sannolikt inom biologiskt säkra gränser". Andelen gäddor över 100 cm i sportfiskets fångster har legat stabilt på 9–13 procent sedan 2014.

**Vättern, Mälaren, Hjälmaren:** Dataunderlaget bedöms som otillräckligt för en säker statusbedömning.

Forskning från SLU och Stockholms universitet visar att gäddans närvaro dämpar bestånden av småfisk som spigg, vilket gynnar kräftdjur som håller tillbaka fintrådiga alger. Brist på rovfisk bidrar alltså direkt till algproblem i Östersjön, inte bara brist på kväve och fosfor. Det är en ekologisk effekt som sällan lyfts i sportfiskesammanhang.

## Bästa säsong

### Vår

Förleksfisket i mars–april kan ge de allra största honorna, som då söker sig mot lekvikarna. Under leken är gäddorna fokuserade på fortplantning och tar dåligt. Många vatten har dessutom fredningstid. Efterleksfisket, ungefär en till tre veckor efter avslutad lek, är ett av årets bästa fisken på hungriga och magra honor.

### Sommar

Stora gäddor söker djupare och svalare vatten när yttemperaturen stiger över 18–20 °C. Trolling och djupfiske är effektiva metoder. Mindre gäddor finns kvar på grundare strukturer. Gryning och kväll är bättre tider än mitt på dagen.

### Höst

Hösten, framför allt september till november, är den mest produktiva perioden för storgädda. Gäddorna föräter sig inför vintern och följer pelagiska betesfiskstim. Stora wobblers, jigg och trolling fungerar bra. Senhösten, strax innan isläggning, ger ofta de bästa fångstchanserna på allra störst fisk.

### Vinter

Gäddan är aktiv hela vintern men mer trög. Isfiske med angel och balanspirk ger stabil fångst. I södra Sverige utan is pågår båtfisket med dödbete och långsam trolling hela vintern.

## Fisketekniker

Gäddan kan fångas med ett brett spektrum av metoder. Här följer en kortfattad beskrivning av vad som fungerar och när. Varje teknik beskrivs i detalj på respektive tekniksida.

### Jiggfiske

Mjuka jiggar är effektiva hela året, men särskilt produktiva under vår och höst när gäddan håller sig på medeldjupt vatten. Det går snabbt att avsöka olika djup och anpassa vikten efter bottenprofilen.

[Läs mer om jiggfiske](/teknik/jiggfiske)

### Wobblers och drag

Den klassiska gäddmetoden. Kastade eller trollade wobblers i storlekar från 7 cm till 25+ cm täcker alla situationer, från grundvattensfiske i vass till djuptrolling på Vättern. Trolling är särskilt effektivt på de stora sjöarna.

### Flugfiske

Flugfiske efter gädda har vuxit kraftigt sedan 2010-talet. Stora streamers på 9–10-vikts flugspö fiskas bäst på grunt vatten under vår, försommar och höst. Wirefortom är obligatoriskt.

[Läs mer om flugfiske](/teknik/flugfiske)

### Dödbete och rykfiske

Dödade bytesfiskar under flöte eller på botten passar utmärkt i kallt vatten, sent på hösten och på vintern, när gäddan vill ha minsta möjliga energiåtgång för en stor måltid. Metoden upplever en renässans bland svenska gäddfiskare.

### Isfiske

Balanspirk och angel är standardmetoderna under vintern. Angel med betesfisk på uppställd käpp ger ofta de riktigt stora fångstorna.

[Läs mer om isfiske](/teknik/isfiske)

## Utrustning

Val av utrustning beror på teknik. En kortfattad orientering:

**Spö:** För standardspinnfiske på insjö och skärgård räcker 2,7–3,0 m med castvikt 20–60 g. För jerkfiske och stora beten används kraftigare spön med 80–180 g castvikt. Trolling kräver ett separat spöval anpassat för djup och dragmotstånd.

**Rulle:** Haspelrulle storlek 3000–4000 för spinn- och jiggfiske. Multiplikatorrulle är standard för jerkfiske och trolling.

**Lina:** Flätlina är standard för spinn-, jigg- och jerkfiske. Monofil används ofta vid trolling och dödbete eftersom töjningen dämpar ryck.

**Tafs:** Wirefortom eller kraftig fluorocarbon (0,80 mm och uppåt) är obligatoriskt. Gäddans tänder klipper av tunnare material vid ett enda hugg.

**Håv och hantering:** Stor håv med mjukt gumminät, avkrokningsmatta och lång plattång är standardutrustning för säker hantering och återutsättning.

[Utrustningsguide för gäddspön](/utrustning/gaddspoen)

## Rekord

### Svenskt rekord (Sportfiskarnas Storfiskregister)

**21,07 kg, 128 cm**
Fångad av Fredrik Johansson från Enköping i norra Vättern, 1 april 2016. Metod: trolling med Zalt-wobbler på cirka 5 meters djup. Vågen dubbelkontrollerades i laboratorium.

Tidigare rekord var 19,34 kg från Vättern 1999, satt av Torben Larsson. Det stod i 17 år.

### Världsrekord (IGFA All-Tackle)

**25,0 kg (55 lb 1 oz)**
Fångad av Lothar Louis, Greffern Lake, Tyskland, 16 oktober 1986. Rekordet har stått i snart 40 år.

### Varför skiljer sig IGFA-rekord och Sportfiskarnas rekord?

IGFA kräver dokumenterad linklass, exakt vägning på certifierad våg, vittnen och ansökan inom 60 dagar. Sportfiskarnas Storfiskregister kräver vägning på krönt (kalibrerad) våg och fotodokumentation, men har inga krav på linklass.

Därtill återutsätter moderna sportfiskare en stor andel av sina storgäddor utan att väga dem på krönt våg. Fiskar på 18–19 kg har dokumenterats men aldrig officiellt registrerats av samma anledning. Det officiella rekordet är alltså sannolikt inte den största gädda som fångats i svenska vatten.

## Namn och etymologi

Ordet **gädda** kommer av fornsvenska *gæddha*, besläktat med isländskans *gedda* och fornhögtyskan *keit*. Det exakta ursprunget är osäkert, men flera forskare kopplar det till en indoeuropeisk rot med betydelsen "vass" eller "spetsig", vilket syftar på den långa nos och det spjutliknande huvudet. Det vetenskapliga artnamnet *lucius* är latin och användes redan i antiken för gädda – Plinius den äldre omnämner *lucius* i sin Naturalis Historia från år 77 e.Kr.

Det svenska trivialnamnet varierar regionalt. I Norrland och Finland används ofta **hauki** (av finskt ursprung) i talspråk. I sportfisket används ibland **grönlingen** om mindre individer, och **monstret** eller **kronan** om riktigt stora honor, men det är informella benämningar utan officiell status.

## Gädda som matfisk

Gäddans kött är vitt, fast och magert med ett distinkt sötvattenssött smak. Fiskar i 1–3-kilosklassen ger bäst förhållande mellan hantering och köttkvalitet. De är enkla att filea och ger rena filéer om man tar bort sidolinjen med de intramuskulära benen (Y-benen) noggrant.

Klassiska svenska tillagningar är gäddqueneller, kokt gädda med pepparrot och smör, och pannstekt gäddfilé med brynt smör och dill. Gädda lämpar sig också väl för fiskfärs och gäddkaka.

De allra största honorna, framför allt över 6–8 kg, är viktiga för beståndets reproduktion. En stor hona producerar mångfalt fler ägg än en liten och bör i möjligaste mån återutsättas.



Regelverket skiljer sig markant mellan Östersjön, de fem stora sjöarna och andra vatten. Kontrollera alltid lokala regler på [HaV:s webbplats](https://www.havochvatten.se) eller [Länsstyrelsens sidor](https://www.lansstyrelsen.se) inför fiske.

### Minimimått och fönsteruttag

**Östersjön (utom Bottenviken):** Minimimått 40 cm, maximimått 75 cm. Allt under 40 cm och över 75 cm ska återutsättas. Max tre gäddor (kombinerat med gös) per fiskare och dygn vid handredskapsfiske.

**De fem stora sjöarna (Vänern, Vättern, Mälaren, Hjälmaren, Storsjön):** Nationellt minimimått 40 cm. Inget nationellt fönsteruttag, men många fiskevårdsområden har egna regler.

**Övriga insjöar:** Nationellt minimimått saknas. Fiskevårdsområdet bestämmer.

### Fredningstider

Fredningstiderna varierar starkt mellan regioner och uppdateras löpande. Gotlands kustvatten, Kalmarsund och Öland har totalförbud 1 mars till 31 maj. Längs ostkusten från Uppsala till Kalmar finns ett stort antal fredningsområden med förbud under lekperioden, vanligtvis 1 januari till 15 juni. Stockholms skärgård har flera områden med fiskeförbud 1 april till 15 juni.

### Catch and release

SLU Aqua uppskattar att 85–91 procent av gäddorna i det svenska sportfisket återutsätts, vilket är internationellt högt.

Rekommendationer för skonsam återutsättning: använd kraftig utrustning för kort fajttid, håll fisken i vattnet så mycket som möjligt, använd avkrokningsmatta och lång tång, stöd fisken horisontellt, undvik hantering i varmt vatten (över 20 °C).

## Vanliga frågor

**Vad är det svenska rekordet på gädda?**
Sportfiskarnas officiella svenska rekord är 21,07 kg, fångat i Vättern 2016 av Fredrik Johansson från Enköping.

**Vilket är det bästa gäddvattnet i Sverige?**
Vättern producerar de allra största gäddorna och innehar samtliga moderna svenska rekord. Vänern är det vatten med störst volym gäddor och bedöms ha ett gott bestånd. Mälaren är tillgängligt och produktivt för de flesta. Östersjöns innerskärgårdar varierar kraftigt. Kusten från Uppsala till Blekinge har inrättat många fredningsområden på grund av svaga bestånd.

**Måste man använda wirefortom vid gäddfiske?**
Ja, alltid. Gäddans tänder klipper av både mono- och fluorocarbonlina med ett enda hugg. Wire eller kraftig fluorocarbon (minst 0,80 mm) är obligatoriskt.

**Är det tillåtet att använda levande betesfisk vid gäddfiske?**
Nej. Användning av levande betesfisk är förbjuden i Sverige.

**Varför minskar storgäddorna längs Östersjökusten trots fönsteruttag och fångstbegränsningar?**
SLU Aqua bedömer att ökad predation från säl och skarv, samt expanderande spiggbestånd som äter gäddrom och -yngel, nu är de dominerande dödlighetsfaktorerna, inte fisket. Fiskeregler ensamma räcker inte. Återskapade lekhabitat (gäddfabriker) och förvaltning av predatortrycket är också nödvändigt.```

## src/content/species/gos.mdx
```
---
title: "Gös"
slug: "gos"
description: "Gös (Sander lucioperca) – biologi, fisketekniker, rekord och regler. Komplett guide för gösfiske i svenska vatten med Vänern, Mälaren och Hjälmaren."
heroImage: "/images/species/gos-hero.jpg"
targetTechniques:
  - jiggfiske
  - drop-shot
  - trolling
  - spinnfiske
  - isfiske
difficulty: "mellannivå"
excerpt: "Nattaktiv rovfisk med ljuskänsliga ögon. Kräver djupa vatten."
topDestinations:
  - vanern
  - malaren
  - hjalmaren
  - bolmen
  - vattern
season: "Maj–Oktober"
faq:
  - q: "Vilket minimimått gäller för gös?"
    a: "Nationellt minimimått är 45 cm. I Vänern gäller 50 cm under perioden 1 april–30 juni. Kontrollera alltid lokala regler för det vatten du fiskar i."
  - q: "Varför är gös svår att återutsätta?"
    a: "Gösens simblåsa är känslig för tryckförändringar. Vid fiske på djup över 5–6 meter kan simblåsan överdistenderas. Återutsätt snabbt och kontrollera att fisken simmar ner stabilt."
  - q: "Vilken tid på dygnet fiskar man bäst efter gös?"
    a: "Gös är nattaktiv och ljuskänslig. Bäst fiske sker i skymning, gryning och under natten. Under sommaren kan aktiviteten vara låg mitt på dagen."
publishedAt: "2025-01-01"
updatedAt: "2026-05-01"
---

Gösen (*Sander lucioperca*) är Sveriges största abborrfisk och finns naturligt i de stora sjösystemen samt längs Östersjökusten från Skåne till Norrbotten. Det reflexskikt i ögat som kallas tapetum lucidum ger gösen ett massivt jaktöverläge i grumliga och mörka vatten, vilket gör den till en utpräglad skymnings- och nattjägare. Bestånden i Vänern, Mälaren och Hjälmaren är MSC-certifierade sedan 2017 och bedöms av SLU Aqua som välmående.

## Biologi

### Utseende och identifiering

Gösen har en långsträckt, torpedformad kropp som skiljer den tydligt från den kortare och kraftigare abborren trots att de tillhör samma familj, abborrfiskar (Percidae). Ryggen är mörk i gröna, brunaktiga eller nästan svarta nyanser. Sidorna är gröngula till silvriga med 8–12 mer eller mindre tydliga mörka tvärband, och buken är vit till silvergrå. Färgteckningen varierar kraftigt beroende på vattnets grumlighet och djup.

De två ryggfenorna är tydligt åtskilda. Den främre bär 13–15 vassa taggstrålar med rader av mörka prickar mellan fenstrålarna. Till skillnad från abborren saknar gösen tagg på gällocket och den karaktäristiska svarta fläcken i bakre kanten på första ryggfenan.

Det mest karakteristiska draget är **huggtänderna**: fyra påtagliga, något böjda tänder, två i överkäken och två i underkäken. Ögat är stort och kan se glasartat eller mjölkvitt ut i starkt ljus. Det är tapetum lucidum-skiktet som syns bakifrån och ger gösen dess mörkerseende.

### Storlek och tillväxt

Tillväxten varierar kraftigt mellan vatten beroende på temperatur, sommarens längd och tillgång på bytesfisk. Värdena i tabellen nedan är genomsnitt och bör tolkas som riktmärken, inte fasta normer. En gös i ett varmt, planktontätt söderläge kan växa dubbelt så fort som en jämngammal fisk i ett kallt, klart norrlandsvatten.

| Ålder | Liten eller sval sjö | Varmt, rikt vatten |
|-------|----------------------|--------------------|
| 1 år  | 6–10 cm              | 25–31 cm           |
| 2 år  | ca 15 cm             | 35–40 cm           |
| 3 år  | ca 22 cm             | 45–49 cm           |
| 5 år  | ca 34 cm             | 58–61 cm           |
| 7 år  | ca 44 cm             | 70–73 cm           |
| 10 år | ca 55 cm             | ca 80 cm           |

Hanen blir könsmogen vid 2–4 års ålder (ca 31–34 cm), honan något senare vid 3–5 år (36–39 cm). Honan växer snabbare och blir genomgående större. Konstaterad maxålder är minst 23 år. Gösar på 15 kg och ca 130 cm förekommer i Europa men är extremt sällsynta i Sverige.

### Diet

Gösen är i princip helt fiskätande från det att den är ca 10 cm lång, ofta redan under sitt första levnadsår vid goda förhållanden. Som yngel lever den 2–3 dagar på gulesäcken och övergår sedan till djurplankton och kräftdjur.

Vuxen gös föredrar **långsmala bytesfiskar** eftersom gapet är relativt litet. Typiska bytesarter i svenska vatten är nors, siklöja, mört, löja och abborre. Braxen och stor abborre undviks i regel. Högre temperaturer och riklig stimfisk driver intensivt jaktbeteende. Under vintern minskar födointaget kraftigt och stannar i princip av under 8 °C.

### Fortplantning

Leken sker i Sverige från **april till juni** när vattentemperaturen når 10–14 °C. Hanen anländer först till lekplatsen, som ofta är en grund (1–3 m) hårdbotten av sten, grus eller sand med växtlighetsinslag. På mjukbotten gräver hanen en grop med stjärtfenan. Gösen återvänder gärna till samma lekplats år efter år.

Paret simmar runt över lekgropen och avger rom och mjölke under en kort, intensiv akt. Hanen stannar kvar och vaktar rommen aktivt under hela inkubationen, ca 10–11 dygn vid 10 °C (110 dygnsgrader krävs). En stor hona producerar ca 200 000 romkorn per kilo kroppsvikt. Nykläckta yngel är 5–6 mm och sprider sig pelagiskt i fria vattenmassan.

Varma vårar med stabil temperatur ger starka årsklasser. De syns i fångststatistiken 3–6 år senare.

### Habitat och beteende

Gösen trivs i **stora, något grumliga och näringsrika sjöar** med siktdjup under 2,5 m. Den tolererar bräckt vatten upp till ca 11 ‰ salthalt men rom kräver under 2–3 ‰ för normal utveckling, vilket tvingar Östersjögösar att söka sig till sötare infjärdar för lek.

Syrebehovet är måttligt högt. Gösen undviker vatten med under 3,5 mg O₂/l. Djupval varierar med säsong och temperatur: på sommaren jagar den ofta pelagiskt nära ytan i de varma skikten, vintertid söker den sig till djupare och kallare lager (10–25 m i stora sjöar).

Vuxen gös lever ett kringflackande, delvis solitärt liv men förenar sig med andra individer under lekvandringen. Vandringar på 100 km och mer har dokumenterats. Vid Östersjökusten kan gösar vandra uppemot 250 km in i flodsystem för att leka.

### Beståndssituation

Gösen är rödlistad som **Livskraftig (LC)** av SLU Artdatabanken. Bestånden i de stora sjöarna är generellt välmående:

- **Mälaren:** Stabilt eller ökande bestånd. Genetiskt separata delbestånd har konstaterats i Ekoln och Ulvsundasjön.
- **Hjälmaren:** Stabilt bestånd men snäv åldersstruktur med få stora individer på grund av historiskt högt fisketryck.
- **Vänern:** Gös är den ekonomiskt viktigaste arten i Vänerns yrkesfiske. Bedöms av SLU Aqua som inom säkra biologiska gränser.

Gösfisket i Vänern, Mälaren och Hjälmaren är **MSC-certifierat sedan 2017**, vilket innebär att det bedömts som uthålligt av en oberoende tredje part. Aktuell beståndsstatus publiceras varje år i SLU Aqua:s Fiskbarometer (fiskbarometern.se).

## Bästa säsong

### Vår

Direkt efter islossning och när vattnet passerar 6–8 °C samlas gösarna kring grunda lekplatser. I Vänern infaller leken typiskt i maj och är reglerad med fredningsområden 25 april–25 maj. Direkt efter lek (slutet av maj och juni) är gösen ofta aktivt biten och gästar grunda hårdbottnar och strandnära kanter. Jigg och dödbete på 3–10 m ger bra resultat.

### Sommar

Den klassiska säsongen. Stim av nors och siklöja drar gösen ut i fria vattenmassan i de stora sjöarna. Soliga, varma dagar gör gösen utpräglat nattaktiv. Mulet och blåsigt väder ger bättre dagtidsaktivitet. Pelagisk vertikaljiggning, trolling och nattfiske med mjukbeten är de effektivaste metoderna.

### Höst

En av de bästa perioderna för stor gös. När vattnet svalnar under 15 °C samlas gösen i större stim längs djupkanter och branter, och beteendet blir mer förutsägbart. Nu fångas många av säsongens största fiskar med vertikal jigg på 8–20 meters djup.

### Vinter

Aktiviteten är låg men gösen kan fångas på isen med balanspirk och vertikalspö, ofta över djupkanter på 6–15 m. Bitfönstren är korta och infaller framför allt kring gryning och skymning. Obs: gös fångad från djupare vatten under isen riskerar barotrauma precis som sommartid, se avsnittet om catch and release.

### Dagliga mönster

Tapetum lucidum gör gösen till en av Sveriges effektivaste mörkerjägare. Aktivitetsmönstret varierar med vattnets klarhet:

- **Klart vatten, sommar:** Skymning, gryning och natt är klart bäst. Bitfönster kring 22–02 kan vara intensiva.
- **Grumliga vatten:** Gösen kan hugga dygnet runt eftersom ögonöverläget gäller även dagtid.
- **Vår och höst:** Skymning och gryning är bäst men fisken hugger även dagtid, särskilt vid molnigt väder.
- **Vinter/isfiske:** Korta fönster vid soluppgång och solnedgång.

## Fisketekniker

Varje teknik nedan beskrivs i detalj på respektive tekniksida. Här ges en orientering om hur tekniken passar för gös.

### Jiggfiske

Jiggfiske är idag den dominerande sportfiskemetoden för gös i Sverige. Mjukbete på jiggskalle (10–25 g beroende på djup) animeras med pumprörelser från botten och uppåt, med 10–18 cm paddletail-shads, twintail-jiggar och V-tail-shads som favoritbeten. En modern variant är **vertikalfiske**: båten positioneras med elmotor exakt över fisk som syns på ett högupplöst ekolod (LiveScope, ActiveTarget), och jiggen presenteras rakt under kölen på 5–25 m. De senaste svenska rekordgösarna har samtliga fångats med vertikalfiske.

[Läs mer om jiggfiske](/teknik/jiggfiske)

### Drop-shot

Drop-shot är effektivt när gösen är passiv eller står tätt vid botten. Vikten hänger längst ner (10–20 g) och ett mindre mjukbete (5–10 cm) sitter på en loop 20–60 cm ovanför. Tekniken fungerar från båt, brygga och strand och är särskilt bra vid kallt vatten och på djupa kanter.

[Läs mer om drop-shot](/teknik/drop-shot)

### Trolling

Trolling är den klassiska sommarmetoden i Vänern, Mälaren och liknande stora sjöar. Wobblers på 10–20 cm körs på 1,5–3 knop bakom planeringspulkor som sprider betena i sidled. Djupen varierar med termoklinens läge, ofta 3–12 m under sommaren. Långsammare fart vid kallt vatten, högre vid varmt.

[Läs mer om trolling](/teknik/trolling)

### Spinnfiske

Klassiskt kastfiske med wobbler fungerar vid lekvandring i tillflöden, från piren i grunda fjärdar och vid kantfiske från båt. Under skymning ger tysta, långsamt jerkade wobblers bra resultat från strand. Metoden passar nybörjare bra men ger sällan de största gösarna.

[Läs mer om spinnfiske](/teknik/spinnfiske)

### Dödbete

Dödbete är en av de mest underskattade metoderna för storgös, framför allt under den kalla halvåret. Ett dött bytesfiskbete (mört, löja eller liten siklöja, 10–18 cm) riggas på en krokskele och presenteras antingen stationärt på botten med bottensänke och tafs på 30–80 cm, eller pelagiskt under ett flöte. Metoden är extremt effektiv vid temperaturer under 10 °C när gösen inte ger fart åt aktiva beten.

[Läs mer om dödbete](/teknik/dodbete)

### Isfiske

Pimpling med balanspirk och vertikalspö på djupkanter och grynnor ger gös under isen. Bitfönstren är korta, oftast vid ljusväxlingarna. Flasher-ekolod (Vexilar, Garmin Striker) hjälper till att lokalisera fisken exakt. Tänk på simblåseproblematiken vid återutsättning, se catch and release-avsnittet.

[Läs mer om isfiske](/teknik/isfiske)

## Utrustning

Val av utrustning beror på teknik. En kortfattad orientering:

**Spö:** Jiggfiske kräver ett känsligt 6,5–8-fots spö i medium-fast action med bra sprötthet i toppen för att känna subtila bett. Trolling kräver kraftigare boomsystem eller downrigger-spön.

**Rulle:** Snabbspolerulle (2500–4000) för jiggfiske och spinnfiske. Multiplikator eller stabil haspelrulle för trolling.

**Lina:** Flätlina 0,10–0,17 mm ger bäst känslighet och kastlängd. Monofilament används vid trolling för naturlig stretch.

**Tafs:** Fluorocarbon 0,28–0,40 mm rekommenderas genomgående. Gösen är inte ledarskygg men huggtänderna kan skada tunnare tafs.

**Beten:** Mjukbeten i paddletail och twintail (10–18 cm) i neutrala naturfärger som motoroil, ayu och svart/silver är standardval. Wobblers i 10–20 cm för trolling och spinnfiske. Döda mörtbeten för dödbete.

[Utrustningsguide för gösspön](/utrustning/gosspon)

## Rekord

### Svenskt rekord (Sportfiskarnas Storfiskregister)

**12 530 g, 97 cm**
Fångad av Leif Ivarsson, sjön Stora Nätaren, Jönköpings län, 29 maj 2014. Fisken togs på vertikalfiske med jigg på 5 meters djup och slog det 26 år gamla rekordet av Harry Tennefors (12 007 g, Bråviken, 1988).

### Världsrekord (IGFA All-Tackle)

**11,48 kg (25 lb 3 oz)**
Fångad i Lago Maggiore, Schweiz, juni 2016.

Det svenska rekordet på 12,53 kg är tyngre än IGFA:s världsrekord på 11,48 kg. Skillnaden beror på att IGFA:s rekord kräver att fisken vägts och dokumenterats enligt strikta protokoll med certifierade vågar och godkända vittnen. Tennefors fisk från 1988 anmäldes aldrig till IGFA, och Ivarssons fisk godkändes heller inte i IGFA:s system. Det innebär att det officiella svenska rekordet faktiskt överstiger det officiella världsrekordet, ett förhållande som är känt men inte unikt i IGFA:s historia.

### Nordiska rekord

- **Norge:** 11,5 kg, Akersvannet (Vestfold), 13 juni 2011.
- **Finland:** 14,7 kg, godkänt 2024 av Finlands Rekordfisknämnd (Centralförbundet för Fiskerihushållning).
- **Danmark:** 11,00 kg, Rasmus Christensen tangerade rekordet 2023 (11,05 kg) men godkändes inte då fisken återutsattes utan formell vägning. Det officiella danska rekordet innehas av Ulf Hansen, Haraldsted Sø, 15 november 1978.

## Namn och etymologi

Ordet **gös** är belagt i svenskan sedan 1523 (fornsvenska *gyus*, *gös*, i Västgötalagen). Enligt SAOB (Svenska Akademiens ordbok) går ordet tillbaka på fornisländska *gjósa*, "forsa fram, strömma fram". En tolkning är att namnet syftar på att gösen, när den dras upp från djupare vatten, "öser" eller forsar ut maginnehållet genom munhålan eftersom simblåsan utvidgas av tryckskillnaden. Det är alltså möjligt att ett fiskebeteende gav fisken dess namn för flera hundra år sedan.

Samma rot återfinns i norska *gjørs* och äldre danska *gys*. Det vetenskapliga artnamnet *lucioperca* är en sammansättning av latinets *lucius* (gädda, som i *Esox lucius*) och *perca* (abborre). Direkt översatt: gäddabborre. Engelskans *pikeperch* bygger på exakt samma logik. Släktnamnet *Sander* skapades av den tyske naturforskaren Lorenz Oken och tog arten *lucioperca* som typart.

| Språk | Namn |
|-------|------|
| Svenska | gös |
| Norska | gjørs |
| Finska | kuha |
| Danska | sandart |
| Engelska | zander, pikeperch |
| Tyska | Zander |
| Franska | sandre |
| Ryska | судак (sudak) |

Bland svenska sportfiskare används informella termer som "kilogös" (en gös som passerat 1 kg), "femkilo" (drömgränsen för många, ca 80 cm) och "trofégös" (fisk över 10 kg). Dessa är informella sportfiskartermer utan officiell status.

## Gös som matfisk

Gösen anses av många vara Sveriges främsta sötvattenmatfisk. Köttet är vitt, fast, fintrådigt och magert med en mild, något söt smak och nästan inga bismaker. Redan i Hagdahls kokbok från 1879 beskrevs gösen som en "mycket värderad fisk med hvitt, fast och fintrådigt kött". På krog betalar grossisterna mer för gös än för de flesta andra sötvattenfiskar.

Bästa matfiskstorleken är **45–70 cm** (ca 1–3 kg). Filén är stor nog att ge gott utbyte och köttet är fortfarande mört.

Klassiska svenska tillagningar: stekt gösfilé med pepparrotssås och kokt potatis, pocherad gös med hovmästarsås, gösrullader fyllda med spenat, och smörstekt gös med skirat smör och färskpotatis. I Finland är kuhakeitto (gössoppa med grädde) en nationell sommarklassiker.

## Juridik och regler

### Minimimått och fönsteruttag

Reglerna fastställs av Havs- och vattenmyndigheten (HaV) i FIFS 2004:36 med kompletteringar.

- **45 cm minimimått** gäller i Vänern, Vättern, Mälaren och Hjälmaren med angränsande vattendrag, samt i Östersjöns samtliga delområden.
- **Maximimått 60 cm** gäller vid fiske med handredskap och ryssjor i **Östersjön** – fisk större än 60 cm ska återutsättas. Detta är ett uttagsfönster avsett att skydda de stora romstinna honorna.
- **Fångstbegränsning:** Söder om gränsen mellan Västernorrlands och Västerbottens län gäller max tre fiskar av gädda och gös sammantaget per dag och fiskande vid handredskap och ryssjor.

Lokala regler i fiskevårdsområden är ofta strängare, med minimimått 50 cm och baglimit 1–2 fiskar per dag. Kontrollera alltid lokalt.

### Fredningstider

Det finns ingen nationell fredningstid för gös. Skyddet under lek sker i stället via lokala fredningsområden:

- **Vänern:** Fiske efter gös är förbjudet i utpekade fredningsområden **25 april–25 maj**.
- Mälaren, Hjälmaren och Östersjökusten har lokala fredningsområden och redskapsbegränsningar som varierar mellan länsstyrelserna.

### Catch and release

Gösen tillhör fysoklisterna, fiskar med **sluten simblåsa** utan förbindelse till mag-tarmkanalen. Det innebär att fisken inte kan utjämna trycket när den snabbt dras upp från djupet. Barotrauma är vanligt från ca 8–10 m och djupare: simblåsan utvidgas, magen kan pressas ut genom munhålan och ögonen kan skjutas ut. Studier från Sverige och Tyskland visar dödlighet på 30–80 % för gös återutsatt från 12 m eller djupare.

Vill du fiska C&R: håll dig helst till under 10 m djup, drilla snabbt, hantera fisken i vatten och återutsätt med huvudet nedåt. Undvik att lyfta stor fisk lodrätt i käken.

Kontrollera alltid lokala regler på [HaV:s webbplats](https://www.havochvatten.se) eller [Länsstyrelsens sidor](https://www.lansstyrelsen.se) inför fiske.

## Vanliga frågor

**Varför biter gösen bäst på natten?**
Gösen har ett ljusreflekterande skikt i ögat, tapetum lucidum, som ger den ett markant jaktöverläge i svagt ljus. I mörker och skymning ser gösen bytet medan bytet inte ser gösen. I klarare vatten under sommaren är det vanligt att gösen knappt biter alls dagtid men är aktiv under hela natten.

**Vad är minimimåttet för gös i Sverige?**
I Vänern, Vättern, Mälaren, Hjälmaren och Östersjön är minimimåttet 45 cm. I Östersjön gäller dessutom ett maximimått på 60 cm vid handredskap, vilket innebär att gös över 60 cm ska återutsättas. Lokala regler kan vara strängare. Kontrollera alltid via [HaV:s reglersida för gös](https://www.havochvatten.se/fiske-och-handel/regler-och-lagar/arter-regler-for-fiske-och-rapportering/gos---minimimatt-fredningstid-och-fangstbegransningar.html).

**Varför dör gös som släpps tillbaka?**
Gösen har en sluten simblåsa utan förbindelse till matstrupen. Den kan inte aktivt släppa ut luft när den dras upp snabbt. Barotrauma uppstår vid tryckskillnaden och kan orsaka irreversibla skador på simblåsa och inre organ. Problemet ökar markant under 8–10 m. Fisk fångad grundare än 6–8 m överlever återutsättning väl.

**Vilket vatten i Sverige har flest stor gös?**
Mälaren, Hjälmaren och Vänern är de tre främsta gösvattnen för sportfiske. Mälaren har generellt god storleksstruktur med fler gamla individer. Hjälmaren har historiskt haft högt fisketryck med färre riktigt stora fiskar. Vänern ger störst chans till storfisk vid trolling och vertikalfiske under hösten.

**Kan man fiska gös under lekperioden?**
I Sverige finns ingen nationell fredningstid för gös men det finns lokala fredningsområden, till exempel i Vänern 25 april–25 maj. Det är lagligt att fiska gös under lektiden utanför fredningsområden, men många sportfiskare undviker att störa lekande fisk.```

## src/content/species/harr.mdx
```
---
title: "Harr"
slug: "harr"
description: "Harr – biologi, fisketekniker, bästa säsong och rekord. Komplett guide för harrfiske i svenska älvar och fjällsjöar med tips om utrustning och regler."
heroImage: "/images/species/harr-hero.jpg"
targetTechniques:
  - flugfiske
  - spinnfiske
  - isfiske
  - mete
difficulty: "mellannivå"
excerpt: "Snabbsimmande fjällsfisk med karakteristisk ryggfena."
season: "Juni–Oktober (bäst juli–september)"
topDestinations:
  - vindelälven
  - klarälven
  - piteälven
  - kalixälven
  - torneälven
  - indalsälven
  - ammeran
faq:
  - q: "Är harrfiske tillåtet i Vättern?"
    a: "Nej. Riktat harrfiske i Vättern är förbjudet sedan 2025 på grund av ett kraftigt decimerat bestånd. Bifångad harr ska omedelbart återutsättas."
  - q: "Vilket minimimått gäller för harr?"
    a: "Nationellt minimimått är 35 cm. Lokala regler kan vara strängare. Harr är känslig för hantering och bör alltid återutsättas varsamt och snabbt."
  - q: "Vilken teknik fungerar bäst för harr?"
    a: "Flugfiske är den klassiska metoden och mycket effektiv. Harr tar insekter i ytan under hatchar. Spinnfiske med små skeddrag och spinnare fungerar också bra."
publishedAt: "2025-01-01"
updatedAt: "2026-05-01"
---

Harren (*Thymallus thymallus*) är norrlandsälvarnas mest karaktäristiska laxfisk och ett av flugfiskets stora målarter i Sverige. Den känns igen på sin segelformade ryggfena, sin svaga doft av timjan och sin förkärlek för klara, snabbflödande vatten. Harren är Härjedalens landskapsfisk och en pålitlig indikator på god vattenkvalitet.

## Biologi

### Utseende och identifiering

Den stora ryggfenan är harrens signum. Hos hanen är den bredare och högre än hos honan, prydd med parallella rader runda mörka fläckar och med inslag av purpur och blålila i lekdräkt. Fenan sitter ungefär mitt på kroppen, vilket skiljer harren från alla andra svenska laxfiskar.

Kroppen är spolformad med relativt stora fjäll. Grundfärgen är silvergrå till bronsglänsande med diskreta längsgående streck och svarta småfläckar på kroppens framre del. Munnen är liten och når sällan bakom främre ögonkanten. Stjärtfenan är djupt kluven. Nyfångad harr har en svag men tydlig doft av timjan. Det är denna doft som gett arten sitt vetenskapliga namn.

### Storlek och tillväxt

Harren växer snabbt de första åren och bromsas tydligt efter könsmognad. Nedanstående tabell visar typiska värden från svenska bestånd. Variationen är stor mellan vatten, och sifforna ska läsas som genomsnitt.

| Ålder | Längd | Vikt |
|-------|-------|------|
| 4 år | 25–30 cm | 200–300 g |
| 5 år | 29–34 cm | 300–450 g |
| 6 år | 32–37 cm | 400–600 g |
| 7 år | 34–39 cm | 600–900 g |
| 8+ år | 40–50 cm | 1 000–1 800 g |

Vikter över 1,5 kg är ovanliga och kräver gynnsamma förhållanden. De allra största harrarna i Sverige brukar komma från kalla, bördiga fjällsjöar i Norrlands inland.

### Diet

Harren är en utpräglad insektätare men opportunistisk i sitt val av föda. Yngre individer lever på djurplankton och kräftdjur. Vuxna fiskar äter framför allt insekter i och kring vattenytan: dagsländor, nattsländor, mygg och knott. Under höst och vinter dominerar bottenlevande insektslarver som nattsländelarver och fjädermygglarver, samt märlor och snäckor. Stora individer tar också fiskrom och småfisk vid tillfälle.

Harren är känd för att snabbt smaka och spotta ut ett bete. Det är en av anledningarna till att flugfiske med känsliga, tunna tafsar ger bäst resultat.

### Fortplantning

Harren är en av få vårlekande laxfiskar och leker alltså inte på hösten som öring, röding och lax. Leken styrs av temperatur och inleds i regel vid islossningen när vattnet når 4–8 °C.

- Södra Sverige och Vättern: mars–april
- Norra Sverige och fjällvatten: slutet av april–juni

Leken sker i strömmande vatten på grus- och stenbotten, 0,3–3 m djup. Honan vibrerar ner sin bakkropp i gruset och deponerar äggen medan hanen täcker henne med sin ryggfena. Arten är polygynandrisk: båda könen parar sig med flera partner under samma leksäsong. En kilo hona producerar typiskt 3 000–8 000 ägg. Äggen kläcks efter tre till fyra veckor beroende på vattentemperatur.

### Habitat och beteende

Harren föredrar klara, syrerika vatten med sand-, grus- eller stenbotten. De klassiska habitat är strömmande sträckor i medelstora till stora älvar samt kalla, klara fjällsjöar och regleringsmagasin i Norrland. Längs Bottniska vikens kust, från norra Gästrikland till Norrbotten, finns ett genetiskt unikt kustharrbestånd i bräckvatten.

Trivseltemperaturen är 6–18 °C. Över 20 °C ökar stressresponsen och fisken tappar i kondition. Harren är en stationär art. Märkningsstudier visar att de flesta individer rör sig bara 0–1 km under ett år.

Harren är dagaktiv och söker ofta föda aktivt mitt på dagen när insektskläckningarna är som intensivast. Det skiljer den tydligt från öringen, som ofta är mer aktiv i skymning och gryning.

### Beståndssituation

Globalt bedömer IUCN harren som livskraftig (Least Concern, 2023). Bilden i Sverige är mer splittrad.

Havs- och vattenmyndigheten (HaV) och SLU Aqua pekar på allvarliga problem i flera delpopulationer. Kustharren i Bottniska viken bedöms som akut hotad enligt en SLU-rapport från 2017. Vandringshinder, försurning och klimatförändringar anges som de viktigaste orsakerna. I Vättern har beståndet minskat till kritiskt låga nivåer, vilket ledde till att HaV i mars 2025 införde ett totalt fiskeförbud på harr i hela sjön.

I norra Sverige är bestånden i fria, opåverkade älvar som Vindelälven och Piteälven relativt goda. Reglerade älvar och bestånd i söder är betydligt mer utsatta.

## Bästa säsong

### Vår

Perioden mellan islossning och lekstarten kan ge aktiv harr, men fredningstider gäller i de flesta norrländska vatten från 15 april. I fjällsjöar med sen islossning är pimpelfisket produktivt fram till dess. Kontrollera alltid lokala fredningstider innan du planerar vårfisket.

### Sommar

Juni till september är högsäsongen. Kläckningarna av dagsländor, nattsländor och knott är som rikligast från midsommar och framåt. Harren vakar intensivt i ytfilmen under varma dagar, och det är nu torrflugfisket är som bäst. Tidiga morgnar och sena kvällar kan vara extra produktiva när lufttemperaturen sjunker och kläckningarna koncentreras.

### Höst

September och oktober är undervärderade månader. Vattnet är kallt och klart, harren är vältränad och äter aktivt. Nymffiske och spinnfiske fungerar bra. Stora individer kan gå på äggimiterande mönster under perioder när öring och lax rommer i samma system.

### Vinter

I fjällsjöar och på lugnare sträckor i älvarna är pimpelfiske produktivt under isen. Mormyska med fjädermygglarv, maggot eller husmask ger bäst resultat. Aktiviteten varierar med lufttryck och ljusförhållanden under isen.

### Dagliga mönster

Harren är tydligt dagaktiv och fiskas bäst i klart dagsljus. De intensivaste huggen brukar komma mitt på dagen när insektskläckningarna peakar. Det är en av de tydligaste skillnaderna mot öringfiske: harren vakar när öringen gömmer sig.

## Fisketekniker

Varje teknik nedan beskrivs i detalj på respektive tekniksida. Här är en kort orientering om vad som fungerar och när.

### Flugfiske

Flugfiske är den dominerande metoden för harr och ger det mest precisa fisket. Torrflugor i storlek 16–22 är klassiska: Klinkhammer Special, Adams, CDC Caddis och Europa 12 täcker de flesta situationer. Nymffiske med tungt tungstenshuvud, till exempel Perdigon eller Pheasant Tail, är ofta ännu effektivare eftersom harren tar majoriteten av sin föda under ytan. Tjeckisk nymfning med kort lina nära botten och presentationsindikatorfiske med en hög torrfluga som nappsignalör är de vanligaste varianterna.

[Läs mer om flugfiske](/teknik/flugfiske)

### Spinnfiske

Spinnfiske är ett effektivt alternativ, särskilt när vinden omöjliggör flugfiske. Små spinnare i 0–2 gram och lätta skeddrag ger bäst resultat. Harren hugger ofta i stilla vatten strax nedanför en strid ström. Det svenska rekordet på 2 850 g togs på spinnare.

[Läs mer om spinnfiske](/teknik/spinnfiske)

### Isfiske

Pimpelfiske är produktivt i fjällsjöar och i lugnvatten i norrlandsälvarna under vintern. Mormyska med maggot eller fjädermygglarv fiskas med darrande mikrorörelser precis ovanför botten. Harren kan stå tätt i stimmen på vintern och finnas på samma ställe dag efter dag.

[Läs mer om isfiske](/teknik/isfiske)

### Mete

Bottenmete och flötmete med fjädermygglarv, maggot eller husmask är effektiva metoder i lugnare partier, framför allt under sensommar och höst. Metoden kräver lite utrustning och är ett bra alternativ för den som vill lära sig läsa vatten utan att investera i flugfiskeutrustning.

[Läs mer om mete](/teknik/mete)

## Utrustning

Val av utrustning beror på teknik. En kortfattad orientering:

**Spö:** Flugspö klass 3–5 i 9–10 fot passar de flesta situationer. Längre spön, 10–11 fot, underlättar tjeckisk nymfning. För spinnfiske räcker ett lätt UL-spö med kastvikt 1–10 g.

**Rulle:** Enkel flugfiskerulle med gott linlager för klass 4–5 lina. Till spinnfiske passar en liten haspelrulle i storlek 1000–2000.

**Lina:** Flytlina i WF- eller DT-format för torrflugfiske. Tungstensnajtad lina eller S3-sjunkande lina för djupare nymffiske.

**Tafs:** Lång och tunn tafs är avgörande. Spetsen bör vara 0,10–0,14 mm (5X–7X fluorocarbon). Harren har skarp syn i klart vatten och reagerar på för grova tafsar.

**Flugor och beten:** Torrflugor i strl 16–22, nymfer i strl 14–18 och till spinnfiske småspinnare i 0–3 g. Naturliga toner och diskreta färger fungerar i klart vatten.

[Utrustningsguide för harrspön](/utrustning/harrspoen)

## Rekord

### Svenskt rekord (Sportfiskarnas Storfiskregister)

**2 850 g, 63 cm**
Fångad av Per Renberg i Harrejaure, Lappland, 14 juli 1986. Fångsten gjordes med spinnfiske med spinnaren Droppen. Rekordet har stått i nästan 40 år och är ett av de mest långlivade i Sportfiskarnas register.

### Världsrekord (IGFA All-Tackle)

**3 lb 15 oz (~1,79 kg)**
Fångad i Latasenojoki, Finland, juni 2008.

Det svenska rekordet på 2 850 g är avsevärt tyngre än IGFA:s världsrekord. Anledningen är att IGFA kräver dokumenterad linklass, certifierad vägning och formell anmälan inom 60 dagar. Per Renbergs harr anmäldes aldrig till IGFA. Samma fenomen gör sig gällande för Finland, där historiska uppgifter om harrar på uppemot 6,7 kg saknar modern dokumentation enligt IGFA:s krav.

### Nordiska rekord

- **Norge:** 1,9 kg, 60 cm. Dag Svendsberget, Renaelva, 12 juli 1988.
- **Finland:** Moderna finska rekordfiskregistret (från 2000) bekräftar samma fångst som IGFA-rekordet från Latasenojoki 2008.
- **Danmark:** Harren reproducerar sig inte naturligt i Danmark i dag. Arten förekom historiskt i Storåen.

## Namn och etymologi

Ordet **harr** är gammalt och förekommer i fornsvenska dialekter som *har(r)* och *harre*. Det norska dialektala *harr* och *horr* är besläktade. Etymologin härleds till en indoeuropeisk rot med grundbetydelsen "den mörkfläckiga" eller "den spräckliga", besläktat med litauiskans *kérszas* (svart- och vitfläckig). Folkliga förklaringar om att harr skulle syfta på "gråaktig" är alltså inte fullt korrekta. Ordet är belagt i svenska skrifter från 1671.

Det vetenskapliga namnet *Thymallus thymallus* (Linnaeus, 1758) härstammar från grekiskans *thymallos*, ett gammalt namn på en laxartad fisk. Artnamnet syftar på den svaga timjandoften (*Thymus*) som färsk harr avger. Carl von Linné beskrev arten i Systema Naturae 1758.

Regionala och informella benämningar:

- **Harrabba:** informell term för en liten och oönskad harr
- **Storharr:** informell term för individer över ca 1,2 kg
- **Haerrie** (sydsamiska), **hárre** (lulesamiska): lokala samiska namn
- Internationellt kallas arten ibland "the lady of the stream" eller "sailfish of the north" för sin höga ryggfena. Dessa är informella populärtitlar.

## Harr som matfisk

Harrens kött är vitt, fast och välsmakande med en mild, distinkt smak som liknar sik och röding. En central regel: harren måste tillagas så färsk som möjligt. Köttkvaliteten försämras snabbare än hos de flesta andra laxfiskar. Fisken bör rensas omedelbart vid fångsten och tillagas samma dag. Infrysning ger märkbart sämre resultat.

Fiskar i 30–40 cm-klassen är enklast att tillaga och ger benfria filéer. Klassiska tillagningssätt är smörstekt harr på öppen eld, ugnsbakad i folie med smör och citron, och varmrökt i al- eller timjanträ.

Länsstyrelserna i norra Sverige rekommenderar att harrar över 45 cm återutsätts. Stora honor producerar avsevärt mer rom och är viktigare för beståndets reproduktion.

## Juridik och regler

### Minimimått

Det finns inget nationellt enhetligt minimimått för harr i Sverige. Lokala regler styr.

- **Norrbotten och Västerbotten (älvar och kust):** 35 cm. Höjdes från 30 cm 2013 av HaV med motiveringen att honorna i dessa bestånd normalt könsmognar vid 33–35 cm.
- **Övriga vatten:** varierar. Kontrollera fiskevårdsområdets regler för det aktuella vattnet.
- **Vättern:** Allt riktat fiske efter harr är förbjudet sedan 15 mars 2025.

### Fredningstider

Fredningstiderna varierar och uppdateras löpande. Här är de viktigaste gällande reglerna:

- **Norrbotten och Västerbotten (älvar och kust):** Totalförbud 15 april – 31 maj.
- **Norra Östersjökusten:** Fiskeförbud 15 april – 31 maj.
- **Vätterns tillflöden och sjön i sin helhet:** Totalförbud 15 mars – 31 maj (HaV-beslut i kraft sedan 15 mars 2025).

Enskilda fiskevårdsområden kan ha egna, strängare fredningstider utöver de nationella reglerna. Kontrollera alltid.

### Catch and release

Länsstyrelsen i Norrbotten rekommenderar återutsättning av alla harrar över 45 cm. Det är en rekommendation, inte ett lagkrav. Harren tål catch and release väl om den hanteras rätt: håll fisken i vattnet så länge som möjligt, undvik hantering i varmt vatten och stöd fisken horisontellt tills den simmar iväg stabilt.

I Vättern ska all harr, även oavsiktligt fångad, omedelbart återutsättas.

Kontrollera alltid lokala regler på [HaV:s webbplats](https://www.havochvatten.se) eller [Länsstyrelsens sidor](https://www.lansstyrelsen.se) inför fiske.

## Vanliga frågor

**Vad skiljer harr från öring?**
Harren känns igen på sin stora segelformade ryggfena, sin lilla mun och sina stora fjäll. Öringen har en lägre ryggfena, tydligare röda och svarta fläckar, och saknar harrens karakteristiska timjandoft. Harrens ryggfena sitter ungefär mitt på kroppen. Öringens sitter klart längre bak.

**Vilka flugor fungerar bäst för harr?**
Torrflugor i storlek 16–22 är klassiska: Klinkhammer Special, Adams och CDC Caddis täcker de flesta kläckningssituationer. Tungt nymffiske med Perdigon eller Pheasant Tail Nymph i storlek 14–18 är ofta ännu effektivare. Harren tar majoriteten av sin föda under ytan.

**Är harren fredad på våren?**
Ja, i de flesta svenska harrvatten. I Norrbotten och Västerbotten gäller totalförbud 15 april – 31 maj. I Vätterns tillflöden och sjön gäller förbud från 15 mars. Kontrollera alltid det aktuella vattnets regler.

**Hur stor kan en harr bli i Sverige?**
Typisk fångststorlek är 30–45 cm. Det svenska rekordet är 63 cm och 2 850 g, fångat i Harrejaure i Lappland 1986. Fiskar över 50 cm är sällsynta och kräver kalla, bördiga vatten med lågt fisketryck.

**Vilka är de bästa harrälvarna i Sverige?**
Vindelälven, Piteälven, Kalixälven, Torneälven och Klarälven är bland de mest klassiska. Ammerån i Jämtland och opåverkade sträckor av Indalsälven och Ljungan är också kända för goda harrbestånd. Kontakta det lokala fiskevårdsområdet för aktuell information om kortpriser och fångstrapporter.```

## src/content/species/havsoring.mdx
```
---
title: "Havsöring"
slug: "havsoring"
description: "Havsöring i svenska vatten: biologi, säsong, tekniker, rekord och regler. Baserat på SLU Aqua, HaV och Sportfiskarnas Storfiskregister."
heroImage: "/images/species/havsoring-hero.jpg"
targetTechniques:
  - spinnfiske
  - flugfiske
  - jiggfiske
  - mete
  - trolling
difficulty: "mellannivå"
excerpt: "Den havsvandrande öringen. En av Sveriges mest eftertraktade sportfiskar."
season: "April–september på västkusten, oktober–mars på Östersjökusten (bäst vår och höst)"
topDestinations:
  - morrum
  - vattern
  - vanern
  - storsjon
  - malaren
faq:
  - q: "Vad är det svenska rekordet på havsöring?"
    a: "Sportfiskarnas officiella svenska rekord är 15,26 kg och 104 cm. Det fångades av Lennart Westerlund i Emån den 16 september 1993 med flugfiske."
  - q: "Vilket minimimått gäller för havsöring?"
    a: "I Östersjön är minimimåttet 50 cm. På västkusten (Skagerrak och Kattegatt) gäller 45 cm. I vattendrag bestämmer det lokala fiskevårdsområdet."
  - q: "När är havsöring fredad i Sverige?"
    a: "På västkusten gäller totalförbud 1 oktober–31 mars. På sydkusten (Kullens fyr–Torhamns udde) är fredningen 15 september–31 december. Östersjöns ostkust saknar generell fredningstid men har många lokala fredningsområden vid åmynningar."
  - q: "Hur skiljer man havsöring från lax?"
    a: "Havsöringen har en rak eller svagt konvex stjärtfena, en kraftig stjärtspole man kan gripa om, och tydliga runda fläckar under sidolinjen. Laxen har en kluven, kilformad stjärtfena, smal stjärtspole och stjärnformade fläckar utan fläckar under sidolinjen."
  - q: "Vad äter havsöring?"
    a: "I havet äter vuxen havsöring främst strömming, skarpsill och tobis. Längs kusten tar den även spigg, tånglake, märlor och borstmask. Under lekvandringen i sötvatten äter den i princip inte, men hugger ändå på drag och flugor."
publishedAt: "2025-01-01"
updatedAt: "2026-05-01"
---

Havsöringen (*Salmo trutta*) är den havsvandrande formen av öringen och räknas av många svenska sportfiskare som landets mest åtråvärda bytesdjur. Den kombinerar dramatiska lekvandringen upp i åar med en tillvaro till havs längs svenska kuststräckor, från Bohuslän till Bottenviken. Bestånden varierar kraftigt mellan vatten och har minskat på flera håll, vilket gör reglerna mer komplexa än för de flesta andra arter.

## Biologi

### Utseende och identifiering

Havsöringen är genetiskt identisk med insjööringen och bäcköringen. Det är samma art (*Salmo trutta*) i tre olika livsformer. Den havsvandrande morfens utseende är ändå distinkt: kroppen är silverblank med ett begränsat antal mörka, runda eller X-formade fläckar ovanför och längs sidolinjen. Fläckar under sidolinjen är vanliga och är ett av de viktigaste kännetecknen för att skilja havsöring från lax.

Havsöringen förväxlas ofta med Östersjölax. Tre säkra kännetecken skiljer dem åt: havsöringen har en rak eller svagt konvex stjärtfena (laxen har en tydligt kluven), en kraftig och greppbar stjärtspole (laxens är smal och slirkänslig) samt fläckar under sidolinjen (laxen saknar dem i princip helt). Havsöringen har också fler fläckar på gällocken och ett längre käkben som når bakom ögat.

En uppvandrande havsöring i lekkläder byter silver mot bronsbrunt med röda fläckar. En utlekt och avmagrad "ockla" på hösten ser ut som en stor bäcköring.

### Storlek och tillväxt

I havet växer havsöringen betydligt snabbare än i sötvatten tack vare den rika kustdieten. Smoltifieringen sker vid 14–25 cm, oftast efter 1–3 år i sötvattnet i södra Sverige och 3–6 år i norra Sverige.

Nedanstående tabell är genomsnittsvärden för svenska vatten. Variationen är stor och beror på vattendrag, geografiskt läge och tillgång på mat i havet. Siffrorna ska inte läsas som exakta riktvärden för ett enskilt vatten.

| Stadie | Längd (ca) | Vikt (ca) |
|---|---|---|
| Smolt vid utvandring | 14–25 cm | 30–150 g |
| 1 år i havet | 30–41 cm | 0,4–0,8 kg |
| 2 år i havet | 45–61 cm | 1,0–1,5 kg |
| 3 år i havet | 50–72 cm | 1,5–3,5 kg |
| 4 år i havet | 70–90 cm | 3,5–7 kg |
| 5+ år i havet | 90–110 cm | 7–15+ kg |

Till skillnad från lax dör havsöringen normalt inte efter leken. Det är en flergångslekare som kan återvända till leken i upp till fem säsonger, vilket förklarar de riktigt stora exemplaren.

### Diet

Yngel och stirr i sötvatten lever på dagsländelarver, bäcksländelarver och små kräftdjur. Smolten och unga havsöringar i kustvattnet äter pungräkor, tångmärlor och spigg. Vuxna havsöringar i havet livnär sig framför allt på strömming, skarpsill och tobis. Längs kusten ingår även borstmask, tånglake och smårödingar i dieten.

Under själva lekvandringen i sötvatten äter havsöringen i princip inte. Hugget mot flugor och drag under leksäsongen är ett revirbeteende, inte ett ätbeteende.

### Fortplantning

Leken sker i strömmande vatten över grus- eller stenbottnar, vanligen på 5–30 cm djup. I södra Sverige pågår leken oktober–december, i norra Sverige september–november. Optimal lektemperatur är 4–8 °C. Honan gräver med stjärten en grop i gruset och lägger rommen i flera omgångar, ungefär 2 000 ägg per kilo kroppsvikt. Hanen utvecklar en tydlig käkkrok under leken. Rommen kläcks följande vår, mars–maj, beroende på vattentemperatur.

### Habitat och beteende

I havet rör sig havsöringen i regel på 0–3 meters djup, kustnära längs stränder och grundar. Optimal trivseltemperatur är 8–15 °C. När yttemperaturen överstiger 15–17 °C på sommaren drar sig fisken ut på djupare och svalare vatten och är svår att nå från land. Märkningsstudier visar att många bestånd håller sig inom 20 km från hemvattendraget, men enskilda fiskar kan vandra längre.

Havsöringen är en vandrare som rör sig längs stranden och avsöker grunda partier. Det är fisken som ska komma till dig, inte tvärtom. Det är därför ett rörligt fiske med många kastplatser ger mer än att stå still länge på samma sten.

### Beståndssituation

Enligt SLU Aquas senaste samlade analys (Magnusson m.fl. 2021) är beståndssituationen varierande och delvis oroande.

**Västkusten** visar en tydlig negativ trend. Rekryteringsstatusen sjönk från 75 procent av referensvärdet under 2014–2016 till 61 procent under 2017–2019. Torra somrar som torkar ut de små västkustbäckarna och konkurrens från en växande laxstam pekas ut som viktiga orsaker.

**Bottenhavet** uppvisar en långsiktigt svagt positiv trend men med kortsiktig nedgång. **Egentliga Östersjön** är relativt stabil men varierande. **Bottenviken** har länge haft låg status men visar en svagt positiv trend från dessa låga nivåer.

Mörrumsån är ett tydligt varningssignal: antalet utvandrande smolt har minskat de senaste åren, vilket ledde till att Mörrums Kronolaxfiske 2025 sänkte totalkvoten till 100 fiskar per säsong (lax, öring och hybrider sammanlagt). I Högvadsån, biflöde till Ätran på västkusten, har smoltutvandringen däremot ökat stadigt sedan 1950-talet. Vandringshinder, predation från skarv och säl samt yrkesfiske och tjuvfiske med nät i kusten är identifierade hot utöver klimat och habitatförlust.

## Bästa säsong

### Vår

Vår är högsäsong på västkusten, där fisket öppnar 1 april. Vattnet håller 5–10 °C och öringen är hungrig efter en lång vinter. Fisken håller sig på grunda, soluppvärmda stränder. På Östersjökusten är vår och försommar produktiva längs stränder söder om Torhamns udde, där det inte råder vinterfredningstid.

### Sommar

Sommaren är utmanarens säsong. Överstiger yttemperaturen 15–17 °C försvinner havsöringen från grunt vatten dagtid. Gryning och skymning ger korta men produktiva fiskepass. Trolling på djupare vatten är ett alternativ under högsommaren. Västkustens säsong stänger 30 september, Östersjöns sydkust 14 september.

### Höst

Höst är den klassiska storöringsäsongen på Östersjökusten, där fisket är tillåtet ända till fredningsperiodens start. September och oktober ger ofta de bästa kuststräckorna med strömmingsstim som lockar in öring på grunt vatten. Mulet, milt och blåsigt väder slår soligt stiltje varje gång. På västkusten är september sista månaden och ger bra resultat i åmynningarna.

### Vinter

På Östersjöns ostkust (norr om Torhamns udde) pågår fisket lagligt även vintertid på de flesta sträckor. Vinterfisket efter havsöring från land är ett växande fisheri i Stockholms skärgård och längs kusten söderut. Vattnet håller 1–5 °C och fisken har låg ämnesomsättning men tar beten i soluppvärmda sydvända vikar, framför allt eftermiddag.

### Dagliga mönster

Gryning och skymning är de konsekvent bästa tiderna. På vintern är sena förmiddagen och eftermiddagen produktivast när solen värmt upp ytvattnet. Stigande vattenstånd inför regnperioder är extremt produktivt vid åmynningar på hösten. Mulet väder och 3–5 m/s pålandsvind slår i regel stillastående klart väder.

## Fisketekniker

Varje teknik beskrivs i detalj på respektive tekniksida. Här ges en kortfattad orientering om vad som fungerar och när.

### Spinnfiske

Spinnfiske är den vanligaste metoden för havsöring längs svenska kusten. Skeddrag, inline-skeddrag och kustwobblers kastas längs grunda stränder, rev och vassbrynen. Rörlighet är avgörande: avsök ett område med 10–20 kast och byt sedan plats. I klart vatten fungerar naturliga färger bra. Vid mulet och mörkt vatten är orange, rött och chartreuse effektiva.

[Läs mer om spinnfiske](/teknik/spinnfiske/)

### Flugfiske

Flugfiske är en etablerad och snabbt växande metod för havsöring, framför allt i brakvatten och längs yttre skärgård. Räk- och märlimitationer, tobis- och spiggstreamers samt borstmaskimitationer är standardrepertoaren. På vår och höst fiskas grunt med flytande eller intermediate-lina. Klass 6–8 enhandsspö täcker de flesta situationer.

[Läs mer om flugfiske](/teknik/flugfiske/)

### Jiggfiske

Jiggfiske med mjuka shads på 7–12 cm har vuxit kraftigt i Stockholms skärgård och längs Östersjökusten. Tekniken är effektiv längs djupkanter och vid grundkanter när fisken inte håller sig på själva ytvattnet. Bra alternativ när det klassiska kustfisket är trögt dagtid på sommaren.

[Läs mer om jiggfiske](/teknik/jiggfiske/)

### Trolling

Trolling med wobblers och paravaner eller djuplödande drag ger resultat på sommaren när havsöringen dragit ut på djupare vatten. Effektivt på de djupare kustsektionerna och i sjöar med insjööringsbestånd. Kräver båt och är förbjudet inom fredningsområden för havsöring vid åmynningar.

[Läs mer om trolling](/teknik/trolling/)

### Mete

Mete med räka eller mask under flöte används vid åmynningar och på grunda vatten, framför allt under vår och tidig höst. Metoden är effektiv vid stillastående eller svagt rinnande vatten och passar utmärkt som komplement till spinnfiske när fisken är trög och vattnet klart.

[Läs mer om mete](/teknik/mete/)

## Utrustning

Val av utrustning beror på teknik. En kortfattad orientering:

**Spö:** För kustspinnfiske räcker ett 9–10 fots spö med castvikt 5–25 g. Vid hårt väder, långa kast eller storfisk används 10–35 g.

**Rulle:** Haspelrulle storlek 2500–3000 med stor spole för lång kastlängd är standard för kustfiske.

**Lina:** Flätlina 0,13–0,17 mm med fluorocarbon-tafs på 0,25–0,30 mm och cirka 1,5–2 m längd ger bra kastlängd och diskret presentation.

**Tafs:** Fluorocarbon är standard och behövs av två skäl: det är i princip osynligt i vatten och det tål slidning mot vassa stenar och musselkanter.

**Beten:** Skeddrag, inline-skeddrag och kustwobblers i 4–9 cm. Flugor i storlek 4–10 för flugfiske. Mjuka shads 7–12 cm för jiggfiske längs djupkanter.

[Utrustningsguide för havsöringspön](/utrustning/havsöringspon/)

## Rekord

### Svenskt rekord (Sportfiskarnas Storfiskregister)

**15,26 kg, 104 cm**
Fångad av Lennart Westerlund, Stenungsund, i Emån (Island Pool) den 16 september 1993. Metod: flugfiske med ett grönt utdrag, en Green Highlander-variant. Fisken var en hane och tog ungefär 30 minuter att dra in.

### Världsrekord (IGFA All-Tackle)

**44 lb 5 oz (20,1 kg)**
Fångad av Seumas Petrie, Ohau Canal, Twizel, Nya Zeeland, 27 oktober 2020.

IGFA separerar inte havsvandrande och insjölevande öring utan registrerar alla som *Salmo trutta*. Världsrekordfisken var inte en havsvandrande öring utan en kanallevande fisk vid en laxodling i Nya Zeeland. Det svenska rekordet (15,26 kg) är alltså det tyngsta kända spöfångade exemplaret av en sant havsvandrande havsöring i Europa.

### Nordiska rekord

- **Norge:** 13,20 kg, 103 cm, Sigmund Johansen, Skibotnelva, 1975.
- **Finland:** Officiellt sportfiskerekord 12,4 kg, Aurajoki, Åbo, 30 juni 2002. Naturliga havsöringsbestånd är starkt hotade i Finland och naturlig öring (med fettfena) är fullständigt fredad.
- **Danmark:** 15,155 kg, Christian Theilgaard, Öresund, 13 juni 1992. Saltvattensfångst på blink från båt.

## Namn och etymologi

Det svenska trivialnamnet **öring** kommer av att fisken leker över *ör*, det vill säga grovt grus på botten i strömmande vatten. Ordet beläggs i svenska källor från 1600-talet (Bureus Suml.). Förleden *havs-* markerar den havsvandrande livsformen. Det vetenskapliga artnamnet *Salmo trutta* är latin. *Salmo* är latin för lax och användes redan av Plinius den äldre. *Trutta* är latin och betyder öring.

Besläktade ord i nordiska språk: norska *sjøørret* och *havørret*, danska *havørred*, finska *meritaimen*, isländska *sjóbirtingur*. I sportfisket används ett flertal informella benämningar. **Blänkare** och **blanköring** syftar på silverblanka, nyuppstegna fiskar. **Ockla** och **gråockla** syftar på utlekta, mörka fiskar på hösten. **Börting** och **laxöring** förekommer regionalt. Det är informella termer utan biologisk status.

## Havsöring som matfisk

Köttet är rosa till djuprött och mer distinkt i smaken än odlad lax. Fetthalten är lägre (4–7 g per 100 g) vilket ger en magrare och mer koncentrerad omega-3-profil. Fiskar i storleken 45–65 cm, ungefär 1–3 kg, ger bäst förhållande mellan hantering och köttkvalitet.

Klassiska svenska tillagningar är gravad havsöring (mer fast i konsistensen och subtilare i smaken än gravad lax), kallrökt havsöring med enrisspån, varmrökt med citrontimjan och stekt filé med brynt smör och dill.

Östersjöfisk av den här typen omfattas av Livsmedelsverkets kostråd om fet fisk från Östersjön: gravida och barn bör inte äta den oftare än 2–3 gånger per år på grund av dioxinhalt.

Riktigt stora och äldre havsöringar bör återutsättas. De är nyckelindivider för beståndet och producerar flerfaldigt fler ägg än yngre fiskar. En utlekt ockla på hösten är dessutom i dålig kondition och smakar sämre.

## Juridik och regler

### Minimimått och fönsteruttag

**Östersjön (alla delområden):** Minimimått **50 cm**. Max ett exemplar per fiskande och dygn gäller för naturlig (ofettklippt) havsöring i stora delar av Östersjökusten.

**Västkusten (Skagerrak och Kattegatt):** Minimimått **45 cm**. Säsong 1 april–30 september.

I vattendrag och vid fiskevårdsområden gäller separata regler. Mörrumsån har 2025 en totalkvot på 100 fiskar per säsong (lax, öring och hybrider sammanlagt) med en personlig kvot på 2 avlivade fiskar per säsong.

### Fredningstider

**Västkusten:** Totalförbud **1 oktober–31 mars**. Fisket är tillåtet 1 april–30 september.

**Sydkusten (Kullens fyr–Torhamns udde):** Fredning **15 september–31 december**.

**Östersjöns ostkust (norr om Torhamns udde):** Inget generellt förbud, men ett stort antal lokala fredningsområden finns vid åmynningar, vanligen markerade med rödvita stolpar. Fredningsområdena är ofta 500 meter åt ömse håll om en åmynning.

**Torne älv:** Totalförbud för öringfiske sedan 2013.

**Skellefteälvens kustområde:** Allt öringfiske förbjudet 1 oktober–31 december.

### Catch and release

En studie publicerad i *Journal of Fish Biology* (Blyth m.fl. 2022) baserad på 162 havsöringar fångade längs Gotlands kust fann generellt låg dödlighet efter återutsättning och begränsade stressresponser. Studien visar dock att vattentemperatur över 10 °C ökar stressresponsen markant. Luftexponeringen bör hållas under 10 sekunder vid varmt vatten.

Rekommendationer: använd hullinglös krok eller kläm ihop hullingen vid C&R. Håll fisken under vatten vid fotografering. Stöd fisken horisontellt tills den återtar balansen. Undvik hantering vid höga vattentemperaturer.

Kontrollera alltid lokala regler på [HaV:s webbplats](https://www.havochvatten.se) eller [Länsstyrelsens sidor](https://www.lansstyrelsen.se) inför fiske.
```

## src/content/species/lax.mdx
```
---
title: "Lax"
slug: "lax"
description: "Lax i svenska vatten – biologi, bästa säsong, fisketekniker, rekord och aktuella regler. Baserat på SLU Aqua, HaV, Sportfiskarnas Storfiskregister och IGFA."
heroImage: "/images/species/lax-hero.jpg"
targetTechniques:
  - flugfiske
  - spinnfiske
  - trolling
  - mete
difficulty: "mellannivå"
excerpt: "Anadrom art med komplex biologi och strikta fiskeregler."
season: "Mars–oktober (bäst juni–augusti i norrlandsälvar, mars–maj i Mörrum och Halland)"
topDestinations:
  - morrum
  - torneälven
  - vanern
  - vattern
  - indalsälven
  - atran
  - klarälven
faq:
  - q: "Är laxfiske i Östersjön tillåtet?"
    a: "Riktat laxfiske i Östersjön är förbjudet sedan 2025. En fettfeneklippt (odlad) lax per fiskare och dag får tas. Vild lax (med fettfena) ska alltid återutsättas."
  - q: "Hur skiljer man en vild lax från en odlad?"
    a: "Odlad lax har fettfenan klippt som märkning. En lax med fettfena intakt är alltid vild och ska återutsättas. I Östersjön och älvar längs kusten gäller fettfeneregeln."
  - q: "Var fiskar man bäst efter lax i Sverige?"
    a: "Mörrumsån i Blekinge är det mest klassiska laxvattnet. Vänern och tributärälvar som Klarälven har Gullspångslax. Norrlandsälvarna är viktiga för vildlax."
publishedAt: "2025-01-01"
updatedAt: "2026-05-01"
---

Laxen (*Salmo salar*) är Nordens mest karismatiska sportfisk och lever ett liv som få andra arter: från grusbädden i en svensk skogsälv, ut på hundratals mils havsvandring, och tillbaka till exakt samma älv där den kläcktes. För svenska sportfiskare är laxen en drömfisk, ett ekologiskt mirakel och en art som befinner sig mitt i en pågående bevarandestrid om vattenkraft, miljögifter och fiskeförvaltning.

## Biologi

### Utseende och identifiering

Laxen är en strömlinjeformad fisk med silverblank kropp och X-formade, svarta fläckar utspridda framför allt ovanför sidlinjen. I havsfas är ryggen blågrön till stålblå, sidorna blanksilver och buken vit. En fettfena sitter på ryggsidan strax framför stjärtfenan. På odlade kompensationssatta laxar är fettfenan bortklippt, vilket gör det möjligt att skilja dem från vild lax.

Jämfört med sin närmaste släkting havsöringen (*Salmo trutta*) känns laxen igen på tre saker: en slankare stjärtspole (man kan i princip lyfta laxen i stjärten utan att den slinter), en kortare överkäk som inte når bakom ögats bakkant, samt fläckar som inte fortsätter nedom sidlinjen.

**Lekdräkt och könsskillnader.** När laxen återvänder till sin födelseälv börjar färgen mörkna. Honorna blir gråmetalliska till bronsfärgade. Hanarna utvecklar en utpräglad lekdräkt med gyllenbrun till rödaktig kropp och en utväxt på underkäken kallad **kype**, som kan bli så lång att hanen inte kan stänga munnen helt.

**Blankfisk och kelt.** En nyuppvandrad lax i sin bästa kondition kallas **blankfisk** eller **springer**. Efter leken kallas den utmärglad **kelt**. Till skillnad från stillahavslaxar dör inte all atlantlax efter leken. En del honor återvandrar till havet och kan leka igen, men andelen är liten.

**Parr och smolt.** Laxungar i älven kallas **parr** och känns igen på 8–12 ovala, mörka parrmärken längs sidorna. När parren når 12–16 cm börjar smoltifieringen: fisken silverfärgas, fenkanterna mörknar och fysiologin ställs om för saltvatten.

### Storlek och tillväxt

Laxens tillväxt sker i två helt olika tempon: långsamt i älven och explosivt i havet. Tillväxten i älvfasen styrs av sommarens längd och temperatur, vilket innebär att norrländska laxar tillbringar längre tid som parr än sydsvenska. I havsfasen är tillgången på sill, skarpsill och tobis avgörande. Nedanstående tabell bygger på SLU Aquas data och fångststatistik från svenska laxälvar. Variationen är stor mellan vatten – en Mörrumslax och en Torneälvslax av samma ålder kan skilja avsevärt i vikt.

| Ålder/livsstadium | Typisk längd | Typisk vikt | Kommentar |
|---|---|---|---|
| Gulesäcksyngel (0+, vår) | 2–3 cm | under 1 g | Lever på gulesäcken |
| Parr 1+ | 6–9 cm | 3–8 g | Första hela sommaren i älv |
| Parr 2+ | 9–13 cm | 10–25 g | Smoltifiering möjlig i södra vatten |
| Parr 3+ (norra älvar) | 12–16 cm | 20–40 g | Vanligaste smoltifieringsåldern |
| Smolt (vid utvandring) | 12–18 cm | 20–60 g | I genomsnitt ca 15 cm enligt HaV |
| 1 havsår (grilse) | 50–65 cm | 1,5–3,5 kg | Återvänder tidigt, oftast hanar |
| 2 havsår | 70–90 cm | 4–8 kg | Vanligaste storleksklassen i fångsten |
| 3 havsår | 90–110 cm | 8–15 kg | Klassisk storlax |
| 4 havsår | 105–125 cm | 15–22 kg | Drömfisk i de flesta älvar |
| 5+ havsår (sällsynt) | 120–140 cm | 22–30+ kg | Extremt ovanligt |

I havet kan laxen öka 5–10 kg per havsår. Vänerlaxen (Klarälvslax och Gullspångslax) är den mest storvuxna insjölaxen i världen. Rekordfisken från Vättern 1997 var bara 6 år gammal och vägde 20,4 kg.

### Diet

Laxens diet förändras dramatiskt under livet. Nykläckta gulesäckslarver lever på den egna gulesäcken i några veckor. Parren i älven äter bottenlevande insektslarver (dagsländor, nattsländor, bäcksländor, fjädermyggor), kläckande sländor i ytan, märlor och maskar. Parren är revirhävdande och positionerar sig vid stenar i strömmande vatten.

I havet övergår laxen till ren fiskdiet. I Östersjön är strömming och skarpsill de dominerande bytesfiskarna. I Vänern och Vättern lever laxen framför allt på siklöja. En återvändare i älven slutar i praktiken att äta under lekperioden. Att laxen ändå hugger på flugor och drag beror troligen på reflex, aggression eller revirinstinkt. Det är sportfiskets paradox.

### Fortplantning

Laxleken sker i svenska älvar normalt mellan slutet av september och december, med tyngdpunkt i oktober–november. Temperaturen bör ligga mellan 4 och 10 °C. Laxen kräver strömmande, syrerikt vatten över grus- och stenbottnar med kornstorlek 1–10 cm. Honan gräver med kraftiga stjärtslag en grop, kallad redd, i grusbädden. Hanen befruktar rommen och honan täcker den omedelbart med grus. En stor hona kan lägga 10 000–25 000 romkorn totalt, fördelade på flera redds.

Rommen utvecklas i grusbädden under hela vintern och kläcks i april–maj. Kläckning kräver ca 450–500 dygnsgrader. Gulesäckslarverna ligger kvar i grusen tills gulesäcken är förbrukad, sedan börjar de äta på egen hand.

### Habitat och beteende

Laxen är en anadrom art: den kläcks i sötvatten, vandrar ut i hav eller stor insjö, och återvänder för att leka i sötvatten.

**Smoltifiering.** Vid 12–18 cm sker en av naturens mest dramatiska fysiologiska omställningar. Smoltifieringen styrs av dagslängd och temperatur. Smoltvandringen sker typiskt i maj–juni, synkront med vårfloden. Om smolten hindras av en damm kan den fysiologiskt återgå till parrstadium och förlora saltvattenstoleransen.

**Havsvandring.** Östersjölaxen tillbringar 1–4 år i öppet hav och rör sig framför allt till södra Östersjön (Bornholms- och Gotlandsbassängen). SLU-forskning (Jacobson m.fl. 2019) visar att laxar från olika älvar utnyttjar olika delar av Östersjön och därmed möter olika födotillgång. Västkustlaxen vandrar till norra Atlanten, runt Färöarna och upp mot Grönland.

**Hemvändarbeteende (homing).** Med hjälp av luktminne präglat på födelseälvens vattenkaraktär, magnetisk navigation och troligen även solposition återfinner laxen sin födelseälv med extremt hög precision. Studier på märkt fisk visar att över 95 % av återvändarna hittar rätt älvsystem.

### Beståndssituation

Laxens beståndssituation varierar kraftigt mellan vatten. HaV ansvarar för förvaltningen i Sverige och inhämtar underlag från SLU Aqua (publicerat på fiskbarometern.se). Internationella bedömningar görs av ICES expertgrupp WGBAST.

**Östersjölaxen.** De svenska älvarna producerar 90–95 % av all vildlax i hela Östersjön. Bottenvikens bestånd har återhämtat sig sedan 2000-talets fredningar, men sedan 2014 har trenden i flera bestånd (Vindelälven, Ljungan) försämrats igen. ICES råd för 2026 innebär fortsatta begränsningar av havsfisket.

**Vänerlaxen.** Klarälvslaxen och Gullspångslaxen är de enda bestånd av sötvattenslevande atlantlax i hela EU som fortfarande leker naturligt. Vattenkraftsutbyggnaden har utrotat tre av Vänerns ursprungliga fem laxstammar. I Klarälven dör 70–85 % av smolten och upp till 99 % av kelten i kraftverksturbinerna, enligt studier från Karlstads universitet.

**Atlantlaxen på västkusten.** Ca 25 vattendrag, indelade i fyra genetiskt åtskilda populationer, men bestånden har försvagats kraftigt de senaste 20 åren.

Atlantlaxen är klassad som "Near Threatened" på IUCN:s rödlista och "Vulnerable" på HELCOM:s rödlista för Östersjön.

## Bästa säsong

### Vår

Mörrumsån öppnar 1 mars och är ett av de säkraste alternativen för blanka, fettrika "springers". April och maj är klassisk Mörrumstid. Hallandsåarna (Ätran, Lagan, Nissan) öppnar i april och har en stark vårtopp i maj. I Vänern och Vättern är trolling efter lax och öring som bäst april–juni när vattnet är kallt och fisken jagar ytligt.

### Sommar

Norrlandsälvarna öppnar typiskt 1 juni. Torne älv, Kalix, Byske, Åby, Råne och Pite har sin försommartopp i juni. Bergeforsen i Indalsälven och Vindel-/Umeälven är bland Nordens bästa storlaxvatten i juli–augusti. Varma somrar minskar huggvilligheten kraftigt och vid vattentemperaturer över 18–20 °C skärps rekommendationerna om obligatorisk catch & release.

### Höst

Mörrumsåns säsong avslutas 30 september. I norrländska älvar är september ofta stängt eller starkt begränsat med hänsyn till leken. I Vänern och Vättern tar storlaxfisket fart igen när vattnet kallnar. Klippfisket efter Gullspångslax i Vättern bedrivs framför allt november–mars.

### Vinter

Vätterns klippfiske från östra stranden är världsunikt. Tubfluga bakom kastdobb är standardmetoden. Det är i denna period världsrekordet på 20,4 kg (insjölax) sattes, den 21 december 1997.

### Dagliga mönster

Laxen hugger i regel bäst vid gryning och under de första timmarna på morgonen. Stiltje och stabilt väder ger bättre resultat än kraftiga vindskiften. I varmt sommarvatten är tidiga morgnar och sena kvällar som regel bättre än mitt på dagen.

## Fisketekniker

Varje teknik beskrivs i detalj på respektive tekniksida. Nedan ges en kortfattad orientering om vad som fungerar och när.

### Flugfiske

Den klassiska metoden i svenska och nordiska laxälvar. Vid hög vattenföring på våren används tunga tubflugor med sjunklina. När vattnet sjunker och värms upp övergår man till mindre flugor på flytlina eller intermediate. Tvåhandsspö (12–15 fot, klass 8–10) är standard i de stora norrländska älvarna, Mörrum och Klarälven. Enhandsspö (9–10 fot, klass 7–9) passar i mindre vatten som Lagan och Ätran. Flugfisket är obligatoriskt eller starkt rekommenderat på flera sträckor i Mörrumsån och ett antal norrländska älvar.

[Läs mer om flugfiske](/teknik/flugfiske)

### Spinnfiske

Mångsidigt och effektivt i strömmande vatten. Skeddrag (Toby, Hammertown, Tasmania) är klassiker i forsar och strömdrag. Wobblers används när draget ska gå djupare. Kastdobb kombinerad med tubfluga är populär i Mörrum och Klarälven där långa kast krävs från land. Spinnfiske är förbjudet eller starkt begränsat på många sträckor – kontrollera alltid lokala regler.

[Läs mer om spinnfiske](/teknik/spinnfiske)

### Trolling

Den dominerande metoden för storlaxfiske i Vänern, Vättern och Östersjön. Beten (skedar, wobblers och betesfisk i löjskalle) släpas efter båten med hjälp av downriggers, paravaner och planerboards. Ekolod och plotter är standardutrustning. Notera att trolling efter lax i Östersjön är kraftigt reglerat sedan 2024–2025. Endast fettfeneklippt lax får behållas, max en per fiskare och dag.

[Läs mer om trolling](/teknik/trolling)

### Mete

Naturbetesfiske med mask eller räka förekommer i flera laxvatten. Räkmete med saltrökt räka var historiskt en av Mörrumsåns mest fångstgivande tekniker, men är i dag begränsat eller förbjudet på många populära sträckor. Kolla alltid lokala regler. Levande betesfisk är förbjudet i Sverige.

[Läs mer om mete](/teknik/mete)

## Utrustning

Val av utrustning beror på teknik. En kortfattad orientering:

**Spö (flugfiske):** Enhandsspö 9–10 fot klass 7–8 för mindre vatten och smålax. Tvåhandsspö 12–14 fot klass 8–10 för stora norrländska älvar och storlax. Klass 10 och 14–15 fot vid extrema förhållanden och riktigt storlax.

**Spö (spinnfiske och trolling):** 9–11 fot med kastvikt 15–40 g för spinnfiske från land. 7–9 fot 12–25 lbs för insjötrolling, 8–9 fot 20–40 lbs för Östersjötrolling.

**Rulle:** Kvalitetsrulle med pålitlig broms och stor diameter för flugfiske (Loop, Hardy, Vision, Lamson). Haspelrulle 4000–6000 för spinnfiske. Multirulle med räkneverk (Abu, Penn, Shimano) för trolling.

**Lina:** Scandi shooting head, Skagit eller traditionell DT/WF för flugfiske. Nylonlina 0,30–0,40 mm eller flätlina 20–40 lbs med nylontafs för spinnfiske. 200–300 meter 0,40 mm nylon för trolling.

**Tafs:** 0,28–0,40 mm nylon (10–20 lbs) i älvfiske, tjockare i grumligt högvatten. Fluorocarbon för bättre osynlighet. Vid trolling används beteslås och lekstycke.

**Beten:** Tubflugor (Sun Ray Shadow, Green Highlander, Templedog, Frances, Cascade) för flugfiske. Skedar (Toby Magnum, Hammertown, Tasmania) och wobblers (Rapala Magnum, Salmo Whitefish, Bomber 15A) för spinnfiske och trolling. Skedar (ISMO, Northern King, Rhino) och löjskallar (Jackpot, Spinflex) för trolling.

[Utrustningsguide för laxspön](/utrustning/laxspon)

## Rekord

### Svenskt rekord (Sportfiskarnas Storfiskregister)

**28,720 kg, 135 cm**
Fångad av Veikko Halunen, Pukaviksbukten utanför Hanö i Östersjön, 1992. Metod: trolling. Rekordet har hotats vid ett flertal tillfällen men aldrig officiellt ersatts. En 29,2 kg tung lax togs i Bergeforsen 2010 av Uwe Lehrer, men godkändes inte eftersom reglerna för vägning och vittnen inte uppfylldes.

**Insjörekord (Gullspångslax):** Dennis Gustavsson, 20,4 kg och 110 cm, Vättern vid Öninge den 21 december 1997. Klippfiske med tubfluga bakom kastdobb. Fisken var 6 år gammal. Räknas också som världsrekord för insjölevande atlantlax.

### Världsrekord (IGFA All-Tackle)

**35,89 kg / 79 lb 2 oz**
Fångad av Henrik Henriksen, Tana älv (Tanaelva) vid Storfossen, Finnmark, Norge, 1 januari 1928. Fisken togs på sluk efter ett drag som varade i över 12 timmar. Det är ett av de äldsta och mest svårslagna rekorden i IGFA:s system – det fyller 100 år 2028.

Det norska sportfiskeförbundet (Villmarksliv) godkänner inte Henriksens fångst som officiellt rekord, och listar i stället Nils Valles lax på 32,5 kg (Tana, 7 juli 1951) som Norges gällande rekord.

### Nordiska rekord

- **Norge (IGFA / internationellt):** 35,89 kg, Henrik Henriksen, Tana, 1 januari 1928.
- **Norge (Villmarksliv/nationellt):** 32,5 kg, 142 cm, Nils Valle, Tana, 7 juli 1951.
- **Finland:** Ca 22 kg, Torneälven och Tana-systemet, flera fångster på 2010-talet.
- **Danmark:** 26,5 kg, 136 cm, D.C. Dinesen, Skjern Å, 15 april 1954.

## Namn och etymologi

Ordet **lax** är ett mycket gammalt arvord gemensamt för germanska, baltiska och slaviska språk. Det är belagt i fornsvenskan, fornisländskan och fornnorskan i samma form. Motsvarigheter finns i danskans *laks*, nyhögtyskan *Lachs*, anglosaxiskans *leax*, litauiskans *lãszis* och ryskans *losos*. Ordet är belagt i skriftlig svenska sedan 1300-talet.

Det samiska ordet *luossa* är lånat från de germanska språken och lever kvar i ortnamn som Luossavaara vid Kiruna, berget som gett namn åt LKAB.

Det vetenskapliga namnet *Salmo salar* sattes av Linnaeus 1758. *Salmo* är av keltiskt ursprung och har gett franskans *saumon* och engelskans *salmon*. Epitet *salar* betyder ungefär "hoppare" – en hänvisning till laxens förmåga att hoppa över forsar och vattenfall. På engelska kallas laxen ibland **"The Leaper"**.

Vanliga benämningar inom sportfisket (informella):

- **Blankfisk / springer:** Nyuppvandrad lax i toppkondition.
- **Grilse / ensjövinterslax:** Återvändare efter ett havsår, vanligen en hane på 1,5–3,5 kg.
- **Kelt / utlekt lax:** Utmärglad fisk efter leken.
- **Vänerlax:** Samlingsnamn för Klarälvslax och Gullspångslax.
- **Storlax:** Informell term för lax över ca 10 kg, utan officiell definition.

## Lax som matfisk

Laxköttet är fett, rosaorange till djuprött och har en rik, smörig smak. Vild atlantlax är generellt fastare och något magrare än odlad norsk lax. Fiskar i 3–6-kilosklassen är enklast att tillaga och ger rena filéer utan onödigt spill.

Klassiska svenska tillagningar är gravad lax med dill och hovmästarsås, varmrökt lax med enbär och bok, laxpudding med potatis och dill, stekt lax med brynt smör samt laxsoppa.

**Livsmedelsverkets kostråd.** Lax från Östersjön, Bottniska viken, Vänern och Vättern kan innehålla höga halter dioxin och PCB. Råd gäller även lax fångad i älvar som mynnar i dessa vatten.

- Barn och ungdomar upp till 18 år, gravida, ammande och den som planerar att bli gravid: högst 2–3 gånger per år.
- Övriga vuxna: högst en gång per vecka.
- Odlad lax (norsk) omfattas inte av dessa begränsningar.

Rå vildfångad lax kan innehålla parasiter och bör frysas i minst 24 timmar vid −20 °C, eller värmas till minst 60 °C, innan den äts rå. Odlad lax behöver inte frysas.

Stora, äldre honor är viktiga för beståndets reproduktion och bör i möjligaste mån återutsättas.

## Juridik och regler

Laxfiske är ett av de mest detaljreglerade fiskena i Sverige med regler på EU-nivå, HaV:s nationella föreskrifter (FIFS 2004:36), länsstyrelsernas beslut och lokala fiskevårdsföreskrifter.

### Minimimått och fångstbegränsningar

**Östersjön (alla delområden 22–31):** Allt fritidsfiske efter lax är som huvudregel förbjudet. Undantag: en fettfeneklippt lax per fiskare och dag. All vild lax (med fettfena intakt) ska omedelbart återutsättas.

**Undantag i Bottenviken (delområde 31):** Inom fyra nautiska mil från baslinjen, norr om 59°30′ N, gäller ett något annorlunda regelverk under 1 maj–31 augusti. Nationell lagstiftning kräver dock fortfarande att enbart fettfeneklippt lax behålls.

**Minimimått i svenska vatten:**

- Östersjön: 60 cm
- Skagerrak och Kattegatt: 45 cm
- Svinesund och Idefjorden: 50 cm
- Vänern: 60 cm (enbart fettfeneklippt lax får behållas)

### Fredningstider

Fredningstider och kvoter varierar kraftigt mellan älvar och vattendrag. Nedan följer ett urval.

**Mörrumsån:** Säsong 1 mars–30 september. Minimimått 50 cm. Personlig kvot: max 2 avlivade fiskar per säsong, max 1 per dag. Totalkvot för hela ån 100 avlivade fiskar per säsong 2025. Obligatorisk catch & release när totalkvoten nåtts. Enbart spinn- och flugfiske, ett spö per person.

**Torne älv:** Minimimått 50 cm. Max 2 laxar per fiskare och säsong. Efter två behållna laxar är vidare laxfiske förbjudet hela året.

**Norrbottens vildlaxälvar (Kalix, Råne, Pite, Åby, Byske):** Max 1 lax per person och dag. Fredad från 1 september. Ryckfiske och paravan förbjudet.

**Klarälven och Vänern:** Vild Klarälvslax är fredad och ska omedelbart återutsättas. Enbart fettfeneklippt lax och öring får behållas i Vänern. Max 3 laxar/öringar per person och dag.

Fångstrapportering är obligatorisk i ett flertal älvar. I Mörrumsån ska all fångst, inklusive återutsatt fisk, registreras samma dag.

### Catch and release

Atlantlaxen tål catch and release förhållandevis väl, men följande principer ökar överlevnaden:

- Håll drillningen kort, särskilt vid varmt vatten.
- Håll fisken i vattnet under hela avkrokningen och vid foto.
- Använd hullinglösa krokar eller kläm ned hullingen.
- Stötta fisken horisontellt och håll nosen mot strömmen tills den simmar iväg av egen kraft.
- Undvik catch and release vid vattentemperaturer över 18–20 °C. Dödligheten ökar kraftigt i varmt vatten.

Kontrollera alltid lokala regler på [HaV:s webbplats](https://www.havochvatten.se) eller [Länsstyrelsens sidor](https://www.lansstyrelsen.se) inför fiske.

## Vanliga frågor

**Kan man fortfarande trollingfiska efter lax i Östersjön?**
Ja, men under strikta villkor. Sedan 2025 gäller att all vild lax (med fettfena intakt) omedelbart ska återutsättas. En fettfeneklippt lax per fiskare och dag får behållas. Riktat havsfiske efter vild lax är förbjudet. Reglerna bygger på EU-förordning (EU) 2024/2903.

**Vad är skillnaden mellan Klarälvslax och Gullspångslax?**
Båda är sötvattenslevande atlantlaxar som lever och växer upp i Vänern. De leker i varsitt vattendrag: Klarälvslaxen i Klarälven och Gullspångslaxen i Gullspångsälven. Genetiskt är de separata bestånd. Gullspångslaxen är extremt snabbväxande och det bestånd som producerat de största insjölaxarna i världen.

**Varför hugger laxen i älven om den inte äter under leken?**
Exakt varför är fortfarande inte klarlagt. Vanligaste förklaringen är att hugget är en betingad reflex eller ett aggressivt revir- och dominansbeteende som kvarstår från parrstadiet. Laxen hugger inte för att den är hungrig.

**Måste man ha fiskekort för att fiska lax i Sverige?**
I de allra flesta vatten, ja. Fritt handredskapsfiske gäller i Östersjön utanför tätorter för enskilt fiske – men de kraftiga restriktionerna för lax gäller oavsett fiskekortskrav. I alla älvar och i de stora sjöarna krävs fiskekort. Kontrollera det aktuella vattnets regler hos respektive fiskevårdsområde.

**Vad menas med fettfeneklippt lax?**
Odlad kompensationslax som sätts ut i vatten där vattenkraften har skadat naturlig reproduktion, märks genom att fettfenan klipps bort. Det gör det möjligt att skilja odlad från vild fisk i fångsten. Enbart fettfeneklippt lax får behållas i Östersjön och Vänern.```

## src/content/species/oring.mdx
```
---
title: "Öring"
slug: "oring"
description: "Öring i svenska vatten – biologi, havsöring, insjööring och bäcköring. Guide till bästa säsong, fisketekniker, rekord och regler baserad på SLU Aqua och HaV."
heroImage: "/images/species/oring-hero.jpg"
targetTechniques:
  - flugfiske
  - spinnfiske
  - jiggfiske
  - trolling
  - mete
difficulty: "mellannivå"
excerpt: "Havsöring, insjööring och bäcköring. Tre livsformer, ett genus."
season: "Hela året (bäst mars–maj och september–oktober)"
topDestinations:
  - morrum
  - atran
  - eman
  - vanern
  - vattern
  - storsjon
  - lagan
faq:
  - q: "Vad är skillnaden på havsöring och insjööring?"
    a: "Det är samma art (Salmo trutta) men med olika vandringsmönster. Havsöring vandrar till havet, insjööring stannar i sötvatten. Bäcköring är en stationär form i mindre vattendrag."
  - q: "Vilket minimimått gäller för öring?"
    a: "Minimimåttet varierar kraftigt mellan vatten, 25–50 cm. Kontrollera alltid lokala regler. Många vatten kräver catch and release för all öring."
  - q: "När är havsöring som störst i älvarna?"
    a: "Havsöring vandrar upp i älvarna under höst och tidig vinter (september–december) för att leka. Det är också högsäsong för sportfiske efter havsöring i många kustvatten."
publishedAt: "2025-01-01"
updatedAt: "2026-05-01"
---

Öringen (*Salmo trutta*) förekommer i tre livsformer i svenska vatten: havsöring, insjööring och bäcköring. Alla tre är samma art. Det är miljön som avgör om en individ vandrar till havet, stannar i sjön eller lever hela sitt liv i bäcken. Den havsvandrande formen kan nå 15 kg och räknas av många som landets finaste sportfisk.

## Biologi

### Utseende och identifiering

Öring och lax liknar varandra men skiljer sig på flera punkter. Öringen har fler och större prickar, ofta även nedanför sidolinjen. Stjärtfenan är nästan rak i bakkanten, ibland kallad "tvärstjärt". Munvinkeln sträcker sig förbi ögats bakkant hos vuxna individer. Hos lax slutar munvinkeln ungefär i höjd med ögat.

Havsöringen är silverblank med svarta och ibland röda prickar i havet. Insjööringen kan vara bleksilvrig i öppet vatten men kraftigt prickig i tillflödena. Bäcköringen är typiskt mörkt brungrön med stora röda och svarta prickar, ofta omgivna av ljusa ringar.

Lekfärgad hane får kraftig underkäkskrok och brunröd färg på buken. Fiskar i det stadiet kallas ibland "kelt" när de vandrar ut igen efter leken. Det är informella sportfiskartermer.

### Storlek och tillväxt

Öringen varierar mer i storlek än nästan någon annan art i Sverige. Nedanstående värden är genomsnitt. Skillnaderna mellan vatten kan vara mycket stora beroende på näring och vattentemperatur.

| Livsform | Typisk vikt vid första lek | Typisk maxvikt |
|---|---|---|
| Bäcköring (näringsfattig bäck) | 80–300 g vid 3–5 år | Sällan över 1 kg |
| Insjööring (storvuxen, Vättern/Vänern) | 1,5–2 kg | 7–10 kg |
| Havsöring | 1–3 kg vid 4–6 år | 8–15 kg |

Tillväxten i havet är 5–10 gånger snabbare än i bäcken. En smolt kan växa till 70 cm på tre år i Östersjön. Bäcköring i ett tätt, näringsfattigt vatten kan vara fullvuxen vid 20–25 cm och aldrig växa förbi det stadiet. Maxåldern för uppmätt öring är 18 år.

### Diet

Yngel lever på insektslarver och kräftdjur. Vuxen bäcköring äter vattenlevande insekter, terrestriska insekter som fallit i vattnet och, om de växer tillräckligt, småfisk. Havsöring i kustzonerna äter tobis, skarpsill, tångräka och sandräka. Storvuxen havsöring specialiserar sig ofta på sill och skarpsill längre ut. Insjööring i Vättern och Vänern lever till stor del på siklöja och nors.

### Fortplantning

Leken sker på hösten, normalt oktober–november i större delen av Sverige. I fjällvatten kan leken börja i augusti. I sydligare vatten kan den pågå till januari. Lektemperaturen är normalt 4–8 °C. Vandringen utlöses av temperatursänkning och höjt vattenstånd.

Honan sprattlar upp lekgropar i grus och småsten på 30–80 cm djup med god syresättning. En hona på 5 kg kan lägga 5 000–10 000 ägg. Ynglen kläcks påföljande vår och ligger kvar i gruset tills gulesäcken är förbrukad.

Öringen har ett starkt hemvändarbeteende. De flesta individer återvänder till exakt det vattendrag där de själva kläcktes. Utlekt fisk, kelt, vandrar tillbaka till havet eller sjön. Vissa individer övervintrar i vattendraget och vandrar ut med vårfloden.

### Habitat och beteende

Öringen trivs bäst vid 10–15 °C och blir stressad över 20 °C. Den kräver syrerikt vatten, grus eller stenbotten för lek och skuggande kantvegetation längs småvattendrag.

Havsöring kan vandra långt längs kusten och söka föda i ett stort område. Märkningsstudier visar att Östersjöhavsöring kan vandra över 100 mil efter sillstim. Insjööring i Vättern och Vänern vandrar regelbundet mellan sjön och tillflödena. Bäcköring är stationär men kan röra sig korta sträckor inom vattendraget.

Smoltifiering sker vid 10–20 cm efter 1–3 år i södra Sverige och vid 3–6 år i norra Sverige.

### Beståndssituation

Situationen skiljer sig kraftigt mellan livsformer och regioner.

Havsöringen på västkusten har generellt god status, med ökande smoltproduktion i flera sydsvenska vattendrag. Bestånden i Bottenviken och Bottenhavet visar svagt positiva trender men är fortfarande utsatta. Flera Östersjöbestånd är svaga, med vandringshinder, övergödning och predation från skarv och säl som huvudorsaker.

Gullspångsöringen och Klarälvsöringen i Vänern klassas av HaV som starkt hotade och är beroende av kompensationsutsättningar. Vild produktion är mycket svag.

Insjööringen i Vättern har ökat de senaste decennierna tack vare biotopvård i tillflödena. Omkring 70 vattendrag fungerar idag som lek- och uppväxtområden.

Bäcköringen i skogsbäckar har generellt god status. I jordbrukspåverkade vattendrag i södra och västra Sverige är vandringshinder, vattenuttag och övergödning de viktigaste hoten.

## Bästa säsong

### Vår

Havsöring på sydkusten fiskas från 1 januari till 14 september. Fisket är som bäst mars–maj när välnärda fiskar jagar i grunda vatten. På västkusten öppnar säsongen 1 april. Efterleksfisket i älvarna, 2–4 veckor efter avslutad lek, kan ge hungriga fiskar i god kondition.

### Sommar

Bäcköringssäsongen är bäst maj–augusti när insektsaktiviteten är hög och vårflödena lagt sig. Fjällvatten når sitt toppfiske i juli. Havsöringen drar sig djupare när temperaturen stiger och är svårare att nå från land. Insjööringar i Vättern och Vänern håller sig på djupare vatten och jagar siklöja på 10–30 meters djup.

### Höst

September–oktober är den starkaste säsongen för havsöring i de flesta vatten. Fisken är i toppkondition efter en sommar av aktivt jaktande och samlas i grupper inför lekvandringen. I Östersjön och längs ostkusten pågår fisket fram till att fredningstiderna börjar. Insjööringstrolling i Vättern och Vänern är som bäst tidig höst.

### Vinter

På sydkusten (Kullens fyr–Torhamns udde) är januari–mars en högsäsong för havsöring. Fisket är bäst mitt på dagen när vattnet är som varmast. Grå och blåsiga dagar med rörlig yta ger ofta bättre resultat än vindstilla och soligt väder.

### Dagliga mönster

Havsöring är mest aktiv vid gryning och skymning, men hugger hela dagen i mulet och blåsigt väder. Insjööring jagar nors och siklöja nära ytan vid gryning och i skymningen. Bäcköring blir mer aktiv i skymning och tidigt nattetid, framförallt stora individer som är skygga för rörelse.

## Fisketekniker

Öring kan fångas med flera olika metoder beroende på livsform och vatten. Varje teknik beskrivs i detalj på respektive tekniksida.

### Flugfiske

Flugfiske är den mest mångsidiga metoden för öring och fungerar för alla tre livsformerna. Havsöring längs kusten fiskas med räk- och tobisimitationer på intermediate- eller flytlina. Bäcköring fiskas med torrflugor, nymfer och våtflugor i strömmande vatten. I laxälvar som Mörrum, Ätran och Emån används twohandsspö med sjunktipp och stora tubflugor.

[Läs mer om flugfiske](/teknik/flugfiske)

### Spinnfiske

Spinnfiske med skeddrag, wobblar och inline-spinnare är den vanligaste metoden längs kusten och i de flesta älvar. Viktklassen 12–30 g täcker de flesta situationer. I hård sjögång kan tyngre drag behövas.

[Läs mer om spinnfiske](/teknik/spinnfiske)

### Jiggfiske

Jiggfiske med små shads på jighuvuden är allt vanligare för havsöring, särskilt vid djupkanter och rev. Metoden fungerar bra längs Östersjökusten på senhösten. Storleken 5–10 cm och vikter på 5–15 g är ett bra utgångsläge.

[Läs mer om jiggfiske](/teknik/jiggfiske)

### Trolling

Trolling är den dominerande metoden för storvuxen insjööring i Vänern, Vättern och Storsjön. Fisket bedrivs med wobblar och skeddrag på varierande djup beroende på årstid, från grunt vatten på våren till 10–30 m på sommaren. Downrigger eller paravan används för att nå rätt djup.

[Läs mer om trolling](/teknik/trolling)

### Mete

Mete med räka är den traditionella metoden i Ätran och tillåten i flera älvar där spinnfiske är det vanliga alternativet. Längs kusten förekommer mete med tobis eller räka från brygga.

[Läs mer om mete](/teknik/mete)

## Utrustning

Val av utrustning beror på teknik. En kortfattad orientering:

**Spö:** Kustspinnfiske täcks av ett lätt till medeltungt spö 9–10 fot med kastvikt 10–35 g. Flugfiske kräver klass 6–8 beroende på vatten. Trolling i de stora sjöarna kräver ett separat spöval anpassat för djup och dragmotstånd.

**Rulle:** Haspelrulle storlek 3000–4000 för spinnfiske och jigg. Multiplikator är standard för trolling.

**Lina:** Flätlina 0,13–0,17 mm för spinn och jigg, med fluorocarbontafs på 1–1,5 m. Monofil används ofta vid trolling eftersom töjningen dämpar ryck.

**Tafs:** Fluorocarbon 0,25–0,35 mm räcker i de flesta situationer. Gädda förekommer i många öringsvatten, vilket motiverar kraftigare tafs i de fallen.

**Beten:** Längs kusten fungerar silverblanka drag och naturliga toner bäst i klart vatten. I grumligt väder och rörlig sjö ger starkare kontraster bättre resultat. I älvar dominerar flugor och skeddrag.

[Utrustningsguide för öringspön](/utrustning/oringspoen)

## Rekord

### Svenskt rekord (Sportfiskarnas Storfiskregister)

Sportfiskarna för separata rekord för havsöring och insjööring. Regeln är att öring från vatten dit havsöring har tillträde alltid klassas som havsöring.

**Havsöring: 15,260 kg, 104 cm**
Fångad av Lennart Westerlund i Emån, 16 september 1993. Fisken togs på spinnfiske under lekuppvandringen och har stått som rekord i över tre decennier.

**Insjööring: 17,000 kg, 105 cm**
Fångad av Kurt Stenlund i Storsjön, Gällivare, 16 oktober 1991. Fisken anses härstamma från en utsatt Gullspångsstam.

### Världsrekord (IGFA All-Tackle)

**20,1 kg (44 lb 5 oz)**
Fångad av Seumas Petrie, Ohau Canal, Twizel, Nya Zeeland, 27 oktober 2020. IGFA skiljer inte mellan havsöring och insjööring, alla livsformer av *Salmo trutta* konkurrerar i samma kategori. Det svenska insjööringsrekordet på 17 kg registrerades aldrig hos IGFA och räknas därför inte in i deras rekordbok.

### Nordiska rekord

- **Norge:** 13,2 kg, Sigmund Johansen, Skibotnelva, 1975.
- **Finland:** 10,15 kg, Siuronkoski (officiellt register Suomen ennätyskalat).
- **Danmark:** 15,155 kg, kuststångfångad havsöring (modern notering). Det klassiska rekordet är Christian Plejdrups fångst på 14,4 kg från 1939.

## Namn och etymologi

Ordet **öring** är gemensamt i de flesta nordiska språk. Det finns i fornsvenska som *øringi* och är besläktat med norska *ørret*, danska *ørred* och isländska *urriði*. Det exakta ursprunget är omdiskuterat men kopplas av flera forskare till en germansk rot med betydelsen "prickig" eller "fläckig". Det vetenskapliga artnamnet *trutta* är senlatinskt och betyder helt enkelt öring eller forell.

Storvuxna insjööringar har en rad lokala och informella namn inom sportfisket. Vanliga är **silverlax**, **vätterlax**, **vänerlax** och **gullspångsöring**. Dessa är informella sportfiskartermer utan officiell status.

Havsöring kallas inom fiskesammanhang bland annat **blänkare** (välnärd hav- eller åfisk i god kondition), **blankfisk** (havsfärgad individ) och **kustlöpare** (fisk på vandring längs kusten). En utlekt fisk på väg tillbaka mot havet kallas **kelt**. Yngel i bäcken kallas **stirr** eller **parr**, utvandrande unga fiskar kallas **smolt**. Samtliga är informella termer som används inom sportfisket.

## Öring som matfisk

Havsöringens kött är orange till rosa, fast och aromatiskt. Östersjöhavsöring är typiskt fetare och mörkare i köttet än västkustöring. Köttet håller som bäst på vintern och tidig vår, innan leken. Lekfärgad fisk har magrare, blekare och torrare kött. Insjööring från Vättern och Vänern håller mycket hög kvalitet, med ljusrosa till rött kött. Bäcköring har vitt till svagt rosa kött, fast och fint.

Fiskar i 1–3-kilosklassen ger bäst förhållande mellan hantering och köttkvalitet. Klassiska tillagningar är grillad hel öring med dill och citron, gravad öring, varmrökt öring och pannstekt filé med brynt smör. Öring lämpar sig också för tartare och ceviche av frysbehandlad fisk.

Stora honor producerar mångfalt fler ägg än små och är avgörande för beståndets rekrytering. Att återutsätta stor lekfisk, framförallt honor, är det enskilt mest effektiva ett sportfiske kan göra för att bevara starka bestånd på sikt.

## Juridik och regler

Regelverket för öring är komplext och varierar kraftigt mellan vatten och regioner. Kontrolera alltid lokala regler på [HaV:s webbplats](https://www.havochvatten.se) eller [Länsstyrelsens sidor](https://www.lansstyrelsen.se) inför fiske.

### Minimimått och fönsteruttag

| Område | Minimimått |
|---|---|
| Östersjön (generellt) | 50 cm |
| Östersjön 60°N–63°30′N (delar av Gävleborg, Västernorrland m.fl.) | 40 cm |
| Skagerrak och Kattegatt | 45 cm |
| Vänern | 60 cm |
| Vättern och Mälaren | 50 cm |
| Storsjön (Jämtland) | 45 cm |

I Norrbottens kustälvar gäller fönsteruttag: minimimått 30 cm och maximimått 45 cm. Fiskar utanför det intervallet ska återutsättas.

### Fredningstider

Fredningsreglerna varierar kraftigt och uppdateras löpande.

Västkusten (Skagerrak/Kattegatt): Allt öringfiske förbjudet 1 oktober–31 mars.

Sydkusten (Kullens fyr–Torhamns udde): Fredningstid 15 september–31 december.

Vänerns tillflöden: 15 september–31 december. Gullspångsälven är fredad hela året.

Vätterns och Mälarens tillflöden: 15 september–31 december.

Kända vatten med egna regler:

- **Mörrumsån:** Säsong 1 mars–30 september. Kvot 2 avlivade fiskar per person och säsong. Total säsongskvot för ån: 100 avlivade fiskar (lax, öring och hybrid). Minimimått 50 cm.
- **Ätran:** Säsong 1 april–30 september. Minimimått 45 cm. Max 2 laxartade fiskar per fiskare och dygn.
- **Emån:** Säsong mars–30 september. Öring under 50 cm och lax under 60 cm ska återutsättas. Under höstfisket gäller enkelkrok och alla öringhammor ska återutsättas.

### Catch and release

Öring tål catch and release väl om fisken hanteras rätt. Viktiga principer: drilla snabbt, håll fisken i vattnet under hela hanteringen, använd gummerad håv och hullinglösa enkelkrokar. Avstå från catch and release vid vattentemperaturer över 18–20 °C. Studier visar att stressad lekfisk kan producera upp till 70 procent färre ägg även om den överlever. Återutsättning av stora honor under lekuppvandringen är en av de mest effektiva åtgärderna för att stärka bestånden.

## Vanliga frågor

**Vad är skillnaden på havsöring, insjööring och bäcköring?**
Det är samma art, *Salmo trutta*, men i tre olika livsformer. Havsöringen vandrar till havet och kan bli 10–15 kg. Insjööringen stannar i sjön och äter siklöja och nors. Bäcköringen lever hela sitt liv i bäcken och håller sig ofta under 1 kg. Vilket liv en individ lever avgörs till stor del av miljön, inte av genetiken.

**Vilket är det bästa öringsvattnet i Sverige?**
Det beror på vad man är ute efter. Mörrumsån, Ätran och Emån är klassiker för stor havsöring. Vättern och Vänern ger de allra tyngsta insjööringsexemplaren, upp mot 10 kg. Sydkusten och Östersjöns skärgårdar erbjuder tillgängligt kustfiske efter havsöring hela vintern och tidig vår.

**Måste man använda hullinglösa krokar vid öringfiske?**
Det beror på vattnet. Många fiskevårdsområden och kända älvar kräver hullinglösa krokar, framförallt under höstfisket. Hullinglösa krokar minskar skadan på fisken och underlättar återutsättning. Kontrollera alltid det aktuella vattnets regler.

**Är det tillåtet att ta hem öring man fångat?**
Ja, om fisken uppfyller minimimåttet och du håller dig inom gällande dygnskvoter. Många vatten har fångstbegränsningar på 1–3 fiskar per dygn. I Vänern är det förbjudet att landa vild öring. Kontrollera alltid lokala regler.

**Varför minskar havsöringen längs delar av Östersjökusten trots fiskeregler?**
SLU Aqua pekar på att ökad predation från säl och skarv, vandringshinder i vattendragen och förlust av lekhabitat nu är de dominerande orsakerna, inte sportfisket. Återställande av vandringsleder, biotopvård i tillflödena och förvaltning av predatortrycket är nödvändigt vid sidan av fiskeregleringar.```

## src/content/species/roding.mdx
```
---
title: "Röding"
slug: "roding"
description: "Röding – biologi, fisketekniker, bästa säsong och rekord. Komplett guide för rödingfiske i svenska sjöar och fjällvatten."
heroImage: "/images/species/roding-hero.jpg"
targetTechniques:
  - isfiske
  - trolling
  - flugfiske
  - spinnfiske
difficulty: "mellannivå"
excerpt: "Kallvattensfisk som kräver djupa, syrerika sjöar."
season: "Vinter–vår (bäst februari–april) och sommar (juni–augusti)"
topDestinations:
  - vattern
  - storsjoen
  - vanern
  - bolmen
  - morrum
faq:
  - q: "Varför finns röding bara i djupa sjöar?"
    a: "Röding kräver kallt, syrerikt vatten och trivs bara i djupa sjöar där temperaturen under sommaren håller sig under 15°C på tillräckligt djup. Ytliga, varma sjöar klarar de inte."
  - q: "Vilket minimimått gäller för röding?"
    a: "Minimimåttet varierar mellan vatten. I fjällsjöar är det ofta 30–35 cm, i Put & Take-vatten kan andra regler gälla. Kontrollera alltid med Länsstyrelsen."
  - q: "Vilken teknik är effektivast för röding?"
    a: "Trolling med downrigger på rätt djup är den effektivaste metoden för storrödingen. Under isarna fungerar vertikalpirk och isfiske bra. Flugfiske på kvällen under sommaren kan ge fisk i fjällsjöar."
publishedAt: "2025-01-01"
updatedAt: "2026-05-01"
---

Rödingen (*Salvelinus alpinus*) är Sveriges nordligaste sötvattensfisk och en glacialrelikt som levt i landets sjöar sedan inlandsisens avsmältning för ungefär 10 000 år sedan. Den kräver kallt, syrerikt och klart vatten och finns framför allt i fjällsjöar från Värmland norrut samt i enstaka sydsvenska djupvattensjöar, varav Vättern är det i särklass viktigaste. Rödingen är känslig för miljöförändringar och enligt SLU Aqua har ungefär 70 procent av alla kända rödingbestånd söder om Dalälven utrotats under 1900-talet. Det gör den till en av de mest skyddsvärda sportfiskarterna i landet.

## Biologi

### Utseende och identifiering

Rödingen tillhör släktet *Salvelinus* och känns tydligast igen på sina **ljusa fläckar mot mörk botten** – gula, rosa och orangeröda prickar på grönt, blått eller brunaktigt grundmönster. Det är raka motsatsen mot lax och öring, som har svarta prickar på ljus botten. Alla *Salvelinus*-arter har dessutom vita framkanter på bröst-, buk- och analfenorna, vilket syns tydligast hos hannar under lektiden.

Kroppen är slank och spolformad med mycket små fjäll. Under leken intensifieras hannarnas buk till klarrött eller orangerött, fenornas vita kanter skärps till kontrast och underkäken kröks uppåt till en lekkrok. Honor är mer dämpade i färgen under hela lekperioden.

Förväxling med öring är möjlig hos unga exemplar. Kontrollera fläckarnas färg och fenornas vita framkanter. Sydsvenska storrödingar (Vättern, Sommen, Unden) klassades tidigare som en separat art men förs numera till samma art som fjällrödingen.

### Storlek och tillväxt

Tillväxten varierar kraftigt mellan vatten och beror på temperatur, näring och konkurrens. Värdena i tabellen är genomsnitt och kan skilja flera gånger beroende på sjö.

| Ålder | Fjällsjö (typisk) | Storröding, Vättern |
|-------|-------------------|----------------------|
| 1 år  | 8–12 cm, ~10 g    | 12–18 cm, ~30 g      |
| 3 år  | 18–25 cm, 80–150 g | 25–35 cm, 200–400 g |
| 5 år  | 25–32 cm, 200–400 g | 35–45 cm, 500–900 g |
| 8 år  | 30–40 cm, 400–800 g | 45–55 cm, 1–1,5 kg |
| 10 år | 35–45 cm, 0,8–1,2 kg | 55–65 cm, 2–3 kg |
| 15 år | 40–55 cm, 1–2 kg | 65–75 cm, 4–6 kg |
| 20+ år | sällsynt | 75–85 cm, 6–9 kg |

Rödingen kan bli upp till 25 år gammal. Honor i Vättern når könsmognad vid 6–8 års ålder och 40–55 cm. De allra störst rödingarna är nästan undantagslöst honor.

### Diet

Unga rödingar lever på djurplankton och insektslarver. Fiskar över 20–25 cm övergår gradvis till bottendjur som märlkräftor, snäckor och fjädermyggslarver. I Vättern är pungräkan (*Mysis relicta*) en viktig föda, liksom nors och siklöja för de större individerna. I fjällsjöar dominerar märlkräftan *Gammarus lacustris* och kräftdjur, med inslag av dagsländelarver och elritsa. Rödingar över 30–35 cm tar i ökande grad fisk och kan specialisera sig på den vanligaste bytesfisken i just det aktuella vattnet.

### Fortplantning

Leken sker på hösten, vanligen i september–november, när vattentemperaturen sjunker mot 4–6 °C. I fjällvatten kan leken börja i augusti. I Vättern sker leken från mitten av oktober till mitten av november på grunt vatten med hård, stenig botten på 1–5 meters djup. Honan gräver en lekgrop i gruset. Rommen inkuberar under isen hela vintern och kläcks på våren. En hona på 1 kg producerar ungefär 2 500–3 000 romkorn.

Varma vintrar utan isläggning påverkar kläckningsresultatet negativt. Forskning från Linköpings universitet visar att varma vintrar i Vättern följs av svagare rödingårsklasser fem till sex år senare, vilket är en av orsakerna till att beståndet haft svårt att återhämta sig under 2000-talet.

### Habitat och beteende

Rödingen kräver kallt, syrerikt och klart vatten. Temperaturoptimum är 12–13 °C och fisken lider vid temperaturer över 16–18 °C. Under sommaren söker den sig under språngskiktet på 15–35 meters djup i de stora sjöarna. Vid kallare ytvatten, under vintern och strax efter islossning, kan den röra sig nära ytan.

Rödingen vandrar i mindre stim som cirkulerar i jakt på föda. Stimmen är rörliga och det händer att fisket är intensivt under ett kortare pass för att sedan tystna helt när stimmet försvunnit ur zonen.

### Beståndssituation

SLU Aqua bedömer i Fiskbarometern 2022 att rödingbeståndet i Vättern sannolikt inte är inom biologiskt säkra gränser. Medianlängden på fångad fisk har minskat från 60 till 55 cm under de senaste decennierna, vilket tolkas som ett tecken på selektivt uttag av de största individerna. Tre fredningsområden i centrala Vättern och sju skyddade åmynningar, totalt 15 procent av sjöns yta, inrättades 2005 men återhämtningen har gått långsamt.

En kompletterande faktor är signalkräftans predation på rödingrom. Forskning från Vätternvårdsförbundet och SLU Aqua visar att signalkräftan tar ungefär fem gånger mer rödingrom än fisken gör, vilket belastar rekryteringen kraftigt.

I fjällen är bilden mer varierad. Karga fjällsjöar med lite näring har ofta stabila men långsamväxande bestånd, medan sjöar i närheten av odling och jordbruk kan ha minskat kraftigt. Artdatabanken klassar den sydsvenska storrödingen som akut hotad.

## Bästa säsong

### Vår

Perioden strax efter islossning, april–maj, ger ett kort och produktivt spinnfiske och flugfiske när rödingen rör sig grunt. Fisken är i god kondition och jagar aktivt. Trollingfisket kommer igång när vattnet klarnar.

### Sommar

Sommartid håller sig rödingen under språngskiktet, ofta 15–35 meter ned. Det kräver djuptrolling med downrigger eller vertikalfiske med tung jigg och ekolod. Högtrycksperioder ger generellt bättre fiske. Flugfisket i fjällvatten är som bäst under varma sommarkvällar när insektsklocken är på.

### Höst

Hösten är lektid och fiske nära lekplatserna bör undvikas av hänsyn till beståndet. På de flesta vatten gäller dessutom fredningstid under lekperioden.

### Vinter

Isfisket är den mest utövade metoden för fjällröding. Februari till april, när isen bär men solen värmer, är högsäsong. Rödingen är aktiv under isen och kan tas på pirk, mormyska och rödingblänke på 5–25 meters djup. I Vättern sker inget isfiske av praktiska skäl men trollingfisket fortsätter hela vintern.

### Dagliga mönster

I fjällvatten är gryning och kvällsskymning ofta de hetaste passen, framför allt under insektsklock. Under isen är tidig förmiddag och sen eftermiddag pålitliga fönster. Under sommaren i djupare sjöar styrs aktiviteten mer av lufttryck och vindförhållanden än av tid på dygnet.

## Fisketekniker

Rödingen kräver ofta ett mer anpassat tillvägagångssätt än exempelvis abborre och gädda, framför allt beroende på djup och vattentemperatur. Varje teknik beskrivs i detalj på respektive tekniksida.

### Trolling

Djuptrolling med downrigger är den effektivaste metoden för storröding i Vättern och de norrländska storsjöarna under sommaren. Rödingen söker sig under språngskiktet och beten måste presenteras på rätt djup, ofta 15–35 meter. Dragfart på 1,8–2,5 knop med wobblers, pirkar eller skeddrag i silverfärg och naturliga toner ger bäst resultat. Ekolod är nästan nödvändigt för att hitta var fisken befinner sig.

[Läs mer om trolling](/teknik/trolling)

### Isfiske

Pimpelfisket är rödingens mest klassiska teknik i fjällvatten och norrländska sjöar. Pirkar i silver och koppar, mormyskor i guld och glow-färger samt rödingblänken med maggot eller räka på enkelkrok fångar röding på 5–25 meters djup. Rödingen hugger försiktigt och kräver ett mjukt och lyhört mothugg. Vinterfisket i februari–april är högsäsong i fjällen.

[Läs mer om isfiske](/teknik/isfiske)

### Flugfiske

Flugfiske är underskattat som rödingmetod men fungerar utmärkt i fjällsjöar och Put & Take-vatten under sommaren. Rödingen stiger gärna till insektsklock på kvällarna och tar torrflugor, nymfer och små streamers. Klass 5–6 flugspö på 9 fot med flytlina täcker de flesta situationer. Selektiviteten kan vara hög och presentationen viktigare än flugval.

[Läs mer om flugfiske](/teknik/flugfiske)

### Spinnfiske

Spinnfiske efter röding fungerar bäst under vår och tidig sommar när fisken rör sig grundare. Mindre skeddrag och spinnare i silver, koppar och guldtoner presenterade längs djupkanter och vid utlopp ger fisk. Metoden är svårare under högsommaren när rödingen ligger djupt.

[Läs mer om spinnfiske](/teknik/spinnfiske)

### Vertikalfiske

Vertikalfiske från förankrad eller driftande båt med tung jigg (40–50 g) och ekolod är en växande metod för Vätternrödingen. Jiggen vevs hem i jämnt och högt tempo genom hela vattenmassan utan att sänka farten. Ekolod med live-sonar har revolutionerat möjligheten att hitta stimmen på rätt djup.

## Utrustning

Val av utrustning beror på teknik. En kortfattad orientering:

**Spö:**
- Trolling: 7–8 fot i 12–20 lb-klass för djuptrolling med downrigger
- Spinn och vertikalfiske: 7–7,6 fot med kastvikt 20–60 g
- Isfiske: 30–60 cm med flexibel signaltopp

**Rulle:**
- Trolling: multiplikatorrulle med linräknare
- Spinn och vertikalfiske: haspelrulle storlek 3000–4000
- Isfiske: liten pimpelrulle eller underhängande haspel

**Lina:**
- Trolling: monofil 0,30–0,40 mm eller flätlina 0,17–0,21 mm
- Vertikalfiske: flätlina 0,12–0,17 mm
- Pimpel: nylon 0,18–0,25 mm

**Tafs:**
- Spinn och trolling: fluorocarbon 0,25–0,40 mm
- Pimpel: direktknytning eller kort fluorocarbontafs

**Beten:** Silver, koppar och guldtoner dominerar – rödingblänke, pirkar, skeddrag och wobblers i nors- och siklöjefärger. I fjällvatten fungerar orange och röd inslag bra. I pimplet är vita och röda maggots standardagn.

[Utrustningsguide för rödingspön](/utrustning/rodingspon)

## Rekord

### Svenskt rekord (Sportfiskarnas Storfiskregister)

**10 830 g, 80 cm**
Fångad av Åke Öhman, Orrviken, i Landösjön, Jämtland, den 2 augusti 2007. Fisken togs på vertikalfiske från båt.

### Världsrekord (IGFA All-Tackle)

**14,77 kg (32 lb 9 oz)**
Fångad av Jeffery Ward, Tree River, Northwest Territories, Kanada, 31 juli 1981.

Det svenska rekordet är lägre än IGFA:s världsrekord och de avser båda arten *Salvelinus alpinus*. Skillnaden förklaras av att de kanadensiska anadroma bestånden (havsvandrande röding) kan nå betydligt större storlek än insjöbestånden i Sverige. Anadroma rödingar i arktiska flodsystem lever delvis i havet och har tillgång till rikligare föda.

### Nordiska rekord

- **Norge:** 8,285 kg, Ivar Mathisen, Skogseidvatnet, Fusa, 2 maj 2002.
- **Finland:** 7,04 kg, Kilpisjärvi, Enontekiö, 2021 (fångad på nät, ej sportfiskerekord).

## Namn och etymologi

Ordet **röding** är belagt i svenska texter sedan 1540 och bildat av adjektivet *röd*. Det syftar på hannens intensivt röda buk under lektiden. Samma namngivande princip gäller i norska (*røye*, *røyr*) och isländska (*reyðr*), som alla spårar tillbaka till urgermanska *\*rauðī-* med betydelsen röd.

Det vetenskapliga släktnamnet *Salvelinus* kommer av lågtyskans *Saibling* eller *Salbling*, ungefär "liten lax". Artepitetet *alpinus* betyder "alpin" eller "bergsboende" och syftar på artens hemvist i kalla, högt belägna vatten. Linné beskrev arten 1758.

Vanliga informella benämningar inom sportfisket:

- **Storröding** eller **Vätternröding** – storrödingarna i de sydsvenska djupvattensjöarna (informellt).
- **Fjällröding** – bestånd i fjällkedjan (informellt).
- **Dvärgröding** – småvuxen form i näringsfattiga sjöar (informellt).
- **Rör** – ålderdomlig form, lever kvar i dialekter och ortnamn.

Rödingen är **Lapplands landskapsfisk**.

## Röding som matfisk

Rödingen har rött till blekrosa kött med hög omega-3-halt och räknas som ett av Sveriges finaste matfiskalternativ. Smaken är mild och delikat, något sötare och mer nyanserad än laxens. Fiskar i 500–1 500 g-klassen är enklast att filea och ger renaste resultatet.

Klassiska tillagningar är stekt röding med brynt smör och kapris, ugnslagad röding med citron och dill, gravad röding med hovmästarsås och varmrökt röding. Rödingen lämpar sig också utmärkt för kallrökning och ger ett elegant resultat.

De allra största honorna, framför allt i Vättern, är viktiga för beståndets fortplantning och bör återutsättas. En stor hona producerar mångfalt fler romkorn än en liten och bär upp nästa generations rekrytering.

## Juridik och regler

Regelverket varierar kraftigt mellan vatten och uppdateras löpande. Det är alltid fiskarens ansvar att kontrollera gällande regler.

### Minimimått och fönsteruttag

Nationellt minimimått för röding saknas. Vättern har ett minimimått på 50 cm och en fångstbegränsning på max 3 laxartade fiskar per fiskare och dygn, varav maximalt 2 får vara rödingar. I fjällvatten är minimimåttet vanligtvis 25–30 cm och bestäms av respektive fiskevårdsområde eller länsstyrelse. Kontrollera alltid kortinformationen.

### Fredningstider

Rödingen leker på hösten och de flesta vatten med naturliga rödingbestånd har fredningstid under lekperioden, vanligtvis september–november. I Vättern skyddas lekplatser av permanenta fredningsområden som motsvarar 15 procent av sjöytan. I fjällvatten varierar fredningstiderna mellan länsstyrelser och fiskevårdsområden.

### Catch and release

Rödingen tål catch and release väl vid rätt hantering. Använd knutlös håv med gummerat nät, tryck in hullingen och håll fisken i vattnet så länge som möjligt. Undvik hantering vid höga vattentemperaturer. Återutsätt alltid stora honor och all fisk fångad nära lekplatser under lekperioden.

Kontrollera alltid lokala regler på [HaV:s webbplats](https://www.havochvatten.se) eller [Länsstyrelsens sidor](https://www.lansstyrelsen.se) inför fiske.

## Vanliga frågor

**Var hittar man röding i Sverige?**
Röding finns naturligt i fjällsjöar från Värmland norrut och i ett antal sydsvenska djupvattensjöar, framför allt Vättern, som har Sveriges enskilt viktigaste storrödingbestånd. Odlad röding är utsatt i många P&T-sjöar och fiskevatten i hela landet.

**Vad är skillnaden på fjällröding och storröding?**
Det är informella benämningar på samma art. Fjällröding syftar på bestånd i fjällkedjan, storröding på de djuplekande sydsvenska bestånden i sjöar som Vättern och Sommen. Storrödingarna växer generellt snabbare och blir tyngre.

**Hur djupt fiskar man röding på sommaren?**
I stora sjöar som Vättern söker sig rödingen under språngskiktet när ytvattnet värms upp, ofta 15–35 meter ned. Djuptrolling med downrigger eller vertikalfiske med tung jigg och ekolod är de effektivaste metoderna under juni–augusti.

**Måste man ha fiskekort för rödingfiske?**
I Vättern och de övriga fyra stora sjöarna (Vänern, Mälaren, Hjälmaren och Storsjön i Jämtland) är handredskapsfiske fritt. I fjällvatten och de flesta övriga sjöar krävs fiskekort från fiskevårdsområdet eller länsstyrelsen. Kontrollera alltid innan du fiskar.

**Är röding god att äta?**
Röding räknas som ett av Sveriges bästa matfiskalternativ. Köttet är rött till blekrosa, smakrikt och innehåller höga halter omega-3-fettsyror. Fisken passar utmärkt till stekning, gravning, rökning och ugnsbakning.
```

# Content: destinations

## src/content/destinations/bolmen.mdx
```
---
title: "Bolmen"
slug: "bolmen"
description: "Bolmen är en av södra Sveriges tyngsta sportfiskedestinationer med starka bestånd av gädda, gös och abborre. Guide till fiskekort, hotspots och säsong."
heroImage: "/images/destinations/bolmen.jpg"
lat: 56.95
lng: 13.65
län: "Kronoberg"
primarySpecies: ["gädda", "gös", "abborre"]
waterType: "lake"
excerpt: "Södra Sveriges tyngsta gäddvatten med starka gösbestånd."
iFiskeUrl: "https://www.ifiske.se/fiske-bolmen.htm"
recommendedGear: []
publishedAt: "2025-01-01"
updatedAt: "2025-01-01"
---

Bolmen är en av södra Sveriges tyngsta sportfiskedestinationer. Sjön är Sveriges tionde största, täcker 184 km² fördelat på tre län och fyra kommuner, och hyser ett tjugotal fiskarter. Gäddor nära 20-kilosklassen fångas varje säsong. Gösen är talrik men kräver kvällsfiske. Abborren håller hög kvalitet och går på handredskap året om.

Det som skiljer Bolmen från många andra storsjöar är att hela vattenområdet förvaltas av en enda förening: Bolmens fiskevårdsområdesförening (FVOF). Du behöver alltså bara ett fiskekort för hela sjön. Reglerna är däremot lite annorlunda än på de flesta ställen, och det finns ett par saker du måste känna till innan du ger dig ut.

---

## Fiskekort och regler

### Köp kortet

Fiskekort köps via **iFiske.se** (app eller webbläsare, kvitto direkt till mobilen) eller hos lokala återförsäljare:

- Liljenäs Natur och Fritid, Forsheda (norra Bolmen) – tel 070-691 90 43
- Gipro Fiske, Gislaved
- Bolmsö Camping, Bolmens Camping och flera campingplatser runt sjön
- Ljungby Turistbyrå

### Priser (Bolmens FVOF, 2025/2026, inkl. moms)

| Korttyp | Pris |
|---|---|
| Dygnskort | 180 kr |
| Veckokort | 440 kr |
| Månadskort | 750 kr |
| Årskort | 1 000 kr |
| Familjekort (2 pers., samma adress) | 1 250 kr |
| Företagskort (4 plastkort) | 2 400 kr |
| Tävlingsfiske | 20 kr/pers./dag |

**Barn och ungdomar upp till och med 18 år fiskar gratis**, men ska följa samma regler som vuxna.

Föreningen säljer även djupkartor över Bolmen. Rekommenderas om du ska söka av grynnor och branter med ekolod.

### Vad kortet ger rätt till

Handredskapsfiske: mete, pimpel, kastspö, flugspö, drag och trolling. Garnsättning, ryssja och liknande kräver separat tillstånd och är inte tillgängligt för allmänheten.

Tillrinnande åar och vattendrag nedströms Skeen har egna fiskevårdsområden med separata kort.

### Minimimått och maxmått

| Art | Minimimått | Maxmått |
|---|---|---|
| Gädda | 40 cm | – |
| Gös | – | 75 cm |
| Öring | 50 cm | – |
| Ål | 75 cm | – |

### Gösregeln

I Bolmen är det förbjudet att sätta tillbaka gös under 75 cm. Catch and release gäller alltså inte för undermålig gös. Du får behålla de **10 första** gösar du fångar per dag och kort, upp till maxmåttet på 75 cm. Gös över 75 cm ska sättas tillbaka.

Bakgrunden är biologisk: gös har sluten simblåsa och överlever dåligt efter återutsättning, framför allt om den dragits upp från djupt vatten. Stora gösar är reproduktivt viktiga och skyddas med maxmåttet.

### Djupbegränsning

Det är förbjudet att fiska djupare än 10 m med handredskap. Regeln hänger ihop med gösens simblåsa och trycket vid djupare vatten.

### Fredade vatten och tider

- Önne å: fiskeförbud året runt
- Storån (norr om sjön): fiskeförbud 15 april–15 juni (lekvandring)
- Bolmen är öppen för fiske hela året, inklusive vinterfiske på is

### Pimpel och angeldon

Max 10 redskap per kort, alltid under uppsikt. Du får inte lämna dem obevakade.

**Kontrollavgift:** 2 000 kr vid regelbrott. Allvarligare överträdelser prövas rättsligt.

---

## Fiskarter
Sjön hyser **24 bekräftade arter** (Bolmens FVOF, SLU provfisken). Nedan de viktigaste för sportfiskaren.

### Gädda

Bolmen är välkänt bland gäddafiskare i Sydsverige. Bekräftade fångster runt 19 kg finns dokumenterade. Sjön är stor nog att producera riktiga troféfiskar.

Bästa perioder är april–maj (direkt efter leken, gäddorna är hungriga och stannar kvar nära lekplatserna) och september–november (höstens fetningsperiod). Sommarmorgnar och kvällar fungerar också.

Gäddan håller till i vassrika vikar, vid nedfallna träd, längs vasskanter och på grynnor som stiger ur djupare vatten.


[Läs mer om gädda](/arter/gadda/)

### Gös

Gösen i Bolmen är talrik men ställer höga krav på timing. Lokala fiskare är samstämmiga: kvällsfisket från ca 20:00 är överlägset och dagsljusfiske ger sällan resultat. Soluppgång fungerar som andraval.

Bästa säsong är maj–oktober, med sommaren som toppperiod. Gösen söker sig mot grunt vatten och kanter vid skymning. Dagtid håller den sig pelagiskt eller djupare, men djupbegränsningen på 10 m innebär att du ändå fiskar kantzonerna.

Notera maxmåttet på 75 cm. Sjön producerar bevisligen stora gösar och de ska tillbaka i vattnet.


[Läs mer om gös](/arter/gos/)

### Abborre

Stark stam med en bra andel kilosaabborrar. Fiskar hela säsongen, med september–oktober som absolut bäst för storleken. Vinterpimpel efter abborre på hårda bottnar och branter är välkänt.

Abborren samlas över hårda bottnar, vid branter mellan grunt och djupt, i och utanpå vassar och runt synliga stenkonstruktioner.


[Läs mer om abborre](/arter/abborre/)

### Öring och lax

Det historiska öringfisket vid Skeens utlopp är sedan länge historia. Skeens kraftverk stod klart 1954, varpå lekvandringsvägarna stängdes och beståndet kollapsade. FVOF sätter i dag ut öring årligen för att kompensera.

Öring och lax kan fångas men är inte den art du planerar resan kring. Det riktade öringfisket i avrinningsområdet sker i Bolmån och längs Lagaleden, inte i sjön.

### Lake

Lake finns i sjön och är populär under vintern. Fiskas i mörker med pimpel eller angel nära djupbranter. Underskattad art som kräver tålamod och rätt tidpunkt.

### Ål

Ålfisket i Bolmen bygger uteslutande på utsättningar. Utan regelbunden plantering och transport av ål förbi Lagans kraftverk nedströms hade arten inte funnits i sjön. Minimimåttet är 75 cm och utsättningsprogrammet pågår fortfarande. Yrkesfisket tar ål på dispens.

### Vitfisk

Sutare, braxen, mört, sarv och björkna finns i goda bestånd. Sutaren håller bra storlek i de grundare vikarna. Braxen fångas av yrkesfisket och säljs delvis som foderfisk. Bra för mete under sommaren.

---## Sjöns karaktär

### Nyckeltal

- **Yta:** ca 184 km²
- **Maxdjup:** 37 meter
- **Höjd över havet:** ca 141–142 m ö h (regleras av Skeens kraftverk)
- **Antal öar:** ca 300, varav Bolmsö är den i särklass största
- **Avrinningsområde:** 1 650 km²
- **Omsättningstid:** ca 1,6 år
- **Län:** Kronobergs, Jönköpings och Hallands

### Topografi

Sjön är ovanligt komplex i sin struktur. Norra delen är mer öppen med sammanhängande vattenytor och tydliga fjärdar. Centrala och södra delarna liknar en skärgård med tätt ölandskap, skyddade vikar och sund mellan öarna.

Botten varierar mer än vad man ofta räknar med:

- **Grynnor som lyfter ur 8–15 meters vatten:** rovfiskmagneter, leta dem med ekolod
- **Djupbranter runt öar och uddar:** gös håller till längs dessa kanter
- **Långa, grunda vassplattor** i norra delen, framför allt i Liljenäsviken vid Storåns utlopp
- **Djuphålor ner mot 37 m** i centrala och södra delarna
- **Smalbladig vattenpest** har ökat i sjön de senaste decennierna och bildar täta undervattensängar i grunda vikar

### Vatten och sikt

Bolmen är en mjukvattensjö med lågt kalciumvärde och humusfärgat (brunaktigt) vatten. Sikten är sämre än i exempelvis Vättern. Det påverkar betval: kontrastrika och ljudliga beten presterar ofta bättre i Bolmen än neutrala naturfärger, särskilt på molniga dagar.

Under värmeperioder kan bottenvattnet i södra Bolmen bli syrefattigt, vilket pressar fisken uppåt och in mot kantzoner, ofta grundare än man förväntar sig.

### Tillflöden och utflöde

- **Storån** (norr, Liljenäsviken): fiskeförbud 15/4–15/6
- **Önne å** (öster): fiskeförbud året runt
- Flera mindre bäckar runt sjön
- **Bolmån** (utflöde, söder, via Skeen) leder vidare till Lagan och Laholmsbukten

### Naturreservat och skyddade områden

**Norrnäs udde** (sydvästra Bolmen, Ljungby kommun) är naturreservat. Gammal bokskog, strandvallar från innan sjösänkningen på 1840-talet och ett hundratal röjningsrösen. Stenåldersboplats längst ut på udden.

Norra Bolmen vid Liljenäsviken, Svanaholms ängar och Storåns utlopp har höga naturvärden för fågelliv.

**Södra Bolmen är vattenskyddsområde** sedan 2021. Bolmentunneln, som invigdes 1987, leder råvatten 82 km från den södra delen av sjön till Ringsjöverket i Skåne, vatten till drygt en miljon människor.

---

## Fiskemetoder

Metoderna nedan är anpassade till Bolmens specifika förhållanden. Djupbegränsningen på 10 m påverkar alla metoder. Detaljerade teknikanvisningar finns på respektive tekniksida.

### Trolling

Trolling passar väl i Bolmens norra och centrala delar med öppna ytor. Fungerar för gädda, gös och utplanterad öring. För gös: wobblers på 4–7 meters djup över hårda platta bottnar på 8–12 m. Tänk på 10-metersgränsen. För gädda: större wobblers och skeddrag på 2–5 m längs kanter mellan grunt och djupt.

[Läs mer om trolling](/teknik/trolling)

### Jiggfiske och vertikalfiske

Jigg och dropshot är i dag dominerande för gös. Jigghuvuden med gummibeten på platta bottnar och kanter. Vertikalt ovanför grynnor, men inte djupare än 10 m. Abborre på jigg och finessebeten längs branter, vassutlägg och steniga partier.

[Läs mer om jiggfiske](/teknik/jiggfiske)
[Läs mer om drop shot](/teknik/drop-shot)

### Kastfiske

Skeddrag och spinnare i grunda vikar. Jerkbaits för stor gädda under höst och tidig vår. Ytbeten som popper och walk-the-dog för gädda och abborre i vindstilla grunda vikar under juli–augusti.

[Läs mer om spinnfiske](/teknik/spinnfiske)

### Mete

Underskattad metod i Bolmen. Sutare, braxen och storabborrar går bra på bottenmete med mask eller boilies, ofta från strand vid uddar eller bryggor. Bolmsö, Tannåker och Sunnaryd har tillgängliga metelokaler.

### Flugfiske

Fungerar för gädda och abborre i grunda vikar under sommaren med stora streamers och popper. Det klassiska öringflugfisket sker numera i Bolmån och Lagaleden, inte i sjön.

[Läs mer om flugfiske](/teknik/flugfiske)

### Pimpel och ismete

Bolmen ger bra vinterfiske vid is. Pimpel för abborre på hårda bottnar och branter. Ismete med levande agn är inte tillåtet i Sverige. Lake nattetid på djupare vatten. Kom ihåg: max 10 redskap, aldrig lämnade obevakade.

[Läs mer om isfiske](/teknik/isfiske)

### Betval i brunt vatten

Det bruna humusvattnet i Bolmen kräver lite andra val än i en klar sjö. Fungerande färger:

- **Orange, eldtiger, röd:** syns bra i brunt vatten
- **Svart/mörk:** silhuett på grunt vatten och kvällsfiske
- **Silver/vit:** fungerar bäst under klara förhållanden och vinterfiske
- **Naturliga mönster (abborre, gädda):** mellanalternativ som fungerar brett

Beten med rörelse och ljud kompenserar för sämre sikt och är ofta ett bättre val än tysta beten tänkta för klarvatten.

---

## Hotspots och lokaler

### Liljenäsviken och norra Bolmen

Storåns utlopp och de grunda vassplanorna i Liljenäsviken är klassiskt gäddvatten på våren. Norra delens öppna fjärdar passar för trolling. Liljenäs Natur och Fritid i Forsheda är en naturlig utgångspunkt med båtuthyrning och lokalkännedom.

### Bolmsö

Sjöns stora centrala ö, tillgänglig med avgiftsfri färja från Sunnaryd. Runt ön finns en kombination av grunda vassbevuxna vikar och djupare partier med skarpa kanter. Bra för gädda, gös och abborre. Strandpromenader runt ön ger flera tillgängliga metefläckar.

### Centrala och södra Bolmen

Skärgårdskaraktären med täta öar, sund och djuphålor ner mot 37 m. Gösens kanter finns längs branter runt öar och uddar. Grynnorna som lyfter ur djupare vatten är rovfiskmagneterna och hittas bäst med ekolod och djupkarta.

### Norrnäs udde

Naturreservat i sydväst. Bra landfiskeläge med djupare vatten nära stranden. Bokskogen och de gamla strandvallarna gör det till en av sjöns vackrare platser.

### Tannåker och Sunnaryd

Bra infrastruktur med ramper, parkering och gästhamnar. Tannåker har handikappanpassad brygga vid Bolmsöbron. Sunnaryd är utgångspunkt för färjan och har ramp och gästhamn.

---

## Säsongsöversikt

| Månad | Bästa art | Bästa metod |
|-------|-----------|-------------|
| Januari–mars | Abborre, lake | Pimpel, ismete |
| April–maj | Gädda | Kastfiske, trolling längs vasskanter |
| Maj–juni | Gös, abborre | Kvällsjigg, trolling |
| Juli–aug | Gös, gädda, abborre | Kvällsjigg, ytbeten i grunda vikar |
| September–oktober | Gädda, abborre, gös | Jerkbait, jigg, kastfiske |
| November–december | Abborre, lake | Jigg, pimpel |

Storån fredat 15 april–15 juni. Önne å fredat hela året. Djupbegränsning 10 m gäller hela året.

---

## Infrastruktur och praktisk information

### Båtramper

| Plats | Noteringar |
|---|---|
| Bolmstad Hamn (väster) | Västra Bolmens Båtklubb, 50 kr/tillfälle (Swish), parkering |
| Tannåker | Bred ramp, parkering, handikappbrygga vid Bolmsöbron |
| Sunnaryd (norr) | Ramp, parkering, gästhamn |
| Gavlö (söder om Dannäs) | Ny ramp, byggd av FVOF |
| Bolmen samhälle (söder) | Ramp och gästhamn |
| Mjälen | Handikappanpassad brygga |

Bolmsöfärjan (Bolmsö–Sunnaryd) är **avgiftsfri** och kör dagligen.

### Boende

- **Liljenäs Natur och Fritid** (Forsheda): stugor, båtuthyrning, fiskekort, guidning
- **Bolmsö Island Camping:** familjecamping, kanot- och båtuthyrning
- **Bolmens Camping:** båtuthyrning
- **Hornstrand** (Bolmsö): stugor med roddbåt
- Stuguthyrning via NOVASOL och lokala aktörer runt sjön

### Kommunikationer

Bolmen nås enklast med bil:

- **E4** (Stockholm–Helsingborg) via Ljungby, ca 20–25 km från sjöns västra del
- **Väg 25** (Halmstad–Ljungby–Växjö): huvudled längs sjöns södra och östra sida
- **Väg 26** (Halmstad–Jönköping): längs västra sidan

Ljungby är närmaste servicetätort med bensinstationer, mataffärer och logi.

### Sjösäkerhet

Bolmen är stor och kan bli snabbt besvärlig vid hårda västvindar, framför allt i norra delarna. Bär flytväst. Navigera med sjökort eller digital karta. Sjön har ca 300 öar och farleder är märkta, men mörker och dimma gör navigation utan karta riskabel. Sjöräddningssällskapet har en lokal ideell enhet i Bolmen.

---

## Historik och bakgrund

### Sjösänkning

Bolmen sänktes knappt en meter runt 1847–1850 för att vinna åkermark. Kanalen grävdes parallellt med det naturliga utloppet Bolmån. De platta vassplanorna och strandvallarna som fortfarande syns (t.ex. på Norrnäs udde) är direkta spår av den sänkningen.

### Skeens kraftverk

1954 stod Skeens kraftverk klart (9,6 m fallhöjd, i dag Statkraft). Den gamla byn Skeen revs och dränktes i dammen. Kraftverket reglerar sedan dess Bolmens vattennivå och är orsaken till att det vilda öringbeståndet försvann: lekvandringsvägarna stängdes permanent.

### Försurning och kalkning

Bolmen var kraftigt försurad på 1970-talet. Sedan 1982 kalkas tillrinningsområdet regelbundet, bland annat Hallasjön, Saxesjön och Norra Ålasjön. Utan kalkningsprogrammet hade känsliga arter som öring och mört haft svårt att överleva.

### Yrkesfiske

Tre yrkesfiskare är aktiva i sjön. Den största aktören, **Bolmen Fisk AB** i Hamneda, omsätter ca 5,5 mkr och driver rökeri, butik och restaurang. Fångst: braxen, gös, ål, gädda och abborre. Braxen säljs delvis som foderfisk.

Du kan stöta på yrkeснät och bragder på lovande platser i sjön. Håll avstånd och undvik att fiska så nära att redskapen skadas. Notera att nätgårdar och utplacerade redskap ofta markerar fisktäta platser.

### Utsättningar

FVOF sätter ut öring varje år för att kompensera för de förlorade lekvandringsvägarna. Ål planteras regelbundet. Utan utsättning och transport förbi kraftverken skulle ål inte finnas kvar i sjön. Sik har planterats under lång tid. Signalkräfta planterades in 1969–2015 men beståndet är litet.

---

## Snabbfakta

| | |
|---|---|
| Förvaltning | Bolmens FVOF |
| Fiskekort | bolmensweden.com / ifiske.se |
| Barn t.o.m. 18 år | Fiskar gratis |
| Fredade vatten | Önne å (året runt), Storån (15/4–15/6) |
| Maxdjup för fiske | 10 meter |
| Gösens maxmått | 75 cm (ingen C&R under 75 cm) |
| Angeldon | Max 10 per kort, alltid under uppsikt |
| Avgiftsfri färja | Bolmsö–Sunnaryd |
| Närmaste tätort | Ljungby (ca 20–25 km) |

---

*Strömkast finansieras via affiliate-länkar. Köper du fiskekort eller utrustning via länkarna på den här sidan får vi en liten provision, utan kostnad för dig. Det påverkar inte vad vi skriver eller hur vi värderar fiskevatten.*```

## src/content/destinations/eman.mdx
```
---
title: "Emån"
slug: "eman"
description: "Emån är världens mest kända vatten för storvuxen havsöring. Det svenska rekordet på 15,26 kg är taget här. 35 fiskarter i ett 229 km långt vattendrag."
heroImage: "/images/destinations/eman.jpg"
lat: 57.05
lng: 16.45
län: "Jönköping, Kronoberg, Kalmar"
primarySpecies: ["havsoring", "lax", "gadda", "abborre", "gos", "asp"]
waterType: "river"
iFiskeUrl: "https://www.ifiske.se/fiske-emsfors.htm"
excerpt: "Världens mest kända vatten för storvuxen havsöring."
recommendedGear: []
publishedAt: "2026-05-27"
updatedAt: "2026-05-27"
---

Emån är 229 km lång och rinner från Storesjön i Nässjö kommun ner till Kalmarsund vid Em i Mönsterås kommun. Det är ett av Sveriges artrikaste vattendrag med 35 fiskarter i systemet, och det är världsberömt av ett enda skäl: havsöringen. Det svenska sportfiskerekordet på 15 260 g togs här 1993 av Lennart Westerlund i "Oldman Pool" vid Ems Herrgård, och enligt herrgårdens egna uppgifter kommer åtta av tio världsrekord på flugfångad havsöring från Emån. Det är ett vatten med historia, men det är också ett vatten under förändring. Faunapassagen vid Karlshammar invigdes 2020 och har öppnat ån för 18 fiskarter som länge stängts ute av kraftverksdammar.

---

## Fiskekort och regler

### Vad är fritt och vad kräver tillstånd?

Emån är enskilt vatten längs hela sin sträckning. Allt fiske kräver tillstånd. Det statliga frifisket gäller inte här. Ån förvaltas av ett dussintal separata FVO:n och privata sträckor från källorna i Nässjö ned till mynningen. Varje sträcka har egna regler, egna priser och egna kortförsäljningskanaler.

**Vid mynningen är allt fiske förbjudet året runt** (Mönsterås kommun). Kontrollera den exakta gränsen i karttjänsten svenska fiskeregler.se eller direkt hos FVO innan du fiskar i närheten av mynningsområdet.

### Var köper du fiskekort?

De flesta sträckors kort säljs via ifiske.se eller fiskekort.se. Några sträckor kräver direktkontakt med markägaren.

| Sträcka | Korttyp | Pris | Köps via |
|---|---|---|---|
| Repperdaortens FVO | Dygnskort | Framgår av ifiske.se | ifiske.se |
| Kvillsfors FVO | Dygnskort | Framgår av ifiske.se | ifiske.se |
| Emåns FVOF (Klövdala–Ryningsnäs) | Dygnskort | Framgår av ifiske.se | ifiske.se |
| Högsby-Emåns FVOF (Nedre) | Dygnskort | Framgår av ifiske.se | ifiske.se |
| Fliseryds SFK (Emån och Kvillen) | Dygnskort vår/höst | 300 kr | ifiske.se, lokala butiker |
| Fliseryds SFK (Emån och Kvillen) | Dygnskort sommar | 150 kr | ifiske.se, lokala butiker |
| Fliseryds SFK | Junior | 100/50 kr | ifiske.se |
| Emsfors SFK | Dygnskort | från 450 kr | fiskekort.se |
| Ems Herrgård | Dygnskort havsöring | 1 250 kr (vår/höst) | emsherrgard.com |
| Ems Herrgård | Dygnskort lax | 625 kr (maj–juni) | emsherrgard.com |

Priser gäller 2024–2025 och kan ändras. Kontrollera alltid aktuella priser direkt hos respektive FVO eller herrgård.

**Barn:** Fliseryds SFK är kostnadsfritt för barn under 14 år i förälders sällskap (på förälderns kvot). Högsby-Emåns FVOF är kostnadsfritt för barn under 18 år.

### Regler för lax och havsöring

Fiske efter lax och havsöring i Emån med biflöden är tillåtet med handredskap 1 mars–30 september. FVO:nas premiärdatum ligger vanligen i mitten av mars.

- **Minimimått:** havsöring 50 cm, lax 60 cm. Fisk under måttet återutsätts omedelbart.
- **Dagkvot:** 1 havsöring eller lax per fiskare och dag på de flesta sträckor.
- **Höstfiske (september):** Enkelkrok obligatoriskt och samtliga havsöringar och laxar ska återutsättas på de flesta sträckor, däribland Fliseryds SFK. Huggkrok förbjuden under höstfisket.
- **Fångstrapportering** är obligatorisk för lax, havsöring och öring på de flesta sträckor, även vid återutsättning.

### Emsfors SFK och Ems Herrgård

**Emsfors SFK** säljer maximalt 2 dygnskort per dag till utomstående. Strikt catch and release, hullinglösa krokar, fisken ska hanteras i vattnet med knutlös håv. Det är en regel, inte en rekommendation.

**Ems Herrgård** är en privatägd sträcka med plats för 15 spön per dag på våren och 12 på hösten. Förhandsbokning krävs, gärna per brev eller e-post till info@emsherrgard.com. Räkna med kö om du inte är stamgäst.

### Fridlysta arter

**Mal** är fridlyst enligt artskyddsförordningen. Om malen råkar krokas ska den omedelbart återutsättas försiktigt. Det gäller oavsett om den är önskad eller inte.

**Ål** är fredad i Emån. Fritidsfiske efter ål är förbjudet i alla vatten dit ål kan vandra ut till havet, och Emån räknas dit (FIFS 2004:36, 1 kap. 8 §). Krokad ål ska omedelbart återutsättas.

**Asp** bör återutsättas. Asp är rödlistad (NT) och leker i april–maj. Riktat fiske under lekperioden bör undvikas.

---

> **OBS: Kostråd för fisk från Östersjön.** Livsmedelsverket avråder gravida, ammande, barn och ungdomar från att äta vildfångad lax och havsöring från Östersjön mer än 2–3 gånger per år på grund av höga halter dioxin och PCB. Övriga bör inte äta sådan fisk mer än en gång per vecka. Rekommendationen gäller Emåns utlopp och kustvatten i Kalmarsund. Livsmedelsverkets aktuella råd finns på livsmedelsverket.se.

---

## Fiskarter

### Havsöring

Emåns signaturart och orsaken till att vatten längs åns nedre del är världsberömda. Det svenska sportfiskerekordet på 15 260 g togs 1993 av Lennart Westerlund i "Oldman Pool" vid Ems Herrgård. Havsöringen vandrar in från Kalmarsund och en blank, färsk höstöring på 4–7 kg är ett normalt resultat på de bästa dagarna. Snittvikten på återvändande lekfisk är ovanligt hög jämfört med andra svenska havsöringsälvar.

[Läs mer om havsöring](/arter/havsoring/)

### Lax

Laxen vandrar i Emån men är inte lika talrik som havsöringen. Laxen stiger vanligen mellan pingst och midsommar. Fisket riktar sig mot den nedre delen, framför allt Ems Herrgård och Emsfors SFK.

[Läs mer om lax](/arter/lax/)

### Asp

Asp finns i Emån och är rödlistad (NT). Asparna leker i april–maj på grunt strömmande vatten och är synliga. Fritidsfiske efter asp i Emån är möjligt utanför lekperioden men regleras av FVO:ns lokala regler. Återutsättning rekommenderas starkt.

[Läs mer om asp](/arter/asp/)

### Gädda

Gädda finns längs hela ånens längd. De övre och mellersta delarna vid Järnsjön, Fröreda och nedströms Järnforsens kraftverk ger rapporterade fiskar på 5–13 kg. Fliseryds SFK erbjuder sjöfiske i Skiren, Försjön och Hällesjöarna där gäddan frodas.

[Läs mer om gädda](/arter/gadda/)

### Abborre

Abborre är allmänt förekommande längs hela ånens längd och i anslutande sjöar. Fångbara på spinn och mete från april till oktober.

[Läs mer om abborre](/arter/abborre/)

### Gös

Gös finns i de djupare delarna av ånens nedre lopp och i anslutande sjöar inom FVO-området.

[Läs mer om gös](/arter/gos/)

### Färna och vitfisk

Emån är ett av de bättre vattendraget för färna i södra Sverige. Flytbrödsmete vid Tälläng, Ädelfors, Holsby och Fliseryd är en lokal specialitet. Braxen, sutare, mört, id och björkna fiskas med mete i poolerna och lugna hålorna längs hela ånens längd.

### Mal

Mal finns i Emån och Emån är Nordeuropas viktigaste lokal för arten. Malen är helt fridlyst och ska aldrig behållas. Vid bifångst ska den återutsättas omedelbart och försiktigt.

---

## Ånens karaktär

### Grundfakta

- **Längd:** 229 km
- **Avrinningsområde:** 4 472 km²
- **Medelflöde vid mynningen:** ca 30 m³/s (variation 2–270 m³/s vid Emsfors)
- **Källsjö:** Storesjön (286 m ö.h.), Nässjö kommun
- **Mynning:** Kalmarsund vid Em, Mönsterås kommun
- **Berörda kommuner:** Nässjö, Eksjö, Sävsjö, Vetlanda, Hultsfred, Högsby, Mönsterås, Oskarshamn

Inklusive biflöden rymmer systemet ca 800 km rinnande vatten och fler än 950 sjöar. Viktiga biflöden är Solgenån, Silverån, Pauliströmsån, Gårdvedaån och Gnyltån.

### Sträckorna

**Övre Emån (Nässjö–Vetlanda):** Källsträckan med blandat fiske efter gädda, abborre, öring och vitfisk. Repperdaortens FVO och Kvillsfors FVO förvaltar de översta delarna. Ån är smalare och strömmande med fler forsavsnitt.

**Mellersta Emån (Hultsfred–Högsby):** Emåns FVOF och Högsby FVOF täcker denna del. Ån vidgas och fler pooler med djupa hålor ger bra gäddvatten. Järnsjön, Fröreda och nedströms Järnforsens kraftverk är kända för grova gäddor.

**Nedre Emån (Högsby–Emsfors–Em):** Havsöringens och laxens sträcka från ca 55 km upp till havet. Härifrån förvaltas vattendraget av Fliseryds SFK, Emsfors SFK och Ems Herrgård. Poolerna är klassiskt namngivna. Naturen är tätare och terrängen mer varierad med svämskogar och ädellövskogar.

**Emsfors–Karlshammars naturreservat:** 595,6 ha naturreservat som skyddar ån mellan Karlshammar och Emsfors bruk. Svämskogar, kärr och ädellövskogar längs stränderna. Inom reservatet gäller hastighetsbegränsning för motorbåt och tältning är begränsad till ett dygn.

### Flöde och vattentemperatur

Flödet varierar kraftigt. Vårfloden i mars–april ger de högsta flödena och sämst vadbarhet. Under försommaren sjunker flödet snabbt. Emån saknar stora sjömagasin nedströms, vilket gör nedre delarna känsliga för torrperioder. Sommaren 2022 var flödet vid Emsfors så lågt att länsstyrelserna gick ut med restriktioner mot bevattning utan tillstånd.

**Riktvärden att hålla koll på:**
- Flöde under 5 m³/s vid Emsfors: fisket blir svårt och stressar fisken. Flytta till sjöarna.
- Vattentemperatur över 18 °C: undvik fiske efter lax och havsöring. Hög dödlighet vid catch and release. Fiska i gryning och skymning eller fokusera på vitfisk.

Realtidsdata för flöde finns på eman.se.

### Natura 2000 och skyddad natur

Emåns huvudfåra och flera biflöden är Natura 2000-områden. Utpekade arter inkluderar lax, asp, nissöga, stensimpa, flodpärlmussla, tjockskalig målarmussla, citronfläckad kärrtrollslända och utter. Förekomsten av flodpärlmussla och tjockskalig målarmussla är direkt beroende av fungerande lax- och öringbestånd, eftersom musslorna använder dessa fiskarter som värdfiskar för sina larver.

---

## Fiskemetoder

Metoderna nedan är anpassade till Emåns förhållanden. Flöde och vattentemperatur styr val av flugor och beten. Detaljerade teknikanvisningar finns på respektive tekniksida.

### Flugfiske

Flugfiske är den dominerande metoden på åns nedre sträckor. Klassiska Emåflugor är Em Silver, Black Spain, Kräfta Fly och Bacchus, framtagna av fiskare med lång historia vid ån. Roy Beddington skapade Kräfta Fly 1938 specifikt för Emån. Tvåhandsspö används i de bredare forsarna vid högt vårflöde. Enhandsspö fungerar bra i poolerna under sommar och höst.

[Läs mer om flugfiske](/teknik/flugfiske/)

### Spinnfiske

Spinnfiske fungerar bra vid högt och kallt vatten på våren och under sommaren för gädda och abborre i sjöarna och de djupare delarna. Vobbler och skeddrag är effektiva i forsarna. Jigg fungerar i djupare hålor och längs kanterna.

[Läs mer om spinnfiske](/teknik/spinnfiske/)

### Mete

Mete är den primära metoden för vitfisk och asp. Flytbrödsmete efter färna är en lokal specialitet vid Tälläng, Ädelfors, Holsby och Fliseryd. Braxen, sutare och mört på botten i lugna pooler under sommar. Lake på vintern i anslutande sjöar.

[Läs mer om mete](/teknik/mete/)

### Jiggfiske

Jigg fungerar efter gädda, abborre och gös i de djupare delarna av sjöarna och i ånens lugna hålor.

[Läs mer om jiggfiske](/teknik/jiggfiske/)

---

## Hotspots och lokaler

### Ems Herrgård: de klassiska poolerna

Åns sista 4 km närmast havet ägs av familjen Ulfsparre. Poolerna är namngivna och berömda: Sea Pool, Home Pool, Lawson Pool, Pike Pool, Island Pool (där 1993-rekordet togs i "Oldman Pool"), Fence Pool, Stone Pool, Blackwater Pool, Barret Pool, Snake Island, Garagenacken och Ankarcrona Pool. Ankarcrona Pool är namngiven efter Theodor Ankarcrona, en av åns historiska fiskare. Bara 12–15 spön per dag innebär lugnt fiske utan trängsel.

### Emsfors SFK: kvalitetsfiske med strikta regler

Ungefär 10 km med 20-tal pooler mellan Karlshammar och Emsfors bruk. Lågt fisketryck tack vare begränsad korttilldelning. Faunapassagen vid Karlshammar nedströms innebär att fisk vandrar fritt förbi det som länge var ett vandringshinder. Sträckan ger bra havsöringsfiske under vår och höst.

### Fliseryds SFK – Jungnerströmmarna och Backen

Jungnerströmmarna och Backen är de mest kända havsöringspunkterna på Fliseryds SFK:s sträcka. Dessutom Vällingströmmen, Gåsgölshagen, Klumpekvarnströmmen och Kullbergsholmarna. Sjöarna Skiren, Försjön och Hällesjöarna är tillgängliga för gäddor och abborre.

### Järnsjön och Fröreda: stor gädda

Järnsjön och sträckan vid Fröreda och nedströms Järnforsens kraftverk i de mellersta delarna av ån är kända för grova gäddor. Rapporterade fiskar på 5–13 kg från dessa lokaler.

### Kvillsfors och Tälläng: färna och vitfisk

Kvillsfors FVO vid Tälläng är ett utmärkt mål för den som vill fiska färna på flytbröd. Gädda och abborre förekommer också. Sträckan är prisvärd och tillgänglig.

---

## Säsongsöversikt

| Månad | Primärtarget | Bästa metod |
|---|---|---|
| Mars | Blank havsöring (premiär ca 15 mars) | Flugor, spinnflugor |
| April | Havsöring, asp (lek, återutsätt) | Fluga, spinn |
| Maj–juni | Lax, havsöring | Fluga, spinn |
| Juli–aug | Vitfisk, gädda, abborre | Mete, spinn, jigg |
| September | Höstöring (C&R obligatoriskt) | Flugor, enkelkrok |
| Oktober–mars | Gädda, abborre, lake | Spinn, jigg, pimpel |

Höstöringen når sin topp i september. Snittvikten på höstöring i Emån ligger på 3–5 kg, och fiskar över 7 kg förekommer. Höstfisket är catch and release på de flesta sträckor.

---

## Infrastruktur och praktisk information

### Adress och kontakt

**Ems Herrgård**
Em, 383 91 Mönsterås
info@emsherrgard.com, emsherrgard.se

**Emsfors SFK**
Bokning via fiskekort.se

**Fliseryds SFK**
Fiskekort via ifiske.se, ICA Nära Fliseryd och Circle K Oskarshamn

**Emåförbundet**
Upplandavägen 16, Box 237, Vetlanda
eman.se

### Närmaste städer

- **Mönsterås.** Vid mynningen. Kortast väg till Ems Herrgård och Emsfors SFK.
- **Oskarshamn.** 30 km norrut. Bra utbud av service och färjeläge mot Gotland.
- **Kalmar.** Ca 60 km söderut. Närmaste storstad.
- **Västervik.** Ca 50 km norrut.

E22 går parallellt med åns nedre lopp. Emsfors–Karlshammars naturreservat nås via parkering 200 m norr om bron vid Karlshammar.

### Guidning

Pelle Klippinge driver Spey Cast i Påskallavik sedan 1988 och erbjuder professionell guidning för lax och havsöring i Emån samt skärgårdsguidning. Pris från ca 2 000 kr per spö och dag.

### Boende

- **Fliseryds SFK:s fiskecamp.** Stugor och camping vid Jungnerholmarna.
- **Ems Herrgård.** Ca 30 bäddar, från 800 kr (enkelt) / 1 250 kr (dubbel).
- **Figghults gård** och **Grönskogs Gård.** Stugor direkt vid privatvatten.
- Camping och stugor i Mönsterås, Oskarshamn, Hultsfred och Vetlanda

### Parkeringar och infrastruktur

Parkering finns vid Emsfors naturreservat (200 m norr om bron vid Karlshammar), vid Emsfors bruk och på flertalet platser längs FVO:nas sträckor. Båtramper finns vid Järnsjön, Skiren och Hällesjöarna.

---

## Historik och bakgrund

### Havsöringsfisket vid Em

Sportfiske vid Em dokumenteras från 1880-talet. Familjen Ulfsparre har förvaltat fisket vid Ems Herrgård sedan 1924. Fisket vid Em lockade tidigt engelska och skandinaviska sportfiskare och bidrog till att göra Emåns havsöring internationellt känd. Roy Beddington skapade flugan Kräfta Fly 1938 specifikt för Emån. Gustaf Ulfsparre tog fram Em Silver och Bacchus, flugor som fortfarande används på ån i dag. Gustaf Ulfsparres Stiftelse bildades 1988 för att bevara och stärka havsöringsbeståndet i Emån. Stiftelsen stöder forskning, biotopvård och fiskvandring.

### Från full vandring till avspärrade sträckor

För ca 100 år sedan vandrade laxen i Emån ända upp till Turefors (Kvillsfors) och i goda år ända till Sjunnen i Vetlanda, en sträcka på över 100 km från havet. Vattenkraftsutbyggnaden under 1900-talet och industriföroreningar skar successivt av vandringsvägarna. I dag når laxen ca 55 km upp till Högsby kraftverk. Totalt finns ett antal kraftverk längs ån, varav Karlshammar var det sista utan fiskpassage.

### Faunapassagen vid Karlshammar

Faunapassagen vid Karlshammar invigdes 1 oktober 2020 efter ett bygge på ca 250 m och en kostnad av drygt 17 miljoner kronor. Projektet leddes av Emåförbundet tillsammans med NCC och WSP, och genomfördes med stöd av EU:s LIFE-fond. Sedan invigningen har 18 fiskarter passerat räknaren uppströms. Den första laxen registrerades 26 maj 2021. Faunapassagen är ett avgörande steg för att återställa vandringsvägar som stängdes av för mer än 100 år sedan.

### LIFE CONNECTS och restaurering

LIFE CONNECTS är ett EU-finansierat restaureringsprojekt med en budget på ca 100 miljoner kronor som löpte 2019–2025. Emån ingår som ett av de prioriterade vattendragen. Projektet har genomfört biotopvård, kvillrestaurering och åtgärder för ökad konnektivitet längs ca 55 km av ån. Kvillar, små sidofåror där ån delas och förenas, är en signaturmiljö i Emån och viktiga uppväxtmiljöer för öring- och laxungar.

### Försurning och kalkning

Delar av Emåns avrinningsområde har drabbats av försurning. Emåförbundet kalkar ca 150 objekt med i genomsnitt 2 000 ton kalk per år. Kalkningsverksamheten samordnas av länsstyrelserna i Jönköping och Kalmar tillsammans med kommunerna. Åtgärderna är en förutsättning för att öring, lax och de hotade stormusslorna flodpärlmussla och tjockskalig målarmussla ska överleva i de känsligare biflödena.

### Malen i Emån

Emån är Nordeuropas viktigaste lokal för mal. Malen etablerade sig i ån och har byggt upp en stabil population tack vare goda miljöförhållanden. Arten är helt fridlyst och ingen fångst är tillåten.

---

## Snabbfakta

| | |
|---|---|
| Längd | 229 km |
| Avrinningsområde | 4 472 km² |
| Medelflöde (mynningen) | ca 30 m³/s |
| Källsjö | Storesjön, Nässjö (286 m ö.h.) |
| Mynning | Kalmarsund vid Em, Mönsterås |
| Antal fiskarter | ca 35 |
| Säsong havsöring/lax | 1 mars–30 september |
| Minimimått havsöring | 50 cm |
| Minimimått lax | 60 cm |
| Dagkort Fliseryds SFK | 150–300 kr |
| Dagkort Emsfors SFK | från 450 kr (max 2/dag) |
| Dagkort Ems Herrgård | 625–1 250 kr |
| Svenskt rekord havsöring | 15 260 g, Lennart Westerlund 1993 |
| Faunapassage Karlshammar | Invigd 2020 |
| Närmaste stad | Mönsterås |
| Bokning allmänt | ifiske.se, fiskekort.se |
| Emåförbundet | eman.se |

---

*Strömkast finansieras via affiliate-länkar. Köper du fiskekort eller utrustning via länkarna på den här sidan får vi en liten provision, utan kostnad för dig. Det påverkar inte vad vi skriver eller hur vi värderar fiskevatten.*
```

## src/content/destinations/malaren.mdx
```
---
title: "Mälaren"
slug: "malaren"
description: "Mälaren erbjuder fritt handredskapsfiske med ett 30-tal arter. Världsunikt aspbestånd, gott om gös och gädda samt havsöring och lax mitt i Stockholm."
heroImage: "/images/destinations/malaren.jpg"
lat: 59.45
lng: 17.15
län: "Stockholm, Uppsala, Västmanland, Södermanland"
primarySpecies: ["gös", "gädda", "abborre", "asp", "havsöring"]
waterType: "lake"
excerpt: "Fritt handredskapsfiske och världsunik asppopulation."
iFiskeUrl: "https://www.ifiske.se/fiske-tda-kortet-i-stockholms-skargard-malaren-m-fl-vatten.htm"
recommendedGear: []
publishedAt: "2025-01-01"
updatedAt: "2025-01-01"
---

Mälaren är Sveriges tredje största sjö och en av de fem stora sjöar där fritt handredskapsfiske gäller. Du kan ta spöet och gå direkt till stranden utan fiskekort. Sjön har ett 30-tal fiskarter, ett av Sveriges starkaste gösbestånd, storvuxen gädda, rikligt med abborre och ett världsunikt aspbestånd. Havsöring och lax fångas mitt i Stockholms city vid Norrström. Det finns plats för alla nivåer: nybörjaren som metar från en brygga i Mariefred, trollingfiskaren som söker storvilt i Prästfjärden och flugfiskaren som jagar asp vid Fyrisåns mynning.

## Fiskekort och regler

### Fritt handredskapsfiske

Mälaren ingår tillsammans med Vänern, Vättern, Hjälmaren och Storsjön i de fem stora sjöar där fiske med handredskap är fritt enligt fiskelagen. Ingen avgift, inget kort, inga ansökningar. Det gäller hela sjön från Galten i väster till Stockholms ström i öster, för både svenska och utländska medborgare.

Handredskap innebär spö, pilk eller liknande redskap med lina och högst tio krokar. Mete, spinnfiske, haspel, flugfiske och pimpel är fritt. Trolling, dragrodd och angelfiske är inte fritt.

### TDA-kortet

För trolling, dragrodd och angelfiske (ismete) krävs **TDA-kortet**, utgivet av Stockholms stad i samarbete med ett 20-tal kommuner. Kortet köps via parker.stockholm eller iFiske.

| Korttyp | Innehåll | Pris |
|---|---|---|
| TDA-1 | Dragrodd 3 spön/båt, angel 5 don/person | 300 kr |
| TDA-2 | Trolling och dragrodd 4 spön/båt, ismete 10 don | 600 kr |
| TDA-3 | Trolling och dragrodd 6 spön/båt, ismete 15 don | 900 kr |
| TDA-4 | Kräftfiske i utvalda områden | Kontakta Stockholms stad |

Utterbräda, sidoparavaner och planerboards är **inte** tillåtna under TDA-kort. Downrigger och djuplod går bra.

### Minimimått och fredningstider

| Art | Minimimått | Maxmått | Fredningstid |
|---|---|---|---|
| Gös | 45 cm | – | – |
| Gädda | 40 cm | 75 cm | – |
| Lax | 60 cm | – | – |
| Öring | 50 cm | – | – |
| Asp | Inget | – | 1 april–31 maj i tillrinnande vattendrag |
| Ål | – | – | Totalförbud för fritidsfiskare |

Gädda: max tre fiskar per fiskare och dygn vid handredskapsfiske. Gäddor under 40 cm och över 75 cm ska återutsättas omedelbart och får inte ilandföras.

Asp: fiskeförbud 1 april till 31 maj i **alla** vattendrag som mynnar i Mälaren, upp till första definitiva vandringshinder. Förbudet gäller även catch and release.

Ål: all fångst är förbjuden för fritidsfiskare. Återutsätt omedelbart om du råkar få ål.

Mal är fridlyst hela året.

### Stockholms ström

Vid Riksbron och Stallkanalen gäller en 5-metersregel: allt fiske inom 5 meter nedströms dammluckorna är förbjudet **1 juli till 31 december**. Trolling i strömmen kräver TDA-kort.

### Lekvikar och skyddade områden

Länsstyrelserna i Stockholm, Uppsala, Västmanland och Södermanland beslutar om lokala lekvikar med fredningstid, vanligen 1 april till 15 juni. Skyltar sätts upp på plats. Ladda ner broschyren "Fiskebestämmelser för Mälaren" från Länsstyrelsen för fullständig lista.

---

**Obs för den som planerar att äta fångsten:** Livsmedelsverket har kostråd för abborre, gädda och gös från Mälaren på grund av förhöjda halter av kvicksilver och dioxiner. Läs mer längre ned i artikeln.

---

## Fiskarter
Mälaren har **33 bekräftade fiskarter**. Sjön är ett riksintresse för yrkesfiske och ett av Sveriges artrikaste sötvatten.

### Gös

Gösen är den ekonomiskt viktigaste arten. Yrkesfisket landar cirka 150 ton per år. Beståndet är generellt starkt, med god rekrytering i Granfjärden och Ekoln enligt SLU:s hydroakustik 2023. Gösar över 10 kg fångas varje säsong. Rekordgösen från Västeråsfjärden vägde 10,5 kg.

Bästa säsonger: maj–juni direkt efter leken, juli–augusti pelagiskt på sena kvällar, oktober–november vertikalt vid djuphålor.

Bästa vatten: östra Mälaren (Lambarfjärden, Lövstafjärden), Granfjärden, Västeråsfjärden, Blacken, Ekoln, Prästfjärden och Björkfjärdarna.


[Läs mer om gös](/arter/gos/)

### Gädda

Gädda finns i hela sjön men koncentreras till grunda, vassiga delar i västra och centrala Mälaren. Det gamla svenska sportfiskerekordet på 22,5 kg kom från Västeråsfjärden. Snittstorleken är hög jämfört med Stockholms skärgård.

Bästa säsonger: sen mars till mitten av april (förlek), oktober–november (höstvak).

Bästa vatten: Galten, Blacken, Granfjärden, Oknöfjärden, Gripsholmsfjärden, vid Hjälmare kanal och Arbogaåns mynning.


[Läs mer om gädda](/arter/gadda/)

### Abborre

Troligen den vanligaste fångstfisken i hela sjön. Abborrar över 1,5 kg fångas regelbundet i Ekoln. Finns i hela sjön. Leta hårdbottnar och grynnor på 6–15 meters djup.


[Läs mer om abborre](/arter/abborre/)

### Asp

Aspen är Mälarens paradart. Sjön är ett av artens kärnområden i Sverige tillsammans med Vänern och Hjälmaren. Aspen är Sveriges största mörtfisk och en utpräglad rovfisk som jagar nors, löja och mört pelagiskt. Den klassas som Nära hotad (NT) på rödlistan.

Vuxna fiskar når 70–90 cm och 4–8 kg. Leken sker i slutet av april och första halvan av maj i tillrinnande åar. Viktiga lekplatser: Fyrisåns Kvarnfallet i Uppsala, Örsundaåns Vånsjöbro, Verkaån vid Rosersberg, Oxundaån, Eskilstunaån och Svartån.

Bästa säsong i sjön: juni till september. Sök strömsatta sund, åmynningar (utanför fredningstid) och grunda sundsöppningar där asp jagar nors.


[Läs mer om asp](/arter/asp/)

### Havsöring och lax i Stockholms ström

Stockholms ström är ett av Sveriges mest kända stadsfisken. Drygt en miljon havsörings- och laxungar har satts ut sedan 1973. Rekordet för havsöring är 13,4 kg (Norrström, 1990) och för lax 21,80 kg (Norrström, 2000). Bäst september till juni när dammluckorna är öppna.


[Läs mer om öring](/arter/oring/)

### Övriga arter

Lake finns rikligt i Prästfjärden, Hovgårdsfjärden och Björkfjärdarna. Bäst pimpel i januari–februari över djuphålor på 20–40 m.

Sutare, braxen, mört, sarv, id, nors, siklöja och björkna finns i goda bestånd. Id och asp kan jagas på liknande sätt vid åmynningar. Signalkräfta finns på tillåtna vatten med separat kräftfiskekort.

Ål är fridlyst för fritidsfiskare. Mal är fridlyst hela året.

---## Sjöns karaktär

### Grundfakta

- **Yta:** ca 1 073–1 140 km²
- **Maxdjup:** ca 64–66 meter (väster om Adelsö)
- **Medeldjup:** ca 10–13 meter
- **Antal öar:** ca 8 000
- **Län:** Stockholm, Uppsala, Västmanland, Södermanland
- **Avrinningsområde:** ca 33 000 km²

Sjön sträcker sig 120 km från Stockholms ström i öster till Arboga i väster och delas upp i ett tiotal delbassänger med väldigt olika karaktär.

### Delbassängerna

**Västra Mälaren (Galten, Blacken, Västeråsfjärden):** Grund, näringsrik och brunfärgad. Bäst gädda och abborre. Cyanobakterieblomningar förekommer i juli–augusti.

**Centrala Mälaren (Granfjärden, Prästfjärden, Björkfjärdarna, Hovgårdsfjärden):** Mälarens stora öppna fjärdar med djup 30–50 m. Frivatten där alla får trolla. Rikligt med gös och lake.

**Norra utlöparen (Ekoln, Gorran, Skarven):** Mot Uppsala. Klassiskt gösvatten, asp och storabborre.

**Östra Mälaren (Görväln, Lambarfjärden, Riddarfjärden, Ulvsundasjön):** Mälarens djupaste del, ner mot 60 m. Dricksvattenintag för Stockholm. Vattenskyddsområde sedan 2008.

**Stockholms ström (Norrström, Söderström, Strömparterren):** Havsöring och lax. Utsättningsfiske mitt i city.

### Vattenkvalitet och skiktning

Östra Mälaren har god vattenkvalitet med siktdjup 3–5 m under sommaren. Västra Mälaren är surare och brunfärgad med siktdjup ner mot 0,9 m och periodiska algblomningar. Mälaren brunifieras successivt sedan slutet av 1970-talet.

Syreförhållandena är bekymmersamma i bottenvattnet vid flera stationer. Under varma somrar skapas språngskikt som trycker fisken uppåt mot ytan och kantzonerna, ofta grundare än man förväntar sig.

---

## Fiskemetoder

Metoderna nedan är anpassade till Mälarens specifika förhållanden. Detaljerade teknikanvisningar finns på respektive tekniksida.

### Asp på kastspö och fluga

Aspfisket är Mälarens specialitet. Säsong i sjön: juni till september. Fiske i tillrinnande vattendrag är fredat 1 april–31 maj.

Sök vid åmynningar i juni direkt efter leken (Fyrisåns mynning, Örsundaåns mynning, Verkaån, Hjälmare kanal). Juli–augusti jagar aspen pelagiskt vid sundsöppningar och grunda grynnor, med tydliga ringningar och plask vid solnedgång som tecken. Använd hullinglösa krokar och håll fisken i vattnet vid återutsättning.

[Läs mer om spinnfiske](/teknik/spinnfiske)
[Läs mer om flugfiske](/teknik/flugfiske)

### Gös: jigg och trolling

Vertikaljiggning är bäst oktober till mars. Sök djuphålor 12–25 m i östra Mälaren, Ekoln och Prästfjärden. Hugget kommer på fall eller stillaliggande jigg.

Trolling är bäst juli–augusti i frivattnen (Björkfjärdarna, Prästfjärden) och med TDA-kort i östra Mälaren. Sidoparavaner är förbjudna på TDA-vatten. Kvällsfiske från ca 20:00 är överlägset för sommarperioden.

[Läs mer om jiggfiske](/teknik/jiggfiske)
[Läs mer om trolling](/teknik/trolling)

### Gädda: spinn och jerkbait

Vår (mars–april): spinnare och mjukbeten i grunda vassrika vikar i Oknöfjärden, Galten och Mariefredsfjärden. Kontrollera lekviksfredningstider.

Höst (oktober–november): mjukbeten och jerkbaits längs djupkanter 4–10 m.

Vinter: angelfiske och ismete kräver TDA-kort.

[Läs mer om spinnfiske](/teknik/spinnfiske)

### Havsöring och lax i Stockholms ström

Fiskbara sträckor: Norrström, Stallkanalen, Smedsudden, Skeppsholmen, Riddarholmen, Stadshuset och Rosenbad. Förutsättningen är att dammluckorna är öppna. Bäst oktober till maj. Långa kast krävs på flera platser.

Tänk på 5-metersregeln vid Riksbron och Stallkanalen 1 juli–31 december.

[Läs mer om spinnfiske](/teknik/spinnfiske)

### Abborre: drop shot och pimpel

Drop shot med gummibeten på stenrösen och hårdbottnar 6–15 m. Bäst sommar och höst. Vinter: pimpel på 15–25 m i Ekoln, Görväln och Prästfjärden.

[Läs mer om drop shot](/teknik/drop-shot)
[Läs mer om isfiske](/teknik/isfiske)

### Lake: pimpel på djupt vatten

Januari–februari, djuphålor 25–40 m i Prästfjärden, Hovgårdsfjärden och Björkfjärdarna. Lake leker i januari och samlas vid skarpa bottenlutningar.

[Läs mer om isfiske](/teknik/isfiske)

### Strukturer att leta

- Mynningar av åar och kanaler (Hjälmare kanal, Eskilstunaån, Fyrisån, Svartån): asp, gädda, gös, abborre
- Sundsöppningar mellan öar (Långtarmen, sunden runt Selaön och Adelsö)
- Undervattensåsar och grynnor mitt i fjärdarna (sök med sjökort och ekolod)
- Branta djupkanter 6–18 m: gösens favoritmiljö
- Vassbrämen och grunda vikar: gädda i april och hela hösten
- Kraftverk och dammluckor (Norrström, Söderström, Hjälmare kanal): havsöring, asp, abborre

---

## Hotspots och lokaler

### Ekoln och Uppsala

Ekolns norra bassäng mot Uppsala är klassiskt gösvatten med en bra andel abborrar över 1,5 kg. Fyrisåns mynning är en av landets bästa asplokaler i juni direkt efter leken. Landfiske möjligt från Hammarskog och Dalbyviken.

### Prästfjärden och Björkfjärdarna

Centrala Mälarens djupaste öppna fjärdar. Frivatten för trolling utan TDA-kort. Bästa gösvattnet i sjön under sommarmånaderna. Lake på djuphålorna under vintern.

### Västeråsfjärden och Blacken

Västra Mälarens gäddvatten. Rekordgösen på 10,5 kg och det gamla gäddrekordet kom härifrån. Vassbälten och grunda vikar längs hela sträckan. Mälarparken i Västerås och Svartåhamnen är bra utgångspunkter med landfiske och båtramp.

### Stockholms ström

Norrström, Stallkanalen och Riddarholmen är fiskbara året om. Havsöring och lax från september till maj. Asp och abborre hela säsongen. Inget fiskekort krävs för handredskapsfiske. Trolling kräver TDA-kort.

### Granfjärden

En av Mälarens mest produktiva fjärdar för gös. God sikt, hårda bottnar och skarpa djupkanter. Bra trollingvatten med TDA-kort.

### Gripsholmsfjärden och Mariefred

Gripsholmsfjärden har goda gäddbestånd med tillgängliga grunda vikar längs stränderna. Mariefreds hamn har båtramp.

---

## Säsongsöversikt

| Månad | Bästa art | Bästa metod |
|-------|-----------|-------------|
| Januari–februari | Lake, abborre, gös | Pimpel, vertikaljigg |
| Mars–april | Gädda (förlek) | Spinn i grunda vikar |
| Maj–juni | Asp, gös | Kastspö, fluga, jigg |
| Juli–augusti | Gös, asp | Trolling, pelagisk jigg, kvällsfiske |
| September–oktober | Havsöring, lax, gädda | Strömfiske, spinn |
| November–december | Gös, lake | Vertikaljigg, pimpel |

Aspfredning i tillrinnande vattendrag 1 april–31 maj. Lekvikar kan vara fredade 1 april–15 juni. Kontrollera lokala regler hos Länsstyrelsen.

---

## Kostråd och miljögifter

Mälarens vattenvårdsförbunds analys från 2021 visar att kvicksilver i abborre och bromerade flamskyddsmedel (PBDE) överskrider gränsvärden vid samtliga provplatser. Dioxiner i abborre från Ekoln och Västeråsfjärden överskrider också gränsvärdet.

Livsmedelsverket rekommenderar att gravida, ammande och de som planerar graviditet begränsar intaget av abborre, gädda och gös från insjöar till 2–3 gånger per år.

Aktuella kostråd finns på livsmedelsverket.se.

---

## Infrastruktur och praktisk information

### Båtramper

| Plats | Noteringar |
|---|---|
| Hässelby/Bergshamns brygga | Nordvästra Stockholm |
| Stäket (två ramper) | Vid båtklubben, norra Mälaren |
| Karlskärsbadet, Ekerö | Centrala Mälaren |
| Skokloster | Norra Mälaren, nära Ekoln |
| Svartåhamnen, Mälarparken Västerås | Västeråsfjärden |
| Kvicksund och Kungsörs båtvarv | Västra Mälaren |
| Mariefreds hamn | Gripsholmsfjärden |
| Gorsingeholm | Södra Mälaren |

Fler ramper via sveramp.se eller appen Båtramp. Många är gratis. Vissa båtklubbsramper tar avgift.

### Landfiske

Bra landfiskeplatser: Görvälns strandpromenad, Kallhällsbadet, Kyrkhamn, Stockholms ström (hela strömmen), Smedsudden, Riddarholmen, Skeppsholmen, Skokloster, Pilsbo, Hammarskog och Dalbyviken (Ekoln), Mälarparken i Västerås och Svartåhamnen.

Alla broar, kajer och allmänna bryggor i Stockholms innerstad är fiskbara.

### Boende

- Stockholm: Bredängs camping, Långholmens vandrarhem, Ekerö Sunset Camp
- Mariefred/Strängnäs: Gripsholms värdshus, Strängnäs Camping (Visholmen)
- Enköping: Bredsands camping vid Mälaren
- Västerås: Johannisbergs camping, Ängsö slott (vandrarhem)
- Uppsala/Ekoln: Sunnersta camping, Sunnersta herrgård

### Kommunikationer

Stockholm, Uppsala, Västerås, Eskilstuna, Strängnäs, Enköping, Köping och Arboga ligger alla direkt vid sjön. Tåg via SJ och Mälardalstrafik når samtliga städer. E18, E20, väg 55 och väg 56 ringar in sjön.

---

## Historik och bakgrund

### Fiskebetydelse

Mälaren har varit ett centralt fiskevatten sedan järnåldern. På 1950-talet fanns 200 yrkesfiskare. I dag är de drygt 40, med gös som viktigaste art (ca 150 ton/år), följt av siklöja, gädda och abborre.

### Vattenkraft och vandringshinder

Söderström och Norrström regleras med dammluckor sedan slutet av 1960-talet. Regleringen styrs av en vattendom. Kraftverk finns även vid Strömsholm, Eskilstuna och i Hjälmare kanals slussystem. Dessa hindrar asp, lax och öring från att nå lekområden. Fiskväg har byggts vid Kvarnfallet i Uppsala med god effekt för asp.

### Dricksvatten för 2,3 miljoner

Mälaren är vattentäkt för drygt 2,3 miljoner människor i 25 kommuner via tre vattenverk: Norsborg, Lovö och Görväln. Östra Mälaren är vattenskyddsområde sedan 2008 med särskilda regler för båttrafik och kemikalier. Bornsjön söder om Norsborg är reservvattentäkt och fiske där är förbjudet.

### Invasiva arter

Mälaren har 23 registrerade främmande akvatiska arter. Signalkräfta slog ut det historiska flodkräftbeståndet via kräftpest. Sjögull bildar täta mattor i Galten och Västeråsfjärden och bekämpas aktivt. Vandrarmussla, vattenpest och smal vattenpest är etablerade. Kinesisk ullhandskrabba observeras i Strömmen.

Tvätta båt och redskap mellan vatten för att inte sprida invasiva arter.

---

## Snabbfakta

| | |
|---|---|
| Fritt handredskapsfiske | Ja, hela sjön |
| TDA-kort krävs | Trolling, dragrodd, angelfiske |
| Var köps TDA-kortet | parker.stockholm eller iFiske |
| Gösens minimimått | 45 cm |
| Gäddans minimimått/maxmått | 40–75 cm, max 3 fiskar/dag |
| Aspfredning | 1 april–31 maj i tillrinnande vattendrag |
| Ål | Totalförbud för fritidsfiskare |
| 5-metersregel Stockholms ström | Gäller 1 juli–31 december |
| Närmaste städer | Stockholm, Uppsala, Västerås, Eskilstuna |

---

*Strömkast finansieras via affiliate-länkar. Köper du fiskekort eller utrustning via länkarna på den här sidan får vi en liten provision, utan kostnad för dig. Det påverkar inte vad vi skriver eller hur vi värderar fiskevatten.*```

## src/content/destinations/morrum.mdx
```
---
title: "Mörrumsån"
slug: "morrum"
description: "Mörrumsån i Blekinge är ett av Europas mest klassiska sportfiskevatten och en av Östersjöns viktigaste vildlaxälvar. Guide till fiskekort, säsong och hotspots."
heroImage: "/images/destinations/morrum.jpg"
lat: 56.18
lng: 14.75
län: "Blekinge"
primarySpecies: ["lax", "havsöring", "gädda", "id", "abborre"]
waterType: "river"
excerpt: "Europas mest klassiska sportfiskeälv för lax och havsöring."
iFiskeUrl: "https://www.ifiske.se/fiske-morrumsans-fvo-ebbemala-amma.htm"
recommendedGear: []
publishedAt: "2025-01-01"
updatedAt: "2025-01-01"
---

Mörrumsån i Blekinge är ett av Europas mest klassiska sportfiskevatten och en av Östersjöns viktigaste vildlaxälvar. Den nedre delen drivs sedan 1941 som Mörrums Kronolaxfiske av Sveaskog och är världsberömd för sina storväxta laxar och havsöringar. Säsongen 2026 är den 86:e officiella fiskepremiären. Snittvikten på fångad lax ligger historiskt runt 8 kg och laxrekordet är 26,72 kg.

Det är ett vatten med struktur och historia. 32 numrerade pooler längs den nedre sträckan, en noga reglerad fångstkvot och en laxstam som kämpar för sin återhämtning. Att fiska Mörrum kräver förberedelse och är inte ett billigt spontanbesök.

---

## Fiskekort och regler

### Kort krävs alltid

Mörrumsån är enskilt vatten. Det statliga frifisket gäller inte här. Du behöver fiskekort för allt fiske, oavsett art och metod. Kortet är personligt och ska visas upp tillsammans med ID vid tillsyn.

Ån sköts av två olika aktörer med separata kort och regler:

- **Mörrums Kronolaxfiske (Sveaskog):** den nedre sträckan, ca 8 km från mynningen. Säsong 21 mars–30 september 2026.
- **Mörrumsåns FVO Ebbemåla–Åmma:** 3,5 km uppströms Kronolaxfisket, med premiär 14 mars 2026. Köps via iFiske.se.

### Priser 2026 – Kronolaxfisket (dagkort)

| Korttyp | Pris |
|---|---|
| Premiärdagen 21 mars | 1 200 kr |
| Pool 1–32 (22 mars–30 sep) | 750 kr/dag |
| Pool 1–32 (juli) | 650 kr/dag |
| VS eller KH | 750 kr/dag |
| All Inclusive (Pool 1–32 + VSKH) | 990 kr/dag |
| All Inclusive (juli) | 890 kr/dag |
| Familjekort 1 juni–31 aug | 1 200 kr/dag |
| Eftermiddagskort från 14:00 | -30 % på osålda kort, säljs på plats |
| Junior 14–22 år | 50 % rabatt |
| Under 14 år | Gratis på målsmans kort |

**Säsongskort (All Inclusive, Pool 1–32 + VSKH):** 18 200 kr vuxen, 9 100 kr pensionär, 2 050 kr junior.

Bokning via morrum.com. Antalet dagkort är begränsat per dag och sträcka. Premiärdagen och maj säljer slut tidigt.

### Priser 2026 – FVO Ebbemåla–Åmma (dagkort)

| Period | Pris |
|---|---|
| Premiärdagen 14 mars | 700 kr |
| Mars | 500 kr |
| April | 300 kr |
| Maj–juli | 150 kr |
| Augusti | 200 kr |
| September | 350 kr |
| Sommarkort 1/6–31/8 | 600 kr |
| Mete juni–aug | 70 kr/dag |
| Ungdom (under 18) | -30 % |

Bokning öppnar 10 januari 2026 via iFiske.se.

### Fångstregler för lax och havsöring 2026

- **Minimimått:** 50 cm. Fisk under 50 cm återutsätts omedelbart.
- **Dagkvot:** 1 avlivad laxfisk per fiskare och dag. Tar du din fisk avslutas fiskedagen.
- **Säsongskvot:** 2 avlivade fiskar per fiskare och säsong. Därefter fortsatt fiske men endast catch and release.
- **Total säsongskvot:** 100 avlivade fiskar för hela Kronolaxfisket. När taket nås gäller enbart catch and release resten av säsongen.
- **Alla honor** av lax, havsöring och hybrid ska återutsättas under augusti–september.
- **Utlekt fisk (kelt/beso)** ska alltid återutsättas.
- **All fångst registreras** via morrum.com eller i receptionen samma dag.
- **Regnbåge och puckellax** avlivas alltid och registreras men räknas inte mot kvoten.

### Catch and release – obligatorisk rutin

- Korta fighten.
- Håv eller blöta händer, aldrig torr hand mot fisken.
- Fisken ska alltid ligga fritt i vattnet. **Lyft aldrig fisken över ytan.** Det är en regel, inte en rekommendation.
- Håll huvudet mot strömmen tills fisken simmar iväg själv.
- Använd knutfri gummerad håv.

### Tillåtna metoder

- Ett spö per person.
- Spinn- och flugfiske. Uppströmskast är förbjudet.
- Vissa pooler är enbart flugfiske (pool 1, 10, 11, 12, 19), andra enbart spinn (pool 2, 3, 6, 13, 14, 16), resten blandpooler.
- Ekolod och annan utrustning för att lokalisera fisk är förbjuden.
- Hullingfria krokar eller intryckta hullingar rekommenderas.

### Zonindelning 15–31 maj

Under 15–31 maj är pool 1–32 delad i två zoner: pool 1–16 och pool 17–32. Ditt dagkort gäller en zon åt gången. Byte av zon sker klockan 13:00.

### Mete och grovfiske på Kronolaxfisket

Kräver separat metekort:

- Sommarmete 1 juni–31 augusti: 50 kr/dag (gratis under 18 år)
- Specimenfiske april–september: 200 kr/dag
- Specimen id (lekperiod) april och oktober–november: 230 kr/dag
- All metad fisk återutsätts. Mete på pool 5, 6 och 7 är förbjudet under maj.

### Fisketider

- Premiärdagen: 09:00–17:00
- Övriga dagar: 05:00–02:00

---

## Fiskarter
### Lax

Mörrumsåns vilda Östersjölax är åns signaturart. Ån är klassat som **indexvattendrag** för Östersjölax av Havs- och vattenmyndigheten och SLU Aqua, vilket innebär att fångstdata härifrån används för att förvalta hela Östersjöns laxbestånd.

- **Laxrekordet:** 26,72 kg, fångad av Peter Brüggmann i pool 1 på fluga den 31 maj 1992.
- **Snittvikt historiskt:** ca 8 kg, vilket är ovanligt högt.
- **2025:** 664 registrerade laxar, en ökning på ca 20 % från de senaste åren. Trolig förklaring: lyckad lek 2022 och dammrivningarna 2024.
- **Beståndsstatus:** ogynnsam med historiskt negativ trend, men 2025 visade en vändning uppåt.
- Fiskar över 20 kg förekommer, framför allt i maj–juni.

Bästa säsong för storlax: mitten av maj till tidiga juni. Mars–april ger enstaka tidiga laxar. Juli–augusti ger många mindre laxar (grilse). September avtar men kan ge bra fiske på övre sträckorna.


[Läs mer om lax](/arter/lax/)

### Havsöring

En av Sveriges mest klassiska havsöringsälvar. Rekordet är 14,7 kg.

Primärtid: mars–april för stor havsöring. Andra topp: augusti–september för uppvandrande lekfisk. Hybrider (lax-öringhybrid) förekommer i Mörrum i ovanligt hög grad och registreras som egen kategori.


[Läs mer om öring](/arter/oring/)

### Övriga arter

- **Id:** stora bestånd, starka toppperioder april (lek) och oktober–november. En klassiker för specimenmete.
- **Gädda:** lugnvattnen och nedre sträckan. Sommarmete och spinn.
- **Abborre:** allmän, spinn och mete maj–oktober.
- **Gös:** de djupare lugnvattnen nedströms Marieberg och i mynningsområdet.
- **Asp:** förekommer men är fredad. Riktat fiske är förbjudet.
- **Ål:** finns men är fredad.
- **Mört, sarv, braxen, sutare, stäm, färna:** alla förekommer. Populärt sommarmete.
- **Flodnejonöga och hotade stormusslor** (tjockskalig målarmussla, flodpärlmussla) finns i ån och är en del av motivet för Natura 2000-skyddet.


[Läs mer om gädda](/arter/gadda/)

---## Ånens karaktär

### Grundfakta

- **Längd:** 186 km
- **Avrinningsområde:** 3 369 km²
- **Medelflöde vid mynningen:** ca 25 m³/s
- **Källsjöar:** Helgasjön och Åsnen (Småland)
- **Mynning:** Pukaviksbukten vid Elleholm, ca 7 km väster om Karlshamn
- **Fallhöjd:** 280 m

Ån rinner från Småländska höglandet via Helgasjön och Åsnen söderut genom Hovmansbygd, Hemsjö och Svängsta till Mörrum. Kronolaxfiskets sträcka är de nedersta ca 8 km.

### Sträckorna

**Pool 1–32 (nedre ån, Svängsta–mynningen):** Åns klassiska laxsträcka med 32 numrerade pooler. Pool 1 vid Kungsforsen och Laxens hus. Poolerna varierar i karaktär från forsande strömmar (pool 1, 9, 22) till djupa lugna pooler (pool 17, 18) och lågvattenpool (pool 19).

**Vittskövle (V) och Svängsta (S):** direkt uppströms pool 32, vid Marieberg.

**Knaggalid (K):** uppströms Åkeholm.

**Härnäs (H):** översta sträckan, mellan Hovmansbygd och Hemsjö. Fiskar från första augustiveckan och framåt.

**FVO Ebbemåla–Åmma:** 3,5 km naturreservat med nio pooler och vildmarkskänsla.

### Vattennivå och temperatur

Flödesvariationen är stor. Mars–april: 30–100 m³/s. Maj sjunker till 15–30 m³/s. Sommar och tidig höst: 7–15 m³/s. Vattentemperaturen går från nära 0 °C i mars till uppåt 25 °C i juli. Realtidsdata för flöde och temperatur finns på morrum.com.

### Naturreservat och Natura 2000

Hela den nedre dalen är Natura 2000. En sammanhängande kedja av naturreservat följer ån från mynningen norrut: Mörrumsåns nedre dalgång, Mörrumsåns dalgång, Käringahejan, Angölsmåla, Ebbamåla bruk och Mörrumsåns övre dalgång. Vid mynningen ligger Pukaviksbukten, också Natura 2000. Uppströms i Småland ligger Åsnens nationalpark (invigd 2018).

---

## Fiskemetoder

Metoderna nedan är anpassade till Mörrumsåns förhållanden. Flöde och vattentemperatur styr val av lina, flugor och beten mer än på de flesta andra vatten. Detaljerade teknikanvisningar finns på respektive tekniksida.

### Flugfiske

Flugfiske är den primära metoden och obligatorisk på flera pooler. Tvåhandsspö (Spey) dominerar säsongens början. Metoden anpassas löpande efter flöde och vattentemperatur: stora sjunkflugor vid vårflod, mindre och mörkare flugor vid lågvatten. Uppströmskast är förbjudet på hela sträckan.

[Läs mer om flugfiske](/teknik/flugfiske)

### Spinnfiske

Spinnfiske är tillåtet på de flesta pooler och passar väl vid högt och kallt vatten tidigt på säsongen. Tunga beten i mars–april, lättare under sommaren. Samma färglogik som för flugor: stort och färgstarkt i kallt högt vatten, litet och dämpat i varmt lågvatten. Uppströmskast är förbjudet.

[Läs mer om spinnfiske](/teknik/spinnfiske)

### Säsongsspecifika tips

- **Premiär (mars):** Pool 1–4 samlar tidig fisk. Stora sjunkflugor och lugna driftar.
- **Mars–april:** havsöring är primärtarget, pool 1–16.
- **Mitten av maj–tidiga juni:** storlaxsäsongen. Pool 1, 10, 11, 12, 17. Boka tidigt.
- **Juni:** vattnet sjunker och fisken sprids. Härnäs börjar fiska. Mindre flugor.
- **Juli:** lågvatten och varmt. Fiska gryning, kvällsskymning eller natt. Pool 27 (Hästhagen) anses som säkraste sommarpoolen.
- **Augusti–september:** ny havsöringsvåg. Honor ska återutsättas. Härnäs och övre sträckorna fiskar bra.

---

## Hotspots och lokaler

### Pool 1 – Kungsforsen

Åns mest kända och mest fiskade pool, direkt vid Laxens hus. Obligatorisk flugfiskepool. Bred och kraftig fors med djup hålla nedströms. Storlaxarnas favoritpool under maj–juni. Dagkortet inkluderar pool 1 i standardpaketet.

### Pool 10, 11 och 12

Tre av de mest eftertraktade poolerna för storlax under högsäsongen. Flugfiskeobligatoriska. Boka i god tid om det är dessa pooler du siktar på.

### Pool 17 och 18

Djupa och lugna pooler som håller fisk länge in på säsongen. Bra val vid lågvatten och värme när de snabbare forsarna är svårfiskade.

### Pool 27 – Hästhagen

Anses som den säkraste sommarpoolen under juli. Håller fisk även under de varmaste perioderna.

### FVO Ebbemåla–Åmma

Nio pooler i naturreservat 3,5 km uppströms Kronolaxfisket. Vildmarkskänsla och avsevärt lägre dagkorspris (150–350 kr beroende på period). Bra alternativ för den som vill testa ån till lägre kostnad, framför allt i april.

### Härnäs och övre sträckorna

Övre sträckan börjar fiska från första augustiveckan. Bra för havsöring under hösten. Lägre konkurrens om platser jämfört med de nedre poolerna.

---

## Säsongsöversikt

| Månad | Bästa art | Bästa metod |
|-------|-----------|-------------|
| Mars (premiär 21/3) | Havsöring, tidiga laxar | Fluga (sjunkflugor), spinn |
| April | Havsöring, id (lek) | Fluga, spinn, specimenmete |
| Maj | Storlax, havsöring | Fluga, spinn (pool 1, 10–12, 17) |
| Juni | Lax, id | Fluga (mindre), spinn |
| Juli | Lax (grilse), abborre, gädda | Nattfiske, sommarmete |
| Augusti–september | Havsöring, lax | Fluga, spinn (Härnäs och övre) |

Total säsongskvot: 100 avlivade fiskar för hela Kronolaxfisket. Personlig säsongskvot: 2 avlivade fiskar. Alla honor av lax och havsöring återutsätts under augusti–september.

---

## Infrastruktur och praktisk information

### Adress och kontakt

**Mörrums Kronolaxfiske / Laxens hus**
Kvarnvägen 1, 375 21 Mörrum
Tel: 0454-501 23
morrum.com

Mörrum ligger ca 7 km väster om Karlshamn längs E22. Ta avfart Mörrum och följ skyltarna mot Laxens hus. Tågstation i Mörrum med förbindelser till Karlshamn.

**FVO Ebbemåla–Åmma:** Väg 126 norrut från Karlshamn mot Olofström/Ryd, avfart Hovmansbygdsvägen (väg 591) ca 4 km söder om Fridafors.

### Fiskeguider

- Guide vardagar: 700 kr/timme eller 3 800 kr/dag. Helger: 900 kr/timme eller 4 800 kr/dag.
- Kastkurs tvåhandsspö (6 h): 4 300 kr/person.
- Guidning rekommenderas om du aldrig fiskat lax på fluga i forssatt vatten.

### Boende

| Boende | Pris |
|---|---|
| Camping Åkroken (el) | 320 kr/dygn |
| Camping Forsheda | 200 kr/dygn |
| Kungsforsen Logi STF (enkelt) | 500 kr/natt |
| Kungsforsen Logi STF (dubbelrum) | 900–1 400 kr/natt |
| Hermit's Cottage (2 bäddar) | från 10 000 kr/säsong |
| Laxagården (4 bäddar) | från 1 600 kr/natt |

I övrigt finns B&B och stugor i Mörrum, Svängsta och Karlshamn.

### Kommunikationer

Karlshamn nås med tåg via Blekinge kustbana (Malmö–Karlskrona). Mörrum har egen tågstation med förbindelser till Karlshamn. Med bil: E22 längs Blekingekysten, avfart Mörrum.

### Laxens hus

Laxens hus vid Kungsforsen rymmer reception, fiskebutik, café och en permanent utställning om Mörrumsåns historia. Strömakvarier visar levande lax och havsöring. Fönster i bottenvåningen blickar ned i ån. Inträde 50 kr för vuxen, gratis under 18 år.

### Utrustningshyra

- Hyrspö flugfiske: 400 kr/dag
- Hyrspö spinn: 300 kr/dag
- Vadarbyxor med skor: 400 kr/dag

---

## Historik och bakgrund

### Från medeltiden till i dag

Den första skriftliga källan till laxfiske i Mörrumsån är den danske kungen Valdemar II:s jordebok från 1231. Blekinge var danskt till Roskildefreden 1658. Kronans fiske begränsades historiskt till sträckan från Grinderna (pool 19) ned till mynningen.

Det organiserade sportfisket startade 1941. Domänverket anlitade 1939 sportfiskaren Sven O Hallman för att utreda om sportfiske kunde etableras, och resultatet var positivt. Den danske sportfiskaren Kai Pless Schmidt fick tillstånd att provfiska och visade att laxen tog på spö. 2026 är den 86:e officiella fiskepremiären.

### Vattenkraft och miljöåtgärder

Sju kraftverk har funnits i åns nedre del. Mariebergsdammen revs ut sommaren 2024. Fiskvägar finns vid Hemsjö övre och nedre samt omlöp vid Fridafors. Granö är i dag övre vandringsgräns. Uniper planerar ny fiskväg vid Granö och intagsgaller vid Hemsjö som ska leda nedvandrande smolt förbi turbinerna. Åtgärderna görs inom ramen för den nationella planen för vattenkraftens moderna miljövillkor (NAP).

### Försurning och kalkning

Avrinningsområdet drabbades hårt av försurning under 1970- och 80-talen. Kalkning av biflöden och källsjöar pågår fortfarande och är en förutsättning för att lax- och öringsmolt och hotade stormusslor ska överleva.

### Ärlig bild

Mörrumsån är inte ett vatten för spontanbesök. Dagkortet kostar 750 kr och storlaxarna tar inte varje dag. Catch and release-graden är ca 85 % och totalkvoten 2026 är 100 fiskar för hela säsongen. Poängen är upplevelsen, kontakten med en av Östersjöns sista vilda laxstammar och strukturen i ett av Europas bäst förvaltade laxvatten.

Vill du testa till lägre kostnad, börja med FVO Ebbemåla–Åmma i april (300 kr/dag) eller ett eftermiddagskort på Kronolaxfisket.

---

## Snabbfakta

| | |
|---|---|
| Förvaltning | Sveaskog (Kronolaxfisket) + FVO Ebbemåla–Åmma |
| Bokning Kronolaxfisket | morrum.com |
| Bokning FVO | iFiske.se |
| Säsong Kronolaxfisket | 21 mars–30 september |
| Säsong FVO | Premiär 14 mars |
| Dagkort Pool 1–32 | 750 kr (650 kr i juli) |
| Total säsongskvot | 100 avlivade fiskar |
| Personlig säsongskvot | 2 avlivade fiskar |
| Laxrekordet | 26,72 kg (1992) |
| Havsöringsrekordet | 14,7 kg |
| Närmaste stad | Karlshamn (7 km) |

---

*Strömkast finansieras via affiliate-länkar. Köper du fiskekort eller utrustning via länkarna på den här sidan får vi en liten provision, utan kostnad för dig. Det påverkar inte vad vi skriver eller hur vi värderar fiskevatten.*```

## src/content/destinations/stockholms-skargard.mdx
```
---
title: "Stockholms skärgård"
slug: "stockholms-skargard"
description: "Fiska i Stockholms skärgård: regler för gädda, gös och havsöring, TDA-kort, fredningsvikar, hotspots från Furusundsleden till Landsort och båtramper."
heroImage: "/images/destinations/stockholms-skargard.jpg"
lat: 59.28
lng: 18.8
län: "Stockholm"
primarySpecies: ["havsoring", "gadda", "gos", "abborre", "lax", "sik"]
waterType: "coastal"
iFiskeUrl: "https://www.ifiske.se/fiske-tda-kortet-i-stockholms-skargard-malaren-m-fl-vatten.htm"
excerpt: "30 000 öar och ett av Sveriges bästa kustfiskevatten för gädda och havsöring."
recommendedGear: []
publishedAt: "2026-05-28"
updatedAt: "2026-05-28"
---

Stockholms skärgård sträcker sig ca 150 kilometer från Arholma i norr till Landsort i söder och rymmer ungefär 30 000 öar, holmar och skär. Det är ett brackvattenshav med salthalt på 4,5–7 PSU beroende på hur långt ut du befinner dig, och det gör att du kan möta arter som normalt hör hemma i antingen sötvatten eller saltvatten. Havsöring, gädda, gös och abborre är de fyra viktigaste sportfiskearterna, men bestånden av kustnära rovfisk är under press och regelverket har skärpts markant sedan 2021. Det finns gott om vatten att fiska på, men du behöver ha koll på fredningsområden och fångstbegränsningar innan du ger dig ut.

## Fiskekort och regler

Handredskapsfiske är fritt i hela skärgårdens kustvatten. Det gäller för alla, oavsett nationalitet, utan kostnad och utan kort. Trolling, dragrodd, angel och ismete räknas inte som handredskap och kräver antingen TDA-kort (Stockholms stads kort) eller fiskerättsägarens tillstånd.

### Vad är fritt och vad kräver tillstånd?

Fritt handredskapsfiske innebär mete, spinnfiske och flugfiske med max ett spö och tio krokar. Det inkluderar pimpel vintertid i de delar av skärgården där is bildas. Metoden ska utövas av en person i taget med en kropp av redskap.

TDA-kortet krävs för trolling, dragrodd och vertikalfiske (pilkfiske) i de vatten som ingår i Stockholms stads fiskevårdsområde. Kortet gäller ungefär 70 delområden i Mälaren och skärgården och säljs via parker.stockholm och iFiske.

Fiske i insjöar med enskilt vatten, som Erken, Yngern och andra vatten i länet, kräver separat tillstånd eller Sportfiskekortet. Sportfiskekortet (Sportfiskarna) ger tillgång till ca 42 vatten i Stockholmsregionen och köps via iFiske.

### Var köper du fiskekort?

TDA-kortet köps på [iFiske.se](https://www.ifiske.se/fiske-tda-kortet-i-stockholms-skargard-malaren-m-fl-vatten.htm) eller via parker.stockholm. Ladda ner appen iFiske för enklast hantering.

### Priser 2026

Priserna nedan är hämtade från Stockholms stad och gäller vid publicering. Verifiera aktuella priser på parker.stockholm.

| Kort | Innehåll | Pris (inkl. moms) |
|------|----------|-------------------|
| TDA-1 | 3 spön/båt, dragrodd | 300 kr/år |
| TDA-2 | 4 spön + vertikalfiske | 600 kr/år |
| TDA-3 | 6 spön + planerboards | 900 kr/år |
| TDA-4 | Kräftfiske | 300 kr/år |
| TDA-5 | Metekort | 100 kr/år |

### Minimimått och fångstbegränsningar

Reglerna nedan gäller i Östersjön och skärgårdsvatten. Kontrollera alltid mot HaV:s aktuella föreskrifter på havochvatten.se, eftersom reglerna kan ändras.

| Art | Minimimått | Maximimått | Max per dygn |
|-----|-----------|-----------|--------------|
| Gädda | 40 cm | 75 cm | Se nedan |
| Gös | 45 cm | 60 cm | Se nedan |
| Havsöring | 50 cm | – | 1 icke fenklippt |
| Lax | 60 cm | – | Se nedan |
| Torsk | – | – | Förbjudet |
| Ål | – | – | Förbjudet |

**Gädda och gös:** Fönsteruttag gäller, det vill säga att fiskar under 40 cm eller över 75 cm (gädda) och under 45 cm eller över 60 cm (gös) ska omedelbart återutsättas. Maxuttag är sammanlagt tre fiskar av gädda och gös per dygn vid handredskapsfiske.

**Havsöring:** Maxuttag är en (1) icke fenklippt havsöring per dygn i kustfisket från Blekinge upp till norra Uppsala län. Fenklippt fisk (odlad kompensationsfisk) räknas inte mot kvoten.

**Lax:** Allt riktat fritidsfiske efter lax i Östersjön (ICES-delområde 22–31) är förbjudet sedan 1 januari 2024. Undantag: en fenklippt lax per dag får behållas, varefter fisket ska upphöra.

**Torsk:** Allt fritidsfiske efter torsk är förbjudet i Östersjöns delområden 22–26 sedan 1 januari 2024.

**Ål:** Fritidsfiske efter ål i havet är förbjudet sedan 2007.

### Fredningstider och fredningsområden

Länsstyrelsen Stockholm har inrättat ett system med 62 vårfredningsvikar och 14 åmynningsfredningar som skydd för lekande fisk. Systemet kallas ReFisk och är ett av de mest omfattande i Sverige.

**Vårfredningsvikar (gädda, abborre, gös):** 62 vikar har fiskeförbud 1 april–15 juni. Syftet är att skydda lekande rovfisk i grundvattnen under vårens känsligaste period.

**Åmynningsfredningar (havsöring och lax):** 14 vattendragsmynningar har fiskeförbud 15 september–31 december. Syftet är att skydda uppvandrande lekfisk.

**Permanent fredning:** Nio områden har fiskeförbud hela året. Exempel är Hägernäsviken, Edeboviken, Lännåkersviken på Gålö, Tomtviken vid Urö och Gravamaren i Nynäshamn.

Aktuella koordinater och kartor finns hos [Länsstyrelsen Stockholm](https://www.lansstyrelsen.se/stockholm/djur/fiske.html) och på [svenskafiskeregler.se](https://www.svenskafiskeregler.se). Kontrollera alltid lokala skyltar på plats, eftersom kartor kan släpa efter uppdateringar.

> Aktuella regler finns alltid på [HaV:s webbplats](https://www.havochvatten.se) och via [Länsstyrelsens sidor](https://www.lansstyrelsen.se/stockholm/djur/fiske.html). Fredningsområdenas gränser kan uppdateras löpande och lokala skyltar gäller alltid framför äldre kartor.

---

**Obs för den som planerar att äta sin fångst:** Livsmedelsverket har kostråd för fisk från Östersjön och Stockholms skärgård på grund av förhöjda halter av dioxiner och PCB. Råden gäller framför allt strömming, lax, öring och ål. Läs mer i avsnittet om kostråd längre ned i artikeln.

---

## Fiskarter

Skärgården rymmer ca 30 vanliga fiskarter. Artsammansättningen skiftar med salthalt och djup: innerskärgårdens sötvattensarter (abborre, gädda, gös, mört) överlappas i mellanskärgården med havsarter (havsöring, sill, strömming, tobis) och bottenlevande arter som flundra.

### Gädda

Gäddan är skärgårdens vanligaste rovfisk och den art de flesta sportfiskare primärt riktar sig mot. Den leker i grunda vassvikar under april och maj. Beståndet längs södra Östersjöns kust har minskat sedan 1990-talet, vilket är bakgrunden till de skärpta reglerna med fönsteruttag och fredningsvikar. Forskning från SLU och Stockholms universitet visar att fredningsvikar under leksäsongen ger ungefär 2,5 gånger fler gäddor per ansträngning jämfört med öppna referensvikar.

Stockholms stad och Sportfiskarna driver ett antal så kallade gäddfabriker, det vill säga restaurerade våtmarker som fungerar som lekplatser. Hemmesta sjöäng på Värmdö är det mest välkända exemplet, med en uppgång från ett 50-tal till fler än 500 lekande gäddor sedan restaureringen. Liknande projekt är på gång i Lillsjöängen på norra Djurgården och Dyvik i Österåker.

[Läs mer om gädda](/arter/gadda/)

### Havsöring

Havsöringen är skärgårdens mest eftertraktade art och fiskas framför allt från land och kajak under det kyligare halvåret, september–maj. Den lever i havet men leker i kustmynnande vattendrag. Tätheten av havsöring i Länsstyrelsens övervakade vattendrag har minskat från ca 80 till ca 55 öringar per 100 kvadratmeter mellan perioderna 2012–2016 och 2017–2021. Orsakerna inkluderar torrperioder, sälpredation, bäver som täpper igen mynningar och signalkräftor som skadar öringens lekgrus.

Fångstbegränsningen på en icke fenklippt öring per dygn är bindande, inte en rekommendation.

[Läs mer om havsöring](/arter/oring/)

### Gös

Gösen finns i de mer sötvattenspåverkade delarna av skärgården och framför allt i Mälaren. I ytterskärgårdens saltare vatten är den ovanligare. Referensprovfisket i Asköfjärden visar att stor gös i stort sett uteblivit i fångsterna de senaste åren. Fönsteruttag på 45–60 cm gäller i hela Östersjön.

[Läs mer om gös](/arter/gos/)

### Abborre

Abborrens andel i referensprovfisket vid Askö (SLU Aqua) har sjunkit från ca 60 procent av fångsterna under 2005–2014 till ca 20 procent under 2015–2021. Stor abborre förekommer fortfarande och fiskas med jigg och dropshotmetoden. Inget minimimått gäller nationellt för abborre i havet, men många FVO har lokala mått.

[Läs mer om abborre](/arter/abborre/)

### Lax

Lax passerar skärgården på sin väg mot älvarna men allt riktat fritidsfiske är förbjudet sedan 2024. Trollingfiske utanför Landsort och Singö fångar lax i Östersjöns öppna vatten och fenklippt odlad lax (utan fettfena) får behållas inom ramen för en per dag. Vild lax med intakt fettfena ska alltid släppas omedelbart.

[Läs mer om lax](/arter/lax/)

### Sik

Sik fiskas i innerskärgårdens sötvattenspåverkade fjärdar och vid åmynningar. Stockholms skärgård har ett inofficiellt sportfiskerekord för sik på 4,23 kg från Skälåkersviken på Gålö (1991). Kostråden från Livsmedelsverket gäller även för sik från Östersjön.

### Torsk

Torskbeståndet i Egentliga Östersjön är kollapsartat. ICES rekommenderar nollfångst 2025–2026. Allt fritidsfiske är förbjudet i delområde 22–26. Lokala provfisken i Baggensfjärden visar att enstaka vuxen torsk fortfarande förekommer på 60–70 meters djup, men reproduktionen fungerar inte.

### Strömming och sill

Strömming och sill har minskat kraftigt i skärgården sedan 1900-talets slut. Under 2025 noterade SLU Aquas kustprovfisken tecken på återhämtning för höstlekande sill. Den är inte ett primärt sportfiskemål men ingår i mördarfiskens föda och är ett ekologiskt nyckelbestånd.

### Övriga arter

Flundra, skrubbskädda, tånglake och tobis förekommer i yttre skärgård. Id och mört finns i innerskärgårdens sötare vikar. Ål är akut hotad och totalfredad.

---

## Vattnets karaktär

### Grundfakta

- **Sträckning:** ca 150 km norr–söder (Arholma–Landsort), ca 80 km öst–väst
- **Antal öar, holmar och skär:** ca 30 000
- **Areal (vatten och land):** ca 1 700 km²
- **Salthalt:** 4,5–5,5 PSU (innerskärgård) till 6–7 PSU (ytterskärgård)
- **Djup:** medeldjup 20–35 m, djuphålor på 50–110 m
- **Landsortsdjupet:** 459 m (Östersjöns djupaste punkt, öster om Landsort)
- **Landskap:** Stockholms och Södermanlands läns skärgård
- **Fast befolkning:** ca 10 000 permanentboende på öarna

### Tre zoner

**Innerskärgården** sträcker sig från Stockholms stad ut till ungefär Vaxholm och Gustavsberg. Salthalten är låg på grund av Mälarens utflöde via Slussen, och artsammansättningen liknar insjöfiske. Vattendjupet är ofta 5–20 m med tröskelformade bassänger och syrebrist i de djupaste delarna under sommaren.

**Mellanskärgården** (Baggensfjärden, Erstaviken, Kanholmsfjärden, Furusundsleden) är den mest varierade zonen med en blandning av hård- och mjukbottnar, ler, sand och vegetation. Salthalten är 5–6 PSU. De flesta sportfiskarna befinner sig i den här zonen.

**Ytterskärgården** (Sandhamn, Möja, Nåttarö, Huvudskär, Landsort, Svenska Högarna) är exponerad, klippig och avfolkad. Salthalten är 6–7 PSU. Här dominerar havsöring och strömming. Torsk dominerade historiskt men är i dag i praktiken frånvarande på grund av beståndskollaps.

### Bottentyp och vegetation

Grunda mjukbottnar med bladvass och nate finns i innerskärgården och de inre delarna av mellanskärgårdens vikar. Hårdbottnar med blåstång och ålgräs dominerar i mellanzonen. Ytterskärgårdens bottnar är kala hällar och grov grus. Ålgräsängarna är viktiga uppväxtmiljöer för gädda, gös och abborre och är skyddade inom flera naturreservat.

### Isläggning

Innerskärgården och skyddade fjärdar lägger igen under kalla vintrar, men isläggningen är oregelbunden och allt kortare i och med ett mildare klimat. Är det is kan pimpelfiske efter abborre och gädda vara bra i Baggensstäket, Erstaviken och Dalarö-området. Kontrollera alltid aktuell israpport (SMHI) och gå aldrig ut ensam på ny is.

### Tillflöden

Mälaren mynnar via Slussen i centrala Stockholm och påverkar salthalten i hela Stockholms inre skärgård kraftigt. Viktigare havsöringsvattendrag som mynnar i skärgården är Åvaån (Värmdö), Muskån/Hammerstaån (Värmdö), Fitunaån (Nynäshamn), Kagghamraån och Moraån.

---

## Fiskemetoder

Detaljerade teknikanvisningar finns på respektive tekniksida. Nedan beskrivs vad som är specifikt för Stockholms skärgård.

### Spinnfiske

Spinnfiske är den vanligaste metoden i skärgården och fungerar för gädda, havsöring och abborre. För gädda används mjukplastbeten på offsetjig (10–25 cm) eller wobblare i grunda vikar och längs vassbryn under vår och höst. Havsöring fiskas effektivast med rostfri beslaget wobblare eller tobisimitation längs klippstränder och bryggor i september–november och mars–maj. Bästa tiderna är ofta soluppgång och skymning.

[Läs mer om spinnfiske](/teknik/spinnfiske/)

### Jiggfiske

Jiggfiske med gummibeten på cheburashka eller jigghuvud fungerar bra för gös i Mälaren och de inre delarna av skärgården. I skärgårdens kustvatten ger jiggning längs djupkanter 6–15 m bra fångster av abborre. Trolling och vertikalfiske kräver TDA-kort.

[Läs mer om jiggfiske](/teknik/jiggfiske/)

### Flugfiske

Flugfiske efter havsöring är möjligt från land, vadande eller från kajak längs klippstränder och vid åmynningar. Streamers som imiterar tobis, sill, märla och sandkrypare är effektiva. En intermediate lina eller sjunkande lina fungerar bättre än flytlina i de strömrika passagerna. Säsongen sammanfaller med spinnfiskesäsongen: september–maj ger kallare vatten och aktivare fisk.

[Läs mer om flugfiske](/teknik/flugfiske/)

### Trolling

Trolling är tillåtet i skärgårdens öppna vatten men kräver TDA-kort i Stockholms stads fiskevårdsområde. Lax-trolling utanför Landsort och Singö är bäst från mitten av maj till midsommar. Vid trolling efter havsöring gäller fångstbegränsningen om en icke fenklippt öring per dygn. Fenklippt odlad lax (utan fettfena) kan behållas, en per dag.

[Läs mer om trolling](/teknik/trolling/)

### Dropshotfiske

Dropshotfiske är ett effektivt alternativ till pilk för abborre och gös i djupare vatten (8–20 m). Inga kortregler gäller om du fiskar med ett handspö i stillaliggande båt, men kontrollera lokala regler om fisket bedrivs under trolling-liknande former.

[Läs mer om dropshotfiske](/teknik/drop-shot/)

### Pimpel

Pimpelfiske efter abborre, gädda och gös är populärt i de delar av innerskärgården och de inre fjärdarna som lägger igen på vintern. Mete och pimpel är fritt med handredskap. Inga kortregler gäller.

---

## Hotspots och lokaler

### Djurgården och Stockholms ström

Den klassiska öringlokalen för den som är baserad i Stockholm. Strömmen under Djurgårdsbrunnsviken, Blockhusudden och utanför Kastellholmen ger havsöring på senhöst och vår. Fisket sker från land och är fritt utan kort. Abborre och gädda tas också i kanalen på Djurgårdens västra sida.

### Baggensfjärden

En stor och djup fjärd i Nacka/Värmdö-gränsen, ca 25 km öster om Stockholm. Mellanskärgård med bra gäddvatten längs vassbryn och vid mynningar. SLU Aqua och BalticWaters bedriver löpande provfiske här som en del av kustövervakningen. Kräver båt för att nå de bästa punkterna. Närmaste ramp: Lännerstasundet (Nacka).

### Hemmesta sjöäng och Björkviks brygga (Värmdö)

Hemmesta sjöäng är Sportfiskarnas mest kända gäddfabrik med dokumenterat ökande lekgäddepopulation. Fisket i anslutande vikar är fritt med handredskap utanför fredningsperioden (1 april–15 juni). Björkviks brygga strax söder om Gustavsberg är en känd landfiskelokaler för havsöring under höst och vinter.

### Erstaviken

Lång och smal fjärd i Tyresö/Nacka med bra gäddvatten hela sommarhalvåret. Tillgänglig med bil och båt. Parkering finns vid Söderby och Flatens naturreservat.

### Furusundsleden

Den klassiska segelleden längs norra skärgården är också en av de bästa havsöringsstränderna. Klippiga stränder, djupa passager och starka tidvattenrörelser vid snäva sund skapar bra betingelser. Fisket är fritt. Tillgänglig med bil till Furusund (Norrtälje) och med Waxholmsbolaget sommartid.

### Kanholmsfjärden

Stor fjärd i norra mellanskärgården, norr om Ljusterö. Känd för gädda och gös. Kräver båt. Närmaste ramp: Räfsnäs brygga (Norrtälje).

### Mysingen och Landsort

Mysingen är en djup havspassage söder om Landsort och ett av de bästa lax-trollingvattnen i Sverige under maj och midsommar. Landsortsuddens branta stränder ger bra havsöringsplatser under höst och vår. Nås med färja (SL) från Nynäshamn till Oja och Landsort.

### Torö stenstrand och Yxlö

Långa klippstränder i södra skärgårdens ytterkant (Nynäshamn). Bra landfiskeplats för havsöring mars–maj och september–november. Parkering i Torö naturreservat. Yxlöviken söderut ger skydd vid motvind.

### Strandvägen i Nynäshamn

Den kommunala bryggan och strandlinjen i Nynäshamn hamn är en av Stockholmsregionens tillgängligaste landfiskelokaler. Havsöring, abborre och flundra tas herifrån. Bra kommunikationer: SL-tåg till Nynäshamn.

### Singö (Norrtälje)

Norra skärgårdens yttersta del. Bra trollingvatten för havsöring och fettfeneklippt lax under maj. Grova klippstränder för landfiske. Nås med bil till Simpnäs.

---

## Säsongsöversikt

| Månad | Bästa art | Bästa metod |
|-------|-----------|-------------|
| Januari–februari | Abborre, gädda (om is) | Pimpel, spinnfiske |
| Mars | Havsöring | Spinnfiske, flugfiske |
| April | Havsöring (till 31/3 bäst), gädda | Spinnfiske (gädda: ej i fredade vikar 1/4–15/6) |
| Maj | Lax (trolling Landsort), gös | Trolling, jigg |
| Juni | Gädda (från 16/6), gös, abborre | Spinnfiske, jigg, dropshotfiske |
| Juli–aug | Gädda, abborre, gös | Spinnfiske, jigg, dropshotfiske |
| September | Havsöring (ny säsong), gädda | Spinnfiske, flugfiske |
| Oktober | Havsöring, gädda | Spinnfiske, flugfiske |
| November | Havsöring | Spinnfiske, flugfiske |
| December | Havsöring, abborre | Spinnfiske, pimpel |

**Viktiga begränsningar:** 62 vårfredningsvikar stängda för allt fiske 1 april–15 juni. 14 åmynningsfredningar stängda 15 september–31 december. Torskfiske förbjudet hela året. Ålfiske förbjudet hela året.

---

## Kostråd och miljögifter

Livsmedelsverket har kostråd för fisk från Östersjön, inklusive Stockholms skärgård, på grund av förhöjda halter av dioxiner och PCB.

Råden gäller framför allt **strömming/sill, vildfångad lax, vildfångad öring och ål** från hela Östersjön:

- **Barn och ungdomar (under 18 år), gravida, ammande och den som planerar att bli gravid:** max 2–3 gånger per år
- **Övriga vuxna:** max 1 gång per vecka

**Abborre, gädda och gös** från skärgården har generellt lägre halter. Livsmedelsverket har inga generella begränsningar för dessa arter från Stockholms skärgård. Kontrollera alltid om Länsstyrelsen har specifika råd för det vattenområde du fiskar i.

Sverige har sedan 2012 ett EU-undantag som tillåter försäljning av Östersjöfisk med dioxinhalter över EU:s gränsvärden på den svenska och finska marknaden. Export är förbjuden.

En ny riskvärdering från EU:s livsmedelssäkerhetsmyndighet EFSA väntas 2027 och kan leda till reviderade råd. Aktuella råd finns alltid på [livsmedelsverket.se](https://www.livsmedelsverket.se).

---

## Infrastruktur och praktisk information

### Fiskeguider och charter

Stockholms skärgård har ett brett utbud av guider, framför allt för havsöring och lax-trolling:

- **Sandhamnsguiderna** (Fredrik Sjöblom): havsöring, trolling
- **JH Fiske**: havsöring och rovfiske i skärgård
- **Peter Törnqvist**: trolling Landsort och Mysingen
- **Tomas Edenfeldt / dinfiskeguide.se**: rovfiske och havsöring
- **Trosa fiskeguide / Tomas Henriksson**: Studsvik–Trosa södra skärgård
- **Manges fiske**: gädda och rovfiske
- **Lindahl Fiske & Natur**: naturguide och fiske

Kontakta respektive guide för aktuella priser och bokningsperioder.

### Båtramper

| Plats | Noteringar |
|-------|-----------|
| Stavsnäs (Värmdö) | Avgift, stor ramp, parkering |
| Saltarö (Värmdö) | Kostnadsfri, bra läge mot mellanskärgård |
| Sollenkroka (Österåker) | Kostnadsfri, norra skärgårdens södra del |
| Räfsnäs brygga (Norrtälje) | Stor ramp, avgift, norra skärgård |
| Gräddö hamn (Norrtälje) | Avgift, norra skärgård/Furusundsleden |
| Lännerstasundet (Nacka) | Nära Baggensfjärden |
| Islingeviken (Lidingö) | Innerskärgård |
| Djurgårdsbrunnsviken (Stockholm) | Centralt, lite lastmöjlighet |
| Linanäs (Ljusterö) | Norra Ljusterö |
| Nynäshamn småbåtshamn | Södra skärgård |

Uppdaterad rampkarta finns på [batramper.se](https://www.batramper.se).

### Landfiske

Bra landfiskelokaler utan båt inkluderar Djurgården, Stockholms ström, Strandvägen i Nynäshamn, Torö stenstrand, Yxlöviken, Furusund brygga, Björkviks brygga (Värmdö) och Hamnvik (Nynäshamn). Stockholms stad driver också fiskeklubbar och fiskearrangemang på flera kommunala platser.

### Boende

- Vandrarhem: Landsort (STF), Arholma (STF), Finnhamn, Husarö
- Hotell: Sandhamn Seglarhotell, Vaxholm Hotel, Utö Värdshus
- Camping: Dalarö camping, Nynäshamn camping, Söderby Camping (Värmdö)
- Stuguthyrning: brett utbud via turistorganisationerna Visit Stockholm och Skärgårdsstiftelsen

### Kommunikationer

Waxholmsbolaget trafikerar de flesta bebodda öar, med tätare turer på sommaren. Cinderellabåtarna och Strömma Archipelago erbjuder kompletterande linjer. SL-tåg går till Nynäshamn (utgångspunkt för Landsort och södra skärgård) och regionaltåg till Norrtälje (norra skärgård). Bil behövs för de flesta båtramper utanför Stockholm. Parkering vid Stavsnäs och Räfsnäs tar traileruppsättning.

### Sjösäkerhet

Stockholms skärgård kan vara svårt väder med kort varsel, framför allt i ytterskärgårdens exponerade lägen. Bär alltid flytväst. SMHI publicerar aktuell vindprognos och vågvarning. Nödnumret till Sjöräddningen är 020-41 00 00.

---

## Historik och bakgrund

Arkeologiska fynd visar att fiske bedrivits i skärgården i ca 9 000 år. Notfiskarämbetet i Stockholm grundades på 1430-talet och reglerade fisket i de inre vattnen. Strömming var historiskt basen för kustbefolkningens kost och handel. Under 1800-talets mitt översteg de årliga fångster av strömming i den norra skärgården 3 000 ton. År 2023 uppskattades den totala fångsten till ca 39 ton.

Yrkesfiskets tillbakagång startade under 1960- och 1970-talen, delvis drivet av att fritidshusboomen låste enskilt vatten och begränsade fiskerätten för yrkesverksamma. Dioxinlarm under 1980-talet minskade konsumtionen av strömming ytterligare. Antalet yrkesfiskelicenser i Stockholms län sjönk från ca 37 år 2016 till ca 25–26 år 2021, varav bara ett fåtal innehavare var under 50 år.

Rovfiskets kris är mer komplex. SLU Aquas och Stockholms universitets Östersjöcentrums forskning pekar på att säl och skarv i dag tar ett 10–20 gånger högre uttag av abborre och gädda längs kusten än yrkes- och fritidsfisket sammantaget. Parallellt visar Eklöf et al. (2023) att överfiskning av kustnära rovfisk var den primära orsaken till beståndsminskningen under decennierna dessförinnan, och att fredningsvikar ger mätbara effekter redan på kort sikt.

Länsstyrelsens ReFisk-program, som etablerade 62 fredningsvikar och 14 åmynningsfredningar, startade i bred skala 2021. Gäddfabrikerna är en kompletterande åtgärd: restaurerade lekvikar som ersätter de våtmarker som dikades ut under 1900-talets jordbruksrationalisering. Sammantaget är Stockholms skärgård ett vatten i aktiv restaurering, med vetenskaplig uppföljning och skärpt regelverk.

---

## Snabbfakta

| | |
|---|---|
| Fritt handredskapsfiske | Ja, i hela kustvattenområdet |
| Trolling kräver | TDA-kort (300–900 kr/år via iFiske) |
| Minimimått gädda | 40–75 cm (fönsteruttag) |
| Minimimått gös | 45–60 cm (fönsteruttag) |
| Minimimått havsöring | 50 cm |
| Max havsöring per dygn | 1 icke fenklippt |
| Max gädda+gös per dygn | 3 fiskar sammanlagt |
| Laxfiske | Förbjudet (1 fenklippt/dag tillåts) |
| Torskfiske | Förbjudet |
| Ålfiske | Förbjudet |
| Fredningsvikar (vår) | 62 st, stängda 1 april–15 juni |
| Åmynningsfredningar | 14 st, stängda 15 sep–31 dec |
| Närmaste tätort | Stockholm |
| Fiskekort köps | [iFiske.se](https://www.ifiske.se/fiske-tda-kortet-i-stockholms-skargard-malaren-m-fl-vatten.htm) / parker.stockholm |
| Aktuella regler | [havochvatten.se](https://www.havochvatten.se) / [lansstyrelsen.se/stockholm](https://www.lansstyrelsen.se/stockholm/djur/fiske.html) |

---

*Strömkast finansieras via affiliate-länkar. Köper du fiskekort eller utrustning via länkarna på den här sidan får vi en liten provision, utan kostnad för dig. Det påverkar inte vad vi skriver eller hur vi värderar fiskevatten.*
```

## src/content/destinations/storsjon.mdx
```
---
title: "Storsjön"
slug: "storsjon"
description: "Guide till fiske i Storsjön i Jämtland: fiskekort, fiskarter, tekniker och hotspots. Storöring och kanadaröding på trolling, harr på fluga och pimpel under is."
heroImage: "/images/destinations/storsjon.jpg"
lat: 63.2
lng: 14.4
län: "Jämtland"
primarySpecies: ["öring", "kanadaröding", "harr", "sik", "gädda", "abborre"]
waterType: "lake"
excerpt: "Storöring och kanadaröding på trolling i Jämtlands hjärta."
iFiskeUrl: "https://www.ifiske.se/fiske-storsjon.htm"
recommendedGear: []
publishedAt: "2025-01-01"
updatedAt: "2025-01-01"
---

Storsjön i Jämtland är Sveriges femte största sjö med en yta på 464 kvadratkilometer och ett maxdjup på 74 meter. Den ligger i centrala Jämtland, omger Östersund på tre sidor och ingår i Indalsälvens avrinningsområde. Hit åker svenska fiskare för storöringen och kanadarödingen, men sjön rymmer ett tjugotal arter och erbjuder fiske året om.

En sak skiljer Storsjön från de flesta andra stora fiskevatten i Sverige: handredskapsfiske från strand och is är fritt för alla utan krav på fiskekort. Sjön är ovanligt lättillgänglig. Trolling, båtfiske, dragrodd och nätfiske kräver däremot fiskekort via något av de fyra fiskevårdsområden som förvaltar vattenområdet.

## Fiskekort och regler

### Vad kräver fiskekort och vad är fritt?

Storsjön är en av Sveriges fem stora sjöar som omfattas av frifiskebestämmelserna i fiskelagen. Handredskapsfiske från strand eller is är tillåtet för alla. All typ av fiske från båt kräver däremot fiskekort.

Följande metoder kräver fiskekort:

- Trollingfiske
- Dragrodd och utterfiske
- Båtfiske med spö och drag
- Nätfiske
- Långrev och ryssjor

### Var köper du fiskekort?

Storsjön förvaltas av fyra fiskevårdsområden som tillsammans bildar Storsjöns FVO. Fiskekort köps via ifiske.se eller lokalt hos turistbyråer och sportfiskeaffärer som Landbys i Östersund.

De fyra FVO:erna är:

- **Storsjön-Östersund FVO**
- **Storsjön-Krokom FVO**
- **Storsjön-Åre FVO**
- **Storsjön-Berg FVO**

### Centrala regler

- Handredskap: spö eller pilk med max 10 krokar
- Trolling: max 10 beten per båt
- Nät: max 180 meter bottensatta, max 3 meters djup
- Utestående redskap ska vara märkta med ägarens namn och kontaktuppgifter
- Minimimått öring: **45 cm**. Fiskar under måttet ska alltid återutsättas.

**Fredningstider:**

- Allt nätfiske förbjudet 15 maj–15 juni
- Allt nätfiske förbjudet 1 december–31 december
- Nätfiske förbjudet 200 meter runt alla bäckutlopp 15 april–15 juni och 1 september–31 oktober

Allt fiske är förbjudet i Billstaån och inom 300 meters radie från hamnpirens yttersta spets utanför dess mynning.

Barn och ungdomar upp till 15 år fiskar gratis i sällskap med vuxen.

---

**Obs för den som planerar att äta fångsten:** Länsstyrelsen Jämtland publicerade uppdaterade kostråd 2022 för Storsjön på grund av förhöjda halter av PFAS, PCB, dioxiner och kvicksilver i flera arter. Läs mer längre ned i artikeln.

---

## Fiskarter
Storsjön hyser nära 20 fiskarter. Nedan de viktigaste för sportfiskaren.

### Storsjööringen

Öringen är Jämtlands landskapsfisk och det stora dragplåstret för många som besöker Storsjön. Det är en utpräglad vandringsstam som växer upp i sjön och sedan simmar upp i tillrinnande vattendrag för att leka.

Normalstorleken på vuxen sjöstationär öring är 1–3 kg. Fångster på 5–6 kg dokumenteras regelbundet och historiskt finns uppgifter om exemplar på upp mot 10–13 kg. Öringen vandrar huvudsakligen upp i Dammåns vattensystem, med toppvandring under sensommar och höst. Vandringssträckan från Storsjön upp till de övre lekplatserna är runt 55 kilometer.

Fiskräknaren i Dammåns Ågårdarna registrerade 325 öringar år 1960 och 1 482 öringar år 2019. Ökningen beror på biotopvård, fönsteruttag 40–55 cm och dammrivning i tillflöden. 2023 revs dammen i Fillstabäcken på Frösön, vilket fördubblat vandringssträckan för öring och harr uppströms.

Öringen lever på nors, siklöja, småsik och pungräka i sjön. Sommartid håller den sig under språngskiktet på 5–25 meters djup, med utflykter mot grundare vatten tidigt och sent på dagen.


[Läs mer om öring](/arter/oring/)

### Kanadaröding

Kanadarödingen planterades in i Storsjön 1962 och har etablerat sig som en av sjöns mest eftertraktade trollingarter. Vanliga fångster vid trolling väger 3–7 kg. Dokumenterade exemplar på 7 kg förekommer.

Arten är djupt stationär sommartid, ofta under 15–30 meters djup. Strax efter islossning på våren och under höstcirkulationen stiger den mot ytan och är mer lättfångad. Kanadarödingen leker på grova stenbottnar under hösten men reproducerar sig osäkert i Storsjön.


[Läs mer om röding](/arter/roding/)

### Harr

Harren finns i stora mängder och fiskas med fluga, spinn och pimpel beroende på säsong. Den är sommartid koncentrerad till strömmande mynningspartier, längs grunda steniga strandhyllor och vid öarnas nordsidor. Leken sker i april och maj i tillrinnande bäckar.

Kvitsleströmmarna, där Indalsälven rinner in i Storsjön väster om Hallen, anses vara ett av Sveriges bästa harrvatten. Här sker klassiska dagsländekläckningar runt midsommar som utlöser ythugg under flera veckor.

Vintertid söker sig harren till grundare bottnar under isen och fiskas med kikmete. Det är ett av Storsjöns mest tillgängliga vinterfisken, möjligt i direkt anslutning till Östersunds stadsbebyggelse.


[Läs mer om harr](/arter/harr/)

### Sik

Storsjön hyser flera sikformer, traditionellt beskrivna som fem varianter, från storvuxen bottensik till planktonätande småsik. Den storvuxna siken fiskas sommartid med fluga och spinn längs grundare hyllor och söker sig in i Kvitsleströmmarna runt 14 dagar efter midsommar. Vintertid fiskas sik med pimpel och kikmete, halvvägs ner i vattenpelaren snarare än vid bottnen.

### Gädda

Storsjön har goda bestånd av gädda, framför allt i de grundare vikarna. Bästa lokalerna är Brunfloviken, Sannsundet och vikarna runt Andersön och Norderön. Gäddan leker mars–maj på grunda vassbottnar och håller sig sedan stationär på 1–5 meters djup under sommaren.

### Abborre

Abborre finns i hela strandzonen och fiskas med spinn och pimpel. Under hösten samlar sig abborrarna vid djupare hyllkanter på 5–12 meter. Bra abborrlokaler vintertid är Frösö Strand och vikarna kring Andersön.


[Läs mer om abborre](/arter/abborre/)

### Lake

Laken är en djupvattensart som leker under is i januari och februari. Den fiskas med lakpilk eller naturagn på 10–30 meters djup. Vinternätter ger ibland stora exemplar.

### Övriga arter

Mört, löja och elritsa fungerar som bytesfiskar. Nors, introducerad 1977, lever djupt under språngskiktet och är en huvudföda för storöring och kanadaröding. Ål förekommer men ska alltid återutsättas då arten är akut hotad nationellt.

---## Sjöns karaktär

### Grundfakta

- **Yta:** 464 km²
- **Maxdjup:** 74 meter
- **Medeldjup:** 17,3 meter
- **Volym:** 8 kubikkilometer
- **Strandlinje:** ca 630 kilometer
- **Höjd över havet:** 292 meter
- **Län:** Jämtland

Storsjön är 75 kilometer lång i nord-sydlig riktning och omger öarna Frösön, Andersön, Norderön och ett tiotal mindre holmar.

### Bottentopografi

Bottnen är kuperad med branta kanter och djuprännor omväxlande med grunda hyllor och steniga partier. Det öppna mittpartiet, Storsjöflaket, når de största djupen och är det klassiska trollingvattnet. Runt sjön finns flera djupa vikar:

- **Brunfloviken och Sannsundet** (sydöst): grundare och varmare, bra gädd- och abborrvatten
- **Myrviken, Bergsviken och Hoverbergsviken** (söder): blandfiske
- **Sunden runt Frösön** (Östersundet, Vallsundet, Rödösundet): produktiva fiskestråk

Bäckmynningarna längs stränderna samlar öring och harr under vår och försommar.

### Vattentemperatur och skiktning

Storsjön bildar ett tydligt språngskikt under sommarhalvåret:

- **Yta (0–5 m):** 12–18 °C under sommaren, upp mot 20 °C i grunda vikar
- **Under språngskiktet (5–25 m):** 4–8 °C, öringens och kanadarödingens sommarbiotop
- **Djupvatten (25 m och nedåt):** 4–6 °C året om

På vårens och höstens cirkulationsdagar blandas hela vattenpelaren till en jämn temperatur. Öring och kanadaröding sprider sig då jämnare i sjön och är lättare att nå på grundare vatten.

### Isläggning och islossning

Storsjöflaket har världens troligen längsta sammanhängande mätserie för isläggning, dokumenterad sedan 1870. Genomsnitt för hela mätperioden:

- Isläggning: 17 december
- Islossning: 16 maj
- Isperiod: 151 dygn

Klimatförändringen syns tydligt i datan. Sedan 1950 har vintertemperaturen i Östersundsområdet ökat med ungefär 3 grader Celsius. Islossningen inträffar i snitt 0,85 dygn tidigare per år under de senaste 50 åren. Säsongen 2024/25 satte rekord med islossning den 9 april och en isperiod på 95 dagar.

Konsekvensen för fiskare: pimpelsäsongen krymper, öppen trollingsäsong startar tidigare på våren och ytvattnet är varmare under sommaren, vilket driver öring och kanadaröding djupare.

---

## Fiskemetoder

Metoderna nedan är anpassade till Storsjöns förhållanden. Detaljerade teknikanvisningar finns på respektive tekniksida.

### Trolling

Trolling dominerar fisket efter storöring och kanadaröding och lockar fiskare från hela landet. Bäst från islossning i maj till isläggning i december, med toppfiske direkt efter islossning och under höstcirkulationen i september–oktober.

Djup och hastighet anpassas efter årstid: vår och höst körs grunt på 1–10 m i lägre fart, sommartid djupare under språngskiktet på 10–25 m. Max 10 beten per båt.

Säkerhetsnotering: Storsjöflakets väder är opålitligt på grund av närheten till fjällen. Använd sjöduglig båt och ha alltid flytväst.

[Läs mer om trolling](/teknik/trolling)

### Dragrodd och utter

En klassisk metod i Jämtland. Utter eller skeddrag körs i lugnt tempo från roddbåt, särskilt effektivt i kallvattenperioderna maj till tidig juli och under sensommaren.

### Flugfiske

Kvitsleströmmarna är den primära flugfiskelokalen, med midsommarens dagsländekläckningar som höjdpunkt. Den lokalt kända arten Ephemera vulgata kallas "Rocken" och utlöser intensivt ytfiske under flera veckor. Torrfluga och nymf för harr. Stor tubfluga för uppvandrande storöring.

Längs Storsjöns stränder fiskas harr på torrfluga vid grunda hyllor, gärna tidigt på morgonen eller kvällen.

[Läs mer om flugfiske](/teknik/flugfiske)

### Spinnfiske

Spinn från strand eller roddbåt fungerar bra för gädda, abborre och harr under hela öppen säsong. Jiggar för abborre längs grundhyllorna, stora jerkbaits och vobblers för gädda i vassbältena.

[Läs mer om spinnfiske](/teknik/spinnfiske)

### Isfiske: pimpel och kikmete

Storsjön erbjuder ett varierat vinterfiske som kan kombineras på samma utflykt:

- **Harr:** kikmete eller pimpel med liten mormyschka och maskagn, 1–5 meters djup över grunda grussandbottnar
- **Sik:** pimpel halvvägs i vattenpelaren, sällan vid bottnen
- **Abborre:** pimpel med balanspilk eller mormyska, 3–8 meters djup
- **Lake:** pimpel med lakpilk och naturagn (fiskbit), 10–30 meters djup, bäst i januarimörkret

Var alltid uppmärksam på bäckmynningar, broar och bryggor där isen är tunnare. Kontrollera isläget dagligen under april.

[Läs mer om isfiske](/teknik/isfiske)

---

## Hotspots och lokaler

### Badhusparken och Östersund

Badhusparken i centrala Östersund är en av Sveriges mest lättillgängliga sportfiskelokaler. Du kan kasta efter harr och öring 100 meter från stadskärnan. Ingen båt krävs och handredskapsfiske är fritt.

### Frösö Strand och Öneberget

Klassiska lokaler för isfiske, med busslinje från centrum. Pimpel efter abborre, sik, harr och öring.

### Kvitsleströmmarna

Vid Indalsälvens inlopp väster om Hallen. Ett av Sveriges bästa harrvatten med strömsystem som sträcker sig ungefär en mil, från lugna pooler till kraftigare forspartier. Dagsländekläkningarna runt midsommar är välkända bland flugfiskare. Siken vandrar in ungefär 14 dagar efter midsommar.

### Andersön och Norderön

Andersön är naturreservat med fri tillgång till stränder och vatten. Öring, harr, abborre och gädda. Bilväg via Vallsundsbron. Norderön nås med Trafikverkets kostnadsfria bilfärja. Båda öarna ger goda fiskemöjligheter utan båt.

### Brunfloviken och Sannsundet

Grunda, varmare vikar i sydöst. Bäst för gädda och abborre, men sikfiske förekommer. Brunflo hamn har båtramp.

### Myrviken och Bergsviken

Blandfiske med öring, harr, gädda, abborre och sik i södra Storsjön. Hoverbergsviken erbjuder ett kuperat landskap med utsikt mot Hoverberget naturreservat.

### Dammåns mynning

En av de viktigaste öringlokalerna. Storöringen passerar här under vandringen till och från lekplatserna uppströms. Bäst under försommar och sensommar.

---

## Säsongsöversikt

| Månad | Bästa art | Bästa metod |
|-------|-----------|-------------|
| Januari–mars | Harr, sik, abborre, lake | Pimpel, kikmete |
| April | Pimpel om isen bär | Kontrollera isläget dagligen |
| Maj (efter islossning) | Öring, kanadaröding | Trolling ytligt, utter |
| Juni | Harr, sik, öring | Flugfiske, trolling |
| Juli–aug | Öring, kanadaröding, gädda | Trolling djupt, spinn |
| September–oktober | Öring, kanadaröding | Trolling, dragrodd |
| November | Gädda, abborre | Spinn, trolling |
| December (isläggning) | Harr, abborre | Pimpel i vikar |

Nätfiskeförbud 15 maj–15 juni och 1 december–31 december.

---

## Kostråd och miljögifter

Länsstyrelsen Jämtland uppdaterade kostråden för Storsjön 2022 efter provtagningar som visade förhöjda halter av PFAS, PCB, dioxiner och kvicksilver i flera arter. Det är fullt lagligt och tillåtet att fiska, men konsumtionen bör begränsas.

**Öring och kanadaröding i hela Storsjön** samt i Indalsälven mellan Ristafallet i väster och Hissmofors i öster:

- Barn, ungdomar under 18 år, gravida, ammande och de som planerar graviditet: max 2–3 gånger per år
- Övriga: max en gång per vecka

**Abborre, gädda, sik och harr** i zonen 300 meter från Frösöns stränder och i Lillsjön:

- Alla grupper: max 2–3 gånger per år

För alla andra delar av sjön gäller inga specifika begränsningar för de sistnämnda arterna.

Länsstyrelsen Jämtland publicerar aktuell information på sin webbplats. Storsjön lämpar sig väl som ett catch-and-release-vatten för storöring och kanadaröding, vilket också gynnar bestånden på sikt.

---

## Infrastruktur och praktisk information

### Fiskeguider

**Makro Fishing** (makrofishing.se) erbjuder guidad trolling på Storsjön med erfaren guide, båt, utrustning och flytväst. Säsong juni till oktober, max 4 personer per tur. Kontakta dem direkt för aktuella priser och tider.

### Båtramper

Sjösättningsmöjligheter finns på flera platser runt sjön, bland annat vid Östersunds hamn, Brunflo hamn, Sandviken och Frösö Strand. Uppdaterad lista finns på batramper.se.

Trafikverkets bilfärjor mellan Norderön och Isön respektive Norderön och Håkansta är kostnadsfria.

### Boende

**Östersunds Stugby och Camping** ligger tre kilometer söder om centrum, direkt vid sjön, och är öppen året om. Strandfiske möjligt från campingområdet.

**Sandvikens Camping och Stugby** (4,5 km från centrum) har sjötillgång och sjösättningsmöjlighet.

### Utrustning

**Landbys Fiskebutik** i Östersund säljer utrustning och lokala flugor och kan ge tips om var det biter just nu.

### Kommunikationer

Östersund nås med tåg (Norra stambanan och Mittbanan), flyg till Åre Östersund Airport och bil via E14. Stadsbussarna i Östersund kör till flera fiskelokaler, inklusive Frösö Strand och Öneberget.

---

## Historik och bakgrund

### Fiskvård och miljöåtgärder

Det naturliga öringbeståndet i Dammåns vattensystem var kraftigt reducerat under stora delar av 1900-talet efter dammbyggen och vattenkraftsutbyggnad. Kombinationen av fönsteruttag (40–55 cm), biotoprestaurering och dammrivningar har gett tydliga resultat: fiskräknaren i Ågårdarna registrerade 1 482 öringar 2019, mot 325 stycken år 1960.

År 2023 revs dammen i Fillstabäcken på Frösön, vilket gav öring och harr tillgång till dubbelt så lång vandringssträcka uppströms.

### Introducerade arter

Kanadarödingen och norsen är introducerade arter (1962 respektive 1977) som permanent förändrat ekosystemet. Pungräkan, introducerad för att öka fiskfödan, är nu en central del av öringens och kanadarödingens diet.

### Vetenskapligt underlag

SLU Aqua genomförde en bred undersökning av fisksamhället i Storsjön 2011 med ekolodning, trålning och nätprovfiske. Rapporten "Fisksamhället i Storsjön, Jämtland" (Axenrot et al., 2013) är det senaste publicerade vetenskapliga underlaget för sjöns fiskbestånd.

---

## Storsjöodjuret

Storsjön har sin egen kryptid. Storsjöodjuret omnämndes första gången skriftligt 1635 och har sedan dess dykt upp i hundratals vittnesmål. Beskrivningarna varierar men nämner vanligen en lång ormaktig kropp, pucklar och ett katt- eller hundlikt huvud.

Länsstyrelsen Jämtland fridlyste odjuret formellt 1986 med förbud mot att "döda, fånga eller skada levande djur av arten Storsjöodjuret". Fridlysningen upphävdes 2006. Storsjöodjurscentret i Svenstavik samlar historiken kring fenomenet. Vetenskapliga bevis saknas.

---

*Strömkast finansieras via affiliate-länkar. Köper du fiskekort eller utrustning via länkarna på den här sidan får vi en liten provision, utan kostnad för dig. Det påverkar inte vad vi skriver eller hur vi värderar fiskevatten.*```

## src/content/destinations/tornealven.mdx
```
---
title: "Torneälven"
slug: "tornealven"
description: "Fiske i Torneälven: lax, sik, harr och havsöring i Skandinaviens längsta oreglerade gränsälv. Regler, fiskekort, hotspots och praktisk info."
heroImage: "/images/destinations/tornealven.jpg"
lat: 67.15
lng: 23.65
län: "Norrbotten"
primarySpecies: ["lax", "havsöring", "harr", "sik", "gädda", "abborre"]
waterType: "river"
iFiskeUrl: "https://www.ifiske.se/fiske-tornealv-tarendoalv-piilojarvi-m-fl-vatten.htm"
recommendedGear: []
publishedAt: "2025-05-25"
updatedAt: "2025-05-25"
---

Torneälven är Östersjöns mest produktiva vildlaxälv och ett av de sista stora oreglerade älvsystemen i Skandinavien. De 520 kilometerna från fjällmassiven vid Kilpisjärvi ner till Bottenviken vid Haparanda rinner utan ett enda kraftverk, och hela älven är gräns mellan Sverige och Finland. Hit åker fiskare från hela landet för chansen på vildlax, men det är regler och logistik som avgör om resan lyckas.

Torneälven förvaltas gemensamt av Sverige och Finland och regleras av en fiskestadga som uppdateras inför varje säsong. Reglerna är strikta och märkbart striktare sedan 2022 då laxuppvandringen halverades jämfört med rekordåren. Kontrollera alltid aktuella regler via HaV eller Länsstyrelsen Norrbotten innan du åker.

## Fiskekort och regler

### Vad är fritt och vad kräver tillstånd?

Torneälven är enskilt vatten längs hela sträckan. Fiske kräver fiskekort oavsett ålder, metod och nationalitet. Det finns ingen frifiskerätt som i de fem stora sjöarna. Barn under 15 år fiskar däremot gratis i sällskap med målsman med giltigt kort hos de flesta FVO längs älven.

Gränsälvens gemensamma laxtillstånd (Yhteislupa) gäller hela sträckan från mynningen vid Haparanda upp till Kilpisjärvi vid norska gränsen, med undantag för Matkakoski som har ett separat kortssystem. Tillståndet köps via [tornealvslaxkort.se](https://tornealvslaxkort.se) eller finska [eraluvat.fi](https://www.eraluvat.fi). Kortinnehavaren får fiska på båda sidor av gränsälven.

Finska staten kräver dessutom en fiskevårdsavgift (kalastonhoitomaksu) av alla 18–69-åriga fiskare på finsk sida: 47 euro/år, 15 euro/vecka eller 6 euro/dygn. Betalas via eraluvat.fi.

Biflöden som Lainioälven, Tärendöälven och övriga sidoälvar har egna tillståndssystem. Statens vatten i Lainioälven ovan odlingsgränsen kräver ett separat Kirunakort med gälplomb.

### Var köper du fiskekort?

- **Yhteislupa (gränsälven):** [tornealvslaxkort.se](https://tornealvslaxkort.se) eller [eraluvat.fi](https://www.eraluvat.fi)
- **Matkakoski Fiskeförening:** [iFiske.se](https://www.ifiske.se/fiske-matkakoski-fiske.htm) (kvoterat antal kort per dygn, säljs ut snabbt)
- **Junosuando FVO:** [iFiske.se](https://www.ifiske.se/fiske-tornealv-tarendoalv-piilojarvi-m-fl-vatten.htm)
- **Lainioälven (statens vatten):** Kiruna turistbyrå (0980-188 80), Jaktia/Outdoorshoppen Kiruna (0980-202 00) eller Blinds kiosk i Övre Soppero

### Priser 2025

| Korttyp | Pris vuxen | Pris ungdom (15–17 år) |
|---|---|---|
| Yhteislupa – dygn | 20 euro (~230 kr) | 10 euro |
| Yhteislupa – 7 dygn | 90 euro (~1 030 kr) | 45 euro |
| Yhteislupa – säsong | 200 euro (~2 290 kr) | 100 euro |
| Yhteislupa – säsong ett delområde | 90 euro | 45 euro |
| Matkakoski – dygn | 450 kr | 325 kr |
| Junosuando FVO – dygn | 150 kr | Ingår med målsman |
| Junosuando FVO – år | 1 000 kr | – |
| Lainioälven gälplomb | 100 kr (max 1/fiskare, 120 totalt) | – |

Priser i euro bör kontrolleras mot aktuell växelkurs vid köptillfället.

### Minimimått och fångstbegränsningar

| Art | Minimimått | Dagkvot |
|---|---|---|
| Lax | 50 cm | 1 lax/dygn, max 2 avlivade laxar/säsong |
| Havsöring (gränsälven) | Fredad hela året | Alla öringar återutsätts |
| Bäcköring (biflöden) | Fönsteruttag 30–45 cm | 1/dygn |
| Harr | 35 cm | 5 harrar/abborrar/öringar totalt/dag (statens vatten) |
| Sik | Lokala regler gäller | – |

Säsongskvoten på **2 avlivade laxar per fiskare** gäller hela säsongen oavsett var längs gränsälven de fångats. Avlivningsförbud för honlax gäller i Torne-, Lainio-, Kalix- och Kaitumälven.

### Fredningstider och fredningsområden

- **Lax:** Fredad 1 september och framåt (lektid). Fiske i gränsälven öppnar 9 juni kl. 19.00 (svensk tid).
- **Havsöring:** Fredad hela året i gränsälven. Återutsättning är lag, inte rekommendation.
- **Harr:** Fredad 15 april–31 maj i Norrbottens älvar.
- **Strömmande vatten generellt:** Fiske förbjudet 1 september–31 december (öringens lektid).
- **Lainioälven:** Allt fiske förbjudet 15 september–15 december.
- **Muonioälven:** Allt fiske förbjudet 15 september–15 december.
- **Fiskeförbud per vecka (gränsälven):** Söndag kl. 18.00 – måndag kl. 18.00 (svensk tid).

Det perioden **16–25 augusti** gäller särskilda villkor: fiske tillåtet enbart med spö och hullinglösa krokar; all lax över 65 cm måste återutsättas.

### Catch and release-rutin

All havsöring i gränsälven återutsätts alltid. Rekommendationen för lax är att använda hullinglösa krokar från start – det underlättar återutsättning och minskar skadetrycket. Fisk krokas utanför munnen ska genast släppas. Undvik att lyfta fisken ur vattnet och minimera lufttiden. Våta händer, ingen handsklining, håll fisken horisontellt tills den simmar av självmant.

> Aktuella regler finns alltid på [HaV:s webbplats](https://www.havochvatten.se) och via [Länsstyrelsen Norrbottens sidor](https://www.lansstyrelsen.se/norrbotten/djur/fiske). Gränsälvens fiskestadga med alla detaljer finns hos [Finsk-Svenska Gränsälvskommissionen](https://www.fsgk.se/fiske/fiskestadga/).

> **OBS:** Livsmedelsverket rekommenderar att gravida, ammande och barn äter vildfångad lax och öring från Torneälven högst 2–3 gånger per år på grund av dioxin- och PCB-halter. Övriga vuxna: högst en gång per vecka. Se avsnittet Kostråd och miljögifter nedan.

## Fiskarter

Torneälven och dess biflöden rymmer ett tiotal sportfiskearter. Laxen är det primära målet, men systemet erbjuder mycket mer.

### Lax

Atlantlax vandrar hela vägen från Atlanten via Östersjön och upp i älven för att leka. Vikter på 8–15 kg är vanliga. Flerårslaxar på 15–22 kg fångas varje säsong. Grilse (en-havs-årig lax) på 1–3 kg har blivit vanligare efter 2022.

[Läs mer om lax](/arter/lax/)

### Havsöring

Havsöring är fredad i gränsälven hela året. Beståndet bedöms som utrotningshotat av ICES. Bäcköring finns i biflödena och fångas på fönsteruttag 30–45 cm.

[Läs mer om havsöring](/arter/havsoring/)

### Harr

Harr är en klassisk art i Torneälvens forsar men bestånden har minskat kraftigt. Pajala-trakten och övre älvdelarna har de bäst bevarade bestånd. Torrflugefiske under midsommar och juli är det klassiska sättet att fiska harr.

[Läs mer om harr](/arter/harr/)

### Vandringssik

Vandringssik är älvens kulturellt viktigaste fisk -- ikonen bakom Kukkolaforsens sikhåvningstradition och Sikfesten i juli. Beståndet är i kris med sjunkande vikter och minskande fångster. Fortfarande möjlig att fånga, framförallt i forsnackarna under uppvandringen i juli.

### Gädda och abborre

Gädda och abborre finns i selen och lugnvattnen längs hela älven. Stora gäddor på 8–12 kg förekommer. Id med vikter över 2 kg fångas vid åmynningar och lugnvatten, framförallt i nedre älvdelarna vid Haparanda.

[Läs mer om gädda](/arter/gadda/)

[Läs mer om abborre](/arter/abborre/)

### Lake

Lake pimplas på vintern i lugnvatten och selen.

## Fiskemetoder

Detaljerade teknikanvisningar finns på respektive tekniksida. Nedan är en översikt anpassad till Torneälvens förhållanden.

### Spinnfiske

Spinnfiske med spö är den dominerande metoden för lax. Tunga spinnare och wobblers 20–40 g kastas från land vid forsar och djupkanter, eller med forsbåt i lugnvattenpartier (harling). Kastvikt kombinerat med fluga (spinnfluga/sänkesfiske) är tillåtet enbart 9–16 juni i gränsälven och förbjudet i Kukkolaforsen och Matkakoski-området från 17 juni.

[Läs mer om spinnfiske](/teknik/spinnfiske/)

### Flugfiske

Flugfiske efter lax är koncentrerat till de klassiska forsarna: Lainioälvens nedre delar (anses vara systemets bästa laxflugvatten), Tornefors, Kengisforsen och Matkakoski. Harrfiske med torrfluga är som bäst i forsnackar och bakvatten under juli, framförallt i sträckorna kring Pajala och uppåt.

[Läs mer om flugfiske](/teknik/flugfiske/)

### Mete

Bottenmete med mask och naturagn ger abborre, gädda, id och sik i lugnvattenpartier och sel. Fungerar längs hela älven. Stadsnära metning från bryggor i Pajala och Haparanda är ett alternativ för familjer.

[Läs mer om mete](/teknik/mete/)

### Jiggfiske

Jiggfiske med gummibaggar och metallriggar ger abborre och gädda i selen, djupkanter och lugnare partier nedanför de stora forsarna. Inte primärmetoden för lax i Torneälven.

[Läs mer om jiggfiske](/teknik/jiggfiske/)

### Håvfiske

Håvfiske med långskaftad håv (skaft 6 m) från pator i forsen är en unik traditionell metod som praktiseras vid Kukkolaforsen och Matkakoski. Metoden fångar sik och lax och finns idag bara i Tornedalen och i Amazonas. Prova-på-håvning vid Kukkolaforsen kostar 695 kr/timme (max 4 personer).

### Isfiske

Vinterpimpling efter lake och abborre i selen och lugnvatten. Gädda och stor abborre pimplas i de bredare sel-partierna vid bland annat Junosuando och Pajala. Ingen islossningsrisk under vintern.

[Läs mer om isfiske](/teknik/isfiske/)

## Hotspots och lokaler

### Övre Torneälven och Kilpisjärvi-området

De allra översta delarna mot Kilpisjärvi och Norsk gräns är fjällvatten med röding, bäcköring och harr. Fiske enligt Länsstyrelsen Norrbottens regler för fjällvatten (rörelsefrihet men begränsat uttag). Sveaskogs marker vid Pirttilahti (20 km väster om Vittangi) ger tillgång till vildmarksvatten med bäcköring och harr.

### Vittangi och Junosuando

Junosuando FVO täcker ett stort område: Torneälven, Tärendöälven, Piilojärvi och flera sidovatten. Dagskortet på 150 kr är det mest prisvärda alternativet för allroundfiske – abborre, id, gädda, harr, sik och lax på delade sträckor. Bifurkationen vid Junosuando, där Tärendöälven avtappar hälften av vattenmängden mot Kalixälven, är en av världens mest ovanliga flodbifurkationer. Fritt parkering och relativt oexploaterade sträckor. Kortet köps via iFiske.se.

### Pajala och Tornefors

Pajala är naturlig basort mitt i systemet med serviceutbud och direktflyg från Stockholm (via Kiruna). Tornefors vid sammanflödet med Lainioälven är en klassisk laxlokal och sista platsen längs Torneälven där lax fångas innan en stor andel väljer Lainio som vandringssträcka. Rastplats 5 km nordväst om sammanflödet, landfiske från klipporna. PEJA Fiskevatten (Anttis–Erkheikki–Peräjävaara) erbjuder 30 km privat lax- och harrvatten, inklusive stuga och kajaksträckor.

Parkering och brygga finns centralt i Pajala. Butiker, kortförsäljning och guider finns i staden.

### Kengisforsen

Privat laxvatten via Kengis Bruk, ett av de äldsta järnbruken i Norrland (grundat 1673). Klassiskt flugfiskevatten med kastkurser, stugor och en historisk anläggning. Kontakta Kengis Bruk direkt för kortbokning och stugor. Inga alternativa sätt att fiska sträckan.

### Övertorneå och Aavasaksa

Övertorneå-Aavasaksa-bron är gränspunkten under vilken motorbåt är tillåten i lugnvattnet nedströms. Bryggor och parkering finns på båda sidor. Populär lokal för spinnfiske och forsbåt. Silen fångas på sommaren i forsnackarna.

### Matkakoski (3,7 mil norr om Haparanda)

En av älvens absoluta klassiker. Forsen är 800 m lång med ett fall på 10,3 m. Sportfisket är kvoterat och säljs via iFiske.se, med begränsat antal kort per dygn. Korten för säsongen 2025 släpptes i maj och var snabbt slut. Boka tidigt. Matkakoski Fiskeförening har egen webbplats på matkakoskifiske.se med information om platser, regler och boende i anslutning.

Landfiske från klipporna är möjligt utan bostadsbåt. Parkering vid fiskestugan. Inget kollektivtrafiksalternativ.

### Kukkolaforsen (1,5 mil norr om Haparanda)

Norra Europas längsta fritt strömmande fors (3,5 km, fallhöjd 13,8 m). Sikhåvning från pator i forsen är det kulturella centrumet för hela Tornedalens fiskearv. Prova-på-håvning, sikhåvning och laxfiske erbjuds av Kukkolaforsen Turist & Konferens. Sikfesten hålls helgen efter Jakobsdagen (sista veckan i juli).

Landfiske med spö i forsen ingår i Yhteislupa-kortet. Stugor, hotellrum, bastu, restaurang och fiskemuseum på plats. Campingplats direkt vid älven.

## Säsongsöversikt

| Månad | Bästa art | Bästa metod |
|---|---|---|
| Januari–mars | Lake, abborre | Pimpel, isfiske |
| April | Abborre, gädda | Pimpel (islossning), spinnfiske mot is |
| Maj | Harr (ej lax – stängt) | Flugfiske, mete |
| Juni (fr.o.m. 9/6 kl. 19) | Lax, sik | Spinnfiske, flugfiske, håvning |
| Juli | Lax, sik, harr | Spinnfiske, flugfiske, håvning, torrfluga |
| Augusti (1–15) | Lax | Spinnfiske, flugfiske |
| Augusti (16–25) | Lax (begränsat, hullinglös) | Spinnfiske, flugfiske |
| September | Gädda, abborre, id | Spinnfiske, jiggfiske, mete |
| Oktober–november | Gädda, abborre | Spinnfiske, mete |
| December | Lake | Pimpel (om is) |

Harr fredad 15 april–31 maj. Havsöring fredad hela året i gränsälven. Fiske i strömmande vatten förbjudet 1 september–31 december.

## Kostråd och miljögifter

Vildfångad lax och öring från Torneälven kan innehålla dioxin och PCB över EU:s gränsvärden. Halterna beror på att fisken är havsvandrande och ackumulerar miljögifter via Östersjöns matvävnad. Livsmedelsverket uppger att mer än hälften av laxproverna från Bottenhavet och Bottenviken överstiger EU:s gränsvärde på 6,5 pg TEQ/g färskvikt för dioxiner och dioxinlika PCB.

Sverige har permanent undantag från EU-gränsvärdet för inhemsk försäljning, men Livsmedelsverket rekommenderar:

| Målgrupp | Råd |
|---|---|
| Gravida, ammande, barn och ungdomar samt kvinnor som planerar graviditet | Max 2–3 gånger per år |
| Övriga vuxna | Max 1 gång per vecka |

Fettavskärning minskar exponeringen, eftersom dioxin och PCB ansamlas i fettvävnaden. Fettet sitter framförallt längs rygglinjen och i bukhålan.

Livsmedelsverket har inga specifika råd om PFAS i Torneälven. Kvicksilverhalten i stora rovfiskar (gädda, stor abborre, lake) kan vara förhöjd, i linje med Livsmedelsverkets generella råd för insjöfisk: gravida och ammande max 2–3 gånger per år.

Aktuella kostråd finns på [livsmedelsverket.se](https://www.livsmedelsverket.se/matvanor-halsa--miljo/kostrad/miljoforgiftad-fisk/).

## Infrastruktur och praktisk information

### Fiskeguider och charter

Etablerade guideföretag längs älven inkluderar Lovikkafishing, OUTCAT (Outdoor Education Sweden), NordGuide, PAAP Adventure, Rajamaa, B-O Jarhois Fiskecamp och FishYourDream (Kangos/Lainioälven). Forsbåt med lokal guide är ofta det mest effektiva sättet att nå de bästa sträckorna i biälvarna och säkerhet i forspartier. Kengis Bruk erbjuder kastkurser.

### Båtramper

| Plats | Typ | Notering |
|---|---|---|
| Pajala | Kommunal brygga och ramp | Centralt läge |
| Övertorneå | Ramp vid bron | Motor tillåten nedströms bron |
| Karungi | Enkel ramp | Tillgång till lugnvatten nedre älven |
| Haparanda | Flertalet rampar | Nära mynningen och havsområdet |
| Matkakoski | Parkering vid fiskestugan | Landfiske, ingen ramp |

Kontakta respektive FVO eller kommunens tekniska förvaltning för uppdaterad information om specifika rampar.

### Landfiske

Landfiske fungerar längs hela älven från land och klippor utan båt. Forsar som Kukkolaforsen, Matkakoski, Kengisforsen och Tornefors är tillgängliga till fots. Selen och lugnvattenpartierna kring Junosuando och Pajala fiskas lätt från land med kastspö.

### Boende

- **Kukkolaforsen Turist & Konferens** – stugor, hotellrum, bastu, restaurang och fiskemuseum direkt vid forsen
- **Pajala Camping** – campingplats centralt i Pajala vid älven
- **Lapland Hotels Pajala** – hotell i Pajala centrum
- **Matkakoski Camping** – bastu och enkelt boende vid fiskesträckan
- **Kengis Bruk** – historisk anläggning med stugor
- **Jarhois Fiskecamp** – stugby nära Övertorneå
- **Heiskari fiskestuga** – enklare alternativ utanför Pajala
- **Lapland Guesthouse, Kangos** – bas för fiske i Lainioälven

### Kommunikationer

Primär väg är E10 från Luleå norrut via Töre, sedan riksväg 99 som följer älven från Haparanda hela vägen upp till Karesuando. Riksväg 395 förbinder Pajala med E10 och Kiruna. Restid med bil: Luleå–Pajala ca 3,5 timmar, Kiruna–Pajala ca 2 timmar.

Närmaste flygplatser: Luleå Airport (LLA) ca 22 mil från Pajala, Kiruna Airport (KRN) ca 16 mil. Finska Kemi-Torneå flygplats ligger praktiskt nära älvmynningen. Buss finns med Länstrafiken Norrbotten men förbindelserna till fiskelokaler kräver bil eller taxi vid ankomst.

### Sjösäkerhet

Forssträckor som Kukkolaforsen och Matkakoski har kraftiga strömmar. Bottenbåtar och kanot kräver erfarenhet och livräddningsutrustning. Simma aldrig nära forsar med stark ström. Motorbåt är förbjudet i forsar och inom 200 meter från fors i gränsälven. Islossning på våren (april) innebär isrörelser och förhöjda vattenflöden – kontrollera SMHI:s vattenståndsdata.

## Historik och bakgrund

Torneälven har fler namn än de flesta svenska älvar: på meänkieli heter den Tornionväylä, på finska Tornionjoki och på samiska Duortnoseatnu. Bifurkationen vid Junosuando, där Tärendöälven leder ungefär hälften av vattenmängden till Kalixälven, är en av världens näst största flodbifurkationer.

**Gränsälv sedan 1809.** I Freden i Fredrikshamn överlät Sverige Finland till Ryssland och Torne, Muonio och Könkämä älvar blev riksgräns. Gränsen följer djupfåran och revideras vart 25:e år. Gränsdragningen klöv samhällen mitt itu. Haparanda grundades 1821 som en ny svensk stad mitt emot det finska Torneå. Tornedalingarna och deras språk meänkieli förbjöds i skolan under försvenskningspolitiken på 1800-talets slut och 1900-talets början. Meänkieli erkändes som nationellt minoritetsspråk i Sverige 2000.

**Fisket från medeltiden.** Fiskebodar och pator vid Kukkolaforsen dokumenteras redan från 1200-talet. Sikfesten firar sikens uppvandring med anor från medeltiden. Det organiserade sportfisket tog form på 1900-talet, men fiskerätten är sedan länge enskild längs hela sträckan.

**Laxens historia.** Laxbeståndet kollapsade i Östersjön under 1900-talets mitt på grund av överfiske och försurning. Gemensam förvaltning, minskade yrkesfiskeunkvoter och den nu lagstadgade fiskestadgan (lag 2010) har gett beståndet utrymme att återhämta sig. Toppåret 2014 räknades nära 95 000 uppvandrande laxar vid ekolod i Kattilakoski. Sedan 2022 har uppvandringen åter minskat kraftigt till under 25 000 individer 2024, vilket är bakgrunden till de nuvarande säsongskvotarna.

**Nationalälv sedan 1993.** Torneälven utnämndes till nationalälv och är skyddad från vattenkraftutbyggnad. Det finns inte ett enda kraftverk längs de 520 kilometerna. Kombinationen av fria vandringsvägar, naturliga lek- och uppväxtmiljöer och gemensam tvånationell förvaltning gör älven till ett av Europas viktigaste laxvatten.

**Silens kris.** Vandringssiken, ikonen i Tornedalen, har inte klarat sig lika bra. Medelvikten har sjunkit från ~500 gram på 1980-talet till 310–380 gram på 2000-talet enligt SLU Aqua. Utsättningar av siklöja och sik upphörde efter millennieskiftet. Vandringen sker allt senare. Orsakerna är inte helt klarlagda men klimatförändringar och förändrad produktivitet i Östersjön pekas ut.

## Snabbfakta

| | |
|---|---|
| Fritt handredskapsfiske | Nej – fiskekort krävs hela sträckan |
| Fiskekort krävs för | All fiske, alla metoder |
| Var köps kortet | tornealvslaxkort.se / eraluvat.fi / iFiske.se |
| Säsongskvot lax | Max 2 avlivade laxar per fiskare och säsong |
| Säsongsstart lax | 9 juni kl. 19.00 (svensk tid) |
| Minimimått lax | 50 cm |
| Havsöring | Fredad hela året i gränsälven (återutsättningskrav) |
| Minimimått harr | 35 cm |
| Fredning harr | 15 april–31 maj |
| Fredning strömmande vatten | 1 september–31 december |
| Närmaste större tätort | Pajala (mitt i älvsystemet), Haparanda (mynningen) |
| Närmaste flygplats | Kiruna Airport (ca 16 mil) |
| Riksväg längs älven | Riksväg 99 (Haparanda–Karesuando) |

*Strömkast finansieras via affiliate-länkar. Köper du fiskekort eller utrustning via länkarna på den här sidan får vi en liten provision, utan kostnad för dig. Det påverkar inte vad vi skriver eller hur vi värderar fiskevatten.*
```

## src/content/destinations/vanern.mdx
```
---
title: "Vänern"
slug: "vanern"
description: "Guide till fiske i Vänern: fiskekort, fiskarter, tekniker och hotspots. Från laxtrolling i världsklass till gäddspinn i skärgård och mete mitt i staden."
heroImage: "/images/destinations/vanern.jpg"
lat: 58.9
lng: 13.1
län: "Västra Götaland, Värmland"
primarySpecies: ["lax", "öring", "gädda", "gös", "abborre", "sik"]
waterType: "lake"
excerpt: "Europas tredje största sjö med laxtrolling i världsklass."
iFiskeUrl: "https://www.ifiske.se/fiske-vanern.htm"
recommendedGear: []
publishedAt: "2025-01-01"
updatedAt: "2025-01-01"
---

Vänern är Sveriges största sjö och Europas tredje största efter Ladoga och Onega. Med en yta på cirka 5 650 kvadratkilometer, ett medeldjup på 27 meter och ett maxdjup på 106 meter är sjön ett eget ekosystem med 35 till 38 fiskarter. Hit kommer fiskare från hela Sverige för laxtrolling, gäddspinn i skärgård och mete mitt i städerna längs stranden.

Vänern är en av Sveriges fem stora sjöar där handredskapsfiske är tillåtet för alla utan fiskekort. Du kan kasta från strand eller is utan att betala något. Reglerna är viktiga att känna till innan du ger dig ut, framför allt när det gäller den fridlysta vilda laxen och öringen.

## Fiskekort och regler

### Vad är fritt och vad kräver tillstånd?

Vänern omfattas av frifiskebestämmelserna i fiskelagen. Handredskapsfiske från strand eller is är tillåtet för alla, oavsett nationalitet, utan fiskekort. Med handredskap menas spö eller pilk med max tio krokar. Fiske från båt, trolling och dragrodd ingår inte i frifiskerätten och kräver i praktiken fiskerättsägarens tillstånd eller lokalt fiskekort.

Fiske i tillrinnande vattendrag som Klarälven, Gullspångsälven och Tidan kräver alltid fiskekort av fiskerättsägaren. Dessa köps via ifiske.se eller lokalt, till exempel hos ICA Supermarket i Gullspång för Gullspångsälven.

### Minimimått och fångstbegränsning

- Lax: **60 cm**
- Öring: **60 cm**
- Gös: **45 cm**
- Signalkräfta: **10 cm**

Fiskar under måttet ska omedelbart återutsättas och får inte föras i land.

Sammanlagt högst tre fiskar av lax och öring per fiskare och dygn vid handredskapsfiske.

### Vild lax och öring är fredade

Det viktigaste att känna till: **all vild lax och öring är fredad och ska alltid släppas tillbaka.** Vild fisk identifieras av att fettfenan är intakt. Odlad fisk som satts ut i kompensationssyfte har fettfenan avklippt och får behållas inom fångstbegränsningens ram.

### Fredningstider och fredningsområden

Länsstyrelsen i Värmland är samordningslän för Vänern och publicerar broschyren "Fiskeregler i Vänern" (senast uppdaterad mars 2024). Följande områden har särskilda regler:

- **Klarälvens västra och östra fredningsområde** runt mynningen vid Karlstad
- **Gullspångsälvens fredningsområde:** trolling och nätfiske förbjudet året runt sedan 1 oktober 2021
- **Tidans fredningsområde** runt mynningen vid Mariestad
- **Gösfredning:** gäller 25 april–25 maj i fredningsområden. Vissa lokala FVO har fredning till första lördagen i juli.
- **Asp:** riktat fiske förbjudet i alla tillrinnande vattendrag 1 april–31 maj

Ål är totalfredad i hela Sverige och får varken fiskas eller landas.

---

**Obs för den som planerar att äta fångsten:** Livsmedelsverket har kostråd för fisk från Vänern på grund av förhöjda halter av dioxiner, PCB och kvicksilver. Läs mer längre ned i artikeln.

---

## Fiskarter
Vänern är Sveriges artrikaste insjö med 35 till 38 fiskarter. Sjöns ekologiska bas är **nors** och **siklöja**, som tillsammans utgör över hälften av fiskbiomassan och är huvudfödan för rovfiskarna.

### Vänerlax

Vänerlaxen lever hela sin livscykel i sötvatten och uppstod när sjön avsnördes från havet för ungefär 8 000 till 10 000 år sedan. Av de ursprungligen fem laxstammarna återstår i dag två.

**Gullspångslaxen** leker i Gullspångsälven och är världens största insjölevande lax. Individer över 20 kilo är dokumenterade. Stammen är akut hotad och klassad som riksintresse samt skyddad av EU:s art- och habitatdirektiv. Från och med 1 oktober 2021 gäller ett utökat fredningsområde utanför Gullspångsälvens mynning med totalförbud mot trolling och nätfiske året runt.

**Klarälvslaxen** leker i Klarälven och visar en mer positiv beståndstrend. Fiskräknaren vid Forshaga registrerade 2 018 vilda laxar 2022. Beståndet hålls vid liv delvis genom ett system där lekfisk fångas vid Forshaga kraftverk och transporteras med lastbil förbi åtta kraftverk till lekplatserna uppströms.

Allt fiske på Vänern baseras på odlade, fenklippta fiskar. Den vilda fisken, med intakt fettfena, är fredad och ska alltid släppas.


[Läs mer om lax](/arter/lax/)

### Öring

Sjövandrande öring finns i tre stammar med lekplatser i Klarälven, Gullspångsälven och Tidan. Storleken kan överstiga tio kilo. Öringen är mer strandnära än laxen och äter framför allt siklöja och nors.


[Läs mer om öring](/arter/oring/)

### Gädda

Gäddan finns i hela sjön men trivs bäst i grunda vassbevuxna vikar. Trofégäddor över tio kilo är vanliga och Vänern räknas internationellt som ett av Europas bästa gäddvatten. Leken sker i april och maj.


[Läs mer om gädda](/arter/gadda/)

### Gös

En av sjöns viktigaste sportfiskearter. Gösen leker i slutet av april till juni på grunda och ofta vegetationsrika bottnar. Minimimått 45 cm. Standardstorlek vid fångst är 2 till 5 kilo men exemplar över tio kilo förekommer.


[Läs mer om gös](/arter/gos/)

### Abborre

Finns i hela sjön hela året. Stor abborre över ett kilo fångas regelbundet. Leken sker i april och maj.


[Läs mer om abborre](/arter/abborre/)

### Sik

Sik finns i sjön men beståndet är ojämnt. SLU rapporterar positiv beståndsutveckling de senaste åren. Konsumtionen begränsas av Livsmedelsverkets kostråd.

### Lake

Lever på djupt vatten under sommaren och leker under is i januari och februari. Fiskas med djuprigg och bottenpilk.

### Asp

Rödlistad. Vandrar upp i Tidan och andra tillflöden för lek i april och maj. Populärt flugfiskeobjekt i åmynningarna. Riktat fiske är förbjudet i tillrinnande vattendrag 1 april–31 maj.

### Vitfiskar

Id, mört, braxen, sarv, färna och sutare finns rikligt i grunda vikar och åmynningar. Stäm förekommer i Varnan som rinner genom centrala Kristinehamn och är ett speciellt fiskemål. Björkna, benlöja och vimma tillhör också sjöns artlista.

### Hornsimpa

En arktisk glacialrelikt som vittnar om Vänerns forna förbindelse med havet. Ingår inte i sportfisket men är ett tecken på sjöns unika historia.

### Signalkräfta

Flodkräftan slogs ut av kräftpest under 1900-talet. I dag finns bara signalkräfta i Vänern. Fiske kräver fiskerättsägarens tillstånd eller särskilt tillstånd från Havs- och vattenmyndigheten. Allmänheten får inte fiska kräftor på allmänt vatten.

### Ål

Ål förekommer i sjön men är totalfredad i hela Sverige. Den får varken fiskas eller landas.

---## Sjöns karaktär

### Grundfakta

- **Yta:** ca 5 650 km²
- **Maxdjup:** 106 meter
- **Medeldjup:** 27 meter
- **Volym:** 153 kubikkilometer
- **Strandlinje:** över 4 500 kilometer
- **Antal öar, holmar och skär:** ca 22 000
- **Län:** Västra Götaland, Värmland

Vänern är 140 kilometer lång och som mest 75 kilometer bred. De tre största öarna är Torsö (62 km², nära Mariestad), Kållandsö (56 km², nära Lidköping) och Hammarö (47 km², nära Karlstad).

### De två bassängerna

Sjön delas av sundet mellan Kållandsö och Värmlandsnäs i två huvudbassänger med delvis olika karaktär.

**Värmlandssjön** är den östra och djupaste delen, med Vänerns djuphåla på 106 meter. Här bedrivs huvuddelen av laxtrollingen.

**Dalbosjön** är den västra och grundare delen, med fler grunda skärgårdar och bättre förutsättningar för gädda, abborre och vitfisk.

Grundklacken som löper från Kållandsö via Lurö till Värmlandsnäs delar sjön i mitten. Djupet längs klacken varierar mellan ett par meter och knappt tio meter, med en djupare ränna söder om Lurö där bottnen når 24 meter.

### Skärgårdar

- **Kållands skärgård och Eken** (norr och väster om Kållandsö, cirka 120 öar)
- **Lurö skärgård** i sjöns mitt
- **Djurö nationalpark** (södra Vänern, cirka 30 öar, nationalpark sedan 1991)
- **Torsö och Mariestads skärgård** i norr
- **Hammarö skärgård** vid Klarälvens delta
- **Tösse skärgård** vid Åmål och Mellerud

### Tillflöden och utlopp

De viktigaste tillflödena är Klarälven (störst, mynnar vid Karlstad, med ursprung i Trøndelag i Norge), Gullspångsälven (förbinder Skagern med Vänern), Upperudsälven, Byälven, Norsälven, Tidan (mynnar vid Mariestad) och Lidan (mynnar vid Lidköping). Vänerns enda utlopp är Göta älv, som rinner mot Kattegatt via Trollhättan, Lilla Edet och Göteborg.

Vattennivån regleras vid Vargöns kraftverk. En ny tappningsstrategi trädde i kraft i december 2022, vilket tillåter ett något mer varierat och periodvis högre vattenstånd för att gynna strandvegetation, fisk och båtliv.

### Vattentemperatur och skiktning

Under sommaren bildas ett språngskikt som skiljer det varmare ytvattnet från det kallare bottenvattnet. Lax och öring söker sig under språngskiktet till svalare vatten på 10 till 35 meters djup. Ytvattnet kan nå 20 grader eller mer i juli och augusti, vilket gör laxtrollingen svårare och kräver djupriggar.

På hösten, när ytvattnet faller under tio grader, sprider sig fisken jämnare i vattenpelaren och trollingen blir bättre igen. SMHIs klimatscenarier pekar på att ytvattentemperaturen kan stiga med en till tre grader till seklets slut, vilket på sikt kan gynna varmvattenarter som gös och missgynna sik och siklöja.

---

## Fiskemetoder

Metoderna nedan är anpassade till Vänerns förhållanden. Detaljerade teknikanvisningar finns på respektive tekniksida.

### Trolling efter lax och öring

Laxtrolling är den metod som lockar flest fiskare till Vänern. Bäst från islossning i april till isläggning i december, med toppfiske under maj och under höstens kalla veckor i september och oktober.

Djup anpassas efter årstid: tidigt på säsongen och på hösten tas lax och öring grunt från ytan ner till tio meter. Under sommaren söker fisken sig djupare och körning på 15 till 35 meter med djupriggar krävs. Hastighet 1,5 till 2,5 knop är vanligast.

[Läs mer om trolling](/teknik/trolling)

### Spinnfiske och jiggning efter gädda, gös och abborre

Gädda fiskas längs vassbälten och grunda vikar med stora wobblers, jerkbaits och gummijiggar. Bäst under vår och höst.

Gös fiskas med vertikalt jiggfiske från drivande båt längs djupkanter, eller trolling med liten wobbler. Kända lokaler är utanför Lidköping, i Kristinehamns skärgård och vid Säfflesnäset.

Abborre fiskas med småjiggar, spinnare och dropshot vid bryggor, bergskanter och uddar längs stränderna.

[Läs mer om jiggfiske](/teknik/jiggfiske)
[Läs mer om spinnfiske](/teknik/spinnfiske)

### Flugfiske

Vänern är inget renodlat flugfiskevatten men det finns intressanta möjligheter:

- **Asp** i Tidans mynning vid Mariestad under maj och juni, med streamerflugor
- **Id och färna** nära åmynningar på torrfluga och små streamers
- **Gädda** på fluga i grunda lekvikar under maj

Strömsträckor i Klarälvens nedre del och vid Säffle erbjuder flugfiske i tillflödena.

[Läs mer om flugfiske](/teknik/flugfiske)

### Mete

Bottenmete med mask, majs eller bröd i vegetationsrika vikar och vid åmynningar ger braxen, mört, sarv, sutare, id och färna. Bra metelokaler finns mitt i städerna:

- **Mariestad:** kvillområdet vid Tidans mynning
- **Kristinehamn:** Varnan från Vågbron till Varnumsviken
- **Vänersborg:** Vänersborgsviken och Vassbotten

---

## Hotspots och lokaler

### Karlstad och Hammarö

Klarälvens delta erbjuder varierat fiske mitt i Karlstad: mete efter vitfisk, kastspö efter gädda och abborre, samt chans på id och färna längs älvstränderna. Hammarö skärgård söder om staden är ett klassiskt trolling- och gäddområde med flera naturhamnar.

### Kristinehamn

Varnumsviken och Kristinehamns skärgård, med öarna Vålön, Sibberön och Arnön, är kända för gös, gädda och abborre. I Varnan, som rinner genom stadens centrum, fiskas stäm, id och mört från broarna. Båttaxi ut till öarna finns för dem utan egen båt.

### Mariestad och Torsö

Tidans mynning är ett av Vänerns bästa aspvatten under våren. Mariestads skärgård och den stora ön Torsö (62 km²) erbjuder en kombination av grunda vikar för gädda och djupare vatten för trolling.

### Lidköping och Spiken

Spiken på Kållandsö är en av Europas största insjöfiskehamnar med ett tiotal till ett tjugotal aktiva yrkesfiskare. Det är en naturlig utgångspunkt för trolling i centrala Vänern, med Lurö skärgård på nära håll. Hörnsätershamn i Hällekis och Lidköpings småbåtshamn används ofta av charterföretagen.

Kållands skärgård och Eken är gäddrika och relativt ostörda, med många fågelskyddsområden att navigera runt.

### Vänersborg

Vänersborgsviken, Vassbotten och Göta älvs övre del erbjuder fiske efter gädda, abborre och vitfisk nära bebyggelse. Karls grav och Vargöns kraftverk har egna fiskekort.

### Säffle och Byälven

Säffle är välkänt för gösfiske. Göspremiären infaller alltid första lördagen i juli. Byälven genom Säffle är uppdelad i zoner med olika regler. Harefjorden och Glafsfjordens södra del hör till kommunens bästa gäddfiskevatten.

### Lurö skärgård

Grundklacken med sin karaktäristiska djupränna söder om Lurö är en klassisk trollinglokal, ostörd och naturskön. Närmaste utskeppningsplatser är Ekenäs och Spiken.

### Djurö nationalpark

Cirka 30 öar och skär mitt i sjön, tillgängliga enbart med taxibåt eller egen båt. Nationalpark sedan 1991 och Sveriges mest isolerade skärgård. Bra trollinglägen runt fyrarna vid Malbergshamn.

### Åmål, Mellerud och Tösse skärgård

Östsidan av Dalbosjön har ostörda vikar och gott gäddvatten. Ekenäs vid Mellerud är utskeppningshamn mot Lurö och Djurö.

---

## Säsongsöversikt

| Månad | Bästa art | Bästa metod |
|-------|-----------|-------------|
| Januari–mars | Lake, abborre, lax i öppna delar | Pimpel, trolling |
| April | Gädda, lax och öring (grunt) | Trolling, gäddspinn |
| Maj | Lax, öring, asp, gädda | Trolling (grunt), flugfiske efter asp |
| Juni | Lax, gös, abborre, vitfisk | Trolling (djupare), jigg, mete |
| Juli–aug | Lax djupt, gös, abborre, kräfta | Trolling med djuprigg, jigg |
| September–okt | Lax, öring, storgädda | Trolling, gäddspinn |
| November–dec | Lax, öring | Trolling, pimpel i tidiga isar |

Gösfredning gäller 25 april–25 maj i fredningsområden, och lokalt till första lördagen i juli. Gullspångsälvens fredningsområde: trolling och nätfiske förbjudet året runt.

---

## Kostråd och miljögifter

Livsmedelsverket har kostråd för fisk från Vänern som det är viktigt att känna till, oavsett om du fiskar för nöjes skull eller tänker äta din fångst.

**Lax, öring och sik från Vänern** innehåller förhöjda halter av dioxiner och PCB. Rådet är:

- Barn, ungdomar, gravida, ammande och den som planerar att bli gravid: ät dessa fiskar **högst 2 till 3 gånger per år**
- Övriga vuxna: **högst en gång per vecka**

Samma råd gäller för lax fångad i tillrinnande vattendrag som Klarälven och Gullspångsälven.

**Abborre, gädda, gös och lake från Vänern** kan innehålla förhöjda halter av kvicksilver. Barn, gravida och ammande bör inte äta dessa fiskar oftare än 2 till 3 gånger per år. Övriga vuxna kan äta dem högst en gång per vecka.

Odlad lax och odlad fisk från odlingar i Vänern har generellt lägre halter.

Livsmedelsverkets aktuella råd finns på livsmedelsverket.se. En riskvärdering från EU:s livsmedelssäkerhetsmyndighet Efsa väntas 2027, vilket kan leda till reviderade råd.

Vänern lämpar sig väl som ett catch-and-release-vatten för lax och öring, vilket också gynnar bestånden på lång sikt.

---

## Infrastruktur och praktisk information

### Fiskeguider och charter

Vänern har ett växande utbud av guidade fisketurer. Några etablerade aktörer:

- **Charterfiske** (Lidköping, trolling på Vänern och Vättern, utgångspunkt Hörnsätershamn och Spiken)
- **Vänern Outdoor** (båtuthyrning och guidade turer)
- **Kronocamping Lidköping** (trollingbåt och fiskearrangemang)

Kontakta respektive aktör för aktuella priser och tillgänglighet, eller sök på visitlidköping.se och lakevanern.se för uppdaterade guidelistor.

### Båtramper

De flesta städer runt sjön har kommunala iläggningsplatser. Kostnadsfria ramper finns bland annat vid Spiken, Lidköpings småbåtshamn, Karlstads inre hamn, Ekenäs vid Mellerud och Säffle vid Skagersviks badplats. Uppdaterad lista finns på batramper.se.

### Boende

- **Kronocamping Lidköping** (direkt vid Vänern)
- **Skutbergets camping**, Karlstad
- **Duse Udde** och **Ekenäs camping**, Säffle
- **Sandvikens camping**, Mariestad
- **Vänersnäs camping**

### Kommunikationer

Vänern nås med tåg till Karlstad, Kristinehamn, Lidköping, Vänersborg och Mariestad. Närmaste storflygplatser är Göteborg Landvetter (1,5 timme till Lidköping och Vänersborg), Karlstad Airport (norra Vänern) och Skövde flygplats. Bilväg: E18 längs norra sidan, riksväg 45 längs västra sidan, E20 längs södra sidan.

---

## Historik och bakgrund

### Vänerlaxen – bevarandeberättelsen

Vänerlaxen är inte bara ett fiskmål. Det är en av Europas mest utsatta sötvattenslevande laxstammar och en berättelse om vattenkraftens konsekvenser.

När Vänerlaxens fem ursprungliga stammar reducerades kraftigt under 1900-talets kraftverksutbyggnad beslutades att kompensera med utsättningar av odlad fisk. Det är det systemet som sporttrollarna fiskar på i dag. Den vilda fisken utgör en mycket liten andel av laxen i sjön.

Klarälvens nio kraftverk har i dag inga fungerande fiskvägar. Forskning från Karlstads universitet och Länsstyrelsen Värmland visar att 70 till 85 procent av den nedvandrande smolten och upp mot 99 procent av den utlekta fisken dör i kraftverksturbinerna. Det är den viktigaste orsaken till att vilda stammar inte återhämtat sig trots att yrkesfisket på vild lax upphörde för decennier sedan.

Gullspångslaxen är i ett ännu mer kritiskt läge. Stammen är akut hotad och det utökade fredningsområdet från 2021 är ett försök att minska fiskedödligheten. Så länge kraftverkshindren kvarstår är utsikterna osäkra.

En konsekvens av detta för sportfiskaren: det finns gott om odlad och utplanterad lax att fiska på i Vänern. Den vilda fisken är alltid fredad, och att förstå skillnaden är en del av att fiska ansvarsfullt i sjön.

### Fiskvård och utsättningar

Stiftelsen Laxfond Vänern, bildad 1988, finansierar odling och utsättning av kompensationslax. Under en typisk säsong sätts 100 000 till 200 000 smolt ut, fördelat på Gullspångslax, Klarälvslax och motsvarande öringstammar.

SLU Aqua bedriver löpande beståndsskattningar och beståndsövervakning. Vänerns vattenvårdsförbund, med kommuner, länsstyrelser och fiskeorganisationer som medlemmar, publicerar regelbundna rapporter om sjöns miljötillstånd.

Klimatförändringar väntas gynna varmvattenarter som gös, abborre och braxen, och missgynna siklöja och sik. Perioden med is i Vänerns skärgårdar förväntas bli kortare, vilket påverkar pimpelsäsongen.

Vänerlöjrommen, rommen från siklöja fångad av yrkesfiskarna i Spiken och ett tiotal andra hamnar, är EU-skyddad med ursprungsmärkning och ett ekonomiskt viktigt tillskott till det lokala fisket.

---

*Strömkast finansieras via affiliate-länkar. Köper du fiskekort eller utrustning via länkarna på den här sidan får vi en liten provision, utan kostnad för dig. Det påverkar inte vad vi skriver eller hur vi värderar fiskevatten.*```

## src/content/destinations/vattern.mdx
```
---
title: "Vättern"
slug: "vattern"
description: "Guide till fiske i Vättern: fiskekort, fiskarter, tekniker och hotspots. Från rödingtrolling och landfiske efter lax till vertikalfiske och gäddrekordens sjö."
heroImage: "/images/destinations/vattern.jpg"
lat: 58.3
lng: 14.6
län: "Jönköping, Östergötland, Örebro, Västra Götaland"
primarySpecies: ["röding", "lax", "öring", "gädda", "gös", "abborre", "lake"]
waterType: "lake"
excerpt: "Kristallklart djupvatten med röding, lax och gäddarekord."
iFiskeUrl: "https://www.ifiske.se/fiske-vattern.htm"
recommendedGear: []
publishedAt: "2025-01-01"
updatedAt: "2025-01-01"
---

Vättern är Sveriges näst största sjö och ett av landets mest artrika fiskevatten. Med ett medeldjup på 40 meter, ett siktdjup på 13 till 15 meter och ett kallvattenekosystem som liknar norrländska fjällsjöar är Vättern en sjö utan riktigt motstycke i södra Sverige. Hit åker fiskare för Vätternrödingen, vinterns laxfiske från land och storgäddorna som ligger bakom det svenska sportfiskerekordet.

Vättern är en av de fem stora sjöarna med fritt handredskapsfiske. Du kan fiska med spö eller pilk utan fiskekort, oavsett varifrån du kommer. Däremot är flera regler viktiga att känna till, inte minst det totala fiskeförbudet för harr som trädde i kraft 15 mars 2025.

## Fiskekort och regler

### Vad är fritt och vad kräver tillstånd?

Handredskapsfiske är tillåtet för alla på Vätterns allmänna vatten utan fiskekort. Med handredskap menas spö, pilk, pimpel och flugspö med max tio krokar. Trolling och dragrodd på allmänt vatten är tillåtet. I norra Vätterns skärgård är stora delar enskilt vatten utan öppen strand. Där krävs fiskerättsägarens tillstånd för trolling, vilket i praktiken innebär att man köper lokalt trollingkort.

Fiske i tillrinnande vattendrag kräver alltid fiskekort av fiskerättsägaren. Fiskekort för de flesta åar och bäckar säljs via ifiske.se.

### Minimimått

| Art | Minimimått |
|---|---|
| Lax | 60 cm |
| Öring | 50 cm |
| Röding | 50 cm |
| Gös | 45 cm |
| Signalkräfta | 10 cm (pannspets till stjärtspets) |

Fiskar under måttet ska omedelbart återutsättas och får inte föras i land.

### Fångstbegränsning

Vid sportfiske får du behålla **högst tre fiskar sammanlagt** av arterna lax, röding och öring per dygn. Av dessa får högst två vara röding.

### Totalt fiskeförbud för harr från 2025

Sedan 15 mars 2025 är allt riktat fiske efter harr förbjudet i hela Vättern och i alla tillrinnande vattendrag upp till första vandringshinder. Harr som fångas som bifångst ska omedelbart återutsättas.

### Fredningsområden och fredningstider

Tre permanenta fiskeförbudsområden gäller hela året (utom kräftfiske med burar): Tängan, Norrgrundet och Fingals.

Höstfredning gäller 15 september till 31 december i ett antal fredningsområden längs hela sjön. Under fredningen är trolling och dragrodd förbjudet i dessa områden, men handredskapsfiske från land är tillåtet. Öring, röding och sik som fångas i fredningsområden under fredningstiden ska omedelbart återutsättas.

Alla åmynningar är fredade 15 mars till 31 maj för harr och 15 september till 31 december för lax och öring. Det gäller 13 namngivna åar samt fyra fredningsområden vid utlopp och hamnar.

Nätfiske är förbjudet i Motalaviken 15 oktober till 15 december, för att skydda siken under lek.

Aktuella regler finns alltid på vattern.org och via Havs- och vattenmyndighetens tjänst på svenskafiskeregler.se.

---

**Obs för den som planerar att äta sin fångst:** Livsmedelsverket har kostråd för röding, lax, öring och sik från Vättern på grund av förhöjda halter av dioxiner och PCB. Läs mer längre ned i artikeln.

---

## Fiskarter
Vättern hyser omkring 28 fiskarter i sjön och ytterligare några i tillflödena, totalt runt 31 arter. Det kalla, klara vattnet gör att laxfiskar dominerar, vilket är ovanligt i södra Sverige.

### Röding

Vätternrödingen är sjöns symbolart och ett av Sveriges mest skyddsvärda fiskbestånd. Den är genetiskt unik och härstammar direkt från bestånd som levde i vattnet när inlandsisen drog sig tillbaka. Av alla rödingbestånd söder om Dalälven har ungefär 70 procent försvunnit under det senaste seklet. Vättern har det överlägset största kvarvarande beståndet i södra Sverige.

Rödingen kan teoretiskt nå 10 till 12 kilo i Vättern. Den största moderna dokumenterade fångsten på sportredskap väger 10,3 kilo. Vanlig sportfiskestorlek är 1 till 2 kilo.

Sommartid håller sig vuxen röding under språngskiktet på 15 till 35 meters djup. Vintertid kan den stiga mot ytan. Leken sker i oktober och november på grova stenbottnar i sjön, på 1 till 15 meters djup. Födan hos yngre rödingar domineras av glacialrelikta kräftdjur (pungräka och vitmärla). Äldre fiskar övergår till siklöja, nors och storspigg.


[Läs mer om röding](/arter/roding/)

### Lax

All lax i Vättern är odlad och satt ut som kompensation. Sedan 1971 har lax planterats in och de senaste decennierna har Gullspångslax från Vänerstammen använts. Cirka 20 000 smolt sätts ut årligen. Laxen i Vättern kan bli mycket stor. Det svenska insjölaxrekordet på 20,4 kilo fångades utanför Öninge i december 1997 från land. Laxar på 5 till 15 kilo är vanliga.


[Läs mer om lax](/arter/lax/)

### Öring

Vätterns öring reproducerar sig naturligt i tillrinnande vattendrag. Ungefär 70 av sjöns tillflöden har dokumenterad öringlek, tack vare biotopvård under flera decennier. Öringen jagar i hela sjön och kan nå 10 kilo eller mer.

### Gädda

Vättern är ett av Europas mest kända trofévatten för gädda. Det svenska sportfiskerekordet, 21,07 kilo och 128 centimeter, togs 1 april 2016 vid Olshammar i norra Vättern. Det föregående rekordet på 19,34 kilo kom också från Vättern. Spårningsstudier från SLU visar att Vätterngäddor rör sig över betydligt större ytor än vad som tidigare antagits, inklusive genomkorsningar av hela sjön.


[Läs mer om gädda](/arter/gadda/)

### Gös

Gösen har en begränsad utbredning i Vättern och trivs bäst i de varmare, mer näringrika delarna i norr: Alsenfjärden söder om Askersund, Kärrafjärden och Hammarsundet. Vertikalfiske efter gös i Alsen kan vara mycket produktivt.


[Läs mer om gös](/arter/gos/)

### Abborre

Finns i hela sjön men är vanligast i norra skärgårdens grundare och mer heterogena bottnar. Fiskas med spinn och jigg längs kanter och strukturer.


[Läs mer om abborre](/arter/abborre/)

### Lake

Naturligt reproducerande bestånd på de djupa, kalla bottnarna. Leker under is i januari och februari. Fiskas med djuprigg och bottenpilk vintertid. Traditionellt lakemete genom isen är en gammal tradition på Visingsö.

### Sik

Naturliga sikbestånd leker på grunda bottnar, framför allt i Motalaviken, under oktober till december. Bedöms ha goda bestånd enligt SLU:s senaste analyser.

### Nors och siklöja

Dessa två arter är ryggraden i Vätterns ekosystem. Norsen dominerar den fria vattenmassan och kan vid ekolodning utgöra mer än hälften av alla registrerade individer. Siklöjan lever pelagiskt och leker på stora djup, ända ner till 120 meter. Båda är centrala som bytesfisk för röding, lax och öring.

### Harr

Vätterns harrbestånd är det sydligaste i landet och bedöms ligga på historiskt låga nivåer. Sedan 15 mars 2025 är allt fiske efter harr förbjudet. All harr ska återutsättas omedelbart.

### Signalkräfta

Inplanterad art som nu finns i täta bestånd i hela sjön. Vättern är ovanlig i att allmänheten utan tillstånd får fiska signalkräfta på allmänt vatten under tre helger per år med start fjärde fredagen i augusti. Maximalt 60 kräftor per person och dygn, max sex burar per person.

### Ål

Förekommer i sjön men är totalfredad och får varken fiskas eller landas.

---## Sjöns karaktär

### Grundfakta

- **Yta:** 1 893 km²
- **Maxdjup:** 128 meter (söder om Visingsö)
- **Medeldjup:** 40 meter
- **Volym:** 77,6 kubikkilometer
- **Strandlinje:** 516 kilometer
- **Höjd över havet:** 88 meter
- **Botten under havet:** 40 meter
- **Län:** Jönköping, Östergötland, Örebro, Västra Götaland

Vättern sträcker sig 135 kilometer i nord-sydlig riktning och är som mest 31 kilometer bred. Sjön berör fyra län och omges av åtta kommuner. Den största ön är Visingsö, 25 kvadratkilometer, belägen i sjöns mitt mellan Gränna och Hjo.

### Geologiskt ursprung

Vättern är en gravsänka, ett tektoniskt sänkstråk som började bildas för 700 till 800 miljoner år sedan. De branta strandhällarna och de tvära djupkanterna förklaras av dessa förkastningsstrukturer. Vättern var en gång förbunden med havet och avsnördes för ungefär 8 000 år sedan, när landhöjningen stängde förbindelsen. Hornsimpa, pungräka och vitmärla är glacialrelikter som lever kvar sedan den tiden.

### Klart och kallt vatten

Vättern är oligotroft, det vill säga näringsfattigt. Siktdjupet mätt med Secchiskiva är normalt 13 till 15 meter, avsevärt mer än i de flesta andra svenska storsjöar. Som jämförelse har Vänern ett siktdjup på omkring 6 meter. Det extremt klara vattnet påverkar fisketeknikerna: tunna tafsar och beten som dras långt bakom båten ger bättre resultat.

Vattnets genomsnittliga uppehållstid i sjön är 60 år. Den långa omsättningstiden gör sjön känslig för långlivade föroreningar och förklarar det miljögiftsproblem som fortfarande berör vissa arter.

### Temperaturskiktning

Under sommaren bildas ett språngskikt på 10 till 20 meters djup som skiljer det varmare ytvattnet från det kalla bottenvattnet. Under språngskiktet håller vattnet 4 till 8 grader Celsius året om. Rödingen håller sig mestadels under språngskiktet, på 15 till 35 meters djup, under de varma månaderna.

På hösten och vintern löses skiktningen upp. Under kallt väder kan lax och öring jaga ända upp i ytan nära strandlinjen.

### Isläggning

Vättern fryser sällan helt. Den stora volymen kallt vatten kräver flera veckors sammanhängande sträng kyla för att sjön ska kunna stelna, och sjön är dessutom öppen för vindar som bryter upp eventuellt tunnare istäcken. Under 2000-talet har hel isläggning av södra Vättern inträffat vid ett fåtal tillfällen. Senast hela södra delen utanför Jönköping var täckt var 2011. Lokalt fryser skyddade vikar som Huskvarnaviken, Motalaviken och delar av norra skärgården nästan varje vinter.

### Norra skärgården och Visingsö

Norra Vättern, norr om en linje mellan Karlsborg och Askersund, är en småskärgård med hundratals öar, sund och fjärdar. Det öppna havet börjar söder om skärgården. Trollingkort krävs i stora delar av skärgården eftersom det är enskilt vatten.

---

## Fiskemetoder

Metoderna nedan är anpassade till Vätterns förhållanden. Det extremt klara vattnet är den faktor som skiljer Vättern mest från andra storsjöar och påverkar samtliga metoder. Detaljerade teknikanvisningar finns på respektive tekniksida.

### Trolling efter röding, lax och öring

Trolling är den vanligaste och mest fångstsäkra metoden på Vättern. Bäst från islossning i april till isläggning i december, med toppfiske under maj och under höstens kalla veckor.

Det klara vattnet kräver tunna tafsar och att beten dras långt bakom båten, 10 till 30 meter. Djup anpassas efter årstid: under sommaren håller rödingen sig på 15 till 35 meter under språngskiktet. Vår och höst kan fisken tas grundare. Lax och öring jagar ytligare och kan vintertid fångas ända uppe vid ytan. Max tio beten per båt.

Klassiska trollingvatten är Hjo, Granvik, Hästholmen och Gränna. Djupkanter, undervattensryggar och friliggande grynnor på 20 till 50 meter är de mest produktiva strukturerna.

[Läs mer om trolling](/teknik/trolling)

### Vertikalfiske efter röding

Vertikalfiske introducerades på Vättern runt 2010 och har vuxit snabbt. Metoden kräver bra ekolodsbild och elmotor för att hålla båten still över djupkanter på 25 till 35 meter. En tung jigg sänks ned och rörs i små rörelser vid botten och i mittvatten.

Fördelen jämfört med trolling är att återutsatt röding överlever i nära 100 procent av fallen, om fisken hanteras varsamt och inte dras upp för fotografering i varmt väder.

[Läs mer om jiggfiske](/teknik/jiggfiske)

### Landfiske efter lax

En av Vätterns mest karaktäristiska fiskeformer är landfiske efter lax under vinterhalvåret, från november till april, med högsäsong i december och januari. Fisken jagar storspigg som pressas mot strandlinjen av vindar och laxen följer efter.

Kända lokaler på västsidan är Granvik, Domsand och Sjömarken vid Bankeryd söder om Jönköping och längs kusten norrut mot Hjo. På östsidan är Hästholmen, Omberg, Öninge, Borghamn och Gränna välkända platser. Branterna går ofta direkt ner till 30 till 50 meters djup, vilket innebär att kortdistanskast räcker.

Bäst förhållanden är 5 till 7 sekundmeter sidvind, mild temperatur och mulet väder. Säkerheten är avgörande: klipporna är hala och branterna är branta. Broddar och flytplagg är nödvändig utrustning vintertid.

[Läs mer om spinnfiske](/teknik/spinnfiske)
[Läs mer om flugfiske](/teknik/flugfiske)

### Jiggfiske och spinnfiske

Gädda fiskas med stora wobblers, jerkbaits och gummijiggar i norra skärgårdens grundare vikar under vår och höst. Gös i Alsen fångas med vertikaljiggar och trolling med liten wobbler. Abborre längs kanter och bryggor med småjiggar.

[Läs mer om jiggfiske](/teknik/jiggfiske)
[Läs mer om spinnfiske](/teknik/spinnfiske)

### Mete

Bottenmete i grundare vikar och vid åmynningar ger abborre, mört, braxen och sutare. Stadsnära metning fungerar från bryggor i Motala, Vadstena och Gränna.

### Pimpel och isfiske

Större delen av Vättern fryser sällan, men i de vikar som lägger is pimplas abborre, gädda, gös, sik och röding. Traditionellt lakemete och pimpel efter röding och abborre förekommer i Huskvarnaviken, Motalaviken och norra skärgårdens inre fjärdar.

[Läs mer om isfiske](/teknik/isfiske)

---

## Hotspots och lokaler

### Norra Vättern och Askersund

Norra skärgårdens vikar och fjärdar, inklusive Alsen, Kärrafjärden och Hammarsundet, är bland sjöns mest produktiva trollingvatten för röding och öring. Alsen är bra för gös och gädda. Trollingkort krävs i stora delar av skärgården eftersom det är enskilt vatten. Olshammar i nordväst är platsen för det svenska gäddrekordet 2016.

### Karlsborg och Forsviken

Stor utgångshamn med båtramp, gästhamn och servicefunktioner. Göta kanal passerar Karlsborg på väg in i Vättern. Forsviken norr om Karlsborg är historiskt en av sjöns bästa platser för trolling efter röding och öring.

### Hjo

Liten trästad med klassisk gästhamn och central position på sjön. En av de mest använda utgångshamnarna för trollingbåtar. Hjo är också utgångspunkt för landfiske norrut mot Granvik och Domsand. Hjodraget är en välkänd trollingtävling.

### Granvik och Domsand

Några av Vätterns mest namnkunniga landfiskelokaler för lax. Branterna går brant ned till stora djup nära strand. Sjömarken, Mellboön och Djäknesundet ligger i samma kuststräcka.

### Jönköping och Huskvarna

Vid sydänden av sjön med stadsnära fiske från hamnen och pirar. Huskvarnaån mynnar i Huskvarnaviken och är ett av de större tillflödena med öringlek, fredat höst och vinter. Dunkehallaån och Domneån väster om Jönköping har egna fredningsområden.

### Visingsö

Sjöns största ö med färjeförbindelser från Gränna. Landfiske från piren och längs östsidan. Omgivande vatten är klassiska trollinglokaler. Det djupaste partiet i hela sjön (128 meter) ligger söder om ön.

### Gränna

Östsidans mest välkända fiskehamn, med båtramp och många charterföretag som utgår härifrån. Gränna pir är klassisk landfiskelokal för lax och röding vintertid. Röttleåns mynning norr om stan är fredad under öringens lek.

### Hästholmen och Omberg

Östsidans klassiska fiskedestination. Hästholmens hamn är öppen och tillgänglig hela året med båtramp, renshus och fiskestugor. Klipporna vid Öninge och kring Omberg är välkända för vinterns laxfiske. Det svenska insjölaxrekordet togs vid Öninge 1997.

### Borghamn

Hamn med båtramp, vandrarhem, camping och restaurang. Pirarna fungerar bra för landfiske efter lax november till februari. Borghamn Strand erbjuder båtuthyrning och eget kräftfiskevatten.

### Motala

Sjöns enda utlopp via Motala ström. Stor hamn, gästhamn och bra utgångspunkt för trolling. Motalaviken har sikfredning 15 oktober till 15 december.

---

## Säsongsöversikt

| Månad | Bästa art | Bästa metod |
|-------|-----------|-------------|
| Nov–feb | Lax, röding, öring | Landfiske, trolling |
| Mars | Lax, gädda | Landfiske, trolling, gäddspinn |
| April | Gädda, lax, öring | Gäddspinn, trolling |
| Maj–juni | Röding, öring, lax, gös | Trolling, vertikalfiske, jigg |
| Juli–aug | Röding, gös, abborre, kräfta | Vertikalfiske, jigg, kräftfiske |
| September–oktober | Röding, öring, storgädda | Trolling, gäddspinn |

Höstfredning 15 september–31 december i fredningsområden 1–7. Harrfiske förbjudet hela året sedan 15 mars 2025.

---

## Kostråd och miljögifter

Livsmedelsverket har kostråd för röding, lax, öring och sik från Vättern på grund av förhöjda halter av dioxiner och PCB. Sverige har ett permanent undantag från EU:s gränsvärden som tillåter försäljning av dessa fiskar, men konsumenterna ska informeras.

**Röding, lax, öring och sik från Vättern:**

- Barn, ungdomar, gravida, ammande och den som planerar graviditet: ät dessa fiskar **högst 2 till 3 gånger per år**
- Övriga vuxna: **högst en gång per vecka**

Odlad röding, lax och öring har generellt lägre halter.

Kvicksilver i gädda, abborre, gös och lake gäller för alla svenska insjöar. Barn, gravida och ammande bör inte äta dessa arter oftare än 2 till 3 gånger per år, oavsett om de kommer från Vättern eller annan sjö.

Livsmedelsverkets aktuella råd finns på livsmedelsverket.se. En utvärdering från EU:s livsmedelssäkerhetsmyndighet Efsa väntas 2027, vilket kan leda till uppdaterade råd.

Vättern lämpar sig väl som ett catch-and-release-vatten. Vertikalfisket efter röding ger nära 100 procent överlevnad vid rätt hantering.

---

## Infrastruktur och praktisk information

### Fiskeguider och charter

Vättern har ett välutvecklat utbud av professionella fiskeguider, med tyngdpunkt på trolling och landfiske november till april.

- **Trolling Vättern** (Motala och Hästholmen, helår)
- **Vätterns Fiskecharter** (Hästholmen och Gränna, oktober till april)
- **Small Boat Trolling Vättern** (Gränna, Huskvarna och Hästholmen)
- **Charterfiske** (Ove Johansson, Motala)
- **Guidefiske** (Gränna, vertikalfiske och trolling)
- **Mamos Fiskecharter** (Motala, Vättern och Vänern)

Kontakta respektive guide direkt för aktuella priser och bokningsalternativ.

### Båtramper

Välunderhållna ramper med åretruntöppning finns bland annat vid Hästholmen, Karlsborg, Hjo, Gränna, Motala, Borghamn, Vadstena och Askersund.

### Boende

Borghamn Strand och Bauergården vid Omberg är anpassade för fiskegäster med båtramp och fiskepaket. Större campingar längs stranden finns vid Gyllene Uttern (Gränna), Domsand (Bankeryd), Hjo camping och Vätterviksbadet (Motala).

### Kommunikationer

Tåg till Jönköping, Motala, Hjo och Karlsborg. Närmaste storflygplats är Jönköping Airport, med Göteborg Landvetter som alternativ för västra sidan och Stockholm Arlanda för norra sidan. Bilväg: riksväg 50 längs östsidan, riksväg 26 och 195 längs västsidan.

---

## Historik och bakgrund

### Vätternrödingen och bevarandeberättelsen

Vätternrödingen är inte bara en sportfisk. Den är en levande länk till istiden, genetiskt unik och det enda stora rödingbeståndet som finns kvar söder om Dalälven i Sverige. Det är ett av Europas mest skyddsvärda sötvattensekosystem.

Tre permanenta fiskeförbudsområden, Tängan, Norrgrundet och Fingals, har sedan 2005 täckt ungefär 15 procent av sjöns yta. Kombinerat med tydliga minimimått och fångstbegränsningar har beståndet återhämtat sig och bedöms i dag som stabilt.

Det stora hotet på längre sikt är klimatförändringen. Sedan 1980-talet har ytvattentemperaturen ökat med 2 till 3 grader Celsius. År 2020 var det varmaste sedan mätningarna startade på 1950-talet. SMHIs scenarier pekar på att Vättern kan vara ytterligare 3 grader varmare mot slutet av seklet, vilket på sikt riskerar att påverka rödingens reproduktion och hela det kallvattenekosystem som gör sjön unik.

### Spårningsprojektet

Sedan 2021 pågår ett storskaligt spårningsprojekt där sändare opererats in i över 400 fiskar av sju arter, med mer än 60 mottagare på sjöns botten. Projektet finansieras av Havs- och vattenmyndigheten och drivs av SLU Aqua i samarbete med länsstyrelserna och Sportfiskarna. Resultaten publiceras löpande och ger ny kunskap om fiskars rörelsemönster i sjön.

---

## Snabbfakta

| | |
|---|---|
| Fritt handredskapsfiske | Ja, på allmänt vatten |
| Trolling i norra skärgården | Kräver lokalt trollingkort (enskilt vatten) |
| Rödingminimimått | 50 cm, max 2 rödingar per dygn |
| Laxminimimått | 60 cm |
| Harr | Totalförbud sedan 15 mars 2025 |
| Kräftfiske | Tillåtet utan tillstånd, tre helger per år |
| Permanenta förbudsområden | Tängan, Norrgrundet, Fingals |
| Aktuella regler | vattern.org / svenskafiskeregler.se |
| Närmaste städer | Jönköping, Motala, Hjo, Gränna, Karlsborg |

---

*Strömkast finansieras via affiliate-länkar. Köper du fiskekort eller utrustning via länkarna på den här sidan får vi en liten provision, utan kostnad för dig. Det påverkar inte vad vi skriver eller hur vi värderar fiskevatten.*```

# Content: techniques

## src/content/techniques/dropshot.mdx
```
---
title: "Dropshotfiske"
slug: "dropshot"
description: "Lär dig dropshotfiske: rigg, sänken, beten, teknik och de bästa svenska vattnen för abborre och gös. Komplett guide med regler och utrustningsråd."
heroImage: "/images/techniques/dropshot.jpg"
targetSpecies: ["abborre", "gos"]
difficulty: "nybörjare"
topDestinations: ["vanern", "vattern", "malaren", "bolmen", "storsjon"]
faq:
  - q: "Hur riggar man en dropshot-rigg?"
    a: "Knyt kroken på linan med Palomar-knut och lämna en lång ände. Trä linan genom krokens öga uppifrån och knyt sänket i änden. Avståndet krok–sänke är normalt 20–40 cm beroende på vattendjup."
  - q: "Vilket spö passar bäst för dropshot?"
    a: "Extra-fast spö på 210–240 cm med kastvikt 3–15 g. Känslig topp som registrerar hugg och kontakt med sänket. Flätlina 0,08–0,10 mm ger bättre känslighet än monofil."
  - q: "Kan man dropshot-fiska från land?"
    a: "Ja, men tekniken fungerar bäst från båt eller brygga med tillräckligt djup under sig. Från land fungerar det bra vid branta stränder, bryggor, pirer och steniga kanter med djup vatten nära."
---

Dropshot är en finessteknik där sänket sitter längst ner på linan och kroken med betet hänger fritt 20–60 cm ovanför. Det gör att betet kan röra sig utan att sänket lyfts från botten, en presentation som är svår att matcha för trög eller pressad fisk. Tekniken är enkel att lära sig grunderna i men har tillräckligt djup för att hålla en fiskare engagerad i många år.

## Utrustning

### Spö

Ett dropshotspö är 200–230 cm långt med en mjuk, känslig topp och en styv ryggrad. Aktionen ska vara Fast eller Extra Fast, med kraftklass UL (Ultralight) eller L (Light) för abborre och ML (Medium Light) för gös och djupare vatten. Kastvikt 3–14 g täcker de flesta situationer för abborre. För gös på djupare vatten och med tyngre sänken passar 5–21 g bättre.

Det som skiljer ett dropshotspö från ett jiggspö är att ca 80–90 procent av blanket är styvt medan bara toppen böjer. Den styvare ryggradsdelen behövs för att mothugget ska gå igenom, och den mjuka toppen registrerar de lätta hugg som är typiska för tekniken.

### Rulle

En haspelrulle i storlek 2000–2500 är standard. Rullar i den storleken balanserar bra med spön i UL–ML-klassen och har tillräcklig linkapacitet för de djup som är aktuella i svenska vatten. Välj en rulle med direkt backspärr så att fisken inte kan ta slaklina vid mothugget.

### Linor

Flätlina 0,08–0,12 mm PE i en synlig färg som fluorgul eller orange används som huvudlina. Flätlinan töjer sig inte, vilket är avgörande för att känna de lätta hugg som dropshotfiske ger. Monofil eller fluorocarbon som huvudlina fungerar inte lika bra eftersom de mjukar upp signalerna.

Mellan flätlinan och kroken knyts en tafs på 60–100 cm fluorocarbon, 0,18–0,22 mm för abborre och 0,22–0,28 mm för gös. Fluorocarbon föredras framför monofil av tre skäl: materialets brytningsindex ligger nära vattnets och gör tafsen svårare för fisken att se, det är styvare vilket håller kroken rakt ut i 90 graders vinkel från linan, och det tål nötning mot sten och fiskens tänder bättre.

### Krokar

Dedikerade dropshotkrokar med öppet öga används för att knyta Palomarknuten korrekt. Vanliga storlekar är 4–8 för abborrfiske med beten i 5–8 cm-klassen och 1–2 för gösfiske med beten i 8–12 cm-klassen. Krokar med svivel i ögat (spinshot-typ) minskar risken att betet vrider sig och trasslar tafsen.

### Sänken

Dropshotsänken finns i tre former: cylinder, päron och kula. Cylinderformen hänger upp sig minst i sten och vegetation och är ett bra standardval. Päronformen glider lätt över mjukbotten och sand. Kulformen används mest på ren sandbotten.

Vikter anpassas efter djup och vind:

- **3–8 m, vindstilla**: 5–7 g
- **5–15 m, måttlig vind**: 7–14 g
- **15–25 m, djup gös eller ström**: 14–21 g

Tungstensänken är att föredra framför bly. Tungsten är ca 1,7 gånger tätare än bly (19,3 mot 11,35 g/cm³), vilket innebär att ett tungstensänke av en given vikt är ungefär 40 procent mindre i volym. Det sjunker snabbare, hakar upp sig mer sällan i botten och ger en tydligare klick mot sten och hård botten som ofta triggar hugg.

### Beten

Plastbeten i 5–10 cm används. Typiska former är finesse-worm (en smal, lätt krökt mask), straight shad (en slank fisk med flat svans) och liten grub. Betets rörelse i vattnet styrs av formen. Finesse-worms ger ett diskret svaj, straight shads en mer utpräglad simsrörelse.

Naturfärgade och transparenta beten fungerar konsekvent bra på passiv fisk: motoroil, watermelon, clear/smoke och Arkansas Shiner-liknande nyanser. Kontrastfärger (chartreuse, orange, rosa) kan fungera bättre vid grumligare vatten eller när fisken är aktiv.

## Riggar

Dropshot används i tre distinkta varianter beroende på fiskesituation.

**Klassisk dropshot** är grundriggen. Kroken sitter 20–60 cm ovanför sänket via Palomarknuten. Betet är nose-hookat (kroken sticks precis genom betets nos) så att det hänger horisontellt och rör sig fritt. Används vertikalt från båt och vid castingfiske från land eller båt. Passar abborre och gös i de flesta situationer.

**Weedless dropshot** monteras med ett offset wide gap-krok (EWG) och betet trycks in i en Texas-rigg-liknande position för att täcka kroken. Taps lite av betets naturliga rörelse men passar vegetation, grenar och bergsskrevor där klassisk rigg hakar upp sig. Används i grundare vatten med struktur.

**Pelagisk dropshot** monteras med en längre droppe på 60–100 cm och används utan att sänket bottnar, istället hålls det fritt i vattnet. Effektivt när ekolodet visar fisk högt upp i vattenpelaren, t.ex. abborrstim pelagiskt sommartid.

## Tekniker

**Vertikal presentation** är tekniken i sin renaste form. Båten positioneras med trollingmotor över hittad fisk, sänket sänks ner till botten och linan sträcks så spötoppen böjer lätt. Sedan skakas spötoppen med 1–3 cm handledsskakningar utan att sänket lyfts. Betet vibrerar och fladdrar på ett fixerat djup. Hugget känns som ett svagt tick, en plötslig tyngd eller att linans kontakt tappas. Pausen är avgörande: efter skakningarna läggs spöet still i 5–15 sekunder. De flesta hugg kommer i pausen eller direkt efter.

**Castingdropshot** kastas mot en struktur, en djupkant, en brygga eller ett vassbryn. Sänket får sjunka fritt på slak lina, sedan sträcks linan och spöet skakas i position under några sekunder. Därefter dras sänket längs botten med ett kort lyft och en paus. Tekniken täcker ett större område och passar bättre från land.

**Djupanpassning** är den viktigaste variabeln. Vid vattentemperatur under 10°C sitter fisken tätt mot botten. Korta droppen till 15–25 cm och fiska långsamt med långa pauser. Vid 10–15°C kan droppen förlängas till 30–45 cm och presentationen snabbas upp något. Vid varmare vatten kan aktiv fisk stå upp till 60 cm över botten, och en längre droppe på 40–60 cm är mer effektiv.

## Att läsa vatten

Dropshot är en bottenorienterad teknik och kräver förståelse av var fisken befinner sig i djupled. Ekolod är den viktigaste hjälpen, men utan ekolod gäller det att hitta strukturer som samlar fisk: djupkanter, grus- och stenbottnar, undervattensrev, nedfallna träd och gränsen mellan hård och mjuk botten.

Djupkanter är dropshotets hemmaplan. En brant som går från 3 meter ner till 10 meter samlar abborre och gös på den djupa sidan, ofta vid 5–9 meters djup på senhösten. Sök kanter med lite topografi: ett enstaka stenblock eller en liten udde längs kanten håller oftare fisk än en lång, slät brant.

Bottenmaterial berättar vad fisk äter och var den befinner sig. Hård botten (sten, grus, lera) håller bättre koll- och rovfiskhållning än mjuk dy. Vid övergången mellan hård och mjuk botten stannar ofta kräftdjur och småfisk, och rovfisken följer efter. Sök den övergångszonen med sänket och känn skillnaden i bottenkontakt.

## Målarter

**Abborre** är primärmålet för dropshotfiske i Sverige. Abborren trivs vid struktur, djupkanter och bottnar med varierande material. Den är stationär inom ett relativt litet område och svarar bra på slow-presentation. Stora abborrar på 400 gram och uppåt är ofta solitära eller går i små storleksgrupperade stim, skilda från de stora stimmen av yngre fisk. Dropshot är särskilt effektivt tidigt på säsongen när abborren fortfarande är trög av kallt vatten, och på senhösten när stimmen samlas på djupkanter inför vintern. Det finns inget nationellt minimimått för abborre i Sverige.
[Läs mer om abborre](/arter/abborre/)

**Gös** fiskas med dropshot på djupkanter och grynnor, oftast 6–15 meters djup. Gösen är skymnings- och nattaktiv, med ljusförstärkande ögon som ger den god syn i mörker. Kvällsfiske med dropshot vid djupkanter är produktivt från midsommar och framåt. Använd större beten i 8–12 cm-klassen, starkare fluorotafs (0,25–0,28 mm) och mörka eller UV-aktiva färger. Minimimåttet för gös är 45 cm i Vänern, Vättern, Mälaren och Hjälmaren med angränsande vattendrag. Gösen har en sluten simblåsa, vilket innebär risk för barotrauma vid dragning från djupt vatten. Återutsätt försiktigt och undvik djupfiske om fisken ska sättas tillbaka.

[Läs mer om gös](/arter/gos/)
## Svenska vatten

**Vänern** är ett av Sveriges bästa dropshotvatten för gös. Djupbranter utanför öar och uddar ger klassiska platser på 8–18 meters djup. Abborre fiskas grundare, 4–10 m, vid stenstruktur. I Vänern gäller fredning för gös i utpekade fredningsområden 25 april–25 maj. Kontrollera vilka fredningsområden som gäller lokalt hos Länsstyrelsen Västra Götaland.

**Vättern** är kristallklart med djupkanter som passar tekniken väl. Det klara vattnet gör fluorotafs och naturfärgade beten extra viktiga. Klassiska platser finns utanför Hjo, Karlsborg, Visingsö och Hästholmen. Vättern har inga nationella fredningstider för gös, men djupa fiskefria områden för röding- och öringstammarnas skull finns i tre delar av sjön.

**Mälaren** är mer varierat med grumligare vatten i delar och klarare i andra. Bra gösvatten i Ekoln, Galten och Västeråsfjärden. Dropshot fungerar från båt längs djupkanter och vid mälarens många strukturer. Fritt handredskapsfiske gäller i hela Mälaren.

**Bolmen** har starka bestånd av gös och abborre. Djupbranter norr om Bolmsöbron på 5–8 meters djup är klassiska gösplatser. Lokala regler gäller: fiskekort krävs, och gösfiske djupare än 10 m är förbjudet med hänsyn till återutsättningens överlevnadsgrad.

**Storsjön i Jämtland** har bra abborrbestånd och klart vatten som gynnar dropshottekniken under sommar och höst. Fritt handredskapsfiske gäller.

Andra produktiva vatten: Hjälmaren (grundare men bra abborre 3–8 m), Sommen och Åsnen i Småland, Roxen och Glan i Östergötland, samt Stockholms innerskärgård i bräckvatten.

## Säsong

**Vår** är dropshotets starkaste period. Direkt efter islossning, vid vattentemperatur 4–10°C, är abborren trög och stannar nära botten. Fiska vid de strukturer som värms upp snabbast: stenkajer i solläge, utlopp och grunda vikar med hård botten. Håll droppen kort (15–25 cm), betet litet och lättflytande, och ge långa pauser.

**Sommar** förflyttar fisken djupare dagtid. Abborren söker svalare vatten under språngskiktet vid 5–10 meters djup i de flesta svenska sjöar. Gös aktiveras på kvällen och natten vid djupkanter. Dropshot kombinerat med ekolod för att hitta djupstående fisk är effektivt under den här perioden.

**Höst** är årets bästa tid för stor abborre. Fisken samlas i stim på djupkanter, 5–9 m, och bygger upp fettreserver inför vintern. Stimmen kan vara stora och koncentrerade, och dropshot ger möjlighet att fiska dem minutiöst utan att skrämma bort dem med onödig rörelse. Gösen är aktiv till sent på hösten.

**Vinter** fungerar dropshot i öppet vatten i södra Sverige. Abborren är passiv på 8–15 meters djup. Fiska extremt långsamt med en mycket kort droppe (10–20 cm) och ge pauser på upp till 30 sekunder. Lake är aktiv kring lekplatser från januari och kan fiskas med dropshot på 3–10 meters djup vid sten- och grusbottnar.

## Regler och tillstånd

Fritt handredskapsfiske gäller längs hela kusten och i de fem stora sjöarna: Vänern, Vättern, Mälaren, Hjälmaren och Storsjön i Jämtland. I alla andra insjöar krävs fiskekort eller tillstånd från fiskerättsägaren.

Minimimått för gös är 45 cm i Vänern, Vättern, Mälaren och Hjälmaren med angränsande vattendrag, samt längs Östersjökusten. Det finns inget nationellt minimimått för abborre.

Gösfredning i Vänern gäller 25 april–25 maj i utpekade fredningsområden. I Byälvens fredningsområde är fredningstiden förlängd till första lördagen i juli klockan 12:00.

Kontrollera alltid aktuella regler på [svenskafiskeregler.se](https://www.svenskafiskeregler.se) eller hos respektive länsstyrelse.

## Vanliga misstag

- **Sänket är för lätt för djupet eller vinden.** Förlorad bottenkontakt innebär att presentationen inte fungerar. Använd alltid det lättaste sänke som ger tydlig bottenkänsla, men gå upp i vikt när vind, ström eller djup kräver det.
- **Sänket lyfts vid varje skakningsrörelse.** Hela poängen med dropshot är att sänket ska vila på botten medan bara betet rör sig. Skakningarna görs med handleden och toppen 1–3 cm, inte med armen.
- **Droppen är för lång vid trög fisk.** När abborren är kall och passiv söker den inte upp beten som sitter 50 cm ovanför nosen. Börja med 20–25 cm och förläng bara om inga hugg kommer.
- **Betet hänger inte horisontellt.** Om kroken sticks igenom betet på fel ställe, eller om Palomarknuten inte knöts med tagänden återförd ner genom kroköglan, kommer betet att hänga snett eller rotera. Kontrollera alltid i vattnet bredvid båten innan du fiskar.
- **Tafsen är för kort.** En tafs på under 50 cm gör att den synliga flätlinan hamnar för nära betet. Minst 60–80 cm fluorotafs, helst 100 cm i klart vatten.
- **Pausen hoppas över.** Presentationen snabbas upp för att täcka mer vatten. Dropshot är inte en sök-teknik utan en precision-teknik. Stanna länge på hittad fisk och ge pauser på 10–20 sekunder mellan skakningarna.
- **Monofil används som tafs i klart vatten.** Nylonlina är synligare än fluorocarbon och töjer sig vid mothugget. I klart vatten kostar det fisk.
- **Gösen fiskas upp från djupet för snabbt.** Gösens slutna simblåsa kan inte trycksutjämna. Dra upp fisken långsamt, speciellt från djup över 8 meter, för att minimera barotraumaskador vid återutsättning.

## Det de flesta inte vet

Dropshottekniken i sin moderna form utvecklades i Japan under 1990-talet som svar på extremt hårt fisketryck i landets tävlingsvatten. Japanska basstävlingar drog 600–800 båtar till relativt små sjöar, vilket tvingade fram finesse-tekniker som inte liknade något som användes i väst vid den tiden. Tekniken fördes till Kalifornien runt millennieskiftet och spred sig därifrån globalt.

Fluorocarbon-tafs är inte marknadsföring. Materialet (PVDF, polyvinylidenfluorid) har ett brytningsindex på ca 1,42, vilket ligger nära vattnets 1,33. Det jämförs med nylons 1,53, som avviker mer. I klart vatten, där abborre och gös har god sikt, gör den skillnaden sig påmind. Fluorocarbon är dessutom tyngre än vatten (densitet ca 1,78 g/cm³ mot nylons 1,14 g/cm³), vilket gör att tafsen sjunker och håller sig nära botten istället för att bilda en bågformad kurva uppåt mot ytan.

Tungstens densitet på 19,3 g/cm³ är nästan dubbelt så hög som blyets 11,35 g/cm³. I praktiken innebär det att ett tungstensänke i en given vikt är ungefär 41 procent mindre i volym än ett blysänke av samma vikt. Det mindre sänket fastnar mer sällan i botten och överför vibrationer mot sten tydligare genom linan, eftersom tungsten är hårdare och mer vibrationsledande än bly. Skillnaden i bottenkänsla är märkbar för de flesta fiskare som testar dem sida vid sida.

Abborre och gös rör sig vertikalt i vattenpelaren under dygnet, med uppåtrörelse i skymning och nedåtrörelse i dagsljus. Dropshot är en av de få tekniker där fiskaren kan justera betets exakta höjd över botten i centimetrar utan att byta rigg, genom att helt enkelt flytta sänkets klämma upp eller ner på tagänden. Det gör det möjligt att svara på var fisken faktiskt befinner sig, inte var man antar att den ska stå.
```

## src/content/techniques/flugfiske.mdx
```
---
title: "Flugfiske"
slug: "flugfiske"
description: "Flugfiske är en teknik där fluglina bär en lätt fluga till fisken. Guide till utrustning, tekniker, målarter, svenska vatten och hatchar för alla nivåer."
heroImage: "/images/techniques/flugfiske.jpg"
targetSpecies: ["öring", "harr", "lax", "gädda"]
topDestinations: ["morrum", "storsjon", "vanern"]
difficulty: "avancerad"
faq:
  - q: "Hur tungt flugspö ska en nybörjare börja med?"
    a: "Klass 5 är ett bra allroundval för nybörjare. Det täcker de flesta situationer med öring och harr i svenska vatten. Till gädda eller havsöring i vind behöver du klass 7–9."
  - q: "Vad är match the hatch?"
    a: "Match the hatch betyder att du väljer en fluga som liknar de insekter som kläcker på vattnet just då. Selektiv fisk som äter en specifik insekt tar sällan andra flugor."
  - q: "Behöver man licens för flugfiske i Sverige?"
    a: "I allmänt vatten (Vänern, Vättern, Mälaren, Hjälmaren och havet) krävs statligt fiskekort. I privata vatten och älvar krävs det aktuella fiskekortet från FVO. Reglerna varierar per vatten."
---

Flugfiske är en fisketeknik där en viktbärande fluglina bär en lätt, konstgjord fluga till fisken. Tvärtemot all annan fiskemetodik driver linans vikt kastet, inte betet. Den omvända logiken kräver ett nytt sätt att tänka på kastning och presentation, men belönar den som lär sig med ett av sportfiskets mest tekniska och tillfredsställande sysselsättningar.

## Utrustning

### Flugspö och AFTM-klasser

Spö väljs efter vatten och målart. Klassificeringssystemet kallas AFTM (Association of Fishing Tackle Manufacturers) och anger vikten på linans första 30 fot, markerat med #-tecken.

- **#2–#4:** Passar för små bäckar, harr och bäcköring. Ger delikata presentationer med smala loopar.
- **#5–#6:** Allroundklassen. Ett 9-fots #5-spö är klassisk nybörjarutrustning för strömmande vatten och sjöar.
- **#7–#8:** Passar för kustflugfiske efter havsöring, lättare gäddfiske och kast med större streamers.
- **#9–#10:** Används för gädda, lax med enhandsspö och saltvatten.
- **#11–#15:** Tunga tvåhandsspön (Spey-spön) för stora laxälvar som Mörrum och Klarälven.

Längden är oftast 9 fot, men 10–11 fot används för Euro nymphing och bättre räckvidd vid mending. Kortspön på 7,5–8,5 fot lämpar sig för trånga bäckar och delikat torrflugefiske på trånga vatten.

**Aktion** beskriver var spöt böjer sig: *slow/full action* (mjukt, hela spöt böjer), *medium* (förlåtande, bra för nybörjare) och *fast/tip action* (styvt, kraftfullt, bra mot vind men tekniskt krävande).

### Fluglina, backing och ledare

Fluglina finns i tre huvudprofiler:

- **WF (Weight Forward):** Vikten koncentrerad i de främsta 9–13 m. Lättkastad och vanligast. Rekommenderas till nybörjare och kustfiske.
- **DT (Double Taper):** Jämntjock med avsmalnande ändar. Delikata presentationer och bra för rollkast. Kan vändas när ena änden slits.
- **Shooting head:** Kompakt huvud monterat på tunn löplina. Ger maximal kastlängd, populärt för kust- och laxfiske.

Densiteten varierar: flytlina, intermediate (svävande/långsamt sjunkande) och sjunklina i klasser S1–S7.

Backing är flätad polyesterlina som spolas under fluglinan. Riktmärken: 50 m för enhandsfiske #4–6 efter öring, 100–150 m för havsöring och gädda, 200 m+ för lax.

Taperad ledare (leader) är 9–15 fot lång och avsmalnar från grov rot (~0,50 mm) till spetsen. Den yttersta delen kallas **tippet** och byts regelbundet. Tjocklek anges i X-systemet: 0X (~0,28 mm) för havsöring och gädda, 4X–5X för normal öring, 6X–7X (~0,10–0,12 mm) för selektiv harr på små torrflugor. Vid gäddfiske krävs bitskyddstafs av tjock fluorocarbon (0,60–0,80 mm) eller wire.

### Flugor

Flugor delas in i fyra huvudkategorier:

- **Torrflugor (dry flies):** Flyter på ytan och imiterar vuxna insekter. Klassiker: Adams, Klinkhammer, CDC Vulgata, Elk Hair Caddis, Rackelhanen.
- **Nymfer (nymphs):** Sjunkande, imiterar insektslarver. Pheasant Tail, Hare's Ear, Czech Nymph, Tungsten Jig, Perdigon.
- **Streamers:** Imiterar småfisk och kräftdjur. Woolly Bugger, Zonker, Muddler Minnow, räk- och tobismönster för kust.
- **Våtflugor (wet flies):** Fiskas precis under ytan. Watson's Fancy och Black Pennell är klassiker.

För gädda används stora baitfish-mönster på 10–25 cm och poppers. Laxflugor är en egen kategori: Sunray Shadow, Templedog och Snälda är välkända mönster.

### Övrig utrustning

- **Flugrulle:** Viktigast är ett mjukt och progressivt bromssystem (drag) vid fiske efter havsöring, lax och gädda. Large arbor-rullar tar in lina snabbare.
- **Vadare och vadarkängor:** Andningsbara stockingfoot-vadare med gummisulad vadarsko och dobbar rekommenderas i Sverige, delvis för att minska smittspridning av parasiter som *Gyrodactylus salaris*. Bälte ska alltid sitta åt.
- **Polariserade glasögon:** Nödvändigt, inte tillbehör. Amber/gul lins för mulet väder, grå/grön för sol. Skyddar ögonen och låter dig se fisk och strömstrukturer under ytan.
- **Övrigt:** Linkorg (stripping basket) vid kustfiske, vadarstav, gumminätshåv, avkrokare, flytmedel (floatant) och tippetring.

## Tekniker

**Överhandskast (overhead cast)** är grundkastet. Linan laddas fram och tillbaka i täta loopar över huvudet.

**Rullkast (roll cast)** används när det saknas utrymme bakom ryggen. Linan rullas ut framåt utan bakkast, oumbärlig i trånga vattendrag.

**Hauling (enkel/dubbel):** Aktiv linjefart med vänster hand under kastet. Ger längre kast och bryter vinden effektivt.

**Spey-kastning och underhandskastet** är tvåhandstekniker för stora älvar. Inkluderar single Spey, double Spey, snake roll och det svenska underhandskastet (utvecklat av Göran Andersson). Används på Mörrum, Klarälven och Indalsälven.

**Mending** är att efter landningen kasta en båge upp- eller nedströms i linan för att motverka att strömmen drar flugan onaturligt fort. En av de viktigaste teknikerna i strömmande vatten.

**Drag-free drift** innebär att flugan driver med strömmen i exakt samma hastighet som omgivande vatten. Det är målet vid torrfluge- och nymffiske efter selektiv öring och harr.

## Målarter

### Öring

Bäcköring och insjööring tas på torrflugor, nymfer och streamers i strömmande vattendrag. Havsöring fiskas längs Östersjökusten och i åmynningar, med toppförhållanden mars–maj och oktober–november när vattentemperaturen håller 4–12 °C.


[Läs mer om öring](/arter/oring/)

### Lax

Kräver tvåhandsspö, sjunkande tippet och stora streamers. I Vänern fiskas Gullspångslaxen med enhandsspö. Sedan 2025 är allt fritidsfiske efter lax i Östersjön i grunden förbjudet. En fettfeneklippt (odlad) lax per fiskare och dag får tas. Minimimått: 60 cm i Östersjön och insjöar.


[Läs mer om lax](/arter/lax/)

### Harr

Fiskas med små torrflugor (#14–#18) och nymfer i strömmande vatten. Fredad 15 april–31 maj i Norrbotten.


[Läs mer om harr](/arter/harr/)

### Gädda

Flugfiske efter gädda (pike fly fishing) växer kraftigt i Sverige. Kräver #8–#10 spö, bra dragsystem och 15–25 cm stora flugor. Sjöar och vikar med vegetationsrika strandkanter ger bäst resultat maj–juni och september.


[Läs mer om gädda](/arter/gadda/)

### Asp och övriga

Asp är spektakulär på streamers vid forsar och åmynningar, men fredad 1 april–31 maj i tillrinnande vatten till Vänern. Abborre och id är tillgängliga nybörjarmål på fluga. Röding tas med sjunkande linor och streamers i fjällsjöar och djupa insjöar.

## Svenska vatten

**Öring och lax i strömmande vatten:** Mörrumsån (lax och havsöring, säsong sista lördagen i mars till 30 september), Emån (havsöring och artrikt strömmande vatten) och Testeboån (havsöring, pågående restaurering).

**Havsöring längs kusten:** Gotland (~800 km kust, 50 cm minimimått), Ölands ostkust, Blekinges skärgård och Skånes kust är klassiska destinationer.

**Lax i älv:** Mörrum, Klarälven/Forshaga, Byskeälven, Vindelälven, Lögdeälven och Torneälven.

**Harr:** Indalsälven (Kvissleströmmarna), Storån i Dalarna och fjällälvar i Jämtland och Norrbotten.

## Insektshatchar och match the hatch

Insektsproduktionen styr när och var flugfisket fungerar. De viktigaste insektsgrupperna i svenska vatten:

- **Dagsländor (Ephemeroptera):** Baetis (åsländor) kläcker april–oktober. *Ephemera danica* och *Vulgata* (sjösandsländan) kläcker i juni i lugnare vatten och ger de mest spektakulära ytvakningen.
- **Nattsländor (Trichoptera):** Kläcker framför allt på kvällar och nätter sommaren igenom. Sedge-mönster och Elk Hair Caddis är standardlösningar.
- **Bäcksländor (Plecoptera):** Tidiga på säsongen, februari–april och igen på hösten. Gula forssländor centrala i norrländska älvar juli–augusti.
- **Fjädermyggor (Chironomidae):** Finns i alla vatten hela säsongen. Avgörande i sjöar morgon och kväll samt vid vinterfiske.

Kalkrika vatten producerar mer dagsländor och sötvattensräkor än sura skogsvatten med lågt pH. Det påverkar fisktäthet, flugval och vad som faktiskt kläcker lokalt.

Observera vad som kläcker: vänd på stenar, håva i ytan, titta på spindelnät vid vattnet. Matcha sedan storlek, färg och silhuett mot flugan.

## Att läsa vatten

Lär dig identifiera dessa strömstrukturer:

- **Pool (hölja):** Djupt lugnvatten. Stor fisk vilar här, framför allt under varma dagar och mitt på dagen.
- **Riffle (porla):** Grundt, syrerikt och rikt på insekter. Bra ätplats för öring och harr.
- **Run:** Jämn, djupare strömfåra mellan pool och riffle. Ofta toppläge.
- **Eddy/bakvatten:** Strömvirvel på lä-sida av stenar och stränder. Flytande mat samlas här.

På kusten gäller liknande logik: kantströmmar, bränningszoner, utlopp och tångbälten samlar havsöring.

## Säsong

**Vår (mars–maj):** Havsöring längs kusten och i åmynningar. Laxälvarnas säsong öppnar vanligtvis i mars–april. Bäcksländor och tidiga dagsländor kläcker.

**Sommar (juni–augusti):** Bästa hatchar för öring och harr i strömmande vatten. Insektsproduktionen är på topp. Gäddfiske på fluga fungerar bra i grunda vikar tidigt och sent på dygnet.

**Höst (september–november):** Havsöring åter längs kusten, oktober–november är toppperioden. Laxsäsongen avslutas. Stormar och höstregn höjer vattenståndet i älvarna.

**Vinter (december–februari):** Begränsat öppet vatten. Fjädermyggfiske i klart väder på sjöar med öppna mynningar. Kontrollera alltid aktuella fredningstider.

## Regler och tillstånd

I sjöar och vattendrag krävs fiskekort från fiskerättsägaren. Köp via lokala fiskevårdsområden, iFiske.se eller Sportfiskekortet. Undantag: fritt handredskapsfiske gäller i Vänern, Vättern, Mälaren, Hjälmaren och Storsjön samt längs hela kusten.

Kontrollera alltid aktuella regler hos Havs- och vattenmyndigheten och din Länsstyrelse. Regler för lax, öring och harr varierar per region och uppdateras regelbundet.

## Vanliga misstag

- Fel spövikt för uppgiften. Ett #5-set klarar inte stor havsöring. Samtidigt är ett #9 opraktiskt i en liten å.
- Slå framkastet för tidigt. Vänta tills linan är sträckt bakom dig.
- Glömma att menda. Flugan ser onaturlig ut och fisken ignorerar den.
- Vada rakt ut i fiskeplatsen. Fisken står ofta nära land, börja alltid från kant.
- Slita av fisken vid huggning på torrfluga. En mjuk lyft räcker.
- Ignorera fettfeneregeln och fredningstider. Kontrollera alltid lokala bestämmelser innan du fiskar.

## Det de flesta inte vet

Fluglina töjer sig inte som monofilament, men den absorberar vatten och blir tyngre under en lång fisketur. En sjunkande flytlina är ett av de vanligaste men minst diagnosticerade problemen hos flugfiskare. Avfetta och torka linan regelbundet med en linservett och den flyter igen.

Loopvinkel avgör mer än kastlängd. En tight loop klyver vinden och bär linan rakt. En bred loop kollapserar i motvind och sätter flugan i linan. Det är inte arm- utan handledskontroll som styr loopvinkeln.

Fisken ser dig oftare än du ser den. Öring och harr i klart strömmande vatten har ett synfält på nästan 300 grader och är extremt känsliga för rörelser ovanför vattenytan. Låg profil, långsamma rörelser och att fiska nerifrån och uppströms minskar skrämseln mer än något flugval.

Tippetlängd påverkar presentation lika mycket som flugan. För kort tippet gör att flugan drar i linan och ser onaturlig ut. Rätt längd (ofta 60–90 cm) låter flugan driva fritt. Vid selektiv fisk på platta pooler kan 120–150 cm tippet göra skillnaden.```

## src/content/techniques/isfiske.mdx
```
---
title: "Isfiske"
slug: "isfiske"
description: "Guide till isfiske i Sverige: utrustning, tekniker, målarter och de bästa vattnen. Från pimpel och balansare till ismete och vertikalpirk under isen."
heroImage: "/images/techniques/isfiske.jpg"
targetSpecies: ["abborre", "gös", "röding", "sik"]
topDestinations: ["malaren", "vanern", "vattern", "storsjon", "bolmen"]
difficulty: "nybörjare"
faq:
  - q: "Hur tjock is behöver man för att fiska säkert?"
    a: "Minst 10 cm bärig is för en person till fots. 15 cm för en grupp. Kontrollera alltid isen med ispik och var extra försiktig vid inlopp, utlopp och strömsatta områden."
  - q: "Vad är skillnaden på pimpel och mormyska?"
    a: "Pimpel är en tyngre metallpirk med inbyggd krok som används med aktiva rörelser. Mormyska är en liten jigg med separat krok som agnas med maggot eller mask och används mer passivt för blygsamma fiskar."
  - q: "Vilken fisk fiskar man under isen i Sverige?"
    a: "Abborre och gös är de vanligaste målarterna. Röding och sik fiskas i fjällsjöar. Gädda tar balansare och angeldon. Lake är aktiv under is och fiskas på ismete med hel betesfisk."
---

Isfiske är ett av landets mest tillgängliga fisken. Du behöver ingen båt, utrustningen är billig jämfört med spinn- och trollingfiske, och en handfull gram bly och en isborr räcker för att komma igång. Samtidigt är det det fiske där säkerhetsmarginalerna är minst. Den här guiden går igenom säkerhet, utrustning, teknik, målarter, klassiska svenska vatten, säsong och regler.

## Säkerhet på isen

Säkerhet är alltid första prioritet. Issäkerhetsrådets tumregel är att det ska finnas minst 10 cm sammanhängande kärnis innan du går ut. Cirka 5 cm bär en vuxen person, men marginalen är då obefintlig. För skoter krävs 15-20 cm, för bil 25-30 cm.

**Kärnis** (blå is, stålis) är genomskinlig till svagt blå, hård och uppstår vid frysning utan snö. **Snöis** (vit is, stöpis) bildas när snö blandas med vatten och fryser igen och har ungefär halva hållfastheten. Två lager kärnis med vatten emellan får aldrig räknas ihop som en tjocklek.

Kontrollera istjockleken kontinuerligt under förflyttningar. Svaga ställen att vara extra uppmärksam på: vass, råk, brygga, bro, udde, avlopp, utlopp, inlopp, sund och grund. Snödrivor isolerar isen underifrån och kan halvera tjockleken under en driva.

Varningssignaler är dunkande eller dovt ljud, mörka fläckar, gråvita stöpfläckar, sprickor som vandrar och vatten som tränger upp. I april blir isen pipig och tappar bärighet på timmar trots att den ser tjock ut.

**Obligatorisk utrustning:**

- Isdubbar runt halsen, utanpå kläderna
- Räddningslina på minst 15 meter
- Ispik
- Flytoverall eller flytväst
- Mobil i vattentätt fodral
- Torrt ombyte i vattentät påse

Faller du igenom: behåll lugnet, vänd dig mot det håll du kom från, få upp armarna på isen, ta fram dubbarna, sparka aktivt med benen och åla dig upp med en dubb i taget. Rulla eller kryp långt ut på bärig is innan du reser dig. Larma 112.

## Utrustning

### Isborr

Manuell handborr i 110-115 mm passar tävlingsfiske och pimpel efter abborre. 130-150 mm är allroundvalet för de flesta arter. 200-250 mm krävs vid ismete och angelfiske efter gädda och gös eftersom större fisk inte går upp genom ett mindre hål.

Litiumdrivna motorborrar och adaptrar för slagborrmaskinen har ersatt bensinborrar för de flesta. En kraftig borrchuck (18 V eller mer) med adapter borrar lika fort som en bensinborr genom 50 cm is utan att starta surt i kylan.

### Pimpelspö

Klassiska VM-spön på 30-50 cm med korkhandtag och löstagbar topp passar de flesta vertikalpirkfisken. Mormyskaspön har extra känslig topp för minimala rörelser. För grova pirkar, balansare och rödingblänken används längre och styvare modeller på 60-80 cm. Material är glasfiber eller komposit. Kolfiber är sprödare i kyla.

### Rulle och lina

Nylon är standard på is eftersom den klarar minusgrader bättre än fläta som suger upp vatten och stelnar. Riktlinjer:

- 0,16-0,20 mm för abborre
- 0,22-0,25 mm allround
- 0,28-0,32 mm för röding, regnbåge och större fisk
- 0,35-0,45 mm för ismete efter gädda och gös

Fluorkarbontafs på 15-30 cm vid rödingblänke och skygg fisk. Ståltafs eller kraftig fluor (0,55-0,70 mm) vid gäddfiske.

### Pimplar

- **Vertikalpirk (blänke):** hänger lodrätt, fiskas med ryck och pauser. Förstavalet för abborre.
- **Balanspirk:** hänger horisontellt, simmar ut åt sidan vid ryck och liknar en småfisk. Bra för storabborre, gös, regnbåge och röding.
- **Bladpirk (bladspinnare):** ger blink och vibration.
- **Tungstenpirk:** volfram är betydligt tyngre än bly i samma volym, sjunker snabbare och håller bättre kontakt på djupet.
- **Mormyska:** miniatyrpirk med fast krok som agnas med maggot eller fjädermygglarv. Fungerar bra för passiv fisk.

Färger: silver, koppar och guld är klassiker. Svart, glow och knallorange fungerar i grumligt vatten och mörker. Välj storlek efter djup, inte efter fiskens storlek: en tumregel är 1 gram per meter djup som minimum.

### Ekolod

Bärbara ekolod har förändrat isfisket. Vexilar och Marcum är klassiska flasher-modeller med realtidsvisning. Garmin Striker och Echomap ger 2D-ekolod och i vissa fall LiveScope. Deeper Pro+ och Chirp+ är trådlösa kastlod som fungerar i pimpelhål.

Lär dig läsa hård botten (tunn röd linje) mot mjuk botten (bredare gulgrön zon), se betet och tolka returer från fisk som rör sig in mot pimpeln.

### Kläder och övrig utrustning

Lager-på-lager: underställ i merino eller syntet, mellanlager i fleece, vind- och vattentätt ytterlager. En flotationsdräkt kombinerar flytväst och vinteroverall och är livförsäkring vid plurr.

Övrigt att ha med: skrylla eller sitthink, pulka eller spark för transport, isskopa (skimmer) för att rensa hålet från issörja, pimpeltält vid hårt väder, fisketång och krokavhakare.

## Tekniker

### Pimpelfiske

Bottensök alltid först: släpp ner pirken till botten, dra upp 5-20 cm och börja fiska. Klassisk rörelse är ett bestämt lyft 20-40 cm följt av kontrollerad sänkning och en paus på 3-10 sekunder. Hugget kommer oftast i pausen eller under sänkningen.

Variera rörelsemönstret: långa lyft, korta nervösa darrningar och helt stilla. Sätter du inte fisk på 10-15 minuter, borra nytt hål. Erfarna pimpelfiskare borrar 20-50 hål per dag. Föragna gärna med några maggots direkt i hålet.

### Ismete och angelfiske

Borra ett 200 mm hål, rigga ett paternostertackel eller fritt rinnande sänke, agna med en fiskbit eller död betesfisk för rovfisk eller mask och maggot för vitfisk. Levande betesfisk är förbjudet i Sverige. Frikoppla rullen och vänta på napp. Vid napp: ta upp lös lina, gör mothugget när linan stramar.

### Pilkfiske på havsis

På havsis i Bottenviken och norra Östersjön används tyngre pilkar (20-100 g) för strömming. Strömmingen tas på häckla med flera glittrande krokar som darras med korta ryck strax ovan botten. Observera att riktat torskfiske är förbjudet i hela Östersjön sedan 2025 -- fångad torsk ska omedelbart återutsättas.

### Läsa islandskapet

Studera djupkartor (Eniro sjökort, Navionics, iFiske) före turen. Fisk samlas vid kanter mellan grunt och djupt, vid uddar, sund, grynnor, vasskanter med hård botten utanför samt åmynningar och inlopp. Gädda och abborre står ofta på 2-6 meter i vikar tidigt och sent på säsongen och drar djupare under midvintern.

Stå inte kvar på samma hål utan fångst eller ekolodssignaler. Den som rör sig och provborrar fångar mest.

## Målarter

**Abborre** är nybörjarens bästa val. Står på 2-6 meter på för- och efterisen, 5-10 meter under midvintern. Söker hårdbotten, branter, grynnor och uddar. Aktiv abborre tar pirk i hårda ryck. Passiv abborre kräver mormyska med maggot eller mycket varsamma rörelser.
[Läs mer om abborre](/arter/abborre/)

**Gös** står djupare, 6-12 meter eller mer, vid mjukbotten med övergång till hårdbotten. Mest aktiv i skymning, gryning och natt. Mörka beten i svart, mörklila och kopparbrunt och balanspirk eller jiggpimpel fungerar bäst.
[Läs mer om gös](/arter/gos/)

**Röding** trivs i kallt syrerikt vatten. I fjällsjöar tas den tidigt på säsongen djupt, ofta vid grynnor och djupkanter på 15-30 meter, och drar grundare mot islossningen. Rödingblänke med tafs och agnad krok är klassiker.
[Läs mer om röding](/arter/roding/)

**Sik** går i stim. Fångas på små mormyskor och krok med maggot. Kräver tålamod och ofta många hålbyten för att hitta stimmet.

**Lake** är vinterns specialart och leker i januari-februari. Fiskas bäst i mörker med pirk eller paternoster och en bit fisk som bete. Lockskedar och rytmisk bottendunkning drar fram laken.

**Gädda** tas på ismete, angeldon eller stor pimpel och balansare. Tidigt och sent på isen på 0,3-2 meters djup i vikar. Använd alltid stålledare eller tjock fluortafs.
[Läs mer om gädda](/arter/gadda/)

**Strömming** fiskas på havsis i Bottenviken, framför allt utanför Norrbottens- och Västerbottenskusten. Riktat torskfiske i Östersjön är förbjudet sedan 2025.

## Svenska vatten

**Storsjön i Jämtland** håller röding, öring, sik, abborre, harr och lake. Fritt handredskapsfiske. **Siljan i Dalarna** är känd för storsik, abborre och röding. **Vänern och Vättern** fryser sällan helt men vikarna ger gös, abborre, gädda och i Vättern röding. **Hjälmaren** är klassiskt gös- och abborrevatten. **Mälaren** har gös, abborre, gädda och lake.

För röding och harr på fjällvatten gäller:

- **Funäsfjällen och Härjedalen:** Tänndalssjön, Häckelsjön, Hyddsjön och Messlingssjön. Västharjedalspasset täcker stora delar av området.
- **Mittådalen och Rogen-Lossen:** klassiska rödingsjöar i norra Härjedalen.
- **Idre och Särna:** Burusjön, Öresjön, Hällsjön och Näcksjön.
- **Krokoms kommun:** Bakvattnet, Rörvattnet, Åkersjön och Hotagen.
- **Norrbottensfjällen:** tusentals rödingsjöar med ofta opåverkade bestånd.

Havisis med bra isfiskeförhållanden finns normalt i Bottenviken utanför Luleå, Piteå, Skellefteå och Umeå från januari till april.

## Säsong

Isen lägger sig normalt i november på fjällvatten och nordliga insjöar, december-januari i Mellansverige. Bästa fiske är ofta sen säsong (mars-april) när dagarna blir längre och fisken börjar röra sig mot lekvandring. På fjällvatten är april-maj toppen för röding.

Islossning är farligast: solbelyst is i april blir pipig på dagen och kan brista plötsligt. Undvik isen vid plusgrader utan lokalkännedom.

## Regler och tillstånd

I de fem stora sjöarna (Vänern, Vättern, Mälaren, Hjälmaren, Storsjön) och längs hela kusten råder fritt handredskapsfiske. I övriga vatten krävs fiskekort från fiskerättsägaren. Köp via iFiske.se eller lokala återförsäljare.

Lakens fredningstid varierar mellan vatten och län. På Gotland är gädda och abborre fredade 1 mars-31 maj i kustvatten. Riktat torskfiske är förbjudet i hela Östersjön sedan 2025. Kontrollera alltid aktuella regler på svenskafiskeregler.se eller hos respektive fiskevårdsområde.

## Vanliga misstag

- Gå ut på okänd is utan att kontrollera tjockleken.
- Lämna isdubbarna i ryggsäcken i stället för runt halsen.
- Sitta för länge på samma hål utan fångst.
- Fiska för stor pimpel på grunt vatten eller för liten pirk på djupt vatten.
- Glömma agnet vid passiv fisk.
- Fiska utan ekolod på okänd sjö.
- Inte ha torrt ombyte med.
- Ge sig ut på is ensam.

## Det de flesta inte vet

Vintertid har djupa sjöar omvänd skiktning jämfört med sommaren: vatten närmast botten håller cirka 4 °C medan vatten direkt under isen är 0 °C. Fisken söker sig till det varmare bottenvattnet, vilket är en av anledningarna till att bottenfiske dominerar på vintern.

Tidigt på säsongen, innan syrehalten på djupet sjunkit, står fisken djupare. Sent på säsongen, när smältvatten tillför syre vid ytan, drar den grundare och kan stå direkt under iskanten.

Ny snö isolerar isen och gör att den fryser långsammare och kan tina underifrån vid milda perioder. En gammal isläggning med tjock snö kan vara svagare än en bar yngre is.

Bästa tiderna på dygnet varierar: abborre tar bäst 09-15 vid stigande lufttryck, gös och lake i skymning och natt, röding kring gryningen. Stigande lufttryck i klart väder är generellt bästa fiskevädret. Vid fallande tryck inför ett lågtryck tystnar fisken.

Lämna lite issörja kvar i hålet på grunt klart vatten. För mycket ljus skrämmer fisken. Pimpla aldrig utan att först lodda av djupet så du vet exakt var du har botten. Den som håller exakt djup längs en kant fångar betydligt mer än den som hoppar slumpmässigt.```

## src/content/techniques/jiggfiske.mdx
```
---
title: "Jiggfiske"
slug: "jiggfiske"
description: "Jiggfiske är den mest mångsidiga metoden för rovfiske i svenska vatten. Guide till utrustning, riggar, tekniker, målarter och de bästa svenska vattnen."
heroImage: "/images/techniques/jiggfiske.jpg"
targetSpecies: ["abborre", "gädda", "gös"]
topDestinations: ["vanern", "vattern", "malaren", "bolmen"]
difficulty: "nybörjare"
faq:
  - q: "Vilket jigghuvud ska man börja med?"
    a: "Börja med ett runt jigghuvud på 7–14 g i klart vatten, 14–21 g i grumligt eller vid stark ström. Anpassa vikten så betet sjunker lagom fort och du behåller bottenkontakt."
  - q: "Vad är skillnaden på jiggfiske och vertikalfiske?"
    a: "Jiggfiske innebär att du kastar och hämtar in betet horisontellt. Vertikalfiske presenterar betet lodrätt under båten på ett precisionsdjup. Vertikalfiske är mer effektivt för djupstående fisk."
  - q: "Kan man jiggfiska hela året?"
    a: "Ja. Jiggfiske fungerar hela året, även under is med vertikalpirk. Anpassa tekniken efter säsong: långsamma rörelser i kallt vatten, snabbare och aggressivare under sommaren."
---

Jiggfiske är den mest mångsidiga och kostnadseffektiva metoden för rovfiske i svenska vatten. En jigg består av ett gummibete monterat på ett blyhuvud med krok, och tekniken fungerar lika bra för småabborre i en grustäkt som för Vänergös på 15 meters djup. Den här guiden går igenom utrustning, tekniker, riggar, målarter, vatten, säsong och regler.

## Utrustning

### Kastspö

Spöets aktion och styrka avgör vad du kan fiska. Styrkan anges i klasserna L (light), ML (medium light), M (medium), MH (medium heavy) och H (heavy).

- **Abborre och finess:** 6,6–7,6 fot i klass L/ML, kastvikt 3–15 g eller 5–20 g. Snabb topaktion ger känslig napptolkning.
- **Gös och stor abborre:** 7–8 fot i klass M, kastvikt 7–28 g. En tredjedelsaktion med kraftig ryggrad gör att du krokar säkert på djupt vatten.
- **Gädda och kustfiske:** 8–9 fot i klass MH/H, kastvikt 20–60 g eller mer.
- **Vertikalfiske:** korta spön på 6–7 fot i finess- eller medelklass.

Moderate action (parabolisk böjning) finns i swimbait-spön och kastjiggspön där ett mjukare böj ger bättre kastlängd och hindrar fisken från att skaka av betet.

### Rullar

**Haspelrulle** är förstavalet för de flesta jiggfiskare. Storlek 1000–1500 till mikrojiggning, 2500 till abborr- och lättare gösfiske, 3000–4000 till gädda och kust.

**Multirulle (lågprofil)** ger bättre direktkontakt med betet, högre kastprecision och mer råstyrka. Passar Texas- och Carolina-rigg, tyngre kastjiggning och gäddfiske.

Växeltal (utväxling) anger hur många varv spolen gör per vevvarv. 5,2:1 är allround. 6,2:1 eller högre tar in lina snabbt och underlättar linhantering vid jigg-fall. Lägre utväxling ger mer råstyrka och passar tunga beten.

### Linor

Flätlina (PE/Dyneema) är standard för jiggfiske. Den töjer inte, ger maximal bottenkänsla och ett rappt mothugg.

- 0,08–0,10 mm (PE 0,4–0,6) för mikrojiggning och finess
- 0,12–0,15 mm (PE 0,8–1,0) för normal abborre och gös
- 0,17–0,20 mm (PE 1,2–1,5) för lätt gädda och allround kust
- 0,23–0,30 mm (PE 2,0–4,0) för gäddfiske med stora beten

**Tafs (ledare)** knyts mellan flätan och betet med FG-knut eller dubbelgrinner.

- **Fluorocarbon:** osynligt i vattnet och nötningståligt. 0,18–0,25 mm för abborre, 0,30–0,40 mm för gös. Längd 50–150 cm.
- **Stålwire eller titan:** krävs för gäddfiske. Alternativt kraftig fluortafs (0,55–0,70 mm).

### Jigghuvuden

Vikten ska matchas mot djup, ström och vind. En grov tumregel utan ström:

- 1–2 m: 3–5 g
- 3–5 m: 5–12 g
- 8–10 m: 12–20 g

I strömmande vatten eller hård vind kan du behöva fördubbla vikten för att behålla bottenkontakten.

Huvudtyper:

- **Rundkopp (round head):** allroundvalet. Hänger horisontellt och ger en jämn lift-and-drop-rörelse.
- **Football head:** bred och stabil, fastnar mindre i sten. Passar scraping på hårdbotten.
- **Dart head:** smal och pilformad. Ger en livligare sidledsrörelse vid ryck. Bra för vertikalfiske och pelagisk gös.
- **Ned head (mushroom head):** lätt platt huvud som låter betet stå rakt upp på botten. Används till Ned-rigg i finessfisket.
- **Stand-up head / shaky head:** håller betet upprätt med kroken pekande uppåt.

Krokstorlekar: #4 till 1/0 för 5–8 cm beten, 2/0–4/0 för 8–13 cm, 5/0–8/0 för 15 cm och uppåt.

### Gummibeten

- **Twister:** klassisk grislock-svans, ger livlig vibration även vid låg fart.
- **Paddle tail / shad:** fiskformad kropp med paddelsvans. Allroundbete för abborre, gös och gädda. 8–10 cm för abborre, 12–15 cm för gös, 18–25 cm för gädda.
- **Finessebeten:** smala maskliknande kroppar utan utpräglad svans. Lockar passiv fisk.
- **Kräftbete (craw):** imiterar kräftor, fungerar bra på abborre i kräftsjöar och på gös vid stenbottnar.
- **Creature bait:** hybrid med flikar och armar. Mycket rörelse, bra till Texas-rigg i tät struktur.
- **Tube bait:** ihåligt rörbete med tofs i bakänden.
- **Stickbait / senko:** rakt maskbete utan action, lever på sin sjunkrörelse vid wacky- och Neko-rigg.

### Hårdgjutna jiggar

- **Kastjigg (bucktail jig):** klassisk metalljigg med hår eller fjäder. Funkar på abborre, lax och torsk (torsk enbart i Västerhavet -- riktat torskfiske i Östersjön är förbjudet sedan 2025).
- **Chatterbait / blade jig:** jiggskalle med vibrerande metallblad. Skickar ut starka tryckvågor och fungerar utmärkt på stor abborre och gädda längs vasskanter.

## Riggar

- **Texas-rigg:** kulvikt löst på linan, offsetkrok inbäddad i betet. Helt vasskyddad, lämplig för pitching i tät vegetation och under bryggor.
- **Carolina-rigg:** tung kulvikt (10–30 g) ovanför ett lekare följt av 50–100 cm tafs och offsetkrok. Bra för att täcka stora ytor på öppen botten.
- **Drop shot:** sänket sitter längst ner, betet på en hookknut 20–60 cm ovanför. Betet hänger fritt. Avgörande för passiv abborre och gös.
- **Ned-rigg:** litet flytande finessebete på Ned-huvud (1,5–4 g). Betet står rakt upp på botten. Extremt effektivt på pressade vatten.
- **Neko-rigg:** wacky-monterat rakt bete med en tyngd i ena änden. Faller huvudet först och dansar på botten.
- **Wacky-rigg:** kroken stuckes genom mitten av en stickbait. Båda ändarna fladdrar i fallet. Bäst runt bryggor och grund struktur.
- **Weightless (oviktat):** offsetkrok utan vikt, betet sjunker långsamt. Bra för misstänksam abborre i klart vatten.
- **Swimbait-rigg:** stor paddle tail på tungt jigghuvud (15–60 g) som vevas in jämt.

## Tekniker

**Hoppa-och-sjunka (lift and drop)** är standardtekniken. Kasta ut, låt jiggen falla på spänd lina till botten. Lyft spöt 30–80 cm, veva in slacken under sänkning. Hugget kommer i 80 procent av fallen under sjunkningen eller vid bottenkontakten.

**Scraping (bottenbogsering):** skrapa jiggen jämnt över botten utan att lyfta. Football-head är gjord för detta. Lämpar sig på hårdbottnar för gös och stor abborre.

**Deadsticking:** kasta ut, låt jiggen ligga stilla. Endast minimala skakningar med spötoppen. Effektivt på passiv fisk i kallt vatten eller på pressade vatten.

**Pitching och flipping:** korta underhandskast med Texas-riggade beten in i tät struktur. Pitching ger mjuk ytträff, flipping täcker kortare distanser. Båda ger tyst presentation och säker krokning.

**Vertikalfiske från båt:** ankra eller driva över en struktur, släpp jiggen rakt ner till botten, lyft 10–30 cm och låt den falla tillbaka. Med ekolod håller du rätt över fisken.

**Swimbait-fiske:** jämn intagning på tungt jigghuvud så att paddeltailen arbetar konstant. Variera djup med countdown-metoden (räkna sjunktid innan intagning).

**Drop shot:** kasta ut, låt sänket landa, ta hem slack tills linan är spänd. Skaka spötoppen utan att flytta sänket. Effektivt på exakta huggpunkter.

**Variation:** kallt vatten kräver långsam rytm och långa pauser. Varmt vatten tål snabbare, aggressivare presentation. Om du fiskat 30 minuter utan napp: byt vikt, färg eller teknik.

## Målarter

**Abborre** står vid grynnor, stenrev, vasskanter, bryggor och bergskanter. Vår och höst i stim, sommar mer spridd. 8–10 cm shadjiggar är standard. Chatterbait längs grunda kanter vid solnedgång. Ned-rigg eller drop shot vid kallras.
[Läs mer om abborre](/arter/abborre/)

**Gädda** kräver alltid ledare. Stora paddle tails och shads i 18–25 cm i strömmingsfärger fungerar utmärkt i skärgården. Sök branter och djupkanter intill lekvikar på försommaren, djupare kanter på sommaren och hösten. Sjunkförloppet är ofta viktigare än inspinningen.
[Läs mer om gädda](/arter/gadda/)

**Gös** föredrar mörka eller naturliga färger i klart vatten, skarpa färger (grön, gul, orange) i grumligt. Står på djupkanter och bottenstrukturer. Nattfiske vår och höst på 5–10 m. Drop shot vid vertikalfiske slår ofta klassisk jiggning. Gösen jagar inte uppåt som gäddan.
[Läs mer om gös](/arter/gos/)

**Asp** slår ytligt jagande stim i strömmande vatten och i Vänerns och Mälarens öppna fjärdar. Bleak-imitationer i 8–14 cm, lätta jigghuvuden, snabb intagning. Kasta in i jaktbubblan direkt. Asp är klassad som nära hotad och ska släppas tillbaka skonsamt.
[Läs mer om asp](/arter/asp/)

**Öring och harr** kan tas på jigg i strömmande vatten med små shadar på 5–7 cm, kastade uppströms och drivna med strömmen. Kontrollera alltid lokala regler vid ädelfiskevatten.

**Havsfiske:** torsk, sej och bleka tar stora pirkar och paddle tails på 60–200 g i Västerhavet. Havsabborre fångas på 7–12 cm shadar runt klippor längs västkusten.

## Svenska vatten

- **Vänern:** Sveriges bästa aspvatten. Stora gäddor på branter, gös vid stenrev och utanför kanaler.
- **Vättern:** röding på 30–60 m vertikalt på sommaren. Gös på djupkanter i de södra delarna.
- **Mälaren:** klassiskt gösvatten. Stora abborrar i skärgården. Aspfiske vid Stockholms ström.
- **Hjälmaren:** grunt och produktivt med starkt gösbestånd, bra för kastjiggning på 4–8 m.
- **Motala ström, Göta älv, Klarälven:** strömmande vatten med asp, gös och öring beroende på sträcka.
- **Skärgårdar (Stockholm, Blekinge, Bohuslän):** gädda, abborre och havsabborre vid steniga grund, tångbottnar och rev. Torsk enbart i Bohuslän/Västerhavet -- torskfiske i Östersjön är förbjudet sedan 2025.

Generella platser värda att leta: steniga grund, vasskanter, djupkanter, bottentoppar, brostolpar, bryggor, sjunkna träd och näckrosfält.

## Säsong

**Vår:** vatten klart och vegetation låg. Fisken är slö, kör långsamt med små beten. Lekperioder: gädda mars–maj, gös april–juni, asp april–maj. Respektera fredningstider.

**Sommar:** termoklinen (språngskiktet) bildas på 5–10 m och separerar varmt ytvatten från kallare djupvatten. Rovfisken samlas vid eller strax ovanför skiktet. Aktivt ytfiske fungerar morgon och kväll.

**Höst:** vattnet kallnar, fisken äter aktivt inför vintern. Större beten och aggressivare presentation fungerar. Abborre koncentreras kring betesfiskstim.

**Vinter:** långsamma, bottennära presentationer. Drop shot, Ned-rigg och deadsticking är effektivast.

## Regler och tillstånd

- **Gädda:** fredning 1 mars–31 maj i Gotlands kustvatten, Kalmarsund och delar av Östersjökusten. Fönsteruttag 40–75 cm i stora delar av Östersjön.
- **Asp:** fiskeförbud 1 april–31 maj i alla vattendrag som mynnar i Vänern, Mälaren och Hjälmaren. Bör återutsättas.
- **Gös:** fredning 25 april–25 maj i fredningsområden i Vänern. Minimimått 45 cm i Vänern, Vättern, Mälaren och Östersjön.
- **Öring:** minimimått 50 cm i Östersjön, Vättern och Mälaren, 60 cm i Vänern.
- **Ål:** totalt fångstförbud.

Kontrollera alltid lokala regler på svenskafiskeregler.se eller via länsstyrelsens karttjänst.

## Vanliga misstag

- Tjock huvudlina som dödar känsla och kastlängd.
- För lätt jigg på djupt vatten, bottenkontakten försvinner.
- För tung jigg på grunt vatten, jiggen plöjer förbi fisken.
- Slack lina vid sjunk, hugget registreras aldrig.
- Monoton intagning utan vevstopp eller variation.
- Att ge upp efter fem kast utan att byta vikt, färg eller teknik.
- Ingen tafs vid gäddfiske.

## Det de flesta inte vet

**Färgval efter sikt:** klart vatten och sol kräver naturliga och transparenta färger. Mulet och grumligt vatten kräver kontrast: chartreuse, orange, svart eller röd-vit. Svart ger tydligast siluett underifrån mot ljus himmel och är ofta mer effektiv på kvällsfiske än vad de flesta tror.

**Fläta kontra mono:** flätan har ingen töjning, så bottenkänslan är flera gånger bättre. Vid 20 m lina förlorar mono cirka en halv meter på töjning, vilket ofta är skillnaden mellan krokad och tappad fisk.

**Jiggvikt mot ström:** matcha vikten mot strömmen och vinden, inte bara mot djupet. Vid stark ström kan ett 4 m grunt vatten kräva 14 g jigg för att hålla botten, medan stiltje på samma djup klarar 7 g. När du tappar bottenkänslan, gå upp i vikt direkt.

**Rörelseskillnader:** rundkopp ger horisontell, jämn pulserande gång. Dart head glider och slankar åt sidorna. Football head studsar stabilt över sten. Ned head låter betet pirra rakt upp på plats. Att förstå dessa skillnader gör att du väljer huvud efter önskat beteende, inte bara efter vikt.

**Termoklinen sommartid:** under juli och augusti håller sig fisken vid eller strax ovanför språngskiktet, eftersom syrebrist kan göra djupare vatten obeboeligt. Hitta skiktet på ekolodet och fiska 1–3 m grundare. Det förklarar varför fisken hugger på exakt samma djup på flera olika platser i samma sjö samma dag.

**Synlig flätlina:** fluorgul eller orange huvudlina i kombination med osynlig fluortafs låter dig se linrörelse vid hugg som du aldrig skulle känna i händerna, framför allt vid sjunkfasen.```

## src/content/techniques/mete.mdx
```
---
title: "Mete"
slug: "mete"
description: "Mete täcker allt från enkelt flötefiske till avancerad feeder- och matchteknik. Guide till utrustning, riggar, beten, målarter och de bästa svenska vattnen."
heroImage: "/images/techniques/mete.jpg"
targetSpecies: ["abborre", "gadda", "gos"]
topDestinations: ["malaren", "vanern", "bolmen"]
difficulty: "nybörjare"
faq:
  - q: "Vad är skillnaden på mete och flötefiske?"
    a: "Flötefiske är en typ av mete där betet presenteras på bestämt djup med ett flöte. Mete är ett bredare begrepp som inkluderar feeder, match och pågående utan flöte."
  - q: "Vilken lina ska man använda till mete?"
    a: "Huvudlina 0,16–0,20 mm monofil och tafs 0,10–0,14 mm beroende på art. Karp kräver starkare -- 0,25–0,35 mm. Fluorocarbon som tafs i klart vatten ger fler napp."
  - q: "Vilka beten fungerar bäst för vitfisk?"
    a: "Maggot (fluglarv) är det effektivaste universalbetet. Caster (puppa) är selektivt för större fisk. Majs och pellets fungerar bra för braxen och karp. Brödpunch är utmärkt för mört i kanaler."
---

Mete är troligen det äldsta sportfisket i Sverige och täcker ett brett spektrum – från ett enkelt teleflöte och daggmask vid en brygga till avancerad match- och feederteknik med hårrigs och pressat groundbait. Det som skiljer mete från spinnfiske och jiggfiske är presentationssättet: betet hänger still eller rör sig naturligt i vattenpelaren, och fisken hämtar det utan att behöva jaga. Det gör mete effektivt på arter som rör sig långsamt och selektivt, framför allt karpfiskar.

## Utrustning

### Spö

Spövalet avgör hela riggens skala och vilka tekniker som är möjliga. Det finns fem huvudkategorier.

**Teleflöte / pinnspö** är 3–8 m teleskopiskt, tillverkat i glasfiber eller karbon. Linan knyts direkt i toppringen och det finns ingen rulle. Enklast att börja med, billigast och bra för stillvatten på korta avstånd.

**Matchspö** är 11–14 fot (3,6–4,2 m), oftast 3-delat, med kastvikt 5–30 g och små spöringar med hög stege för fri linföring. Kombineras med en haspelrulle i storlek 2500–3500. Passar waggler-fiske i stillvatten och svagt rinnande vatten.

**Spagettispö (bolognese)** är 5–7 m, teleskopiskt med rullfäste och många tätt sittande ringar. Det italienska systemet passar stickfloat och Avon-rigg i måttlig ström. Ger mer kontroll och längre drift än ett matchspö.

**Feederspö** är 9–14 fot med utbytbara quivertips i olika styrka (0,5–4 oz). Nappet avläses på spötoppen. Kombineras med en haspelrulle i storlek 3000–5000. Rätt val för bottenmete med matekorg i sjöar och lugnare åar.

**Karpspö** är 10–13 fot med test curve 2,5–3,5 lb. Används för långa kast med tunga method-feeders, bomber och boilies. Kräver karprulle med baitrunner-funktion i storlek 5000–8000.

### Rulle

Matchfiske: haspelrulle 2500–3500 med djup matchspole för lång lina. Feederfiske: 3000–5000. Karpfiske: 5000–8000 med baitrunner. Bromsen ska vara mjuk och linjär. Kullagrad tväraxel är standard.

### Linor

Monofilament (nylon) är standardlina för mete. Grov tumregel:

- Löja, liten mört: 0,08–0,10 mm tafs, 0,12–0,14 mm huvudlina
- Mört och medelbraxen: 0,10–0,12 mm tafs, 0,14–0,18 mm
- Stor braxen, sutare, F1-karp: 0,14–0,17 mm tafs, 0,18–0,22 mm
- Karp och specimen: 0,25–0,40 mm + flätad hooklink 6–12 kg

Fluorocarbon används som tafs i klart vatten eller vid skygg fisk. Flätlina förekommer praktiskt taget bara inom karpfisket.

### Krokar

Krokskalan går bakvänt: högre nummer ger en mindre krok.

- Storlek 20–22: pinkie, squatt, brödpunch -- löja och vintermört
- Storlek 16–18: maggot, caster, små maskbitar -- mört och braxen
- Storlek 12–14: dubbel maggot, majs, hampa -- medelbraxen och sutare
- Storlek 8–10: hela maskar, räka -- stor braxen och mindre karp
- Storlek 4–6: boilies, stora pellets via hair rig -- karp

Vanliga mönster är Carbon Match (allround), wide gape (pellets) och curve shank (boilies).

### Flöten

**Waggler** är fastsatt bara i botten via en adapter och locking shots. Passar stillvatten. Insert-varianten har en smal antennspets och används dotted down så att bara 2–5 mm syns ovanför ytan.

**Stickfloat** fästs i toppen och botten med silikonslang och är anpassat för rinnande vatten med kontrollerad drift.

**Avon-flöte** har en stor kropp och smal stam, 2–6 g, och bär bra i medelström med tyngre beten.

**Pole float** är mini-flöten på 0,1–4 g för teleflöte och pole. Karbonstam för rörligt vatten, tråd-stam för stillvatten.

**Pellet waggler** är kort och kraftig för karp på fallet i grunda vatten.

**Klassiskt rödvitt bullflöte** ger hög synlighet men mycket motstånd, vilket gör att fisken spottar ut betet. Acceptabelt för barn och abborre, men inte för känsligare mete.

### Sänken

UK-systemet för split shot används i Sverige. Vikter i gram: SSG = 1,6, AAA = 0,8, BB = 0,4, No 4 = 0,2, No 6 = 0,1, No 8 = 0,06, No 10 = 0,04, No 12 = 0,02.

Olivetter (centerlinjsänken i mässing eller tungsten) i 0,4–4 g ersätter bulkshot på pole-riggar för snabbt fall. Stotz är cylinderformade alternativ i liknande vikter som inte skadar linan vid fastsättning.

## Riggar

**Waggler-rigg (stillvatten)** är grunden för matchfiske i sjöar. Flötet låses med locking shots (2 x AAA + 1 BB) direkt under adaptern. Mid-dropper no.6 och en eller två no.8 fördelade på de sista 60 cm av linan. Krok 16–20 direkt knuten eller via en hooklink på 0,10–0,12 mm. Plumba alltid djupet exakt och fiska 5–15 cm överdjup.

**Stickfloat-rigg (ström)** fästs i topp och botten med silikonslang. Sänkena sitter jämnt fördelade i ett "shirt button"-mönster med no.4–no.6. Håll spötoppen högt och bromsa flötet lätt vid slutet av driften – nappet kommer ofta när betet stannar och svänger upp.

**Pole-rigg (teleflöte och pole)** kombinerar ett litet pole float med en olivett eller bulk-sänken i no.8, ett par mikrodroppers no.10–no.12 och en kort hooklink på 10–15 cm i 0,08–0,12 mm med krok 18–22. Dotta ned antennen till att bara 1 cm syns.

**Bolognese-rigg** liknar stickfloat men används med rulle på spagettispö. Ger längre drift och mer räckvidd för ström- och älvfiske.

**Paternoster (bottenmete)** har en kort 8–15 cm sidobomull som bär feederkorgen eller blysänket, och en hooklink på 30–80 cm med kroken nedströms. Ger snabbt nappregister. Standardrigg för feeder i sjöar.

**Löpande ledger** har ett rörligt sänke eller bomb stoppat av en pärla, sedan en svivel och en hooklink. Används vid skygg fisk i klart vatten.

**Method feeder-rigg** är en flatram med blyfäste pressad full med våt groundbait runt en kort hooklink på 8–15 cm. Bolt rig-effekten gör att karpen krokar sig själv mot feederns vikt.

**Hair rig (karp och specimen)** har betet trätt på ett hår av 1,5–3 cm tafs som hänger från krokböjen. Kombineras nästan alltid med en bolt rig med fast eller semi-fast bly. Kevin Maddocks och Len Middleton publicerade tekniken 1981 efter att ha testat den i akvarium under slutet av 1970-talet.

## Tekniker

**Waggler-fiske** kräver att man plumbar djupet exakt med ett plummet innan första kastet. Mäska med katapult eller för hand tre till fyra maggots eller casters per minut direkt över flötets position. En liten lyfting av spötoppen och en lång paus ger fallet som mört och braxen reagerar på.

**Stickfloat-fiske** i ström kräver lite och ofta matning uppströms positionen. Flötet ska drifta i vattnets hastighet. En kontrollerad bromsning mot slutet provocerar hugg.

**Pole-mete** sätts exakt över mäskpunkten. En liten lift och drop-rörelse räcker för att aktivera mört och sutare. Elast-systemet i toppstycket absorberar kämpet så att tunna tafsar håller.

**Bottenmete med feeder** kräver en intensiv primingfas: kasta feederkorgen fullpackad tio till femton gånger på samma punkt för att lägga ett bädd av groundbait. Sedan en cast var femte minut för braxen, var minut på kommersiella anläggningar med aktiv karp. Quivertip-positionen ska vara 30–60 grader mot vattnet med halvspänd lina.

**PVA-fiske** levererar ett exakt betemängd intill kroken via en polyvinylalkohol-påse eller -strumpa som löses upp på botten. Fungerar oavsett kastlängd.

**Groundbait** ska blandas till rätt konsistens: för cage feeder bryts bollarna vid bottensläpp och ger ett lösande moln, för method feeder ska massan sitta klibbigt fast på ramen. Basreceptet för braxen är brown crumb blandat med fishmeal i ungefär lika delar, plus hackad hampa, krossade pellets och en skvätt melass. Mörkt färgad groundbait matchar botten bättre i klart vatten och stör inte skygg fisk lika mycket som ljusa blandningar.

## Att läsa vatten

Djupet är den viktigaste parametern vid mete och behöver mätas noggrant med ett plummet vid varje ny plats. Braxen och mört håller sig nära botten, ofta i svag depressioner eller längs djupkanter. Karpen söker sig till grundare partier med vegetation vid varmt väder och djupare vatten när temperaturen sjunker under 15 °C.

Strömstrukturen avgör riggvalet: rakt waggler i stillvatten, stickfloat längs med strömlinjer i ström, feeder utanför strömkanten på en lugn kant. Snubblar linan mot en sten eller en kvist är det ett tecken på att bottenprofilen är ojämn och att plumbet behöver tas om.

## Målarter

[**Abborre**](/arter/abborre) tar mask, maggot och kaster hela säsongen. Fiskar bäst på 2–6 m djup vid strukturer som bryggor, stenrösen och vassbälten. Krok 8–14, klassisk waggler-rigg med ett par maskar. Inget nationellt minimimått, men många FVO har lokala regler.

**Braxen** (*Abramis brama*) är den viktigaste mete-arten i de stora slättsjöarna. Den suger upp bottendjur med en utskjutbar mun och reagerar bra på groundbait-bäddar med feeder. Leker vid 12–17 °C i maj och juni. Krok 12–14 med majs eller en halv daggmask, hooklink 30–80 cm. Inget nationellt minimimått. Sportfiskerekord 8,7 kg (Rögle dammar 2022).

**Mört** (*Rutilus rutilus*) kräver den lättaste möjliga riggen: krok 18–22, tafs 0,08–0,10 mm, ett par maggots eller en caster. Groundbait ska vara söt och ljus i sommar och mörk och inert i kallt vatten. Mata lite och ofta.

**Löja** (*Alburnus alburnus*) håller sig i stimmen nära ytan och kräver ett mini-flöte på 0,2 g och krok 20–24. Fiska 10–30 cm under ytan med pinkie eller squatt.

**Karp** (*Cyprinus carpio*) leker vid 18–20 °C i maj och juli. Tyngre rigg med karpspö, 0,28–0,35 mm huvudlina, hair rig med 14–20 mm boilie och bolt rig. Fiska över en mäskbädd med boilies, pellets och hampa. Karpen ska nästan alltid återutsättas, även om ingen lag kräver det.

**Sutare**, **ruda** och **sarv** tas på liknande rigg som braxen, ofta nära vass och näckrosor under sommarhalvåret.

## Svenska vatten

**Mälaren** är Sveriges artrikaste sjö med 33 arter och ett naturligt val för mete. Ekoln norr om Uppsala och Västeråsfjärden ger bra braxen- och mört-fiske. Galten och Riddarfjärden är lättillgängliga utan båt. Fritt handredskapsfiske gäller. Se [Mälaren](/destinationer/malaren) för detaljer.

**Hjälmaren** (480 km²) är grund och näringsrik med en hög braxenbiomassa. SLU Aqua skattar den vuxna braxenbiomassan till 800–2 080 ton i sjön, vilket gör det till ett av de mest underutnyttjade metevattnena i landet. Bottenmete och feeder från båt ger stabil fångst.

**Vänern** har braxen och mört i de grunda skärgårdssvikarna utanför Mariestad och kring Lurö. Se [Vänern](/destinationer/vanern).

**Bolmen** (Småland/Halland, 185 km²) har bra braxen-, sutare- och ålfiske. Bolmens Fiskevårdsförening säljer kort.

**Åsnen** (Kronoberg) med Getnö Gård erbjuder naturvattenmete på 14 500 ha samt ett put-and-take-vatten vid Kålsjön med karp, sutare och ruda.

**Rögle dammar** utanför Lund är en kommersiell anläggning med fem dammar känd för ett av landets starkaste braxenbestånd och tillgänglighetsanpassade fiskeplatser. Braxenrekordet på 8,7 kg togs här 2022.

**Trosaån** och Nyköpingsån har historisk tävlingsmete-tradition. Det öppna TrosaMetet hålls varje Kristi himmelsfärds dag. Sportfiskarna återupptog SM i mete 2021 med tävling i Nyköping.

Kommersiella anläggningar med kontrollerade bestånd finns även vid Bondemölla (Skåne), Pärlan Strömhult (Halland), Eriksberg (Blekinge) och Slageryd (Småland).

## Säsong

**Vår (april–maj)** är perioden när braxen och stor mört rör sig mot lekvikarna. Braxen leker vid 12–17 °C, vilket i södra Sverige inträffar i maj. Asp är fredad 1 april till 31 maj i tillflödena till Mälaren, Vänern och Hjälmaren. Vattnet är klart och fisken är skygg: använd tunn tafs och spar på groundbaiten.

**Sommar (juni–augusti)** är högsäsong för karp, sutare och ruda. Varmt vatten ökar fiskens metabolism kraftigt: en braxen vid 22 °C behöver mer mat per dygn och äter mer aktivt än vid 10 °C. Mata mer och omcasta feedern tätare. De tidiga morgontimmarna och kvällen ger de bästa passen. Abborre håller sig på struktur.

**Höst (september–oktober)** innebär att braxen och stor mört rör sig djupare. Använd mörkare groundbait med lägre proteinhalt. Abborrhugg ökar. Plumba om djupet vid varje pass.

**Vinter (november–mars)** i isfria delar av Sydsverige: Skånes kommersiella dammar, kuststrand vid Mälaren. En handfull groundbait räcker per pass. Fisken äter sparsamt: pinkie, brödpunch och single maggot på krok 20. Fisken håller sig ofta djupare på vintern än under sommaren.

## Regler och tillstånd

Fritt handredskapsfiske med spö och krok gäller i Vänern, Vättern, Mälaren, Hjälmaren och Storsjön i Jämtland, samt längs havskusten. I alla andra vatten krävs fiskerättsägarens tillstånd, vanligtvis ett fiskekort via fiskevårdsområdet.

Nationella minimimått vid handredskapsfiske gäller bara för gädda, gös, öring, lax och torsk. Karpfiskar som braxen, mört, sutare, ruda och sarv saknar nationella minimimått och fredningstider. Gös har minimimått 45 cm i de fem stora sjöarna samt ett fönsteruttag 45–60 cm i Östersjön.

Ål är totalfredad för fritidsfiskare. Mal är fridlyst i hela Sverige. Asp är lekfredad 1 april till 31 maj i tillflöden till Mälaren, Vänern och Hjälmaren.

Lokala FVO-regler kan skärpa dessa regler och kräva återutsättning av karp, sätta minimimått för abborre eller förbjuda mete under specifika perioder.

Levande betesfisk är förbjudet i Sverige och ska aldrig användas.

Kontrollera alltid aktuella regler på [svenskafiskeregler.se](https://www.svenskafiskeregler.se) eller hos respektive länsstyrelse.

## Vanliga misstag

- **Fiskar för grunt.** Braxen och mört håller sig nära botten. Att inte plumba djupet med ett plummet gör att betet hänger 30–50 cm för högt.
- **För tung rigg.** Ett stort bullflöte med tunga locking shots ger motstånd som skygg fisk känner och spytter ut betet. Dotta ned wagglern till 2–5 mm synlig spets.
- **För stora krokar.** Krok 8 med en enda maggot täcker krokpunkten. Krok 16–20 är rätt storlek för maggot och caster.
- **För lite matning.** En enda mäskboll i sjön på morgonen räcker inte för att hålla braxen eller mört kvar. Liten och ofta slår alltid stort och sällan.
- **Slapp lina.** Inte ta slack av linan när flötet landat gör att nappet syns först när fisken redan har tagit och spottat ut betet.
- **Fel knut.** Improved clinch eller palomar är de enda säkra för krokknytning till tunn tafs. En halvknuten knut tappar 40–60 procent av linans brottgräns.
- **Ändrar inte djup vid väderomslag.** Braxen och mört rör sig djupare vid sjunkande lufttryck. Glömmer att plumba om kostar ett helt fiskepass.
- **Hoppar in med feeder direkt.** Utan priming av mäskbädden – tio till femton täta kast med full feeder i början – finns ingen anledning för fisken att söka sig till platsen.
- **Fel groundbait-konsistens.** Alltför lös massa exploderar i luften vid kastet och sprider sig tre meter från målet. Alltför kompakt ger ingen nedbrytning och inget moln vid botten.
- **Karp utan håv.** En karp på 3 kg kan inte ledas in med matchtackel utan en stor håv med mjukt gumminät. Att försöka lyfta den med spöet bryter antingen linan eller kroken.

## Det de flesta inte vet

Cypriniders matsmältningsmetabolism är starkt temperaturberoende. Forskning visar att matsmältningsenergikostnaden hos karp ökade med ca 49 procent när vattentemperaturen steg från 15 till 25 °C. Det innebär att samma mängd groundbait räcker mycket längre i kallt vatten och att presentationen behöver vara passivare och betesstorleken mindre i tidig vår och sen höst.

Braxenbeståndet i Hjälmaren är ett av Sveriges mest underfiskade sportfiskeresurser. SLU Aqua skattar den vuxna biomassan till 800–2 080 ton, med ett uttag från yrkesfisket på 66 ton 2023 – ungefär 3–8 procent. Sportfisketrycket är försumbart i relation till beståndet.

Färgen på groundbaiten är inte dekorativ. Mört och braxen har mörk rygg och ljus buk för att smälta in mot sin omgivning. En ljus, söt groundbait i klart vatten skapar en synlig fläck på botten som skygg fisk undviker. Mörk och inert groundbait matchar botten och håller fisken kvar.

Hair rig-tekniken testades ursprungligen i ett hemmaakvarium. Kevin Maddocks och Len Middleton separerade betet från krokskaftet med ett "hår" av lina för att kroken skulle kunna röra sig fritt i karpens mun. Tekniken publicerades 1981 och är i dag standard på all karp- och specimen-mete.

Sportfiskarna hade rekordmånga medlemmar 2025, över 75 000 anslutna i 467 föreningar. Det är en direkt effekt av ökade krav på fiskekort och fiskevårdsarbete och visar att intresset för organiserat mete och sportfiske generellt är på uppgång i Sverige.
```

## src/content/techniques/spinnfiske.mdx
```
---
title: "Spinnfiske"
slug: "spinnfiske"
description: "Guide till spinnfiske i Sverige: utrustning, tekniker, säsong och regler. För abborre, gädda, gös, öring och harr i sjöar, älvar och kustvatten."
heroImage: "/images/techniques/spinnfiske.jpg"
targetSpecies: ["abborre", "gadda", "gos", "oring", "harr"]
topDestinations: ["vanern", "vattern", "malaren", "morrum", "bolmen"]
difficulty: "nybörjare"
faq:
  - q: "Vilken kastvikt ska man välja för spinnfiske?"
    a: "Välj spö med kastvikt som matchar dina beten. 5–25 g för lätt spinnfiske efter abborre och öring. 15–60 g för allround gädda. 40–120 g för tunga beten och kastning i motvind."
  - q: "Vad är stop-and-go-tekniken?"
    a: "Stop-and-go innebär att du varvar invevning med pauser. Under pausen sjunker betet och rovfisken slår ofta till just då. Tekniken är särskilt effektiv vid kallt vatten när fisken är trög."
  - q: "Behöver man stållina vid spinnfiske efter gädda?"
    a: "Ja. Gäddans tänder klipper av nylonlina och fluorocarbon på sekunder. Använd alltid stålledare eller tjock fluorocarbontafs på minst 0,60 mm vid spinnfiske efter gädda."
---

Spinnfiske innebär att du kastar ut ett konstgjort bete och vevar hem det så att rörelsen lockar rovfisk till hugg. Det som skiljer spinnfiske från till exempel mete eller trolling är att fiskaren själv ger betet liv genom hämtningen, samtidigt som metoden låter dig täcka stora ytor från land eller båt. Tekniken är grunden i svenskt sportfiske och är samtidigt den enklaste vägen in i fisket efter abborre, gädda, gös, öring och harr.

## Utrustning

### Spö

Spinnspön klassificeras efter kastvikt och aktion. Kastvikten anges i gram och berättar vilket viktintervall som spöt laddar och kastar bäst. Aktionen beskriver var spöt böjer sig. Ett spö med snabb aktion böjer främst i toppen och ger bra kontakt vid jiggfiske, medan ett spö med medelaktion böjer längre ner och förlåter mer vid kast med wobblers och spinnare.

Riktlinjer per fiske:

- Ultralätt (UL) abborrfiske: 1,80–2,40 m, kastvikt 1–7 g.
- Allroundspö för abborre och mindre gös: 2,10–2,40 m, kastvikt 5–25 g.
- Gädda och tyngre gösjigg: 2,40–2,70 m, kastvikt 20–60 g.
- Storgädda med stora jiggar och jerkbaits: 2,40–2,70 m, kastvikt 60–150 g.

Klingor i kolfiber är standard. Korkhandtag ger bättre känsla i kallt väder än EVA-skum.

[Utrustningsguide för spinnfiskespön](/utrustning/spinnfiskespon)

### Rulle

Haspelrullen är den vanligaste rullen för spinnfiske och fungerar bra för i stort sett allt kastfiske. Storleken anges oftast i tusental. 1000–2500 passar ultralätt och abborre, 3000–4000 passar allround och gös, 4000–6000 passar gäddfiske med tyngre beten. Bromsen bör vara jämn och linkapaciteten anpassad till linans diameter.

Multirullar med lågprofil används mest av erfarna fiskare som kastar tunga beten efter gädda och gös. Multirullen ger bättre kraftöverföring men kräver mer kastteknik och passar inte de lättaste betena.

### Lina

Tre lintyper dominerar:

- **Flätlina** består av flera fibertrådar och har nästan ingen töjning. Den är stark i förhållande till sin diameter och ger maximal känsla vid jiggfiske och hugg på djupt vatten. Den är dock synlig i vattnet och tål nötning sämre än monofilament.
- **Nylon (monofilament)** är klassisk, har viss töjning och tål nötning. Lämplig för wobbler- och spinnaresfiske där dämpningen i linan skyddar mot avhugg vid hårda mothugg.
- **Fluorocarbon** är nästan osynlig i vattnet, sjunker fortare än nylon och har hög nötningstålighet. Används främst som tafs mot vassa tänder och i klart vatten.

Riktlinjer för flätlinans diameter:

- Abborre och ädelfisk: 0,08–0,13 mm.
- Gös och tyngre abborre: 0,13–0,18 mm.
- Gädda: 0,20–0,30 mm.

Vid gäddfiske krävs alltid en tafs av fluorocarbon på minst 0,60 mm eller stål, eftersom gäddans tänder klipper av flätlina och tunn fluorocarbon direkt.

### Beten

**Spinnare** består av ett trådskaft med ett roterande blad som ger blink och vibration. Bladets form styr egenskaperna. Ett Colorado-blad är runt och brett, roterar i bred vinkel och ger kraftig vibration, vilket fungerar bra i grumligt vatten och vid långsam hämtning. Ett willow-blad är långt och smalt, roterar tätt mot skaftet och ger mer blink än vibration, vilket passar i klart vatten och vid snabb hämtning. Aglia-bladet (Mepps standard) ligger däremellan. Storlek 1–3 passar abborre och öring i bäckar, storlek 4–5 passar större öring och gädda.

**Skeddrag** är böjda metallskedar som vaggar och blinkar genom vattnet. Långsmala skeddrag imiterar snabbsimmande betesfisk och passar att vevas hem snabbt eller med varierande tempo. Breda skeddrag har en mer trög vaggning som imiterar en skadad fisk och passar långsammare hämtning. Vikter på 7–18 g är allroundval för abborre, gädda och öring.

**Wobblers** är plastbeten med en sked (lip) framtill som ger dem dykegenskaper och rörelse. De finns som flytande, svävande (suspending) och sjunkande. Skedens storlek och vinkel avgör hur djupt wobblern går. En grunddykande wobbler arbetar 0–2 meter, en djupdykare 3–6 meter. Wobblers täcker olika djup utan att fiskaren behöver byta bete och passar både spinnfiske och trolling.

**Gummibeten (jiggar)** är mjuka beten av PVC eller silikon som monteras på en jiggskalle av bly eller tungsten. Paddelsvansar (shads) ger vibration och passar i grumligt vatten och bottenfiske efter gös och abborre. Curly tails (enkelsvans) ger flexibel rörelse även vid låg fart. Twin tails (dubbelsvans) fungerar bra till lekande gös. Storlek 5–10 cm passar abborre, 9–15 cm passar gös, 15–25 cm passar gädda. Jiggskallens vikt avgör fallhastigheten och bör matchas mot djup och ström.

## Tekniker

**Jämn invevning** är grundtekniken. Du vevar in betet i konstant tempo direkt efter nedslaget. Tempot avgör djupet vid wobblers och spinnare, och styr aktiviteten vid skeddrag. Jämn hämtning fungerar bäst när fisken är aktiv och jagar, alltså sommar och tidig höst för abborre och gädda, samt under ljusa timmar i klart vatten.

**Stop-and-go** innebär att du varvar invevning med pauser. Under pausen sjunker betet och rovfisken slår ofta till just då. Tekniken fungerar för wobblers (särskilt svävande modeller) och för jiggar längs botten. Den är överlägsen vid kallt vatten under vår och sen höst när fisken är trög och inte vill följa ett bete länge.

**Twitching** innebär korta, skarpa knyckar med spötoppen mellan vevtag. Twitching ger wobblern en ryckig, oförutsägbar rörelse som imiterar en skadad fisk. Tekniken är effektiv på gädda och abborre vid normal till låg aktivitet och fungerar utmärkt med suspending-wobblers, som står stilla under pausen.

**Rullande hämtning för spinnare** kräver att spinnaren rör sig tillräckligt fort för att bladet ska rotera. Börja veva direkt vid nedslaget, eftersom en spinnare som sjunker rakt ner sällan ger fisk. Variera tempot med vevstopp där du sänker spötoppen så att spinnaren sjunker två till tre sekunder innan du vevar igen.

**Djupvariation** är en separat dimension. Räkna ner ett sjunkande bete från det slår i vattnet. En lätt jigg på fri lina sjunker enligt branschens tumregel cirka 30 cm per sekund. Använd flytande wobblers över vegetation, sjunkande wobblers över djupbranter och jiggar för bottenfiske. På sommaren när termoklinen lägger sig på 5–10 meters djup står gösen ofta strax över skiktet och du behöver fiska precis där.

Vattentemperaturen styr valet. Under 8 grader är fisken trög och föredrar långsamma presentationer och vevstopp. Vid 12–18 grader är de flesta arter aktiva och både snabb hämtning och stop-and-go fungerar. Över 20 grader söker abborre och gädda djupare, svalare vatten under dygnets mitt och fisket koncentreras till morgon och kväll.

## Att läsa vatten

I svenska insjöar håller rovfisken sig till strukturer. Vegetationsbranter där natebäddar eller vass möter öppet vatten är gäddans favoritplats för bakhåll. Stenrev och uppstickande grynnor samlar abborre, särskilt på sensommaren och hösten när stimmen jagar småfisk i ytan. Djupbranter där botten faller från 3 till 8 meter är klassiska gösplatser, eftersom gösen följer kanten och söker föda i halvljus.

Strömkanter och tilloppsmynningar samlar fisk året om. Där sötvatten möter sjö eller hav uppstår ofta en strömkant där betesfisk samlas och rovfisken passar på. I åar och älvar ska du fiska bakvatten bakom stenar, höljor under överhängande träd och övergångarna mellan fors och sel.

Temperaturskiktning är central under sommaren. I djupare sjöar bildas en termoklin på 5–10 meters djup där varmt ytvatten möter kallare bottenvatten. Syrehalten är ofta låg under skiktet och rovfisken jagar antingen ovanför eller precis i skiktet. Ett ekolod hjälper dig hitta termoklinen, men du kan också anpassa fiskedjupet löpande under dagen.

Längs Östersjökusten är skärgårdarnas grunda vikar gäddans lek- och uppväxtområden. Abborren håller sig till stenbottnar och bryggor under sommaren och samlas i större stim på 5–10 meter under hösten. Havsöring jagar längs stenstränder och rev där tång och tare ger mat åt tånglöss och småfisk.

## Målarter

**Abborren** är Sveriges vanligaste rovfisk och finns i nästan alla sjöar och hela Östersjökusten. Den trivs vid 15–20 grader och leker när vattnet når 7–8 grader, oftast i april och maj. Stora abborrar håller stim på 5–10 meters djup under hösten, medan småfisk jagar närmare ytan. Spinnfiske med små jiggar (5–8 cm) eller spinnare i storlek 1–3 är överlägset. Det finns inget generellt minimimått för abborre i de flesta vatten, men fredningstider gäller på Gotland, runt Öland och i Kalmarsund från 1 mars till 31 maj.
[Läs mer om abborre](/arter/abborre/)

**Gäddan** finns i hela landet, från grunda vassvikar till djupa fjällvatten. Den jagar från bakhåll i vegetation och kantområden och slår till med snabb acceleration. Stora wobblers, gummibeten på 15–25 cm och jerkbaits är standardbeten. På Östersjökusten är minimimåttet 40 cm och maximimåttet 75 cm, med fångstbegränsning tre gäddor per fiskare och dygn. Tafs av fluorocarbon (0,60 mm eller grövre) eller stål är obligatoriskt.

[Läs mer om gädda](/arter/gadda)
[Läs mer om gädda](/arter/gadda/)

**Gösen** finns i Mälaren, Hjälmaren, Vänern, södra Östersjöns skärgårdar och flera större näringsrika sjöar. Den föredrar grumligt vatten där dess stora ögon ger den övertag, och jagar främst i gryning, skymning och natt. Jigg på 9–15 cm med skalle på 7–25 g är standard. Minimimått 45 cm gäller i Vänern, Vättern, Mälaren, Hjälmaren och i Östersjön, med fönsteruttag 45–60 cm vid handredskap i Östersjön.
[Läs mer om gös](/arter/gos/)

**Öringen** finns som insjööring i klara, kalla sjöar, som havsöring längs hela kusten, och som bäcköring i strömmande vatten. Den jagar aktivt och tar små skeddrag (7–15 g), spinnare (storlek 2–3) och små wobblers. Minimimåttet är 60 cm i Vänern, 50 cm i Vättern och Mälaren, 45 cm i Storsjön och 50 cm för havsöring längs Östersjökusten. Fredningstid gäller under höstleken, vanligen 15 september till 31 december längs delar av kusten och i tillflöden.
[Läs mer om öring](/arter/oring/)

**Harren** är en strömlevande laxfisk som lever i norrländska älvar samt i Vätterns tillflöden och Klarälvens system. Den hugger på små spinnare (storlek 1–2), miniskeddrag och små wobblers. Minimimåttet är 35 cm i vattendrag som mynnar i Norr- och Västerbottens län. Fredningstid 15 april till 31 maj gäller i samma område.

[Läs mer om harr](/arter/harr/)
## Svenska vatten

**Vänern** är Europas tredje största sjö med en yta på 5 450 kvadratkilometer. Här finns starka bestånd av gädda, gös och abborre samt insjööring och Vänerlax. Spinnfiske från båt eller klippiga uddar längs Värmlandsnäs och Kållandsö ger ofta resultat. Fritt handredskapsfiske gäller.

**Vättern** är klar, djup och kall med ett unikt bestånd av röding, insjööring och harr i tillflödena. Spinnfiske efter abborre och gädda från strand fungerar längs hela kusten, särskilt på våren. Fritt handredskapsfiske gäller.

**Mälaren** är näringsrik och håller landets bästa gösbestånd samt grov gädda och stora abborrstim. Trosa skärgård och anslutande mälarvikar är välkända för gösfiske med jigg. Fritt handredskapsfiske gäller.

**Hjälmaren** är en grund, näringsrik sjö med starkt gösbestånd och välkänd för stora abborrar. Fritt handredskapsfiske gäller.

**Östersjöns skärgårdar** från Blekinge till Norrbotten erbjuder fritt handredskapsfiske. Stockholms skärgård är klassiker för gäddfiske i grunda vikar på våren och hösten. Sankt Anna och Gryts skärgård i Östergötland samt Smålandskusten håller starka abborrbestånd. Var uppmärksam på lokala fredningsområden, särskilt för vårlekande gädda och abborre.

**Norrlands älvar** som Vindelälven, Pite älv, Kalix älv och Vojmån är nationalälvar eller outbyggda vattensystem med starka bestånd av harr och öring. Vindelälven består till stor del av stryk och sel där spinnfiske med små spinnare och skeddrag fungerar bäst i juli–september. Lokala fiskevårdsområden säljer fiskekort.

## Säsong

**Vår** börjar med kallt vatten under 8 grader där fisken är trög. Gäddan leker vid 4–8 grader i mars–april och hittar du den i nära anslutning till lekvikar precis innan eller efter leken är chansen stor för storfisk. Abborren leker vid 7–8 grader strax efter gäddan. Långsamma presentationer, stop-and-go och tunga jiggar längs botten ger flest hugg. Var medveten om att gädda och abborre har lekfredning på flera kuststräckor från 1 mars till 31 maj.

**Sommar** ger varmt vatten och hög aktivitet. När ytvattnet överstiger 18 grader söker sig stor abborre och gädda till djupare, svalare vatten under dagen. Fisket koncentreras till tidig morgon och kväll på grunt vatten. Gösen är på topp och jagar pelagiskt i skymningen. Snabbare tempo fungerar bra, men termoklinen begränsar fisket i djupare sjöar och du måste anpassa djupet löpande. Harrfisket i norra Sverige är som bäst från midsommar till sensommar.

**Höst** är den absoluta huggsäsongen för abborre, gädda och gös. När vattnet sjunker under 15 grader samlas abborren i stora stim och jagar småfisk inför vintern. Stimmen är ofta synliga som vakande fisk på ytan eller via sjöfågel som följer dem. Gäddan äter upp sig och hugger aggressivt på stora beten. Hösten är också tid för fiskvandring där havsöring stiger upp i åar för lek, men då gäller fredning i de flesta tillflöden.

**Vinter** innebär isläggning över stora delar av landet, vilket avbryter spinnfisket på sjöarna. På isfria kuster och i åar som inte fryser fortsätter dock fisket. Gädda fångas i strömmande åar mitt i vintern, ofta vid lugnvatten och i krökar. Vatten under 4 grader kräver mycket långsamma presentationer och tunga jiggar med långa vevstopp. På Vänern och Mälaren bedrivs spinnfiske från båt under isfria perioder.

## Regler och tillstånd

Längs kusten och i de fem stora sjöarna (Vänern, Vättern, Mälaren, Hjälmaren och Storsjön i Jämtland) råder fritt handredskapsfiske. Du behöver inte fiskekort för att spinnfiska där, men du måste följa minimimått, fredningstider och fredningsområden.

I alla andra sjöar och vattendrag krävs fiskekort eller tillstånd från fiskerättsägaren. Fiskekort köps via lokala fiskevårdsområdesföreningar, ifiske.se eller fiskekortet.se.

De viktigaste artspecifika reglerna:

- **Gädda kusten:** minimimått 40 cm, maximimått 75 cm, max tre gäddor per fiskare och dygn (sammanlagt med gös söder om Västernorrland–Västerbottens länsgräns).
- **Gös:** minimimått 45 cm i Vänern, Vättern, Mälaren, Hjälmaren och hela Östersjön. Fönsteruttag 45–60 cm vid handredskap i Östersjön.
- **Öring:** 60 cm i Vänern, 50 cm i Vättern och Mälaren, 45 cm i Storsjön. 50 cm för havsöring i Östersjön, 45 cm på västkusten.
- **Harr:** 35 cm i vattendrag som mynnar i Norr- och Västerbotten. Fredning 15 april–31 maj.
- **Abborre:** inget generellt minimimått. Fredningstid 1 mars–31 maj på Gotland, runt Öland och i Kalmarsund.

Riktat torskfiske i Östersjön är förbjudet sedan 2025. Laxfiske i Östersjön är i grunden förbjudet sedan 2025. Vid fritidsfiske får du behålla högst en fettfeneklippt lax per fiskare och dag. Vild lax ska omedelbart återutsättas.

Kontrollera alltid aktuella regler på [svenskafiskeregler.se](https://www.svenskafiskeregler.se) eller hos respektive länsstyrelse.

## Vanliga misstag

- Du fiskar för fort i kallt vatten. Under 10 grader hinner fisken inte med ett bete som vevas in i sommartempo.
- Du fiskar samma plats för länge utan att täcka vatten. Spinnfiske bygger på rörelse, både hos betet och hos fiskaren.
- Du använder för grov tafs i klart vatten och för fin tafs när gäddor finns i vattnet. Många fiskare tappar storgädda vid abborrfiske med 0,25 mm fluorocarbon.
- Du gör inte mothugg eller gör det för svagt. Gösens hårda mun och vassa jiggkrokar kräver ett bestämt, sträckt mothugg.
- Du knyter knutar utan att fukta linan. En knut som dragits åt torr kan tappa upp till halva sin brottstyrka på grund av friktionsvärme.
- Du fiskar bara mitt på dagen. Abborre, gädda och gös är mest aktiva i gryning och skymning under hela året utom vintern.
- Du nonchalerar termoklinen sommartid och fiskar för djupt. Fisken står i eller strax ovanför skiktet, inte under.
- Du byter inte bete eller färg när det inte hugger. Färgen är ingen exakt vetenskap, men det är en av de snabbaste justeringarna att göra.
- Du fiskar med slack lina vid jiggfiske. Hugget kommer ofta när jiggen sjunker och en slak lina döljer både bett och bottenkontakt.
- Du återutsätter fisk slarvigt. Torra händer, lång luftexponering och hård krokavtagning skadar slemskiktet och ökar dödligheten.

## Det de flesta inte vet

Fiskens sidolinje känner vattenrörelser och tryckförändringar på nära håll. Forskning har visat att rovfisk i mörker kan följa hydrodynamiska virvelspår efter byten på avstånd upp till 55 kroppslängder. Det förklarar varför vibration från ett spinnarblad eller en paddelsvans fungerar även när fisken inte ser betet. I grumligt eller mörkt vatten är vibrationen ofta viktigare än utseendet.

Färgen på betet förändras drastiskt med djupet. Rött ljus absorberas i de översta metrarna och når i praktiken inte fisken på 8 meters djup. Det betyder att den röda paddeln på din jigg ser mörkgrå eller svart ut för gösen. Blå och svarta beten behåller sin kontrast längst ner. I humusbruna svenska insjöar minskar synavståndet kraftigt redan på någon meters djup, vilket gör kontrast viktigare än exakt nyans.

Jiggens fallhastighet är en av de viktigaste faktorerna och samtidigt en av de minst diskuterade. En lätt jigg (1–3 g) på tunn fri lina sjunker ungefär 30 cm per sekund. En tung jigg sjunker fortare. Linans diameter, vattenströmmen och jiggkroppens form påverkar också. Att räkna ner betet medvetet ger dig kontroll över vilket djup du fiskar och låter dig systematiskt söka efter rätt skikt. De flesta hugg på jigg kommer just under fallet, inte under invevningen.

Bladets form på en spinnare avgör vilken signal den ger i vattnet. Ett brett Colorado-blad förflyttar mycket vatten och ger kraftig vibration, vilket triggar fisk via sidolinjen på avstånd. Ett smalt willow-blad ger mer blink än vibration och passar i klart vatten där fisken jagar med syn. Bladets rotation kring skaftet skapar också mikrobubblor som reflekterar ljus, vilket ger spinnaren en synlighet som ett skeddrag saknar.```

## src/content/techniques/trolling.mdx
```
---
title: "Trolling"
slug: "trolling"
description: "Trolling efter lax, röding och öring i svenska storsjöar. Guide till utrustning, downrigger, djupkontroll och aktuella fiskeregler för Vänern och Vättern."
heroImage: "/images/techniques/trolling.jpg"
targetSpecies: ["lax", "oring", "roding", "gos", "gadda"]
difficulty: "mellannivå"
topDestinations: ["vanern", "vattern", "malaren", "storsjon"]
faq:
  - q: "Vilket djup fiskar man trolling på efter lax i Vänern?"
    a: "Gullspångslaxen håller sig ofta på 15–30 meters djup under sommaren. Downrigger krävs för att nå rätt djup. Under vår och höst kan fisken stå grundare, 5–15 meter."
  - q: "Vad är skillnaden på trolling och dragfiske?"
    a: "Dragfiske är ett bredare begrepp för att dra beten efter båt. Trolling är mer specialiserat och inkluderar downrigger, planerare och precision i djup och hastighet. Termerna används ofta synonymt."
  - q: "Vilken hastighet ska man trollingfiska i?"
    a: "De flesta wobblers fungerar bäst i 2–4 km/h (1,1–2,2 knop). Laxbeten dras ofta i 3–5 km/h. Anpassa hastigheten efter wobblerns optimala aktion, som syns i betets rörelse i vattenytan vid testkörning."
---

Trolling innebär att du drar beten efter en framåtgående båt för att täcka stora vattenmassor och hitta fisk på rätt djup. Till skillnad från kastfiske och jiggfiske är metoden inte beroende av att du hittar fisken på en specifik plats, utan av att du systematiskt sonderar rätt djupzon med rätt bete i rätt hastighet. Det gör trolling till en av de effektivaste metoderna för lax, öring och röding i svenska storsjöar, och en produktiv strategi för gös och stor gädda.

## Utrustning

### Spö

Standardspöet för insjötrolling är 7–8 fot (210–240 cm) med en linstyrka på 12–20 lb. Det räcker för lax, öring, röding och gös. För gäddtrolling med stora wobblers och sidoparavan används styvare spön i klassen 20–40 lb.

Spön avsedda för downrigger har en parabolisk (mjuk) aktion längs hela klingan. De ska kunna lastas ned mot kulan under körning och sedan rappa upp när linan lossnar vid hugg. Spön för sidoparavan och Dipsy Diver är styvare i ryggen för att stå emot konstant drag.

Spöhållare monterade på reling eller båtsida är nödvändiga när du kör fler än två spön.

### Rulle

Multirulle med **linräkneverk** är standard. Räkneverket är inte ett tillbehör, det är den funktion som gör trolling repeterbar. Utan det kan du inte sätta betet på samma djup två gånger. Linkapacitet minst 200 m av 0,40 mm nylon. Bromsstyrka 7–10 kg räcker till insjölax och öring. 10–15 kg används vid tyngre paravanfiske efter stor gädda eller havslax. Knarrfunktionen (clicker) ska vara aktiverad under körning så att du hör hugget när spöet sitter i hållaren.

### Linor

**Monofilament (nylon)** 0,35–0,45 mm är standardvalet för lax, öring och röding. Nylonet töjer sig och korkar fast fisken under den första rusningen. Linutlösare på downriggers och paravaner fungerar mer pålitligt mot mono än mot flätlina. I klart vatten, framför allt på Vättern, är 0,40 mm mono dessutom mindre synlig än flätlina av motsvarande styrka.

**Flätlina** 0,28–0,33 mm används vid gäddtrolling, vid downrigger på riktigt djupt fiske och bakom Dipsy Diver. Flätlinans tunna diameter ger mindre vattenbroms (blowback) och sänker kulan djupare.

**Fluorcarbontafs** 0,35–0,60 mm är standard. Längd 1,5–3 m i Vänern och grumligare vatten. I Vätterns klara vatten används 3–6 m tafs för att öka avståndet mellan lina och bete.

### Downrigger

En downrigger är en arm monterad på båtsidan med en rostfri stålvajer (150 lb) och ett tungt lod (kulblyet) i änden. Kulblyet drar ner betesspöets lina till exakt djup via en linutlösare som kläms på vajern.

Mekaniska downriggers (Cannon Uni-Troll 5, Scotty 1080) räcker för djup ned till 25–30 m och är standard på svenska båtar under 25 fot. Elektriska downriggers är värda investeringen om du fiskar djupare än 25 m och vecklar upp lod ofta.

**Kulvikt:** 4–6 kg (8–12 lb) är norm för insjötrolling i Vänern och Vättern. Tyngre kula ger mindre blowback, det vill säga linan drivs inte lika långt bakåt i farten och djupet stämmer bättre mot räkneverket. Vid 4 mph och 4 kg kula ligger kulan i verkligheten ungefär 20 procent grundare än räkneverket anger på grund av vattenmotståndet. Det är viktigt att känna till: sätter du kulan på 25 m fiskar du kanske på 20 m.

### Planerboards

Planerboards drar ut beteslinan i sidled så att du täcker en bred yta utan att spöna ligger ovanpå varandra bakom båten.

**Inlineboards** (Church TX-22, Off Shore OR-12) klipps direkt på spölinan och är det klart vanligaste valet på svenska båtar under 22 fot. De kan hanteras av en ensam person och drills sker direkt på spöet när boarden lossnar vid hugg. Inlineboards ska vara märkta med flagga.

**Sidoboards** (stora externa boards på mast med draglinea) används vid intensivt trolling med många spön, vanligen på charterbåtar eller i tävlingssammanhang. Kräver mer utrymme och helst flera personer ombord.

### Paravaner och Dipsy Diver

**Sidoparavan** fästs på spölinan och drar betet ut i sidled utan att det sjunker djupare. Funktionen är ren breddning av betesmönstret. Passar grunt gäddtrolling och ytfiske efter lax och öring.

**Dipsy Diver** är ett aktivt dykbete som kombinerar sidoutdrag med djupstyrning. En inställningsskiva på undersidan (positions 0–3) styr hur djupt och hur långt åt sidan divern går: position 0 är rakt nedåt, position 3 maximalt sidoutdrag med lägre djup. Djupet bestäms av hur mycket lina du släpper ut. En snubbe (gummidämpare) mellan divern och betet rekommenderas för att absorbera hugget.

### Ekolod och kartplotter

Ekolodet är den utrustning som avgör om du fiskar rätt. Du behöver se var språngskiktet (termoklinen) ligger, var betesfisken (siklöja, nors, spigg) håller till och helst var dina egna downriggerlod befinner sig. En kombinerad enhet med kartplotter, GPS-spår och CHIRP-givare är standard. Sidoavsökning (StructureScan, MEGA Imaging) hjälper när du letar betesstim på öppet vatten i Vänern och Vättern.

### Beten

**Wobblers** är det mest använda betet vid trolling. Storlek 7–15 cm för lax och öring, 12–25 cm för gädda, 7–12 cm för gös. Djupgående wobblers (Rapala Tail Dancer Deep, Bomber 15A/16A) fiskas utan extra bly. Flytande wobblers kräver downrigger eller paravan för djupstyrning.

**Skedar och Apex** är klassiska beten för röding och lax, ofta i silver, koppar eller blå/silver. Körs vanligen 0,5–1 m bakom en dodger eller blänkelänga.

**Tacklad löja** (siklöja eller nors i beteshållare med trebling) är ett av de effektivaste beten för stor Vätternlax och Vänerlax, framför allt vintertid.

Färgval följer siktdjupet: naturliga och återhållsamma färger (blå, silver, mossgrön, lila) i klart vatten som Vättern. Skrikiga och UV-reaktiva färger i grumligare vatten som Vänernfjärdar och Mälaren.

## Riggar

### Downrigger-rigg

Fäst linutlösaren på vajern 0,5–2 m ovanför kulan. Kläm spölinan i utlösaren med ett linsläpp (offset) bakom kulan på 1,5–12 m: kort vid aggressiv höst- och vinterfisk, långt vid skygg sommartid fisk i klart vatten. Sänk ned kulan till önskat djup, vinkla spöet mot vattnet och lägg spöet i hållaren med linan lagom spänd (8–15 cm böj i spötoppen). Vid hugg lossnar linan från utlösaren och spöet smäller upp. Drilla sedan fisken direkt, utan kulvikt på linan. Stapla max två linutlösare per vajer (stack-rigging).

### Paravan-rigg

Fäst paravanens klämma på spölinan och välj sidoutdragets riktning. Håll spöet i hållaren och veva ut valfritt antal meter beroende på hur långt ut du vill ha betet. Betet fiskar i ytskiktet ner till några meters djup beroende på wobblermodell.

### Dipsy Diver-rigg

Ställ in skivan till önskat läge (0–3), fäst divern på spölinan med snubbe och kräksa, anslut bete på 1–1,5 m fluorocarbon. Veva ut lina tills önskat djup är nått (tillverkarens chart anger djup per linmeter per läge). Lägg spöet i hållaren. Vid hugg trippar divern och drillningen sker utan diverets motstånd.

### Inline-board-rigg

Kör ut betet till önskad längd bakom båten, kläm fast inlineboarden på linan 5–15 m ovanför betet. Veva ut ytterligare 20–50 m tills boarden håller sin sidoposition. Lägg spöet i hållaren. Vid hugg faller boarden inåt eller flaggan slår ned. Veva in tills boarden är vid båtsidan, ta loss den manuellt och drilla sedan in fisken.

## Tekniker

**Djuptäckning med flera spön.** En typisk 6–10-spösättning på Vättern eller Vänern täcker ytan med paravaner eller inlineboards på 3–5 m djup, mitten med päronbly på 5–10 m och botten med downrigger på 10–30 m. Justera hela tiden mot ekolodet: ser du bågmarkeringar på 18 m koncentrerar du downriggerspöna till 15–22 m.

**Hastighet.** Rätt hastighet beror på art och betetyp.

- **Lax och öring (insjö):** 1,5–2,5 knop. Apex och blänkelängor börjar tappa sin funktion över 2,2 knop.
- **Röding:** 1,5–2,0 knop, ofta på underkanten.
- **Gös:** 1,0–1,5 knop. Sällan effektivt över 2 knop.
- **Gädda (sommar, varmt vatten):** 1,8–3,0 knop. Stor sommargädda hugger ibland bättre vid hög hastighet.
- **Lax (Östersjön):** 2,0–3,0 knop.

**Kursändringar.** En sväng om 30–45 grader ändrar betets djup och fart tillfälligt. Yttersidans beten går djupare och saktar av. Innersidans grundare och snabbare. Svängar provocerar ofta passiv fisk till att hugga.

**Variation vid nollresultat.** Tre pass utan hugg på ett djup är signal att flytta ner eller upp 3–5 m. Fångst bara i en körriktning tyder på SOW/SOG-mismatch (se nedan). Tappar du fisk efter krokning byter du till monofilament och kontrollerar bromsen.

## Att läsa vatten

**Språngskiktet.** Sommartid bildas ett språngskikt (termoklinen) där varmt ytvatten möter kallt djupvatten. I svenska storsjöar ligger det vanligen på 5–20 m djup under sommaren. Lax, öring och röding söker sig till skiktet eller strax under det: där finns syrerikt kallt vatten och koncentrerad betesfisk. På ekolodet syns språngskiktet som ett brusande eller diffust horisontellt band. Fiskar du 1–3 m ovanför det bandet fiskar du rätt.

Vättern är ett undantag: dess enorma volym gör att språngskiktet ligger djupare och röding håller sig på 15–35 m sommartid. Höst och vår, när yttemperaturen sjunker och hela vattenmassan cirkuleras om, är fisken mer utspridd och hugger ofta grundare.

**Undervattensstruktur.** Branter, djupkanter, undervattensryggar och friliggande grunntoppar är de produktiva lokalerna. Betesfisk samlas vid strukturer och rovfisk följer betesfisken. På Vänern är Lurö skärgård, Djurö, Millesviks skärgård, Storebanken och Dagskärsgrunden kända trollingplatser. På Vättern fiskar man längs branter utanför Granvik, Hjo, Hästholmen, Omberg och Gränna.

**Betesfiskens position.** Ekolodet visar inte bara din fisk utan också var siklöja, nors och spigg håller till. Koncentrationen av betesfisk är den bästa indikatorn på var predatorerna befinner sig.

## Målarter

**Lax** fiskas i Vänern, Vättern och längs Östersjökusten. I Vänern dominerar Gullspångslax och Klarälvslax. All vild lax i Vänern är fredad och ska omedelbart återutsättas. Fisken håller sig djupare sommartid (15–25 m) och grundare under vintern och våren, ibland i ytan. Minimimått 60 cm i Vänern och Östersjön. Läs mer om laxens biologi och säsong på [artsidan för lax](/arter/lax/).

**Röding** är den primära trollingarten i Vättern. Storleksklassen är 1–2 kg normalt. 3–5 kg förekommer. Sommartid håller röding sig under språngskiktet på 15–35 m och söker temperaturer kring 4–8 °C. Vintertid är den mer utspridd. Minimimått 50 cm, max 2 röding per fiskare och dygn i Vättern. Tre fiskeförbudsområden (Fingals, Norrgrundet, Tängan) täcker ca 15 % av Vätterns yta och är helårsfredade. Läs mer på [artsidan för röding](/arter/roding/).

**Öring** tas som bonusfisk vid laxtrolling i Vänern och Vättern men är också det primära målet i Storsjön. Fiskar grundare och strandnärmare än röding, ofta vid temperaturer 7–12 °C. Minimimått 60 cm i Vänern och Vättern, 45 cm i Storsjön. Läs mer på [artsidan för öring](/arter/oring/).

**Gös** trollas effektivt i Mälaren, Hjälmaren, Vänerns östra delar och Roxen. Håll låg hastighet, 1,0–1,5 knop, med wobblers på 7–12 cm i naturliga eller mörka färger. Minimimått 45 cm. Gös söker sig ofta till språngskiktet sommartid och kan stå på 2–6 m djup i mörka sjöar. Läs mer på [artsidan för gös](/arter/gos/).

**Gädda** trollas med stora wobblers och sidoparavaner på 1,5–3,0 knop. Sommartid på öppet vatten 5–9 m djup, höst och vår grundare längs vasskanter och grunda vikar. Trolling täcker effektivt de öppna fjärdar och grundplatåer som är svåra att fiska med kastspö. Inget nationellt minimimått i insjöar. Vid Östersjökusten gäller 40 cm med fönsteruttag 40–75 cm. Läs mer på [artsidan för gädda](/arter/gadda/).

## Svenska vatten

**Vänern** är Europas bästa insjö för laxtrolling. Det öppna djupvattnet och de stora laxstammarna (Gullspångslax, Klarälvslax) är unika i europeisk skala. Säsongen är bäst oktober–april. Klassiska lokaler är Lurö skärgård, Djurö, Millesviks skärgård och Dalbosjön. Sommarfiske kräver djupa riggar, 15–25 m. Vänern rymmer också stora bestånd av gädda och gös för den som kör grundare.

**Vättern** är det svenska vattnet med starkast trollingtradition för röding och lax. Extremt klart vatten (siktdjup 10–15 m) kräver långa tafsar, 3–6 m fluorocarbon, och att betet körs långt bakom båten. Djupriggar 15–35 m är norm sommartid. Vintertrolling december–mars är en höjdpunkt för stora laxar och blankt silver öring som jagar spigg längs klippstränder.

**Mälaren** erbjuder gäddtrolling och göstrolling i stora delar av sjön. TDA-fiskekort krävs i Stockholms delar av Mälaren. Havsöring från Östersjön tar sig in i Mälarens skärgård och kan fångas på trolling i ytterskärgård och i Strömmen.

**Storsjön** i Jämtland är Sveriges bästa öringvatten för storutsatta fiskar på 3–6 kg. Trolling och dragutter dominerar. Fiska längs Storsjöflaket och runt Frösön på 5–15 m djup. Max 10 spön per båt. Notera aktiva kostråd från länsstyrelsen gällande PFAS i fisk från delar av sjön.

## Säsong

**Vår (april–maj).** Islossning och vattencirkulation innebär att temperaturen är jämn i hela vattenmassan kring 4 °C. Fisken är utspridd vertikalt och kan stå grundt. Lax och öring jagar aktivt vid ytan i Vättern och Vänern. God period för grundtrolling med paravaner och inlineboards utan downrigger.

**Sommar (juni–augusti).** Språngskiktet etableras och fisken koncentreras till en djupzon. Trollingfisket blir tekniskt: hitta rätt djup och håll betet i fönstret. Downrigger är nödvändigt för röding och djuplax. Gös trollas bäst tidigt på morgon och sen kväll.

**Höst (september–november).** Höstcirkulationen börjar när yttemperaturen sjunker under 8–10 °C. Betesfisken är hög i vattenmassan, rovfisken äter upp sig och är ofta aggressivt aktiv. En av de bästa perioderna för trolling i både Vänern och Vättern. Laxstim söker sig mot älvmynningar.

**Vinter (december–mars).** Vintertrolling på Vättern är ett eget kapitel. Lax och blank öring jagar spigg längs steniga klippstränder på 0–10 m djup. Kända stränder utanför Granvik, Domsand, Hästholmen och Omberg kan ge hugg från kajen eller i mycket grunt vatten. Kallt och mörkt väder med 5–7 m/s sidvind är de typiska förhållanden som driver spigg mot land och laxen efter.

## Regler och tillstånd

Kontrollera alltid aktuella bestämmelser direkt hos länsstyrelserna innan säsongsstart. Reglerna ändras varje år, framför allt för lax i Östersjön.

**Lax i Östersjön (HaV 2025):** Fritidsfiske efter lax i ICES-område 22–31 är i grunden förbjudet. En (1) fettfeneklippt lax per fiskare och dag får fångas och behållas. Efter den fångsten ska laxfisket upphöra för dagen. Icke-fenklippt lax ska omedelbart återutsättas. Minimimått 60 cm.

**Vänern:** Max 10 beten per båt. Minimimått lax och öring 60 cm. Max 3 lax och öring per fiskare och dygn. All vild (icke-fenklippt) lax och öring fredad och ska återutsättas. Fredningsområde för Gullspångslax runt Gullspångsälvens mynning hela året.

**Vättern:** Max 10 beten per båt. Minimimått lax, öring och röding 50 cm. Max 3 laxartade fiskar per fiskare och dygn, varav max 2 röding. Tre fiskeförbudsområden (Fingals, Norrgrundet, Tängan) är totalfredade hela året. Fredningstid 15 september–31 december för röding och öring i 8 fredningsområden kring älvmynningar. Trollingkort krävs i norra Vätterns skärgårdsvatten (enskilt vatten).

**Mälaren:** TDA-fiskekort (300–900 kr beroende på antal spön och tillbehör) krävs i Stockholms kommuns delar. TDA-1: 3 spön per båt. TDA-2: 4 spön, inga paravaner. TDA-3: 6 spön, paravaner tillåtna. På övriga delar av Mälaren gäller länsstyrelsernas föreskrifter. Max 10 beten per båt gäller på enskilt vatten.

**Storsjön:** Fritt handredskapsfiske (inklusive trolling) på allmänt vatten, max 10 beten per båt. Fiskekort krävs i fiskevårdsområdenas enskilda vatten. Minimimått öring 45 cm.

Kontrollera alltid aktuella regler på [svenskafiskeregler.se](https://www.svenskafiskeregler.se) eller hos respektive länsstyrelse.

## Vanliga misstag

- Linräknarens värde tas som exakt djup utan hänsyn till blowback. Kulan fiskar 15–25 procent grundare än räkneverket visar vid normal trollingfart.
- Räkneverket kalibreras aldrig. Två rullar av samma modell ger olika linsläpp per räknarvärde beroende på spolens fyllnadsgrad.
- GPS-hastigheten (SOG) används som fart-referens istället för farten genom vattnet (SOW). I strömvatten kan det skilja 0,5–1,0 knop.
- Tafsen är för kort i klart vatten. I Vättern bör tafsen vara minst 3–4 m fluorocarbon.
- Flätlina används på downrigger i ytfisket trots att mono ger bättre utlösning och mothugg.
- Bromsen är för hårt inställd och fisken krokas inte ordentligt.
- Beten körs på exakt samma djup hela dagen utan att ekolodet konsulteras.
- Paravaner och boards korsas med varandra vid kursbyte för att spönas sattes ut i fel ordning.
- Fredningsområden och spöbegränsningar i Vättern ignoreras. Max 10 beten och max 2 röding per dag gäller och kontrolleras av fisketillsynen.

## Det de flesta inte vet

Monofilament slår ofta flätlina vid trolling av ett anledningar som är ointuitivt. Flätlinans noll-stretch gör att kroken lätt river ett hål i fiskens käft under det initiala hugget, och linutlösare på downriggers är konstruerade för nylons friktion. Nylonets töjbarhet verkar som en stötdämpare och ger krokarna tid att sätta sig. Svenska erfarna trollare kör nylon som standardlina och flätlina enbart vid Dipsy Diver-fiske och djup-downrigger.

Djupet i räkneverket på din downrigger är nästan alltid för optimistiskt. Vattenmotståndet mot vajern och kulan drar linvinkeln bakåt. Med en 4 kg kula vid 4 mph och 30 m utsläppt vajer fiskar kulan i verkligheten på ungefär 24 m. Om språngskiktet ligger på 22 m och du ställer in kulan på 22 m fiskar du kanske 3–4 m ovanför fisken. Lösningen är tyngre kula, lägre fart eller att fiska lite djupare än ekolodsbilden antyder.

Fart genom vattnet (SOW) och fart över botten (SOG, GPS-värdet) skiljer sig i vatten med ström. Det är SOW som avgör hur betet arbetar. Kör du mot en underjordisk ström kan din GPS visa 2,0 knop medan betet faktiskt drar i 2,8 knop och bränner ut. I andra riktningen kan du ha 2,0 knop på GPS och ett dött bete på 1,2 knop SOW. Det förklarar varför fångsten ibland koncentreras till en enda körriktning trots att du håller konstant GPS-hastighet.

Staplad downrigger-rigg (stack-rigging) innebär att du sätter en andra linutlösare 2–4 m ovanför kulans utlösare på samma vajer. Du fiskar då två djup parallellt på en enda downrigger. På Vättern, där röding kan stå i ett smalt djupfönster på 2–3 m, är det ett effektivt sätt att snabbt hitta exakt rätt djup utan att behöva öka antalet spön.

Blänkelängor (dodger) ger inte bara ljusreflektion utan skapar tryckvågor i vattnet som imitar ett stim i rörelse. Röding söker sig till planktonrika platser med rörelse i vattnet. En dodger 50–80 cm framför ett Apex-bete kombinerar visuell stimulans med laterallinjeretning och är av det skälet mer effektivt än ett ensamt bete i djup- och mörkvattenfiske.

Vätternlaxens vintervandring längs klippstränder är kopplad till spiggvandringen, inte till lekvandring mot älv. Laxen (och öringen) jagar aktivt spigg som vinddrivs mot klippiga stränder på väst- och sydostexponerade kuster. Det innebär att djupen är noll till fem meter och att rätt vind är avgörande. Fisket är sämst i total vindstilla och bäst med fem till sju sekundmeters sidvind mot den strandlinje du fiskar.
```

## src/content/techniques/vertikalfiske.mdx
```
---
title: "Vertikalfiske"
slug: "vertikalfiske"
description: "Vertikalfiske presenterar betet lodrätt under båten på precisionsdjup. Guide till utrustning, tekniker och de bästa svenska vattnen för abborre, gös och gädda."
heroImage: "/images/techniques/vertikalfiske.jpg"
targetSpecies: ["abborre", "gadda", "gos", "oring", "lax"]
topDestinations: ["vanern", "vattern", "malaren"]
difficulty: "mellannivå"
faq:
  - q: "Vilket ekolod behöver man för vertikalfiske?"
    a: "Du behöver ett ekolod som visar fiskmarkeringar och bottenstruktur i realtid. Garmin, Lowrance och Humminbird är vanliga märken. Viktigt är hög frekvens (200 kHz) för bra upplösning på grunt vatten."
  - q: "Hur hittar man rätt djup vid vertikalfiske?"
    a: "Börja med att söka av med ekolodet och leta efter fiskmarkeringar och strukturer som djupkanter, bottentoppar och övergångar. Anpassa jiggvikten så betet sjunker snabbt och du behåller kontakten."
  - q: "Fungerar vertikalfiske från land?"
    a: "Sällan effektivt. Vertikalfiske kräver att du befinner dig direkt ovanför fisken för att presentera betet lodrätt. Från bryggor och pirer med tillräckligt djup kan det fungera, men båt är klart bättre."
---

Vertikalfiske innebär att betet presenteras lodrätt under båten eller hålet i isen, på ett precisionsdjup som styrs i realtid mot ekolodet. Det skiljer sig från spinnfiske och trolling genom att fisken söks upp och presentationen sker i en punkt, inte längs en linje. Tekniken är effektivare än de flesta alternativ när fisken är passiv, djupstående eller koncentrerad till en specifik struktur.

## Säkerhet

Vid öppet vatten är säkerhetsbälte obligatoriskt i många farvatten och starkt rekommenderat i Vänern, Vättern och Östersjön. Ekomotorer och propellrar är en undervärderad olycksrisk vid blött hantverkande. Stäng alltid av motorn innan du arbetar nära aktern.

Säkerhet vid isfiske beskrivs på sidan för [isfiske](/teknik/isfiske/).

## Utrustning

### Spö

Ett dedikerat vertikalspö är 170–190 cm långt med fast till extra fast action. Toppen ska vara känslig nog att registrera ett försiktigt gösnapp på 10 meters djup, men ryggraden ska kunna sätta kroken ordentligt mot en hård mothuggning. Kastvikt 7–30 g täcker abborre och medeldjup gös. För pelagiskt gösfiske och röding på Vättern används tyngre spön med kastvikt upp till 60 g. Bakhandtaget är medvetet kort för att inte störa vid rakt hängande fiske.

Pimpelspön är kortare, 20–60 cm, och väljs efter teknik. Klassiska pirk- och balanspirksspön har mer ryggrad än mormyshkaspön, som är tunna och lätta med en mjuk, vibrerande topp.

### Rulle

Multiplikator i lågprofilformat dominerar vid öppet-vattensfiske. Tummen ger direkt kontroll vid nedfall och pelagiskt prickskytte. Utväxling 6:1–8:1 är vanligast. Haspelrulle storlek 2000–2500 är ett fullgott alternativ, framför allt för den som redan fiskar jigg eller dropshot.

### Linor

Flätlina är standard. Tjocklek 0,10–0,13 mm (PE 0,6–0,8) för abborre och gös, 0,13–0,17 mm för gädda och Vätternröding. Tunn fläta skär vattnet bättre, ger omedelbar kontaktkänsla och minimerar linvinkeln även på 20 meters djup. Välj fluorescent gul eller orange så att nappet syns visuellt på linan ovan vattenytan. Vid isfiske används ofta nylon 0,12–0,20 mm direkt på pimpelspöet.

### Tafs

Fluorocarbon är norm. Längd 50–150 cm, styrka 0,30–0,40 mm för gös och abborre. Vid gäddafiske används titanvajer eller stark fluorocarbon 0,50–0,80 mm. Tafs knyts till flätlinan med Albright-knut eller FG-knut, alternativt via ett litet mikrolekande.

### Pirkar och jiggar

**Vertikalpirk** är ett långsmalt blylod med tyngdpunkten nedtill. Klassiska svenska modeller i silver, koppar och guld. Agnas gärna med maggot eller fisköga på en pimpelkrok under. Storlek 4–7 cm för abborre, upp till 10–12 cm vid gäddpirkning.

**Balanspirk** hänger horisontellt och har trekrokar under buken samt en plastfena eller hårstjärt bak. Vid ryck glider den ut i en båge och faller tillbaka. Hugget kommer oftast i pausen. Storlek 5–9 cm är vanligast vid storabborrfiske.

**Mormyshka** är ett mikrojigg i volfram, oftast 3–6 mm, med kroppen genomborrad av ett linöga så att kroken hänger horisontellt. Rymmer sällan mer än en maggot. Fiskas med darrande handledsteknik på tunn nylon. Ursprunget är ryskt.

**Vertikaljigg i mjukplast** är en paddel-, twintail- eller pintailrigg på en jiggskalle. Jiggskallens vikt anpassas till djup och ström: 10–20 g för abborre, 20–40 g för gös, 40–60 g för röding och storgädda. Stingerkrok bak är standard.

## Riggar

### Klassisk pirkrigg

Pirk med pimpelkrok på panglänk under. Kroknummer 8–12 för abborre. Agnas med maggot, blodmask eller fisköga.

### Dropshotrigg – vertikalt

Sänke undertill, bete på en Palomar-knut 30–60 cm ovanför sänket. Sänket hålls mot botten medan betet vibrerar på ett fixerat djup. Mycket effektivt på passiv abborre och gös. Sänke 7–20 g.

### Balanspirkerigg

Balanspirk kopplad direkt i swiveln. Inga extra krokar under. Fiskas i ett borrhål med minst 200 mm diameter så trekroken inte häktar i iskanten.

### Mormyshkarigg

Mormyshka knuten direkt på nylon 0,10–0,16 mm utan tafs. Agnas med en maggot. Nappindikator av fjäder eller spiral monteras på pimpelspöets topp.

### Stingerrigg

Mjukplastbete på jiggskalle med en separat trekrok i Kevlartråd inriggad i baktill. Används vid vertikalt gäddafiske och på gös som napper kort.

## Tekniker

**Klassisk pirkning** börjar med att pirken sänks till botten och dunkas mot det 2–3 gånger för att virvla upp sediment. Därefter lyfts den 10–30 cm, kombinerat med korta darrningar och längre lockryck. Pauserna är avgörande: hugget kommer oftast på fallet eller direkt i pausen.

**Balanspirkning** kräver ett mjukare handlag. Korta ryck på 15–25 cm i sidled får pirken att glida ut i en bred båge, varefter den vänder och återvänder. Total stopp i den vändpunkten är det som triggar hugget. Prova hela vattenpelaren: abborre kan stå direkt under isen, inte bara vid botten.

**Dropshotet vertikalt** darrandes med spötoppen utan att lyfta sänket. Betet vibrerar på ett fixerat djup. Kroppens rörelse är minimal. Effektivt på trög fisk i kallt vatten och när stimmet befinner sig i en specifik nivå som ekolodet visar.

**Rippning** är en aggressiv, snabb upplyftning på 1–2 meter följt av ett kontrollerat fall. Triggar reaktionshugg hos gös, framför allt vid kallt vatten eller högt fisketryck när fisken inte nappar på lugnare presentation.

**Mormyshkateknik** bygger på konstant vibration från handleden vid 2–5 Hz, kombinerat med ett långsamt lyft på 10–30 cm. Total avsaknad av rörelse dödar tekniken. Effektivt på abborre, mört, sik, harr och röding.

**Pelagiskt prickskytte** kombinerar ekolod eller forward-facing sonar med snabb betespresentation mot ett identifierat eko. Jiggen släpps mot fisken, stannas 0,5–1 meter ovanför och får sedan hänga still. Hugget kan komma innan jiggen ens stannat.

**Anpassning till temperatur:** Vid 4–8 °C används mikrorörelser, långa pauser på 10–30 sekunder och beten i 5–9 cm. Vid 8–15 °C ökar takten och jiggarna kan vara 9–14 cm. Vid 15–22 °C fungerar snabbare presentation och större beten upp mot 20 cm. Undvik djupfiske på gös vid vattentemperatur över 22 °C, eftersom catch-and-release-dödligheten ökar kraftigt vid värme i kombination med barotrauma.

## Att läsa vatten

Ekolodet är teknikens viktigaste verktyg. Lär dig skilja bottenstreck (tjockt och stabilt) från fiskbågar (välvda markeringar vars storlek beror på hur nära fiskens centrum av sonarens kon) och från ditt eget bete (en smal vertikal linje som rör sig i takt med spörörelserna). Sök djupkanter med 3–15 meters gradient, gränsen mellan hård och mjuk botten, undervattensrev, nedfallet trä och gamla farledsmarkeringar.

Språngskiktet syns som ett horisontellt "moln" på ekolodet, vanligtvis 5–15 meters djup sommartid i de flesta svenska sjöar. Rovfisk håller sig vid eller strax över språngskiktet när temperaturskillnaden är stor. I Vättern ligger det under högsommaren ofta runt 20–25 meter, exakt där rödingen befinner sig.

Vid strömmande vatten krävs tyngre jigg för att hålla kontakt med botten. Driv båten medströms i exakt strömhastighet med elmotor. Jiggen fiskar då statiskt i förhållande till botten medan strömvinkeln håller den i en naturlig position framför fisken.

## Målarter

**Abborre** är det vanligaste vertikalmålet och kan tas på pirk, balanspirk och mormyshka året runt. Stimmen håller sig på 4–12 meters djup och samlas på hösten vid hårdbottenkanter. Balanspirk i 5–9 cm är effektivast på storabborre över 35 cm. Nationellt minimimått saknas, men lokala bestämmelser kan gälla.

[Läs mer om abborre](/arter/abborre)
[Läs mer om abborre](/arter/abborre/)

**Gös** är primärmålet vid öppet-vattensfiske. Fisken är ljuskänslig och jagar ofta vid gryning och skymning, men pelagisk gös kan tas dagtid på sommaren. Typiska djup är 6–15 meter bottennära, men pelagiskt kan den stå 3–8 meter ner över djupare vatten. Minimimått 45 cm, maximimått 60 cm vid handredskap. Fångstbegränsning på tre gäddor och gösar sammanlagt per dygn gäller söder om gränsen Västernorrland och Västerbotten.

[Läs mer om gös](/arter/gos)
[Läs mer om gös](/arter/gos/)

**Gädda** fiskas vertikalt med jiggar i 17–25 cm på 35–60 g jiggskalle. Titanvajer eller stark fluorocarbon som tafs är obligatoriskt. Stingerkrok bak ger bättre krokkontakt. Minimimått 40 cm, maximimått 75 cm vid handredskap. Samma fångstbegränsning som för gös gäller.

[Läs mer om gädda](/arter/gadda)
[Läs mer om gädda](/arter/gadda/)

**Vätternröding** fiskas vertikalt på 15–35 meters djup, framför allt sommartid under språngskiktet. Röding tillhör laxfiskarna och har öppen simblåsa, vilket gör den skonsam att återutsätta även från djupare vatten. Enkelkrok kan krävas i vissa redskapstyper på Vättern. Kontrollera Vätterns lokala regler inför fisket.

[Läs mer om öring](/arter/oring)
[Läs mer om röding](/arter/roding/)

**Öring och lax** förekommer som bifångst vid vertikalfiske i de stora sjöarna. Öringens minimimått varierar kraftigt: 50 cm i Vänern, 60 cm i Östersjöns kustvatten. Laxfiske i Östersjön är i grunden förbjudet. En fettfeneklippt lax per fiskare och dag får behållas, varefter laxfisket ska upphöra för resten av dygnet.

## Svenska vatten

**Vänern** har en stark gösstam och är det mest produktiva vertikal-gösvattnet i landet. Klassiska områden är Värmlandsnäs, Mariestads skärgård, Säfflefjorden och Kristinehamnssidan, på 7–14 meters djupkanter. Fritt handredskapsfiske gäller i hela sjön.

[Läs mer om Vänern](/destinationer/vanern)

**Vättern** är oslagbart för Vätternröding på 15–35 meters djup och producerar dessutom stor gös. Norra delen utanför Aspa, kanterna utanför Hjo och Hästholmen samt sydliga djupkanter är klassiska platser. Fritt handredskapsfiske gäller.

[Läs mer om Vättern](/destinationer/vattern)

**Mälaren** är det mest lättillgängliga gösvattnet för Stockholmsregionen. Östra Mälaren har snabbast tillväxt. Djupkanter och strukturer på 8–14 meter är de bästa lägena. Fritt handredskapsfiske gäller.

[Läs mer om Mälaren](/destinationer/malaren)

**Hjälmaren** är grund, med ett snittdjup på sex meter och max 22 meter. Produktiv och varm sjö som producerar snabbväxande gös. Fisket sker jämndjupt på 6–9 meter, ofta vid undervattensrev och hårdbottenkanter. Fritt handredskapsfiske gäller.

**Storsjön** i Jämtland ingår i frifiskerätten och erbjuder insjööring och röding på djupkanter. Sämre känd ur vertikalperspektiv men underutnyttjad.

**Fjällvatten och norrländska skogssjöar** har starka rödingbestånd och en underutnyttjad lakstam. Lakpimpling med pirk och strimlad fisk är ett eget kapitel och fungerar bäst under vinterhalvåret.

## Säsong

**Vår** ger abborre som samlas vid lekplatser i grunda vikar. Vertikalfiske är effektivt strax innan leken, när honar i toppkondition samlas. Under själva leken är fisken ointresserad. Gösen vandrar mot lekplatser och jagar aktivt på 6–10 meter fram till lekstarten, vanligtvis vid vattentemperatur 10–14 °C. Lokala fredningstider kan gälla för gös i delar av Vänern och andra vatten.

**Sommar** är högsäsong för pelagiskt gösfiske och Vätternröding. Gös jagar pelagiskt 3–8 meter ner under språngskiktet, även mitt på dagen. Rödingen finns på 15–35 meter i Vättern. Abborren driver löja mot ytan på morgnar och kvällar, men vertikal mot djupare strukturer fungerar bra dagtid. Undvik djup-gös-vertikal vid vattentemperatur över 22 °C.

**Höst** är den absolut bästa perioden för storabborre med balanspirk. Stimmen samlas på 8–12 meters djupkanter och äter intensivt. Gös är aktiv till vattnet kyls under 8 °C. Gädda jagar upp sig inför vintern och reagerar på tunga jiggar.

**Vinter** är isfiskets kärnperiod. Abborrpimpling med vertikalpirk, balanspirk och mormyshka är ett av Sveriges mest utövade sportfisken. Stabilt högtryck ger bäst fiske. Lake är aktiv och kan tas på pirk med betesfiskbit. Gös kan fångas i isfria vatten i södra Sverige med långsam presentation.

## Regler och tillstånd

Handredskap, inklusive pirk, pimpel och jigg med max tio krokar, ingår i frifiskerätten i havet och i de fem stora sjöarna: Vänern, Vättern, Mälaren, Hjälmaren och Storsjön. I alla övriga vatten krävs fiskekort från fiskerättsägaren.

Minimimått och fångstbegränsningar som är direkt relevanta för vertikalfiske:

- **Gös:** 45 cm minimum, 60 cm maximum vid handredskap. Max tre gösar och gäddor sammanlagt per fiskare och dygn söder om gränsen Västernorrland och Västerbotten.
- **Gädda:** 40 cm minimum, 75 cm maximum vid handredskap. Ingår i ovanstående trerapportering.
- **Öring:** 50 cm i Vänern, 60 cm i Östersjöns kustvatten, 45 cm i Skagerrak och Kattegatt. Max en icke fettfeneklippt öring per dygn.
- **Lax i Östersjön:** Riktat fiske förbjudet. Max en fettfeneklippt lax per fiskare och dag, varefter laxfisket ska upphöra för resten av dygnet.
- **Torsk i Östersjön:** Riktat fritidsfiske är förbjudet i hela Östersjön sedan 2025. Fångad torsk ska återutsättas omedelbart. Pilkning och vertikalt jiggfiske efter sej, kolja och makrill är fortsatt tillåtet på västkusten.

Kontrollera alltid aktuella regler på [svenskafiskeregler.se](https://www.svenskafiskeregler.se) eller hos respektive länsstyrelse.

## Vanliga misstag

- **För tjock lina på djupt vatten.** Fläta 0,20 mm skapar stor vinkel och dämpar huggkänslan kraftigt på djup över 10 meter. Byt till 0,10–0,13 mm.
- **För mycket rörelse i jiggningen.** Båtens naturliga svaj räcker ofta som grundrörelse. Överdrivet ryckande skrämmer passiv fisk.
- **Fel dropshotavstånd.** Betet för långt över sänket missar bottennära fisk. Rätt avstånd är 30–60 cm i de flesta situationer.
- **Ingen spotlock eller ankare.** Utan elmotor eller ankare driver båten och presentationen sker i konstant rörelse bort från ekolodsmarkören. Resultatet är en sned lina och ständigt tappat djup.
- **Fel krokstorlek.** En liten pimpelkrok under en 6 cm-pirk ger dålig krokkontakt på abborre över ett kilo. Matcha krokstorlek till betets volym och målart.
- **Direkt fläta-till-jigg utan tafs.** Flätlinan är synlig och saknar abrasionsmotstånd mot kanter och tänder. Alltid fluorocarbontafs på 50–150 cm.
- **Stanna för länge på ett tomt eko.** Om inget händer inom 15 minuter, flytta. Stora individer är ofta ensamma och håller sig i rörelse.
- **Återutsätta gös och abborre från djup över 10 meter utan att hantera barotrauma.** Fisken kan se pigg ut men dör fördröjt. Antingen tas fisken hem inom kvoten eller fiskas det på grundare vatten om återutsättning är syftet.
- **Felkalibrerat ekolod.** Fabriksinställningarna ger sällan optimal bild på djup över 20 meter. Justera känslighet, frekvens och bottenlås manuellt.
- **Sättning vid litet napp på dropshotet.** Mormyshka- och dropshotnapp är ofta en lätt tryckning eller att linan plötsligt känns lättare. Lyft jämnt och vänta in motståndet i stället för att rycka.

## Det de flesta inte vet

Vertikalfiske är vetenskapligt dokumenterat som skonsamt mot Vätternröding. En studie från Vätternvårdsförbundet (Fakta 5:2018) jämförde återutsättningsöverlevnaden hos röding fångad med vertikal respektive trolling. Vid vertikalfiske dök 91 procent av fiskarna direkt och den skattade dödligheten var omkring 2 procent. Vid trolling var den skattade dödligheten 22 procent. Skillnaden förklaras av att trolling drar upp fisken i hög hastighet och ger en längre och mer stressande fajt, medan vertikalfisket ger kortare stressfas och mer kontrollerad upplastning.

Krokplaceringen är den enskilt viktigaste faktorn för rödingöverlevnad vid catch and release. Samma Vätternstudie visar att röding krokad i läpp eller mungipa dök direkt i 70 procent av fallen. Av de fiskar som krokats djupt i munhålan eller i gälarna dog fem av åtta. Det är inte bara hur man hanterar fisken efter, det handlar om var kroken hamnar.

Gös och abborre drabbas av barotrauma redan från sex meters djup. En studie på den nära besläktade walleye (St. Lawrence River, publicerad 2009) visade att förekomsten av barotrauma steg snabbt från sex meter och nådde 100 procent vid 21 meter. Gös och abborre har sluten simblåsa och kan inte självläka trycket. En gös som simmar iväg pigg från tio meters djup kan ändå dö inom ett dygn av fördröjd barotrauma.

Mormyshka uppfanns i Ryssland på 1860-talet och imiterar Gammarus, en sötvattensräka som är ett primärt födoval för abborre, harr, mört och röding. Det är ett av världens äldsta mikrojigg-koncept, inte ett modernt mode. Tekniken introducerades i Norden under 1900-talets senare hälft och är i dag utbredd i hela Skandinavien och Finland.

Gösen i västra och centrala Mälaren slutar ofta växa vid 45–50 centimeters längd, medan östra Mälarens gösar kan fortsätta växa betydligt längre. SLU:s data pekar på att hög populationstäthet och konkurrens om föda är de avgörande faktorerna, inte genetik. En gös från Västerås kan vara lika gammal som en på 70 centimeter från Södertälje.
```

# Content: articles

## src/content/articles/basta-fiskespon-2026.mdx
```
---
title: "Bästa fiskespöt 2026 – så väljer du för gädda, gös och abborre"
slug: "basta-fiskespon-2026"
description: "Komplett köpguide för fiskespön 2026. Vad du ska titta efter för gädda, gös och abborre – med rekommendationer i budget, mellanklass och premium."
heroImage: "/images/articles/basta-fiskespon-2026.jpg"
publishedAt: "2026-05-21"
updatedAt: "2026-05-21"
author: "rikard-giby"
category: "guide"
excerpt: "Hur väljer du rätt fiskespö? Rekommendationer för gädda, gös och abborre i tre prisklasser."
faq:
  - q: "Vilket fiskespö är bäst för gädda?"
    a: "Det beror på budget och teknik. För mellanklass rekommenderar vi Westin W2 Powercast-T eller Shimano Yasei BB Pike XH. I premium är Westin W6 Powercast-T ett genomtänkt val för standardgäddafiske."
  - q: "Vilket spö passar bäst för gösfiske?"
    a: "Extra-fast aktion och kastvikt 7–70 g. Westin W3 Powerteez 3rd är ett beprövat mellanklasspö. För djupfiske i Vänern och Vättern är Westin W6 PowerTeez ett starkt premiumalternativ."
  - q: "Vad kostar ett bra abborrspö?"
    a: "Mellanklass på 1 000–2 000 kr ger mest för pengarna. Westin W3 Finesse TC 2nd och Westin W3 Finesse Jig 3rd är solida val. Shimano Expride är premiumvalet för den som fiskar abborre regelbundet."
  - q: "Vad betyder spöets kastvikt?"
    a: "Kastvikten anger vilket betesintervall spöet är optimerat för. Fiska du med beten utanför intervallet tappar du känsla och kastavstånd, och riskerar att skada spöet vid hårt kast."
---

Att köpa ett nytt fiskespö är sällan svårt. Att köpa rätt spö är en annan sak. Marknaden är full av alternativ och tillverkarnas specifikationslistor förklarar sällan vad siffrorna faktiskt innebär för dig på vattnet. Den här guiden reder ut det. Vi går igenom vad som verkligen spelar roll för gädda, gös och abborre, vilka egenskaper du ska prioritera i olika prisklasser och vilka spön som håller vad de lovar.

Rekommendationerna baseras på tillgänglig teknisk information, tillverkarnas specifikationer och den erfarenhet som finns samlad från svenska fiskare och internationella användarrapporter. Vi har inte testat alla spön i kontrollerade former, och det redovisar vi tydligt där det är relevant.

## Så läser du ett spö

Innan vi går in på arter är det värt att gå igenom vad specifikationerna faktiskt betyder. Det sparar tid när du jämför alternativ.

**Kastvikt** anges i gram och anger vilket betesintervall spöet är optimerat för. Ett spö med 10–40 g kastvikt fungerar med beten i det intervallet men presterar sämst i ytterkanterna. Fiska du regelbundet med beten som väger 5 g på ett spö med 10 g minimum tappar du känsla och kastavstånd. Fiska du med 50 g på ett spö med 40 g maximum riskerar du att knäcka blanken vid hårt kast.

**Aktion** beskriver var i blanken spöet böjer sig. Fast aktion böjer bara i toppen och ger snabb huggsättning, direktkontakt med betet och bra kastprecision med lätta beten. Medium fast böjer lite längre ned och är mjukare i munnen på fisken. Slow action böjer i hela blanken och används sällan för rovfiske. Tillverkare hanterar terminologin inkonsekvent, så ta aktionsbeteckningarna som ungefärliga riktmärken snarare än exakta beskrivningar.

**Blank** är spöets stomme och avgör i stor utsträckning hur spöet känns. Hög-modulärt kolfiber är styvt, lätt och känsligt men sprödare. Lägre modulgrad ger mer flex och tålighet. De flesta moderna rovfiskespön i mellanklass och premium använder Torayca-kolfiber från Toray Industries, ofta angett som 24T, 30T eller 40T (tonvärdet anger styvhet). Torayca är ett kvalitetsmärke men säger ingenting om hur blanken faktiskt är konstruerad, det är kombinationen av kolfibertyp, vinklarna i lindningen och förstärkningskonstruktionen som avgör slutresultatet.

**Ringar** påverkar linans rörelse och friktion. Fuji SiC (Silicon Carbide) är standard i premium och håller linor av alla typer utan att nötas. Fuji Alconite är något mjukare och lättare. Seaguide-ringar förekommer i mellanklass och är funktionella. Billigare aluminiumoxidringar håller för monofilament och flätlina men kan, vid hög friktion under lång tid, slitas fortare.

**Rullfäste** sitter fast rullen. VSS och DPS är vanliga standardstorlekar för haspelrullar. TVS är något kortare och passar kompakta rullar. Triggerfästen används för baitcaster. CI4+ är Shimanos kolfiberförstärkta plastmaterial som används i lätta och känsliga fästen.

---

## Gäddspö

[Gäddan](/arter/gadda/) kräver kraft. Du kastar tunga beten under hela dagen, ibland i motvind, ibland från låg position i en kajak. Spöet ska orka med betenas vikt i kaströrelsen och ha tillräcklig ryggradsstyrka för att sätta kroken i en gädda som kan väga tio kilo.

### Vad du ska titta efter

**Kastvikt 20–130 g.** Gäddspö delas grovt i tre intervall. 10–40 g för lätta mjukbeten och wobblers i skärgårdsfiske. 20–80 g för standardfisket med Pig Shad och medelstora wobblers. 40–130 g för de riktigt tunga betena, Buster Jerks, swimbaits och tungviktsjiggar.

**Längd 210–270 cm.** Längre spö ger mer kastavstånd och bättre linekontroll i kastet. Kortare är lättare och passar bättre i båt med lite plats. De flesta fiskare landas i 240–260 cm som allround.

**Fast till extra-fast aktion.** Gäddans gap är hårt och kräver en snabb huggsättning. Mjuka spön i slow action ger för mycket eftersläp innan kroken sätter sig.

**Kraftiga komponenter.** En gädda på åtta kilo sätter rejäl press på ringar och rullfäste. Fuji eller Seaguide premium är rätt nivå för regelbundet gäddafiske.

### Budget – under 1 000 kr

**Kinetic Xarann Predator Trigger CT** är ett solidt instegsval för den som vill ha ett castingspö för gädda utan att betala mellanklasspris. Blanken är CarbonTech CT med helaktion, vilket innebär att spöet böjer längre ned än ett renodlat fastaktionsspö. Det passar faktiskt bra för mjuka beten där lite mer flex ger längre kast och minskar risken att tappa beten ur mun vid napp. Inte rätt val för tunga jerkar, men för mjukbetesanvändaren som fiskar mellan 25 och 75 gram håller det.

[Se Kinetic Xarann Predator Trigger CT](/utrustning/test/kinetic-xarann-predator-trigger-ct/)

### Mellanklass – 1 000–2 000 kr

Mellanklass för gädda är ett brett fält. Här finns alternativ med Torayca-blank, Fuji-ringar och konstruktioner som är svåra att skilja från premiumsortimentet i dagligt bruk.

**Westin W2 Powercast-T** är rekommendationen för den som fiskar en gång i veckan och vill ha ett pålitligt allroundspö. Blanken är 24/30T High Performance Carbon med Seaguide SXQLSG premium-ringar, ett ringkoncept byggt för flätlina med hög linehastighet. Aktionen är progressiv, vilket innebär mjukare topp och snabb återhämtning i butten. Det gör spöet förlåtande vid kast av lite obalanserade beten och hårt mot fisken i avslutningsfasen.

[Se Westin W2 Powercast-T Spinnspo](/utrustning/test/westin-w2-powercast-t-spinnspo/)

**Shimano Yasei BB Pike XH** är alternativet om du föredrar Shimanos konstruktionsfilosofi. Diaflash-blanken är slankare och lättare än konkurrenterna i klassen, Fuji Fazlite-ringarna håller för allt och spövikten på 162 gram gör att armen håller längre. Kastvikten 30–90 g täcker standardgäddafisket utan att tänja på limiter.

[Se Shimano Yasei BB Pike XH](/utrustning/test/shimano-yasei-bb-pike-xh/)

**Westin W3 Hybridcast-T 3rd** är mellanklasskandidaten om du fiskar efter både gädda och gös med castingmetoder. Det är ett 221 cm spö med Torayca-blank, Carbon SKC-LS triggerfäste och Seaguide WOXOLSG-ringar. Kastvikten 30–90 g passar de flesta mjukbeten och hårdare beten upp till stora crankbaits. Det avtagbara bakhandtaget är en smart detalj som förkortar spöet vid kast och ger bättre kontroll i trångare situationer.

[Se Westin W3 Hybridcast-T 3rd](/utrustning/test/westin-w3-hybridcast-t-3rd/)

### Premium – 2 000–3 500 kr

**Westin W6 Powercast-T** är vårt premiumval för standardgäddafiske. Torayca High Performance Carbon-blank, Fuji SiC-ringar och ett välbalanserat delat EVA-handtag. Det är ett spö som sitter rätt i handen efter en lång dag och som fortfarande känns precist när det sista kastet ska göra skillnad. Kastvikten XXH 40–130 g gör det till ett av få spön i sortimentet som faktiskt är konstruerat för de tyngsta betena.

[Se Westin W6 Powercast-T Spinnspo](/utrustning/test/westin-w6-powercast-t-spinnspo/)

**BFT Lizzard X Stefan Trumstedt** är valet för den som specifikt fiskar med stora beten i Pig Shad- och Buster Jerk-klassen. Det är ett 239 cm MH-spö med japanskt Shrink Rubber powergrip och X-Wrap Compression Carbon-blank, en konstruktion som komprimerar blanken vid kast och minskar torsion. Titanium TI-forged-ringarna är bland de lättaste och starkaste du kan få i ett spö i den här klassen. En handgriplig detalj: handtaget är designat av Stefan Trumstedt själv efter år av gäddafiske och sitter annorlunda i handen än ett standard-EVA-grepp.

[Se BFT Lizzard X Stefan Trumstedt](/utrustning/test/bft-lizzard-x-stefan-trumstedt/)

---

## Vilket abborrspö ska du välja?

[Spöväljarens quiz](/spovaljaren/) hjälper dig matcha spö mot ditt fiske på 60 sekunder – art, teknik och budget.

---

## Gösspö

[Gösen](/arter/gos/) fiskas nästan uteslutande med jigg, drop-shot eller vertikala metoder. Det ställer andra krav på spöet än gäddafisket. Du behöver inte kasta lika långt. Du behöver däremot känna varje litet kontaktpunkt med botten och registrera hugg som ibland inte är tydligare än att linan plötsligt slutar sjunka.

### Vad du ska titta efter

**Extra-fast aktion.** Gösen hugger och sprutar. Med en mjukare aktion finns det risk att hugget inte registreras i tid. Extra-fast aktion ger direkt kontakt och snabb huggsättning.

**Kastvikt 7–70 g.** Gös fiskas på djup som varierar enormt. Grundfisket med lätta jiggar kräver 7–21 g. Djupfisket på Vänern, Vättern och Mälaren kan kräva 40–70 g sänken för att hålla bottenkontakt i stark ström.

**Känslig topp, stark rygggrad.** Den klassiska beskrivningen av ett gösspö är mjuk topp och hård botten. Toppen registrerar hugg och kommunicerar med betet. Butten sätter kroken och hanterar fisken.

**Längd 210–270 cm.** Gösfiskaren på 10 meters djup från båt behöver inte kastavstånd. Götafiskaren på grunda strömmande vatten behöver precisionscast. Välj längd efter var du fiskar mest.

### Budget – under 1 000 kr

**Mikado Inazuma Pro Zander** är märkbart bättre för pengarna än vad prislappen antyder. Fuji TVS-rullfästet är ovanligt i den här prisklassen och ger bättre passform för standardrullar utan glapp. Aktionen är spetsaktion, det vill säga snabb, med känsliga spetsrörelser som registrerar gösnapp vid låg aktivitet. Spöet finns i flera längder, och 214 cm med 1–28 g kastvikt täcker det mesta av standardgösfisket.

[Se Mikado Inazuma Pro Zander](/utrustning/test/mikado-inazuma-pro-zander/)

### Mellanklass – 1 000–2 000 kr

**Westin W3 Powerteez 3rd** är en beprövad mellanklasskonstruktion för gös. Extra-fast Torayca-blank, Carbon SKS-LS rullfäste och EUKTLTSG-ringar optimerade för flätlina. Kombinationen ger det fiskaren faktiskt behöver: direkt kontakt med betet, tydlig huggregistrering och styrka nog att lyfta en gös ur fem meters djup utan att behöva oroa sig för att spöet ger vika. Finns i 9 fot för den som fiskar från båt och vill ha extra räckvidd i kastet.

[Se Westin W3 Powerteez 3rd](/utrustning/test/westin-w3-powerteez-3rd/)

### Premium – 2 000–3 500 kr

**Westin W6 PowerTeez Haspelspö** är ett av de mer genomtänkta gösspöna i den här prisklassen. Torayca-blank med extra-fast aktion, Fuji TVS-rullfäste och Fuji SiC-ringar i lågprofilmontage som minimerar vikt och friktion. Det finns i varianter från 250 cm ML 7–28 g för grundare fiske till 270 cm MH 21–70 g för djupfiske och kraft mot stor fisk. Det är ett spö som tål att användas hårt under lång tid utan att komponenterna ger vika.

[Se Westin W6 PowerTeez Haspelspö](/utrustning/test/westin-w6-powerteez-haspelspo/)

---

## Abborrspö

[Abborren](/arter/abborre/) är det bredaste fisket av de tre. Du kan fiska abborre med ett 3-meters flugspö på Östersjön, med ett 180 cm drop-shot-spö under en brygga eller med ett 250 cm jiggspö från båt i höst. Det finns inget universellt abborrspö, men det finns en handfull kategorier som täcker det mesta.

### Vad du ska titta efter

**Teknik styr valet mer än arten.** Välj spö efter metod först, art sedan. Ett drop-shot-spö är ett drop-shot-spö oavsett om du fiskar abborre, gös eller havsöring. Samma logik gäller jigg och spinn.

**Lätt till medium kastvikt.** De flesta abborrfiskare rör sig i 3–21 g. Drop-shot med lätta beten landar på 4–12 g inklusive sänke. Jiggfiske för storabborre kan gå upp till 28 g.

**Fast aktion med känslig topp.** Abborren hugger ofta försiktigt, särskilt i kallt vatten. En känslig topp registrerar kontakten, fast aktion sätter kroken.

**Längd 180–240 cm.** Kortare för drop-shot och precisionsfiske i strandzonen. Längre för jigg från båt och spinnfiske i öppnare vatten.

### Budget – under 1 000 kr

**Shimano Nexave Haspelspö 191M** är Shimanos instegsspö i kolfiber med fast aktion och 3–14 g kastvikt. Seaguide XOG anti-tangle-ringar fungerar pålitligt med flätlina. Det är inte ett spö med premiumkänsla i handen men det böjer rätt, sätter krokar och håller i år. För den som fiskar tio dagar per år och vill ha ett fungerande abborrspö utan att lägga pengar på funktioner som inte syns i fångsten, håller det.

[Se Shimano Nexave Haspelspö 191M](/utrustning/test/shimano-nexave-haspelspo-191m/)

### Mellanklass – 1 000–2 000 kr

Mellanklass är det mest givande prisintervallet för abborrfiske. Här börjar komponenterna göra verklig skillnad i känsla och precision.

**Westin W3 Finesse TC 2nd** är rekommendationen för den som jiggfiskar och drop-shottar ungefär lika mycket. 213 cm, ML 5–15 g eller M 7–21 g beroende på preferens, Torayca-blank med 1K vävt kolfiber och Seaguide LS-ringar. Det är ett allroundspö som inte är bäst i någon enskild situation men aldrig i vägen.

[Se Westin W3 Finesse TC 2nd](/utrustning/test/westin-w3-finesse-tc-2nd/)

**Westin W3 Finesse Jig 3rd** är alternativet om jiggfisket dominerar. 251 cm gör det lämpligt för kast från båt och vertikalfiske på djupare vatten. Kastvikt 7–28 g täcker tyngre jiggar för höstabborre och djupgående gös. EUKTLTSG-ringarna är optimerade för flätlina och ger fri lineglidning utan friktion.

[Se Westin W3 Finesse Jig 3rd](/utrustning/test/westin-w3-finesse-jig-3rd/)

### Premium – 2 000–3 500 kr

Premiumklassen för abborre handlar om känsla. Konstruktionerna i det här intervallet kommunicerar med handen på ett sätt som faktiskt påverkar hur du reagerar på hugg.

**Shimano Expride Haspelspö 198M** är ett 198 cm spö med 3–10 g kastvikt, konstruerat primärt för bassfiske men utmärkt för storabborre med lätta finessebeten. Hi-Power X-blanken med diagonalt lindat kolfiber minskar torsion vid kast. Carbon Monocoque-handtaget i hålgjuten kolfiber och framgrepp i kork ger en känsla som är svår att hitta under 2 000 kronor. Fuji SiC-ringar och CI4+-rullfäste kompletterar.

[Se Shimano Expride Haspelspö 198M](/utrustning/test/shimano-expride-haspelspo-198m/)

**Westin W6 Dropshot Haspelspö** är valet om drop-shot är din primärmetod. 240 cm, ML 4–21 g, Fuji SKSS-rullfäste och Fuji SiC-ringar. Det platta bakhandtaget med lätt kurvad design är gjort för att vila mot underarmen under långa drop-shot-pass. KIGAN-krokhållaren håller sänke och krok säkrat under förflyttning. Det är ett spö byggt kring en enda teknik och det syns i hur det sitter i handen.

[Se Westin W6 Dropshot Haspelspö](/utrustning/test/westin-w6-dropshot-haspelspo/)

**Shimano 26 Zodias Haspelspö** är premiumvalet för spinnfiske och bredare abborrfiske. Det är ett japanskt JDM-spö, tillverkat för den japanska marknaden men tillgängligt via svenska återförsäljare. Hi-Power X-blank, Fuji Alconite K-guides och Carbon Monocoque-grepp. Shimano uppger att Carbon Monocoque ökar känsligheten med 30 procent jämfört med traditionella handtag, baserat på egna jämförande mätningar. Finns i 203 cm, 213 cm och 224 cm beroende på om du prioriterar kastprecision eller räckvidd.

[Se Shimano 26 Zodias Haspelspö](/utrustning/test/shimano-26-zodias-haspelspo/)

---

## Tre frågor att ställa dig själv innan köp

**Vilken teknik fiskar du mest?** Det är den viktigaste frågan. Köp ett spö optimerat för din primärteknik, inte för arten i allmänhet.

**Hur många dagar per år fiskar du?** Under tio dagar: budget håller hela vägen. Tio till trettio dagar: mellanklass är rätt investering. Över trettio dagar eller specialiserat fiske: premium tjänar sig hem i känsla, hållbarhet och precision.

**Är du osäker?** Ta spöväljarens quiz. Fem frågor, ett svar.

[Hitta rätt spö via Spöväljarens quiz](/spovaljaren/)

---

*Strömkast finansieras via affiliate-länkar. Köper du utrustning via länkarna på den här sidan får vi en liten provision, utan kostnad för dig. Det påverkar inte vad vi skriver eller hur vi värderar spöna.*```

## src/content/articles/nappkalender-guide.mdx
```
---
title: "Nappkalender 2026: biologi, månfas och väder"
slug: "nappkalender-2026"
description: "Hur fungerar en nappkalender egentligen? Vi förklarar vetenskapen bakom säsong, månfas och väder och hur vi byggt Strömkasts nappkalender."
excerpt: "Vad styr när fisken nappar? Vi reder ut biologi, månfas och väder."
heroImage: "/images/articles/nappkalender-2026.jpg"
publishedAt: "2026-05-26"
updatedAt: "2026-05-26"
author: "rikard-giby"
category: "guide"
faq:
  - q: "Vad är en nappkalender?"
    a: "En nappkalender visar när under året det är bäst att fiska olika arter, baserat på säsongsmönster, vattentemperatur och månfas. Den ger ett riktmärke för planering, men ersätter inte lokal kunskap och dagsaktuella förhållanden."
  - q: "Påverkar månfasen fisket?"
    a: "Forskning visar en liten men mätbar effekt. En analys av 341 959 muskellungefångster (Vinson och Angradi, PLOS ONE 2014) visade ungefär 5 procent fler fångster runt ny- och fullmåne. Säsong och vattentemperatur påverkar fisket betydligt mer."
  - q: "Hur fungerar Strömkasts nappkalender?"
    a: "Betningsindikatorn väger samman tre faktorer: säsong (70 procent), månfas (25 procent) och aktuell SMHI-väderprognos (5 procent). För de kommande 10 dygnen används faktisk prognos. Längre fram baseras bedömningen på historiska klimatnormaler 1991-2020 från SMHI."
  - q: "Skiljer sig nappkalendern åt för olika regioner i Sverige?"
    a: "Ja. Säsongen är 4-8 veckor senare i norra Sverige och fjällvärlden jämfört med södra Sverige. Strömkasts kalender låter dig filtrera på region för att få en mer relevant bedömning."
  - q: "Hur tillförlitlig är nappkalendern?"
    a: "Den är ett riktmärke, inte en garanti. Beteckningarna Toppläge, Värt att testa och Trögt ska tolkas som sannolikheter baserade på historiska mönster. Lokalkännedom och aktuella förhållanden väger alltid tyngre."
---

Abu Garcias huggtabell har funnits sedan 1953. Den är baserad uteslutande på månfaser och ger samma rekommendation oavsett om du fiskar gädda i Skåne eller harr i Jämtland. Det är tradition, inte vetenskap. Vi ville se om det gick att göra bättre.

## Vad styr egentligen när fisken nappar

Svaret är inte månfasen. Det är vattentemperaturen.

Gäddan leker när vattnet når 6-10 grader. Abborrens rom kläcks när temperaturen passerar 12 grader. Gösen väntar till 14-15 grader innan den söker upp lekplatserna. De här tröskelvärdena är väldokumenterade i svensk fiskbiologisk litteratur och de styr när fisken befinner sig i de lägen som gör den fångstbar på spinn, jigg och fluga.

Det innebär att säsongens tidpunkt varierar med upp till 8 veckor beroende på var i Sverige du fiskar. En laxfiskare vid Mörrum och en vid Torneälven lever i biologiskt olika år, trots att de fiskar samma art.

Det här är grundbulten i hur vi tänkt när vi byggt [nappkalendern](/nappkalender/).

## Tre faktorer, olika vikt

Betningsindikatorn i Strömkasts kalender väger samman tre saker.

### Säsong (70 procent)

Den dominerande faktorn. Vi har kartlagt lek- och aktivitetsfönster för varje art baserat på biologiska fakta från Havs- och vattenmyndigheten och SLU. Poängen höjs under de perioder då arten är aktiv och i de lägen där den är fångstbar. Den sänks under lekperioden, inte för att fisken inte finns där, utan för att ett ansvarfullt fiske undviker att störa leken.

Artspecifika säsongsdata:

**[Gädda](/arter/gadda/):** förleks- och efterleksfönstret i mars-april och hungerfasen i september-oktober är topperioderna. Kallt vatten, under 18 grader, är grundförutsättningen.

**[Abborre](/arter/abborre/):** vårfisket i april-maj och höstens stimfiske i september-oktober. Sommarabborren betar aktivt vid yta under gryning och skymning.

**[Gös](/arter/gos/):** högsommar är gösfiskets topperiod. Nattfiske med jigg längs kanter ger bäst resultat när vattentemperaturen är hög.

**[Öring](/arter/oring/):** höst och vår i strömmande vatten. Undviker högsommarvärmen och söker svalt syrerikt vatten.

**[Havsöring](/arter/havsoring/):** vårfisket i mars-april och höstens kustfiske i oktober är högsäsong. Vandrar längs kusten mot älvarna inför höstleken.

**[Lax](/arter/lax/):** juni till september i älvarna. Mörrum och Torneälven är de svenska referensvattnen.

**[Harr](/arter/harr/):** fria att fiska efter att fredningen lyfts, vanligen i juni. Torrflugefiske på kvällar är högsommarens upplevelse.

**[Röding](/arter/roding/):** aktiv i kallt djupt vatten. Topperioderna är vår och höst. Utmärkt för isfiske.

### Månfas (25 procent)

Månfasens påverkan på fisket är verklig men liten. Den mest citerade studien är Vinson och Angradis analys av 341 959 fångster av maskalung i Nordamerika (PLOS ONE, 2014). Maskalung är en nordamerikansk gäddart med liknande beteendemönster som gädda. Resultatet: ungefär 5 procent fler fångster runt ny- och fullmåne. Effekten var starkare för stora fiskar och på höga latituder.

Det är en mätbar signal, inte en slump. Men det är en svag signal. En bra dag med ogynnsam månfas slår en dålig dag med fullmåne varje gång.

Vi visar månfasens dagliga variation i kalendern via färgintensitet. En högsäsongsdag med gynnsam månfas är mörkare grön än en med ogynnsam månfas. Det ger en visuell variation inom månaden som speglar den faktiska biologin. Vi påstår ingenstans att det är avgörande, men det är ett riktmärke som finns där om du vill använda det.

Fullmåne och nymåne markeras med emoji i kalenderrutan. De är de enda dagarna då månfasen är tillräckligt stark för att förtjäna en tydlig markering.

### SMHI-väderprognos (5 procent)

För de kommande 10 dygnen hämtar vi faktisk väderprognos från SMHI:s öppna API per region. Lufttemperatur, vindstyrka och nederbörd väger in i bedömningen. Dagar med prognosdata markeras med en blå SMHI-badge i kalenderrutan.

Vindstyrka påverkar framförallt tillgängligheten, inte fisken i sig. 1-4 meter per sekund är optimalt för de flesta fiskeformer. Över 10 meter per sekund gör fiske svårt eller omöjligt i de flesta vatten.

Temperaturprognoser är meningsfulla på 10 dygns sikt. Längre fram än så baseras bedömningen på klimatnormaler 1991-2020 från SMHI, vilket ger ett historiskt riktmärke snarare än en faktisk prognos.

## Hur vi skiljer oss från en traditionell huggtabell

En traditionell huggtabell, inklusive Abu Garcias, är baserad uteslutande på månfaser. Samma rekommendation gäller oavsett art, region eller årstid.

Det är ett enkelt system som är lätt att kommunicera. Men det missar det som faktiskt styr fisket: säsongens biologi och vattentemperaturen.

Strömkasts kalender skiljer sig på tre sätt:

Artspecifik bedömning. En gädddag och en gösdag ser olika ut, även om månfasen är identisk. Det beror på att arterna har olika säsongsmönster och temperaturpreferenser.

Regionanpassning. Du kan filtrera på södra Sverige, mellansverige, norra Sverige eller fjällvärlden. Säsongen är inte densamma i Skåne och i Jämtland.

Transparent metodik. Vi redovisar hur poängen beräknas och vilken vikt varje faktor har. Du kan läsa detta och avgöra om du litar på logiken.

## Att använda kalendern rätt

Nappkalendern är ett planeringsverktyg. Den svarar på frågan om det är värt att åka ut nästa helg, eller vilken månad som är bäst för en planerad fisketur till Storsjön.

Den ersätter inte erfarenheten av att känna ett specifikt vatten. En van fiskare vet att gäddan i den lokala sjön brukar bita bra när det är sydvästlig vind och fallande lufttryck. Det fångar ingen kalender.

Kombinera kalenderdata med [förhållandesidan](/forhallanden/) för att se aktuell temperatur och vind vid det vatten du planerar att fiska. Det ger ett bättre beslutsunderlag än endera källan ensam.

För artspecifika kalenderöversikter med veckovis betningsindikator och säsongsbeskrivningar, gå direkt till [nappkalendern](/nappkalender/) och välj din art och region.
```

# Content: authors

## src/content/authors/rikard-giby.json
```
{
  "name": "Rikard Giby",
  "slug": "rikard-giby",
  "bio": "Jag heter Rikard Giby och har fiskat i svenska vatten sedan barnsben. Till vardags jobbar jag som digital marknadsförare med över 10 års erfarenhet inom SEO, SEM och innehållsstrategi.",
  "photo": "/images/authors/rikard-giby.jpg",
  "expertise": ["gäddspön", "ekolod", "destination guider", "nybörjarguider"],
  "social": {
    "instagram": "@rikardgiby"
  }
}
```

# Promptmallar

## prompt_produktsida.md
```
# Prompt: produktsida (gear-reviews) för Strömkast.se

Vi ska skriva redaktionellt innehåll till produktsidor för Strömkast.se.

## Om sajten

Strömkast är en svensk affiliate-sajt om fiske. Målgrupp: svenska fiskare, alla nivåer. Ton: direkt, faktabaserad, ärlig. Inga säljiga formuleringar. Affiliate-transparens viktigt.

## Källmaterial

Produktbeskrivningar från FiskeOnline eller tillverkaren används som faktaunderlag. De får aldrig kopieras eller parafraseras nära originalet — det ger duplicerat innehåll och är upphovsrättsproblematiskt. Använd tekniska fakta (material, mått, komponenter, aktion) men formulera alltid om med egna ord och Strömkasts röst.

## Format

Löptext i markdown utan rubriker. Längd: 150–250 ord. Tre stycken:

1. **Stycke 1 — Vad spöet är och hur det känns**
   Börja med vad spöet är byggt för och vad som definierar det tekniskt. Nämn material och konstruktion om det är relevant, men bara om det faktiskt säger något om prestandan. Undvik att räkna upp specifikationer.

2. **Stycke 2 — Komponenter och detaljer**
   Beskriv rullfäste, ringar och handtag kortfattat. Fokusera på vad komponentvalet betyder för fiskaren i praktiken, inte bara vad de heter. Ett Fuji-rullfäste är inte intressant i sig — däremot att det ger stabil linmatning och tål hårt bruk.

3. **Stycke 3 — Vem passar det för och hur jämför det sig**
   Sätt spöet i ett sammanhang. Vilket fiske passar det för, vilken typ av fiskare och i vilket vatten? Om det finns ett naturligt alternativ i sortimentet (t.ex. ett dyrare eller billigare spö i samma serie), jämför kort utan att nedvärdera något alternativ.

## Språkregler

- Korrekt svenska genomgående
- Inga em-streck (—) i löptext. Talstreck i sifferintervall (5–20 g) är tillåtet.
- Inga semikolon. Ersätt med punkt.
- Kolon används bara för att introducera en lista eller en direkt förklaring, inte som paus i löptext.
- Inga elliptiska konstruktioner eller hängande bisatser
- Kortare meningar föredras
- Inga superlativ eller säljfraser ("ultimat", "oslagbar", "perfekt", "tar ditt fiske till nästa nivå")
- Inga uppmaningar till köp ("beställ idag", "köp nu")
- Tekniska termer används där de faller naturligt (aktion, kastvikt, blank, tafs) men förklaras inte — det är en sajt för fiskare

## Vad som ska undvikas

- Kopierade eller nära parafraserade meningar från tillverkarens text
- Vaga påståenden utan täckning ("fantastisk känsla", "tar fisket till nästa nivå")
- Upprepning av information som redan finns i pros/cons-listan
- Meningar som börjar med varumärkesnamnet tre gånger i rad
- Påståenden om att spöet "passar alla" eller är "mångsidigt nog för allt"

## Faktagranskning

- Kastvikt, längd och antal delar ska stämma mot produktsidan
- Komponentnamn (Fuji, Seaguide, Torayca etc.) ska stavas korrekt
- Aktionsbeskrivningar (Fast, Medium Fast, XH etc.) ska återges korrekt
- Om tillverkarens text innehåller en uppenbar felaktighet eller överdrift, utelämna den

## Kontrollista innan leverans

- [ ] Korrekt stavning och meningsbyggnad
- [ ] Inga em-streck i löptext
- [ ] Inga semikolon
- [ ] Inga superlativ eller köpuppmaningar
- [ ] Tre stycken, 150–250 ord totalt
- [ ] Ingen kopierad text från tillverkaren
- [ ] Tekniska specifikationer stämmer mot källan
- [ ] Texten säger något nytt utöver vad som redan finns i pros/cons
```
