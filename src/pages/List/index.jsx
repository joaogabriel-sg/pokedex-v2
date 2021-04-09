import React, { useContext } from 'react';

import { Container, Title } from './styles';

import { PokemonContext } from '../../contexts/PokemonContext';

import Menu from '../../components/Menu';
import Cards from '../../components/Cards';

const List = () => {
  const { allPokemons } = useContext(PokemonContext);

  return (
    <>
      <Menu />
      <Container>
        <Title>Poké List</Title>
        <Cards datas={allPokemons} />
      </Container>
    </>
  );
};

export default List;
