import React from 'react';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import { light } from './styles/themes';
import GlobalStyle from './styles/global';

import { PokemonProvider } from './contexts/PokemonContext';

const App = () => (
  <ThemeProvider theme={light}>
    <PokemonProvider>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
    </PokemonProvider>
  </ThemeProvider>
);

export default App;
