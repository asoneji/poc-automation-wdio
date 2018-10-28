const merge = require('lodash.merge');
var wdioConf = require('./wdio.conf');

// Note that this will be merged with the common configuration and does not override the common ones.
exports.config = merge(wdioConf.config, {

   //  server end point to connect.
   host: '127.0.0.1',
   port: 4444,
   path: '/wd/hub',

  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome'
   }
   //Not working with latest firefox need to look into it
   // ,
   //  {
   //    maxInstances: 1,
   //    browserName: 'firefox'
   //  }
  ],

  services: [
    'selenium-standalone'
  ]

});