import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    font-family: 'Helvetica Neue LT Pro, sans-serif';
  }
  ul, ol, li {
    list-style: none;
  }
`;

export default GlobalStyle;
