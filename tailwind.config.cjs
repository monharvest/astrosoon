/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Arial']
      },
      boxShadow: {
        card: '0 2px 8px rgba(15,23,42,.08), 0 8px 24px rgba(15,23,42,.06)'
      },
      colors: {
        surface: {
          DEFAULT: '#0b1220',
          2: '#0f172a'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};