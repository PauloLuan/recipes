import styled, { css } from 'styled-components/native'

// import { HomeProps } from '.'

export const Wrapper = styled.View`
  ${() => css`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.BLACK_SECONDARY};
  `}
`

export const Header = styled.View`
  ${() => css`
    margin: 15px;
    flex-direction: row;
    justify-content: space-between;
  `}
`

export const Headline = styled.Text`
  font-size: 24px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  color: ${({ theme }) => theme.colors.WHITE};
`

export const ExitWrapper = styled.TouchableOpacity``

export const Exit = styled.Text`
  color: ${({ theme }) => theme.colors.WHITE};
`
