import React from 'react'
import {
  Container, Row, Col,
} from 'react-bootstrap'
import styled from 'styled-components'

const StyledPageHeader = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  height: 250px;
  align-items: center;
  display: flex;
  

  & h2{
    font-family: 'Asap';
    color: ${({ theme }) => theme.colors.light};
    font-weight: bold;
    text-align: left;
    font-size: 48px;
  }
`

// eslint-disable-next-line react/prop-types
const PageHeader = ({ title }) => (
  <StyledPageHeader>
    <Container>
      <Row>
        <Col>
          <h2>{title}</h2>
        </Col>
      </Row>
    </Container>
  </StyledPageHeader>
)
export default PageHeader
