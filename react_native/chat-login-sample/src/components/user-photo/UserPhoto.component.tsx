import React from 'react'
import * as S from './UserPhoto.styles'

export interface UserPhotoProps {
  testId?: string
}

export const UserPhoto = ({
  testId = 'component-user-photo-id',
  ...props
}: UserPhotoProps) => {
  return (
    <>
      <S.Wrapper testID={testId} {...props}></S.Wrapper>
    </>
  )
}
