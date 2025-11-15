const BasePage = require("./base.page");
const HeaderComponent = require("../components/header.component");

class DashboardPage extends BasePage {
    constructor() {
        super("/inventory.html");
        this.header = new HeaderComponent();
    }
}

module.exports = DashboardPage;