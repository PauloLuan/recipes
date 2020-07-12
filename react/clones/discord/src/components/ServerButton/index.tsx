import React from 'react'

import { StyledServerButton, FightIcon } from './styles'

export interface Props {
  selected?: boolean
  hasNotifications?: boolean
  isHome?: boolean
  mentions?: number
}

const ServerButton: React.FC<Props> = ({
  selected,
  hasNotifications,
  isHome,
  mentions
}) => {
  return (
    <StyledServerButton
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome ? (
        <FightIcon
          src={'https://image.flaticon.com/icons/svg/921/921680.svg'}
        />
      ) : (
        ''
      )}
    </StyledServerButton>
  )
}

export default ServerButton
