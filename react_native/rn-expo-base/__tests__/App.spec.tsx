import { render } from '@testing-library/react-native'
import React from 'react'

import App from '../App'

describe('<App>', () => {
  it('should render the default screen showing a label on it', () => {
    const { getByText } = render(<App />)
    // const teste = debug()
    const welcomeLabel = getByText('Welcome to react native')
    expect(welcomeLabel).toBeTruthy()
  })
})
