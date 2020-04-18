import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import homescreen from './components/homescreen';
import second_screen from './components/second_screen';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: homescreen,
    navigationOptions: {
      header: null,
    }
  },
  second_page: {
    screen: second_screen,
    navigationOptions: {
      header: null,
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);