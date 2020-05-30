import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {
  Col, Row, Container, Button,
} from 'react-bootstrap'
import Image from '../common/image'

const StyledWhoWeAre = styled.section`

  & h2{
    font-family: 'Asap';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    text-align: center;
    font-size: 36px;
  }

  & a{
    border-radius: 40px;
    padding: 5px 32px;
    margin-top: 5px;
  }

  & a:hover{
    text-decoration: none;
  }

  & .img-cont{
    width: 250px;
    height: 250px;
    border-radius: 250px;
    margin: 10px auto !important;
  }

  & .img-cont img{
    border-radius: 250px;
  }
`

const WhoWeAre = () => (
  <StyledWhoWeAre>
    <Container className="my-5">
      <Row>
        <Col sm="8" className="order-2 order-sm-1">
          <h2 className="pb-3">Who We Are </h2>
          <p>In January 2019, Raymond Barnes established Coast 2 Coast Refrigeration with a view to be able to service San Diego Bay area customer base, from the simplest refrigeration or A/C system, and to include not only business but the boating world as well. Coast 2 Coast’s philosophy is about ensuring the solution you get is tailored to suit the size, space and need you may have. Raymond has made sure to include all insurances, bond and other licenses, and can provide upon request.</p>

          <div className="btn-cont text-center my-4">
            <Link to="/services" className="btn btn-outline-primary more-btn mx-2">FIND OUT MORE</Link>
            <Link to="/contact" className="btn btn-primary apnt-btn mx-2">SCHEDULE APPOITNTMENT</Link>
          </div>
        </Col>
        <Col sm="4" className="order-1 order-sm-2">

          <div className="img-cont">
            <Image imgName="about-coast.jpg" />
          </div>
        </Col>
      </Row>
    </Container>
  </StyledWhoWeAre>
)

export default WhoWeAre
