import React from 'react'
import { Jumbotron } from '.'
import { GlobalStyles } from '../Global'

export default {
  title: 'Custom Jumbotron',
  component: Jumbotron
}

export const CustomControls = args => (
  <>
    <Jumbotron {...args} />
    <GlobalStyles />
  </>
)

CustomControls.args = {}
