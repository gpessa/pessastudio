const nextConfig = require("./next.config");

module.exports = {
  catalogs: [
    {
      include: ['src'],
      path: 'src/i18n/{locale}/messages'
    }
  ],
  fallbackLocales: {
    default: nextConfig.i18n.defaultLocale
  },
  format: 'po',
  formatOptions: {
    lineNumbers: false,
    origins: false,
  },
  locales: nextConfig.i18n.locales,
  sourceLocale: 'it',
}