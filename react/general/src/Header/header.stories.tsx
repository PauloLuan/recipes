import React from 'react'
import { Header } from '.'

export default {
  title: 'Custom Header',
  component: Header
}

export const CustomControls = args => <Header {...args} />

CustomControls.args = {}
