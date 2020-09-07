import React from 'react'
import { Container, Logo, Nav } from './header.styles'

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Container>
      <Logo src={'https://origamid.com/projetos/brafe-1/img/brafe.png'} />
      <Nav>
        <ul>
          <li>Sobre</li>
          <li>Produtos</li>
          <li>Portfólio</li>
          <li>Contatos</li>
        </ul>
      </Nav>
    </Container>
  )
}
