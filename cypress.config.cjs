const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.istyle.am/'
  },
  env: {
    baseUrl: 'https://www.istyle.am/'
  }
});
