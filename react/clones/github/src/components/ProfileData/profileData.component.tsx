import React from 'react'
import {
  Container,
  Flex,
  Avatar,
  Row,
  PeopleIcon,
  Column,
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

const buildAvatarBlock = (displayName: string, userName: string) => (
  <Flex>
    <Avatar>
      <div>
        <h1>{displayName}</h1>
        <h2>{userName}</h2>
      </div>
    </Avatar>
  </Flex>
)

const buildFollowersBlock = (followers: number, following: number) => (
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

const buildColumnBlock = (
  company?: string,
  location?: string,
  email?: string,
  blog?: string
) => (
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
      {buildAvatarBlock(displayName, userName)}
      {buildFollowersBlock(followers, following)}
      {buildColumnBlock(company, location, email, blog)}
    </Container>
  )
}
