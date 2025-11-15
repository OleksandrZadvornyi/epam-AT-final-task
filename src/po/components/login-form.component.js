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
}

module.exports = LoginFormComponent;