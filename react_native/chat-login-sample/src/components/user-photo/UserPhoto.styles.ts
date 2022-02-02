import styled, { css } from 'styled-components/native'

// import { UserPhotoProps } from '.'

export const UserImage = styled.Image`
  ${() => css`
    width: 150px;
    height: 150px;
    border-radius: 75px;
    border-color: red;
    border-width: 4px;
  `}
`
