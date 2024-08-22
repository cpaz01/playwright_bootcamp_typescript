import { test, expect } from '@playwright/test';

const userLoggin ={
  username: 'Admin',
  password: 'admin123',
}
const userData = {
  firstName: 'Lindo',
  middleName: 'IronMan',
  lastName: 'Gatito'
};
const emergencyContactData = {
  name: 'new_contact_name',
  relationship: 'new_contact_relationship',
  homeTelephone: '5555-5555'
};

const webside = ('https://opensource-demo.orangehrmlive.com/web/auth/login');

test('Update_Personal_Details', async ({ page }) => {

  await test.step('Login to the application', async () => {
    await page.goto(webside);
    await page.fill('input[name="username"]', userLoggin.username);
    await page.fill('input[name="password"]', userLoggin.password);
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Welcome')).toBeVisible();
  });

  await test.step('Navigate to My Info and update personal details', async () => {
    await page.click('text=My Info');
    await page.waitForTimeout(2000); // Consider using waitForSelector instead of waitForTimeout

    await page.fill('input[name="firstName"]', userData.firstName);
    //await page.fill('input[name="middleName"]', userData.middleName);
    await page.fill('input[name="lastName"]', userData.lastName);
    await page.click('button:has-text("Save")');
  
  });

  await test.step('Validation Assert -update personal details', async () => {
    await expect(page.locator('input[name="lastName"]')).toHaveValue(userData.lastName);
    await expect(page.locator('input[name="firstName"]')).toHaveValue(userData.firstName);
  });
    
});

test('Add_Emergency_Contact', async ({ page }) => {

  await test.step('Login to the application', async () => {
    await page.goto(webside);
    await page.fill('input[name="username"]', userLoggin.username);
    await page.fill('input[name="password"]', userLoggin.password);
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Welcome')).toBeVisible();
  });

  await test.step('Navigate to My Info and add emergency contact', async () => {
    await page.click('text=My Info');
    //await expect(page.locator('text=Personal Details')).toBeVisible(); PORQUE HAY UN CONFLICTO Y DOS OBJETOS SE LLAMAN IGUAL
    await page.waitForTimeout(2000); // Consider using waitForSelector instead of waitForTimeout

    await page.click('text=Emergency Contacts');
    await expect(page.locator('text=Assigned Emergency Contacts')).toBeVisible();
    //await expect(page).toHaveURL(/\/pim\/viewEmergencyContacts/);

    //await page.click('text=Add');
    await page.click('text=Add >> nth=0');
    await page.fill('//label[text()="Name"]/ancestor::div/following-sibling::div//input', emergencyContactData.name);
    await page.fill('//label[text()="Relationship"]/ancestor::div/following-sibling::div//input', emergencyContactData.relationship);
    await page.fill('//label[text()="Home Telephone"]/ancestor::div/following-sibling::div//input', emergencyContactData.homeTelephone);
    
    await page.click('button:has-text("Save")');

        
  });

  await test.step('Validation Assert -Add emergency Contact', async () => {
    await expect(page.locator(`text=${emergencyContactData.name}`)).toBeVisible();
  });
});

