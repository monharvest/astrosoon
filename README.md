# Udaxgui.com Astro Theme

This is a high-performance Astro theme for a blog, featuring a big hero section, category filtering, 3-column gradient cards, search in the header, and a clean footer. Optimized for PageSpeed Insights scores of 90+.

## Overview

- **Framework:** Astro 5 + Content Collections
- **Styling:** Tailwind CSS
- **Pages:** Home, Post, Category
- **Features:** Featured hero, category filter buttons, tag chips, category color gradients, card grid, pagination-ready scaffold
- **Performance:** Critical CSS inlining, self-hosted fonts, responsive AVIF/WebP images, removed render-blocking resources

## Performance Optimizations

This theme implements several performance optimizations for excellent PageSpeed Insights scores:

### 🚀 Critical CSS Inlining
- Uses `astro-critters` to inline critical CSS above the fold
- Reduces render-blocking CSS and improves LCP/FCP scores
- Configured with preload 'swap', inlineFonts, merge, prune, and reduce options

### 🔤 Self-Hosted Fonts
- Replaced Google Fonts with `@fontsource-variable/inter`
- Inter variable font loaded locally with `font-display: swap`
- Eliminates external font requests and render-blocking chains

### 🖼️ Responsive Images
- Custom `SmartPicture` component generates AVIF/WebP srcsets
- Proper `sizes` attributes for different breakpoints
- Optimized quality settings (58-60) and loading priorities
- Prevents oversized images affecting LCP

### 🎨 UI Simplifications
- Removed dark mode support for lighter CSS bundle
- Eliminated sticky category chips for cleaner interactions
- Streamlined component styles and removed unused classes

## Quick Start

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open [http://localhost:4321](http://localhost:4321) in your browser.

## Project Structure

- `astro.config.mjs` - Astro configuration with Tailwind, sitemap, and astro-critters integrations
- `tailwind.config.cjs` - Tailwind configuration with custom colors and typography
- `postcss.config.cjs` - PostCSS configuration
- `src/styles/global.css` - Global styles with Tailwind directives and Inter font import
- `src/layouts/BaseLayout.astro` - Base layout for all pages
- `src/components/` - Reusable components (Header, Footer, Hero, PostCard, SmartPicture, etc.)
- `src/utils/` - Utility functions for slug generation and category styles
- `src/pages/` - Page routes (index, categories, posts)
- `src/content/` - Content collections configuration and posts
- `public/` - Static assets

## Customization

- **Category Colors:** Edit `src/utils/categoryStyles.ts` to adjust gradients
- **Navigation:** Update links in `src/components/Header.astro`
- **Content:** Add new posts in `src/content/posts/` as .md files
- **Styling:** Modify Tailwind classes in components for closer design matching
- **Performance:** Adjust image quality/sizes in `SmartPicture.astro` or astro-critters options in `astro.config.mjs`

## Adding Posts

Create new .md files in `src/content/posts/` with frontmatter:

```yaml
---
title: "Your Post Title"
description: "Brief description"
pubDate: 2025-11-06
category: "Category Name"
tags: ["tag1", "tag2"]
heroImage: "https://images.unsplash.com/photo-..."
featured: false
---
```

Content in Markdown below the frontmatter.

## Build & Deploy

To build for production: `npm run build`

To preview the build: `npm run preview`

The build output includes inlined critical CSS and optimized images. Deploy the `dist/` folder to your hosting provider.

## VS Code Tasks

This project includes VS Code tasks for easy development:
- `Ctrl+Shift+P` → "Tasks: Run Task" → Select "build", "dev", or "preview"