import styled from 'styled-components'
import { Mic, Headset, Settings } from '@styled-icons/material'

export const Container = styled.div`
  grid-area: USER_INFO;
  background: var(--quaternary);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background: var(--gray);
  border-radius: 50%;
`

export const UserData = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;

  > strong {
    color: var(--white);
    font-size: 13px;
    line-height: 15px;
  }

  > span {
    color: var(--gray);
    font-size: 13px;
    line-height: 15px;
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;

  svg + svg {
    margin-left: 7px;
  }
`

export const MicrophoneIcon = styled(Mic)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`

export const HeadphoneIcon = styled(Headset)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`

export const SettingsIcon = styled(Settings)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`
