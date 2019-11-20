import React from 'react';
import {Text, Image, View} from 'react-native';
import styles from './styles';
import MapContainer from './MapContainer';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <MapContainer />;
  }
}

export default Map;
