/* eslint-disable no-octal-escape */

import React from 'react'
import PropTypes from 'prop-types'

import {
  Col, Container, Row,
} from 'react-bootstrap'

import styled from 'styled-components'

import { Cta } from '../common/stlyled'

const BoxText = styled.p`
  font-size: 18px; 
  text-align: center;
  font-family: "Lato";
  padding-top: 15px;
`

const Main = ({ togglePopup }) => (

  <Container className="py-3 my-3">
    <Row>
      <Col className="py-3 my-3">
        <h2 className="text-center font-weight-bold">Does this sound like you?</h2>
      </Col>

    </Row>
    <Row>
      <Col sm="4">
        <h4 className="font-weight-bold">#1 SEO Doesn't Work</h4>
        <BoxText>I am sure that everyone reading this right now has been "burned" on an SEO service at some point. You invested time and money and saw little to no results. The problem is that SEO is only ONE component of a online marketing strategy; the rest often gets overlooked by "SEO Experts."</BoxText>
      </Col>
      <Col sm="4">
        <h4 className="font-weight-bold">#2 Spending lots of money</h4>
        <BoxText>You understand that you need to invest in your firms growth. You are OK with this investment but you often feel like you have no idea where the money is being spent. Regardless of the results you are told to stay the course and will eventually see a return on your investment.</BoxText>
      </Col>
      <Col sm="4">
        <h4 className="font-weight-bold">#3 Excuses over Solutions</h4>
        <BoxText>Every time you mention to your "SEO Company" that you think something might not be performing you are sent a random Keyword ranking report to prove you wrong. The truth about marketing; if you are not signing up new customers the plan is NOT working.</BoxText>
      </Col>
    </Row>
    <Row>
      <Col className="py-3 my-3">
        <p className="text-center"><Cta onClick={() => togglePopup()}>Book My Free Client Growth Accelerator Call</Cta></p>
      </Col>
    </Row>
  </Container>
)

Main.propTypes = {
  togglePopup: PropTypes.func.isRequired,
}

export default Main
