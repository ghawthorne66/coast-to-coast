import React from 'react'
import {
  Row, Col, Container, Button,
} from 'react-bootstrap'
import styled from 'styled-components'

const StyledPageHeader = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  height:200px;
  align-items: center;
  justify-content:center;
  display:flex;
  

  & h2{
    font-family: 'Asap';
    color: ${({ theme }) => theme.colors.light};
    font-weight: bold;
    text-align: left;
    font-size: 36px;
  }
`

const PageHeader = ({ title }) => (
  <StyledPageHeader>
    <Container>
      <h2>{title}</h2>
    </Container>
  </StyledPageHeader>
)
export default PageHeader
