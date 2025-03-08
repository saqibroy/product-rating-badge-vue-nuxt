// @ts-check

import { defineVitestConfig } from '@nuxt/test-utils/config';
import { fileURLToPath } from 'node:url';

export default defineVitestConfig({
  test: {
    name: 'vgl-challenge',
    globals: true,
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL('./tests/fixtures/basic', import.meta.url)),
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
});
