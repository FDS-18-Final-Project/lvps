import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    font-family: 'Helvetica Neue LT Pro', sans-serif;    
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    font-family: 'Helvetica Neue LT Pro, sans-serif';
    overflow-x: hidden;
    overflow-y: auto;
  }
  ul, ol, li {
    list-style: none;
  }
  
  html {
    /* @media only screen and (max-width: 1500px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 11px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 9px;
  } */
  }
`;

export default GlobalStyle;
