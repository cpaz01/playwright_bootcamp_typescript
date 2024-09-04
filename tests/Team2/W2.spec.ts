import { test, expect } from '@playwright/test';
import data from './data/data.json';


const webside = ('https://opensource-demo.orangehrmlive.com/web/auth/login');


test('Update_Personal_Details', async ({ page }) => {

  await test.step('Login to the application', async () => {
    await page.goto(webside);
    await page.fill('input[name="username"]', data.username);
    await page.fill('input[name="password"]', data.password);
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Welcome')).toBeVisible();
  });

  await test.step('Navigate to My Info and update personal details', async () => {
    await page.click('text=My Info');
    await page.waitForTimeout(2000); // Consider using waitForSelector instead of waitForTimeout

    await page.fill('input[name="firstName"]', data.firstName);
    //await page.fill('input[name="middleName"]', userData.middleName);
    await page.fill('input[name="lastName"]', data.lastName);
    await page.click('button:has-text("Save")');
  
  });

  await test.step('Validation Assert -update personal details', async () => {
    await expect(page.locator('input[name="lastName"]')).toHaveValue(data.lastName);
    await expect(page.locator('input[name="firstName"]')).toHaveValue(data.firstName);
  });
    
});

test('Add_Emergency_Contact', async ({ page }) => {

  await test.step('Login to the application', async () => {
    await page.goto(webside);
    await page.fill('input[name="username"]', data.username);
    await page.fill('input[name="password"]', data.password);
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
    await page.fill('//label[text()="Name"]/ancestor::div/following-sibling::div//input', data.name);
    await page.fill('//label[text()="Relationship"]/ancestor::div/following-sibling::div//input', data.relationship);
    await page.fill('//label[text()="Home Telephone"]/ancestor::div/following-sibling::div//input', data.homeTelephone);
    
    await page.click('button:has-text("Save")');

        
  });

  await test.step('Validation Assert -Add emergency Contact', async () => {
    await expect(page.locator(`text=${data.name}`)).toBeVisible();
  });
});

