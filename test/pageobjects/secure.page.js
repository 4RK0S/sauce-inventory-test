import BasePage from './page';

export default class SecurePage extends BasePage {
    get pageTitle() {return $('.title'); }


    async getPageTitleText() {
        return this.pageTitle.getText();
    }
}
