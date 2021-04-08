import styled from 'styled-components';

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.palette.yellow};
  width: 100%;
  height: 5rem;
  padding: 0 1%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;

    height: 8rem;
    box-shadow: 0 -0.3rem 1rem rgba(0, 0, 0, 0.15);
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 128rem;
  height: 100%;

  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
    grid-template-columns: 10rem 1fr 10rem;
  }
`;
