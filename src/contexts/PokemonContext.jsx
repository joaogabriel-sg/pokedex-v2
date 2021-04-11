import React, { createContext, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import api from '../services/api';

export const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
  const [favoritedPokemons, setFavoritedPokemons] = useState([]);
  const [searchedPokemons, setSearchedPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getSearchedPokemon = useCallback(async (identifier) => {
    const { data: searchedPokemon } = await api.get(`pokemon/${identifier}`);

    setSearchedPokemons((oldSearchedPokemons) => {
      const isThisPokemonExistent = oldSearchedPokemons.some(
        (poke) =>
          Number(poke.id).toString() === identifier || poke.name === identifier,
      );

      if (isThisPokemonExistent) return oldSearchedPokemons;
      return [...oldSearchedPokemons, searchedPokemon];
    });
  });

  const unfavoriteThePokemonById = useCallback((id) => {
    setFavoritedPokemons((oldFavoritedPokemons) => {
      const newFavoritedPokemons = oldFavoritedPokemons.filter(
        (oldFavoritedPokemon) => oldFavoritedPokemon.id !== id,
      );
      return newFavoritedPokemons;
    });
  });

  const favoriteThePokemonById = useCallback(async (id) => {
    let favorite = allPokemons[id - 1];

    if (!favorite) {
      const { data: pokemonFavorited } = await api.get(`pokemon/${id}`);
      favorite = pokemonFavorited;
    }

    setFavoritedPokemons((oldFavoritedPokemons) => {
      const newFavoritedPokemons = [...oldFavoritedPokemons, favorite].sort(
        (a, b) => a.id - b.id,
      );
      return newFavoritedPokemons;
    });
  });

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
    <PokemonContext.Provider
      value={{
        allPokemons,
        searchedPokemons,
        favoritedPokemons,
        loading,
        error,
        getSearchedPokemon,
        favoriteThePokemonById,
        unfavoriteThePokemonById,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
