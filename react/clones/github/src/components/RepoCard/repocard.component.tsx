import React from 'react'
import {
  Container,
  Header,
  RepoName,
  TopSide,
  BottonSide,
  BookIcon,
  StarIcon,
  ForkIcon
} from './repocard.styles'

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
      <Header>
        <BookIcon />
        <RepoName>{name}</RepoName>
      </Header>
      {description}
      {type}
      <StarIcon />
      {stars}
      <ForkIcon /> {forks}
    </Container>
  )
}
