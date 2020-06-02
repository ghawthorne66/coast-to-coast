/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-octal-escape */

import React from 'react'
import {
  Col, Container, Row,
} from 'react-bootstrap'
import Slider from 'react-slick'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const StlyedHero = styled.section`

  & .slide {
    height: 650px !important;
  }

  & .slick-next:before, & .slick-prev:before {
    color: #000;
    font-size: 30px;
  }

  & .slick-prev{
    z-index: 999 !important;
    left: 20px !important;
  }
  
  & .slick-next{
    z-index: 999 !important;
    right: 25px !important;
  }

  & .slide-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(0,0,0,0.2);
    height: 100%;
    align-items: center;
    color: #fff; 
    padding: 10px 60px;

  }

  & .slide-content h2,p {
    font-family: 'Asap';
    text-align: center;
  }

  & .slide-content h2{
    font-size: 56px;
    font-weight: bold;
    background: ${({ theme }) => theme.colors.primary};
    padding: 0 15px;
  }

  & .slide-content p{
    font-size: 20px;
    max-width: 650px;
    background: rgba(0,0,0,0.5);
    padding: 10px 15px;
  } 
  
  @media (max-width: 768px) {
    & .slide-content h2{
      font-size: 24px;
    }
  }

  & .slide-content a{
    background-origin: padding-box;
    background: linear-gradient(90deg, rgb(1, 129, 199) 0%, rgb(110, 204, 255) 100%);
    border-radius: 50px;
    padding: 16px 32px;
    padding-bottom: 10px;
    color: #fff;
    border-color: none !important;

  }

  & .slide-content a: hover{
    text-decoration: none;
  }

  & .slick-dots li button:before {
    color: #fff; 
    font-size: 10px;
    margin-top: -30px;
    z-index: 9999;
  }
`

const sliderSettings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 10000,
  infinite: true,
  speed: 1000,
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
          <Col className="p-0">
            <Slider {...sliderSettings}>
              <BackgroundImage
                Tag="div"
                className="slide"
                fluid={image1}
              >
                <div className="slide-content">
                  <h2>COVID-19 Update:  Coast 2 Coast is open! </h2>
                  <p>
                    We are available to provide emergency
                    refrigeration repair and maintenance to supermarkets,
                    restaurants, and other locations during
                    the stay-in-place order.
                  </p>
                  <Link to="/contact"> CONTACT US TODAY </Link>
                </div>
              </BackgroundImage>

              <BackgroundImage
                className="slide"
                fluid={image2}
              >
                <div className="slide-content">
                  <h2>Commercial Refrigeration Services</h2>
                  <p>
                    Restaurants, grocery stores, pharamacies,
                    and warehouses need to protect their products with
                    reliable refrigeration systems.

                  </p>
                  <Link to="/services/residential-refrigeration"> LEARN MORE </Link>
                </div>
              </BackgroundImage>
              <BackgroundImage
                className="slide"
                fluid={image3}
              >
                <div className="slide-content">
                  <h2>Residential Refrigeration Services</h2>
                  <p>
                    Home refrigeration is important for
                    your everyday life, let us help you with
                    installations, maintenance, and repairs.
                  </p>
                  <Link to="/services/commercial-refrigeration"> LEARN MORE </Link>
                </div>
              </BackgroundImage>
              <BackgroundImage
                className="slide"
                fluid={image4}
              >
                <div className="slide-content">
                  <h2>Marine Refrigeration Services</h2>
                  <p>
                    We understand that at the end of the
                    day you’ll want a cold one and some food
                    to go with it, so let’s keep your vessel’s
                    refrigeration in top shape!
                  </p>
                  <Link to="/services/marine-refrigeration"> LEARN MORE </Link>
                </div>
              </BackgroundImage>
            </Slider>
          </Col>
        </Row>
      </Container>
    </StlyedHero>
  )
}
export default Hero
