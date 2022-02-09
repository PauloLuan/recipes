import React from 'react'
import * as S from './acessibility.styles'

export interface AcessibilityProps {
  testId?: string
}

export const Acessibility = ({
  testId = 'acessibility-component-id',
  ...props
}: AcessibilityProps) => {
  return (
    <>
      <S.Acessibility data-testid={testId} {...props}>
        asdfafd
      </S.Acessibility>
    </>
  )
}
