import React from 'react'
import {
  Row, Col, Container,
} from 'react-bootstrap'
import styled from 'styled-components'
import ContactForm from '../common/contact-form'

const StyledContent = styled.section`
    & h1 {
      font-family: "Asap";
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
      font-size: 20px;
      line-height: 48px;

      @media (max-width: 768px) {
        font-size: 18px;
      }
    }

    & h3 {
      font-family: "Asap";
      font-weight: 700;
      font-size: 17px;
      line-height: 35px;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }

    & p {
      font-size: 18px;
      line-height: 27px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.gray};

      @media(max-width:768px){
        font-size: 14px;
      }
    }

    & a {
      text-decoration:none;
      color: ${({ theme }) => theme.colors.primary};
    }

    & i {
      color: ${({ theme }) => theme.colors.primary};
    }
`
const StyledDiv = styled.div`
    width: 95px;

`
const Content = () => (
  <Container>
    <StyledContent>
      <Row className="mt-5">
        <Col lg="7">
          <ContactForm />
        </Col>
        <Col className="mt-4 mt-lg-0 px-5" lg="5">
          <Row className="d-flex">
            <StyledDiv>
              <Col className="text-center">
                <i className="fa fa-mobile fa-5x" />
              </Col>
            </StyledDiv>
            <Col className="">
              <h1>
                Call Coast 2 Coast
              </h1>
              <a href="tel:3213513869">
                <h3>
                  (919) 799-0276
                </h3>
              </a>
            </Col>
          </Row>
          <Row className="mt-3">
            <StyledDiv>
              <Col>
                <i className="fa fa-envelope fa-5x" />
              </Col>
            </StyledDiv>
            <Col>
              <h1>
                Email Coast 2 Coast
              </h1>
              <a href="mailto:info@coast2coastrefrigeration.com">
                <h3>
                  info@coast2coastrefrigeration.com
                </h3>
              </a>
            </Col>
          </Row>
          <h1 className="mt-4">
            Hours
          </h1>
          <p>
            Monday – Friday: 6 AM – 6 PM
            <br />
            Weekend: By Appointment Only
            <br />
            Serving all of the San Diego area
          </p>
        </Col>
      </Row>
    </StyledContent>
  </Container>

)
export default Content
