# Test info

- Name: User Search Tests >> TC_SEARCH_001 - Search by valid username
- Location: /Users/Playwright/e2e-playwright-framework/tests/search.test.ts:12:7

# Error details

```
Error: expect.toBeVisible: Error: strict mode violation: locator('span:has-text("User Management")') resolved to 2 elements:
    1) <span data-v-c286b6e5="" class="oxd-topbar-header-breadcrumb">…</span> aka getByText('AdminUser Management')
    2) <span class="oxd-topbar-body-nav-tab-item">…</span> aka getByLabel('Topbar Menu').getByText('User Management')

Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('span:has-text("User Management")')

    at /Users/Playwright/e2e-playwright-framework/tests/search.test.ts:16:66
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
- textbox
- text: User Role -- Select --  Employee Name
- textbox "Type for hints..."
- text: Status -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (14) Records Found
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
    - row " Ajaykumar Admin Peter Anderson Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Ajaykumar"
      - cell "Admin"
      - cell "Peter Anderson"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ArabHammad Admin Ravi B Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ArabHammad"
      - cell "Admin"
      - cell "Ravi B"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " FMLName ESS Qwerty LName Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FMLName"
      - cell "ESS"
      - cell "Qwerty LName"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " FMLName1 ESS FName LName Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FMLName1"
      - cell "ESS"
      - cell "FName LName"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " jiva7 ESS Jiva jiva Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "jiva7"
      - cell "ESS"
      - cell "Jiva jiva"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Jobinsam@6742 ESS Jobin Sam Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Jobinsam@6742"
      - cell "ESS"
      - cell "Jobin Sam"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Leena Admin Ravi B Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Leena"
      - cell "Admin"
      - cell "Ravi B"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " test Mar1e ESS Zoran2 Jovanov Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "test Mar1e"
      - cell "ESS"
      - cell "Zoran2 Jovanov"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " test Mar2e ESS Zoran2 Jovanov Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "test Mar2e"
      - cell "ESS"
      - cell "Zoran2 Jovanov"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " test Mar3e ESS Zoran2 Jovanov Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "test Mar3e"
      - cell "ESS"
      - cell "Zoran2 Jovanov"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " test Mar4e ESS Zoran2 Jovanov Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "test Mar4e"
      - cell "ESS"
      - cell "Zoran2 Jovanov"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " test Mare ESS Zoran2 Jovanov Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "test Mare"
      - cell "ESS"
      - cell "Zoran2 Jovanov"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " testuser123 ESS Ravi B Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "testuser123"
      - cell "ESS"
      - cell "Ravi B"
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
> 16 |   await expect(page.locator('span:has-text("User Management")')).toBeVisible();
     |                                                                  ^ Error: expect.toBeVisible: Error: strict mode violation: locator('span:has-text("User Management")') resolved to 2 elements:
  17 |   await admin.searchUser('Admin');
  18 |
  19 |   // ✅ Validate (1) Record Found
  20 |   await expect(page.locator('text="(1) Record Found"')).toBeVisible();
  21 |
  22 |   // ✅ Validate table row values
  23 |   const row = page.locator('.oxd-table-row').first();
  24 |
  25 |   await expect(row.locator('div:nth-child(2)')).toHaveText('Admin');                  // Username
  26 |   await expect(row.locator('div:nth-child(3)')).toHaveText('Admin');                  // User Role
  27 |   await expect(row.locator('div:nth-child(4)')).toHaveText('mandaPerf userNm');       // Employee Name
  28 |   await expect(row.locator('div:nth-child(5)')).toHaveText('Enabled');                // Status
  29 |
  30 |   // ✅ Validate edit and delete buttons
  31 |   await expect(row.locator('i.bi-pencil-fill')).toBeVisible();  // Edit icon
  32 |   await expect(row.locator('i.bi-trash')).toBeVisible();        // Delete icon
  33 | });
  34 |
  35 |   test('TC_SEARCH_002 - Search by partial username', async ({ page }) => {
  36 |     const admin = new AdminPage(page);
  37 |     await admin.goto();
  38 |     await admin.searchUser('Adm');
  39 |     await expect(await admin.getResultsText()).toContainText('Adm');
  40 |   });
  41 |
  42 |   test('TC_SEARCH_003 - Search with invalid username', async ({ page }) => {
  43 |     const admin = new AdminPage(page);
  44 |     await admin.goto();
  45 |     await admin.searchUser('InvalidUser');
  46 |     await expect(await admin.getResultsText()).toContainText('No Records Found');
  47 |   });
  48 |
  49 |   test('TC_SEARCH_004 - Search with empty filters', async ({ page }) => {
  50 |     const admin = new AdminPage(page);
  51 |     await admin.goto();
  52 |     await admin.clearSearch();
  53 |     await expect(await admin.getResultsText().first()).not.toContainText('No Records Found');
  54 |   });
  55 | });
  56 |
```