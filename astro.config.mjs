// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://MahyarArani.github.io',
  base: '/Portfolio', // Important: this must match your GitHub repository name!
  vite: {
    plugins: [tailwindcss()]
  }
});
