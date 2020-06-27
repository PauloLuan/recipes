import styled from 'styled-components'
import { ExpandMore } from '@styled-icons/material/ExpandMore'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 11px 0 16px;

  background-color: var(--secondary);
`

export const Title = styled.div`
  color: var(--white);
`

export const ExpandIcon = styled(ExpandMore)`
  width: 28px;
  height: 28px;
  color: var(--white);
  cursor: pointer;
`
