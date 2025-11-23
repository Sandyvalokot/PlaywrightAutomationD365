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
  await page.getByRole('treeitem', { name: 'Credit and collections' }).click();
    await page.getByRole('button', { name: 'Expand all' }).click();
    await page.getByText('Customer aging report').click();
    await page.waitForTimeout(5000);

    await page.getByRole('combobox', { name: 'Aging as of' }).click();
    await page.getByRole('combobox', { name: 'Aging as of' }).fill('11/23/2025');
    //await page.locator('#SysOperationTemplateForm_5_Fld3_1 div').nth(3).click();
   // await page.waitForTimeout(2000);
    //await page.getByRole('button', { name: 'Today' }).click();
    await page.getByRole('combobox', { name: 'Balance as of' }).click();
    await page.getByRole('combobox', { name: 'Balance as of' }).fill('11/23/2025');
   // await page.getByRole('button', { name: 'Today' }).click();
await page.getByRole('combobox', { name: 'Print aging period description' }).click();
await page.getByRole('combobox', { name: 'Print aging period description' }).fill('Yes');
await page.getByRole('button', { name: 'OK' }).click();
await page.waitForTimeout(6000);
});