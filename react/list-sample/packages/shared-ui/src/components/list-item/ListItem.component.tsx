import * as S from './ListItem.styles'
import React from 'react'

export interface ListItemProps {
  testId?: string
}

export const ListItem = ({
  testId = 'list-item-id',
  ...props
}: ListItemProps) => {
  return (
    <S.Container data-testid={testId} {...props}>
      This is a sample
    </S.Container>
  )
}
