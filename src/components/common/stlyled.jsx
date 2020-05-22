import styled from 'styled-components'

export const Cta = styled.button`
  background: ${({ theme }) => theme.colors.light} !important;
  border: 5px solid;
  border-radius: 50px;
  border-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px; 
  padding: 15px;
  font-weight: bold;
`

export default {
  Cta,
}
