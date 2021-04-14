import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { IoHeart } from 'react-icons/io5';

import Button from '../Button';
import Header from './Header';
import PokemonImages from './PokemonImages';
import Datas from './Datas';
import Types from './Types';
import Statistics from './Statistics';

import { Container, Content, Name } from './styles';

import { PokemonContext } from '../../contexts/PokemonContext';

const Modal = ({ closeModal, pokemon }) => {
  const {
    favoritedPokemons,
    favoriteThePokemonById,
    unfavoriteThePokemonById,
    loading,
  } = useContext(PokemonContext);

  function closeModalWhenClickOnShadow(e) {
    if (e.currentTarget === e.target) closeModal();
  }

  if (loading)
    return (
      <Container onClick={closeModalWhenClickOnShadow}>
        <Content>Loading</Content>
      </Container>
    );

  const { id, name, height, weight, sprites, types, stats } = pokemon;

  const isFavorited = favoritedPokemons.some(
    (favoritedPokemon) => favoritedPokemon.id === id,
  );

  const heightInMeters = `${height / 10}m`;
  const weightInKilograms = `${weight / 10}kg`;
  const datas = [heightInMeters, weightInKilograms];

  const frontSprite = sprites.front_default;
  const backSprite = sprites.back_default;

  return (
    <Container onClick={closeModalWhenClickOnShadow} isFavorited={isFavorited}>
      <Content>
        <Header closeModal={closeModal} />
        <Name>{name}</Name>
        <PokemonImages
          frontImage={frontSprite}
          backImage={backSprite}
          name={name}
        />
        <Datas datas={datas} />
        <Types types={types} />
        <Statistics stats={stats} />
        {isFavorited ? (
          <Button onClick={() => unfavoriteThePokemonById(id)}>
            Remove from favorites!
          </Button>
        ) : (
          <Button onClick={() => favoriteThePokemonById(id)}>
            <IoHeart size={24} /> Add to favorites!
          </Button>
        )}
      </Content>
    </Container>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    sprites: PropTypes.shape({
      front_default: PropTypes.string.isRequired,
      back_default: PropTypes.string.isRequired,
    }).isRequired,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    ).isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        base_stat: PropTypes.number.isRequired,
        stat: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default Modal;
