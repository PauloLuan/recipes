import React from 'react'
import {
  Container,
  Flex,
  Avatar,
  Row,
  Column,
  EditButton,
  PeopleIcon,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
  BlogIcon
} from './profileData.styles'

interface Props {
  userName: string
  displayName: string
  followers: number
  following: number
  company?: string
  location?: string
  email?: string
  blog?: string
}

const buildAvatarBlock = ({
  displayName,
  userName
}: Pick<Props, 'displayName' | 'userName'>) => (
  <Flex>
    <Avatar src={`http://github.com/${userName}.png`} alt={userName} />
    <div>
      <h1>{displayName}</h1>
      <h2>{userName}</h2>
    </div>
  </Flex>
)

const buildFollowersBlock = ({
  followers,
  following
}: Pick<Props, 'followers' | 'following'>) => (
  <Row>
    <li>
      <PeopleIcon />
      <b>{followers}</b>
      <span>followers</span>
      <span>·</span>
    </li>
    <li>
      <b>{following}</b>
      <span>following</span>
    </li>
  </Row>
)

const buildColumnBlock = ({
  company,
  location,
  email,
  blog
}: Pick<Props, 'company' | 'location' | 'email' | 'blog'>) => (
  <Column>
    {company && (
      <li>
        <CompanyIcon />
        <span>{company}</span>
      </li>
    )}
    {location && (
      <li>
        <LocationIcon />
        <span>{location}</span>
      </li>
    )}
    {email && (
      <li>
        <EmailIcon />
        <span>{email}</span>
      </li>
    )}
    {blog && (
      <li>
        <BlogIcon />
        <span>{blog}</span>
      </li>
    )}
  </Column>
)

export const ProfileData: React.FC<Props> = ({
  userName,
  displayName,
  followers,
  following,
  company,
  location,
  email,
  blog
}) => {
  return (
    <Container>
      {buildAvatarBlock({ displayName, userName })}
      {buildFollowersBlock({ followers, following })}
      {buildColumnBlock({ company, location, email, blog })}
    </Container>
  )
}
