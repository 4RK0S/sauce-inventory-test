import BasePage from './page';

export default class CartPage extends BasePage {
    get pageTitle() { return $('.title'); }
    get cartItems() { return $$('.cart_item'); }
    get backpackItemName() { return $('.inventory_item_name=Sauce Labs Backpack'); }
    get tshirtItemName() { return $('.inventory_item_name=Sauce Labs Bolt T-Shirt'); }
    get removeBackpackButton() {return $('[data-test="remove-sauce-labs-backpack"]'); }



    async removeItemFromCart() {
        await this.removeBackpackButton.click();
    }


    // ASSERTIONS

    async assertNavigationToCartPage() {
        await expect(browser).toHaveUrlContaining('/cart.html');
        await expect(this.pageTitle).toHaveText('Your Cart');
    }

    async assertNonAddedItemIsNotPresent() {
        await expect(this.tshirtItemName).not.toBePresent();
    }

    async assertItemIsNotPresent() {
        await expect(this.backpackItemName).not.toBePresent
    }

    async assertItemCount(expectedCount) {
        await expect(this.cartItems).toBeElementsArrayofSize(expectedCount);
    }
}
