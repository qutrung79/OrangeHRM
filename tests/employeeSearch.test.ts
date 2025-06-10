import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { EmployeeSearchPage } from '../pages/employeeSearch';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('Admin', 'admin123');
});

test('TC_PIM_001 - Search by valid employee name', async ({ page }) => {
  const pim = new EmployeeSearchPage(page);
  await pim.goto();
  await pim.searchByName('Charles Carter');
  await pim.expectResultContains('Charles', 'Carter','0320');
});

test('TC_PIM_002 - Search with partial employee name', async ({ page }) => {
  const pim = new EmployeeSearchPage(page);
  await pim.goto();
  await pim.searchByPartialName('Christop');
  await pim.expectResultContains('Christopher', 'Mcmillan','0363');
});

test('TC_PIM_003 - Search with invalid name', async ({ page }) => {
  const pim = new EmployeeSearchPage(page);
  await pim.goto();
  await pim.searchByName('12sedfsdfs');
  await page.waitForTimeout(1000);
  await pim.expectNoRecordsFound();
});

test('TC_PIM_004 - Search by Employee ID', async ({ page }) => {
  const pim = new EmployeeSearchPage(page);
  await pim.goto();
  await pim.searchByEmployeeID('0375');
  await pim.expectResultContains('Crystal', 'Lin','0375');
});

test('TC_PIM_005 - Search with no input', async ({ page }) => {
  const pim = new EmployeeSearchPage(page);
  await pim.goto();
  await pim.clickSearchOnly();
  await pim.expectAllResultsVisible();
});
