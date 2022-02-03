import { UserPhoto } from '@components/user-photo/UserPhoto.component'
import React from 'react'
import * as S from './Message.styles'

export interface MessageProps {
  testId?: string
}

export const Message = ({
  testId = 'component-Message-id',
  ...props
}: MessageProps) => {
  return (
    <S.Wrapper testID={testId} {...props}>
      <UserPhoto />
      <S.ContentContainer>
        <S.Title>Paulo Luan</S.Title>
        <S.MessageContainer>
          <S.Message numberOfLines={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </S.Message>
        </S.MessageContainer>
      </S.ContentContainer>
    </S.Wrapper>
  )
}
