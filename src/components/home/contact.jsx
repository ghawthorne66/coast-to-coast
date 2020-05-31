import React from 'react'
import {
  Row, Col, Container, Button,
} from 'react-bootstrap'
import styled from 'styled-components'

import ContactForm from '../common/contact-form'

const StyledContact = styled.section`
  background: ${({ theme }) => theme.colors.primary};

  & .cta-btn{
    margin: 10px  auto;
    text-align: center;
  }
  
  & a{
    border-radius: 40px;
    width: 250px; 
    margin: 10px; 
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }

  & a i{
    padding-right: 10px;
  }

  & h2{
    font-family: 'Asap';
    color: ${({ theme }) => theme.colors.light};
    font-weight: bold;
    text-align: center;
    font-size: 36px;
  }
`

const Contact = () => (
  <StyledContact>
    <Container className="my-2 py-5">
      <Row>
        <Col><h2>Contact Us</h2></Col>
      </Row>
      <Row>
        <Col md="6" className="offset-md-3 py-3 d-flex flex-column justify-content-center ">
          <div className="cta-btn">
            <Button href="tel:+19197990276" size="lg" variant="light">
              <i className="fa fa-phone" />
              +19197990276
            </Button>
            <Button size="lg" href="mailto:info@coast2coastrefrigeration.com" variant="light">
              <i className="fa fa-envelope" />
              Email us
            </Button>
          </div>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  </StyledContact>
)

export default Contact
