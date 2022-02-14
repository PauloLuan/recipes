import * as S from './ListItem.styles'
import React from 'react'

export interface ListItemProps {
  testId?: string
  text: string
}

export const ListItem = ({
  testId = 'list-item-id',
  text,
  ...props
}: ListItemProps) => {
  return (
    <S.Container data-testid={testId} {...props}>
      {text}
    </S.Container>
  )
}
