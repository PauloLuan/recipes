import React from 'react'
import { Container } from './profileData.styles'

interface Props {
  userName: string
  displayName: string
  followers: number
  following: number
  company: string
  location: string
}

export const ProfileData: React.FC<Props> = ({
  userName,
  displayName,
  followers,
  following,
  company,
  location
}) => {
  return (
    <Container>
      {userName} {displayName} {followers} {following} {company} {location}
    </Container>
  )
}
