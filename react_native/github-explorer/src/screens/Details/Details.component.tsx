import { RootStackParamList } from '@navigation/RootStackParams'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { Button } from 'react-native'
import * as S from './Details.styles'

type detailsScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>

export interface DetailsProps {
  testId?: string
}

export const Details = ({
  testId = 'component-details-id',
  ...props
}: DetailsProps) => {
  const navigation = useNavigation<detailsScreenProp>()

  return (
    <S.Wrapper testID={testId} {...props}>
      <S.Text>Details Screen</S.Text>
      <Button
        title="go back"
        onPress={() => {
          navigation.goBack()
        }}
      />
    </S.Wrapper>
  )
}
