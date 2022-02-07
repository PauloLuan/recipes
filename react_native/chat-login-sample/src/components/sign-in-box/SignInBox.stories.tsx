import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { SignInBox } from './SignInBox.component'

const args = {
  testId: 'component-sign-in-box-id'
}

storiesOf('Components/SignInBox', module).add('default: ', () => (
  <SignInBox {...args} />
))
