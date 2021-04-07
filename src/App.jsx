import React from 'react';
import { ThemeProvider } from 'styled-components';

import { light } from './styles/themes';
import GlobalStyle from './styles/global';

const App = () => (
  <ThemeProvider theme={light}>
    <GlobalStyle />
    <div>
      <h1>Hello World!</h1>
    </div>
  </ThemeProvider>
);

export default App;
