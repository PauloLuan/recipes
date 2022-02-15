import React, { useState } from 'react'
import * as S from './button-vs-div.styles'

export interface ButtonProps {
  testId?: string
}

export const Button = ({ testId = 'button-id', ...props }: ButtonProps) => {
  const [isHidden, setIsHidden] = useState(false)

  const handleRealButtonClick = () => {
    setIsHidden(!isHidden)
  }

  return (
    <>
      <p hidden={isHidden} aria-hidden={isHidden}>
        I am a real label
      </p>

      <S.Button
        tabIndex={0}
        onClick={handleRealButtonClick}
        data-testid={testId}
        {...props}
      >
        This is a real button
      </S.Button>

      <S.DivButton tabIndex={1} data-testid={'button-div-id'} {...props}>
        This is a Div button
      </S.DivButton>
    </>
  )
}
