import React from 'react';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import { light } from './styles/themes';
import GlobalStyle from './styles/global';

import { PokemonProvider } from './contexts/PokemonContext';
import { ModalProvider } from './contexts/ModalContext';

const App = () => (
  <ThemeProvider theme={light}>
    <PokemonProvider>
      <ModalProvider>
        <BrowserRouter>
          <GlobalStyle />
          <AppRoutes />
        </BrowserRouter>
      </ModalProvider>
    </PokemonProvider>
  </ThemeProvider>
);

export default App;
