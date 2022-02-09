import { renderWithTheme } from '@pauloluan/shared'
import { screen } from '@testing-library/react'
import React from 'react'
import { Button, DivButton } from '../src/button-vs-div.component'

import { axe, toHaveNoViolations } from 'jest-axe'
expect.extend(toHaveNoViolations)

describe('<Button />', () => {
  describe('Button rendering:', () => {
    it('should render the Button component', () => {
      renderWithTheme(<Button />)
      expect(screen.getByTestId('button-vs-div-id')).toBeInTheDocument()
    })
  })

  describe('[AXE] Button: <Button />', () => {
    it('Should not have ARIA violations', async () => {
      const { container } = renderWithTheme(<Button />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})

describe('<DivButton />', () => {
  describe('DivButton rendering:', () => {
    it('should render the DivButton component', () => {
      renderWithTheme(<DivButton />)
      expect(screen.getByTestId('button-vs-div-id')).toBeInTheDocument()
    })
  })

  describe('[AXE] DivButton: <DivButton />', () => {
    it('Should not have ARIA violations', async () => {
      const { container } = renderWithTheme(<DivButton />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
