import { defineConfig } from "wxt";

import { FT_DOMAINS } from "./src/utils/constants";

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    action: {},
    permissions: ["storage", "webNavigation"],
    web_accessible_resources: [
      {
        resources: ["injected.js"],
        matches: [FT_DOMAINS],
      },
    ],
  },
  modules: ["@wxt-dev/auto-icons", "@wxt-dev/module-svelte"],
  srcDir: "src",
  webExt: {
    startUrls: ["https://www.ft.com/"],
  },
  //
  // Svelte plugin config
  // Note that `import.meta.env.DEV` is undefined
  svelte: {
    vite: {
      inspector: import.meta.env.NODE_ENV === "development",
    },
  },
});
