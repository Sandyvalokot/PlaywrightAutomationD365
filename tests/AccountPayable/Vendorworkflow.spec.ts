import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
test.setTimeout(480_000);
  //Open the Test Environment
  await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmss&mi=DefaultDashboard')

  ////Login using Credentials 
  await page.getByPlaceholder('someone@lesmills.com').click();
  await page.getByPlaceholder('someone@lesmills.com').fill('Lmi.d365testuser4@lesmills.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('lmivic-927!');
  await page.getByRole('button', { name: 'Sign in' }).click();
   await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(3000);
 // await page.getByText('Don\'t show this again').click();
  await page.getByRole('button', { name: 'Skip setup' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();

  ////Open Purchase Order Module
  await page.getByLabel('Modules').locator('span').nth(1).click();
  //await page.getByRole('treeitem', { name: 'Accounts receivable' }).click();
  await page.getByRole('treeitem', { name: 'Accounts payable' }).click();
  await page.getByRole('button', { name: 'Expand all' }).click();
  await page.getByText('All vendors').click();
  await page.waitForTimeout(3000);

    //Create Vendor
    await page.getByRole('button', { name: ' New' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'Name' }).click();
    await page.getByRole('combobox', { name: 'Name' }).fill('1NZ1');
    await page.getByRole('textbox', { name: 'Search name' }).click();
    await page.getByRole('textbox', { name: 'Search name' }).fill('1NZ1');
    await page.waitForTimeout(6000);
    //await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(3000);
   
    await page.getByRole('combobox', { name: 'Group', exact: true }).click();
    await page.locator('#vendtablelistpage_2_Posting_VendGroup div').nth(1).click();
    await page.waitForTimeout(3000);
   // await page.getByRole('combobox', { name: 'Group' }).hover();
    //await page.getByRole('combobox', { name: 'Group' }).click();
    await page.pause();
    await page.getByRole('combobox', { name: 'Group', exact: true  }).fill('DOMESTIC');
    await page.getByRole('combobox', { name: 'Group' , exact: true }).press('Enter');
    await page.getByRole('button', { name: ' Save' }).click();
    await page.waitForTimeout(3000);


    //add address
   
    await page.getByLabel('LogisticsPostalAddressGrid').getByRole('button', { name: ' Add' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('textbox', { name: 'Name or description' }).click();
    await page.getByRole('textbox', { name: 'Name or description' }).fill('1NZ1');
    await page.getByRole('combobox', { name: 'Country/region' }).click();
    await page.getByRole('combobox', { name: 'Country/region' }).fill('NZL');
    await page.waitForTimeout(3000);

    await page.getByRole('combobox', { name: 'ZIP/postal code' }).hover();
    await page.getByRole('combobox', { name: 'ZIP/postal code' }).click();
    await page.getByRole('combobox', { name: 'ZIP/postal code' }).fill('1010');
    await page.getByRole('textbox', { name: 'Street' }).click();
    await page.getByRole('textbox', { name: 'Street' }).fill('Auckland Street');
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(6000);


    await page.locator('#vendtablelistpage_2_NewContactInfo').click();
    await page.waitForTimeout(3000);
    
    await page.getByRole('textbox', { name: 'Contact number/address' }).click();
    await page.getByRole('textbox', { name: 'Contact number/address' }).fill('02020202020');
    await page.getByRole('textbox', { name: 'Contact number/address' }).press('Enter');
    

   // await page.getByRole('button', { name: 'Invoice and delivery' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'Sales tax group' }).click();
    await page.getByRole('combobox', { name: 'Sales tax group' }).fill('GSTNZ15P');
    await page.getByRole('combobox', { name: 'Sales tax group' }).press('Enter');

    //await page.getByRole('button', { name: 'Payment' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('combobox', { name: 'Method of payment' }).click();
    await page.getByRole('combobox', { name: 'Method of payment' }).fill('Direct Debit');
    await page.getByRole('combobox', { name: 'Method of payment' }).press('Enter');

    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'Department value' }).click();
    await page.getByRole('combobox', { name: 'Department value' }).fill('MKT');
    await page.getByRole('combobox', { name: 'Department value' }).press('Enter');


    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'Set Move value' }).click();
    await page.getByRole('combobox', { name: 'Set Move value' }).fill('NA');
    await page.getByRole('combobox', { name: 'Set Move value' }).press('Enter');

    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'InterCompany value' }).click();
    await page.getByRole('combobox', { name: 'InterCompany value' }).fill('NA');
    await page.getByRole('combobox', { name: 'InterCompany value' }).press('Enter');

    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'JobCode value' }).click();
    await page.getByRole('combobox', { name: 'JobCode value' }).fill('NA');
    await page.getByRole('combobox', { name: 'JobCode value' }).press('Enter');

    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'MarketType value' }).click();
    await page.getByRole('combobox', { name: 'MarketType value' }).fill('NA');
    await page.getByRole('combobox', { name: 'MarketType value' }).press('Enter');

    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'Platform value' }).click();
    await page.getByRole('combobox', { name: 'Platform value' }).fill('NA');
    await page.getByRole('combobox', { name: 'Platform value' }).press('Enter');

    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'Product value' }).click();
    await page.getByRole('combobox', { name: 'Product value' }).fill('NA');
    await page.getByRole('combobox', { name: 'Product value' }).press('Enter');

    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'ProductType value' }).click();
    await page.getByRole('combobox', { name: 'ProductType value' }).fill('NA');
    await page.getByRole('combobox', { name: 'ProductType value' }).press('Enter');

    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'Role value' }).click();
    await page.getByRole('combobox', { name: 'Role value' }).fill('NA');
    await page.getByRole('combobox', { name: 'Role value' }).press('Enter');

    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'Territory value' }).click();
    await page.getByRole('combobox', { name: 'Territory value' }).fill('NZ');

    await page.getByRole('button', { name: ' Save' }).click();
    await page.waitForTimeout(6000);
    
    //create Bank account
    await page.getByRole('button', { name: 'Bank accounts' }).click();
    await page.waitForTimeout(7000);
    await page.getByRole('button', { name: ' New' }).click();
    await page.waitForTimeout(3000);
    //await page.locator('#VendBankAccounts_2_DetailsHeader_AccountID_input').hover();
    await page.waitForTimeout(3000);
    //await page.locator('#vendbankaccounts_1_DetailsHeader_AccountID_input').fill('Test31NZ');

    //await page.locator('#vendbankaccounts_1_DetailsHeader_AccountID_input').fill('Test2NZ');
    //await page.waitForTimeout(3000);
   // await page.locator("[id^='DetailsHeader_AccountID_input']").waitFor({ state: 'visible', timeout: 10000 });
    //await page.locator("[id^='DetailsHeader_AccountID_input']").click();
   // await page.locator("[id^='DetailsHeader_AccountID_input']").fill('TestnzNZ');
 //   await page.locator("[id^='DetailsHeader_AccountID_input']").press('Enter');
 await page.pause(); // <--- script will stop here

    await page.waitForTimeout(3000);

    await page.getByRole('textbox', { name: 'Name (requires approval)' }).click();
    await page.getByRole('textbox', { name: 'Name (requires approval)' }).fill('1NZ1');
    await page.getByRole('textbox', { name: 'Name (requires approval)' }).press('Enter');
    await page.waitForTimeout(3000);

    await page.getByRole('combobox', { name: 'Bank groups' }).click();
    await page.getByRole('combobox', { name: 'Bank groups' }).fill('ASB');
    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'Bank groups' }).press('Enter');
    await page.getByRole('textbox', { name: 'Bank account number (requires' }).click();
    await page.getByRole('textbox', { name: 'Bank account number (requires' }).fill('123 456789 000');
    await page.getByRole('textbox', { name: 'Bank account number (requires' }).press('Enter');
    await page.waitForTimeout(3000);
   // await page.locator('#VendBankAccounts_25_DetailsHeader_AccountID_input').click();
   

 await page.getByRole('textbox', { name: 'Name (requires approval)' }).click();
    await page.getByRole('textbox', { name: 'Name (requires approval)' }).fill('TestnzNZ');
    await page.getByRole('textbox', { name: 'Name (requires approval)' }).press('Enter');
    await page.waitForTimeout(3000);

    //await page.pause();
    //await page.waitForSelector('#ShellBlockingDiv', { state: 'hidden', timeout: 60000 });
    //await page.locator('#vendbankaccounts_1_DetailsHeader_AccountID_input').click();
   //await page.locator('#vendbankaccounts_1_DetailsHeader_AccountID_input').fill('Test31NZ');
   //await page.locator('#vendbankaccounts_1_DetailsHeader_AccountID_input').press('Enter');

