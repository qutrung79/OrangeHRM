import { Page } from '@playwright/test';

export class AdminPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
  }

  async searchUser(username: string) {
    const input = this.page.locator('.oxd-form-row .oxd-input').first();
    await input.waitFor({ state: 'visible' });
    await input.click();
    await input.fill('Admin');
    await this.page.click('button:has-text("Search")');
  }

  async clearSearch() {
    await this.page.click('button:has-text("Reset")');
    await this.page.click('button:has-text("Search")');
  }

  getResultsText() {
    return this.page.locator('.oxd-table');
  }
}
