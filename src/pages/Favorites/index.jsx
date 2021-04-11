import React, { useContext } from 'react';

import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';
import Cards from '../../components/Cards';
import PageSubtitle from '../../components/PageSubtitle';

import { Container } from './styles';
import { PokemonContext } from '../../contexts/PokemonContext';

const Favorites = () => {
  const { favoritedPokemons } = useContext(PokemonContext);

  return (
    <>
      <Menu />
      <Container>
        <PageTitle>Poké Favorites</PageTitle>
        <PageSubtitle>
          You have {favoritedPokemons.length} favorite Pokémon!
        </PageSubtitle>
        {favoritedPokemons.length > 0 && <Cards datas={favoritedPokemons} />}
      </Container>
    </>
  );
};

export default Favorites;
