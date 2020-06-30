import React from 'react'
import {
  Container,
  Avatar,
  MessageContainer,
  Author,
  Content,
  CreationDate
} from './styles'

interface MessageProps {
  content: string
  author: string
  date: Date
}

const Message: React.FC<MessageProps> = ({ author, content, date }) => {
  return (
    <Container>
      <Avatar></Avatar>
      <MessageContainer>
        <Author>{author}</Author>
        <Content>{content}</Content>
        <CreationDate>{date && date.toString()}</CreationDate>
      </MessageContainer>
    </Container>
  )
}

export default Message
