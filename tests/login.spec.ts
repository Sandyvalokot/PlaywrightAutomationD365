// tests/login.setup.ts
import { test } from '@playwright/test';
test.setTimeout(220_000);
test('Login and save auth state', async ({ page }) => {
  await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmuk&mi=DefaultDashboard', { waitUntil: 'networkidle' });
await page.waitForSelector('input[placeholder="someone@lesmills.com"]', { timeout: 60000 });
   await page.getByPlaceholder('someone@lesmills.com').click();
  await page.getByPlaceholder('someone@lesmills.com').fill('Lmi.d365testuser4@lesmills.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('lmivic-927!');
  await page.getByRole('button', { name: 'Sign in' }).click();

 // await page.waitForSelector('button:has-text("Next")', { timeout: 10000 });
 /* await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Skip setup' }).click();

  await page.getByText('Don\'t show this again').click();
  await page.getByRole('button', { name: 'Yes' }).click(); */


  await page.context().storageState({ path: 'auth.json' });
});