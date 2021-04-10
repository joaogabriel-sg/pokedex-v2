import styled from 'styled-components';

export const Subtitle = styled.h2`
  display: block;
  margin-bottom: 2.4rem;

  font-size: 2.4rem;
  font-weight: 500;
  text-align: left;

  @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
    text-align: center;
  }
`;
