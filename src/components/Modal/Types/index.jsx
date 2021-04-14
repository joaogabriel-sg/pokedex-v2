import React from 'react';
import PropTypes from 'prop-types';

import pokeTypeColor from '../../../services/pokeTypeColor';

import { Container, Type } from './styles';

const Types = ({ types }) => (
  <Container>
    {types &&
      types.length &&
      types.map(({ type }) => (
        <Type key={type.name} color={pokeTypeColor[type.name]}>
          {type.name}
        </Type>
      ))}
  </Container>
);

Types.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default Types;
