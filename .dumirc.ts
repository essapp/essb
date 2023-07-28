import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    footer: 'Copyright © 2023 | Powered by ess',
    logo: '/logo_t.svg',
  },
  favicons: ['favicon.png'],
});
