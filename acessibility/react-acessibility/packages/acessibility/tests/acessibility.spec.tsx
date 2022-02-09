import { renderWithTheme } from '@pauloluan/shared'
import { screen } from '@testing-library/react'
import React from 'react'
import { Acessibility } from '../src/acessibility.component'

import { axe, toHaveNoViolations } from 'jest-axe'
expect.extend(toHaveNoViolations)

// import theme from '../../styles/Theme'

describe('<Acessibility />', () => {
  it('should render the Acessibility component', () => {
    renderWithTheme(<Acessibility />)
    expect(screen.getByTestId('acessibility-component-id')).toBeInTheDocument()
  })
})

describe('[AXE] Acessibility: <Acessibility />', () => {
  it('Should not have ARIA violations', async () => {
    const { container } = renderWithTheme(<Acessibility />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
