const BaseComponent = require('./base.component');

class LoginFormComponent extends BaseComponent {
    constructor() {
        super('//div[@class="login-box"]/form');
    }

    get loginButton() {
        return this.rootElement.$('//input[@id="login-button"]');
    }

    get errorMessage() {
        return this.rootElement.$('//h3[@data-test="error"]');
    }

    /**
     * @param param {'username' | 'password'} 
     * @returns WebdriverIO.Element 
     */
    input(param) {
        const selectors = {
            username: '//input[@id="user-name"]',
            password: '//input[@id="password"]',
        };
        return this.rootElement.$(selectors[param.toLowerCase()]);
    }

    /**
     * Clears an input field by simulating "Select All" and "Backspace".
     * @param param {'username' | 'password'} 
     */
    async clearInput(param) {
        const inputElement = this.input(param);
        await inputElement.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
    }
}

module.exports = LoginFormComponent;