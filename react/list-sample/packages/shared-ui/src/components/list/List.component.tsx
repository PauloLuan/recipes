import React from 'react'
import * as S from './List.styles'

export interface ListProps {
  testId?: string
}

export const List = ({ testId = 'list-id', ...props }: ListProps) => {
  return (
    <>
      <S.Container data-testid={testId} {...props}>
        Body...
      </S.Container>
    </>
  )
}
