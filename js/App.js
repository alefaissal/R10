/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';
import FavesProvider from './context/FavesContext';
import RootStackNavigator from './navigation/RootStackNavigator';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <RootStackNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}

export default App;
