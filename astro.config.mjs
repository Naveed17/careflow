// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change this to your real production domain before deploy.
const site = process.env.SITE || 'https://careflow-flame.vercel.app';

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'never',
  compressHTML: true,
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-PK' },
      },
    }),
  ],
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
