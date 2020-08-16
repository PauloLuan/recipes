import styled, { css } from 'styled-components'
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri'
import { AiOutlineFork } from 'react-icons/ai'

export const Container = styled.div`
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
`

export const RepoName = styled.a`
  color: var(--link);
  margin-left: 8px;
  font-weight: 600;
  font-size: 14px;

  &:focus,
  &:hover {
    text-decoration: underline;
  }
`

export const TopSide = styled.div``

export const BottonSide = styled.div``

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
