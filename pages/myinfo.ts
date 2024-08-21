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


    constructor(page: Page)
    {
        this.myInfo = page.locator('text="My Info"');
        this.firstName = page.getByPlaceholder('First Name');
        this.middleName = page.getByPlaceholder('Middle Name');
        this.lastName = page.getByPlaceholder('Last Name');
        //this.employeeId = page.locator("//*[@class='oxd-input oxd-input--focus']");
        //this.driversLicence = page.locator("//*[@class='oxd-input oxd-input--focus']");
        this.saveBtn = page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button');
        this.employeeFullName = page.getByText('Employee Full Name');

    }

    async fillPersonalData(){
    
        await this.firstName.fill('');
        await this.firstName.fill('Lu');
    
        await this.middleName.fill('');
        await this.middleName.fill('middlename');
    
        await this.lastName.fill('');
        await this.lastName.fill('lastname');

        //await this.employeeId.fill('');
        //await this.employeeId.fill('123456');

        //await this.driversLicence.fill('');
        //await this.driversLicence.fill('654321');
    }
}

export default MyInfoPage;