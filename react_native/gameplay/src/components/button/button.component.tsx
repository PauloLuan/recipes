import React from 'react'
import * as S from './button.styles'

export interface ButtonProps {
  testId?: string
}

export const Button = ({
  testId = 'component-button-id',
  ...props
}: ButtonProps) => {
  return <S.Button title={'teste'} testID={testId} {...props}></S.Button>
}
