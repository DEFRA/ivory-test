
'use strict'
const bsApi = require('./acceptance-test/browserstack/api.js')
var browserstack = require('browserstack-local')
var request = require('request')
const compatibility = require('./acceptance-test/browsers.js')
const moment = require('moment-timezone')
const timestamp = moment.tz('Europe/London').format('D/M/YY hh:mm:ss')

exports.config = {

  specs: [
    './acceptance-test/specs/**/*.js'
  ],

  maxInstances: 2,

  user: process.env.BROWSERSTACK_USERNAME || 'delelookman_luaedN',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'wKiQKQMXy6v3q33hz82T',

  capabilities: compatibility.map(e => {
    e.project = 'Ivory'
    e.build = 'Ivory'
    e.name = `Dele Lookman@ ${timestamp}`
    e['browserstack.local'] = true
    e['browserstack.debug'] = true
    e['browserstack.networkLogs'] = true
    e['browserstack.acceptSslCerts'] = true
    e['browserstack.console'] = 'errors'
    e['browserstack.use_w3c'] = true
    e['browserstack.selenium_version'] = '3.141.59'
    return e
  }),

  // Code to start browserstack local before start of test
  onPrepare: function (config, capabilities) {
    console.log('Connecting local')
    return new Promise(function (resolve, reject) {
      exports.bs_local = new browserstack.Local()
      const bsLocalArgs = {
        key: exports.config.key,
        verbose: 'true',
        force: 'true',
        onlyAutomate: 'true',
        forceLocal: 'true'
      }
      exports.bs_local.start(bsLocalArgs, function (error) {
        if (error) return reject(error)
        console.log('Connected. Now testing...')
        resolve()
      })
    })
  },

  // Code to stop browserstack local after end of test
  onComplete: (capabilities, specs) => {
    exports.bs_local.stop()
    console.log('Testing complete, binary closed')
  },

  logLevel: 'warn',
  bail: 0,
  baseUrl: 'https://ivy-web-tst.azure.defra.cloud',
  waitforTimeout: 60000,
  connectionRetryTimeout: 60000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters:
    [
      'spec', 'dot'
    ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 240000
  },
  afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
          browser.takeScreenshot()
        }
        const sessionId = browser.sessionId
        // only update session status for failures
        if (!passed) {
          await bsApi.setSessionFailed(sessionId,error,result)      
        }
        await bsApi.setSessionName(sessionId, chooseSessionName(test))
      },
      after: async function (config, capabilities, specs) {
        const sessionId = browser.sessionId
        const status = await bsApi.getSessionStatus(sessionId)
        // mark session as passed if it has not failed or timed out
        if (status != 'failed' && status != 'timeout') {
          await bsApi.setSessionPassed(sessionId)
        }
      },

      before: function (test, context) {
        const chai = require('chai')        
        global.chaiExpect = chai.expect       
        global.should = chai.should()   
    }, 
}

// name after describe (test.parent) or test file name from path (test.file)
function chooseSessionName (test) {
  if (test.parent) {
    return test.parent
  } else {
    const parts = test.file.split('/')
    return parts[parts.length - 1]
  }
}
// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i]
})
