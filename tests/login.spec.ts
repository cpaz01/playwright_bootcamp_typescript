import { test, expect, Locator } from '@playwright/test';
import LoginPage from '../pages/login';

test.describe('Login', () => {
    let loginPage : LoginPage;
    
test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);
    
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await expect(loginPage.orangeLogo).toBeVisible();
})

test('Go to login page', async ({ page }) => {

    await page.screenshot({ path: 'bootcampscreenshotlogin.png' });
})



test('Login', async ({ page }) => {
    loginPage = new LoginPage(page)

    await loginPage.login();

    await expect(page.getByRole('link', {name: 'Dashboard'})).toBeVisible();

    await page.screenshot({ path: 'logged.png' });
})

test('Go To Admin', async ({ page }) => {

    loginPage = new LoginPage(page)
    await loginPage.login();

    await expect(page.getByRole('link', {name: 'Dashboard'})).toBeVisible();

    await page.getByText('Admin').click();

    await expect(page.getByRole('link', {name: 'admin'})).toBeVisible();

    await page.screenshot({ path: 'admin.png' });
})

test('Go To Leave', async ({ page }) => {

    loginPage = new LoginPage(page)
    await loginPage.login();

    await expect(page.getByRole('link', {name: 'Dashboard'})).toBeVisible();

    await loginPage.leave.click();

    await expect(loginPage.leaveListTitle).toHaveText('Leave List');

    await page.screenshot({ path: 'leave.png' });
})



})