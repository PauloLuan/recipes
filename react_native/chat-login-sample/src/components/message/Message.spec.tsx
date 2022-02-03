import { waitFor } from '@testing-library/react-native'
import React from 'react'
import { renderWithTheme } from '../../utils/test-helper'
import { Message } from './Message.component'

describe('<Message />', () => {
  const testId = 'component-message-id'

  it('should render the Message component', async () => {
    const { queryByTestId, toJSON } = renderWithTheme(
      <Message testId={testId} />
    )
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(toJSON()).toMatchSnapshot()
  })
})
