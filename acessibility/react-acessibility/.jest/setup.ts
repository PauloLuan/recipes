import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
/* import these mfs to prevent the following error:
  ReferenceError: regeneratorRuntime is not defined
  sources:
    - https://github.com/gpietro/react-numpad/issues/130#issuecomment-569040930
    - https://babeljs.io/docs/en/babel-polyfill
*/
import "core-js/stable";
import "regenerator-runtime/runtime";
/***********************************/
