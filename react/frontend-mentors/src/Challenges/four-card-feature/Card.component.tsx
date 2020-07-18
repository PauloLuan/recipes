import React from 'react'
import { Container } from './Card.styles'

interface CardProps {
  icon: string
  borderColor: string
}

export const Card: React.FC<CardProps> = ({ children, icon, borderColor }) => {
  return (
    <Container>
      {children}
      <img src={icon} alt='' />
    </Container>
  )
}
