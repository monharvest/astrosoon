# Udaxgui.com Astro Theme

This is a reusable Astro theme for a blog, featuring a big hero section, tag chips, 3-column gradient cards, search in the header, and a clean footer.

## Overview

- **Framework:** Astro 5 + Content Collections
- **Styling:** Tailwind CSS
- **Pages:** Home, Post, Category
- **Features:** Featured hero, tag chips, category color gradients, card grid, pagination-ready scaffold

## Quick Start

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open [http://localhost:4321](http://localhost:4321) in your browser.

## Project Structure

- `astro.config.mjs` - Astro configuration with Tailwind and sitemap integrations
- `tailwind.config.cjs` - Tailwind configuration with custom colors and typography
- `postcss.config.cjs` - PostCSS configuration
- `src/styles/global.css` - Global styles with Tailwind directives
- `src/layouts/BaseLayout.astro` - Base layout for all pages
- `src/components/` - Reusable components (Header, Footer, Hero, etc.)
- `src/utils/` - Utility functions for slug generation and category styles
- `src/pages/` - Page routes (index, categories, posts)
- `src/content/` - Content collections configuration and posts
- `public/` - Static assets (logo.svg)

## Customization

- **Category Colors:** Edit `src/utils/categoryStyles.ts` to adjust gradients
- **Navigation:** Update links in `src/components/Header.astro`
- **Content:** Add new posts in `src/content/posts/` as .md files
- **Styling:** Modify Tailwind classes in components for closer design matching

## Adding Posts

Create new .md files in `src/content/posts/` with frontmatter:

```yaml
---
title: "Your Post Title"
description: "Brief description"
pubDate: 2025-11-06
category: "Category Name"
tags: ["tag1", "tag2"]
heroImage: "https://example.com/image.jpg"
featured: false
---
```

Content in Markdown below the frontmatter.

## Build

To build for production: `npm run build`

To preview the build: `npm run preview`