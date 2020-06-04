import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const StyledNewsCard = styled.section`

`
const H1 = styled.h1`
  font-family: "Asap";
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 35px;
  line-height: 48px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`
const P = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 768px) {
      font-size: 15px;
    }
`
const Sidebar = () => (
  <StyledNewsCard>

    <Col>
      <H1>
        Contact Coast 2 Coast
      </H1>
      <a className="text-decoration-none" href="mailto:info@coast2coastrefrigeration.com">
        <P>
          info@coast2coastrefrigeration.com
        </P>
      </a>
      <a className="text-decoration-none" href="tel:3213513869">
        <P>
          (919) 799-0276
        </P>
      </a>
      <H1>
        Recent Posts
      </H1>
    </Col>
  </StyledNewsCard>
)

export default Sidebar
