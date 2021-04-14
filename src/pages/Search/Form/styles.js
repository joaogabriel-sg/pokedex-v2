import styled from 'styled-components';
import { InputElement } from '../../../components/Input/styles';

export const FormContainer = styled.form`
  background: ${({ theme }) => theme.colors.primary};
  height: 6.4rem;
  border-radius: 0.4rem;
  margin-bottom: 3.6rem;

  display: flex;
  align-items: center;
  overflow: hidden;

  ${InputElement} {
    height: 100%;
  }
`;

export const Button = styled.button`
  background: transparent;
  height: 100%;
  padding: 0 0.8rem;
  border-radius: 0.4rem;

  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.palette.yellow};
  }
`;
