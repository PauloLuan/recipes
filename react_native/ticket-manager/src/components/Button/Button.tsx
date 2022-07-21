import React from 'react'
import { IButtonProps, Button as NativeBaseButton } from 'native-base'

export interface ButtonProps extends IButtonProps {
  testId?: string
}

export const Button = ({
  testId = 'button-id',
  ...props
}: ButtonProps) => {
  return (
    <NativeBaseButton testID={testId} {...props}></NativeBaseButton>
  )
}
