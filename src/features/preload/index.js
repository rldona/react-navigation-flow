import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  StatusBar,
  ActivityIndicator
} from 'react-native';

import { NavigationActions } from 'react-navigation';

import * as colors from '../../common/colors';

const resetHome = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'})
  ]
});

class Preload extends Component {

  static navigationOptions = {
    header: {
      visible: false
    }
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      loaded: false
    };
  }

  componentWillMount() {

    // preload all data from server (firebase, ...)

    // fake preload

    setTimeout(() => {
      this.setState({ loaded: true });
      this.props.navigation.dispatch(resetHome);
    }, 1500);

  }

  render() {

    const size = Platform.OS === 'ios' ? 1 : 50;

    return (
      <View style={styles.container}>

        <StatusBar hidden={false} backgroundColor={colors.getList().statusBar} translucent={true} />

        <View style={styles.alert}>
          <ActivityIndicator
            animating={true}
            size={size}
            color="#FFF" />
          <Text style={styles.alertText}>Cargando datos...</Text>
        </View>
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
  alert: {
    width: 200,
    borderRadius: 5,
    padding: 20,
    backgroundColor: '#444',
    elevation: 10
  },
  alertText: {
    marginTop: 20,
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default Preload;