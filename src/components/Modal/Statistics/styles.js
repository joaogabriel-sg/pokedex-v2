import styled from 'styled-components';

export const Title = styled.h3`
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.palette.metalDark};
`;

export const Content = styled.div`
  margin-bottom: 3.2rem;
`;

export const Statistic = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr 5rem;
  align-items: center;
  gap: 0.8rem;

  & + & {
    margin-top: 1.6rem;
  }
`;

export const Data = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Bar = styled.div`
  position: relative;
  flex: 1;

  background: ${({ theme }) => theme.colors.secondary};
  height: 1.2rem;
  border-radius: 1.2rem;

  &:before {
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    background: ${({ theme }) => theme.colors.palette.yellow};
    width: ${({ value }) => `${value}%`};
    height: 100%;
    border-radius: 1.2rem;
  }
`;
