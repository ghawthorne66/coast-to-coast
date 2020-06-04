import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ imgName, isShadow, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
    
  `)

  const image = data.allImageSharp.edges.find(
    (edge) => edge.node.fluid.originalName === imgName,
  )
  if (!image) {
    return null
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Img className={isShadow && 'shadow-lg rounded'} fluid={image.node.fluid} {...props} />

  // return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

Image.defaultProps = {
  isShadow: '',
}

Image.propTypes = {
  imgName: PropTypes.string.isRequired,
  isShadow: PropTypes.string,
}

export default Image
