import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --bg: #242526;
    --bg-accent: #484a4d;
    --text-color: #dadce1;
    --nav-size: 60px;
    --border: 1px solid #474a4d;
    --border-radius: 8px;
    --speed: 500ms;
  }
`

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg);
  height: var(--nav-size);
  width: 100%;
  top: 0;
`

export const NavContainer = styled.div`
  display: flex;
`

export const NavItem = styled.div`
  position: relative;
  background: var(--bg-accent);
  width: 24px;
  height: 24px;
  margin: 12px;
  cursor: pointer;

  &:hover {
    background: yellow;
  }
`

export const DropdownMenu = styled.div``

export const DropdownItem = styled.div``
