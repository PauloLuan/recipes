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
  hasMention?: boolean
}

const Message: React.FC<MessageProps> = ({
  author,
  content,
  date,
  isBot,
  hasMention
}) => {
  return (
    <Container className={hasMention ? 'mention' : ''}>
      <Avatar className={isBot ? 'bot' : ''}></Avatar>
      <MessageContainer>
        <Header>
          <Author>{author}</Author>
          {isBot && <span>bot</span>}
          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </MessageContainer>
    </Container>
  )
}

export default Message
