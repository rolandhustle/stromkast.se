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
  redirects: {
    '/guider/basta-ekolodet-2026/': {
      status: 301,
      destination: '/guider/basta-ekolod/',
    },
    '/guider/jiggfiske-for-nyborjare/': {
      status: 301,
      destination: '/teknik/jiggfiske/',
    },
  },
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