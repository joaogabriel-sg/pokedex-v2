import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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

import useForm from '../../hooks/useForm';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
  const { login } = useAuth();
  const email = useForm('email');
  const password = useForm('password');
  const [signUpError, setSignUpError] = useState(false);

  function signUpIntoSystem() {
    setSignUpError(false);

    const localStorageUsersData =
      JSON.parse(localStorage.getItem('@pokemon:USERS_DATA')) || [];

    const isThisEmailExistent = localStorageUsersData.some(
      (localStorageUserData) => localStorageUserData.email === email.value,
    );

    if (isThisEmailExistent) {
      setSignUpError(true);
      return false;
    }

    const newUser = {
      id: uuidv4(),
      email: email.value,
      password: password.value,
    };
    const newLocalStorageUsersData = [...localStorageUsersData, newUser];

    localStorage.setItem(
      '@pokemon:USERS_DATA',
      JSON.stringify(newLocalStorageUsersData),
    );

    setSignUpError(false);
    return true;
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    const validations = [email.validate(), password.validate()];
    const areTheFieldsValid = validations.every((validation) => validation);

    if (areTheFieldsValid) {
      const isSignUpValid = signUpIntoSystem();
      if (isSignUpValid) login(email.value, password.value);
    }
  }

  function handleVerifyEmail({ target }) {
    if (signUpError) setSignUpError(false);
    email.onChange({ target });
  }

  return (
    <Container>
      <Content>
        <Logo src={logo} alt="Pokémon Logo" />
        <Title>Sign up and embark on this adventure</Title>
        <Form onSubmit={handleSubmitForm}>
          <InputGroup>
            <Input
              type="text"
              id="email"
              placeholder="Email"
              value={email.value}
              onChange={handleVerifyEmail}
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
          {signUpError ? (
            <Button danger>Ops, this email is existent!</Button>
          ) : (
            <Button>Ready to catch all?</Button>
          )}
          <Redirect to="/">Do you have an account?</Redirect>
        </Form>
      </Content>
      <HeroContainer>
        <Hero src={hero} alt="Pikachu" />
      </HeroContainer>
    </Container>
  );
};
export default SignUp;
