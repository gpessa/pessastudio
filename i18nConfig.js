const configuration = require("./lingui.config.ts").default;

const i18nConfig = {
  prefixDefault: true,
  locales: configuration.locales,
  defaultLocale: configuration.fallbackLocales.default,
};

module.exports = i18nConfig;
