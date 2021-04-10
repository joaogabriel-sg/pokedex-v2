import React, { useContext } from 'react';

import { Container } from './styles';
import { PokemonContext } from '../../contexts/PokemonContext';

import Menu from '../../components/Menu';
import Cards from '../../components/Cards';
import PageTitle from '../../components/PageTitle';
import Form from './Form';

const Search = () => {
  const { searchedPokemons } = useContext(PokemonContext);

  return (
    <>
      <Menu />
      <Container>
        <PageTitle>Poké Search</PageTitle>
        <Form />
        {searchedPokemons.length > 0 && <Cards datas={searchedPokemons} />}
      </Container>
    </>
  );
};

export default Search;
