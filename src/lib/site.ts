import type { CollectionEntry } from 'astro:content';

export type ProjectEntry = CollectionEntry<'projects'>;

const RESEARCH_SLUGS = new Set([
  'challenges-and-factors-affecting-purchase',
  'intellectual-and-social-alignment-on',
  'sustainable-supplier-evaluation-and-selection-in',
  'the-social-effects-to-buy-in-app',
  'why-customers-follow-a-brand-page-on-social-media',
]);

const FEATURED_SLUGS = [
  'artificial-intelligence-and-power-platform',
  'arcgis-azure-functions-blob-storage-powerautomate',
  'integrating-arcgis-into-powerbi-dashboard-for',
];

export function isResearch(entry: ProjectEntry) {
  return RESEARCH_SLUGS.has(entry.data.slug);
}

export function isProject(entry: ProjectEntry) {
  return !isResearch(entry);
}

export function getFeatured(entries: ProjectEntry[]) {
  return FEATURED_SLUGS
    .map((slug) => entries.find((entry) => entry.data.slug === slug))
    .filter((entry): entry is ProjectEntry => Boolean(entry));
}

export function sortEntries(entries: ProjectEntry[]) {
  return [...entries].sort((a, b) => a.data.title.localeCompare(b.data.title));
}

export function getLabel(entry: ProjectEntry) {
  return isResearch(entry) ? 'Research' : 'Project';
}

export function getYear(entry: ProjectEntry) {
  return entry.data.date?.slice(0, 4) ?? 'Selected work';
}

export function getExcerpt(entry: ProjectEntry) {
  if (entry.data.summary) {
    return entry.data.summary;
  }

  const normalized = entry.body
    .replace(/\r/g, '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .find((line) => !line.startsWith('#'));

  if (!normalized) {
    return 'Details coming soon.';
  }

  return normalized.length > 180 ? `${normalized.slice(0, 177).trim()}...` : normalized;
}

export function getCoverImage(entry: ProjectEntry) {
  return entry.data.images?.[0] ? `${import.meta.env.BASE_URL}google-sites/images/${entry.data.images[0]}` : null;
}

export const siteMeta = {
  name: 'Mahyar Arani',
  title: 'Data Science, Automation, and Research Portfolio',
  description:
    'Portfolio of Mahyar Arani featuring applied AI, GIS, Power Platform, business intelligence, and research projects.',
  email: 'info@mahyar-arani.com',
};
