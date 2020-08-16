import styled, { css } from 'styled-components'
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri'
import { AiOutlineFork } from 'react-icons/ai'

export const Container = styled.div`
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 16px;
`

export const baseIconCSS = css`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  fill: var(--icon);
`

export const BookIcon = styled(RiBookMarkLine)`
  ${baseIconCSS}
`
export const StarIcon = styled(RiStarLine)`
  ${baseIconCSS}
`
export const ForkIcon = styled(AiOutlineFork)`
  ${baseIconCSS}
`