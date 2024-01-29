const {config} = require('./base.config')
config.cucumberOpts.tagExpression = "@Sample"
exports.config = {
    ...config,
    specs: [
        './tests/features/**/*.feature',
        './tests/features/**/*.feature'
    ],
    exclude: [
       
    ],
    maxInstances: 15,
    capabilities: [{
        "platformName": "ios",
        "deviceName": "iPhone 13",
        "platformVersion": "16",
        "app": "lt://IOS_App_Id",
        "devicelog": true,
        "visual": true,
        "network": true,
        "video": true,
        "build": "Wdio-Appium-Cucumber",
        "name": "Test01",
        "isRealMobile": true
    },

    {
        "platformName": "ios",
        "deviceName": "iPhone.*",
        "platformVersion": "15",
        "app": "lt://IOS_App_Id",
        "devicelog": true,
        "visual": true,
        "network": true,
        "video": true,
        "build": "Wdio-Appium-Cucumber",
        "name": "Test01",
        "isRealMobile": true



    }


]
}
