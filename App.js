import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import homescreen from './components/homescreen';
import second_screen from './components/second_screen';
import tell_me from './components/tell_me';
import behaviour from './components/behaviour';
import feel from './components/feel'
import toolKit from './components/toolKit';
import emergency from './components/emergency';
import day from './components/day';
import week from './components/week';
import year from './components/year';



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
  },
  tell_me: {
    screen: tell_me,
    navigationOptions: {
      header: null,
    }
  },
  behaviour: {
    screen: behaviour,
    navigationOptions: {
      header: null,
    }
  },
  feeling :{
    screen:feel,
    navigationOptions: {
      header: null,
    }
  },
  ToolKit :{
    screen:toolKit,
    navigationOptions: {
      header: null,
    }
  },
  emergency: { 
    screen: emergency,
    navigationOptions: {
      header: null,
    }
},
Day:{
  screen:day,
  navigationOptions:{
    header:null
  }
},
Week:{
  screen:week,
  navigationOptions:{
    header:null
  }
},
Year:{
  screen:year,
  navigationOptions:{
    header:null
  }
}

});

const AppContainer = createAppContainer(AppNavigator);
