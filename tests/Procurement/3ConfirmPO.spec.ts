import { test, expect } from '@playwright/test';
//import fs from 'fs';

test.use({ storageState: 'auth.json' });

test('Save Purchase Order', async ({ page }) => {
  test.setTimeout(380_000);

  // Open the Test Environment
  await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmuk&mi=DefaultDashboard', { waitUntil: 'networkidle' });

  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Skip setup' }).click();
  await page.getByText("Don't show this again").click();
  await page.getByRole('button', { name: 'Yes' }).click();

  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);

  const navPaneToggle = page.getByRole('button', { name: 'Expand the navigation pane' });
  if (await navPaneToggle.isVisible()) {
    await navPaneToggle.click();
    await page.waitForTimeout(1000);
  }

  // Open Purchase Order Module
  await page.getByLabel('Modules').locator('span').nth(1).click();
  await page.getByRole('treeitem', { name: 'Accounts receivable' }).click();
  await page.getByRole('treeitem', { name: 'Accounts payable' }).click();
  await page.getByRole('button', { name: 'Expand all' }).click();
  await page.getByText('All purchase orders').click();

  // Create Purchase Order
  await page.getByRole('button', { name: ' New' }).click();
  await page.getByLabel('Create purchase order').getByLabel('Vendor account').fill('100003');
  await page.getByLabel('Create purchase order').getByLabel('Vendor account').press('Tab');
  await page.waitForTimeout(6000);
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(6000);

  // Select line item
  await page.getByRole('row', { name: 'The row is up to date. Type' }).getByLabel('Procurement category').fill('Computer Hardware');
  await page.getByRole('row', { name: 'The row is up to date. Type' }).getByLabel('Procurement category').press('Enter');
  await page.waitForTimeout(3000);

  await page.getByLabel('Unit price', { exact: true }).fill('100');
  await page.getByLabel('Unit price', { exact: true }).press('Tab');
  await page.getByRole('textbox', { name: 'Quantity' }).fill('10');
  await page.getByRole('textbox', { name: 'Quantity' }).press('Tab');
  await page.getByRole('combobox', { name: 'Unit' }).fill('Each');
  await page.getByRole('combobox', { name: 'Unit' }).press('Enter');
  await page.waitForTimeout(6000);

  // Line details
  await page.getByRole('button', { name: 'Line details' }).click();
  await page.waitForTimeout(6000);
   await page.getByRole('button', { name: 'Line details' }).click();
  await page.getByLabel('Lines', { exact: true }).getByText('General').click();
  await page.getByRole('textbox', { name: 'Text' }).fill('Test Purchase Order');
  await page.getByRole('textbox', { name: 'Text' }).press('Tab');

  // Financial dimensions
  await page.getByRole('tab', { name: 'Financial dimensions' }).locator('span').click();
  await page.waitForTimeout(6000);
  await page.getByRole('combobox', { name: 'Department value' }).fill('FIN');
  await page.getByRole('combobox', { name: 'Department value' }).press('Enter');
  //await page.getByRole('button', { name: ' Save' }).click();

  await page.getByRole('combobox', { name: 'EventType value' }).fill('NA');
  await page.getByRole('combobox', { name: 'EventType value' }).press('Enter');
  await page.getByRole('combobox', { name: 'ProductType value' }).fill('NA');
  await page.getByRole('combobox', { name: 'ProductType value' }).press('Enter');
  await page.getByRole('combobox', { name: 'Role value' }).fill('NA');
  await page.getByRole('combobox', { name: 'Role value' }).press('Enter');
  await page.waitForTimeout(6000);

  // Header details
  await page.getByText('Header', { exact: true }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('combobox', { name: 'Buyer group' }).fill('MKT');
  await page.getByRole('combobox', { name: 'Buyer group' }).press('Enter');
  await page.getByRole('button', { name: ' Save' }).click();
  await page.waitForTimeout(3000);

// Po in Draft status

  //Submit workflow for Approval 
  await page.getByRole('button', { name: ' Workflow' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(3000);
//PO in review status

  //Approve
  await page.getByRole('button', { name: ' Workflow' })
    .click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Workflow history' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Back', exact: true }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: ' Workflow' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Workflow history' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Back', exact: true }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: ' Workflow' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Workflow history' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
  
    await page.waitForTimeout(3000);
    
  
   //await page.getByRole('row', { name: 'Amy Smith 7/30/2025 9:52:00' }).getByRole('checkbox').click();
    await page.getByTitle('Amy Smith', { exact: true }).click();
    await page.getByRole('button', { name: ' Reassign' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('combobox', { name: 'User' }).hover();
    await page.getByRole('combobox', { name: 'User' }).click();
    await page.getByRole('combobox', { name: 'User' }).press('Enter');
    await page.waitForTimeout(3000);
    
    await page.getByText('Alias').click();
    await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'Filter field: Alias, operator' }).click();
    await page.getByRole('textbox', { name: 'Filter field: Alias, operator' }).fill('Lmi.d365testuser4@lesmills.com');
    await page.getByRole('button', { name: 'Apply' }).click();
    await page.waitForTimeout(3000);

    await page.getByRole('textbox', { name: 'Alias' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Reassign', exact: true }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);

    await page.getByRole('button', { name: 'Back', exact: true }).click();
    await page.waitForTimeout(6000);
   
   
    // Approve the workflow
    await page.getByRole('button', { name: ' Workflow' }).hover();
    await page.getByRole('button', { name: ' Workflow' }).click();
    await page.waitForTimeout(3000);

    await page.getByRole('button', { name: 'Approve' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Approve' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    
    await page.getByRole('button', { name: ' Workflow' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Workflow history' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Back', exact: true }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(6000);

    //PO in Approved status

    // confirm the purchase order
    await page.getByRole('button', { name: 'Purchase', exact: true }).hover();
    await page.getByRole('button', { name: 'Purchase', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm', exact: true }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Refresh' });
    await page.waitForTimeout(9000);
    /*
   // Receive the purchase order
    await page.getByRole('button', { name: 'Receive' }).click();
    await page.getByLabel('Generate').getByRole('button', { name: 'Product receipt', exact: true }).click();
    await page.waitForTimeout(6000);

    await page.getByLabel('Purchase order - update table').getByRole('checkbox', { name: 'Select or unselect row' }).click();
    await page.getByRole('textbox', { name: 'Product receipt' }).click();
    await page.getByRole('textbox', { name: 'Product receipt' }).fill('Test Receipt');
    await page.getByRole('textbox', { name: 'Product receipt' }).press('Enter');

    await page.waitForTimeout(6000);

    await page.getByRole('button', { name: 'Lines', exact: true }).click();
    await page.getByLabel('Purchase order line - update').getByRole('checkbox', { name: 'Select or unselect row' });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(6000);


*/

});

 