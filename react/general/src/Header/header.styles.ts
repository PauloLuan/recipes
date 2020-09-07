import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  background: var(--primary);
`

export const Container = styled.div`
  display: flex;
  place-items: center;
  justify-content: space-between;
  padding: 20px 0;
  margin: 0 auto;
  max-width: 900px;
`

export const Logo = styled.img`
  flex-shrink: 0;
`

export const Nav = styled.nav`
  > ul {
    > li {
      display: inline-block;

      > a {
        display: block;
        padding: 10px;
        text-decoration: none;
        color: var(--white);
        font-size: 1.125em;
      }
    }
  }
`
