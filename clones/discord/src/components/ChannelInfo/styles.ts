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
  color: var(--gray);
`

export const Title = styled.div`
  color: white;
`

export const PipeSeparator = styled.div``

export const Description = styled.div`
  color: var(--gray);
`
