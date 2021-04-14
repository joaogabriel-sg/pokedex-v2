import React, { createContext, useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '../components/Modal';
import { PokemonContext } from './PokemonContext';

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const { pokemonInModal } = useContext(PokemonContext);
  const [isActive, setIsActive] = useState(false);

  const closeModal = useCallback(() => {
    setIsActive(false);
  });

  const changeModalVisibility = useCallback(() => {
    setIsActive((oldIsActive) => !oldIsActive);
  });

  return (
    <ModalContext.Provider
      value={{ isActive, changeModalVisibility, closeModal }}
    >
      {children}
      {isActive && <Modal closeModal={closeModal} pokemon={pokemonInModal} />}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
