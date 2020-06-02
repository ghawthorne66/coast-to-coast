import React from 'react'
import {
  Container, Row, Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledPageHeader = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  align-items: center;
  display: flex;

  & h2{
    font-family: 'Asap';
    color: ${({ theme }) => theme.colors.light};
    font-weight: bold;
    text-align: left;
    font-size: 48px;
    
    @media(max-width:768px){
      font-size: 30px;
    }
  }
`
const PageHeader = ({ title }) => (
  <StyledPageHeader className="p-3 p-md-5">
    <Container>
      <Row>
        <Col>
          <h2>{title}</h2>
        </Col>
      </Row>
    </Container>
  </StyledPageHeader>
)

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageHeader
