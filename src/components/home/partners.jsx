import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {
  Col, Row, Container, Button,
} from 'react-bootstrap'
import Image from '../common/image'

const StyledPartners = styled.section`

  & h4{
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    font-family: 'Asap';
  }

  & ul li{
    width: 150px !important;
    padding: 10px;
    display: inline-block;
    // text-decoration: none;
  }
  @media (max-width: 576px) {
    & ul li{
      text-align: center;
    }
  }

`

const Partners = () => (
  <StyledPartners>
    <Container className="my-5">
      <Row>
        <Col sm="2" className="d-flex justify-content-center align-items-center"><h4 className="font-weight-bold">Partners</h4></Col>
        <Col sm="10">

          <ul className="p-0">
            <li><Image imgName="partner-1.png" /></li>
            <li><Image imgName="partner-2.png" /></li>
            <li><Image imgName="partner-3.png" /></li>
            <li><Image imgName="partner-4.png" /></li>
          </ul>
        </Col>

      </Row>
    </Container>
  </StyledPartners>
)

export default Partners
