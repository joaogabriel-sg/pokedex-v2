import styled from 'styled-components';

export const Title = styled.h1`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
    display: block;
    margin-bottom: 2.4rem;

    font-size: 3.6rem;
    text-align: center;
  }
`;
