import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Button } from './Button.component'

const args = {
  testId: 'component-button-id'
}

storiesOf('Components/Button', module).add('default: ', () => (
  <Button {...args} />
))
