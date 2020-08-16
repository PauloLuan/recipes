import React from 'react'
import {
  Container,
  Header,
  RepoName,
  TopSide,
  BottomSide,
  LanguageIcon,
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

const buildHeader = (name: string, description: string) => (
  <TopSide>
    <Header>
      <BookIcon />
      <RepoName>{name}</RepoName>
    </Header>
    <p>{description}</p>
  </TopSide>
)

const buildBottom = (type: string, stars: number, forks: number) => {
  const language = type || 'other'

  return (
    <BottomSide>
      <ul>
        <li>
          <LanguageIcon className={language} />
          <span>{type}</span>
        </li>
        <li>
          <StarIcon />
          <span>{stars}</span>
        </li>
        <li>
          <ForkIcon /> <span>{forks}</span>
        </li>
      </ul>
    </BottomSide>
  )
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
      {buildHeader(name, description)}
      {buildBottom(type, stars, forks)}
    </Container>
  )
}
