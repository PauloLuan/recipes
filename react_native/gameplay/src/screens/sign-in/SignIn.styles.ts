import styled, { css } from 'styled-components/native'

// import { SignInProps } from '.'

export const Wrapper = styled.SafeAreaView`
  ${() => css`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.secondary100};
  `}
`

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`

export const BackgroundImage = styled.Image``

export const Heading = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-size: 40px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.title700};
`

export const SubHeading = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text400};
  font-size: 40px;
  font-size: 15px;
  text-align: center;
  margin-top: 16px;
`

export const LoginButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  flex-direction: row;
  width: 274px;
  height: 56px;
  margin-top: 48px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`

export const LogoContainer = styled.View`
  width: 56px;
  justify-content: center;
  align-items: center;

  border-style: solid;
  border-right-color: ${({ theme }) => theme.colors.secondary100};
  border-right-width: 1px;
`
export const DiscordLogo = styled.Image``

export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 40px;
`

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text500};
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.heading};
`
