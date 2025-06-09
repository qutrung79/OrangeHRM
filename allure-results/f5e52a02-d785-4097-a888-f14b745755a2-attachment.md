# Test info

- Name: Login Tests >> TC_LOGIN_005 - Login with blank password
- Location: /Users/Playwright/e2e-playwright-framework/tests/login.test.ts:35:7

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)

Locator: locator('.oxd-alert-content-text')
Expected string: "Required"
Received: <element(s) not found>
Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for locator('.oxd-alert-content-text')

    at /Users/Playwright/e2e-playwright-framework/tests/login.test.ts:39:49
```

# Page snapshot

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username": Admin
- text:  Password
- textbox "Password"
- text: Required
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.7
- paragraph:
  - text: © 2005 - 2025
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { LoginPage } from '../pages/loginPage';
   3 |
   4 | test.describe('Login Tests', () => {
   5 |   test('TC_LOGIN_001 - Valid login with correct credentials', async ({ page }) => {
   6 |     const login = new LoginPage(page);
   7 |     await login.goto();
   8 |     await login.login('Admin', 'admin123');
   9 |     await expect(page).toHaveURL(/dashboard/);
  10 |   });
  11 |
  12 |   test('TC_LOGIN_002 - Login with incorrect username', async ({ page }) => {
  13 |     const login = new LoginPage(page);
  14 |     await login.goto();
  15 |     await login.login('WrongUser', 'admin123');
  16 |     await expect(await login.getErrorMessage()).toContainText('Invalid credentials');
  17 |   });
  18 |
  19 |   test('TC_LOGIN_003 - Login with incorrect password', async ({ page }) => {
  20 |     const login = new LoginPage(page);
  21 |     await login.goto();
  22 |     await login.login('Admin', 'wrongpass');
  23 |     await expect(await login.getErrorMessage()).toContainText('Invalid credentials');
  24 |   });
  25 |
  26 |   test('TC_LOGIN_004 - Login with blank username', async ({ page }) => {
  27 |     const login = new LoginPage(page);
  28 |     await login.goto();
  29 |     await login.login('', 'admin123');
  30 |     const requiredMessages = page.locator('span:has-text("Required")');
  31 |     await expect(requiredMessages.first()).toBeVisible();
  32 |     // await expect(await login.getErrorMessage()).toContainText('Required');
  33 |   });
  34 |
  35 |   test('TC_LOGIN_005 - Login with blank password', async ({ page }) => {
  36 |     const login = new LoginPage(page);
  37 |     await login.goto();
  38 |     await login.login('Admin', '');
> 39 |     await expect(await login.getErrorMessage()).toContainText('Required');
     |                                                 ^ Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)
  40 |   });
  41 | });
  42 |
```