import React, { useContext } from 'react';

import { Container } from './styles';

import { PokemonContext } from '../../contexts/PokemonContext';

import Menu from '../../components/Menu';
import Cards from '../../components/Cards';
import PageTitle from '../../components/PageTitle';

const List = () => {
  const { allPokemons } = useContext(PokemonContext);

  return (
    <>
      <Menu />
      <Container>
        <PageTitle>Poké List</PageTitle>
        <Cards datas={allPokemons} />
      </Container>
    </>
  );
};

export default List;
