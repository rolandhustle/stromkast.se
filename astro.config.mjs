// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import rss from '@astrojs/rss';
import vercel from '@astrojs/vercel';
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://stromkast.se';

/**
 * Sidor som inte ska ligga i sitemapen.
 *
 * En sida med noindex som samtidigt anmäls i sitemapen är en motstridig
 * signal: vi ber sökmotorn hämta något vi sedan ber den utelämna. Det kostar
 * ingen ranking men ger onödiga crawlanrop och fyller GSC med rapporten
 * "Utesluten genom taggen noindex" på sidor vi själva anmält.
 *
 * Kategoriundantagen härleds ur samma guideUrl-fält som styr noindex i
 * utrustning/[kategori].astro. En handskriven lista hade glidit isär från
 * mallen första gången en ny guide kopplades.
 */
const KATEGORI_DIR = 'src/content/gear-categories';

const noindexKategorier = fs
  .readdirSync(KATEGORI_DIR)
  .filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(fs.readFileSync(path.join(KATEGORI_DIR, f), 'utf-8')))
  .filter((c) => Boolean(c.guideUrl))
  .map((c) => `${SITE}/utrustning/${c.slug}/`);

const uteslutna = new Set([
  `${SITE}/sok/`,
  `${SITE}/honeypot-trap/`,
  ...noindexKategorier,
]);

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    sitemap({
      customPages: [],
      filter: (page) => !uteslutna.has(page),
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