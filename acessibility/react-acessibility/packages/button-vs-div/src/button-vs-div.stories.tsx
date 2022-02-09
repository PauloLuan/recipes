import { Story, Meta } from '@storybook/react'
import { ButtonVsDiv, ButtonVsDivProps } from '.'

export default {
  title: 'Components/ButtonVsDiv',
  component: ButtonVsDiv
} as Meta

export const Default: Story<ButtonVsDivProps> = (args) => <ButtonVsDiv {...args} />
