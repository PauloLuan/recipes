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

  &.active,
  &:hover {
    border-radius: 50%;
    background-color: var(--discord);
  }

  &::before {
    position: absolute;
    width: 9px;
    height: 9px;
    background-color: var(--white);
    content: '';
    left: -17px;
    top: calc(50% - 4.5px);
    border-radius: 50%;
    display: ${props => (props.hasNotifications ? 'inline' : 'none')};
  }

  &::after {
    position: absolute;
    background-color: var(--notification);
    width: auto;
    height: 16px;
    padding: 0 4px;
    border-radius: 50%;
    bottom: -4px;
    right: -4px;
    content: '${props => props.mentions}';
    display: ${props => (props.mentions ? 'inline' : 'none')};

    border: 1px solid var(--quaternary);
    color: var(--white);
    text-align: right;
    font-size: 13px;
    font-weight: bold;
  }
`

export const FightIcon = styled.img`
  width: 32px;
  height: 32px;
`
