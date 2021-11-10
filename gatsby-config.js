const redirect = require('./src/rewrite/index.js');
const IS_PRODUCTION = process.env.ACTIVE_ENV === "PRODUCTION" ? true : false

const siteUrl = IS_PRODUCTION ?
  "https://pessastudio.eu" :
  "https://gpessa.github.io"

const pathPrefix = IS_PRODUCTION ?
  undefined :
  "/pessastudio"

const googleTagManager = IS_PRODUCTION ?
  {
    trackingId: 'GTM-NTCR82T',
    cookieName: 'gatsby-gdpr-google-tagmanager',
  } :
  undefined

module.exports = {
  pathPrefix,
  siteMetadata: {
    siteUrl,
    description: ``,
    title: `Pessastudio`,
    author: `Pessastudio`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleTagManager,
        environments: ['production', 'development']
      },
    },
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
    `gatsby-plugin-material-ui`,
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
