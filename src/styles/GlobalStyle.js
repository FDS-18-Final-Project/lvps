import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Helvetica Neue LT Pro, sans-serif;
  }

`

export default GlobalStyle;
