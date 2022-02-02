import styled, { css } from 'styled-components/native'
import { ScrollViewProps } from 'react-native'

// import { HomeProps } from '.'

export const Wrapper = styled.ScrollView.attrs<ScrollViewProps>({
  horizontal: true
})`
  ${() => css`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
  `}
`

export const Headline = styled.Text`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Roboto_900Black_Italic';
`
