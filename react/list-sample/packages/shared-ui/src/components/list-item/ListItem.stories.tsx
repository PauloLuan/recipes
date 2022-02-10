import { Story, Meta } from '@storybook/react'
import { ListItem, ListItemProps } from '.'

export default {
  title: 'Components/ListItem',
  component: ListItem
} as Meta

export const Default: Story<ListItemProps> = (args) => <ListItem {...args} />
