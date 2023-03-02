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
        trackingIds: ['GTM-PHN3G58']
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        environments: ['production']
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
        previewMode: process.env.DATO_PREVIEW ? process.env.DATO_PREVIEW : false,
        disableLiveReload: false,
      },
    },
  ],
};
