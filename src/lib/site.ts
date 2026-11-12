import { getCollection, getEntry } from 'astro:content';

/** The site's settings, from src/content/settings.json. */
export async function getSettings() {
  const entry = await getEntry('settings', 'site');
  if (!entry) throw new Error('src/content/settings.json needs an entry named "site".');
  return entry.data;
}

/** The chapters in the order they are told. */
export async function getChapters() {
  return (await getCollection('chapters')).sort((a, b) => a.data.number - b.data.number);
}

/** A photo's address on Unsplash's image service, at the width it is shown. */
export function photoUrl(id: string, width: number): string {
  return `https://images.unsplash.com/${id}?w=${width}&q=75&auto=format&fit=crop`;
}

/** A gift as the page writes it: £4,180. */
export function money(currency: string, value: number): string {
  return currency + value.toLocaleString('en-GB');
}

/** A sentence with its {amount} filled in. */
export function fill(sentence: string, amount: string): string {
  return sentence.replaceAll('{amount}', amount);
}

const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

/** "Chapter one", or "Chapter 13" past twelve. */
export function chapterName(number: number): string {
  return `Chapter ${words[number - 1] ?? number}`;
}
