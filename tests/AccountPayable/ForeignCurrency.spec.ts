import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
test.setTimeout(120_000);
  //Open the Test Environment
  await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmus&mi=DefaultDashboard')

  ////Login using Credentials 
  await page.getByPlaceholder('someone@lesmills.com').click();
  await page.getByPlaceholder('someone@lesmills.com').fill('Lmi.d365testuser4@lesmills.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('lmivic-927!');
  await page.getByRole('button', { name: 'Sign in' }).click();
 // await page.getByText('Don\'t show this again').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Skip setup' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();

  ////Open Purchase Order Module
  await page.getByLabel('Modules').locator('span').nth(1).click();
  //await page.getByRole('treeitem', { name: 'Accounts receivable' }).click();
  await page.getByRole('treeitem', { name: 'Accounts payable' }).click();
  await page.getByRole('button', { name: 'Expand all' }).click();
  //await page.getByText('Vendor payment journal').click();
  await page.waitForTimeout(3000);
  await page.getByText('Foreign currency revaluation').click();
  await page.waitForTimeout(6000);
  await page.getByRole('button', { name: 'Simulation' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('combobox', { name: 'Considered date' }).click();
  await page.getByRole('combobox', { name: 'Considered date' }).fill('02/27/2026');
  await page.getByRole('combobox', { name: 'Considered date' }).press('Enter');
  await page.waitForTimeout(3000);
  await page.pause();
 // await page.getByRole('button', { name: 'OK' }).click();
  //await page.waitForTimeout(3000);
  await page.pause();
  await page.getByRole('button', { name: 'Export' }).click();
  await page.getByRole('menuitem', { name: 'CSV' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Back', exact: true }).click();
  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'Foreign currency revaluation' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('combobox', { name: 'Considered date' }).click();
  await page.getByRole('combobox', { name: 'Considered date' }).fill('02/27/2026');
  await page.getByRole('combobox', { name: 'Considered date' }).press('Enter');
  await page.waitForTimeout(3000);
  await page.getByRole('combobox', { name: 'Date of rate' }).click();
  await page.getByRole('combobox', { name: 'Date of rate' }).fill('02/27/2026');
  await page.getByRole('combobox', { name: 'Date of rate' }).press('Enter');
  await page.waitForTimeout(3000);
  await page.getByRole('combobox', { name: 'Dimension' }).click();
  await page.getByRole('option', { name: 'Posting' }).click();
  
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(5000);
  await page.pause();

  await page.getByLabel('Foreign currency revaluation', { exact: true }).getByText('Executed date').click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: ' Sort newest to oldest' }).click();
  await page.waitForTimeout(3000);
  await page.pause();
  await page.waitForTimeout(5000);
});