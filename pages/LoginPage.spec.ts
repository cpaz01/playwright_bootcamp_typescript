import { Page } from '@playwright/test';
const webside = ('https://opensource-demo.orangehrmlive.com/web/auth/login');

export class LoginPage {
  //creo como constantes
  readonly page: Page;
  readonly usernameInput: string = 'input[name="username"]';
  readonly passwordInput: string = 'input[name="password"]';
  readonly submitButton: string = 'button[type="submit"]';


  
  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(webside);
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.submitButton);
  }
}