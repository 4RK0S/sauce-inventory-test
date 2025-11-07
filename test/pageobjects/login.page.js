import BasePage from './page';
import { expect } from '@playwright/test';

export default class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.userNameInput = this.page.locator('#user-name');
        this.passwordInput = this.page.locator('#password');
        this.loginButton = this.page.locator('#login-button');
        this.errorMessage = this.page.locator('[data-test="error"]');
    }

    /**
     * @param {string} username
     * @param {string} password
     */
    async login(username, password) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    
    async getErrorMessage() {
        return this.errorMessage.textContent();
    }

    // ASSERTIONS 
    async assertSuccessfulLogin() {
        await expect(this.page).toHaveURL(/inventory.html/); 
    }
}
