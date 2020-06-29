import React from 'react'

import { Container, UserProfile, Avatar, Status } from './styles'

interface UserProps {
  userName: string
  isBot?: boolean
}

const UserRow: React.FC<UserProps> = ({ userName, isBot }) => {
  return (
    <UserProfile>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{userName}</strong>
      {isBot ? <span>bot</span> : ''}
    </UserProfile>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Status>Online: Available</Status>
      <UserRow userName={'Paulo Luan'} />

      <Status>Offline: 16</Status>
      <UserRow userName={'Fausto Silva'} />
      <UserRow userName={'Júlia Nascimento'} />
      <UserRow userName={'Paula Tejano'} />
      <UserRow userName={'Ava Gina'} />
      <UserRow userName={'H. Romeu Pinto'} isBot />
      <UserRow userName={'Kagaro Nomuro'} />
      <UserRow userName={'Mijaro Nakombi'} />
      <UserRow userName={'Seu Kumiama'} />
      <UserRow userName={'Serjão Berranteiro'} />
      <UserRow userName={'Paula Dentro'} />
      <UserRow userName={'Takaro Apiroka'} />
      <UserRow userName={'Tommy Leite'} />
      <UserRow userName={'Tim Habey'} />
      <UserRow userName={'Jacinto P.'} />
      <UserRow userName={'Décio Pinto'} />
      <UserRow userName={'Kadu Kando'} />
    </Container>
  )
}

export default UserList
