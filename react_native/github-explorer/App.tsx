import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import theme from '@global/styles/theme'
import useCachedResources from '@hooks/useCachedResources'
import useColorScheme from '@hooks/useColorScheme'
import Navigation from './src/navigation'
import { Provider } from 'react-redux'
import { store } from '@redux/store'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { api } from '@redux/repositoriesApi'

// import { StorybookUIRoot } from './storybook'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  }
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ApiProvider api={api}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            {/* <StorybookUIRoot /> */}
            <StatusBar style={colorScheme} />
          </SafeAreaProvider>
        </ApiProvider>
      </Provider>
    </ThemeProvider>
  )
}
