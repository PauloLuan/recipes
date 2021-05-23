import React from 'react'

import styled from 'styled-components'

/* eslint-disable-next-line */
export interface SharedComponentsProps {}

const StyledSharedComponents = styled.div`
  color: pink;
`

export function SharedComponents(props: SharedComponentsProps) {
  return (
    <StyledSharedComponents>
      <h1>Welcome to shared-components!</h1>
    </StyledSharedComponents>
  )
}

export default SharedComponents
