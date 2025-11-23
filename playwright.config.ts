import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. */
  reporter: 'html',

  /* Shared settings for all the projects below. */
  use: {
    // 👇 storageState will keep you logged in
   // storageState: 'auth.json',
    //trace: 'on-first-retry',
    // Optional base URL if you want shorter page.goto() calls
    baseURL: 'https://lmi-test.sandbox.operations.dynamics.com',
    headless: false,
    trace: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
   /* {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    }, */
    // Safari / mobile configs can stay commented out for now
  ],

  // 👇 add this line to run login once before all tests
  //globalSetup: require.resolve('./tests/global-setup'),
});
