import { test } from '@playwright/test';
import { LoginPage } from '/Playwright Bootcamp/pages/MyInfoPage.spec';
import { MyInfoPage } from '/Playwright Bootcamp/pages/MyInfoPage.spec';
import data from '/Playwright Bootcamp/data/data.json';

//import { beforeEach } from 'node:test';

/*
test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  const myInfoPage = new MyInfoPage(page);
})
*/


test('Login to the application', async ({ page }) => {
   
  const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await page.waitForSelector(loginPage.submitButton, { state: 'visible' });
    await page.screenshot({ path: './screenshots/LoginPage.png' });
  
    await loginPage.login(data.username, data.password);
 

});

test.describe('My Info Page Tests', () => {
  test('Update Personal Details and Validate', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const myInfoPage = new MyInfoPage(page);

    await loginPage.navigate();
    await loginPage.login(data.username, data.password);

    await myInfoPage.navigateToMyInfo();
    await myInfoPage.updatePersonalDetails(data.firstName, data.lastName);
    await myInfoPage.assertPersonalDetails(data.firstName, data.lastName);
  });

  test('Add Emergency Contact and Validate', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const myInfoPage = new MyInfoPage(page);

    await loginPage.navigate();
    await loginPage.login(data.username, data.password);

    await myInfoPage.navigateToMyInfo();
    await myInfoPage.addEmergencyContact(data.name, data.relationship, data.homeTelephone);
    await myInfoPage.assertEmergencyContactAdded(data.name);
  });
});
