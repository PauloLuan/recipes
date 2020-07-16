import React from 'react'
import {
  Global,
  Container,
  NavBar,
  NavItem,
  DropdownMenu,
  DropdownItem
} from './styles'

export const FaceNav: React.FC = () => {
  return (
    <Container>
      <NavBar>
        <NavItem></NavItem>
        <NavItem></NavItem>
        <NavItem></NavItem>
      </NavBar>
      <Global />
    </Container>
  )
}
