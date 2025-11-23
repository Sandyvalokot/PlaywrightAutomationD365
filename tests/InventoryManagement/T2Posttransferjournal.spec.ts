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

  ////Open Inventory Management Module
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

     // Navigate to Header tab and fill in the fields
    await page.getByText('Header', { exact: true }).click();
    await page.getByRole('button', { name: 'Store inventory' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Store inventory' }).click();
    await page.getByRole('combobox', { name: 'Site' }).click();
    await page.getByRole('combobox', { name: 'Site' }).fill('1');
    await page.getByRole('combobox', { name: 'Site' }).press('Enter');
    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'Warehouse' }).click();
    await page.getByRole('combobox', { name: 'Warehouse' }).fill('MFCH');
    await page.getByRole('combobox', { name: 'Warehouse' }).press('Enter');
    await page.waitForTimeout(3000);

// NAvigate to Lines tab and add a new line
    await page.getByRole('tab', { name: 'Lines' }).locator('span').click();
    await page.waitForTimeout(3000);
    //await page.getByRole('button', { name: 'New' }).click();
   // await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Journal lines' }).click();
    await page.waitForTimeout(3000);    
    await page.pause();
    // Add a line to the Transfer Journal

   // await page.locator('#inventjournaltabletransfer_19_NewLine').click();
    /*await page.waitForTimeout(5000);
    await page.locator('#inventjournaltabletransfer_19_NewLine').click();
    await page.waitForTimeout(5000);
    await page.locator('#InventJournalTrans_ItemId_522_0_0').getByRole('button', { name: 'Open' }).click();
    await page.getByLabel('Lookup form').getByText('Item number').click(); */
    //await page.getByRole('combobox', { name: 'Filter field: Item number,' }).click();
    await page.getByRole('combobox', { name: 'Item number' }).fill('EVSB2WPSET');
      await page.getByRole('combobox', { name: 'Item number' }).press('Enter');
    //await page.getByRole('button', { name: 'Apply' }).click();
    //await page.getByRole('textbox', { name: 'Item number' }).click();
  
    await page.waitForTimeout(5000);

    await page.getByRole('button', { name: 'Display dimensions' }).hover();
    await page.getByRole('button', { name: 'Display dimensions' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('checkbox', { name: 'Site' }).click();
    await page.getByRole('checkbox', { name: 'Warehouse' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(3000);
    //await page.getByRole('combobox', { name: 'Item number' }).click();
    //await page.getByRole('combobox', { name: 'Item number' }).fill('EVSB2WPSET');
    //await page.getByRole('combobox', { name: 'Item number' }).press('Enter');
      //await page.getByRole('combobox', { name: 'From site' }).click();
      //await page.getByRole('combobox', { name: 'From site' }).fill('1');
      //await page.getByRole('combobox', { name: 'From site' }).press('Enter');
      //await page.waitForTimeout(3000);
      await page.getByRole('combobox', { name: 'To site' }).click();
      await page.getByRole('combobox', { name: 'To site' }).fill('1');
      await page.getByRole('combobox', { name: 'To site' }).press('Enter');
      await page.waitForTimeout(3000);
      //await page.getByRole('combobox', { name: 'From warehouse' }).click();
      //await page.getByRole('combobox', { name: 'From warehouse' }).fill('MFCH');
      //await page.getByRole('combobox', { name: 'From warehouse' }).press('Enter');
      //await page.waitForTimeout(3000);
      await page.getByRole('combobox', { name: 'To warehouse' }).click();
      await page.getByRole('combobox', { name: 'To warehouse' }).fill('LOAN STOCK');
      await page.getByRole('combobox', { name: 'To warehouse' }).press('Enter');

      //Add line details
       await page.getByText('Financial dimension').click();
    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'InterCompany value' }).click();
    await page.getByRole('combobox', { name: 'InterCompany value' }).fill('NA');
    await page.getByRole('combobox', { name: 'InterCompany value' }).press('Enter');
    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'MarketType value' }).click();
    await page.getByRole('combobox', { name: 'MarketType value' }).fill('NA');
    await page.getByRole('combobox', { name: 'MarketType value' }).press('Enter');
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: ' Save' }).click();
    await page.waitForTimeout(6000);

    // Post the Movement Journal

    await page.getByRole('button', { name: 'Post', exact: true }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(6000);

   
   








  

});

 