import { test, expect } from '@playwright/test';
//import fs from 'fs';

test.use({ storageState: 'auth.json' });

test('Create Purchase Order', async ({ page }) => {
  test.setTimeout(220_000);

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

 /* // Go back to PO list
  await page.getByRole('button', { name: 'Back', exact: true }).click();
  await page.waitForTimeout(6000);

  // ✅ Capture PO number from first matching title
  const poTitleText = await page.getByTitle(/LMUK-PO-\d+\s+Click to follow link/).first().innerText();
  const poNumberMatch = poTitleText.match(/LMUK-PO-\d+/);
  const poNumber = poNumberMatch ? poNumberMatch[0] : 'UNKNOWN_PO';
  fs.writeFileSync('po.txt', poNumber);
  console.log('Captured PO Number:', poNumber);

  // ✅ Click the PO using the exact title
  const poTitle = `${poNumber}\n\r\nClick to follow link`;
  await page.getByTitle(poTitle).click(); */
});