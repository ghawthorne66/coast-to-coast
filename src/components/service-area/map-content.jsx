import React from 'react'
import {
  Container, Row, Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import SimpleMap from './map'

const StyledMapContent = styled.section`
  padding: 3%;  

  & h2{
    font-family: 'Asap';
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 700;
    text-align: left;
    font-size: 35px;
    line-height: 35px;
    
  }
  & p{
    color: ${({ theme }) => theme.colors.grey};
  }
`
const MapContent = () => (
  <StyledMapContent>
    <Container>
      <Row>
        <Col md="6">
          <p>
            At Coast 2 Coast Refrigeration,
            we pride ourselves in being one of the few refrigeration
            repair shops that can service the vast majority of San Diego
            County. From North San Diego to South San Diego (and anywhere in between)
            we’re confident that we can help you find your next
            refrigeration solution!
          </p>
        </Col>
        <Col md="6">
          <SimpleMap />
        </Col>
      </Row>
      <Row>
        <Col className="pt-5">
          <h2>
            Coast 2 Coast is the best refrigeration repair in San Diego
          </h2>
          <p>
            Servicing Carlsbad, Carmel Valley, Chula Vista,
            City Heights, Clairemont, Coronado, Del Mar, Downtown, El Cajon,
            Encanto, Encinitas, Kearny Mesa, La Jolla, La Mesa, Miramar,
            Mission Bay, Mission Valley, Morena Valley, National City,
            Pacific Beach, Poway, Rancho Bernardo, Rancho Penasquitos,
            Rancho Santa Fe, San Marcos, Santee, Scripps Ranch, Shelter
            Island, Solana Beach, Spring Valley, Tecolote Canyon, Tierra
            Santa, Vista
          </p>
        </Col>
      </Row>
    </Container>
  </StyledMapContent>
)
export default MapContent
