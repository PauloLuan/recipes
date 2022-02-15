import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { SignIn } from './SignIn.component'

const args = {
  testId: 'component-sign-in-id'
}

storiesOf('Screens/SignIn', module).add('default: ', () => <SignIn {...args} />)
