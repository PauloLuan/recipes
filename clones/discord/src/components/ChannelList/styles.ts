import styled from 'styled-components'
import { Add, PersonAdd, Settings } from '@styled-icons/material'
import { Hashtag } from '@styled-icons/heroicons-outline/Hashtag'

export const Container = styled.div`
  grid-area: CHANNEL_LIST;
  background: var(--secondary);
`

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 8px;
  &:hover,
  &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }
  }
`

export const ChannelText = styled.div`
  color: var(--gray);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`

export const AddIcon = styled(Add)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
  cursor: pointer;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
`

export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
  cursor: pointer;
`

export const ChannelName = styled.span`
  margin-left: 9px;
  color: var(--gray);
  font-size: 15px;
  line-height: 18px;
`

export const IconsContainer = styled.div``

export const AddPersonIcon = styled(PersonAdd)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
  cursor: pointer;
`

export const SettingsIcon = styled(Settings)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
  cursor: pointer;
`
