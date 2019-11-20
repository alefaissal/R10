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

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RouteStackNavigator from './navigation/RootStackNavigator';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RouteStackNavigator />
      </ApolloProvider>
    );
  }
}

export default App;
