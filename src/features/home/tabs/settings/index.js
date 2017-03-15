import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar
} from 'react-native';

import * as colors from '../../../../common/colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationActions } from 'react-navigation';

class Settings extends Component {

  static navigationOptions = {
    title: 'Settings',
    header: {
      visible: false
    },
    // tabBar: {
    //   label: 'Lists',
    //   icon: (
    //     <Icon name="menu" size={27} color="#FFF" />
    //   )
    // }
  };

  render() {
    const resetWelcome = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Welcome'})
      ]
    });

    console.log(this.props);

    return (
      <View style={styles.container}>
        <StatusBar hidden={false} backgroundColor={colors.getList().statusBar} translucent={true} />
        <Text style={styles.welcome}>
          Settings
        </Text>

        <Button
          title="Logout"
          onPress={() => {
            // go to home and reset navigation stack
            // if you go back, exit the application !!
            this.props.navigation.dispatch(resetWelcome)
          }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Settings;