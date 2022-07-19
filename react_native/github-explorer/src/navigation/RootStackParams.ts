import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>

export type RootStackParamList = {
  Home: undefined
  List: undefined
  Details: undefined
}
