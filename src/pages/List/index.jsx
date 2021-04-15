import React, { useContext } from 'react';

import { Container } from './styles';

import { PokemonContext } from '../../contexts/PokemonContext';

import Head from '../../components/Head';
import Menu from '../../components/Menu';
import Cards from '../../components/Cards';
import PageTitle from '../../components/PageTitle';

const List = () => {
  const { allPokemons } = useContext(PokemonContext);

  return (
    <>
      <Menu />
      <Container>
        <Head title="Poké List" description="List of all 150 Pokémons" />
        <PageTitle>Poké List</PageTitle>
        <Cards datas={allPokemons} />
      </Container>
    </>
  );
};

export default List;
