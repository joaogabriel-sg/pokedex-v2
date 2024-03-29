import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonContext } from '../contexts/PokemonContext';

const useAuth = () => {
  const navigate = useNavigate();
  const {
    updateFavoritedPokemonsByUserId,
    clearPokemonContextDatas,
  } = useContext(PokemonContext);
  const [isLogged, setIsLogged] = useState(false);
  const [hash, setHash] = useState('');
  const [error, setError] = useState({ status: false, message: '' });

  function showErrorMessage(message) {
    setError({ status: true, message: message });
    return false;
  }

  function hiddenErrorMessage() {
    setError({ status: false, message: '' });
  }

  function login(email, password) {
    hiddenErrorMessage();
    setIsLogged(false);

    if ([email, password].includes(''))
      return showErrorMessage('Fill in all fields');

    const localStorageUsersData =
      JSON.parse(localStorage.getItem('@pokemon:USERS_DATA')) || [];

    const getUserInLocalStorageByEmail = localStorageUsersData.find(
      (localStorageUserData) => localStorageUserData.email === email,
    );

    if (!getUserInLocalStorageByEmail) return showErrorMessage('Wrong email');

    if (password !== getUserInLocalStorageByEmail.password)
      return showErrorMessage('Wrong password');

    localStorage.setItem(
      '@pokemon:CURRENT_USER_ID',
      getUserInLocalStorageByEmail.id,
    );

    setIsLogged(true);
    updateFavoritedPokemonsByUserId(getUserInLocalStorageByEmail.id);
    setHash(getUserInLocalStorageByEmail.id);
    navigate('/list');
    return true;
  }

  function logout() {
    localStorage.removeItem('@pokemon:CURRENT_USER_ID');
    setIsLogged(false);
    navigate('/');
    clearPokemonContextDatas();
  }

  return { hash, isLogged, error, login, logout, hiddenErrorMessage };
};

export default useAuth;
