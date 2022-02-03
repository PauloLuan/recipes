import styled, { css } from 'styled-components/native'

import { UserPhotoProps } from './interfaces'

type UserImageProps = Pick<
  UserPhotoProps,
  'containerSize' | 'avatarSize' | 'borderRadius'
>

export const UserImage = styled.Image<UserImageProps>`
  ${({ containerSize, avatarSize, borderRadius }) => css`
    width: ${containerSize}px;
    height: ${containerSize}px;
    border-radius: ${borderRadius}px;
    border-color: red;
    border-width: 4px;
  `}
`
