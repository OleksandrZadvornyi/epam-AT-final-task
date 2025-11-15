const { pages } = require("../po");
const loginData = require("../po/data/login.data");

describe('SauceDemo Login Tests', () => {
    beforeEach(async () => {
        // Open the login page before each test
        await pages('login').open();
    });

    it(loginData.uc1.testName, async () => {
        // Get data for this test
        const data = loginData.uc1;

        // Type any credentials into "Username" and "Password" fields.
        await pages('login').loginForm.input('username').setValue(data.user);
        await pages('login').loginForm.input('password').setValue(data.pass);

        // Clear the inputs.
        await pages('login').loginForm.clearInput('username');
        await pages('login').loginForm.clearInput('password');

        // Hit the "Login" button.
        await pages('login').loginForm.loginButton.click();

        // Check the error messages: "Username is required".
        const errorText = await pages('login').loginForm.errorMessage.getText();
        expect(errorText).toContain(data.expectedError);
    });

    it(loginData.uc2.testName, async () => {
        // Get data for this test
        const data = loginData.uc2;

        // Type any credentials in username.
        await pages('login').loginForm.input('username').setValue(data.user);

        // Enter password.
        await pages('login').loginForm.input('password').setValue(data.pass);

        // Clear the "Password" input.
        await pages('login').loginForm.clearInput('password');

        // Hit the "Login" button.
        await pages('login').loginForm.loginButton.click();

        // Check the error messages: "Password is required".
        const errorText = await pages('login').loginForm.errorMessage.getText();
        expect(errorText).toContain(data.expectedError);
    });

    describe('UC-3: Login Scenarios (Data-Driven)', () => {
        loginData.uc3.forEach((data) => {
            it(data.testName, async () => {
                // Type credentials in username which are under "Accepted username are" sections.
                await pages('login').loginForm.input('username').setValue(data.username);

                // Enter password as secret sauce.
                await pages('login').loginForm.input('password').setValue(data.password);

                // Click on Login.
                await pages('login').loginForm.loginButton.click();

                // Validate the title “Swag Labs” in the dashboard.
                if (data.shouldLogin) {
                    // Validate successful login
                    const title = await pages('dashboard').header.title.getText();
                    expect(title).toBe('Swag Labs');
                } else {
                    // Validate error message
                    const errorText = await pages('login').loginForm.errorMessage.getText();
                    expect(errorText).toContain(data.expectedError);
                }
            });
        });
    });
});