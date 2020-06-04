import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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

export default SimpleMap
