export default class basepage {
    constructor() {
        this.baseUrl = 'https://www.saucedemo.com/';
    }

    async goto(path = ' ') {
        await browser.url(this.baseUrl + path);
    }
    
}