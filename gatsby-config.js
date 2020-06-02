module.exports = {
  siteMetadata: {
    title: 'Coast 2 Coast Refrigeration',
    description: 'San Diego Refrigeration &amp; A/C Repair | Coast 2 Coast Refrigeration',
    author: '@gatsbyjs',
  },
  plugins: [
    // Images
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-plugin-slug-field',
      options: {
        filter: { internal: { type: 'MarkdownRemark' } },
        source: (node) => `${node.frontmatter.title}`,
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
    'gatsby-plugin-netlify-cms',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
