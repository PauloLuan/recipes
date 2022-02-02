import { render, RenderAPI } from '@testing-library/react-native'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import theme from '../global/styles/theme'

export const renderWithTheme = (children: React.ReactNode): RenderAPI =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
