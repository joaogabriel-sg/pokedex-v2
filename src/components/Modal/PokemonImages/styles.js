import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.6rem;
`;

export const ImageContainer = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 0.4rem;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.05);
`;
