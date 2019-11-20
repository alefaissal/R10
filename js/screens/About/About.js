import React from 'react';

import {Text, Image, View} from 'react-native';
import styles from './styles';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: 'About 123',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/r10_logo.png')}
          />
        </View>
        <Text>
          R10 is a conference that focus on just about nay topic related to dev.
        </Text>
        <Text>Date & Venue</Text>
        <Text>
          The R10 conference will take plavce on Friday, December 13, 2019,
          Vancouver, BC.
        </Text>
        <Text>Code of Conduct</Text>
      </View>
    );
  }
}

export default About;
