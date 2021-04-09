import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, auto));
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
`;
