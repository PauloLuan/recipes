import React from 'react'
import { Container } from './base.styles'

export interface Props {}

export const Base: React.FC<Props> = ({}) => {
  return (
    <Container>
      <h1>Serjão Berranteiro</h1>
      <p>matador de onça</p>
    </Container>
  )
}
