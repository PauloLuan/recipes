import React from 'react'
import * as S from './Header.styles'
import { UserPhoto } from '@components/user-photo/UserPhoto.component'

export interface HeaderProps {
  testId?: string
}

export const Header = ({
  testId = 'component-header-id',
  ...props
}: HeaderProps) => {
  return (
    <>
      <S.Header testID={testId} {...props}>
        <S.Headline>React Native Chat</S.Headline>

        <UserPhoto size="NORMAL" />

        <S.ExitWrapper>
          <S.Exit>Sair</S.Exit>
        </S.ExitWrapper>
      </S.Header>
    </>
  )
}
