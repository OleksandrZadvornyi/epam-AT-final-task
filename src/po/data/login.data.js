module.exports = [
    // Successful Logins
    {
        testName: 'should login successfully with standard_user',
        username: 'standard_user',
        password: 'secret_sauce',
        shouldLogin: true
    },
    {
        testName: 'should login successfully with problem_user',
        username: 'problem_user',
        password: 'secret_sauce',
        shouldLogin: true
    },
    {
        testName: 'should login successfully with performance_glitch_user',
        username: 'performance_glitch_user',
        password: 'secret_sauce',
        shouldLogin: true
    },
    {
        testName: 'should login successfully with error_user',
        username: 'error_user',
        password: 'secret_sauce',
        shouldLogin: true
    },
    {
        testName: 'should login successfully with visual_user',
        username: 'visual_user',
        password: 'secret_sauce',
        shouldLogin: true
    },

    // Failed Logins
    {
        testName: 'should fail to login with locked_out_user',
        username: 'locked_out_user',
        password: 'secret_sauce',
        shouldLogin: false,
        expectedError: 'Sorry, this user has been locked out.'
    },
    {
        testName: 'should fail to login with an invalid password',
        username: 'standard_user',
        password: 'wrong_password',
        shouldLogin: false,
        expectedError: 'Username and password do not match'
    }
];