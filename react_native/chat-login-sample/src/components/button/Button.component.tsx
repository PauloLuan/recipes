import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import * as S from './Button.styles'

type ButtonProps = TouchableOpacityProps & {
  testId?: string
  icon?: React.ComponentProps<typeof AntDesign>['name']
}

export const Button = ({
  testId = 'component-button-id',
  icon = 'github'
}: ButtonProps) => {
  return (
    <S.Button testID={testId}>
      <AntDesign name={icon} size={32} />
      <S.Text>Login </S.Text>
    </S.Button>
  )
}
