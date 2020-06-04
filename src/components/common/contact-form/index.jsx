import React from 'react'
import styled from 'styled-components'

import Form from './form'

const FormContainer = styled.div`
    & {
      height: 550px; 
      background-color: #fff;
      box-shadow: 0 7px 24px 0 rgba(0,0,0,.12);
      border-radius: 8px 8px 8px 8px;
    }

    & h2{
      font-family: 'Asap';
      color: ${({ theme }) => theme.colors.primary} !important;
      font-weight: bold;
      font-size: 36px;
      text-align: left !important;

      @media (max-width: 768px) {
        font-size: 30px;
      }
    }
`

const ContactForm = () => (
  <FormContainer className="p-4">
    <h2 className="mb-md-4">Make an Appointment</h2>
    <Form />
  </FormContainer>
)

export default ContactForm
