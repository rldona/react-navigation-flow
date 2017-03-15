import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import * as colors from '../../../../common/colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Favorites extends Component {

  static navigationOptions = {
    title: 'Favorites',
    header: {
      visible: true
    },
    // tabBar: {
    //   label: 'Lists',
    //   icon: (
    //     <Icon name="menu" size={27} color="#FFF" />
    //   )
    // }
  };

  render() {
    const { navigate } = this.props.navigation;

    console.log(this.props);

    return (
      <View style={styles.container}>
        <StatusBar hidden={false} backgroundColor={colors.getList().statusBar} translucent={true} />
        <Text style={styles.welcome}>
          Favorites
        </Text>
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

export default Favorites;