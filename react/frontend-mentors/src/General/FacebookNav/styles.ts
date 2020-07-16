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
  display: block;
  background: var(--bg);
  height: 60px;
  width: 100%;
  top: 0;
`

export const NavItem = styled.div``
export const DropdownMenu = styled.div``
export const DropdownItem = styled.div``
