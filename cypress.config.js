const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: "**/2-advanced-examples/*",
    baseUrl: "http://localhost:3000/",
  },
  
});

// cypress config documentation: https://docs.cypress.io/guides/references/configuration


