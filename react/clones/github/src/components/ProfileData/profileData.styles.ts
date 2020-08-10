import styled, { css } from 'styled-components'
import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine
} from 'react-icons/ri'

export const Container = styled.div``

export const Flex = styled.div``

export const Avatar = styled.div``

export const Row = styled.div``

export const Column = styled.div``

const baseIconCSS = css`
  fill: var(--icon);
  flex-shrink: 0;
  width: 16px;
  height: 16px;
`

export const PeopleIcon = styled(RiGroupLine)`
  ${baseIconCSS}
`

export const CompanyIcon = styled(RiBuilding4Line)`
  ${baseIconCSS}
`

export const LocationIcon = styled(RiMapPin2Line)`
  ${baseIconCSS}
`

export const EmailIcon = styled(RiMailLine)`
  ${baseIconCSS}
`

export const BlogIcon = styled(RiLinksLine)`
  ${baseIconCSS}
`
