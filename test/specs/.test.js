import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';
import CartPage from '../pageobjects/cart.page';

describe('Swag Labs - Hamburger Menu and Cart Features', () => {
    beforeEach(async function () {
        this.loginPage = new LoginPage();
        this.inventoryPage = new InventoryPage();
        this.cartPage = new CartPage();
        await this.loginPage.goto();
        if (!this.currentTest.title.includes('HM-TC-002')) {
            await this.loginPage.login('standard_user', 'secret_sauce');
            await expect(browser).toHaveUrlConatining('inventory.html');
    }
    });

//          HAMBURGER MENU TESTS


it('HM-TC-001: Hamburger Menu is open and visible', async function () {
    await this.inventoryPage.openMenu();
    await page.inventoryPage.assertMenuIsVisible();
   
});
it('HM-TC-002: Hamburger Menu icon should not be visible on the Login Page', async function () {
    await.this.inventoryPage.assertMenuIconIsNotPresent(); 
});

it('HM-TC-003: Hamburger Menu closes when click on X', async function () {
    await this.inventoryPage.openMenu();
    await this.inventoryPage.closeMenu();
    await this.inventoryPage.assertMenuIsHidden();
});

it('HM-TC-004: Hamburger Menu About is there', async function () {
    await this.inventoryPage.openMenu();
    await this.inventoryPage.clickAboutLink();
    await expect(browser).toHaveUrlConatining('saucelabs.com');
});

it('HM-TC-005: Logout link should return the user to the login screen', async function () {
        await this.inventoryPage.openMenu();
        await this.inventoryPage.clickLogoutLink();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
        await expect(this.loginPage.usernameInput).toBeDisplayed(); 
});

it('HM-TC-006: Reset app should clear items', async function () {
    await this.inventoryPage.addItemToCart();
    await this.inventoryPage.assertCartIsNotEmpty();
    await this.inventoryPage.openMenu();
    await this.inventoryPage.clickResetLink();
    await this.inventoryPage.closeMenu();
    await this.inventoryPage.assertCartIsEmpty();
});

//          SHOPPING CART TESTS



it('CART-TC-001: Cart coverage', async ({ page }) => {
    await this.inventoryPage.goToCart();
    await this.cartPage.assertNavigationToCartPage();
});

it('CART-TC-002: Cart page should not display items that were never added', async ({ page }) => {
    await this.inventoryPage.addItemToCart(); 
    await this.inventoryPage.goToCart();
    await this.cartPage.assertNonAddedItemIsNotPresent();
});

it('CART-TC-003: Clicking Remove should remove item from cart', async function () {
    await this.inventoryPage.addItemToCart();
    await this.inventoryPage.goToCart();
    await this.cartPage.removeItemFromCart();
    await this.cartPage.assertItemIsNotPresent();
    await browser.back();
    await this.inventoryPage.assertCartIsEmpty();
});

it('CART-TC-004: Cart should display items correctly', async function () {
    await this.inventoryPage.addItemToCart('backpack');
    await this.inventoryPage.addItemToCart('tshirt');
    await this.inventoryPage.goToCart();
    await this.cartPage.assertItemCount(2);
});

});