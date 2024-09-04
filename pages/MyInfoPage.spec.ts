import { Page, expect } from '@playwright/test';

export class MyInfoPage {
  private page: Page;
  private myInfoLink: string = 'text=My Info';
  private firstNameInput: string = 'input[name="firstName"]';
  private lastNameInput: string = 'input[name="lastName"]';
  private saveButton: string = 'button:has-text("Save")';
  private emergencyContactsLink: string = 'text=Emergency Contacts';
  private addButton: string = 'text=Add >> nth=0';
  private nameInputXPath: string = '//label[text()="Name"]/ancestor::div/following-sibling::div//input';
  private relationshipInputXPath: string = '//label[text()="Relationship"]/ancestor::div/following-sibling::div//input';
  private homeTelephoneInputXPath: string = '//label[text()="Home Telephone"]/ancestor::div/following-sibling::div//input';

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToMyInfo() {
    await this.page.click(this.myInfoLink);
    await this.page.waitForTimeout(2000); // cambiar a wait for Selector
  }

  async updatePersonalDetails(firstName: string, lastName: string) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.click(this.saveButton);
  }

  async assertPersonalDetails(firstName: string, lastName: string) {
    await expect(this.page.locator(this.lastNameInput)).toHaveValue(lastName);
    await expect(this.page.locator(this.firstNameInput)).toHaveValue(firstName);
  }

  async addEmergencyContact(name: string, relationship: string, homeTelephone: string) {
    await this.page.click(this.emergencyContactsLink);
    await this.page.waitForTimeout(2000); // Consider using waitForSelector instead of waitForTimeout
    await this.page.click(this.addButton);
    await this.page.fill(this.nameInputXPath, name);
    await this.page.fill(this.relationshipInputXPath, relationship);
    await this.page.fill(this.homeTelephoneInputXPath, homeTelephone);
    await this.page.click(this.saveButton);
  }

  async assertEmergencyContactAdded(name: string) {
    await expect(this.page.locator(`text=${name}`)).toBeVisible();
  }
}
