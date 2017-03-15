import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Button,
  Dimensions
} from 'react-native';

import * as colors from '../../../../common/colors';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../../../common/header';

const { width, height } = Dimensions.get('window');

class Lists extends Component {

  static navigationOptions = {
    title: 'Superapp',
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

  _onActionSelected = (action) => {
    switch (action) {
      case 'left':
        this.props.navigation.navigate('DrawerOpen');
        break;
      case 'right':
        this.props.navigation.navigate('Search');
        break;
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    console.log(this.props);

    return (
      <View style={styles.container}>

        <StatusBar hidden={false} backgroundColor={colors.getList().statusBar} translucent={true} />

        <Header
          isTransparent={false}
          title="SuperApp"
          actions={{ left: { icon: 'menu' }, right: { icon: 'search' } }}
          onActionSelected={this._onActionSelected.bind(this)} />

        <View style={{height: height}}>
          <Text>Search</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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

export default Lists;