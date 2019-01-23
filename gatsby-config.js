// eslint-disable

module.exports = {
  siteMetadata: {
    title: 'Portfolio'
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'TESTS',
        short_name: 'starter',
        start_url: '/',
        display: 'minimal-ui'
        // icon: 'static/assets/android-chrome-512x512.png', // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-netlify-cms',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./static/assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/pages`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline'
  ],
}
