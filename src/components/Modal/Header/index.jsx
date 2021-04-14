import React from 'react';
import PropTypes from 'prop-types';
import { IoCloseOutline } from 'react-icons/io5';

import { Container, Title, Close } from './styles';

const Header = ({ closeModal }) => (
  <Container>
    <Title>Details</Title>
    <Close onClick={closeModal}>
      <IoCloseOutline size={24} />
    </Close>
  </Container>
);

Header.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Header;
