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
  }),
});

const gearCategories = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/gear-categories' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    heroImage: z.string(),
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
