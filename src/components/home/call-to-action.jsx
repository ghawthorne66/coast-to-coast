/* eslint-disable no-octal-escape */

import React from 'react'
import PropTypes from 'prop-types'

import {
  Col, Container, Row,
} from 'react-bootstrap'

import styled from 'styled-components'

import { Cta } from '../common/stlyled'

const CallToActionSection = styled.section`
  & {
    background: ${({ theme }) => theme.colors.lightGray};
    min-height: 450px; 
  }

`

const CallToAction = ({ togglePopup }) => (

  <CallToActionSection>
    <Container className="py-5">
      <Row className="py-5">
        <Col className="py-5">
          <h2 className="text-center font-weight-bold">If you're tired of dealing with these problems and are ready to get started with a growth plan that delivers results...</h2>

          <p className="text-center py-4"><Cta onClick={() => togglePopup()}>Book My Free Client Growth Accelerator Call</Cta></p>
        </Col>

      </Row>

    </Container>
  </CallToActionSection>
)

CallToAction.propTypes = {
  togglePopup: PropTypes.func.isRequired,
}

export default CallToAction
