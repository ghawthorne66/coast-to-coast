/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-octal-escape */

import React from 'react'
import {
  Col, Container, Row,
} from 'react-bootstrap'
import Slider from 'react-slick'

import styled from 'styled-components'

const StlyedHero = styled.section`

`

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Slide1 = styled.div`
  background: red;
`
const Slide2 = styled.div`
  background: green;
`
const Slide3 = styled.div`
  background: blue;
`

const Hero = () => (
  <StlyedHero>
    <Container fluid>
      <Row>
        <Col>
          <h3>Slider Goes Here</h3>
          <div className="px-5">
            <h2> Single Item</h2>
            <Slider {...sliderSettings}>
              <Slide1>
                <h3>1</h3>
              </Slide1>
              <Slide2>
                <h3>2</h3>
              </Slide2>
              <Slide3>
                <h3>3</h3>
              </Slide3>

            </Slider>
          </div>
        </Col>
      </Row>
    </Container>
  </StlyedHero>
)

export default Hero
