exports.config = {
    hostname: 'mobile-hub.lambdatest.com',
    port: 80,
    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['lambdatest'],
    framework: 'cucumber',
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],
    cucumberOpts: {
        require: ['./tests/steps/**/*.steps.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
}
