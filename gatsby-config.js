require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Civitech`,
    description: `Run for office. Register and turnout voters. Win elections. Political technology and data for today's leading nonprofits, causes, and Democratic campaigns`,
    author: `Tectonica`,
    siteUrl: `https://clever-belekoy-d45eb9.netlify.app/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-E3TJX5HR88']
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        environments: ['production', 'development']
      }
    },
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://use.typekit.net', 'https://forms-eu1.hsforms.com'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        preview: false,
        disableLiveReload: false,
        // environment: process.env.DATO_ENVIRONMENT ? process.env.DATO_ENVIRONMENT : '',
      },
    },
  ],
};
