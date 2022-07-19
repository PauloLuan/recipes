import { waitFor } from '@testing-library/react-native'
import React from 'react'
import { renderWithTheme } from '../../utils/test-helper'
import { Home } from './Home.component'

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

describe('<Home />', () => {
  const testId = 'component-home-id'

  it('should render the Home component', async () => {
    const { queryByTestId } = renderWithTheme(<Home testId={testId} />)
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(mockedNavigate).toHaveBeenCalledTimes(0)
  })
})
