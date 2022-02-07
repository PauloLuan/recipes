import React from 'react'
import * as S from './SignInBox.styles'

export interface SignInBoxProps {
  testId?: string
}

export const SignInBox = ({
  testId = 'component-sign-in-box-id',
  ...props
}: SignInBoxProps) => {
  return <S.Wrapper testID={testId} {...props}></S.Wrapper>
}
