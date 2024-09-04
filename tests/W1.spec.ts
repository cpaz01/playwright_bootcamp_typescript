import { test, expect } from '@playwright/test';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
//import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
test('W1', async ({ }) => {
  const browser: Browser = await chromium.launch({ headless: true });
  const context: BrowserContext = await browser.newContext();
  const page: Page = await context.newPage();

  await test.step('Navigate to the login page', async () => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/auth/login');
    await page.waitForSelector('button[type="submit"]', { state: 'visible' });
    await page.screenshot({ path: './screenshots/LoginPage.png' });
  });

  await test.step('Fill in login credentials and submit', async () => {
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');
  });

  await test.step('Navigate to the Employee List page', async () => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
    await page.waitForSelector('div.oxd-main-menu');
    await page.screenshot({ path: './screenshots/EmployeeListPage.png' });
  });

  await test.step('Navigate to the Leave List page', async () => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
    await page.waitForTimeout(2000); //cambiar 
    await page.screenshot({ path: './screenshots/LeaveList.png' });
  });

  await test.step('Close the browser', async () => {
    await browser.close();
  });
});
