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
  await page.getByRole('treeitem', { name: 'Batch invoicing' }).click();
  await page.getByText('Invoice', { exact: true }).click();
    //await page.getByRole('button', { name: 'Expand all' }).click();
    await page.waitForTimeout(5000);

    await page.getByRole('combobox', { name: 'Quantity' }).click();
    await page.getByRole('combobox', { name: 'Quantity' }).fill('ALL');

   // await page.getByRole('button', { name: 'Select', exact: true }).click();
   // await page.waitForTimeout(5000);
    //await page.getByRole('row', { name: 'The row is up to date. Sales orders Sales orders Sales order' }).getByRole('checkbox').check();
    //await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Batch' }).click();
    await page.getByRole('switch', { name: 'Batch processing' }).check();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.getByLabel('You are about to post the').getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(3000);

    //cant complete the process to verify the status of the batch proccess as it take time. 
});