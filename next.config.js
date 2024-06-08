/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    legacyBrowsers: false,
    swcPlugins: [
      ['@lingui/swc-plugin', {}],
    ],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['it', 'fr', 'en']
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.po/,
      use: ['@lingui/loader'],
    })

    return config;
  },
}
