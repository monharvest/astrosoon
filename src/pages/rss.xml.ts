import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { excerpt } from '../utils/excerpt';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');

  return rss({
    title: 'Udaxgui.com — Итгэл ба Амьдрал',
    description: 'Итгэл, найдвар, хайр — нийтлэлүүд',
    site: context.site!,
    customData: '<language>mn</language>',
    items: posts
      .sort((a, b) => +new Date(b.data.pubDate) - +new Date(a.data.pubDate))
      .map((post) => ({
        title: post.data.title,
        description: post.data.description ?? excerpt(post.body ?? ''),
        pubDate: new Date(post.data.pubDate),
        categories: [post.data.category],
        link: `/posts/${post.id}/`
      }))
  });
}
