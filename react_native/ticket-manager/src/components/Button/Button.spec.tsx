import { waitFor } from '@testing-library/react-native'
import React from 'react'
import { Button } from '.'
import { renderWithTheme } from '@utils/test-helper'

describe('<Button />', () => {
  const testId = 'component-input-id'

  it('should render the Button component', async () => {
    const { queryByTestId } = renderWithTheme(<Button testId={testId} />)
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
  })
})
