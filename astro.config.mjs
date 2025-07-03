// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// Configurable base path for client site migration
// Development: BASE_PATH=/ (for cartfullofx.com/[business] dynamic routing)
// Production: BASE_PATH=/ (for standalone client sites)
const basePath = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  base: basePath,
  vite: {
    plugins: [tailwindcss()],
  },
});