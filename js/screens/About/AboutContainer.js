import React, {Component} from 'react';
import {Text, Image, View} from 'react-native';
import About from './About';

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: 'About',
  };

  render() {
    return <About />;
  }
}

export default AboutContainer;
