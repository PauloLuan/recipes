import React from 'react'
import * as S from './home.styles'

export interface homeProps {
  testId?: string
}

export const Home = ({ testId = 'component-home-id', ...props }: homeProps) => {
  return (
    <S.Wrapper testID={testId} {...props}>
      <S.Heading>teste</S.Heading>
    </S.Wrapper>
  )
}
