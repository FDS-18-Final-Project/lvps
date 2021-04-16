import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { colors } from 'theme/theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    font-family: 'Helvetica Neue LT Pro', Monserrat, sans-serif;    
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

  section {
    border-top: 1px solid ${colors.lightGray};
    border-bottom: 1px solid ${colors.lightGray};
  }

`;

export default GlobalStyle;
