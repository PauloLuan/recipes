import styled, { css } from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'react-native'

import { UserPhotoProps } from './interfaces'
import Colors from '@constants/Colors'

type UserImageProps = Pick<
  UserPhotoProps,
  'containerSize' | 'avatarSize' | 'borderRadius'
>

export const UserImage = styled(Image)<UserImageProps>`
  ${({ avatarSize, borderRadius }) => css`
    width: ${avatarSize}px;
    height: ${avatarSize}px;
    border-radius: ${borderRadius}px;
  `}
`

const LinearGradientBase = styled(LinearGradient).attrs({
  colors: [Colors.colors.GREEN, Colors.colors.YELLOW]
})``

export const LinearGradientBackground = styled(
  LinearGradientBase
)<UserImageProps>`
  ${({ containerSize, borderRadius }) => css`
    align-items: center;
    justify-content: center;
    width: ${containerSize}px;
    height: ${containerSize}px;
    border-radius: ${borderRadius}px;
  `}
`
