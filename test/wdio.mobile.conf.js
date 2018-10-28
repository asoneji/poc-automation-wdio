const merge = require('lodash.merge');
var wdioConf = require('./wdio.conf');

var AndroidApp = process.env.AndroidApp || './test/resources/SampleTestAutomationApp.apk'
var iOSApp = process.env.iOSApp || './test/resources/SampleTestAutomationApp.app'

// Note that this will be merged with the common configuration and does not override the common ones.
exports.config = merge(wdioConf.config, {
   //  server end point to connect.
   host: '127.0.0.1',
   port: 4723,
   path: '/wd/hub',

   capabilities: [
      // Android Emulator
      {
         automationName: 'appium',
         platformName: 'Android',
         //platformVersion: '6.0',
         deviceName: 'Android Phone', // Should have no influence on the chosen device
         app: AndroidApp,
         autoLaunch: true,
         avd: 'Nexus_5X_API_27_x86'
      },
      //iOS Simulator
      {
         automationName: 'XCUITest',
         platformName: 'iOS',
         platformVersion: '12.0',
         deviceName: 'iPhone XS',
         app: iOSApp,
         autoLaunch: true,
         showIOSLog: true
      }
   ],

   services: [
      'appium'
   ],

   appium: {
      args: {
         address: '127.0.0.1',
         port: 4723,
         commandTimeout: '7200',
         sessionOverride: true,
         debugLogSpacing: true
      }
   }
});