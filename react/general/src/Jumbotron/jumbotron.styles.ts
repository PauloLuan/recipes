import styled from 'styled-components'

export const Container = styled.main`
  background: url('https://origamid.com/projetos/brafe-1/img/bg-intro.jpg');
  background-size: cover;
  color: var(--white);
  padding: 150px 0;
  text-align: center;

  > h1 {
    text-transform: uppercase;
    font-size: 3em;
  }

  > h1::after {
    content: '';
    display: block;
    background: var(--white);
    width: 20px;
    height: 4px;
    margin: 10px auto;
  }

  > p {
    font-style: italic;
    font-size: 1.125em;
  }
`
