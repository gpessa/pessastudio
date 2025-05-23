/** @type {import('next').NextConfig} */

// module.exports = {
//   experimental: {
//     swcPlugins: [
//       ['@lingui/swc-plugin', {}],
//     ],
//   },
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['it', 'fr', 'en']
//   },
//   reactStrictMode: true,
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.po/,
//       use: ['@lingui/loader'],
//     })

//     return config;
//   },
// }

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    swcPlugins: [["@lingui/swc-plugin", {}]],
  },
  turbopack: {
    rules: {
      "*.po": {
        as: "*.js",
        loaders: ["@lingui/loader"],
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.po$/,
      use: {
        loader: "@lingui/loader",
      },
    });

    return config;
  },
};

export default nextConfig;
