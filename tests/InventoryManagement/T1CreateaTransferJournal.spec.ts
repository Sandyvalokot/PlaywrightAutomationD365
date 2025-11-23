import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
test.setTimeout(320_000);
  //Open the Test Environment
  await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmus&mi=DefaultDashboard')

  ////Login using Credentials 
  await page.getByPlaceholder('someone@lesmills.com').click();
  await page.getByPlaceholder('someone@lesmills.com').fill('Lmi.d365testuser4@lesmills.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('lmivic-927!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Skip setup' }).click();

  await page.getByText('Don\'t show this again').click();
  await page.getByRole('button', { name: 'Yes' }).click();

  ////Open Purchase Order Module

 
  await page.getByLabel('Modules').locator('span').nth(1).click();

   await page.getByRole('treeitem', { name: 'Inventory management' }).click();
    await page.getByRole('button', { name: 'Expand all' }).click();
    await page.getByText('Transfer', { exact: true }).click();
    await page.waitForTimeout(5000);

    // Create a Transfer Journal
    await page.getByRole('button', { name: ' New' }).click();
    await page.getByRole('group', { name: 'Overview' }).getByLabel('Description').fill('Automated Transfer Journal 1');
   
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(3000);

   
});