import React from 'react'
import { graphql } from 'gatsby'
import BlogTagTemplate from '../../components/templates/blog-tag'

const BlogTag = ({ data, pageContext }) => (
  <BlogTagTemplate pageContext={pageContext} data={data} />)

export default BlogTag

export const query = graphql`
  query BlogsByTag($tag: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        fileAbsolutePath: {regex: "/(posts)/.*\\\\.md$/"},
        frontmatter: { tags: {elemMatch: {tag: { eq: $tag }}} }
        }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            author
            categories {
              category
            }
            featuredImage {
              relativePath
            }
          }
        }
      }
    }
  }
`
// export const pageQuery = graphql``
