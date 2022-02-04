import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import * as S from './Button.styles'

export interface ButtonProps {
  testId?: string
}

export const Button = ({ testId = 'component-button-id' }: ButtonProps) => {
  return (
    <S.Button testID={testId}>
      <AntDesign name="github" size={32} />
      <S.Text>Login </S.Text>
    </S.Button>
  )
}
