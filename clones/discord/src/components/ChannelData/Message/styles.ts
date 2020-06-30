import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`

export const Avatar = styled.div`
  background: var(--secondary);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  flex-shrink: 0;
`

export const MessageContainer = styled.div`
  margin: 0 15px;
`

export const Header = styled.div`
  > time {
    margin-left: 6px;
    color: var(--gray);
    font-size: 13px;
  }
`

export const Author = styled.strong`
  font-weight: 500;
  font-size: 16px;
  margin-left: 6px;
  color: var(--white);
`

export const Content = styled.div`
  font-size: 16px;
  margin-left: 6px;
  color: var(--white);
  text-align: left;
`

export const CreationDate = styled.div``
