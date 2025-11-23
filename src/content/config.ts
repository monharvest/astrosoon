import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.string(),
    updatedDate: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    featured: z.boolean().default(false),
    pdfUrl: z.string().optional()
  })
});

export const collections = { posts };