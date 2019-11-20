import React from 'react';
import {Text, Image, View} from 'react-native';
import styles from './styles';
import SpeakerContainer from './SpeakerContainer';

class Speaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <SpeakerContainer />;
  }
}

export default Speaker;
