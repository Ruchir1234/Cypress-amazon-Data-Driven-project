const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  watchForFilesChanges: false,
  chromeWebSecurity: false,
  waitForAnimation: true,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 90000,
  video: true,
  screenshotsFolder: 'cypress/videos',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/report',
    overwrite: false,
    charts: true,
    json: false,
    html: true,
    reportPageTitle: 'AmazonCypressTestReport',
    embeddedScreenshots: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.amazon.in',
  },
})
