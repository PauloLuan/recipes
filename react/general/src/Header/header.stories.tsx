import React from 'react'
import { Header } from '.'
import { GlobalStyles } from '../Global'

export default {
  title: 'Custom Header',
  component: Header
}

export const CustomControls = args => (
  <>
    <Header {...args} />
    <GlobalStyles />
  </>
)

CustomControls.args = {}
