module.exports = {
  pathPrefix: "/pessastudio",
  siteMetadata: {
    siteUrl: `https://www.pessastudio.com`,
    title: `Pessa studio`,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Quicksand:400,600", "Roboto+Condensed:400,700"],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://pessastudio.us4.list-manage.com/subscribe/post?u=9827f22cb9c00c4d7ff1c48ab&amp;id=199848d4fd',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
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
        icon: "src/images/favicon.jpg",
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`it`, `fr`],
        defaultLanguage: `it`,
        redirect: true,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-8737323-14",
        },
        environments: ["production", "development"], // Defines the environments where the tracking should be available  - default is ["production"]
      },
    },
  ],
}
