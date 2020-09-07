import React from 'react'
import { render } from '@testing-library/react'
import { Header } from './'

test('renders learn react link', () => {
  const { getByText } = render(<Header />)
  const linkElement = getByText(/mindingo/i)
  expect(linkElement).toBeDefined()
})
