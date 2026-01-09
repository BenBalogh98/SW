import { defineConfig } from 'cypress'
import viteConfig from '../SWfrontend/vite.config.js';

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig,
    },
    port: 4040,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
