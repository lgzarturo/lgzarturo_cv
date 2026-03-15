import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lgzarturo.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), sitemap()],
  redirects: {
    '/about-me': '/recursos',
  }
});