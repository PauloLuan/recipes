import React from 'react'
import * as S from './Button.styles'

export interface ButtonProps {
  testId?: string
}

export const Button = ({
  testId = 'component-button-id',
  ...props
}: ButtonProps) => {
  return <S.Wrapper testID={testId} {...props}></S.Wrapper>
}
