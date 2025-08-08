const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    //Screenshot en caso de fallar un test
    screenshotOnRunFailure: true,
    //Pantalla Maximmizada
    viewportWidth: 2560,
    viewportHeight: 1440,
    setupNodeEvents(on, config) {
      mochawesome(on);
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: true,
      charts: true,
      reportPageTitle: "Reporte de Pruebas Cypress",
      embeddedScreenshots: true,
      inlineAssets: true,
    },
  },
});
