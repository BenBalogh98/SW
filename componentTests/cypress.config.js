import { defineConfig } from 'cypress'



export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: "../SWfrontend/vite.config.js",
    },
    port: 4040,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
