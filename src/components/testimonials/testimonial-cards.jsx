import React from 'react'
import {
  Container, Row, Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledCard = styled.section`
  padding: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  & p{
    font-size: 18px;
    line-height: 27px;
    font-weight: 500;

    @media(max-width:768px){
      font-size: 16px;
    }
  }
  & h4{
    font-size: 20px;
    line-height: 27px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray};
    font-style: italic;

    @media(max-width:768px){
      font-size: 18px;
    }
  }
`
const TestimonialCards = ({ review, name }) => (
  <Container className="mt-5">
    <Row>
      <Col xs="12">
        <StyledCard className="p-4">
          <p>
            {review}
          </p>
          <h4 className="text-right">
            {name}
          </h4>
        </StyledCard>
      </Col>

    </Row>
  </Container>
)

TestimonialCards.propTypes = {
  review: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default TestimonialCards
