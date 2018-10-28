# sample-test-automation-wdio-project


This is a simple wdio runner for automation tests.

## Requirements
* Node 6.9.2 +
* Xcode 10.0 +
* Android Studio 3.0 +

## Usage
* cd `sample-test-automation-wdio-project`
* `npm install`
* Run test on mobile
   * `npm run mobile-test`
* Run test on web
   * Update the `testFixtureUrl` in `sample-test-automation-wdio-project/test/specs/automationTests.js` (to sample.html from clone https://github.com/asoneji/sample-test-automation-web-project)
   * `npm run web-test`

### Update App in resource
* https://github.com/asoneji/sample-test-automation-ios-project#build (copy the app file to resource folder `sample-test-automation-wdio-project/test/resources`)
* https://github.com/asoneji/sample-test-automation-android-project#build (copy the app file to resource folder `sample-test-automation-wdio-project/test/resources`)


### TODO:
* Add usage documents in iOS, Android, and Web project
* Add build process for real device (currently only supports simulator)
* Add more test cases