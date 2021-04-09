import React from 'react';

import {
  Container,
  Title,
  Content,
  Card,
  Image,
  Name,
  Id,
  Types,
  Type,
  Button,
} from './styles';

import Menu from '../../components/Menu';

const List = () => (
  <>
    <Menu />
    <Container>
      <Title>Poké List</Title>
      <Content>
        <Card>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Bulba"
          />
          <Name>Bulbasaur</Name>
          <Id>id: 1</Id>
          <Types>
            <Type>grass</Type>
            <Type>poison</Type>
          </Types>
          <Button type="button">Ver detalhes</Button>
        </Card>
        <Card>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
            alt="Bulba"
          />
          <Name>Ivysaur</Name>
          <Id>id: 2</Id>
          <Types>
            <Type>grass</Type>
            <Type>poison</Type>
          </Types>
          <Button type="button">Ver detalhes</Button>
        </Card>
        <Card>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
            alt="Bulba"
          />
          <Name>Venusaur</Name>
          <Id>id: 3</Id>
          <Types>
            <Type>grass</Type>
            <Type>poison</Type>
          </Types>
          <Button type="button">Ver detalhes</Button>
        </Card>
        <Card>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
            alt="Bulba"
          />
          <Name>Charmander</Name>
          <Id>id: 4</Id>
          <Types>
            <Type>fire</Type>
          </Types>
          <Button type="button">Ver detalhes</Button>
        </Card>
        <Card>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
            alt="Bulba"
          />
          <Name>Charmeleon</Name>
          <Id>id: 5</Id>
          <Types>
            <Type>fire</Type>
          </Types>
          <Button type="button">Ver detalhes</Button>
        </Card>
        <Card>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
            alt="Bulba"
          />
          <Name>Charizard</Name>
          <Id>id: 6</Id>
          <Types>
            <Type>fire</Type>
            <Type>flying</Type>
          </Types>
          <Button type="button">Ver detalhes</Button>
        </Card>
      </Content>
    </Container>
  </>
);

export default List;
