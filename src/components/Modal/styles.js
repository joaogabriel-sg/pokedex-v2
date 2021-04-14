import styled from 'styled-components';
import { ButtonElement } from '../Button/styles';

export const Container = styled.section`
  background: rgba(0, 0, 0, 0.4);
  padding: 1.6rem 1%;

  position: fixed;
  inset: 0;
  z-index: 999999;

  display: flex;
  align-items: center;
  justify-content: center;

  ${ButtonElement} {
    padding: 1.2rem 0.8rem;
    font-size: 2rem;

    background: ${({ isFavorited, theme }) =>
      isFavorited ? theme.colors.palette.red : theme.colors.palette.yellow};
    color: ${({ isFavorited, theme }) =>
      isFavorited ? theme.colors.palette.cloud : theme.text};

    svg {
      fill: ${({ isFavorited, theme }) =>
        isFavorited ? theme.colors.palette.cloud : theme.text};
      margin-right: 0.8rem;
    }
  }
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  max-width: 50rem;

  padding: 2rem;
  border-radius: 0.4rem;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.05);
`;

export const Name = styled.h1`
  margin-bottom: 1.6rem;
  font-size: 3.2rem;
  text-transform: capitalize;
`;
