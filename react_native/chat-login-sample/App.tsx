import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import theme from '@global/styles/theme'
import useCachedResources from '@hooks/useCachedResources'
import useColorScheme from '@hooks/useColorScheme'
// import Navigation from './navigation'
import { StorybookUIRoot } from './storybook'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  }
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        {/* <Navigation colorScheme={colorScheme} /> */}
        <StorybookUIRoot />
        <StatusBar style={colorScheme} />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
