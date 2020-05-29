/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-octal-escape */

import React from 'react'
import {
  Col, Container, Row,
} from 'react-bootstrap'
import Slider from 'react-slick'

import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const StlyedHero = styled.section`

  & .slide {
    height: 100vh;

`

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      slide1: file(relativePath: { eq: "covid-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide2: file(relativePath: { eq: "commericial-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide3: file(relativePath: { eq: "residential-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide4: file(relativePath: { eq: "marine-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }    
  `)

  const image1 = data.slide1.childImageSharp.fluid
  const image2 = data.slide2.childImageSharp.fluid
  const image3 = data.slide3.childImageSharp.fluid
  const image4 = data.slide4.childImageSharp.fluid

  return (
    <StlyedHero>
      <Container fluid>
        <Row>
          <Col>
            <h3>Slider Goes Here</h3>
            <div className="px-5">
              <h2> Single Item</h2>
              <Slider {...sliderSettings}>
                <BackgroundImage
                  Tag="div"
                  className="slide1-bg"
                  fluid={image1}
                  backgroundColor="#040e18"
                >
                  <h3>Slide with Background</h3>
                </BackgroundImage>

                <BackgroundImage
                  Tag="div"
                  className="slide1-bg"
                  fluid={image2}
                  backgroundColor="#040e18"
                >
                  <h3>1</h3>
                </BackgroundImage>
                <BackgroundImage

                  Tag="div"
                  className="slide1-bg"
                  fluid={image3}
                  backgroundColor="#040e18"
                >
                  <h3>2</h3>
                </BackgroundImage>
                <BackgroundImage
                  Tag="div"
                  className="slide1-bg"
                  fluid={image4}
                  backgroundColor="#040e18"
                >
                  <h3>3</h3>
                </BackgroundImage>

              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </StlyedHero>
  )
}
export default Hero
