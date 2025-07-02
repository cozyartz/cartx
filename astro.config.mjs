// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// Configurable base path for client site migration
// Development: BASE_PATH=/grillz (for cartfullofx.com/grillz)
// Production: BASE_PATH=/ (for standalone grillz.com)
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