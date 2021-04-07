import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const buttonStyle = css`
  background: ${({ theme }) => theme.colors.palette.yellow};
  width: 100%;
  opacity: 1;

  padding: 1.6rem;
  border-radius: 0.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.4rem;
  font-weight: 500;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.6;
  }
`;

export const ButtonElement = styled.button`
  ${buttonStyle};
`;

export const LinkButtonElement = styled(Link)`
  ${buttonStyle};
`;
