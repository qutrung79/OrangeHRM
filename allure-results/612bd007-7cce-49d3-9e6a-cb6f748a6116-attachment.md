# Test info

- Name: User Search Tests >> TC_SEARCH_003 - Search with invalid username
- Location: /Users/Playwright/e2e-playwright-framework/tests/search.test.ts:44:8

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)

Locator: locator('.oxd-toast-content')
Expected pattern: /No Records Found/i
Received: <element(s) not found>
Call log:
  - expect.toHaveText with timeout 5000ms
  - waiting for locator('.oxd-toast-content')

    at /Users/Playwright/e2e-playwright-framework/tests/search.test.ts:50:25
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
  12 |   test('TC_SEARCH_001 - Search by valid username', async ({ page }) => {
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
  24 |   const row = page.locator('.oxd-table-body .oxd-table-row').first();
  25 |   const cells = row.locator('.oxd-table-cell');
  26 |
  27 |   await expect(cells.nth(1)).toHaveText('Admin');                  // Username
  28 |   await expect(cells.nth(2)).toHaveText('Admin');                  // User Role
  29 |   await expect(cells.nth(3)).toHaveText('manda user');       // Employee Name
  30 |   await expect(cells.nth(4)).toHaveText('Enabled');                // Status
  31 |
  32 |   // ✅ Validate edit and delete buttons
  33 |   await expect(row.locator('i.bi-pencil-fill')).toBeVisible();  // Edit icon
  34 |   await expect(row.locator('i.bi-trash')).toBeVisible();        // Delete icon
  35 | });
  36 |
  37 |   test('TC_SEARCH_002 - Search by partial username', async ({ page }) => {
  38 |     const admin = new AdminPage(page);
  39 |     await admin.goto();
  40 |     await admin.searchUser('Adm');
  41 |     await expect(await admin.getResultsText()).toContainText('Adm');
  42 |   });
  43 |
  44 |   test.only('TC_SEARCH_003 - Search with invalid username', async ({ page }) => {
  45 |     const admin = new AdminPage(page);
  46 |     await admin.goto();
  47 |     await admin.searchUser('InvalidUser');
  48 |     // Wait for the toast message
  49 |     const toast = page.locator('.oxd-toast-content');
> 50 |     await expect(toast).toHaveText(/No Records Found/i);
     |                         ^ Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)
  51 |   });
  52 |
  53 |   test('TC_SEARCH_004 - Search with empty filters', async ({ page }) => {
  54 |     const admin = new AdminPage(page);
  55 |     await admin.goto();
  56 |     await admin.clearSearch();
  57 |     await expect(await admin.getResultsText().first()).not.toContainText('No Records Found');
  58 |   });
  59 | });
  60 |
```