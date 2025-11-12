import BasePage from './page';

export default class InventoryPage extends BasePage {
    get cartIcon() { return $('.shopping_cart_link'); }
    get cartBadge() { return $('.shopping_cart_badge'); }
    get addBackpackButton() { return $('[data-test="add-to-cart-sauce-labs-backpack"]'); }
    get addTshirtButton() { return $('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'); }
    get menuButton() { return $('#react-burger-menu-btn'); }
    get menuSidebar() { return $('.bm-menu-wrap'); }
    get menuCloseButton() { return $('#react-burger-cross-btn'); }
    get aboutLink() { return $('#about_sidebar_link'); }
    get logoutLink() { return $('#logout_sidebar_link'); }
    get resetLink() { return $('#reset_sidebar_link'); }


    }
    // ACTIONS 
    async openMenu() {
        await this.menuButton.click();
        await this.menuSidebar.waitForDisplayed({ timeout: 5000});
    }
    
    async closeMenu() {
        await this.menuButton.click();
        await this.menuSidebar.waitForDisplayed({ timeout: 5000});
    }

    async clickAboutLink() {
        await this.aboutLink.click();
    }

    async clickLogoutLink() {
        await this.logoutLink.click();
    }

    async clickResetLink() {
        await this.resetLink.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }

    async addItemToCart(item = 'backpack') {
        if (item === 'tshirt') {
            await this.addTshirtButton.click();
        } else (
            await this.addBackpackButton.click();
        )
    }

    // ASSERTIONS 


    async assertMenuIsVisible() {
        await expect(this.menuSidebar).toBeDisplayed(); 
    }

    async assertMenuIsHidden() {
        await expect(this.menuSidebar).not.toBeDisplayed();
    }

    async assertMenuIconIsNotPresent() {
        await expect(this.menuButton).not.toBePresent();
    }

    async assertCartIsEmpty() {
        await expect(this.cartBadge).not.toBePresent();
    }

    async assertCartIsNotEmpty() {
        await expect(this.cartBadge).toBeDisplayed();
    }
}
