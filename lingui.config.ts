import { LinguiConfig } from "@lingui/conf";

const configuration: LinguiConfig = {
  locales: ["en", "it", "pseudo"],
  pseudoLocale: "pseudo",
  sourceLocale: "en",
  fallbackLocales: {
    default: "en",
  },
  catalogs: [
    {
      path: "src/i18n/translations_{locale}",
      include: ["src/"],
    },
  ],
};

export default configuration;
