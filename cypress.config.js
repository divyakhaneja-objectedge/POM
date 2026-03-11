const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    
    baseUrl: "https://demoblaze.com",

    setupNodeEvents(on, config) {
      require("@shelex/cypress-allure-plugin/writer")(on, config);
      return config;
      // implement node event listeners here
    },
  },
  env: {
    allure: true
  }
});

