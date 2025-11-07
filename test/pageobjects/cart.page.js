import BasePage from './page';
import { expect } from '@playwright/test';

export default class CartPage extends BasePage {
    constructor(page) {
        super(page);
        this.pageTitle = this.page.locator('.title');
        this.pageUrlRegex = /cart.html/;
        this.backpackItemName = this.page.locator('.inventory_item_name:has-text("Sauce Labs Backpack")');
        this.nonAddedItemName = this.page.locator('.inventory_item_name:has-text("Sauce Labs Bolt T-Shirt")'); 
    }

    // ASSERTIONS

    async assertNavigationToCartPage() {
        await expect(this.page).toHaveURL(this.pageUrlRegex);
        await expect(this.pageTitle).toHaveText('Your Cart');
    }

    async assertNonAddedItemIsNotPresent() {
        await expect(this.nonAddedItemName).not.toBeVisible();
    }
}
