import React from 'react'
import {
  Container, Row, Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import Image from '../common/image'

const StyledOurClients = styled.section`

    & h1{
      color: ${({ theme }) => theme.colors.primary};
      font-size: 35px;
      line-height: 35px;
      font-weight: 700;
    }
`
const OurClients = () => (
  <StyledOurClients className="p-3 p-md-5">
    <Container>
      <Row>
        <Col className="my-4" xs="12">
          <h1>
            Our Clients
          </h1>
        </Col>
        <Col className="text-center" xs="6" sm="4" md="2">
          <Image imgName="aldi.png" />
        </Col>
        <Col className="text-center" xs="6" sm="4" md="2">
          <Image imgName="jambajuice-web.png" />
        </Col>
        <Col className="text-center" xs="6" sm="4" md="2">
          <Image imgName="client-pieology.png" />
        </Col>
        <Col className="text-center" xs="6" sm="4" md="2">
          <Image imgName="redrobin-web.png" />
        </Col>
        <Col className="text-center" xs="6" sm="4" md="2">
          <Image imgName="client-tocayo.png" />
        </Col>
        <Col className="text-center" xs="6" sm="4" md="2 ">
          <Image imgName="jack.png" />
        </Col>
      </Row>
    </Container>
  </StyledOurClients>
)

export default OurClients
