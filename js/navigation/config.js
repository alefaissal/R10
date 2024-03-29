import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import {colors, typography} from '../config/styles';

const GradientHeader = props => (
  <View style={{backgroundColor: colors.white, overflow: 'hidden'}}>
    <LinearGradient
      colors={[colors.red, colors.purple]}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      style={[StyleSheet.absoluteFill, {height: 120, width: '100%'}]}
    />
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  //TODO could change null for 'back'
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTitleStyle: {
    color: colors.white,
    fontFamily: typography.fontMain,
  },
  headerTintColor: colors.white,

  headerLeft: Platform.OS !== 'ios' &&
    navigation.state.routeName !== 'Session' && (
      <View style={{paddingLeft: 16}}>
        <Icon
          name="md-menu"
          size={30}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
    ),
});
