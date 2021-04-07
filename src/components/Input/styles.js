import styled from 'styled-components';

export const InputElement = styled.input`
  width: 100%;

  padding: 1.6rem;
  border: 0.2rem solid transparent;
  border-radius: 0.4rem;

  font-size: 1.8rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.palette.yellow};
  }
`;
