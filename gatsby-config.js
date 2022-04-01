const redirect = require('./src/rewrite/index.js');

module.exports = {
  flags: {
    PARALLEL_QUERY_RUNNING: true
  },
  siteMetadata: {
    title: `Pessastudio`,
    author: `Pessastudio`,
    siteUrl: "https://pessastudio.eu",
  },
  plugins: [
    "gatsby-plugin-tsconfig-paths",
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleTagManager: {
          trackingId: 'GTM-NTCR82T',
          cookieName: 'gatsby-gdpr-google-tagmanager',
        },
        environments: ['production']
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-typescript",
    // 'gatsby-plugin-ts-checker',
    "gatsby-plugin-react-helmet",
    {
      "resolve": "gatsby-plugin-webfonts",
      options: {
        fonts: {
          google: [
            {
              family: `Roboto Condensed`,
              variants: [`400`],
              fontDisplay: 'swap',
            },
            {
              family: `Source Sans Pro`,
              variants: [`400`, `700`],
              fontDisplay: 'swap',
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/index.tsx`),
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "https://pessastudio.us4.list-manage.com/subscribe/post?u=9827f22cb9c00c4d7ff1c48ab&amp;id=199848d4fd",
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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Pessastudio",
        short_name: "Pessastudio",
        start_url: "/ ",
        background_color: "#fff",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/assets/generals/logo-hi.jpg"
      },
    },
  ],
}
