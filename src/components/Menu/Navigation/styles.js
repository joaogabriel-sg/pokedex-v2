import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  height: 100%;

  @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
    position: fixed;
    top: -100%;
    left: 0;
    right: 0;
    z-index: 99;

    background: ${({ theme }) => theme.colors.palette.yellow};
    width: 100%;
    height: calc(100% - 8rem);

    display: flex;
    justify-content: center;

    transition: top 0.6s;

    &.active {
      top: 0;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  height: 100%;

  @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 6.4rem;
    width: 60%;
  }
`;

export const Item = styled(NavLink)`
  position: relative;
  height: 100%;

  display: flex;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 500;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;

    background: transparent;
    width: 100%;
    height: 2px;
    border-radius: 0.4rem;

    transition: background 0.3s;
  }

  &:hover,
  &.active {
    &::after {
      background: ${({ theme }) => theme.colors.text};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
    font-size: 3.2rem;

    &::after {
      display: none;
    }
  }
`;
