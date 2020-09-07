import React from 'react'
import { Base } from '.'
import { GlobalStyles } from '../Global'

export default {
  title: 'Custom Base',
  component: Base
}

export const CustomControls = args => (
  <>
    <Base {...args} />
    <GlobalStyles />
  </>
)

CustomControls.args = {}
