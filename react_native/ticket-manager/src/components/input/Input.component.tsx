import React from 'react'
import { IInputProps, Input as NativeBaseInput } from 'native-base'

export interface InputProps extends IInputProps {
  testId?: string
}

export const Input = ({
  testId = 'component-input-id',
  ...props
}: InputProps) => {
  return (
    <NativeBaseInput
      testID={testId}
      bg="gray.700"
      placeholderTextColor="gray.300"
      size="md"
      fontSize="md"
      h="12"
      my="2"
      color={'white'}
      {...props}
    ></NativeBaseInput>
  )
}
