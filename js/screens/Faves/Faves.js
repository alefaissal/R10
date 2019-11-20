import React from 'react';
import {Text, Image, View} from 'react-native';
import styles from './styles';
import FavesContainer from './FavesContainer';

class Faves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <FavesContainer />;
  }
}

export default Faves;
