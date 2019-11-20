import React, {Component} from 'react';
import Speaker from './Speaker';

class SpeakerContainer extends Component {
  static navigationOptions = {
    title: 'Speaker',
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Speaker />;
  }
}

export default SpeakerContainer;
