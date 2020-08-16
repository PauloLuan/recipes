import React from 'react'
import { Container } from './repocard.styles'

interface Props {
  name: string
  description: string
  type: string
  stars: number
  forks: number
}

export const Repocard: React.FC<Props> = ({
  name,
  description,
  type,
  stars,
  forks
}) => {
  return (
    <Container>
      {name}
      {description}
      {type}
      {stars}
      {forks}
    </Container>
  )
}
