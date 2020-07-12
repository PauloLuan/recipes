import React from 'react'

import {
  Container,
  HashtagIcon,
  Title,
  PipeSeparator,
  Description
} from './styles'

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      <Title>chat-livre</Title>

      <PipeSeparator />

      <Description>Canal aberto para conversas</Description>
    </Container>
  )
}

export default ChannelInfo
