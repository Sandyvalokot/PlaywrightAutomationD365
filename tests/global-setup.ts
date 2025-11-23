import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Go to login page
  await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmuk&mi=DefaultDashboard');

  // Login steps
  await page.getByPlaceholder('someone@lesmills.com').fill('Lmi.d365testuser4@lesmills.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').fill('lmivic-927!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Skip setup' }).click();
  await page.getByText('Don\'t show this again').click();
  await page.getByRole('button', { name: 'Yes' }).click();

  // Save the login session into a file
  await page.context().storageState({ path: 'auth.json' });

  await browser.close();
}

export default globalSetup;
