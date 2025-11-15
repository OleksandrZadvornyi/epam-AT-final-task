const BaseComponent = require('./base.component');

/**
 * @class LoginFormComponent
 * @description Represents the login form component on the login page.
 * It encapsulates all elements and actions related to the form.
 */
class LoginFormComponent extends BaseComponent {
    constructor() {
        super('//div[@class="login-box"]/form');
    }

    /**
     * @property loginButton
     * @description The submit button for the login form.
     */
    get loginButton() {
        return this.rootElement.$('//input[@id="login-button"]');
    }

    /**
     * @property errorMessage
     * @description The error message container that appears on login failure.
     */
    get errorMessage() {
        return this.rootElement.$('//h3[@data-test="error"]');
    }

    /**
     * @method input
     * @description Gets a specific input field by parameter.
     * @param {'username' | 'password'} param
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
     * @method clearInput
     * @description Clears an input field by simulating "Select All" and "Backspace".
     * @param {'username' | 'password'} param 
     */
    async clearInput(param) {
        const inputElement = this.input(param);
        await inputElement.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
    }
}

module.exports = LoginFormComponent;