const DropdownPage = require('../pageobjects/dropdown.page');

describe('Dropdown Selection', () => {
    it('should open the dropdown menu', async () => {
        await DropdownPage.open();

        await DropdownPage.inputDropdown.click();
        await browser.pause(1000);
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
});