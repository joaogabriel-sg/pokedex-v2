import React from 'react';

import Button from '../../../components/Button';
import PageSubtitle from '../../../components/PageSubtitle';

import { Container } from './styles';

const Empty = () => (
  <Container>
    <PageSubtitle>
      Look for Pokémons to add them to your favorites.
    </PageSubtitle>
    <Button to="/search">Catch all!</Button>
  </Container>
);

export default Empty;
