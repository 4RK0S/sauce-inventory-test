import { test, expect } from '@playwright/test';
import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';
import CartPage from '../pageobjects/cart.page';

test.beforeEach(async ({ page }, testInfo) => {
    page.loginPage = new LoginPage(page);
    page.inventoryPage = new InventoryPage(page);
    page.cartPage = new CartPage(page);

    await page.loginPage.goto();

    if (!test.info().title.includes('HM-TC-002')) {
        await page.loginPage.login('standard_user', 'secret_sauce');
        await page.loginPage.assertSuccessfulLogin();
    }
});

//          HAMBURGER MENU TESTS


test('HM-TC-001: Hamburger Menu should pop up when clicked', async ({ page }) => {
    await page.inventoryPage.openMenu();
    await page.inventoryPage.assertMenuIsVisible();
});

test('HM-TC-002: Hamburger Menu icon should not be visible on the Login Page', async ({ page }) => {
    await page.inventoryPage.assertMenuIconIsNotPresent();
});


//          SHOPPING CART TESTS



test('CART-TC-001: Cart icon should navigate to the Your Cart page', async ({ page }) => {
    await page.inventoryPage.goToCart();
    await page.cartPage.assertNavigationToCartPage();
});

test('CART-TC-002: Cart page should not display items that were never added', async ({ page }) => {
    await page.inventoryPage.addItemToCart(); 
    await page.inventoryPage.goToCart();
    
    await page.cartPage.assertNonAddedItemIsNotPresent();
});
