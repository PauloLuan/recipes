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
          content='Detectei a tag ANÃO: video recomendado "anão caíndo no barranco"'
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
        ></Message>

        <Message
          author='Tim Habey'
          content={
            <>
              rapaz se eu tomo um{' '}
              <Mention href='https://bit.ly/2VvO4cM' target='_blank'>
                tapão desse aqui
              </Mention>{' '}
              acho que eu não levantava nunca mais sem zoa
            </>
          }
          date={'01/01/2020'}
        ></Message>

        <Message
          author='Paula Tejano'
          content='Ain gente vocês só ficam vendo essas bobeira de briga na internet credo, vocês deveriam fazer alguma coisa mais útil slc'
          date={'01/01/2020'}
        ></Message>

        <Message
          author='Jacinto P.'
          content={
            <>
              E o que você tá fazendo aqui então? vai você fazer alguma coisa de
              útil <Mention>@Paula Tejano</Mention>
            </>
          }
          date={'01/01/2020'}
        ></Message>

        <Message
          author='Décio Pinto'
          content={
            <>
              Alô <Mention>@H. Romeu Pinto</Mention> bane a{' '}
              <Mention>@Paula Tejano</Mention> por favor, aqui é o grupo da
              DISCÓRDIA.
            </>
          }
          date={'01/01/2020'}
        ></Message>

        <Message
          author='H. Romeu Pinto'
          content={
            <>
              Usuária <Mention>@Paula Tejano</Mention> foi banida do canal.
            </>
          }
          date={'01/01/2020'}
          isBot
        ></Message>

        <Message
          author='Décio Pinto'
          content={
            <>
              <Mention>@all</Mention> alguém tem o episodio do casos de família
              que a mulher sai do palco na cadera? KKKKKKK esse dia foi loco
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
