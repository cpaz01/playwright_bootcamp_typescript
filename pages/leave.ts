import {Page, Locator} from '@playwright/test';

class LeavePage{
    page:Page;
    usMaternityCheckBox: Locator;
    leavePageLocator: Locator;
    configureTab: Locator;
    leaveTypes: Locator;

    constructor(page:Page){
        this.usMaternityCheckBox = page.getByRole('row', { name: ' US - Matternity  ' }).locator('span i');
        this.leavePageLocator = page.getByRole('link', { name: 'Leave' });
        this.configureTab = page.locator('li').filter({ hasText: 'Configure' });
        this.leaveTypes = page.getByRole('menuitem', { name: 'Leave Types' });
    }

}


export default LeavePage;