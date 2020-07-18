import React from 'react'
import { Container } from './Card.styles'

export interface CardProps {
  icon: string
  borderColor: string
}

export const Card: React.FC<CardProps> = ({ children, icon, borderColor }) => {
  return (
    <Container borderColor={borderColor}>
      {children}
      <img src={icon} alt='' />
    </Container>
  )
}
