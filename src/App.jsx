import React from 'react';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import { light } from './styles/themes';
import GlobalStyle from './styles/global';

const App = () => (
  <ThemeProvider theme={light}>
    <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
