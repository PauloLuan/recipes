import styled, { css } from 'styled-components'
import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine
} from 'react-icons/ri'

export const Container = styled.div``

export const Flex = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 24px;

    > h1 {
      font-size: 26px;
      line-height: 1.25;
      color: var(--gray-dark);
      font-weight: 600;
    }

    > h2 {
      font-size: 20px;
      color: var(--username);
      font-weight: 300;
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    > div {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`

export const Avatar = styled.img`
  border-radius: 50%;
`

export const Row = styled.div``

export const Column = styled.div``

export const EditButton = styled.button``

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
