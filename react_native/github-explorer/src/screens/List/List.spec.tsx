import { waitFor } from '@testing-library/react-native'
import React from 'react'
import { renderWithTheme } from '../../utils/test-helper'
import { List } from './List.component'

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

describe('<List />', () => {
  const testId = 'component-list-id'

  it('should render the List component', async () => {
    const { queryByTestId } = renderWithTheme(<List testId={testId} />)
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(mockedNavigate).toHaveBeenCalledTimes(0)
  })
})
