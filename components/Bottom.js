

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import homescreen from './homescreen';
import { Ionicons } from '@expo/vector-icons';


const NavStack = createBottomTabNavigator({
    ScreenOne: { 
        screen: homescreen,
        navigationOptions: {
            tabBarLabel: 'Home', 
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-home" color={tintColor} size={25}  />
            ),
            tabBarOptions: { 
                activeTintColor:'red',
                style: {
                    borderTopWidth: 0,
                    backgroundColor: 'transparent',
                }
            }
        },
    },
    ScreenTwo: { 
        screen: homescreen,
        navigationOptions: {
            tabBarLabel: 'Home', 
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-home" color={tintColor} size={25}  />
            ),
            tabBarOptions: { 
                activeTintColor:'red',
                style: {
                    borderTopWidth: 0,
                    backgroundColor: 'transparent',
                }
            }
        },
    },
    Screenthree: { 
        screen: homescreen,
        navigationOptions: {
            tabBarLabel: 'Home', 
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-home" color={tintColor} size={25}  />
            ),
            tabBarOptions: { 
                activeTintColor:'red',
                style: {
                    borderTopWidth: 0,
                    backgroundColor: 'transparent',
                }
            }
        },
    },
    Screenfour: { 
        screen: homescreen,
        navigationOptions: {
            tabBarLabel: 'Home', 
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-home" color={tintColor} size={25}  />
            ),
            tabBarOptions: { 
                activeTintColor:'red',
                style: {
                    borderTopWidth: 0,
                    backgroundColor: 'transparent',
                }
            }
        },
    }
    
});

const Bottom = createAppContainer(NavStack);

export default Bottom;

