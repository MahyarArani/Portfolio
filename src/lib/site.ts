import type { CollectionEntry } from 'astro:content';

export type ProjectEntry = CollectionEntry<'projects'>;

const RESEARCH_SLUGS = new Set([
  'agent-based-systemic-risk-dissertation',
  'agentic-market-risk-benchmark',
  'financial-agent-replay-benchmark',
  'mortgage-credit-risk-forecasting',
  'challenges-and-factors-affecting-purchase',
  'intellectual-and-social-alignment-on',
  'sustainable-supplier-evaluation-and-selection-in',
  'the-social-effects-to-buy-in-app',
  'time-traveler-benchmark',
  'why-customers-follow-a-brand-page-on-social-media',
]);

const RESEARCH_IN_PROGRESS_SLUGS = new Set([
  'financial-agent-replay-benchmark',
  'mortgage-credit-risk-forecasting',
]);

const RESEARCH_PROJECT_SLUGS = new Set([
  'agent-based-systemic-risk-dissertation',
  'agentic-market-risk-benchmark',
  'time-traveler-benchmark',
]);

const WORKING_PROJECT_SLUGS = new Set([
  'aed-budget-and-revenue-dashboard',
  'research-orchestrator',
  'stock-time-series-orchestrator',
]);

const FEATURED_SLUGS = [
  'artificial-intelligence-and-power-platform',
  'arcgis-azure-functions-blob-storage-powerautomate',
  'stock-time-series-orchestrator',
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
  return [...entries].sort((a, b) => {
    const dateCompare = (b.data.date ?? '').localeCompare(a.data.date ?? '');
    return dateCompare || a.data.title.localeCompare(b.data.title);
  });
}

export function getLabel(entry: ProjectEntry) {
  if (RESEARCH_IN_PROGRESS_SLUGS.has(entry.data.slug)) {
    return 'Research in progress';
  }

  if (RESEARCH_PROJECT_SLUGS.has(entry.data.slug)) {
    return 'Research project';
  }

  if (isResearch(entry)) {
    return 'Publication';
  }

  if (WORKING_PROJECT_SLUGS.has(entry.data.slug)) {
    return 'Working project';
  }

  return 'Project';
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
    return 'Portfolio details are available in the project materials.';
  }

  return normalized.length > 180 ? `${normalized.slice(0, 177).trim()}...` : normalized;
}

export function getCoverImage(entry: ProjectEntry) {
  return entry.data.images?.[0] ? getImageUrl(entry.data.images[0]) : null;
}

export function getImageUrl(image: string) {
  const normalized = image.replace(/^\//, '');

  if (normalized.startsWith('generated/') || normalized.startsWith('certifications/')) {
    return `${import.meta.env.BASE_URL}${normalized}`;
  }

  return `${import.meta.env.BASE_URL}google-sites/images/${normalized}`;
}

export const siteMeta = {
  name: 'Mahyar Arani',
  title: 'Analytics, Data Science, and Agentic AI Portfolio',
  description:
    'Portfolio of Mahyar Arani featuring analytics engineering, data science, business intelligence, geospatial analytics, and agentic AI research.',
  email: 'info@mahyar-arani.com',
};
