import {Page, Locator} from '@playwright/test';

class MyInfoPage{

    page:Page;
    myInfo:Locator;
    firstName: Locator;
    middleName: Locator;
    lastName: Locator;
    employeeId: Locator;
    driversLicence: Locator;
    saveBtn: Locator;
    employeeFullName: Locator;
    addAttachmentBtn: Locator;
    fileInputLocator: Locator;
    saveAttachmentBtn: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.myInfo = page.locator('text="My Info"');
        this.firstName = page.locator('input[placeholder="First Name"]');;
        this.middleName = page.getByPlaceholder('Middle Name');
        this.lastName = page.getByPlaceholder('Last Name');
        //this.employeeId = page.locator("//*[@class='oxd-input oxd-input--focus']");
        //this.driversLicence = page.locator("//*[@class='oxd-input oxd-input--focus']");
        this.saveBtn = page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button');
        this.employeeFullName = page.getByText('Employee Full Name');
        this.addAttachmentBtn = page.getByRole('button', { name: ' Add' });
        this.fileInputLocator = page.locator('//input[@class="oxd-file-input"]');
        this.saveAttachmentBtn = page.getByRole('button', { name: 'Save' }).nth(2);

    }

    async fillPersonalData(name: string, middlename:string, lastname:string){
    
        await this.page.waitForLoadState('networkidle');

        await this.firstName.fill(name);

        await this.middleName.fill(middlename);
    
        await this.lastName.fill(lastname);
      
    }

    async verifySuccessDialog(){
        this.page.on('dialog', async dialog => {
            console.log(`Dialog message: ${"Success"}`);
            })
    }
}

export default MyInfoPage;