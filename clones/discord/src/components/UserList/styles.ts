import styled from 'styled-components'

export const Container = styled.div`
  grid-area: USER_LIST;
  display: flex;
  flex-direction: column;
  padding: 3px 0px 6px 16px;

  background: var(--secondary);

  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`

export const Status = styled.div`
  margin-top: 20px;
  color: var(--gray);
  font-weight: 500;
  font-size: 12px;
`

export const UserProfile = styled.div`
  display: flex;
  align-items: center;

  margin-top: 5px;
  padding: 5px;

  background: transparent;
  transition: background 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  > strong {
    margin-left: 13px;
    color: var(--white);
    font-size: 16px;
    font-weight: 500;
    opacity: 0.7;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    margin-left: 9px;
    background: var(--discord);
    color: var(--white);
    font-weight: bold;
    font-size: 9px;
    line-height: 11px;
    text-align: center;
    text-transform: uppercase;
    padding: 4px;
    border-radius: 4px;
  }
`

export const Avatar = styled.div`
  background: var(--primary);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  flex-shrink: 0;

  &.bot {
    border: 2px solid var(--mention-detail);
  }
`
