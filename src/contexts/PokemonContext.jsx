import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const PokemonContext = createContext({});

const allPokemons = [
  {
    name: 'bulbasaur',
    id: 1,
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    types: [
      {
        type: {
          name: 'grass',
        },
      },
      {
        type: {
          name: 'poison',
        },
      },
    ],
  },
  {
    name: 'ivysaur',
    id: 2,
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    },
    types: [
      {
        type: {
          name: 'grass',
        },
      },
      {
        type: {
          name: 'poison',
        },
      },
    ],
  },
  {
    name: 'venusaur',
    id: 3,
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    },
    types: [
      {
        type: {
          name: 'grass',
        },
      },
      {
        type: {
          name: 'poison',
        },
      },
    ],
  },
  {
    name: 'charmander',
    id: 4,
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    types: [
      {
        type: {
          name: 'fire',
        },
      },
    ],
  },
  {
    name: 'charmeleon',
    id: 5,
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    },
    types: [
      {
        type: {
          name: 'fire',
        },
      },
    ],
  },
  {
    name: 'charizard',
    id: 6,
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    },
    types: [
      {
        type: {
          name: 'fire',
        },
      },
      {
        type: {
          name: 'flying',
        },
      },
    ],
  },
  {
    name: 'squirtle',
    id: 7,
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    types: [
      {
        type: {
          name: 'water',
        },
      },
    ],
  },
  {
    name: 'wartortle',
    id: 8,
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    },
    types: [
      {
        type: {
          name: 'water',
        },
      },
    ],
  },
  {
    name: 'blastoise',
    id: 9,
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    },
    types: [
      {
        type: {
          name: 'water',
        },
      },
    ],
  },
];

export const PokemonProvider = ({ children }) => (
  <PokemonContext.Provider value={{ allPokemons }}>
    {children}
  </PokemonContext.Provider>
);

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
