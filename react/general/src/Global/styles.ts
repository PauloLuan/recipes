import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body, h1, h2, h3, p, ul {
    padding: 0px;
    margin: 0px;
  }

  body {
    font-family: Georgia, serif;
    color: #252525;
  }

  * {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul {
    list-style: none;
  }

  :root {
    --primary: #252525;
    --white: #fff;
    --product-background: #e7e4d8;
    --product-border: #d6d3c8;
    --product-before: #e7e4d8;
  }
`
