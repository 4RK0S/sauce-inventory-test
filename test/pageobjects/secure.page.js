import BasePage from './page';

export default class SecurePage extends BasePage {
    constructor(page) {
        super(page);
        this.pageTitle = this.page.locator('.title');
        this.pageUrlRegex = /inventory.html/;
    }

    async getPageTitleText() {
        return this.pageTitle.textContent();
    }
}
