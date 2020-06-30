import React from 'react'
import Message, { Mention } from './Message'
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
          date={'01/01/2020'}
        ></Message>

        <Message
          author='H. Romeu Pinto'
          content='Detectei a tag ANÃO: video recomendado "não caíndo no barranco"'
          date={'01/01/2020'}
          isBot
        ></Message>

        <Message
          author='Tommy Leite'
          content='Se pá é aquela q o anão entra com o gancho de esquerda e o outro sai rolando'
          date={'01/01/2020'}
        ></Message>

        <Message
          author='Tim Habey'
          content='Isssso essa mesmo!'
          date={'01/01/2020'}
        ></Message>

        <Message
          author='Tommy Leite'
          content={
            <>
              não tenho mas acho que o <Mention>@Décio Pinto</Mention> tem
            </>
          }
          date={'01/01/2020'}
          hasMention
        ></Message>
      </MessagesContainer>

      <InputContainer>
        <Input type='text' placeholder='Chama na treta' />
        <InputIcon />
      </InputContainer>
    </Container>
  )
}

export default ChannelData
