import styled, { css } from 'styled-components/native'

// import { HomeProps } from '.'

export const Wrapper = styled.View`
  ${() => css`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.BLACK_SECONDARY};
  `}
`
