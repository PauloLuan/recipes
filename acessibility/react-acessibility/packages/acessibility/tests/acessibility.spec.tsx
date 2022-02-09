import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@pauloluan/shared'

import { Acessibility } from '../src/acessibility.component'
// import theme from '../../styles/Theme'

describe('<Acessibility />', () => {
  it('should render the Acessibility component', () => {
    renderWithTheme(<Acessibility />)
    expect(screen.getByTestId('acessibility-component-id')).toBeInTheDocument()
  })
})
