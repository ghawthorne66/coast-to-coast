import React from 'react'
import {
  Row, Col, Container,
} from 'react-bootstrap'
import styled from 'styled-components'
import ContactForm from '../common/contact-form'
import Image from '../common/image'

const StyledContent = styled.section`
  & p{
    font-size: 16px;
    line-height: 27px;
    font-weight: 500;

    @media(max-width:768px){
      font-size: 16px;
    }
  }
`
const Content = () => (
  <Container>
    <StyledContent>
      <Row className="mt-5">
        <Col lg="7">
          <ContactForm />
        </Col>
        <Col className="mt-4 mt-lg-0" lg="5">
          <Image isShadow imgName="covid-bg.jpg" />
          <p className="mt-4">
            Coast 2 Coast Refrigeration welcomes people of walks of life looking
            for good, honest work. As a leader in the refrigeration repair industry,
            we like seeing what fresh talent has to offer in this growing industry.
            Opportunities may be few at present, you may leave your resume and other
            contact info to get in touch when opportunities arise.
          </p>
        </Col>
      </Row>
    </StyledContent>
  </Container>
)

export default Content