await page.waitForSelector('#ShellBlockingDiv', { state: 'hidden', timeout: 60000 });

// Wait for the input to be visible and enabled


    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: ' Save' }).click();
    await page.waitForTimeout(6000);

    await page.getByRole('button', { name: 'Workflow' }).click();
    await page.waitForTimeout(3000);

    await page.getByRole('menuitem', { name: 'Submit' }).click();
    await page.waitForTimeout(3000);

    await page.getByRole('textbox', { name: 'Comment' }).click();
    await page.getByRole('textbox', { name: 'Comment' }).fill('Submitting for approval');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Workflow' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('menuitem', { name: 'View history' }).click();
    await page.waitForTimeout(6000);
     await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
     await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Back', exact: true }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
      await page.getByRole('button', { name: 'Workflow' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('menuitem', { name: 'View history' }).click();
    await page.waitForTimeout(6000);
   // await page.getByRole('row', { name: 'Lucy Man 9/30/2025 11:20:00' }).getByRole('checkbox').check();

    await page.getByRole('button', { name: ' Reassign' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'User' }).click();
    await page.getByRole('combobox', { name: 'User' }).fill('Lmi.d365testuser4');
    await page.waitForTimeout(3000);
    await page.getByRole('combobox', { name: 'User' }).press('Enter');
  
  // await page.getByRole('button', { name: 'Apply' }).click();
   await page.waitForTimeout(3000);
   //await page.getByRole('textbox', { name: 'Alias' }).click();
   // await page.waitForTimeout(3000);
   // await page.getByRole('button', { name: 'Reassign', exact: true }).click();
    //await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Back', exact: true }).click();
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Workflow' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('menuitem', { name: 'Approve' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'Comment' }).click();
    await page.getByRole('textbox', { name: 'Comment' }).fill('Approved');
    await page.getByRole('button', { name: 'Approve' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Workflow' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('menuitem', { name: 'View history' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Back', exact: true }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Back', exact: true }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    //Vendor approved


});