import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3030,
    host: false
  },
  site: 'https://ixtapazihua.com',
  integrations: [mdx(), sitemap()]
});