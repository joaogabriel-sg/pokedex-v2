import styled from 'styled-components';

export const Container = styled.main`
  min-height: calc(100vh + 5rem);
  max-width: 84rem;
  padding: 4.8rem 1%;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
    padding: 2.4rem 1% 12.8rem;
  }
`;

export const Title = styled.h1`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
    display: block;
    margin-bottom: 2.4rem;

    font-size: 3.6rem;
    text-align: center;
  }
`;
