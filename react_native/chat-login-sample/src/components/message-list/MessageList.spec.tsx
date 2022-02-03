import { waitFor } from '@testing-library/react-native'
import React from 'react'
import { renderWithTheme } from '../../utils/test-helper'
import { MessageList } from './MessageList.component'

describe('<MessageList />', () => {
  const testId = 'component-message-list-id'

  it('should render the MessageList component', async () => {
    const { queryByTestId, toJSON } = renderWithTheme(
      <MessageList testId={testId} />
    )
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(toJSON()).toMatchSnapshot()
  })
})
