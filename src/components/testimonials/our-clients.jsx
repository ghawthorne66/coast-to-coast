import React from 'react'
import {
  Container, Row, Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import Aldi from '../../images/aldi.png'
import Jambajuice from '../../images/jambajuice_web.png'
import Pieology from '../../images/Pieology.png'
import RedRobin from '../../images/redrobin_web.png'
import Tocaya from '../../images/Tocaya.png'
import Image from '../common/image'
import Jack from '../../images/jack.png'

const StyledOurClients = styled.section`
& h1{
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 35px;
  line-height: 35px;
  font-weight: 700;
}
`
const StyledImage = styled.img`
`
const OurClients = () => (
  <StyledOurClients className="p-0">
    <Container>
      <Row className="text-center">
        <Col xs="12">
          <h1>
            OUR CLIENTS
          </h1>
        </Col>
        <Col md="2">
          <Image src="aldi.png" />
        </Col>
        <Col md="2">
          <StyledImage src={Jambajuice} height={170} width={170} />
        </Col>
        <Col md="2">
          <StyledImage src={Pieology} height={170} width={170} />
        </Col>
        <Col md="2">
          <StyledImage src={RedRobin} height={170} width={170} />
        </Col>
        <Col md="2">
          <StyledImage src={Tocaya} height={170} width={170} />
        </Col>
        <Col md="12">
          <StyledImage src={Jack} height={170} width={170} />
        </Col>
      </Row>
    </Container>
  </StyledOurClients>
)
export default OurClients
