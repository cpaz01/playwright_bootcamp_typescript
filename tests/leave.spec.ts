import { test, expect, Locator } from '@playwright/test';
import LoginPage from '../pages/login';
import LeavePage from '../pages/leave';

test.describe('Login', () => {
    let loginPage : LoginPage;
    let leavePage : LeavePage;
    
test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);
    
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await expect(loginPage.orangeLogo).toBeVisible();

    await loginPage.login();
})

test('Checkbox interaction', async ({ page }) => {

    leavePage = new LeavePage(page);

    await leavePage.leavePageLocator.click();

    await leavePage.configureTab.click();

    await leavePage.leaveTypes.click();

    leavePage.usMaternityCheckBox.click();

    await expect(leavePage.usMaternityCheckBox).toBeChecked();

})

})


