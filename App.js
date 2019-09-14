import React from 'react';
import {SafeAreaView, createAppContainer} from 'react-navigation';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from 'react-navigation-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import Nav1Screen from './src/screens/TopTabScreens/Nav1Screen';
import Nav2Screen from './src/screens/TopTabScreens/Nav2Screen';

const SafeAreaMaterialTopTabBar = ({...props}) => (
  <SafeAreaView>
    <MaterialTopTabBar {...props} />
  </SafeAreaView>
);

const options = {
  tabBarComponent: props => <SafeAreaMaterialTopTabBar {...props} />,
};

const TopTabNavigator = createMaterialTopTabNavigator(
  {
    Nav1: Nav1Screen,
    Nav2: Nav2Screen,
  },
  options,
);

const BottomTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  TopTabs: TopTabNavigator,
});

export default createAppContainer(BottomTabNavigator);
