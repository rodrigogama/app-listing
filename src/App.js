import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { SearchProvider } from './context/SearchContext';
import SearchPage from './pages/SearchPage';
import { GlobalStyles, theme } from './styles';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <SearchProvider>
      <ThemeProvider theme={theme}>
        <Fragment>
          <SearchPage />
        </Fragment>
      </ThemeProvider>
    </SearchProvider>
  </Fragment>
);

export default App;
