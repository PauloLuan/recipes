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
}

const Message: React.FC<MessageProps> = ({ author, content, date }) => {
  return (
    <Container>
      <Avatar></Avatar>
      <MessageContainer>
        <Header>
          <Author>{author}</Author>
          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </MessageContainer>
    </Container>
  )
}

export default Message
