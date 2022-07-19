import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Home } from './Home.component'

const args = {
  testId: 'component-home-id'
}

storiesOf('Screens/Home', module).add('default: ', () => <Home {...args} />)
