import React from 'react'
import styled from 'styled-components'

import Form from './form'

const FormContainer = styled.div`

    background-color: #fff;
    box-shadow: 0 7px 24px 0 rgba(0,0,0,.12);
    border-radius: 8px 8px 8px 8px;
`

const ContactForm = () => (
  <FormContainer className="p-4">
    <h3 className="my-h3-head mb-md-4">Get A Free Quote Today!</h3>
    <Form />
  </FormContainer>
)

export default ContactForm
