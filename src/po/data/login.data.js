module.exports = {
    /**
     * Data for UC-1: Test with empty credentials.
     * Provides dummy data to type and then clear.
     */
    uc1: {
        testName: 'UC-1: Login with empty credentials',
        user: 'Some User',
        pass: 'Strong Password123',
        expectedError: 'Username is required'
    },

    /**
     * Data for UC-2: Test with empty password.
     * Provides dummy data to type and then clear only the password.
     */
    uc2: {
        testName: 'UC-2: Login with only username',
        user: 'Some User',
        pass: 'Strong Password123',
        expectedError: 'Password is required'
    },

    /**
     * Data for UC-3: Data-driven login scenarios.
     */
    uc3: [
        {
            testName: 'UC-3: should login successfully with standard_user',
            username: 'standard_user',
            password: 'secret_sauce',
            shouldLogin: true
        },
        {
            testName: 'UC-3: should login successfully with problem_user',
            username: 'problem_user',
            password: 'secret_sauce',
            shouldLogin: true
        },
        {
            testName: 'UC-3: should login successfully with performance_glitch_user',
            username: 'performance_glitch_user',
            password: 'secret_sauce',
            shouldLogin: true
        },
        {
            testName: 'UC-3: should login successfully with error_user',
            username: 'error_user',
            password: 'secret_sauce',
            shouldLogin: true
        },
        {
            testName: 'UC-3: should login successfully with visual_user',
            username: 'visual_user',
            password: 'secret_sauce',
            shouldLogin: true
        },
        {
            testName: 'UC-3: should fail to login with locked_out_user',
            username: 'locked_out_user',
            password: 'secret_sauce',
            shouldLogin: false,
            expectedError: 'Sorry, this user has been locked out.'
        }
    ]
};