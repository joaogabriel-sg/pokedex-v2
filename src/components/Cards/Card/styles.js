import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  border-radius: 0.4rem;

  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.05);
`;

export const Image = styled.img`
  margin: 0 auto;
`;

export const Name = styled.h2`
  margin-bottom: 0.4rem;
  font-size: 2rem;
  text-transform: capitalize;
`;

export const Id = styled.h3`
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Types = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const Type = styled.span`
  background: ${({ theme, color }) =>
    color || theme.colors.palette.asphaltDark};
  padding: 0.2rem 0.4rem;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.palette.cloud};
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.palette.yellow};
  width: 100%;

  padding: 0.8rem;
  border-radius: 0.4rem;
  margin-top: 0.8rem;

  font-size: 1.4rem;
  font-weight: 500;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.75;
  }
`;
