import React from 'react'

import { Grid } from './styles'
import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelList from '../ChannelList'
import UserInfo from '../UserInfo'
import ChannelInfo from '../ChannelInfo'

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelList />
      <UserInfo />
      <ChannelInfo />
    </Grid>
  )
}

export default Layout
