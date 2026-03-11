import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image: img }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.union([z.string(), z.date()]).transform((val) => {
      if (val instanceof Date) {
        return val.toISOString().split('T')[0];
      }
      return val;
    }),
    updatedDate: z.union([z.string(), z.date()]).optional().transform((val) => {
      if (val instanceof Date) {
        return val.toISOString().split('T')[0];
      }
      return val;
    }),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    heroImage: img().optional(),
    featured: z.boolean().default(false),
    pdfUrl: z.string().optional()
  })
});

export const collections = { posts };