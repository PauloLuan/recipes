import React from 'react'
import * as S from './UserPhoto.styles'
import { UserPhotoProps } from './interfaces'
import { Image } from 'react-native'

import DefaultAvatar from '../../assets/images/avatar.png'
const defaultAvatarUri = Image.resolveAssetSource(DefaultAvatar).uri

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarSize: 28
  },
  NORMAL: {
    containerSize: 52,
    avatarSize: 38
  }
}

export const UserPhoto = ({
  testId = 'component-user-photo-id',
  imageUri = defaultAvatarUri,
  size = 'SMALL'
}: UserPhotoProps) => {
  const { containerSize, avatarSize } = SIZES[size]

  return (
    <S.UserImage
      testID={testId}
      source={{ uri: imageUri }}
      containerSize={containerSize}
      avatarSize={avatarSize}
      borderRadius={containerSize / 2}
    ></S.UserImage>
  )
}
