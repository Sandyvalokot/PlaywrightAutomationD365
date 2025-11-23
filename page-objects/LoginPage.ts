import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmuk&mi=DefaultDashboard');
    await this.page.getByPlaceholder('someone@lesmills.com').fill('Lmi.d365testuser4@lesmills.com');
    await this.page.getByRole('button', { name: 'Next' }).click();
    await this.page.getByPlaceholder('Password').fill('lmivic-927!');
    await this.page.getByRole('button', { name: 'Sign in' }).click();
    await this.page.getByRole('button', { name: 'Next' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('button', { name: 'Skip setup' }).click();
    await this.page.getByText('Don\'t show this again').click();
    await this.page.getByRole('button', { name: 'Yes' }).click();
  }
}
