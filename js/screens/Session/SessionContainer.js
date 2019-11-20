import React, {Component} from 'react';
import {Text} from 'react-native';
import Session from './Session';

class SessionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Session navigation={this.props.navigation} />;
  }
}

export default SessionContainer;
