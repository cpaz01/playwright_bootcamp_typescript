import {Page, Locator} from '@playwright/test';

class EmergencyContacts{

    emergencyContactsPage: Locator;
    addEmergencyContact: Locator;
    nameContact: Locator;
    relationshipContact: Locator;
    homePhoneContact: Locator;
    saveBtnEmergencyContacts: Locator;

    constructor(page:Page)
    {
        this.emergencyContactsPage = page.getByRole('link', {name: 'Emergency Contacts'});
        this.addEmergencyContact = page.getByRole('button', { name: ' Add' }).first();
        this.nameContact = page.locator('form').getByRole('textbox').first();
        this.relationshipContact = page.locator('form').getByRole('textbox').nth(1);
        this.homePhoneContact= page.locator('form').getByRole('textbox').nth(2);
        this.saveBtnEmergencyContacts= page.getByRole('button', { name: 'Save' });
    }
}
export default EmergencyContacts;