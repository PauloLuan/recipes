import { Story, Meta } from '@storybook/react'
import { Acessibility, AcessibilityProps } from '.'

export default {
  title: 'Components/Acessibility',
  component: Acessibility
} as Meta

export const Default: Story<AcessibilityProps> = (args) => (
  <Acessibility {...args} />
)
