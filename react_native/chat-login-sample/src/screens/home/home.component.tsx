import React from 'react'
import * as S from './home.styles'

export interface HomeProps {
  testId?: string
}

export const Home = ({ testId = 'component-home-id', ...props }: HomeProps) => {
  return (
    <>
      <S.Wrapper testID={testId} {...props}>
        <S.Header>
          <S.Headline>React Native Chat</S.Headline>

          <S.ExitWrapper>
            <S.Exit>Sair</S.Exit>
          </S.ExitWrapper>
        </S.Header>
      </S.Wrapper>
    </>
  )
}
