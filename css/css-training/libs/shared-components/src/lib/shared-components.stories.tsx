import React from 'react'
import { SharedComponents, SharedComponentsProps } from './shared-components'

export default {
  component: SharedComponents,
  title: 'SharedComponents',
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SharedComponentsProps = {}

  return <SharedComponents />
}
