import { waitFor } from '@testing-library/react-native'
import React from 'react'
import { renderWithTheme } from '../../utils/test-helper'
import { Button } from './Button.component'

describe('<Button />', () => {
  const testId = 'component-button-id'

  it('should render the Button component', async () => {
    const { queryByTestId } = renderWithTheme(<Button testId={testId} />)
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
  })
})
