const nextConfig = require("./next.config");

module.exports = {
  catalogs: [
    {
      include: ['src'],
      path: 'src/i18n/{locale}/messages'
    }
  ],
  fallbackLocales: {
    default: 'en'
  },
  format: 'po',
  formatOptions: {
    lineNumbers: false,
    origins: false,
  },
  locales: ['it', 'fr', 'en'],
  sourceLocale: 'it',
}