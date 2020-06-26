import styled from 'styled-components'
import { Props } from '.'

export const StyledServerButton = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  margin-bottom: 8px;
  background-color: ${props =>
    props.isHome ? 'var(--reativa)' : 'var(--primary)'};

  position: relative;
  cursor: pointer;

  border-radius: 12px;

  transition: border-radius 0.2s, background-color 0.2s;

  &.action,
  &:hover {
    border-radius: 50%;
    background-color: var(--discord);
  }
`

export const FightIcon = styled.img`
  width: 32px;
  height: 32px;
`
