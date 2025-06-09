# Test info

- Name: User Search Tests >> TC_SEARCH_003 - Search with invalid username
- Location: /Users/Playwright/e2e-playwright-framework/tests/search.test.ts:40:7

# Error details

```
Error: page.fill: Test ended.
Call log:
  - waiting for locator('input[placeholder="Username"]')

    at AdminPage.searchUser (/Users/Playwright/e2e-playwright-framework/pages/adminPage.ts:11:21)
    at /Users/Playwright/e2e-playwright-framework/tests/search.test.ts:43:17
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
     |                     ^ Error: page.fill: Test ended.
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