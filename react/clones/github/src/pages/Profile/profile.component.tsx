import React from 'react'
import { Container, Main, LeftSide, RightSide, Repositories } from './profile.styles'
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
          <Repositories>
            <Repocard
              name={'buck'}
              description={
                'A fast build system that encourages the creation of small, reusable modules over a variety of platforms and languages.'
              }
              type={'typescript'}
              stars={16}
              forks={8}
            ></Repocard>
            <Repocard
              name={'hhvm'}
              description={
                'A virtual machine for executing programs written in Hack.'
              }
              type={'c++'}
              stars={24}
              forks={89}
            ></Repocard>
            <Repocard
              name={'fboss'}
              description={
                'Facebook Open Switching System Software for controlling network switches.'
              }
              type={'flutter'}
              stars={1325}
              forks={456}
            ></Repocard>
            <Repocard
              name={'watchman'}
              description={
                'Watches files and records, or triggers actions, when they change.'
              }
              type={'typescript'}
              stars={897}
              forks={9}
            ></Repocard>
            <Repocard
              name={'react-native'}
              description={'A framework for building native apps with React.'}
              type={'typescript'}
              stars={1}
              forks={2}
            ></Repocard>
            <Repocard
              name={'rocksdb'}
              description={
                'A library that provides an embeddable, persistent key-value store for fast storage.'
              }
              type={'typescript'}
              stars={32}
              forks={64}
            ></Repocard>
            <Repocard
              name={'openr'}
              description={
                'Distributed platform for building autonomic network functions.'
              }
              type={'typescript'}
              stars={20658}
              forks={5464}
            ></Repocard>
          </Repositories>
        </RightSide>
      </Main>
    </Container>
  )
}
