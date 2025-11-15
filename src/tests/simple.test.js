describe('SauceDemo Login Tests', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/');
    });

    it('UC-1: Login with empty credentials', async () => {
        // Type any credentials into "Username" and "Password" fields.
        const usernameInput = await $('//input[@id="user-name"]');
        const passwordInput = await $('//input[@id="password"]');
        await usernameInput.setValue('Some User');
        await passwordInput.setValue('Strong Password123');

        // Clear the username input.
        await usernameInput.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');

        // Clear the password input.
        await passwordInput.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');

        // Hit the "Login" button.
        const loginButton = await $('//input[@id="login-button"]');
        await loginButton.click();

        // Check the error messages: "Username is required".
        const errorMessage = await $('//h3[@data-test="error"]');
        await errorMessage.waitForDisplayed({ timeout: 2000 });
        const errorText = await errorMessage.getText();

        expect(errorText).toContain('Username is required');
    });

    it('UC-2: Login with only username', async () => {
        // Type any credentials in username.
        const usernameInput = await $('//input[@id="user-name"]');
        await usernameInput.setValue('Some User');

        // Enter password.
        const passwordInput = await $('//input[@id="password"]');
        await passwordInput.setValue('Strong Password123');

        // Clear the "Password" input.
        await passwordInput.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');

        // Hit the "Login" button.
        const loginButton = await $('//input[@id="login-button"]');
        await loginButton.click();

        // Check the error messages: "Password is required".
        const errorMessage = await $('//h3[@data-test="error"]');
        await errorMessage.waitForDisplayed({ timeout: 2000 });
        const errorText = await errorMessage.getText();

        expect(errorText).toContain('Password is required');
    });

    it('UC-3: Login with valid username and password', async () => {
        // Type credentials in username which are under Accepted username are sections.
        const usernameInput = await $('//input[@id="user-name"]');
        await usernameInput.setValue('standard_user');

        // Enter password as secret sauce.
        const passwordInput = await $('//input[@id="password"]');
        await passwordInput.setValue('secret_sauce');

        // Click on Login.
        const loginButton = await $('//input[@id="login-button"]');
        await loginButton.click();

        // Validate the title “Swag Labs” in the dashboard.
        const title = await $('//div[@class="app_logo"]').getText();
        expect(title).toBe('Swag Labs');
    });
});