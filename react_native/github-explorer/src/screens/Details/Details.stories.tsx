import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Details } from './Details.component'

const args = {
  testId: 'component-details-id'
}

storiesOf('Components/Details', module).add('default: ', () => (
  <Details {...args} />
))
