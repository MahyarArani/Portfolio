import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./google-sites/content/projects" }),
	schema: z.object({
		title: z.string(),
		summary: z.string().optional(),
		date: z.string().optional(),
		images: z.array(z.string()).optional(),
		slug: z.string(),
	}),
});

export const collections = { projects };
