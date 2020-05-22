/* eslint-disable no-octal-escape */

import React from 'react'
import PropTypes from 'prop-types'

import {
  Col, Container, Row,
} from 'react-bootstrap'

import styled from 'styled-components'
import { Cta } from '../common/stlyled'

const TestimonailSection = styled.section`
  & {
    background: ${({ theme }) => theme.colors.primary};
  }
`
const ImgCont = styled.div`
  width: 200px;
  height: 200px;
  radius: 100px;
  margin: 20px auto;
`

const Testimonials = ({ togglePopup }) => (

  <TestimonailSection>
    <Container className="py-5 mt-3">
      <Row>
        <Col className="text-center">
          <h2 className="py-4 font-weight-bold">Jake Wyland Esq. was having the same problems until...</h2>

          <ImgCont>
            <img src={require('../../images/avatar-2.jpg')} className="img rounded-circle" width="200px" height="200px" alt="Avatar" />
          </ImgCont>

          <h4 className="px-4"> "I have been an Acumen client since 2014. For years, their direct-mail product was responsible for 90% of my business. It delivered consistent results month after month and was largely responsible for helping me establish a successful practice in a market where I was an unknown commodity at the outset. Recently, with growth and diversification in mind, the Acumen team helped me build a new website and launch SEO and PPC campaigns with great success. I cannot recommend them highly enough."</h4>
          <li className="py-2"> Jake Wyland Esq. | Pittsburgh, PA</li>

          <p className="py-5"><Cta onClick={() => togglePopup()}>Book My Free Client Growth Accelerator Call</Cta></p>
        </Col>
      </Row>

    </Container>
  </TestimonailSection>
)

Testimonials.propTypes = {
  togglePopup: PropTypes.func.isRequired,
}

export default Testimonials
