# Udaxgui.com Astro Theme - Progressive Web App

This is a high-performance Astro theme for a blog, featuring a big hero section, category filtering, 3-column gradient cards, search in the header, and a clean footer. Optimized for PageSpeed Insights scores of 90+ and **fully functional as a Progressive Web App (PWA)** with offline support and installability.

## Overview

- **Framework:** Astro 5 + Content Collections
- **Styling:** Tailwind CSS
- **PWA:** Full offline functionality, installable on all devices
- **Pages:** Home, Post, Category, Offline fallback
- **Features:** Featured hero, category filter buttons, tag chips, category color gradients, card grid, pagination-ready scaffold
- **Performance:** Critical CSS inlining, self-hosted fonts, responsive AVIF/WebP images, removed render-blocking resources

## Progressive Web App Features

### 📱 Installable on All Devices
- **Desktop:** Chrome, Edge, Safari - Install via browser's install button
- **Android:** Chrome, Samsung Internet - "Add to Home Screen" or install prompt
- **iOS:** Safari - "Add to Home Screen" from Share menu
- **Windows/Mac/Linux:** Install as standalone app

### 🔌 Offline Functionality
- Service Worker caches all static assets automatically
- Previous visited pages work offline
- Images cached for 30 days
- Fonts and styles cached for extended periods
- Custom offline page when network unavailable

### 🚀 App-Like Experience
- Standalone display mode (no browser UI)
- Custom theme colors matching your brand
- Fast loading with pre-cached resources
- Background sync and updates
- Smooth transitions and navigation

### 📦 What's Cached Offline
- All HTML pages you've visited
- CSS and JavaScript files
- Local and remote images (Unsplash)
- Fonts and icons
- Navigation and UI components

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
4. **PWA Testing:** The PWA is enabled in development mode for testing

### Installing as PWA

#### Desktop (Chrome/Edge)
1. Visit the site in Chrome or Edge
2. Look for the install icon in the address bar (⊕ or computer icon)
3. Click "Install" and confirm
4. App launches in standalone window

#### Android
1. Visit the site in Chrome
2. Tap the menu (⋮) → "Install app" or "Add to Home Screen"
3. Confirm installation
4. App appears on home screen and app drawer

#### iOS (iPhone/iPad)
1. Visit the site in Safari
2. Tap the Share button (□↑)
3. Scroll and tap "Add to Home Screen"
4. Edit name if desired and tap "Add"
5. App appears on home screen

## Project Structure

- `astro.config.mjs` - Astro configuration with Tailwind, sitemap, astro-critters, and PWA integrations
- `tailwind.config.cjs` - Tailwind configuration with custom colors and typography
- `postcss.config.cjs` - PostCSS configuration
- `src/styles/global.css` - Global styles with Tailwind directives and Inter font import
- `src/layouts/BaseLayout.astro` - Base layout for all pages with PWA meta tags
- `src/components/` - Reusable components (Header, Footer, Hero, PostCard, SmartPicture, etc.)
- `src/utils/` - Utility functions for slug generation and category styles
- `src/pages/` - Page routes (index, categories, posts, offline)
- `src/content/` - Content collections configuration and posts
- `src/pwa.ts` - PWA service worker registration
- `src/pwa.d.ts` - TypeScript definitions for PWA modules
- `public/` - Static assets including PWA icons and manifest

## Customization

- **Category Colors:** Edit `src/utils/categoryStyles.ts` to adjust gradients
- **Navigation:** Update links in `src/components/Header.astro`
- **Content:** Add new posts in `src/content/posts/` as .md files
- **Styling:** Modify Tailwind classes in components for closer design matching
- **Performance:** Adjust image quality/sizes in `SmartPicture.astro` or astro-critters options in `astro.config.mjs`
- **PWA Icons:** Replace `public/pwa-192x192.png` and `public/pwa-512x512.png` with your branded icons
- **PWA Manifest:** Edit app name, colors, and description in `astro.config.mjs` under the AstroPWA integration
- **Offline Page:** Customize `src/pages/offline.astro` for your offline experience

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