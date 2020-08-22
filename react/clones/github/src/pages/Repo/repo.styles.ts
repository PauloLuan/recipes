import styled, { css } from 'styled-components'
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri'
import { AiOutlineFork } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  > p {
    font-size: 16px;
  }
`

export const Breadcrumb = styled.div`
  margin-top: 16px;
  font-size: 18px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  
  > a {
    color: var(--link);
  }
`

export const iconCSS = css`
  height: 16px;
  width: 16px;
`

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`
