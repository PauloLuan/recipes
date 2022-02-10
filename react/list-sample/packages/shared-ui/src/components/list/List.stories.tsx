import { Story, Meta } from '@storybook/react'
import { List, ListProps } from '.'

export default {
  title: 'Components/List',
  component: List
} as Meta

export const Default: Story<ListProps> = (args) => <List {...args} />
