import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getCollection('articles');
  const sorted = articles.sort((a, b) => b.data.publishedAt.localeCompare(a.data.publishedAt));

  return rss({
    title: 'Strömkast — Guider och reportage',
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
