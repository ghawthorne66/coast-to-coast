/* eslint-disable no-octal-escape */

import React from 'react'
import PropTypes from 'prop-types'
import {
  Col, Container, Row,
} from 'react-bootstrap'

import styled from 'styled-components'
import Image from '../common/image'
import { Cta } from '../common/stlyled'

const AnalyticsSection = styled.section`
  & p { 
    font-size: 18px;
  }

`
const AnalyticsImage = styled(Image)`

  width: 100%;

`

const Analytics = ({ togglePopup }) => (

  <AnalyticsSection>
    <Container className="py-3 my-3">
      <Row>
        <Col sm="6">
          <h2 className="font-weight-bold py-4">The good news is...</h2>
          <p>Acumen Legal Marketing is NOT an SEO Company. We implement all the latest and result producing strategies to make sure your firm is getting found online and view this as the starting point. Simply adding blog content to your website monthly will not deliver the results you are looking for in today's competitive environment.</p>

          <p>
            We take a combined approach and offer a complete solution. We focus on things like your companies google map position and local search. (Mainly because that is driving about 80% of firm web leads in todays environment) We focus on your companies reputation and ensuring you are seen as the Authority in your field.
          </p>

          <p>
            But most importantly we focus on the conversion of these visits. Driving lots of traffic does not improve your firms bottom line; converting those visitors into customers does.
          </p>

          <p className="text-center">
            <Cta onClick={() => togglePopup()}>Book My Free Client Growth Accelerator Call</Cta>
          </p>
        </Col>

        <Col sm="6 py-4">
          <AnalyticsImage imgName="acl-analytics.png" />
        </Col>
      </Row>
    </Container>
  </AnalyticsSection>
)

Analytics.propTypes = {
  togglePopup: PropTypes.func.isRequired,
}

export default Analytics
