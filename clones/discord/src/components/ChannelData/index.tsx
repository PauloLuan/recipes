import React from 'react'
import Message from './Message'
import {
  Container,
  MessagesContainer,
  InputContainer,
  Input,
  InputIcon
} from './styles'

const ChannelData: React.FC = () => {
  return (
    <Container>
      <MessagesContainer>
        <Message
          author='Tim Habey'
          content='Fala Parsas meu cachorro pediu o link daquela treta que os anão saem no soco alguém tem?'
          date={new Date()}
        ></Message>

        <Message
          author='H. Romeu Pinto'
          content='Qual? Aquela que o anão cai do barranco?'
          date={new Date()}
        ></Message>

        <Message
          author='Tommy Leite'
          content='Se pá é aquela q o anão entra com o gancho de esquerda e o outro sai rolando'
          date={new Date()}
        ></Message>

        <Message
          author='Tim Habey'
          content='Isssso essa mesmo!'
          date={new Date()}
        ></Message>

        <Message
          author='Tommy Leite'
          content='não tenho mas acho que o @Décio Pinto tem'
          date={new Date()}
        ></Message>
      </MessagesContainer>

      <InputContainer>
        <Input type='text' placeholder='Chama na treta'></Input>
        <InputIcon />
      </InputContainer>
    </Container>
  )
}

export default ChannelData
