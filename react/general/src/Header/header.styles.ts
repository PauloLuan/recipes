import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  place-items: center;
  justify-content: space-between;
  background: var(--primary);
  padding: 20px 0;
`

export const Logo = styled.img`
  flex-shrink: 0;
`

export const Nav = styled.nav`
  > ul {
    > li {
      display: inline-block;
      color: white;
    }
  }
`
