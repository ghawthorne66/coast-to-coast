/* eslint-disable no-octal-escape */

import React from 'react'
import {
  Col, Container, Row,
} from 'react-bootstrap'

import styled from 'styled-components'
import Image from '../common/image'
import { Cta } from '../common/stlyled'

const FooterSection = styled.footer`
  
`

const LogoCont = styled.div`
  width: 200px;
`
const PhoneCta = styled.div`
  & {
    font-size: 20px; 
    font-family: "Lato";
  }
`

const Footer = () => (

  <FooterSection>
    <Container className="py-3 my-3">
      <Row>
        <Col className="d-flex justify-content-between">
          <LogoCont>
            <Image imgName="acumenlegal-logo.png" />
          </LogoCont>
          <PhoneCta>
            <a href="tel:3213513869" rel="noopener noreferrer" className="link--tel">(321) 351-3869</a>
          </PhoneCta>
        </Col>
      </Row>

    </Container>
  </FooterSection>
)

export default Footer
