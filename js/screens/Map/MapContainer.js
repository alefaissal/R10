import React, {Component} from 'react';
import {Text} from 'react-native';
import Map from './Map';

class MapContainer extends Component {
  static navigationOptions = {
    title: 'Map',
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Map />;
  }
}

export default MapContainer;