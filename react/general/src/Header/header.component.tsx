import React from 'react'
import { Container, Logo, Nav } from './header.styles'

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
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
  )
}
