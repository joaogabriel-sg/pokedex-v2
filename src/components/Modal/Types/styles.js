import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 3.2rem;
`;

export const Type = styled.span`
  background: ${({ theme, color }) =>
    color || theme.colors.palette.asphaltDark};
  width: 8rem;

  padding: 0.6rem 0.4rem;
  border-radius: 0.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.palette.cloud};
`;
