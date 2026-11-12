// The site's words, numbers and photos, kept as content so they change without touching the pages. Everything in
// src/content is sample content about a made-up river and campaign.
import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// A photo linked from Unsplash by its id (the part after images.unsplash.com/), with its credit.
const photo = z.object({
  id: z.string(),
  alt: z.string(),
  credit: z.object({
    name: z.string(),
    profile: z.url(),
    page: z.url(),
  }),
});

// The story's chapters, told on the home page in number order. The Markdown body is the chapter's text.
const chapters = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/chapters' }),
  schema: z.object({
    number: z.number().int().positive(),
    kicker: z.string(),
    heading: z.string(),
    photo,
  }),
});

// The numbers. A `wide` one is a band the width of the page; the `row` ones after the same chapter share a row.
const stats = defineCollection({
  loader: file('src/content/stats.json'),
  schema: z.object({
    order: z.number(),
    value: z.number().int().nonnegative(),
    unit: z.string().default(''),
    label: z.string(),
    band: z.enum(['wide', 'row']),
    afterChapter: z.number().int().positive(),
  }),
});

// The gifts offered in the donate band, each saying what it buys. One is `chosen` when the page opens.
const amounts = defineCollection({
  loader: file('src/content/amounts.json'),
  schema: z.object({
    value: z.number().positive(),
    buys: z.string(),
    chosen: z.boolean().default(false),
  }),
});

const often = z.enum(['once', 'monthly']);
const byOften = z.object({ once: z.string(), monthly: z.string() });

// The site's settings, one entry named `site`. `donateUrl` is where every Donate button goes: a Stripe Payment Link
// or a charity platform's page. `{amount}` in a sentence is the chosen gift with its currency.
const settings = defineCollection({
  loader: file('src/content/settings.json'),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    donateUrl: z.string(),
    currency: z.string(),
    often,
    sampleNote: z.string(),
    hero: z.object({
      lines: z.array(z.string()).min(1),
      highlight: z.string().default(''),
      text: z.string(),
      cue: z.string(),
      photo,
    }),
    give: z.object({
      heading: z.string(),
      text: z.string(),
      once: z.string(),
      monthly: z.string(),
      button: byOften,
    }),
    thanks: byOften,
  }),
});

export const collections = { chapters, stats, amounts, settings };
