import { waitFor } from '@testing-library/react-native'
import React from 'react'
import { renderWithTheme } from '../../utils/test-helper'
import { SignIn } from './SignIn.component'

describe('<SignIn />', () => {
  const testId = 'component-SignIn-id'

  it('should render the SignIn component', async () => {
    const { queryByTestId, toJSON } = renderWithTheme(
      <SignIn testId={testId} />
    )
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(toJSON()).toMatchSnapshot()
  })
})
