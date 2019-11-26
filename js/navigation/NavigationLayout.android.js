import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, typography} from '../config/styles';
import {About, Faves, Map, Schedule, Session} from '../screens';
import {sharedNavigationOptions} from './config';

const {black, mediumGrey, white} = colors;

const AboutStack = createStackNavigator(
  {
    About,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

const FaveStack = createStackNavigator(
  {
    Faves,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

const MapStack = createStackNavigator(
  {
    Map,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

const ScheduleStack = createStackNavigator(
  {
    Schedule: Schedule,
    Session: Session,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

MapStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Icon name="md-map" size={25} color={tintColor} />
  ),
};
ScheduleStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Icon name="md-calendar" size={25} color={tintColor} />
  ),
};
FaveStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Icon name="md-heart" size={25} color={tintColor} />
  ),
};

AboutStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Icon name="md-information-circle" size={25} color={tintColor} />
  ),
};

// Dedicated stacks for Schedule, Map and Faves will go here too!
export default createDrawerNavigator(
  {
    //routeName
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FaveStack,
    About: AboutStack,
  },
  {
    tabBarOptions: {
      activeTintColor: white,
      inactiveTintColor: mediumGrey,
      labelStyle: {
        fontSize: 10,
        fontFamily: typography.fontMain,
      },
      tabStyle: {
        backgroundColor: black,
        height: 85,
        paddingBottom: 30,
      },
    },
    safeAreaInset: {
      bottom: 'always',
      top: 'never',
    },
  },
);
