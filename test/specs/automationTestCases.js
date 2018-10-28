const assert = require('chai').assert;
const testutils = require('./lib/testutils');

const testFixtureUrl = 'https://asoneji.github.io/sample-test-automation-web-project/SampleTestAutomationApp/sample.html';
var selector = "";

before(function() {
   if (testutils.isWeb()) {
      selector = "#"
   }
   else {
      selector = "~"
   }
});

beforeEach(function() {
   if (testutils.isWeb()) {
      browser.url(testFixtureUrl);
   }
   else {
      browser.launch();
   }
});


describe('Sample Automation WDIO Tests', function() {

    it('testAllFieldsExists', function() {

      let sampleTestAutomationLabel = browser.getText(selector+'sampleTestAutomationLabel');
      let sendMessageLabel = browser.getText(selector+'sendMessageLabel');
      let receivedMessageLabel = browser.getText(selector+'receivedMessageLabel');

      assert.equal("Sample Test Automation", sampleTestAutomationLabel, "Title not as expected");
      assert.equal("Message:", sendMessageLabel, "Message label not as expected");
      assert.equal("Received:", receivedMessageLabel, "Received label not as expected");

      assert.isTrue(browser.isExisting(selector+'sendMessageTextField'),"Message input field does not exist");
      assert.isTrue(browser.isExisting(selector+'receivedMessageTextField'),"Recived input field does not exist");

      assert.isTrue(browser.isExisting(selector+'sendMessageButton'),"Send button does not exist");
      assert.isTrue(browser.isExisting(selector+'clearMessageButton'),"Clear button does not exist");

    });

    it('testSendMessage', function() {

      let sendMessage = "Hello World! - " + new Date().toLocaleString();

      browser.setValue(selector+'sendMessageTextField', sendMessage);
      browser.click(selector+'sendMessageButton');

      if (testutils.isWeb()) {
         assert.equal(browser.getValue(selector+'receivedMessageTextField'), sendMessage, "Message sent is not as expected");
      }
      else {
         assert.equal(browser.getText(selector+'receivedMessageTextField'), sendMessage, "Message sent is not as expected");
      }


    });

    it('testClearMessage', function() {

      let sendMessage = "Hello World! - " + new Date().toLocaleString();

      browser.setValue(selector+'sendMessageTextField', sendMessage);
      browser.click(selector+'clearMessageButton');

      if (testutils.isWeb()) {
         assert.equal(browser.getValue(selector+'sendMessageTextField'), "", "Message sent is not as expected");
         assert.equal(browser.getValue(selector+'receivedMessageTextField'), "", "Received sent is not as expected");
      }
      else {
         assert.equal(browser.getText(selector+'sendMessageTextField'), "", "Message sent is not as expected");
         assert.equal(browser.getText(selector+'receivedMessageTextField'), "", "Received sent is not as expected");
      }


    });
});


after(function() {

})

afterEach(function() {

});