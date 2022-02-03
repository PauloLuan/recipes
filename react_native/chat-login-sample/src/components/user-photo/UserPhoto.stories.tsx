import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { UserPhoto } from './UserPhoto.component'

storiesOf('Components/UserPhoto', module)
  .add('Small size: ', () => <UserPhoto size="SMALL" />)
  .add('Normal size: ', () => <UserPhoto size="NORMAL" />)
