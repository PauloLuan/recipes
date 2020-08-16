import styled, { css } from 'styled-components'

export const Container = styled.div`
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 16px;
`

export const baseIconCSS = css`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  fill: var(--icon)
`
