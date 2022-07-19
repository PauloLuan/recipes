import { waitFor } from '@testing-library/react-native'
import React from 'react'
import { renderWithTheme } from '../../utils/test-helper'
import { Details } from './Details.component'

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

describe('<Details />', () => {
  const testId = 'component-details-id'

  it('should render the Details component', async () => {
    const { queryByTestId } = renderWithTheme(<Details testId={testId} />)
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(mockedNavigate).toHaveBeenCalledTimes(0)
  })
})
