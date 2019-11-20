import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';
import Schedule from './Schedule';

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Schedule navigation={this.props.navigation} />;
  }
}

export default ScheduleContainer;
