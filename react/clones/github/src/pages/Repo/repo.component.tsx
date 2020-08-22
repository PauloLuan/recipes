import React from 'react'
import { Container, Breadcrumb, RepoIcon } from './repo.styles'
import { Link } from 'react-router-dom'

export const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link to={'/'}>username</Link>
        <span>/</span>
        <Link to={'/'}>reponame</Link>
      </Breadcrumb>
    </Container>
  )
}
