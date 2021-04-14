import React from 'react';
import PropTypes from 'prop-types';

import { Container, ImageContainer } from './styles';

const PokemonImages = ({ frontImage, backImage, name }) => (
  <Container>
    {frontImage && (
      <ImageContainer key={frontImage}>
        <img src={frontImage} alt={name} />
      </ImageContainer>
    )}
    {backImage && (
      <ImageContainer key={backImage}>
        <img src={backImage} alt={name} />
      </ImageContainer>
    )}
  </Container>
);

PokemonImages.propTypes = {
  frontImage: PropTypes.string.isRequired,
  backImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PokemonImages;
