import styled from 'styled-components'

interface Props {
  background: string
  border: string
}

export const ButtonStyled = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  height: 50px;
  width: 200px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid black;

  background: ${props => (props.background ? props.background : 'transparent')};
  border-color: ${props => props.border};
`
