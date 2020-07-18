import React from 'react'

interface CardProps {
  icon: string
  borderColor: string
}

export const Card: React.FC<CardProps> = ({ children, icon, borderColor }) => {
  return (
    <>
      {children}
      <img src={icon} alt='' />
    </>
  )
}
