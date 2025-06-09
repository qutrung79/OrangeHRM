# Test info

- Name: User Search Tests >> TC_SEARCH_002 - Search by partial username
- Location: /Users/Playwright/e2e-playwright-framework/tests/search.test.ts:33:7

# Error details

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[placeholder="Username"]')

    at AdminPage.searchUser (/Users/Playwright/e2e-playwright-framework/pages/adminPage.ts:11:21)
    at /Users/Playwright/e2e-playwright-framework/tests/search.test.ts:36:17
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
      - paragraph: mandaPerf userNm
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
      - listitem: More 
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
- text: (27) Records Found
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
    - row " Abinaya Admin Peter Anderson Disabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Abinaya"
      - cell "Admin"
      - cell "Peter Anderson"
      - cell "Disabled"
      - cell " ":
        - button ""
        - button ""
    - row " Admin Admin mandaPerf userNm Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "mandaPerf userNm"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " chris Admin CHRIS PATT Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "chris"
      - cell "Admin"
      - cell "CHRIS PATT"
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
    - row " Gaingjhuesdsd Admin dhbrukkuzldhbrukkuzl ibuvlwtfsfibuvlwtfsf Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Gaingjhuesdsd"
      - cell "Admin"
      - cell "dhbrukkuzldhbrukkuzl ibuvlwtfsfibuvlwtfsf"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " huyfk68 Admin Joseph Evans Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "huyfk68"
      - cell "Admin"
      - cell "Joseph Evans"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " jhonwickAdmin Admin Jhon Wick Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "jhonwickAdmin"
      - cell "Admin"
      - cell "Jhon Wick"
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
    - row " nakulya ESS NAKULYA SENTIL Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "nakulya"
      - cell "ESS"
      - cell "NAKULYA SENTIL"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " nirmal46 ESS Nirmal Ravi Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "nirmal46"
      - cell "ESS"
      - cell "Nirmal Ravi"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Quyanonea Admin Aayush User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Quyanonea"
      - cell "Admin"
      - cell "Aayush User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " rajavarma Admin Alice Davis Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "rajavarma"
      - cell "Admin"
      - cell "Alice Davis"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " sadsadsa Admin James Butler Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "sadsadsa"
      - cell "Admin"
      - cell "James Butler"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " sam desalva Admin Karen Alexander Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "sam desalva"
      - cell "Admin"
      - cell "Karen Alexander"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " sdas sadasda Admin A8DCo 010Z Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "sdas sadasda"
      - cell "Admin"
      - cell "A8DCo 010Z"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " sentraaa Admin Joseph Evans Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "sentraaa"
      - cell "Admin"
      - cell "Joseph Evans"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " TalyaR0.030753268764429964 ESS Talya Rivera Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "TalyaR0.030753268764429964"
      - cell "ESS"
      - cell "Talya Rivera"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " TalyaR0.05139246885750959 ESS Talya Rivera Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "TalyaR0.05139246885750959"
      - cell "ESS"
      - cell "Talya Rivera"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " TalyaR0.37973843653628947 ESS Talya Rivera Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "TalyaR0.37973843653628947"
      - cell "ESS"
      - cell "Talya Rivera"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " TalyaR0.508863024752886 ESS Talya Rivera Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "TalyaR0.508863024752886"
      - cell "ESS"
      - cell "Talya Rivera"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " TalyaR0.5474513377942914 ESS Talya Rivera Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "TalyaR0.5474513377942914"
      - cell "ESS"
      - cell "Talya Rivera"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " TalyaR0.6464160143890397 ESS Talya Rivera Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "TalyaR0.6464160143890397"
      - cell "ESS"
      - cell "Talya Rivera"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " TalyaR0.6990159234503202 ESS Talya Rivera Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "TalyaR0.6990159234503202"
      - cell "ESS"
      - cell "Talya Rivera"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " testkieMdata ESS testGubqdata testLnjedata Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "testkieMdata"
      - cell "ESS"
      - cell "testGubqdata testLnjedata"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " testRPVodata ESS testKsDFdata testwRMgdata Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "testRPVodata"
      - cell "ESS"
      - cell "testKsDFdata testwRMgdata"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Timothy Admin yedghjb1 90jsnd Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Timothy"
      - cell "Admin"
      - cell "yedghjb1 90jsnd"
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
   1 | import { Page } from '@playwright/test';
   2 |
   3 | export class AdminPage {
   4 |   constructor(private page: Page) {}
   5 |
   6 |   async goto() {
   7 |     await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
   8 |   }
   9 |
  10 |   async searchUser(username: string) {
> 11 |     await this.page.fill('input[placeholder="Username"]', username);
     |                     ^ Error: page.fill: Test timeout of 30000ms exceeded.
  12 |     await this.page.click('button:has-text("Search")');
  13 |   }
  14 |
  15 |   async clearSearch() {
  16 |     await this.page.click('button:has-text("Reset")');
  17 |     await this.page.click('button:has-text("Search")');
  18 |   }
  19 |
  20 |   getResultsText() {
  21 |     return this.page.locator('.oxd-table');
  22 |   }
  23 | }
  24 |
```