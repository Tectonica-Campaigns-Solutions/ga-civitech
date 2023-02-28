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
      resolve: 'gatsby-plugin-iubenda-cookie-footer',
      options: {
        iubendaOptions: {"localConsentDomain": "clever-belekoy-d45eb9.netlify.app","askConsentAtCookiePolicyUpdate":true,"countryDetection":true,"enableLgpd":true,"enableUspr":true,"floatingPreferencesButtonDisplay":"bottom-right","gdprAppliesGlobally":false,"lang":"en","lgpdAppliesGlobally":false,"perPurposeConsent":true,"siteId":2999283,"whitelabel":false,"cookiePolicyId":45114282, "banner":{ "acceptButtonDisplay":true,"closeButtonDisplay":false,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"float-top-center","rejectButtonDisplay":true,"showPurposesToggles":true }},
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
