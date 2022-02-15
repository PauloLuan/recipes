import DiscordImage from '@assets/images/discord.png'
import BackgroundImage from '@assets/images/illustration.png'
import React from 'react'
import { StatusBar } from 'react-native'
import * as S from './SignIn.styles'

export interface SignInProps {
  testId?: string
}

export const SignIn = ({
  testId = 'component-SignIn-id',
  ...props
}: SignInProps) => {
  return (
    <S.Wrapper testID={testId} {...props}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <S.BackgroundImage
        source={BackgroundImage}
        resizeMode={'stretch'}
        style={{ width: '100%' }}
      />
      <S.Container>
        <S.Heading>
          Connect {'\n'}and organize your {'\n'}
          gameplays
        </S.Heading>
        <S.SubHeading>
          Create groups to play your favorite {'\n'} games with your friends
        </S.SubHeading>
        <S.LoginButtonContainer>
          <S.LogoContainer>
            <S.DiscordLogo source={DiscordImage} />
          </S.LogoContainer>
          <S.TextContainer>
            <S.ButtonText>Login with Discord</S.ButtonText>
          </S.TextContainer>
        </S.LoginButtonContainer>
      </S.Container>
    </S.Wrapper>
  )
}
