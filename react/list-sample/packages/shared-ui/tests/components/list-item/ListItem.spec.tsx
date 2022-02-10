import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../src/utils'

import { ListItem } from '../../../src/components/list-item'
// import theme from '../../styles/Theme'

describe('<ListItem />', () => {
  it('should render the ListItem component', () => {
    renderWithTheme(<ListItem />)
    expect(screen.getByTestId('list-item-id')).toBeInTheDocument()
  })
})
