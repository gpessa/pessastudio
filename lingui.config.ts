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
      path: "src/locales/{locale}",
      include: ["src/"],
    },
  ],
};

export default configuration;
