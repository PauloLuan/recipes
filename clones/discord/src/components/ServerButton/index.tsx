import React from 'react'

import { StyledServerButton } from './styles'

interface Props {
  selected?: boolean
  hasNotifications?: boolean
  isHome?: boolean
  mentions?: number
}

const ServerButton: React.FC<Props> = () => {
  return <StyledServerButton />
}

export default ServerButton
