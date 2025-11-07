export default class BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://www.saucedemo.com/';
    }

    async goto() {
        await this.page.goto(this.baseUrl);
    }
}
