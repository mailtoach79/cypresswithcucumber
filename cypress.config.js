const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin')
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
    video: false,
    screenshotOnRunFailure: true,
    experimentalWebKitSupport: true,
    e2e: {
      experimentalStudio:true,
      baseUrl: "https://ecommerce-playground.lambdatest.io",
      specPattern: "**/*.feature",
      setupNodeEvents(on, config) {
        on("file:preprocessor", cucumber());
        return getCompareSnapshotsPlugin(on, config);
      },
    },
    
  });
