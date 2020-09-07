import React from 'react'
import { HeaderWrapper, Container, Logo, Nav } from './header.styles'

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <HeaderWrapper>
      <Container>
        <Logo src={'https://origamid.com/projetos/brafe-1/img/brafe.png'} />
        <Nav>
          <ul>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Portfólio</a></li>
            <li><a href="#">Contatos</a></li>
          </ul>
        </Nav>
      </Container>
    </HeaderWrapper>
  )
}
