import styled from 'styled-components'
import { Mic, Headset, Settings } from '@styled-icons/material'

export const Container = styled.div`
  grid-area: USER_INFO;
  background: var(--quaternary);
`

export const Profile = styled.div``

export const Avatar = styled.div``

export const UserData = styled.div``
export const Icons = styled.div``

export const MicrophoneIcon = styled(Mic)`
  color: var(--gray);
  width: 16px;
  height: 16px;
`

export const HeadphoneIcon = styled(Headset)`
  color: var(--gray);
  width: 16px;
  height: 16px;
`

export const SettingsIcon = styled(Settings)`
  color: var(--gray);
  width: 16px;
  height: 16px;
`
