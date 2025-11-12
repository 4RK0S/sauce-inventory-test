import BasePage from './page';

export default class LoginPage extends BasePage {
    get usernameInput() { return $('[data-test="username"]'); }
    get passwordInput() { return $('[data-test="password"]'); }
    get loginButton() { return $('[data-test="login-button"]'); }
    get errorMessage() { return $('[data-test="error"]'); }

    async goto() {
        await super.goto();
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    // ASSERTIONS 
    async assertSuccessfulLogin(username, password) {
        await this.login(username, password);
        await expect(browser).toHaveUrlContaining('inventory.html');
    }
}
