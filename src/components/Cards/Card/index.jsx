import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IoHeartOutline } from 'react-icons/io5';

import pokeTypeColor from '../../../services/pokeTypeColor';

import {
  Container,
  Favorite,
  Image,
  Name,
  Id,
  Types,
  Type,
  Button,
} from './styles';

import { PokemonContext } from '../../../contexts/PokemonContext';
import { ModalContext } from '../../../contexts/ModalContext';

const Card = ({ name, id, sprites, types }) => {
  const {
    favoritedPokemons,
    favoriteThePokemonById,
    unfavoriteThePokemonById,
    insertPokemonInModalById,
  } = useContext(PokemonContext);

  const { changeModalVisibility } = useContext(ModalContext);

  const [favorited, setFavorited] = useState(false);

  function seePokemonDetails() {
    changeModalVisibility();
    insertPokemonInModalById(id);
  }

  function handleClickFavorite() {
    if (favorited) {
      setFavorited(false);
      unfavoriteThePokemonById(id);
    } else {
      setFavorited(true);
      favoriteThePokemonById(id);
    }
  }

  useEffect(() => {
    setFavorited(() =>
      favoritedPokemons.some((favoritedPokemon) => favoritedPokemon.id === id),
    );
  }, [favoritedPokemons]);

  return (
    <Container>
      <Favorite
        className={favorited ? 'active' : ''}
        onClick={handleClickFavorite}
      >
        <IoHeartOutline size={32} />
      </Favorite>
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
      <Button type="button" onClick={seePokemonDetails}>
        Ver detalhes
      </Button>
    </Container>
  );
};

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
