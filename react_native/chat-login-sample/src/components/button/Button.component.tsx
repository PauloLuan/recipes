import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import * as S from './Button.styles'

type ButtonProps = TouchableOpacityProps & {
  testId?: string
  icon?: React.ComponentProps<typeof AntDesign>['name']
  isDisabled?: boolean
}

export const Button = ({
  testId = 'component-button-id',
  icon = 'github',
  isDisabled
}: ButtonProps) => {
  return (
    <S.Button testID={testId}>
      {isDisabled ? (
        <ActivityIndicator />
      ) : (
        <>
          <AntDesign name={icon} size={32} />
          <S.Text>Login </S.Text>
        </>
      )}
    </S.Button>
  )
}
