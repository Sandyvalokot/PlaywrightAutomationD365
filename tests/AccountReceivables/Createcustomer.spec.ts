import {expect, test} from '@playwright/test'

 
 
test('createSalesOrder',async({page})=> {
   //Open the Test Environment 
   test.setTimeout(320_000);
   await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmss&mi=DefaultDashboard')
   


   //Login using Credentials 
  await page.getByPlaceholder('someone@lesmills.com').fill('Lmi.d365testuser4@lesmills.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('lmivic-927!');
  await page.getByRole('button', { name: 'Sign in' }).click();
await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Skip setup' }).click();
  await page.getByLabel('Don\'t show this again').check();
  await page.getByRole('button', { name: 'Yes' }).click();

  //Navigatingto the Customer Module
   await page.getByLabel('Modules').locator('span').nth(1).click();
   await page.getByRole('treeitem', { name: 'Accounts receivable' }).click();
   await page.getByRole('button', { name: 'Expand all' }).click();
   await page.getByText('All customers').click();

   //Create a new Customer
   await page.getByRole('button', { name: ' New' }).click();
   await page.getByRole('combobox', { name: 'Name' }).click();
   await page.getByRole('combobox', { name: 'Name' }).fill('Test 2X1');
   await page.waitForTimeout(3000);
   await page.getByRole('combobox', { name: 'Name' }).press('Enter');
 //  await page.getByLabel('Lookup form').getByRole('button', { name: 'Cancel' }).click();
   await page.getByRole('combobox', { name: 'Customer group' }).hover();
   await page.waitForTimeout(3000);
   await page.getByRole('combobox', { name: 'Customer group' }).click();
   await page.waitForTimeout(5000);
   await page.getByRole('combobox', { name: 'Customer group' }).fill('Related');
   //await page.locator('#DirPartyQuickCreateForm_76_DynamicDetail_CustGroup div').nth(1).click();
   await page.waitForTimeout(3000);
   await page.getByRole('combobox', { name: 'Country/region' }).hover();
   await page.getByRole('combobox', { name: 'Country/region' }).click();
   await page.getByRole('combobox', { name: 'Country/region' }).clear();
   await page.getByRole('combobox', { name: 'Country/region' }).fill('NZL');
   await page.getByRole('button', { name: 'Save', exact: true }).click();
   await page.waitForTimeout(3000);

  // await page.getByRole('button', { name: 'Save', exact: true }).click();
   await page.waitForTimeout(5000);

   //Address details
   await page.getByRole('button', { name: 'Contact information' }).click();
   await page.waitForTimeout(3000);
   await page.getByRole('button', { name: 'Contact information' }).click();
   await page.waitForTimeout(3000);
   await page.getByRole('button', { name: ' Add' }).click();
   await page.getByRole('textbox', { name: 'Contact number/address' }).click();
   await page.getByRole('textbox', { name: 'Contact number/address' }).fill('09363235735');
   await page.waitForTimeout(3000);

   //Sales Demography
   //await page.getByRole('button', { name: 'Sales demographics' }).click();
   //await page.waitForTimeout(3000);


   //Sales order defaults
   await page.getByRole('button', { name: 'Sales order defaults' }).click();
   await page.waitForTimeout(3000);
   await page.getByRole('button', { name: 'Sales order defaults' }).click();
   await page.waitForTimeout(3000);
   await page.getByRole('combobox', { name: 'Site' }).click();
   await page.getByRole('combobox', { name: 'Site' }).fill('01');
   await page.getByRole('combobox', { name: 'Site' }).press('Enter');
   await page.getByRole('combobox', { name: 'Warehouse' }).click();
   await page.getByRole('combobox', { name: 'Warehouse' }).fill('110');
   await page.getByRole('button', { name: ' Save' }).click();
   await page.waitForTimeout(3000);

   //Payment defaults
   await page.getByRole('button', { name: 'Payment defaults' }).click();
   await page.waitForTimeout(3000);
   await page.getByRole('button', { name: 'Payment defaults' }).click();
   await page.waitForTimeout(3000);
   await page.getByRole('combobox', { name: 'Terms of payment' }).click();
   await page.getByRole('combobox', { name: 'Terms of payment' }).fill('Net30');
   await page.waitForTimeout(3000);
   await page.getByRole('combobox', { name: 'Method of payment' }).click();
   await page.getByRole('combobox', { name: 'Method of payment' }).fill('CHEQUE');

   // Add Financial dimensions
   await page.getByRole('button', { name: 'Financial dimensions' }).click();
   await page.waitForTimeout(3000);
   await page.getByRole('button', { name: 'Financial dimensions' }).click();
   await page.waitForTimeout(3000);
   await page.getByRole('combobox', { name: 'Department value' }).click();
   await page.getByRole('combobox', { name: 'Department value' }).fill('FIN');
   await page.getByRole('combobox', { name: 'Department value' }).press('Enter');
   await page.getByRole('combobox', { name: 'Set Move value' }).click();
   await page.getByRole('combobox', { name: 'Set Move value' }).fill('NA');
   await page.getByRole('combobox', { name: 'Set Move value' }).press('Enter');
   await page.getByRole('combobox', { name: 'InterCompany value' }).click();
   await page.getByRole('combobox', { name: 'InterCompany value' }).fill('NA');
   await page.getByRole('combobox', { name: 'InterCompany value' }).press('Enter');
   await page.getByRole('combobox', { name: 'JobCode value' }).click();
   await page.getByRole('combobox', { name: 'JobCode value' }).fill('NA');
   await page.getByRole('combobox', { name: 'JobCode value' }).press('Enter');
   await page.getByRole('combobox', { name: 'MarketType value' }).click();
   await page.getByRole('combobox', { name: 'MarketType value' }).fill('NA');
   await page.getByRole('combobox', { name: 'MarketType value' }).press('Enter');
   await page.getByRole('combobox', { name: 'Platform value' }).click();
   await page.getByRole('combobox', { name: 'Platform value' }).fill('NA');
   await page.getByRole('combobox', { name: 'Platform value' }).press('Enter');
   await page.getByRole('combobox', { name: 'Product value' }).click();
   await page.getByRole('combobox', { name: 'Product value' }).fill('NA');
   await page.getByRole('combobox', { name: 'Product value' }).press('Enter');
   await page.getByRole('combobox', { name: 'ProductType value' }).click();
   await page.getByRole('combobox', { name: 'ProductType value' }).fill('NA');
   await page.getByRole('combobox', { name: 'ProductType value' }).press('Enter');
   await page.getByRole('combobox', { name: 'Role value' }).click();
   await page.getByRole('combobox', { name: 'Role value' }).fill('NA');
   await page.getByRole('combobox', { name: 'Role value' }).press('Enter');
   await page.getByRole('combobox', { name: 'Territory value' }).click();
   await page.getByRole('combobox', { name: 'Territory value' }).fill('NZ');
   await page.getByRole('combobox', { name: 'Territory value' }).press('Enter');
   await page.waitForTimeout(3000);

   //Invoice and delivery
   await page.getByRole('button', { name: 'Invoice and delivery' }).click();
   await page.waitForTimeout(3000);
   await page.getByRole('button', { name: 'Invoice and delivery' }).click();
   await page.waitForTimeout(3000);
   await page.getByRole('combobox', { name: 'Sales tax group' }).click();
   await page.getByRole('combobox', { name: 'Sales tax group' }).fill('EXEMPT');
   await page.getByRole('combobox', { name: 'Sales tax group' }).press('Enter');
   await page.waitForTimeout(3000);

   //Contact details
   await page.getByRole('button', { name: ' Save' }).click();
   await page.waitForTimeout(3000);



   await page.waitForTimeout(3000);
 


})