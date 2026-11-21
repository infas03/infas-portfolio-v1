import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Used for canonical and social-share URLs.
  site: 'https://infas.app',
  vite: { plugins: [tailwindcss()] },
});
