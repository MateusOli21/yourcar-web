import '../styles/tailwind.css';
import 'tailwindcss/tailwind.css';

import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import { apolloClient } from '@providers/graphql';
import GlobalStyles from '@styles/globals';
import { theme } from '@styles/themes/main';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ApolloProvider>
  </ThemeProvider>
);

export default App;
