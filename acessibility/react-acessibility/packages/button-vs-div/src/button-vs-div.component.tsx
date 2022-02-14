import React from 'react'
import * as S from './button-vs-div.styles'

export interface ButtonProps {
  testId?: string
}

export const Button = ({ testId = 'button-id', ...props }: ButtonProps) => {
  return (
    <>
      <S.Button data-testid={testId} {...props}>
        This is a real button
      </S.Button>
    </>
  )
}

export const DivButton = ({
  testId = 'button-div-id',
  ...props
}: ButtonProps) => {
  return (
    <>
      <S.DivButton data-testid={testId} {...props}>
        This is a Div button
      </S.DivButton>
    </>
  )
}
