/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['it', 'fr', 'en'],
    defaultLocale: 'en'
  },
  experimental: {
    swcPlugins: [
      ['@lingui/swc-plugin', {
        // the same options as in .swcrc
      }],
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.po/,
      use: ['@lingui/loader'],
    })

    return config;
  },
}
