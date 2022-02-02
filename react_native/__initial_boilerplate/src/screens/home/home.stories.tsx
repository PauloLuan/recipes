import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Home } from './home.component'

storiesOf('Components/Home', module)
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default: ', () => <Home />)
