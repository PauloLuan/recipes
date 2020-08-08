import React from 'react'
import { Container, SearchBar, GithubIcon } from './header.styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <GithubIcon />
      <SearchBar />
    </Container>
  )
}
