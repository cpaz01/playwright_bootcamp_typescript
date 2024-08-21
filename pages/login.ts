import {Page, Locator} from '@playwright/test';

class LoginPage{

    page:Page;
    user: Locator;
    password: Locator;
    submit: Locator;
    orangeLogo: Locator;
    leave: Locator;
    leaveListTitle: Locator;
    static login: any;

    constructor(page: Page)
    {
        this.page = page
        this.user = this.page.getByRole('textbox', {name: 'username'});
        this.password = this.page.getByRole('textbox', {name: 'password'});
        this.submit = this.page.getByRole('button');
        this.orangeLogo = page.locator('.orangehrm-login-branding');
        this.leave = page.locator('text="Leave"');
        this.leaveListTitle = page.locator('.oxd-table-filter-title');
    }


async login(){
    
    await this.user.fill('Admin');

    await this.password.fill('admin123');

    await this.submit.click();
}

}

export default LoginPage;