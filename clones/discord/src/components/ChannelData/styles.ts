import styled from 'styled-components'
import { AlternateEmail } from '@styled-icons/material'

export const Container = styled.div`
  grid-area: CHANNEL_DATA;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: var(--primary);
`

export const MessagesContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`

export const InputContainer = styled.div`
  width: 100%;
  padding: 16px;
  padding: 0 16px;
  background: var(--primary);
`

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 10px 0 57px;

  border-radius: 8px;
  background: var(--chat-input);

  color: var(--white);
  position: relative;

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -50%;
    left: 14px;
  }
`

export const InputIcon = styled(AlternateEmail)`
  width: 24px;
  height: 24px;
  color: var(--gray);
`
