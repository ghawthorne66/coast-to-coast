import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Image from './image'

const StyledCardLayout = styled.section`

  & h2 {
    font-family: "Asap";
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bolder;
    font-size: 35px;
    line-height: 35px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  & p {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-top: 20px;
  }

  & ul {
  }

  & li {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    padding-top: 5px;
  }
`
const CardLayout = ({ children, title, image }) => (
  <Container>
    <StyledCardLayout>
      <Row className="mt-5">
        <Col lg="6">
          <h2 className="text-center">
            {title}
          </h2>
          {children}
        </Col>
        <Col lg="6">
          <Image isShadow imgName={image} />
        </Col>
      </Row>
    </StyledCardLayout>
  </Container>
)

CardLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default CardLayout

