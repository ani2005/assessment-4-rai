import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  use: {
    headless: true,
    timeout: 30000,
  },
});