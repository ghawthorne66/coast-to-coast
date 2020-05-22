/* eslint-disable no-octal-escape */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import {
  Col, Container, Row, Button,
} from 'react-bootstrap'

import styled from 'styled-components'
import { Cta } from '../common/stlyled'
import Image from '../common/image'

const HeroContainer = styled(Container)`
  min-height: 450px;
  color: ${({ theme }) => theme.colors.dark};
`

const Heading = styled.h1`
  font-size: 44px; 
  font-weight: bold;
  text-align: center;
`
const Tagline = styled.h5`
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
`

const ReviewImage = styled(Image)`
  width: 300px;
`

const WhyUsList = styled.ul`

  & li:before {
      content: '${(props) => props.content}' !important;
      font-family: '';
      font-weight: bold;
      margin-right: 0.3em;
      margin-left: -1.5em;
      text-align: right;
      color: ${({ theme }) => theme.colors.primary};
    }

  & li {
    list-style: none;
    font-size: 20px; 
    padding-top: 10px;
    padding-bottom: 10px;
  }

  & li u{
    font-weight: bold;
    font-style: italic;
  }

`

const Hero = ({ togglePopup }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "acl-hero-bg.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.desktop.childImageSharp.fluid
  return (
    <BackgroundImage
      Tag="section"
      className="hero-bg"
      fluid={imageData}
      backgroundColor="#040e18"
    >
      <HeroContainer className="d-flex justify-content-center align-items-center">
        <Row>
          <Col className="py-5">
            <Heading>Are You Ready To Book More Clients?</Heading>
            <Tagline>Schedule Your Free Client Growth Accelerator Call With The Legal Marketing Professionals. </Tagline>
            <p className="text-center"><Cta onClick={() => togglePopup()} className="my-4">Book My Free Client Growth Accelerator Call</Cta></p>

            <h3 className="text-center py-3 font-weight-bold">Why should you invest 30 minutes of your time with us?</h3>
            <p>We understand how valuable your time is. We also understand that if you're like most attorneys we work with, you don't have the time to make sure your business is in front of people that can become clients on a consistent and reliable basis. You don't have time to keep up with all the digital marketing trends that are needed to make sure you are being seen where your potential clients are.</p>
            <p>That's where we come in.</p>
            <p>When you book a free client growth accelerator call, we'll take time to understand your business and find where the gaps and opportunities exist. We'll give you a plan on what needs to be done and how you can put those things in place so you're booking new clients as soon as next week.</p>
            <div className="acl-reviews-cont row">
              <div className="col-sm-6 p-2">
                <ReviewImage imgName="acl-brain-review.png" />
              </div>
              <div className="col-sm-6 p-2">
                <ReviewImage imgName="acl-joshua-review.png" />
              </div>
            </div>

            <h2 className="py-5 font-weight-bold text-center">Why do firms large & small work with us?</h2>

            <WhyUsList content="\2713">
              <li>
                <u>We Offer Area Exclusivity</u>
                &nbsp; (Unlike Our Competitors, We Won't Work With Your Competition)
              </li>
              <li>
                <u>No Long Term Contracts</u>
                &nbsp; (Unlike Our Competitors, We Have To Perform To Retain You)
              </li>
              <li><u>We Focus Our Metrics Around New Clients And ROI</u></li>
              <li>
                <u>We ONLY Work With Law Firms</u>
                &nbsp; (We Get What It Takes To Bring Clients In The Door)
              </li>
            </WhyUsList>

            <p className="text-center">
              <Cta
                onClick={() => togglePopup()}
              >
                Book My Free Client Growth Accelerator Call
              </Cta>
            </p>

          </Col>
        </Row>
      </HeroContainer>
    </BackgroundImage>
  )
}

Hero.propTypes = {
  togglePopup: PropTypes.func.isRequired,
}

export default Hero
