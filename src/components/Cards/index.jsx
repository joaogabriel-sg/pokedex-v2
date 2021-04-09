import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Card from './Card';

const Cards = ({ datas }) => (
  <Container>
    {datas.length !== 0 &&
      datas.map(({ name, id, sprites, types }) => (
        <Card key={name} name={name} id={id} sprites={sprites} types={types} />
      ))}
  </Container>
);

Cards.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
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
    }).isRequired,
  ).isRequired,
};

export default Cards;
