import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato');

  body {
    margin: 0;
    padding: 0;
    padding: 0 !important;
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
