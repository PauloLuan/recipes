import React from 'react'
import { render } from '@testing-library/react'
import { About } from '.'

test('should render Serjão Berranteiro', () => {
  const { getByText } = render(<About />)
  const linkElement = getByText(/Serjão/i)
  expect(linkElement).toBeDefined()
})
