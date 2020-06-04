import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Image from './image'

const StyledNewsCard = styled.section`
  
  & h1 {
    font-family: "Asap";
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;

    @media (max-width: 768px) {
      font-size: 35px;
    }
  }

  & h2 {
    font-family: "Asap";
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 700;
    font-size: 20px;
    line-height: 35px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  & p {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`
const NewsCard = ({
  title, date, description, image,
}) => (
  <StyledNewsCard>
    <Image imgName={image} />
    <h1 className="mt-3">
      {title}
    </h1>
    <h2>
      {date}
    </h2>
    <p>
      {description}
    </p>
  </StyledNewsCard>
)

NewsCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default NewsCard
