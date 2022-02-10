import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../src/utils'

import { List } from '../../../src/components/list'
// import theme from '../../styles/Theme'

describe('<List />', () => {
  it('should render the List component', () => {
    renderWithTheme(<List />)
    expect(screen.getByTestId('list-id')).toBeInTheDocument()
  })
})
