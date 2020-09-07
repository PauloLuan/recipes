import React from 'react'
import { Button } from '.'

export default {
  title: 'Custom Button',
  component: Button
}

export const CustomControls = args => <Button {...args} />

CustomControls.args = {
  border: 'black',
  background: 'red',
  content: 'vral 123'
}
