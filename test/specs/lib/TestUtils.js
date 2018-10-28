function TestUtils() {}

TestUtils.prototype.isWeb = function () {
  return !browser.isMobile;

};

TestUtils.prototype.isMobile = function () {
  return browser.isMobile;
};

module.exports = new TestUtils();