import React from 'react'
import { graphql } from 'gatsby'
import SinglePostTemplate from '../components/templates/single-post'

const SinglePost = ({ data }) => (
  <SinglePostTemplate
    data={data}
  />

)

export default SinglePost

export const pageQuery = graphql`
  query SinglePost($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        title
        author
        featuredImage {
          relativePath
        }
        date(formatString: "MMMM Do, YYYY")
        categories {
          category
        }
      },
    }

    allPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {fileAbsolutePath: {regex: "/(posts)/.*\\\\.md$/"}}
    ) {
      edges {
        node {
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
        frontmatter {
            title
          }
        }
      }
    }
  }
`
