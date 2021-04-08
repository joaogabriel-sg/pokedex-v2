import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  width: 9rem;
  padding: 0.4rem 1.2rem;

  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 0.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.6rem;
  font-weight: 500;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  svg {
    width: auto;
    height: 2.4rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
    width: auto;
    border: 0;
    padding: 0;
    justify-self: flex-end;

    &:hover {
      background: none;
    }

    svg {
      width: auto;
      height: 4rem;
    }
  }
`;

export const Text = styled.span`
  @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
    display: none;
  }
`;
