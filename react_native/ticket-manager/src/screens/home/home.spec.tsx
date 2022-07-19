import { waitFor } from '@testing-library/react-native'
import React from 'react'
import { renderWithTheme } from '../../utils/test-helper'
import { Home } from './home.component'

describe('<home />', () => {
  const testId = 'component-home-id'

  it('should render the home component', async () => {
    const { queryByTestId, toJSON } = renderWithTheme(<Home testId={testId} />)
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(toJSON()).toMatchSnapshot()
  })
})
