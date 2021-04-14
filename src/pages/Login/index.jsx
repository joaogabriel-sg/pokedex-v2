import React from 'react';
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

import useForm from '../../hooks/useForm';
import Redirect from '../../components/Redirect';

const Login = () => {
  const navigate = useNavigate();

  const email = useForm('email');
  const password = useForm('password');

  function handleSubmitForm(e) {
    e.preventDefault();

    const validations = [email.validate(), password.validate()];
    const areTheFieldsValid = validations.every((validation) => validation);

    if (areTheFieldsValid) navigate('list');
  }

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
              value={email.value}
              onChange={email.onChange}
              onBlur={email.onBlur}
            />
            {email.error && <ErrorMessage>{email.error}</ErrorMessage>}
          </InputGroup>
          <InputGroup>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              value={password.value}
              onChange={password.onChange}
              onBlur={password.onBlur}
            />
            {password.error && <ErrorMessage>{password.error}</ErrorMessage>}
          </InputGroup>
          <Button>Catch all!</Button>
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
