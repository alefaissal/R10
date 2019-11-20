import React, {Component} from 'react';
import Faves from './Faves';
import {Text} from 'react-native';

class FavesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: 'Faves',
  };
  render() {
    return <Faves />;
  }
}

export default FavesContainer;
