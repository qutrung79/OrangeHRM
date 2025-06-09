# Test info

- Name: User Search Tests >> TC_SEARCH_001 - Search by valid username
- Location: /Users/Playwright/e2e-playwright-framework/tests/search.test.ts:12:8

# Error details

```
Error: expect.toHaveText: Error: strict mode violation: locator('.oxd-table-row').first().locator('div:nth-child(2)') resolved to 5 elements:
    1) <div data-v-ff19d791="" data-v-2f1b665b="" role="columnheader" class="oxd-table-header-cell oxd-padding-cell oxd-table-th">…</div> aka getByRole('columnheader', { name: 'Username ' })
    2) <div role="dropdown" data-v-c9cca83c="" class="oxd-table-header-sort-dropdown">…</div> aka getByRole('columnheader', { name: 'Username ' }).locator('div').nth(1)
    3) <div role="dropdown" data-v-c9cca83c="" class="oxd-table-header-sort-dropdown">…</div> aka getByRole('columnheader', { name: 'User Role ' }).locator('div').nth(1)
    4) <div role="dropdown" data-v-c9cca83c="" class="oxd-table-header-sort-dropdown">…</div> aka getByRole('columnheader', { name: 'Employee Name ' }).locator('div').nth(1)
    5) <div role="dropdown" data-v-c9cca83c="" class="oxd-table-header-sort-dropdown">…</div> aka getByRole('columnheader', { name: 'Status ' }).locator('div').nth(1)

Call log:
  - expect.toHaveText with timeout 5000ms
  - waiting for locator('.oxd-table-row').first().locator('div:nth-child(2)')

    at /Users/Playwright/e2e-playwright-framework/tests/search.test.ts:26:49
```

# Page snapshot

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Admin" [level=6]
  - heading "/ User Management" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: manda user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: User Management 
      - listitem: Job 
      - listitem: Organization 
      - listitem: Qualifications 
      - listitem:
        - link "Nationalities":
          - /url: "#"
      - listitem:
        - link "Corporate Branding":
          - /url: "#"
      - listitem: Configuration 
      - button ""
- heading "System Users" [level=5]
- button ""
- separator
- text: Username
- textbox: Admin
- text: User Role -- Select --  Employee Name
- textbox "Type for hints..."
- text: Status -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (1) Record Found
- table:
  - rowgroup:
    - row " Username  User Role  Employee Name  Status  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Username "
      - columnheader "User Role "
      - columnheader "Employee Name "
      - columnheader "Status "
      - columnheader "Actions"
  - rowgroup:
    - row " Admin Admin manda user Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "manda user"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
- paragraph: OrangeHRM OS 5.7
- paragraph:
  - text: © 2005 - 2025
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { LoginPage } from '../pages/loginPage';
   3 | import { AdminPage } from '../pages/adminPage';
   4 |
   5 | test.beforeEach(async ({ page }) => {
   6 |   const login = new LoginPage(page);
   7 |   await login.goto();
   8 |   await login.login('Admin', 'admin123');
   9 | });
  10 |
  11 | test.describe('User Search Tests', () => {
  12 |   test.only('TC_SEARCH_001 - Search by valid username', async ({ page }) => {
  13 |   const admin = new AdminPage(page);
  14 |   await admin.goto();
  15 |
  16 |   const breadcrumb = page.locator('span.oxd-topbar-header-breadcrumb:has-text("User Management")');
  17 |   await expect(breadcrumb).toBeVisible();
  18 |   await admin.searchUser('Admin');
  19 |
  20 |   // ✅ Validate (1) Record Found
  21 |   await expect(page.locator('text="(1) Record Found"')).toBeVisible();
  22 |
  23 |   // ✅ Validate table row values
  24 |   const row = page.locator('.oxd-table-row').first();
  25 |
> 26 |   await expect(row.locator('div:nth-child(2)')).toHaveText('Admin');                  // Username
     |                                                 ^ Error: expect.toHaveText: Error: strict mode violation: locator('.oxd-table-row').first().locator('div:nth-child(2)') resolved to 5 elements:
  27 |   await expect(row.locator('div:nth-child(3)')).toHaveText('Admin');                  // User Role
  28 |   await expect(row.locator('div:nth-child(4)')).toHaveText('mandaPerf userNm');       // Employee Name
  29 |   await expect(row.locator('div:nth-child(5)')).toHaveText('Enabled');                // Status
  30 |
  31 |   // ✅ Validate edit and delete buttons
  32 |   await expect(row.locator('i.bi-pencil-fill')).toBeVisible();  // Edit icon
  33 |   await expect(row.locator('i.bi-trash')).toBeVisible();        // Delete icon
  34 | });
  35 |
  36 |   test('TC_SEARCH_002 - Search by partial username', async ({ page }) => {
  37 |     const admin = new AdminPage(page);
  38 |     await admin.goto();
  39 |     await admin.searchUser('Adm');
  40 |     await expect(await admin.getResultsText()).toContainText('Adm');
  41 |   });
  42 |
  43 |   test('TC_SEARCH_003 - Search with invalid username', async ({ page }) => {
  44 |     const admin = new AdminPage(page);
  45 |     await admin.goto();
  46 |     await admin.searchUser('InvalidUser');
  47 |     await expect(await admin.getResultsText()).toContainText('No Records Found');
  48 |   });
  49 |
  50 |   test('TC_SEARCH_004 - Search with empty filters', async ({ page }) => {
  51 |     const admin = new AdminPage(page);
  52 |     await admin.goto();
  53 |     await admin.clearSearch();
  54 |     await expect(await admin.getResultsText().first()).not.toContainText('No Records Found');
  55 |   });
  56 | });
  57 |
```