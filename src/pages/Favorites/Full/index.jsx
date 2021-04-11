import React, { useContext } from 'react';

import Cards from '../../../components/Cards';
import PageSubtitle from '../../../components/PageSubtitle';

import { PokemonContext } from '../../../contexts/PokemonContext';

const Full = () => {
  const { favoritedPokemons } = useContext(PokemonContext);

  return (
    <>
      <PageSubtitle>
        You have {favoritedPokemons.length} favorite Pokémon!
      </PageSubtitle>
      <Cards datas={favoritedPokemons} />
    </>
  );
};

export default Full;
