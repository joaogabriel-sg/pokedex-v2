import styled from 'styled-components';

export const Line = styled.div`
  background: ${({ theme }) => theme.colors.text};
  width: 100%;
  height: 2px;
  border-radius: 2px;
  transition: all 0.3s;

  &:nth-child(1) {
    transform: translateY(-6px);
  }
  &:nth-child(3) {
    transform: translateY(6px);
  }
`;

export const Button = styled.button`
  display: none;
  justify-self: center;

  background: transparent;
  width: 30px;
  height: 20px;

  @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
    display: block;
  }

  &.active {
      ${Line}:nth-child(1) {
        transform: translateY(2px) rotate(45deg);
      }
      ${Line}:nth-child(2) {
        transform: translateX(-100%);
        opacity: 0;
        visibility: hidden;
      }
      ${Line}:nth-child(3) {
        transform: translateY(-2px) rotate(-45deg);
      }
    }
  }
`;
