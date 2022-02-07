import React from 'react'
import * as S from './home.styles'
import { Header } from '@components/header/Header.component'
import { MessageList } from '@components/message-list/MessageList.component'

export interface HomeProps {
  testId?: string
}

export const Home = ({ testId = 'component-home-id', ...props }: HomeProps) => {
  return (
    <>
      <S.Wrapper testID={testId} {...props}>
        <Header />
        <MessageList />
      </S.Wrapper>
    </>
  )
}
