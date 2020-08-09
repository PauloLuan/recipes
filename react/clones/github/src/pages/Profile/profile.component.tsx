import React from 'react'
import { Container, Main, LeftSide, RightSide } from './profile.styles'
import { ProfileData } from '../../components/ProfileData'

export const Profile: React.FC = ({}) => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            userName={'pauloluan'}
            displayName={'Paulo Luan'}
            followers={37}
            following={5}
            company={'Reativa'}
            location={'São José dos Campos'}
          />
        </LeftSide>
        <RightSide></RightSide>
      </Main>
    </Container>
  )
}
