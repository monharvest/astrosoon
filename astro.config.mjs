import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import critters from 'astro-critters';

export default defineConfig({
  site: 'https://astrosoon.pages.dev',
  integrations: [
    tailwind(),
    sitemap(),
    critters({
      preload: 'swap',
      inlineFonts: true,
      mergeStylesheets: true,
      pruneSource: true,
      reduceInlineStyles: true,
    }),
  ],
  image: {
    domains: ['images.unsplash.com'],
    remotePatterns: [{ protocol: 'https' }]
  }
});