import styled from 'styled-components'

export const Container = styled.div`
  grid-area: SERVER_LIST;
  max-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);
  padding: 11px 0;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const ServerButton = styled.button``

export const Separator = styled.div`
  width: 32px;
  /* background: var(--quartenary); */
  background: white;

  border-bottom: 8px;
`
