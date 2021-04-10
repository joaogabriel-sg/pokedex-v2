import styled from 'styled-components';

export const Container = styled.main`
  min-height: calc(100vh + 5rem);
  max-width: 128rem;
  padding: 4.8rem 1%;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
    padding: 2.4rem 1% 12.8rem;
  }
`;
