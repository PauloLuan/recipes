import React from 'react'
import * as S from './Header.styles'

export interface HeaderProps {
  testId?: string
}

export const Header = ({
  testId = 'component-header-id',
  ...props
}: HeaderProps) => {
  return (
    <>
      <S.Wrapper testID={testId} {...props}></S.Wrapper>
    </>
  )
}
