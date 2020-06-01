module.exports = {
  siteMetadata: {
    title: 'Coast 2 Coast Refrigeration',
    description: 'San Diego Refrigeration &amp; A/C Repair | Coast 2 Coast Refrigeration',
    author: '@gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-googlemaps-static',
      options: {
        key: 'AIzaSyCixT0iG2HZkTOLWBd2EKAWEpFK27dn8P0',
        center: '32.774799,-117.071869',
        size: '600x250',

      },
    },
    'gatsby-plugin-styled-components',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
