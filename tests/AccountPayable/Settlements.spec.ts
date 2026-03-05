import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
test.setTimeout(420_000);
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
  await page.getByText('All vendors').click();
  await page.waitForTimeout(6000);
  await page.pause();
  await page.getByRole('row', { name: 'Address book 000003 Aon Risk' }).getByRole('checkbox').click();
  await page.pause();
  await page.getByRole('button', { name: 'Transactions', exact: true }).click();
    await page.waitForTimeout(3000);





});





