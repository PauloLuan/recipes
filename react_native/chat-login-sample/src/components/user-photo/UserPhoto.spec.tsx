import { render, waitFor } from '@testing-library/react-native'
import React from 'react'
import { UserPhoto } from './UserPhoto.component'

// import theme from '../../styles/Theme'

describe('<UserPhoto />', () => {
  const testId = 'component-user-photo-id'

  it('should render the UserPhoto component', async () => {
    const { getByTestId, queryByTestId, toJSON } = render(
      <UserPhoto testId={testId} />
    )
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(toJSON()).toMatchSnapshot()
  })
})
