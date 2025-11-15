const BasePage = require("./base.page");
const LoginFormComponent = require("../components/login-form.component");

class LoginPage extends BasePage {
    constructor() {
        super("/");
        this.loginForm = new LoginFormComponent();
    }
}

module.exports = LoginPage;