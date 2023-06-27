const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.spec.ts",
    setupNodeEvents(on, config) {
    },
  },
});
