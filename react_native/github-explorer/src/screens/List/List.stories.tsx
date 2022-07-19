import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { List } from './List.component'

const args = {
  testId: 'component-list-id'
}

storiesOf('Components/List', module).add('default: ', () => <List {...args} />)
