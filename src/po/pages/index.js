const DashboardPage = require("./dashboard.page");
const LoginPage = require("./login.page");

/**
 * @param name {'dashboard' | 'login'} 
 * @returns {DashboardPage | LoginPage}
 */
function pages(name) {
    const items = {
        dashboard: new DashboardPage(),
        login: new LoginPage(),
    };
    return items[name.toLowerCase()];
}

module.exports = {
    DashboardPage,
    LoginPage,
    pages
}