import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar,
  Text
} from 'react-native';

import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';

import Welcome from './src/features/welcome';
import Login from './src/features/login';
import Remember from './src/features/remember';
import Register from './src/features/register';

import Preload from './src/features/preload';

import Lists from './src/features/home/tabs/lists';
import Favorites from './src/features/home/tabs/favorites';
import Profile from './src/features/home/tabs/profile';
import Settings from './src/features/home/tabs/settings';

import Search from './src/features/search';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as colors from './src/common/colors';

let isLogin = true; // Firebase login

const TabsApps = TabNavigator(
  // scenes
  {
    Lists: { screen: Lists },
    Favorites: { screen: Favorites },
    Profile: { screen: Profile},
    Settings: { screen: Settings }
  },
  // options
  {
    tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: '#FFF',
      labelStyle: {
        fontSize: 12,
      },
      indicatorStyle: {
        borderWidth: 1,
        borderColor: '#FFF'
      },
      style: {
        paddingVertical: 5,
        backgroundColor: '#4CAF50',
      },
    },
    navigationOptions: {
      header: {
        visible: true,
        right: (
          <View style={{marginRight: 15}}>
            <Icon name="cached" size={30} color="#FFF" />
          </View>
        ),
        titleStyle: {
          color: '#FFF'
        },
        style: {
          paddingTop: 30,
          height: 80,
          backgroundColor: '#4CAF50',
          elevation: 0
        }
      }
    }
  }
);



const StackApp = StackNavigator(
  // scenes
  {
    Welcome: { screen: Welcome },
    Login: { screen: Login },
    Remember: { screen: Remember },
    Register: { screen: Register },
    Preload: { screen: Preload },
    Search: { screen: Search },
    Home: { screen: Lists }
  },
  // options
  {
    initialRouteName: isLogin ? 'Preload' : 'Welcome',
    navigationOptions: {
      mode: 'modal' // only iOS
    }
  }
);

const DrawerApp = DrawerNavigator(
  {
    Drawer: { screen: StackApp },
    // Lists: { screen: Lists },
    Favorites: { screen: Favorites },
    Profile: { screen: Profile},
    Settings: { screen: Settings }
  }
);

AppRegistry.registerComponent('ReactNavigationFlow', () => DrawerApp);
