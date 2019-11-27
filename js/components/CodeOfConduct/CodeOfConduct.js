import React, { Component } from "react";
import styles from "./styles";
import {
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
  Animated
} from "react-native";
import PropTypes from "prop-types";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class CodeOfConduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      sign: true,
      rotationValue: new Animated.Value(0)
    };
  }

  render() {
    const spin = this.state.rotationValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            if (!this.state.expanded) {
              Animated.timing(this.state.rotationValue, {
                duration: 500,
                toValue: 1
              }).start(animation => {
                if (animation.finished) {
                  this.setState({ rotationValue: new Animated.Value(0) });
                  this.setState({ sign: !this.state.sign });
                }
              });
            } else {
              this.setState({ sign: !this.state.sign });
            }

            LayoutAnimation.easeInEaseOut();
            this.setState({ expanded: !this.state.expanded });
          }}
        >
          <View style={styles.flexSign}>
            <Animated.Text
              style={[styles.plusItems, { transform: [{ rotate: spin }] }]}
            >
              {this.state.sign ? "+" : "-"}
            </Animated.Text>

            <Text style={styles.plusItems}>{this.props.title}</Text>
          </View>
        </TouchableOpacity>
        {this.state.expanded && (
          <Text style={styles.plusDescription}>{this.props.description}</Text>
        )}
      </View>
    );
  }
}

CodeOfConduct.propTypes = {
  expanded: PropTypes.bool,
  sign: PropTypes.bool
};
