import React from 'react'
import { Repocard } from '.'

export default {
  title: 'Repocard',
  component: Repocard
}

export const HeaderStory = () => (
  <Repocard
    name={'vral'}
    description={'teste'}
    type={'typescript'}
    stars={16}
    forks={8}
  ></Repocard>
)
