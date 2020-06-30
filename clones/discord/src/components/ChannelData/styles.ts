import styled from 'styled-components'

export const Container = styled.div`
  grid-area: CHANNEL_DATA;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: var(--primary);
`

export const MessagesContainer = styled.div``

export const InputContainer = styled.div`
  width: 100%;
  padding: 16px;
  background: var(--primary);
`

export const Input = styled.input`
  width: 100%;
  height: 44px;

  border-radius: 8px;
  background: var(--chat-input);
`
