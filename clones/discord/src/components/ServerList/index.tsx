import React from 'react'
import { Container, Separator } from './styles'
import ServerButton from '../ServerButton'

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome mentions={2} />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={5} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={86} />
    </Container>
  )
}

export default ServerList
