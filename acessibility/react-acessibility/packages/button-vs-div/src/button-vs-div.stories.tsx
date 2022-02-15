import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Button, ButtonProps } from '.'

export default {
  title: 'Components/ButtonVsDiv',
  component: Button
} as Meta

export const DivButtonCase: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} />
  </>
)
