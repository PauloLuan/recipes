import { render, RenderAPI } from '@testing-library/react-native'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import theme from '../global/styles/theme'

export const renderWithTheme = (children: React.ReactNode): RenderAPI =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

export const mockNavigation = () => {
  const mockedNavigate = jest.fn()

  jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native')
    return {
      ...actualNav,
      useNavigation: () => ({
        navigate: mockedNavigate
      })
    }
  })

  return { mockedNavigate }
}
