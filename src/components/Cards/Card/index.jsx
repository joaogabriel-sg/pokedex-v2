import React from 'react';
import PropTypes from 'prop-types';

import pokeTypeColor from '../../../services/pokeTypeColor';

import { Container, Image, Name, Id, Types, Type, Button } from './styles';

const Card = ({ name, id, sprites, types }) => (
  <Container>
    <Image src={sprites.front_default} alt={name} />
    <Name>{name}</Name>
    <Id>id: {id}</Id>
    {types.length !== 0 && (
      <Types>
        {types.map(({ type }) => (
          <Type key={type.name} color={pokeTypeColor[type.name]}>
            {type.name}
          </Type>
        ))}
      </Types>
    )}
    <Button type="button">Ver detalhes</Button>
  </Container>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sprites: PropTypes.shape({
    front_default: PropTypes.string.isRequired,
  }).isRequired,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default Card;
