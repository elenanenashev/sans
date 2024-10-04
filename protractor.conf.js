let SpecReporter  = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter  = require('protractor-beautiful-reporter');
//const chromedriver = require('chromedriver');

exports.config = {
  chromeDriver: 'node_modules/chromedriver/bin/chromedriver',

  SELENIUM_PROMISE_MANAGER: false,
  allScriptsTimeout: 999999,
  capabilities: { 
    shardTestFiles: true ,
    maxInstances: 1 ,
    browserName: 'chrome',
    chromeOptions: {
      args: ['--window-size=1920,1400'],
      // args: [ 
      //         '--incognito',
      //         '--headless=new', 
      //         '--disable-gpu',  
      //         '--window-size=1920,1400',
      //         'user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      //       ]
  }
},
  directConnect: true,
  baseUrl: "https://magento.softwaretestingboard.com",
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
   
    './src/specs/test4-*.ts'
    
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