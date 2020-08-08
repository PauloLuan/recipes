import React from 'react'
import { Example } from '.'

export default {
  title: 'Example',
  component: Example
}

export const ExampleVersion1 = () => (
  <Example customText='Hello Storybook'></Example>
)

export const ExampleVersion2 = () => (
  <Example customText='Version 2 of the same component'></Example>
)
