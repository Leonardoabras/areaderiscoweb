import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #2e2e2e;

    h1, h2, h3, h4, h5, h6 {
      font-size: 24px;
    }

    display: flex;
    flex-direction: column;
    min-height: 100vh;

    div#root {
      flex: 1;
      flex-direction: column;
      display: flex;

      main {
        flex: 1;
      }
    }
  }
`;
