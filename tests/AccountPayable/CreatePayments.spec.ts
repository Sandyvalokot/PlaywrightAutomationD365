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
  await page.getByText('Vendor payment journal').click();
  await page.waitForTimeout(6000);
  await page.getByRole('button', { name: ' New' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Open', exact: true }).click();
  await page.getByRole('button', { name: 'Open', exact: true }).press('Enter');
  await page.waitForTimeout(3000);
  // Add lines
  await page.getByRole('button', { name: 'Lines', exact: true }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('combobox', { name: 'Account', exact: true }).click();
  await page.getByRole('combobox', { name: 'Account', exact: true }).fill('000645');
  await page.getByRole('combobox', { name: 'Account', exact: true }).press('Enter');
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Debit' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Debit' }).fill('200');
  await page.getByRole('textbox', { name: 'Debit' }).press('Enter');
  await page.getByRole('button', { name: 'Settle transactions' }).click();
  await page.waitForTimeout(3000);
  await page.locator('#OverviewGrid_5801_0-row-0').getByRole('checkbox', { name: 'Select or unselect row' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'No' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: ' Save' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Back', exact: true }).click();
  await page.waitForTimeout(3000);
  // INprogress ...............as Test user cant proceed with workflow as per the current security role assigned. Need to check with team on this.

});