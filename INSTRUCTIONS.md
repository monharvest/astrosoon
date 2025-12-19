# Project Instructions

## 1. Prerequisites
Ensure you have **Node.js** installed (version 18 or higher recommended).

## 2. Installation
Install the project dependencies:
```bash
npm install
```

## 3. Running in Development Mode
To start the development server (hot-reloading, no PWA caching):
```bash
npm run dev
```
- Access the site at: [http://localhost:4321](http://localhost:4321)

## 4. Accessing the Admin Panel (CMS)
To edit content locally using the Decap CMS admin panel:
```bash
npm run dev:cms
```
- **Website:** [http://localhost:4321](http://localhost:4321)
- **Admin Panel:** [http://localhost:4321/admin](http://localhost:4321/admin)
- *Note: This command runs both the Astro server and the local content proxy server.*

## 5. Building for Production
To build the site for deployment (generates `dist/` folder):
```bash
npm run build
```

## 6. Previewing Production Build (Localhost)
To test the production build locally (including PWA features and Service Workers):
```bash
npm run preview
```
- Access the site at: [http://localhost:4321](http://localhost:4321)
- *Note: Use this mode to test offline functionality and app installation.*

## 7. Troubleshooting
- **PWA Warnings in Dev:** You may see warnings about glob patterns in `npm run dev`. This is normal; PWA features are disabled in dev mode. Use `npm run preview` to test them.
- **Links not working in Preview:** If links redirect to the homepage, ensure `navigateFallback: '/'` is removed from `astro.config.mjs` (this has been fixed in the current version).
- **Admin Panel Issues:** Ensure you are running `npm run dev:cms`, not just `npm run dev`.
