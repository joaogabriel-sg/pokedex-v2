import React, { useContext } from 'react';

import { Container, Title } from './styles';
import { PokemonContext } from '../../contexts/PokemonContext';

import Menu from '../../components/Menu';
import Cards from '../../components/Cards';
import Form from './Form';

const Search = () => {
  const { searchedPokemons } = useContext(PokemonContext);

  return (
    <>
      <Menu />
      <Container>
        <Title>Poké Search</Title>
        <Form />
        {searchedPokemons.length > 0 && <Cards datas={searchedPokemons} />}
      </Container>
    </>
  );
};

export default Search;
