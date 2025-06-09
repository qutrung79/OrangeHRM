import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Login Tests', () => {
  test('TC_LOGIN_001 - Valid login with correct credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('Admin', 'admin123');
    await expect(page).toHaveURL(/dashboard/);
  });

  test('TC_LOGIN_002 - Login with incorrect username', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('WrongUser', 'admin123');
    await expect(await login.getErrorMessage()).toContainText('Invalid credentials');
  });

  test('TC_LOGIN_003 - Login with incorrect password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('Admin', 'wrongpass');
    await expect(await login.getErrorMessage()).toContainText('Invalid credentials');
  });

  test('TC_LOGIN_004 - Login with blank username', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('', 'admin123');
    const requiredMessages = page.locator('span:has-text("Required")');
    await expect(requiredMessages.first()).toBeVisible();
    // await expect(await login.getErrorMessage()).toContainText('Required');
  });

  test('TC_LOGIN_005 - Login with blank password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('Admin', '');
    const requiredMessages = page.locator('span:has-text("Required")');
    await expect(requiredMessages.first()).toBeVisible();
  });
});
