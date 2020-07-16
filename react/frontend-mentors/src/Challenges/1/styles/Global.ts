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
    /* text */
    --pale-violet : hsl(276, 100%, 81%); /* (sub-heading at the top of the app UI) */
    --moderate-violet : hsl(276, 55%, 52%); /* (chat on the left) */
    --desaturated-dark-violet : hsl(271, 15%, 43%); /* (chat on the right) */
    --grayish-blue : hsl(206, 6%, 79%); /* (placeholder text) */
    --very-dark-desaturated-violet : hsl(271, 36%, 24%); /* (main heading) */
    --dark-grayish-violet : hsl(270, 7%, 64%); /* (paragraph) */

    /* Gradients */
    --light-magenta: hsl(293, 100%, 63%);
    --light-violet: hsl(264, 100%, 61%);
    
    /* Secondary */
    --white: hsl(0, 0%, 100%);
    --light-grayish-violet: hsl(270, 20%, 96%); /* (app background) */
    --very-dark-desaturated-violet: hsl(271, 36%, 24%); /* (submit button background) */
    --very-light-magenta: hsl(289, 100%, 72%); /* (radio button outline) */
  }
`
