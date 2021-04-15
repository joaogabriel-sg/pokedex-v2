import React, { useContext } from 'react';

import Head from '../../components/Head';
import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';
import Empty from './Empty';
import Full from './Full';

import { Container } from './styles';

import { PokemonContext } from '../../contexts/PokemonContext';

const Favorites = () => {
  const { favoritedPokemons } = useContext(PokemonContext);

  return (
    <>
      <Menu />
      <Container>
        <Head
          title="Poké Favorites"
          description="List of all your favorite Pokémons"
        />
        <PageTitle>Poké Favorites</PageTitle>
        {favoritedPokemons.length ? <Full /> : <Empty />}
      </Container>
    </>
  );
};

export default Favorites;
