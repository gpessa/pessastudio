const nextConfig = require("./next.config");

module.exports = {
  sourceLocale: 'it',
  locales: nextConfig.i18n.locales,
  fallbackLocales: {
    default: nextConfig.i18n.defaultLocale
  },
  catalogs: [
    {
      path: 'src/i18n/{locale}/messages',
      include: ['src']
    }
  ],
  format: 'po',
}