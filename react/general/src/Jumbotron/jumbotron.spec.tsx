import React from 'react'
import { render } from '@testing-library/react'
import { Jumbotron } from '.'

test('should render Serjão Berranteiro', () => {
  const { getByText } = render(<Jumbotron />)
  const linkElement = getByText(/Serjão/i)
  expect(linkElement).toBeDefined()
})
