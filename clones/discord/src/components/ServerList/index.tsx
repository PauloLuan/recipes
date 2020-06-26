import React from 'react'

import { Container, ServerButton, Separator } from './styles'

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton />

      <Separator />

      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  )
}

export default ServerList
