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

  :root {
    --light-magenta: hsl(293, 100%, 63%);
    --light-violet: hsl(264, 100%, 61%);
    --white: hsl(0, 0%, 100%);
    --app-background: hsl(270, 20%, 96%);
    --submit-button-background: hsl(271, 36%, 24%);
    --radio-button-outline: hsl(289, 100%, 72%);
  }
`
