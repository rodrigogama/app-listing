import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import SearchPage from './pages/SearchPage';
import { GlobalStyles, theme } from './styles';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <SearchPage />
    </ThemeProvider>
  </Fragment>
);

export default App;
