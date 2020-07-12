import styled from 'styled-components'
import { Hashtag } from '@styled-icons/heroicons-outline/Hashtag'

export const Container = styled.div`
  display: flex;
  align-items: center;
  grid-area: CHANNEL_INFO;
  background: var(--primary);
`

export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
`

export const Title = styled.div`
  margin-left: 9px;
  font-weight: bold;
  font-size: 16px;
  color: white;
`

export const PipeSeparator = styled.div`
  height: 24px;
  width: 1px;
  opacity: 0.2;
  background-color: var(--white);
  margin: 0px 13px;
`

export const Description = styled.div`
  font-size: 15px;
  color: var(--gray);
`
