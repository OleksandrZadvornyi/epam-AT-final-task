# SauceDemo Login Automation

This project contains automated tests for the login functionality of the SauceDemo website (https://www.saucedemo.com/) using WebdriverIO.

## Task Description

### Use Cases

- **UC-1: Test Login form with empty credentials**

  1.  Launch URL: `https://www.saucedemo.com/`
  2.  Type any credentials into "Username" and "Password" fields.
  3.  Clear the inputs.
  4.  Hit the "Login" button.
  5.  Check the error messages: "Username is required".

- **UC-2: Test Login form with credentials by passing Username**

  1.  Type any credentials in username.
  2.  Enter password.
  3.  Clear the "Password" input.
  4.  Hit the "Login" button.
  5.  Check the error messages: "Password is required".

- **UC-3: Test Login form with credentials by passing Username & Password**
  1.  Type credentials in username which are under "Accepted username are" sections.
  2.  Enter password as `secret_sauce`.
  3.  Click on Login and validate the title “Swag Labs” in the dashboard.

### Technical Requirements

- **Parallel Execution:** Provide parallel execution for all tests.
- **Logging:** Add logging for tests.
- **Data Provider:** Use a Data Provider to parametrize tests (UC-1, UC-2, and UC-3 should be supported).
- **Test Automation tool:** WebdriverIO
- **Browsers:**
  1.  Chrome
  2.  Edge
- **Locators:** XPath
- **Patterns:** Page Object
- **Assertions:** Use from the selected framework (Mocha/Chai).
- **[Optional] Loggers:** Use from the selected framework.
