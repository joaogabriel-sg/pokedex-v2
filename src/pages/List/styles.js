import styled from 'styled-components';

export const Container = styled.main`
  min-height: calc(100vh + 5rem);
  max-width: 128rem;
  padding: 4.8rem 1%;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
    padding: 2.4rem 1% 12.8rem;
  }
`;

export const Title = styled.h1`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
    display: block;
    margin-bottom: 2.4rem;

    font-size: 3.6rem;
    text-align: center;
  }
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  justify-content: center;
  gap: 2rem;
`;

export const Card = styled.div`
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
  background: ${({ theme }) => theme.colors.palette.red};
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

  &:hover {
    opacity: 0.8;
  }
`;
