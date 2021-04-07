import React from 'react';

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

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => (
  <Container>
    <Content>
      <Logo src={logo} alt="Pokémon Logo" />
      <Title>
        Find all your favorite <span>Pokémon</span>
      </Title>
      <Form>
        <Input type="email" id="email" placeholder="Email" />
        <Input type="password" id="password" placeholder="Password" />
        <Button>Catch all!</Button>
      </Form>
    </Content>
    <HeroContainer>
      <Hero src={hero} alt="Pikachu" />
    </HeroContainer>
  </Container>
);

export default Login;
