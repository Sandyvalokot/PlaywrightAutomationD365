import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
test.setTimeout(120_000);
  //Open the Test Environment
  await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=merc&mi=DefaultDashboard')

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
  //await page.getByRole('treeitem', { name: 'Accounts receivable' }).click();
  await page.getByRole('treeitem', { name: 'Accounts payable' }).click();
  await page.getByRole('button', { name: 'Expand all' }).click();
  await page.getByText('All purchase orders').click();
  //await page.getByRole('button', { name: ' New' }).click();

 //Create Purchase order
  await page.getByRole('button', { name: ' New' }).click();
  await page.getByLabel('Create purchase order').getByLabel('Vendor account').click();
  await page.getByLabel('Create purchase order').getByLabel('Vendor account').fill('000244');
  await page.getByLabel('Create purchase order').getByLabel('Vendor account').press('Tab');
   await page.waitForTimeout(6000);

   await page.getByRole('button', { name: 'OK' }).click();
  //-----------------------
// --sELECT lINE ITEM 
await page.waitForTimeout(6000);
await page.getByRole('button', { name: ' Remove' }).click();
  await page.waitForTimeout(3000);
//  await page.getByRole('checkbox', { name: 'Select or unselect row' }).click();
//  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: ' Add line' }).click();
//  await page.getByRole('button', { name: 'Add line' }).click();
  await page.waitForTimeout(3000);
  // await page.getByRole('textbox', { name: 'Item number' }).click();
  // await page.locator('#PurchLine_ItemId_9656_0_0').getByRole('button', { name: 'Open' }).click();
  // await page.waitForTimeout(3000);
  // await page.getByLabel('Lookup form').getByText('Item number').click();
 //
 await page.getByRole('combobox', { name: 'Item number' }).click();
  await page.getByRole('combobox', { name: 'Item number' }).fill('SB2BAR01');
  await page.getByRole('combobox', { name: 'Item number' }).press('Enter');
  await page.waitForTimeout(3000);
 //

    await page.getByRole('combobox', { name: 'Site' }).click();
    await page.getByRole('combobox', { name: 'Site' }).fill('1');
    await page.getByRole('combobox', { name: 'Site' }).press('Enter');
    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'Warehouse' }).click();
    await page.getByRole('combobox', { name: 'Warehouse' }).fill('MFSHZ');
    await page.getByRole('combobox', { name: 'Warehouse' }).press('Enter');
    await page.waitForTimeout(3000);

 await page.waitForTimeout(3000);
 
  await page.getByRole('textbox', { name: 'Quantity' }).click();
    await page.getByRole('textbox', { name: 'Quantity' }).fill('-98');
    await page.getByRole('textbox', { name: 'Quantity' }).press('Tab');
    await page.getByLabel('Unit price', { exact: true }).click();
  await page.getByLabel('Unit price', { exact: true }).fill('55');
  await page.getByLabel('Unit price', { exact: true }).press('Tab');
   // await page.getByRole('combobox', { name: 'Unit' }).click();
   // await page.getByRole('combobox', { name: 'Unit' }).fill('Each');
   // await page.getByRole('combobox', { name: 'Unit' }).press('Enter');
    await page.waitForTimeout(6000);
//2nd line
    await page.getByRole('button', { name: ' Add line' }).click();
    await page.waitForTimeout(3000);

 await page.getByRole('combobox', { name: 'Item number' }).click();
  await page.getByRole('combobox', { name: 'Item number' }).fill('SB2BAR01');
  await page.getByRole('combobox', { name: 'Item number' }).press('Enter');
  await page.waitForTimeout(3000);
 //

    await page.getByRole('combobox', { name: 'Site' }).click();
    await page.getByRole('combobox', { name: 'Site' }).fill('2');
    await page.getByRole('combobox', { name: 'Site' }).press('Enter');
    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'Warehouse' }).click();
    await page.getByRole('combobox', { name: 'Warehouse' }).fill('MFEU-EV');
    //await page.getByRole('combobox', { name: 'Warehouse' }).press('Enter');
    //await page.getByRole('button', { name: 'Back', exact: true }).click();

    await page.waitForTimeout(3000);

// await page.waitForTimeout(3000);
 
  //await page.getByRole('textbox', { name: 'Quantity' }).click();
    //await page.getByRole('textbox', { name: 'Quantity' }).fill('98');
   // await page.getByRole('textbox', { name: 'Quantity' }).press('Tab');
    await page.getByLabel('Unit price', { exact: true }).click();
  await page.getByLabel('Unit price', { exact: true }).fill('55');
  await page.getByLabel('Unit price', { exact: true }).press('Tab');
    //await page.getByRole('combobox', { name: 'Unit' }).click();
    //await page.getByRole('combobox', { name: 'Unit' }).fill('Each');
    //await page.getByRole('combobox', { name: 'Unit' }).press('Enter');
    await page.waitForTimeout(6000);



});