import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Message } from './Message.component'

const args = {
  testId: 'component-message-id'
}

storiesOf('Components/Message', module).add('default: ', () => (
  <Message {...args} />
))
