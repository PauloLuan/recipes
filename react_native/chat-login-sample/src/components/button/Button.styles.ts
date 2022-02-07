import styled from 'styled-components/native'

// import { ButtonProps } from '.'

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  flex-direction: row;
  height: 64px;
  background-color: ${(props) => props.theme.colors.YELLOW};
  justify-content: center;
  align-items: center;
`

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: 'black'
})``

export const Text = styled.Text`
  font-size: 24px;
  margin-left: 16px;
`
