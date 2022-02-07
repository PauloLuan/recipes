import { waitFor } from '@testing-library/react-native'
import React from 'react'
import { renderWithTheme } from '../../utils/test-helper'
import { Header } from './Header.component'

describe('<Header />', () => {
  const testId = 'component-header-id'

  it('should render the Header component', async () => {
    const { queryByTestId, toJSON } = renderWithTheme(
      <Header testId={testId} />
    )
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(toJSON()).toMatchSnapshot()
  })
})
