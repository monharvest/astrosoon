import { getCollection } from 'astro:content';
import { slugify } from './slug';

export interface Category {
  label: string;
  slug: string;
  href: string;
  count: number;
}

/**
 * Single source of truth for the category list. Derived from the content
 * collection so a new category shows up in the header and the filter without
 * touching either file.
 */
export async function getCategories(): Promise<Category[]> {
  const posts = await getCollection('posts');
  const counts = new Map<string, number>();

  for (const post of posts) {
    counts.set(post.data.category, (counts.get(post.data.category) ?? 0) + 1);
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'mn'))
    .map(([label, count]) => ({
      label,
      count,
      slug: slugify(label),
      href: `/categories/${slugify(label)}/`
    }));
}
