import React from 'react'
import { Container, Main, LeftSide, RightSide } from './profile.styles'
import { ProfileData } from '../../components/ProfileData'
import { Repocard } from '../../components/RepoCard'

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
            email={'pauloluan.inova@gmail.com'}
            blog={'http://bit.ly/pauloluan'}
          />
        </LeftSide>
        <RightSide>
          <Repocard
            name={'vral'}
            description={'teste'}
            type={'typescript'}
            stars={16}
            forks={8}
          ></Repocard>
        </RightSide>
      </Main>
    </Container>
  )
}
