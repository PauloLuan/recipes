import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`

export const SearchBar = styled.div``

export const GithubIcon = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
