import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://agents.assorted.group',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
