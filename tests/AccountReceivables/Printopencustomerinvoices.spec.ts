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
  await page.getByRole('treeitem', { name: 'Accounts receivable' }).click();
  await page.getByRole('button', { name: 'Collapse all' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('treeitem', { name: 'Invoices' }).click();
  await page.getByText('Open customer invoices').click();

    //await page.getByRole('button', { name: 'Expand all' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('row', { name: 'SIV0495925 000001 3/3/2025 4/' }).getByRole('checkbox').check();
    await page.getByText('Document', { exact: true }).click();
   // await page.getByRole('button', { name: 'View' }).click();
   // await page.getByRole('menuitem', { name: 'Copy' }).click();
   // await page.waitForTimeout(7000);
  await page.getByRole('button', { name: 'Download' }).click();
   await page.getByRole('menuitem', { name: 'Download' }).click();

    await page.waitForTimeout(10000);

   // print cant test in test environment.
   


}); 
