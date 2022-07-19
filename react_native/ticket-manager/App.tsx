import * as React from 'react'
import { NativeBaseProvider } from 'native-base'
import { StorybookUIRoot } from './storybook'
import { theme } from '@global/styles/theme'

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StorybookUIRoot />
    </NativeBaseProvider>
  )
}
