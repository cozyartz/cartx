/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka One', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        // Cozyartz Media Brand Colors
        'accent-slate': '#334155',
        'accent-teal': '#14B8A6',
        'accent-slate-light': '#475569',
        'accent-teal-light': '#2DD4BF',
        'accent-slate-dark': '#1E293B',
        'accent-teal-dark': '#0F766E',
        'dark-bg': '#0A0A0A',
        'dark-surface': '#1A1A1A',
        'dark-border': '#2A2A2A',
        // Keeping old colors for other demo sites
        'accent-red': '#DC2626',
        'accent-orange': '#EA580C',
        'accent-red-light': '#EF4444',
        'accent-orange-light': '#F97316',
        'accent-red-dark': '#B91C1C',
        'accent-orange-dark': '#C2410C',
      },
    },
  },
}