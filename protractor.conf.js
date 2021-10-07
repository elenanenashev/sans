let HtmlReporter  = require('protractor-beautiful-reporter');
const {SpecReporter} = require('jasmine-spec-reporter');

exports.config = {

  SELENIUM_PROMISE_MANAGER: false,
  allScriptsTimeout: 999999,
  capabilities: { 
    shardTestFiles: true ,
    maxInstances: 1 ,
    browserName: 'chrome',
    chromeOptions: {
      args: ['--window-size=1920,1400'],
      //args: ["--headless", "--disable-gpu", "--window-size=1920,1400"]
  }
},
  directConnect: true,
  baseUrl: "http://localhost:8080",
  framework: 'jasmine',
  jasmineNodeOpts: {
      realtimeFailure:    true,
      showColors:         true,
      isVerbose:          true,
      ignoreSkippedSpecs: true,
      includeStackTrace:  true,
      defaultTimeoutInterval: 999999,
    },

  suites: { 
    acceptance: ['./src/specs/*/A-*.ts'], 
    smoke:      ['./src/specs/*/S-*.ts'],
    regression: ['./src/specs/*/R-*.ts'],
    all:        ['./src/specs/*/*.ts']
  },

  specs: [ 
   
    './src/specs/AddMovieTests.ts'
    
    ],
  
  onPrepare: function () {

    browser.waitForAngularEnabled(false);

    require('ts-node').register({
      project: './tsconfig.e2e.elena.json',
      });
      
      jasmine.getEnv().addReporter(
        new HtmlReporter({
            baseDirectory: 'testresults',
            disableScreenshots: true,
          }).getJasmine2Reporter());

      jasmine.getEnv().addReporter(
        new SpecReporter({
          spec: {
            displayFailuresSummary: true,
            displayFailuredSpec:    true,
            displaySuiteNumber:     true,
            displaySpecDuration:    true,
            displayStacktrace:     'none',
          },
        })
      );
    },

    onComplete: () => {
      const { browser } = require ('protractor');
      browser.driver.close().then(function(){
        browser.driver.quit();
      });
    },
}