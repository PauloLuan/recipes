import React from 'react'
import {
  Author,
  Avatar,
  Container,
  Content,
  Header,
  MessageContainer
} from './styles'

export { Mention } from './styles'

interface MessageProps {
  content: string | React.ReactElement | React.ReactNode
  author: string
  date: string
  isBot?: boolean
}

const Message: React.FC<MessageProps> = ({ author, content, date, isBot }) => {
  return (
    <Container>
      <Avatar className={isBot ? 'bot' : ''}></Avatar>
      <MessageContainer>
        <Header>
          <Author>{author}</Author>
          <time>{date}</time>
          {isBot && <span>bot</span>}
        </Header>
        <Content>{content}</Content>
      </MessageContainer>
    </Container>
  )
}

export default Message
