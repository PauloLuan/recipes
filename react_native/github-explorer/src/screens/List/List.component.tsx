import { RootStackParamList } from '@navigation/RootStackParams'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { Button } from 'react-native'
import * as S from './List.styles'

type listScreenProp = NativeStackNavigationProp<RootStackParamList, 'List'>

export interface ListProps {
  testId?: string
}

export const List = ({ testId = 'component-list-id', ...props }: ListProps) => {
  const navigation = useNavigation<listScreenProp>()

  return (
    <S.Wrapper testID={testId} {...props}>
      <S.Text>List Screen</S.Text>
      <Button
        title="go back"
        onPress={() => {
          navigation.goBack()
        }}
      />
    </S.Wrapper>
  )
}
