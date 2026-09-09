import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/data/config.ts';

// La URL real vive en un único sitio: src/data/config.ts (site.url).
// Cámbiala ahí cuando conectes tu dominio propio (ver README) y se
// actualizará aquí, en el sitemap, las canonical y en robots.txt.
export default defineConfig({
  site: site.url,
  trailingSlash: 'never',
  integrations: [sitemap()],
  compressHTML: true,
});
