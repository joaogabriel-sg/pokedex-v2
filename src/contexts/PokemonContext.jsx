import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import api from '../services/api';

export const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(async () => {
    try {
      setLoading(true);
      setError(false);

      const { data: allPokemonsApi } = await api.get(
        'pokemon/?offset=0&limit=150',
      );

      const allPokeDatas = [];
      allPokemonsApi.results.forEach(async ({ name }, index) => {
        try {
          const { data: pokemonApi } = await api.get(`pokemon/${name}`);
          allPokeDatas[index] = pokemonApi;
        } catch (err) {
          setError(true);
        }
      });

      setAllPokemons(allPokeDatas);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <PokemonContext.Provider value={{ allPokemons, loading, error }}>
      {children}
    </PokemonContext.Provider>
  );
};

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
