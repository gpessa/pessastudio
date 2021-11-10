const redirect = require('./src/rewrite/index.js');


module.exports = {
  siteMetadata: {
    siteUrl: `https://pessastudio.eu`,
    title: `Pessastudio`,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/index.tsx`),
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: "it",
        prefixDefault: true,
        configPath: require.resolve(`./src/i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-lingui`,
      options: {
        localeDir: `./src/i18n/lingui`,
      },
    },
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src",
        aliases: {
          "@components": "./components",
          "@constants": "./constants",
          "@styles": "./styles",
          "@images": "./images",
          "@hooks": "./hooks",
          "@theme": "./theme",
          "@hoc": "./hoc",
        },
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Source+Sans+Pro:400,700", "Roboto+Condensed:400"],
        }
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "https://pessastudio.us4.list-manage.com/subscribe/post?u=9827f22cb9c00c4d7ff1c48ab&amp;id=199848d4fd",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pessastudio`,
        short_name: `pessastudio`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
        icon: "static/generals/logo.jpg",
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-NW0NP4N7ZF',
        },
        environments: ["production"],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        www: false,
        https: true,
        host: 'pessastudio.eu',
        DisallowSymLinks: true,
        redirect,
        ErrorDocument: `
          ErrorDocument 403 /404.html
          ErrorDocument 404 /404.html
        `,
      },
    },
  ],
}
