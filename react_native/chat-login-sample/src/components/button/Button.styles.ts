import styled from 'styled-components/native'

// import { ButtonProps } from '.'

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  flex-direction: row;
  height: 64px;
  width: '100%';
  background-color: lightblue;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  font-size: 24px;
  margin-left: 16px;
`
