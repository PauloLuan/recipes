import React from 'react'
import {
  Author,
  Avatar,
  Container,
  Content,
  Header,
  MessageContainer
} from './styles'

interface MessageProps {
  content: string
  author: string
  date: string
  isBot?: boolean
}

const Message: React.FC<MessageProps> = ({ author, content, date, isBot }) => {
  return (
    <Container>
      <Avatar></Avatar>
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
