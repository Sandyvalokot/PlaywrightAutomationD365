import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
test.setTimeout(480_000);
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
  await page.getByRole('button', { name: 'Skip setup' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();

  ////Open Purchase Order Module
  await page.getByLabel('Modules').locator('span').nth(1).click();
  //await page.getByRole('treeitem', { name: 'Accounts receivable' }).click();
  await page.getByRole('treeitem', { name: 'Accounts payable' }).click();
  await page.getByRole('button', { name: 'Expand all' }).click();
  await page.getByText('Vendor payment journal').click();
  await page.waitForTimeout(3000);

    //Create Vendor Payment Journal
    await page.getByRole('button', { name: ' New' }).click();
    await page.waitForTimeout(3000);
    await page.pause();
    await page.getByRole('combobox', { name: 'Name' }).fill('USD PAY');
    await page.getByRole('combobox', { name: 'Name' }).press('Enter');
    await page.pause();
   // await page.getByRole('row', { name: 'The row is up to date. LMUS-JBN-014414 USD PAY USD Payment Journal Posted Log' }).getByLabel('Description').click();
    //await page.pause();
   // await page.getByRole('row', { name: 'The row is up to date. LMUS-JBN-014414 USD PAY USD Payment Journal Posted Log' }).getByLabel('Description').fill('Automation Payment Journal');
   // await page.getByRole('row', { name: 'The row is up to date. LMUS-JBN-014414 USD PAY USD Payment Journal Posted Log' }).getByLabel('Description').press('Enter');
     await page.waitForTimeout(3000);
     await page.pause();
    //Add new line to the journal
    await page.getByRole('button', { name: 'Lines', exact: true }).click();
    await page.waitForTimeout(3000);

    //Create payment proposal
    await page.getByRole('button', { name: 'Payment proposal' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Payment proposal' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('menuitem', { name: 'Create payment proposal' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('combobox', { name: 'From date' }).click();
    await page.getByRole('combobox', { name: 'From date' }).fill('01/01/2024');
    await page.getByRole('combobox', { name: 'From date' }).press('Enter');
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(10000);

    //Modify Payment proposal
    await page.getByLabel('Vendor payment proposal').getByText('Vendor bank account').click();
    await page.getByRole('button', { name: 'begins with ' }).click();
    await page.getByRole('menuitem', { name: 'does not contain' }).click();
    await page.getByRole('combobox', { name: 'Filter field: Vendor bank' }).click();
    await page.getByRole('combobox', { name: 'Filter field: Vendor bank' }).fill('ACH');
    await page.getByRole('combobox', { name: 'Filter field: Vendor bank' }).press('Enter');
    await page.getByRole('button', { name: 'Apply' }).click();
    await page.waitForTimeout(5000);
    await page.getByLabel('Vendor payment proposal').getByRole('checkbox', { name: 'Select or unselect all rows' }).check();
    await page.getByRole('button', { name: ' Remove' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Yes' }).click();
    await page.waitForTimeout(7000);
    await page.getByLabel('Vendor payment proposal').getByText('Vendor bank account').click();
    await page.getByRole('button', { name: 'Clear' }).click();
    await page.waitForTimeout(5000);
    await page.getByLabel('Vendor payment proposal').getByRole('checkbox', { name: 'Select or unselect all rows' }).check();

    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Create payments' }).click();
    await page.waitForTimeout(10000);
   
    // complete the workflow for payment journal approval
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: ' Save' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Back', exact: true }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);


});