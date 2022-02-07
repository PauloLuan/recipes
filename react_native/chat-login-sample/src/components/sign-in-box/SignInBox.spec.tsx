import { waitFor } from '@testing-library/react-native'
import React from 'react'
import { renderWithTheme } from '../../utils/test-helper'
import { SignInBox } from './SignInBox.component'

describe('<SignInBox />', () => {
  const testId = 'component-sign-in-box-id'

  it('should render the SignInBox component', async () => {
    const { queryByTestId, toJSON } = renderWithTheme(
      <SignInBox testId={testId} />
    )
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(toJSON()).toMatchSnapshot()
  })
})
