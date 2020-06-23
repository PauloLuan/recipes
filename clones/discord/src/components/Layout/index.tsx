import React from 'react'

import { Grid } from './styles'
import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelList from '../ChannelList'
import UserInfo from '../UserInfo'

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelList />
      <UserInfo />
    </Grid>
  )
}

export default Layout
