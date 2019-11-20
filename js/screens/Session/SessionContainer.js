import React, {Component} from 'react';
import {Text} from 'react-native';
import Session from './Session';
import {Query} from 'react-apollo';

class SessionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: 'Session',
  };
  render() {
    return <Session navigation={this.props.navigation} />;
  }
}

export default SessionContainer;
