import React, { useEffect, useState } from 'react';

import {
  Container,
  Content,
  Logo,
  Title,
  HeroContainer,
  Hero,
  Form,
} from './styles';
import logo from '../../assets/logo.svg';
import hero from '../../assets/hero.png';

import Head from '../../components/Head';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Redirect from '../../components/Redirect';

import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { error, login, hiddenErrorMessage } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmitForm(e) {
    e.preventDefault();
    login(email, password);
  }

  useEffect(() => {
    localStorage.removeItem('@pokemon:CURRENT_USER_ID');
  }, []);

  useEffect(() => {
    if (error.status) hiddenErrorMessage();
  }, [email, password]);

  return (
    <Container>
      <Content>
        <Head
          title="Login"
          description="Log in and find all your favorite Pokémons"
        />
        <Logo src={logo} alt="Pokémon Logo" />
        <Title>
          Find all your favorite <span>Pokémon</span>
        </Title>
        <Form onSubmit={handleSubmitForm}>
          <Input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <Input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          {error && error.status ? (
            <Button danger>{error.message}</Button>
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
