import { render, RenderAPI } from '@testing-library/react-native'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { theme } from '../global/styles/theme'

export const renderWithTheme = (children: React.ReactNode): RenderAPI =>
  render(<NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>)
