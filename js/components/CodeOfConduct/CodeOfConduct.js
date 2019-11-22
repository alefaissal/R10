import React, {Component} from 'react';
import styles from './styles';
import {
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class CodeOfConduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.easeInEaseOut();
            this.setState({expanded: !this.state.expanded});
          }}>
          <Text style={styles.plusItems}>{this.props.title}</Text>
        </TouchableOpacity>
        {this.state.expanded && (
          <Text style={styles.plusDescription}>{this.props.description}</Text>
        )}
      </View>
    );
  }
}
