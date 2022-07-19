import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'
import { Details } from '../screens/details'

export default function Navigation({
  colorScheme
}: {
  colorScheme: ColorSchemeName
}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator()

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  )
}
