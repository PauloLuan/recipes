import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { MessageList } from './MessageList.component'

const args = {
  testId: 'component-message-list-id'
}

storiesOf('Components/MessageList', module).add('default: ', () => (
  <MessageList {...args} />
))
