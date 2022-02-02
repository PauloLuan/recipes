import { waitFor } from '@testing-library/react-native'
import * as React from 'react'
import { renderWithTheme } from '../../utils/test-helper'
import { Home } from './home.component'
// import theme from '../../styles/Theme'

describe('<Home />', () => {
  const testId = 'component-home-id'

  it('should render the Home component', async () => {
    expect(1 + 1).toEqual(2)
    const { queryByTestId, toJSON } = renderWithTheme(<Home testId={testId} />)
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(toJSON()).toMatchSnapshot()
  })
})
