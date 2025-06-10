import { Page, expect } from '@playwright/test';

export class EmployeeSearchPage {
  readonly page: Page;
  readonly url = 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async searchByName(name: string) {
      const container = this.page.locator('.oxd-grid-item').filter({ has: this.page.getByText('Employee Name') });
      const input = container.getByPlaceholder('Type for hints...');
      await input.click();
      await input.fill(name);
      await this.page.getByRole('button', { name: 'Search' }).click();
      await this.page.waitForSelector('.oxd-table-body', { state: 'visible', timeout: 5000 });
      await this.page.waitForLoadState('networkidle');
  }

  async searchByPartialName(partial: string) {
    const container = this.page.locator('.oxd-grid-item').filter({ has: this.page.getByText('Employee Name') });
    const input = container.getByPlaceholder('Type for hints...');
    await input.fill(partial);
    await this.page.waitForSelector(`.oxd-autocomplete-dropdown`);
    await this.page.getByRole('button', { name: 'Search' }).click();
  }

  async searchByEmployeeID(id: string) {
  await this.page.waitForSelector('.oxd-grid-item:has-text("Employee Id") .oxd-input', { state: 'visible', timeout: 10000 });
  await this.page.locator('.oxd-grid-item:has-text("Employee Id") .oxd-input').fill(id);
  await this.page.getByRole('button', { name: 'Search' }).click();

  // Wait for network to idle to ensure search is complete
  await this.page.waitForLoadState('networkidle');
}

  async clickSearchOnly() {
    await this.page.getByRole('button', { name: 'Search' }).click();
  }

  async expectResultContains(expectedFirstName: string, expectedLastName: string, expectedId: string) {
  // Wait for the table to load
  await this.page.waitForSelector('.oxd-table-row');

  // Find the row containing the first and last name
  const row = this.page.locator('.oxd-table-row').filter({
    has: this.page.getByRole('cell', { name: expectedFirstName })
  }).filter({
    has: this.page.getByRole('cell', { name: expectedLastName })
  });

  // Verify First (& Middle) Name
  const firstNameCell = row.getByRole('cell', { name: expectedFirstName });
  await expect(firstNameCell).toBeVisible();

  // Verify Last Name
  const lastNameCell = row.getByRole('cell', { name: expectedLastName });
  await expect(lastNameCell).toBeVisible();

  // Verify ID
  const idCell = row.locator(`.oxd-table-cell:has-text("${expectedId}")`);
  await expect(idCell).toBeVisible();
}

  async expectNoRecordsFound() {
  // Target the "No Records Found" text within a span
  const noRecordsText = this.page.locator('span').filter({ hasText: 'No Records Found' });
  await expect(noRecordsText).toBeVisible({ timeout: 10000 });
}

  async expectAllResultsVisible() {
    const rows = this.page.locator('.oxd-table-row');
    await expect(rows.first()).toBeVisible();
  }
}
