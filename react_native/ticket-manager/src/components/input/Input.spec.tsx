import { waitFor } from '@testing-library/react-native'
import React from 'react'
import { Input } from '.'
import { renderWithTheme } from '../../utils/test-helper'

describe('<Input />', () => {
  const testId = 'component-input-id'

  it('should render the Input component', async () => {
    const { queryByTestId, toJSON } = renderWithTheme(<Input testId={testId} />)
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(toJSON()).toMatchSnapshot()
  })
})
