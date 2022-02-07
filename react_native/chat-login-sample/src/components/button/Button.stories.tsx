import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Button } from './Button.component'

storiesOf('Components/Button', module)
  .add('default: ', () => <Button />)
  .add('customIcon: ', () => <Button icon="save" />)
  .add('disabled: ', () => <Button isDisabled={true} />)
