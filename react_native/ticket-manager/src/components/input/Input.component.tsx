import { IInputProps, Input as NativeBaseInput } from 'native-base'

import React from 'react'

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
      _focus={{
        borderWidth: 1,
        borderColor: 'green.500',
        bg: 'gray.700'
      }}
      {...props}
    ></NativeBaseInput>
  )
}
