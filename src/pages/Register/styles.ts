import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const GoBack = styled(Link)`
  text-decoration: none;
  display: flex;

  color: #2e2e2e;
  font-size: 16px;

  align-self: center;
  align-content: center;
  justify-content: center;

  transition: 0.2s;

  span {
    transition: 0.2s;
    padding-left: 4px;
  }

  svg {
    align-self: center;
  }

  &&:visited {
    color: #2e2e2e;
  }

  &&:hover {
    color: #4f4f4f;

    transition: 0.2s;

    span {
      padding-left: 10px;
    }
  }
`;

export const Nav = styled.div`
  display: flex;

  align-content: center;

  padding: 10px 10%;

  img {
    width: 64px;
    height: 64px;
  }

  div#title {
    margin-left: 16px;
    align-self: center;

    flex: 1;
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  flex: 1;

  div.title {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    text-align: center;
    padding: 40px 10% 40px 10%;

    background-color: #fac960;

    h1 {
      font-size: 35px;
      font-weight: 500;
      color: #8a6d2f;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    flex: 1;

    max-width: 500px;
    min-width: 400px;

    padding: 20px;

    div.fieldGroup {
      display: flex;
      flex-direction: column;

      div.fieldItem {
        display: flex;
        flex-direction: column;

        margin-bottom: 10px;

        label {
          padding-left: 2px;
        }

        input {
          border: 1px solid #dfe6e9;
          padding: 8px 10px;
          font-size: 16px;
        }
      }

      button {
        width: 150px;
        padding: 10px;

        background: #fac960;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        border: none;
        cursor: pointer;

        margin: 10px auto 0 auto;

        &:hover {
          background: #E0AC3A;
        }
      }
    }

    a {
      margin-top: 20px;

      text-decoration: none;

      align-items: center;
      align-self: center;

      display: flex;

      font-size: 16px;
      color: #2e2e2e;
    }
  }
`;
