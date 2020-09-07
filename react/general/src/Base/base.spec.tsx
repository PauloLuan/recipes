import React from 'react'
import { render } from '@testing-library/react'
import { Base } from '.'

test('should render Serjão Berranteiro', () => {
  const { getByText } = render(<Base />)
  const linkElement = getByText(/Serjão/i)
  expect(linkElement).toBeDefined()
})
