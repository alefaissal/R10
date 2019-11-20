import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, typography} from '../config/styles';

const {black, mediumGrey, white} = colors;

import {About, Faves, Map, Schedule, Speaker, Session} from '../screens';
import {sharedNavigationOptions} from './config';

const AboutStack = createStackNavigator(
  {
    About,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'About',
      title: 'About',
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
      Faves: 'Faves',
      title: 'Faves',
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
      Map: 'Map',
      title: 'Map',
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
      Schedule: 'Schedule',
      title: 'Schedule',
    }),
  },
);

// Dedicated stacks for Schedule, Map and Faves will go here too!
export default createBottomTabNavigator(
  {
    //routeName
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FaveStack,
    About: AboutStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Schedule') {
          iconName = 'ios-calendar';
        } else if (routeName === 'Map') {
          iconName = 'ios-map';
        } else if (routeName === 'About') {
          iconName = 'ios-information-circle';
        } else if (routeName === 'Faves') {
          iconName = 'ios-heart';
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),

    tabBarOptions: {
      activeTintColor: white,
      inactiveTintColor: mediumGrey,
      labelStyle: {fontSize: 10, fontFamily: typography.fontMain},
      tabStyle: {backgroundColor: black},
    },
    safeAreaInset: {
      bottom: 'always',
      top: 'never',
    },
  },
);
