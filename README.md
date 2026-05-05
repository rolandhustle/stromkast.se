# Strömkast.se

Sveriges modernaste fiskeguide. Astro 6 + Tailwind CSS v4 + React 19.

## Tech stack

- **Framework:** Astro 6, TypeScript strict
- **Styling:** Tailwind CSS v4, custom design tokens
- **Content:** Astro Content Collections (Zod-validated)
- **Interactive islands:** React 19 (quiz)
- **Hosting:** Vercel (static output)

## Getting started

```bash
npm install
cp .env.example .env   # add your GTM ID
npm run dev
```

Opens at `http://localhost:4321`

## Environment variables

| Variable | Description |
|----------|-------------|
| `PUBLIC_GTM_ID` | Google Tag Manager container ID (e.g. `GTM-XXXXXXX`) |
| `PUBLIC_SITE_URL` | Production URL (default: `https://stromkast.se`) |

## Deploy to Vercel

1. Push the repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Astro — no additional config needed
4. Add environment variables in the Vercel dashboard
5. Deploy

The `@astrojs/vercel` adapter is pre-configured. Output is `static`.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build |

## Project structure

```
src/
  components/         Shared Astro + React components
    quiz/SpoQuiz.tsx  React island — spöväljaren quiz
  content/            Content collections (JSON + MDX)
    articles/         MDX editorial articles
    authors/          Author profiles (JSON)
    destinations/     6 destination guides (JSON)
    gear-categories/  Gear category definitions
    gear-reviews/     Product reviews with affiliate info
    species/          Species guides (JSON)
    techniques/       Technique guides (JSON)
  content.config.ts   Zod schemas for all collections
  layouts/BaseLayout.astro
  lib/track.ts        Typed GTM event wrappers
  pages/              All routes (22 pages)
  styles/tokens.css   Design tokens + self-hosted fonts
public/
  fonts/              Fraunces + Inter variable fonts
  robots.txt
```

## Adding content

**New destination:** create a JSON file in `src/content/destinations/` following the schema in `src/content.config.ts`.

**New article:** create an MDX file in `src/content/articles/` with the required frontmatter.

**New gear review:** create a JSON file in `src/content/gear-reviews/`.

## Analytics

GTM loads only after user consent (stored in `localStorage` as `sk_consent`). The consent banner appears on first visit. All events are typed in `src/lib/track.ts`.
