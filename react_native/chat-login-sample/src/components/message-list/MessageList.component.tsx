import { Message } from '@components/message/Message.component'
import React from 'react'
import * as S from './MessageList.styles'

export interface MessageListProps {
  testId?: string
}

export const MessageList = ({
  testId = 'component-message-list-id',
  ...props
}: MessageListProps) => {
  return (
    <S.Wrapper testID={testId} {...props}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </S.Wrapper>
  )
}
