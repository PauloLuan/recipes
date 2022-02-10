import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../src/utils'

import { List } from '../../../src/components/list-item'
// import theme from '../../styles/Theme'

describe('<List />', () => {
  it('should render the List component', () => {
    renderWithTheme(<List />)
    expect(screen.getByTestId('list-item-id')).toBeInTheDocument()
  })
})
