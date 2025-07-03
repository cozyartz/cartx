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
        // Cozyartz Media Brand Colors - Leadfoot Grey Theme
        'accent-slate': '#334155',
        'accent-teal': '#6B7280', // Leadfoot grey (similar to Ford's leadfoot grey)
        'accent-slate-light': '#475569',
        'accent-teal-light': '#9CA3AF', // Lighter leadfoot grey
        'accent-slate-dark': '#1E293B',
        'accent-teal-dark': '#4B5563', // Darker leadfoot grey
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