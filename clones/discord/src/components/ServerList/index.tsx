import React from 'react'
import { Container, Separator } from './styles'
import ServerButton from '../ServerButton'

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton mentions={2} />

      <Separator />

      <ServerButton />
      <ServerButton selected />
      <ServerButton mentions={5} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={86} />
    </Container>
  )
}

export default ServerList
