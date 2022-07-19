import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import * as S from './button.styles'

export interface ButtonProps {
  testId?: string
}

export const Button = ({
  testId = 'component-button-id',
  ...props
}: ButtonProps) => {
  return (
    <S.LoginButtonContainer testID={testId} {...props}>
      <S.LogoContainer>
        <AntDesign name="github" size={32} color="black" />
      </S.LogoContainer>
      <S.TextContainer>
        <S.ButtonText>Let's explore github</S.ButtonText>
      </S.TextContainer>
    </S.LoginButtonContainer>
  )
}
