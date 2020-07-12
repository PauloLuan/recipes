import React from 'react'

import {
  Container,
  ListItem,
  ChannelText,
  AddIcon,
  Info,
  HashtagIcon,
  ChannelName,
  IconsContainer,
  AddPersonIcon,
  SettingsIcon
} from './styles'

const ChannelList: React.FC = () => {
  return (
    <Container>
      <ListItem>
        <ChannelText>Canais de Texto</ChannelText>
        <AddIcon />
      </ListItem>
      <ListItem className={'active'}>
        <Info>
          <HashtagIcon />
          <ChannelName>porrada-livre</ChannelName>
        </Info>
        <IconsContainer>
          <AddPersonIcon />
          <SettingsIcon />
        </IconsContainer>
      </ListItem>
      <ListItem>
        <Info>
          <HashtagIcon />
          <ChannelName>treta de mulher</ChannelName>
        </Info>
      </ListItem>
      <ListItem>
        <Info>
          <HashtagIcon />
          <ChannelName>porradaria em grupo</ChannelName>
        </Info>
      </ListItem>
      <ListItem>
        <Info>
          <HashtagIcon />
          <ChannelName>só tapão de qualidade</ChannelName>
        </Info>
      </ListItem>
      <ListItem>
        <Info>
          <HashtagIcon />
          <ChannelName>mindingo saindo no soco</ChannelName>
        </Info>
      </ListItem>
    </Container>
  )
}

export default ChannelList
