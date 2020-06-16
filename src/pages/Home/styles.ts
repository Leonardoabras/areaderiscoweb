import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Redirectbutton = styled(Link)`
  background: #fac960;
  color: #fff;
  text-decoration: none;
  margin: 6px;
  align-self: center;
  padding: 10px 30px;

  &&:hover {
    background: #E0AC3A;
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

export const Search = styled.div`
  background: #fac960;

  display: flex;
  flex-direction: column;

  padding: 60px 10%;

  span {
    color: #8a6d2f;
    font-size: 35px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;

    margin-bottom: 20px;
  }

  form {
    display: flex;

    height: 55px;

    max-width: 750px;

    input {
      width: 80%;
      border: none;
      padding: 10px 20px;

      font-size: 16px;
    }

    button {
      width: 20%;
      background: #E0AC3A;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      border: none;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      &:hover {
        background: #BA871A;
      }
    }
  }
`;

export const MapSection = styled.div`
  text-align: center;
  padding: 20px;

  span {
    color: #8a6d2f;
    font-size: 40px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;

    margin: 20px;
  }

  p {
    font-size: 15px;
    color: #aaa;
  }

  div.map-container {
    width: 82%;
    height: 550px;

    margin: 30px auto;

    background-color: #ccc;
  }

  div#legenda {
    div.icons {
      display: flex;

      justify-content: center;
    }

    div.icon {
      display: flex;
      flex-direction: column;
      margin: 25px 20px 0 20px;

      span {
        margin-top: 5px;
        font-size: 24px;
      }

      img {
        width: 64px;
        height: 64px;

        align-self: center;
      }
    }
  }
`;

export const News = styled.div`
  background: #eee;

  text-align: center;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    div.newsBlock {
      flex-direction: column;
    }
  }

  h1 {
    font-size: 32px;
    padding: 20px;
  }

  div.newsBlock {
    display: flex;
    width: 80%;

    align-self: center;

    div.news {

      padding: 25px 20px 20px 20px;

      span {
        color: #8a6d2f;
        font-family: 'Montserrat', sans-serif;
        font-size: 26px;
        font-weight: 500;
      }

      p {
        margin-top: 10px;

        text-align: justify;
        hyphens: auto;

        font-size: 16px;
      }

    }
  }
`;

export const Footer = styled.div`
  background: #fac960;
  text-align: center;
  padding-bottom: 70px;

  div.socialMediaIcons {
    display: flex;

    align-content: center;
    justify-content: center;

    a {
      margin: 0 5px;
    }
  }

  hr {
    max-width: 900px;
    margin: 24px auto;
    border: 1px solid white;
  }

  p {
    max-width: 800px;
    padding: 10px 0;
    margin: auto;
  }
`;
