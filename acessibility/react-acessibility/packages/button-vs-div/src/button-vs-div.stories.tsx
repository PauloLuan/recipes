import { Story, Meta } from '@storybook/react'
import { Button, DivButton, ButtonProps } from '.'

export default {
  title: 'Components/ButtonVsDiv',
  component: DivButton
} as Meta

export const DivButtonCase: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} />
    <DivButton {...args} />
  </>
)
