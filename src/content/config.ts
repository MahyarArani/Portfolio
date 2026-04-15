
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.string().optional(),
		images: z.array(z.string()).optional(),
		slug: z.string(),
	}),
});

export { projects };
export const collections = { projects };
