import React from 'react'
import Message from './Message'
import { Container, MessagesContainer, InputContainer, Input } from './styles'

const ChannelData: React.FC = () => {
  return (
    <Container>
      <MessagesContainer>
        <Message
          author='Paulo Luan'
          content='Fala Parsas meu cachorro pediu o link'
          date={new Date()}
        ></Message>
      </MessagesContainer>

      <InputContainer>
        <Input type='text'></Input>
      </InputContainer>
    </Container>
  )
}

export default ChannelData
