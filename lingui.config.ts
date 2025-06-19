import { LinguiConfig } from "@lingui/conf";

const configuration: LinguiConfig = {
  locales: ["en", "it", "fr", "pseudo"],
  pseudoLocale: "pseudo",
  sourceLocale: "en",
  fallbackLocales: {
    default: "en",
  },
  catalogs: [
    {
      path: "src/i18n/{locale}/messages",
      include: ["src/"],
    },
  ],
};

export default configuration;
