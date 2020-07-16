import React from 'react'
import {
  Global,
  Container,
  NavBar,
  NavContainer,
  NavItem,
  DropdownMenu,
  DropdownItem
} from './styles'

export const FaceNav: React.FC = () => {
  return (
    <Container>
      <NavBar>
        <NavContainer />

        <NavContainer>
          <NavItem></NavItem>
          <NavItem></NavItem>
          <NavItem></NavItem>
        </NavContainer>
      </NavBar>
      <Global />
    </Container>
  )
}
