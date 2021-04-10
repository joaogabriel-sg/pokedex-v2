import React, { useContext } from 'react';
import { IoSearch } from 'react-icons/io5';

import { FormContainer, Button } from './styles';

import { PokemonContext } from '../../../contexts/PokemonContext';

import Input from '../../../components/Input';
import useForm from '../../../hooks/useForm';

const Form = () => {
  const { getSearchedPokemon } = useContext(PokemonContext);
  const searchedPokemon = useForm();

  function handleSubmitForm(e) {
    e.preventDefault();

    if (searchedPokemon.value) {
      getSearchedPokemon(searchedPokemon.value);
      searchedPokemon.setValue('');
    }
  }

  return (
    <FormContainer onSubmit={handleSubmitForm}>
      <Input
        type="text"
        id="searched"
        placeholder="Search Pokémon by id or name"
        value={searchedPokemon.value}
        onChange={searchedPokemon.onChange}
        onBlur={searchedPokemon.onBlur}
      />
      <Button type="submit">
        <IoSearch size={32} />
      </Button>
    </FormContainer>
  );
};

export default Form;
