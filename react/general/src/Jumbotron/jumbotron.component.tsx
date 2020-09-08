import React from 'react'
import { Container } from './jumbotron.styles'

export interface Props {}

export const Jumbotron: React.FC<Props> = ({}) => {
  return (
    <Container>
      <h1>COFFEE WITH BRAZIL'S TASTE</h1>
      <p>Directly from the farms of Minas Gerais</p>
    </Container>
  )
}
