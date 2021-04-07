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
    background: ${({ theme }) => theme.colors.primary};
    min-height: 100vh;
    font-size: 10px;
    font-family: ${({ theme }) => theme.fonts};
    color: ${({ theme }) => theme.colors.text};
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
