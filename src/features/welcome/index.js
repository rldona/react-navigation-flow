import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class Welcome extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome
        </Text>
        <Button
          onPress={() => navigate('Login')}
          title="Login"
        />
        <Button
          onPress={() => navigate('Register')}
          title="Register"
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

export default Welcome;