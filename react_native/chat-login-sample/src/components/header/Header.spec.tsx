import { render, waitFor } from '@testing-library/react-native'
import React from 'react'
import { Header } from './Header.component'

// import theme from '../../styles/Theme'

describe('<Header />', () => {
  const testId = 'component-header-id'

  it('should render the Header component', async () => {
    const { getByTestId, queryByTestId, toJSON } = render(
      <Header testId={testId} />
    )
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(toJSON()).toMatchSnapshot()
  })
})
