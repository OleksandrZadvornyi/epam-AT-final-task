const BasePage = require("./base.page");
const { HeaderComponent } = require("../components");

/**
 * @class DashboardPage
 * @description The Page Object for the main page.
 * It inherits from BasePage and composes the HeaderComponent.
 */
class DashboardPage extends BasePage {
    constructor() {
        super("/inventory.html");
        this.header = new HeaderComponent();
    }
}

module.exports = DashboardPage;