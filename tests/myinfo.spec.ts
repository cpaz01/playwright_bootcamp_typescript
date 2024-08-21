import { test, expect, Locator } from '@playwright/test';
import LoginPage from '../pages/login';
import MyInfoPage from '../pages/myinfo';
import EmergencyContacs from '../pages/emergencycontacts';


test.describe('My Info Page', () => {
    let loginPage : LoginPage;
    let myInfoPage : MyInfoPage;
    let emergencyContacts : EmergencyContacs;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        myInfoPage = new MyInfoPage(page);  
        emergencyContacts = new EmergencyContacs(page);
    
        await page.goto('https://opensource-demo.orangehrmlive.com/');
    
        await expect(loginPage.orangeLogo).toBeVisible();
    
        await loginPage.login();
    
        await myInfoPage.myInfo.click();

        await expect(page).toHaveURL(/.*viewPersonalDetails/);
    })

test('Update personal details', async ({ page }) => {
    
    await myInfoPage.fillPersonalData();

    await myInfoPage.saveBtn.click();

    await expect(myInfoPage.employeeFullName).toBeVisible();

    await page.screenshot({ path: 'personaldetails.png' });

})

test('Add emergency contact', async ({ page }) => {
   
    await emergencyContacts.emergencyContactsPage.click();

    await expect(page).toHaveURL(/.*viewEmergencyContacts/);

    await emergencyContacts.addEmergencyContact.click()

    await emergencyContacts.nameContact.fill('Juan');

    await emergencyContacts.relationshipContact.fill('brother');

    await emergencyContacts.homePhoneContact.fill('1641546');

    await emergencyContacts.saveBtnEmergencyContacts.click();

    await expect(page.locator('#oxd-toaster_1')).toBeVisible();

    await page.screenshot({ path: 'newcontactcreated.png' });
})
})