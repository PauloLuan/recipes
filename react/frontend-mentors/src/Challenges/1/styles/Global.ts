import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
  }
`
