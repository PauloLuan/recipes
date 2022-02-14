import { Story, Meta } from '@storybook/react'
import { List, ListProps } from '.'

export default {
  title: 'Components/List',
  component: List
} as Meta

const exampleData = [
  { text: 'this is an example' },
  { text: 'this is an example 2' },
  { text: 'this is an example 3' }
]

export const Default: Story<ListProps> = (args) => (
  <List data={exampleData} {...args} />
)
