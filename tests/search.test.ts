import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { AdminPage } from '../pages/adminPage';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('Admin', 'admin123');
});

test.describe('User Search Tests', () => {
  test('TC_SEARCH_001 - Search by valid username', async ({ page }) => {
  const admin = new AdminPage(page);
  await admin.goto();

  const breadcrumb = page.locator('span.oxd-topbar-header-breadcrumb:has-text("User Management")');
  await expect(breadcrumb).toBeVisible();
  await admin.searchUser('Admin');

  // Validate (1) Record Found
  await expect(page.locator('text="(1) Record Found"')).toBeVisible();

  // Validate table row values
  const row = page.locator('.oxd-table-body .oxd-table-row').first();
  const cells = row.locator('.oxd-table-cell');

  await expect(cells.nth(1)).toHaveText('Admin');                  // Username
  await expect(cells.nth(2)).toHaveText('Admin');                  // User Role
  await expect(cells.nth(3)).toHaveText('Employee Name');          // Employee Name
  await expect(cells.nth(4)).toHaveText('Enabled');                // Status

  await expect(row.locator('i.bi-pencil-fill')).toBeVisible();     // Edit icon
  await expect(row.locator('i.bi-trash')).toBeVisible();           // Delete icon
});

  test('TC_SEARCH_002 - Search by partial username', async ({ page }) => {
    const admin = new AdminPage(page);
    await admin.goto();
    await admin.searchUser('Adm');
    await expect(await admin.getResultsText()).toContainText('Adm');
  });

  test('TC_SEARCH_003 - Search with empty filters', async ({ page }) => {
    const admin = new AdminPage(page);
    await admin.goto();
    await admin.clearSearch();
    await expect(await admin.getResultsText().first()).not.toContainText('No Records Found');
  });
});
