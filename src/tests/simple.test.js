const LoginPage = require('../po/pages/login.page');
const DashboardPage = require('../po/pages/dashboard.page');

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('SauceDemo Login Tests', () => {
    beforeEach(async () => {
        await loginPage.open();
    });

    it('UC-1: Login with empty credentials', async () => {
        // Type any credentials into "Username" and "Password" fields.
        await loginPage.loginForm.input('username').setValue('Some User');
        await loginPage.loginForm.input('password').setValue('Strong Password123');

        // Clear the username input.
        await loginPage.loginForm.input('username').click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');

        // Clear the password input.
        await loginPage.loginForm.input('password').click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');

        // Hit the "Login" button.
        await loginPage.loginForm.loginButton.click();

        // Check the error messages: "Username is required".
        const errorText = await loginPage.loginForm.errorMessage.getText();
        expect(errorText).toContain('Username is required');
    });

    it('UC-2: Login with only username', async () => {
        // Type any credentials in username.
        await loginPage.loginForm.input('username').setValue('Some User');

        // Enter password.
        await loginPage.loginForm.input('password').setValue('Strong Password123');

        // Clear the "Password" input.
        await loginPage.loginForm.input('password').click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');

        // Hit the "Login" button.
        await loginPage.loginForm.loginButton.click();

        // Check the error messages: "Password is required".
        const errorText = await loginPage.loginForm.errorMessage.getText();
        expect(errorText).toContain('Password is required');
    });

    it('UC-3: Login with valid username and password', async () => {
        // Type credentials in username which are under Accepted username are sections.
        await loginPage.loginForm.input('username').setValue('standard_user');

        // Enter password as secret sauce.
        await loginPage.loginForm.input('password').setValue('secret_sauce');

        // Click on Login.
        await loginPage.loginForm.loginButton.click();

        // Validate the title “Swag Labs” in the dashboard.
        const title = await dashboardPage.header.title.getText();
        expect(title).toBe('Swag Labs');
    });
});