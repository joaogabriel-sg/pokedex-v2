import React from 'react';

import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';
import Cards from '../../components/Cards';
import PageSubtitle from '../../components/PageSubtitle';

import { Container } from './styles';

const Favorites = () => (
  <>
    <Menu />
    <Container>
      <PageTitle>Poké Favorites</PageTitle>
      <PageSubtitle>You have 2 favorite Pokémon!</PageSubtitle>
      <Cards datas={[]} />
    </Container>
  </>
);

export default Favorites;
