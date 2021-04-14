import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  width: fit-content;
  margin: 0 auto;

  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.palette.blue};

  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.palette.blueDark};
  }
`;
