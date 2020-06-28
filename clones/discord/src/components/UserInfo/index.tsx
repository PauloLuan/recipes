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
      <Profile></Profile>
      <Avatar></Avatar>
      <UserData></UserData>
      <Icons></Icons>
      <MicrophoneIcon></MicrophoneIcon>
      <HeadphoneIcon></HeadphoneIcon>
      <SettingsIcon></SettingsIcon>
    </Container>
  )
}

export default UserInfo
