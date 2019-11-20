import React from 'react';
import {Text, Image, View} from 'react-native';
import styles from './styles';
import SessionContainer from './SessionContainer';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <SessionContainer navigation={this.props.navigation} />;
  }
}

export default Session;
