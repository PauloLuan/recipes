import React from 'react'

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicrophoneIcon,
  HeadphoneIcon,
  SettingsIcon
} from './styles'

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar></Avatar>
        <UserData>
          <strong>Brabo da Leopoldo</strong>
          <span>#12345</span>
        </UserData>
      </Profile>
      <Icons>
        <MicrophoneIcon></MicrophoneIcon>
        <HeadphoneIcon></HeadphoneIcon>
        <SettingsIcon></SettingsIcon>
      </Icons>
    </Container>
  )
}

export default UserInfo
