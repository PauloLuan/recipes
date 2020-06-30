import React from 'react'
// import { Container } from './styles'

interface MessageProps {
  content: string
  author: string
  date: Date
}

const Message: React.FC<MessageProps> = ({ author, content, date }) => {
  return (
    <>
      {author}
      {content}
      {date && date.toString()}
    </>
  )
}

export default Message
