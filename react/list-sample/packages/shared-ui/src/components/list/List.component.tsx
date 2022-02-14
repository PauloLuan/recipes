import React from 'react'
import * as S from './List.styles'
import { ListItem } from '..'

type Data = [{ text: string }]

export interface ListProps {
  testId?: string
  data: Data
}

export const List = ({ data, testId = 'list-id', ...props }: ListProps) => {
  return (
    <>
      <S.Container data-testid={testId} {...props}>
        {data.map(({ text }) => (
          <ListItem key={text} text={text} />
        ))}
      </S.Container>
    </>
  )
}
