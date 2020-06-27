import styled from 'styled-components'
import { ExpandMore } from '@styled-icons/material/ExpandMore'

export const Container = styled.div`
  display: flex;
  background: black;
`

export const Title = styled.div`
  color: var(--white);
`

export const ExpandIcon = styled(ExpandMore)`
  width: 28px;
  height: 28px;
  color: var(--white);
`
