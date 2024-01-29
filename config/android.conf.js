const {config} = require('./base.config')
config.cucumberOpts.tagExpression = "@Sample"
exports.config = {
    ...config,
    specs: [
        './tests/features/**/*.feature'
    ],
    exclude: [
       
    ],
    maxInstances: 15,
    capabilities: [{
        "platformName": "android",
        "deviceName": "Galaxy.*",
        "platformVersion": "13",
        "app": "lt://Android_App_Id",
        "devicelog": true,
        "visual": true,
        "network": true,
        "video": true,
        "build": "Wdio-Appium-Cucumber",
        "name": "Test01",
        "isRealMobile": true   
    },
    
    {
        "platformName": "android",
        "deviceName": "Pixel.*",
        "platformVersion": "13",
        "app": "lt://Android_App_Id",
        "devicelog": true,
        "visual": true,
        "network": true,
        "video": true,
        "build": "Wdio-Appium-Cucumber",
        "name": "Test01",
        "isRealMobile": true   
    }]
}
