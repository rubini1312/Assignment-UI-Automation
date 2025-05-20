const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://www.saucedemo.com",
    requestTimeout:9000,
    defaultCommandTimeout:8000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
