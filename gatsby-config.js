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
    title: `Pessastudio`,
    author: `Pessastudio`
  },
  plugins: [
    `gatsby-plugin-tsconfig-paths`,
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto condensed\:400`,
          `source sans pro\:400,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "https://pessastudio.us4.list-manage.com/subscribe/post?u=9827f22cb9c00c4d7ff1c48ab&amp;id=199848d4fd",
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
        custom: `
          <IfModule mod_headers.c>
            <FilesMatch "\.(bmp|cur|gif|ico|jpe?g|png|svgz?|webp)$">
                Header set Cache-Control "public, max-age=1209600, immutable"
            </FilesMatch>
          </IfModule>
        `
      },
    },
  ],
}
