import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';

// import * as firebase from 'firebase';
// import * as loginService from '../../services/login-service';
// import * as settingsService from '../../services/settings-service';
// import * as userService from '../../services/user-service';
// import * as moviesService from '../../services/movies-service';

import * as colors from '../../common/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Loading from '../../common/loading';

const { width, height } = Dimensions.get('window');

export default class Welcome extends Component {

  static navigationOptions = {
    header: {
      visible: false
    }
  }

  constructor(props) {
    super(props);
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container} renderToHardwareTextureAndroid={true}>

        <StatusBar hidden={false} backgroundColor={colors.getList().statusBar} translucent={true} />

        <Text style={styles.welcome1}>
          Bienvenido a Superapp
        </Text>

        <Text style={styles.welcome2}>
          La mejor aplicación React Native del mundo
        </Text>

        <TouchableOpacity
          onPress={() => navigate('Login')}
          style={styles.buttonDark}
          activeOpacity={0.9}>
          <Text style={styles.textLight}>
            ACCEDER
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Register')}
          style={styles.button}
          activeOpacity={0.9}>
          <Text style={styles.text}>
            REGISTRO
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.getList().primary,
    padding: 30
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20
  },
  welcome1: {
    color: colors.getList().white,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 35,
    marginBottom: 5
  },
  welcome2: {
    color: colors.getList().white,
    textAlign: 'left',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 40
  },
  button: {
    paddingTop: 17,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 17,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: colors.getList().app,
    backgroundColor: colors.getList().primary,
    marginBottom: 20,
    minWidth: 300
  },
  buttonDark: {
    paddingTop: 17,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 17,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: colors.getList().app,
    backgroundColor: colors.getList().app,
    marginBottom: 15,
    minWidth: 300
  },
  text: {
    color: colors.getList().app,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14
  },
  textLight: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14
  }
});
