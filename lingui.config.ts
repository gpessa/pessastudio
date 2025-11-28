import { defineConfig } from "@lingui/cli";

export default defineConfig({
  locales: ["en", "it", "fr"],
  sourceLocale: "it",
  fallbackLocales: {
    default: "en",
  },
  catalogs: [
    {
      path: "src/i18n/{locale}",
      include: ["src/"],
    },
  ],
  orderBy: "origin",
});
