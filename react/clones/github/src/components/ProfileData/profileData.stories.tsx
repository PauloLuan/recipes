import React from 'react'
import { ProfileData } from '.'

export default {
  title: 'ProfileData',
  component: ProfileData
}

export const ProfileDataStory = () => (
  <ProfileData
    userName={'pauloluan'}
    displayName={'Paulo Luan'}
    followers={37}
    following={5}
    company={'Reativa'}
    location={'São José dos Campos'}
    email={'teste@teste.com'}
    blog={'http://blog.reativa.dev'}
  ></ProfileData>
)
