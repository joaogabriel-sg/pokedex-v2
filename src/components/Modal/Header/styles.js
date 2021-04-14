import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding-bottom: 0.4rem;
  border-radius: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.palette.metalDark};
  margin-bottom: 3.2rem;

  color: ${({ theme }) => theme.colors.palette.metalDark};
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  color: inherit;
`;

export const Close = styled.button`
  background: transparent;
  color: inherit;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.palette.red};
  }
`;
