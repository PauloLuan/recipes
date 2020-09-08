import React from 'react'
import { About } from '.'
import { GlobalStyles } from '../Global'

export default {
  title: 'Custom About',
  component: About
}

export const CustomControls = args => (
  <>
    <About {...args} />
    <GlobalStyles />
  </>
)

CustomControls.args = {}
