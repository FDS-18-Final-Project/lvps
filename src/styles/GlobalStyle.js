import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { colors } from 'theme/theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    font-family: Inter, Monserrat, sans-serif;    
  }
  html {
  font-size: 16px;

}

  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    font-family: Inter, Monserrat, sans-serif;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
  }
  ul, ol, li {
    list-style: none;
  }
  section {
    border-top: 1px solid ${colors.lightGray};
    border-bottom: 1px solid ${colors.lightGray};
  }
  img {
    user-drag: none; 
  }
  button:focus-visible {
    outline: 1px solid blue;
  }
  a:focus-visible {
    outline: 3px solid blue;
  }
`;

export default GlobalStyle;
