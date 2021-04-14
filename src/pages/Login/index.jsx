import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  Content,
  Logo,
  Title,
  HeroContainer,
  Hero,
  Form,
  InputGroup,
  ErrorMessage,
} from './styles';
import logo from '../../assets/logo.svg';
import hero from '../../assets/hero.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Redirect from '../../components/Redirect';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState({ status: false, message: '' });

  function isLoginEmailExistentInLocalStorage() {
    setLoginError({ status: false, message: '' });

    const localStorageUsersData =
      JSON.parse(localStorage.getItem('@pokemon:USERS_DATA')) || [];

    const getUserInLocalStorageByEmail = localStorageUsersData.find(
      (localStorageUserData) => localStorageUserData.email === email,
    );

    if (!getUserInLocalStorageByEmail) {
      setLoginError({ status: true, message: 'Wrong email' });
      return false;
    }

    if (password !== getUserInLocalStorageByEmail.password) {
      setLoginError({ status: true, message: 'Wrong password' });
      return false;
    }

    const { id } = getUserInLocalStorageByEmail;
    localStorage.setItem('@pokemon:CURRENT_USER_ID', id);
    return true;
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    if ([email, password].includes('')) {
      setLoginError({ status: true, message: 'Fill in all fields' });
    } else {
      const response = isLoginEmailExistentInLocalStorage();
      if (response) navigate('list');
    }
  }

  useEffect(() => {
    localStorage.removeItem('@pokemon:CURRENT_USER_ID');
  }, []);

  useEffect(() => {
    if (loginError) setLoginError({ status: false, message: '' });
  }, [email, password]);

  return (
    <Container>
      <Content>
        <Logo src={logo} alt="Pokémon Logo" />
        <Title>
          Find all your favorite <span>Pokémon</span>
        </Title>
        <Form onSubmit={handleSubmitForm}>
          <InputGroup>
            <Input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            {email.error && <ErrorMessage>{email.error}</ErrorMessage>}
          </InputGroup>
          <InputGroup>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            {password.error && <ErrorMessage>{password.error}</ErrorMessage>}
          </InputGroup>
          {loginError && loginError.status ? (
            <Button danger>{loginError.message}</Button>
          ) : (
            <Button>Catch all!</Button>
          )}
          <Redirect to="/signup">Create a new account</Redirect>
        </Form>
      </Content>
      <HeroContainer>
        <Hero src={hero} alt="Pikachu" />
      </HeroContainer>
    </Container>
  );
};
export default Login;
