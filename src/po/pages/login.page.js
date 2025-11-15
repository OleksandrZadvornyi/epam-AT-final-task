const BasePage = require("./base.page");
const LoginFormComponent = require("../components/login-form.component");

/**
 * @class LoginPage
 * @description The Page Object for the SauceDemo login page.
 * It inherits from BasePage and composes the LoginFormComponent.
 */
class LoginPage extends BasePage {
    constructor() {
        super("/");
        this.loginForm = new LoginFormComponent();
    }
}

module.exports = LoginPage;