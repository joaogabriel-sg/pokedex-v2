import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    background: ${({ theme }) => theme.colors.secondary};
    min-height: 100vh;
    font-size: 10px;
    font-family: ${({ theme }) => theme.fonts};
    color: ${({ theme }) => theme.colors.text};

    @media screen and (max-width: ${({ theme }) => theme.devices.tablet}) {
      font-size: 9px; 
    }

    @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
      font-size: 8px; 
    }
  }

  body::-webkit-scrollbar {
    background: ${({ theme }) => theme.colors.palette.yellow};
    width: 1.2rem;
  }

  body::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.text};
    border: 2px solid ${({ theme }) => theme.colors.palette.yellow};
    border-radius: 1.2rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  ul, 
  li {
    list-style: none;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts};
  }

  input {
    font-family: ${({ theme }) => theme.fonts};
  }

  img {
    display: block;
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    line-height: 1;
  }
`;
