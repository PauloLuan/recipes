import styled from 'styled-components'

export const Container = styled.div`
  grid-area: USER_LIST;
  display: flex;
  flex-direction: column;
  padding: 3px 0px 6px 16px;

  background: var(--primary);
`

export const UserProfile = styled.div`
  > strong {
    color: var(--white);
    font-size: 16px;
    line-height: 19px;
    opacity: 0.7;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  > span {
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

export const Avatar = styled.div``

export const Status = styled.div``
