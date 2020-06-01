import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Col, Row, Container } from 'react-bootstrap'
import Image from '../common/image'

const ImgCont = styled.div`
  width: 150px;
  margin: 0 auto;

`

const ThankYou = () => (
  <>
    <Container>
      <Row>
        <Col className="text-center m-2 p-2">
          <ImgCont>
            <Image imgName="success.png" />
          </ImgCont>

          <p className="lead">
            <strong>Your Message Have Been Received</strong>
            . We will contact you
            shortly
          </p>

          <p className="lead">
            <Link className="btn btn-primary btn-sm" to="/">
              Learn More
            </Link>
          </p>
        </Col>
      </Row>
    </Container>

    {/* <div className="jumbotron text-center mb-0">

      <img
        clasName="img-fluid mb-4"
        src={require('../../../images')}
      />
      <h1 className="display-3 mt-4">Thank You!</h1>

    </div> */}
  </>
)

export default ThankYou
