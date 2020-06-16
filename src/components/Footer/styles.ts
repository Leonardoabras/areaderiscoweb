import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: #fac960;
  text-align: center;

  padding-top: 20px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;

  width: 100%;

  div.socialMediaIcons {
    display: flex;

    align-content: center;
    justify-content: center;

    a {
      margin: 0 5px;
    }
  }

  hr {
    max-width: 800px;
    margin: 24px auto;

    border: 0;
    border-bottom: 1px solid black;
  }

  p {
    max-width: 800px;
    padding: 10px 0;
    margin: auto;
  }
`;
