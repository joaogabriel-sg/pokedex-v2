import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 128rem;
  min-height: 100vh;

  padding: 0 1%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 40rem 1fr;

  @media screen and (max-width: ${({ theme }) => theme.devices.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.devices.tablet}) {
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 20rem;
  margin-bottom: 4.8rem;
`;

export const Title = styled.h1`
  width: 24rem;

  font-size: 5.2rem;
  font-weight: 400;
  line-height: 1.1;

  span {
    font-weight: 700;
  }

  @media screen and (max-width: ${({ theme }) => theme.devices.tablet}) {
    width: 100%;
    text-align: center;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 2.8rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InputGroup = styled.div``;

export const ErrorMessage = styled.span`
  display: block;
  margin-top: 0.4rem;

  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.palette.red};
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.devices.tablet}) {
    display: none;
  }
`;

export const Hero = styled.img``;
