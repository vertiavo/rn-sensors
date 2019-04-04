import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import GeoLocationScreen from '../screens/GeoLocationScreen';
import Compass from '../screens/Compass';
import VelocityScreen from '../screens/VelocityScreen';

const GeoLocStack = createStackNavigator({
  GeoLoc: GeoLocationScreen,
});

GeoLocStack.navigationOptions = {
  tabBarLabel: 'Location',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? `ios-map` : 'md-map'
      }
    />
  ),
};

const CompassStack = createStackNavigator({
  Compass: Compass,
});

CompassStack.navigationOptions = {
  tabBarLabel: 'Compass',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-compass' : 'md-compass'}
    />
  ),
};

const VelocityStack = createStackNavigator({
  Velocity: VelocityScreen,
});

VelocityStack.navigationOptions = {
  tabBarLabel: 'Velocity',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-speedometer' : 'md-speedometer'}
    />
  ),
};

export default createBottomTabNavigator({
  GeoLocStack: GeoLocStack,
  CompassStack: CompassStack,
  VelocityStack: VelocityStack,
});
