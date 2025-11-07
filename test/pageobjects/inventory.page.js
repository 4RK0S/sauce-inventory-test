import BasePage from './page';
import { expect } from '@playwright/test';

export default class InventoryPage extends BasePage {
    constructor(page) {
        super(page);
        this.pageUrlRegex = /inventory.html/;
        this.cartIcon = this.page.locator('.shopping_cart_link');
        this.addBackpackButton = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        
        this.menuButton = this.page.locator('#react-burger-menu-btn');
        this.menuSidebar = this.page.locator('.bm-menu-wrap');
    }
    // ACTIONS 
    async openMenu() {
        await this.menuButton.click();
    }
    
    async goToCart() {
        await this.cartIcon.click();
    }

    async addItemToCart() {
        await this.addBackpackButton.click();
    }

    // ASSERTIONS 


    async assertMenuIsVisible() {
        await expect(this.menuSidebar).toBeVisible(); 
    }

    async assertMenuIconIsNotPresent() {
        await expect(this.menuButton).not.toBeVisible();
    }
}
