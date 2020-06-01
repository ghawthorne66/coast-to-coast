import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const SimpleMap = () => {
  const data = useStaticQuery(graphql`
    query StaticMapQuery {
      staticMap {
        childFile {
          childImageSharp {
                fluid{
                  ...GatsbyImageSharpFluid
                }
            }
        }
    }
}  
  `)
  return <Img fluid={data.staticMap.childFile.childImageSharp.fluid} />
}

Image.propTypes = {
  imgName: PropTypes.string.isRequired,
}

export default SimpleMap
