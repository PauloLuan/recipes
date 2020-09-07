import React from 'react'
import { ButtonStyled } from './header.styles'

export interface ButtonProps {
  /**
   * Cor do background
   */
  background: string
  /**
   * Cor da borda
   */
  border: string
  /**
  Modifica o conteúdo original do label dentro do botão
  */
  content: string
}

export const Button: React.FC<ButtonProps> = ({
  border = 'black',
  background = 'red',
  content = 'botão de mindingo'
}) => {
  return (
    <ButtonStyled background={background} border={border}>
      {content}
    </ButtonStyled>
  )
}
