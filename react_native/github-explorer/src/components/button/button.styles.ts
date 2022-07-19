import styled from 'styled-components/native'

export const LoginButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  flex-direction: row;
  width: 274px;
  height: 56px;
  margin-top: 48px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`

export const LogoContainer = styled.View`
  width: 56px;
  justify-content: center;
  align-items: center;

  border-style: solid;
  border-right-color: ${({ theme }) => theme.colors.secondary};
  border-right-width: 1px;
`

export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 40px;
`

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text500};
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
`
