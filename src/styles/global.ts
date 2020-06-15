import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #2e2e2e;

    h1, h2, h3, h4, h5, h6 {
      font-size: 24px;
    }
  }
`;
