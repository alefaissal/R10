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
import {StatusBar} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';

class App extends React.Component {
  componentDidMount() {
    // SplashScreen.hide();
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <StatusBar barStyle="light-content" />
          <RootStackNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}

export default App;
