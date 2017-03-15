import React, { Component } from 'react';

import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  Keyboard,
  StyleSheet
} from 'react-native';

import { NavigationActions } from 'react-navigation';

// import * as loginService from '../../services/login-service';
// import * as userService from '../../services/user-service';
// import * as themoviedb from '../../services/movies-service';

import * as colors from '../../common/colors';

import Icon from 'react-native-vector-icons/MaterialIcons';
// import Loading from '../../common/loading';

// Config Reset
const resetHome = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Preload'})
  ]
});

export default class Login extends Component {

  static navigationOptions = {
    header: {
      visible: false
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailRemember: '',
      password: '',
      showLoading: false
    };
  }

  _goBack() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  _login() {
    Keyboard.dismiss();
    this.props.navigation.dispatch(resetHome);
  }

  _remember() {
    const { navigate } = this.props.navigation;

    Keyboard.dismiss();

    navigate('Remember');
  }

  showButtonLoading() {
    if (!this.state.showLoading) {
      return <Text style={styles.buttonTextClear}>INICIA SESIÓN</Text>;
    } else {
      return <Loading color="#FFF" size={19} />;
    }
  }

  renderButton() {
    if (this.state.email !== '' && this.state.password !== '' && this.state.password.length > 5) {
      return {
        marginTop: 30,
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
      }
    } else {
      return {
        marginTop: 30,
        paddingTop: 17,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 17,
        borderRadius: 3,
        borderWidth: 2,
        borderColor: '#333',
        backgroundColor: '#333',
        marginBottom: 15,
        minWidth: 300
      }
    }
  }

  renderButtonOpacity() {
    // if (this.state.email !== '' && this.state.password !== '') {
    //   return 0.8;
    // } else {
    //   return 1;
    // }
    return 1;
  }

  render() {

    return(

      <View style={styles.container} renderToHardwareTextureAndroid={true}>

        <Text onPress={this._goBack.bind(this)} style={styles.textBack}>
          <Icon name="arrow-back" size={30} color="#222" />
        </Text>

        <Text style={styles.label}>Inicia sesión en Filmist</Text>

        <TextInput
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          underlineColorAndroid='#FFF'
          placeholderTextColor="#666"
          placeholder="Email"
          returnKeyType="next"
          autoFocus={false} />

        <TextInput
          style={styles.input}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          underlineColorAndroid='#FFF'
          placeholderTextColor="#999"
          placeholder="Contraseña"
          returnKeyType="done"
          onSubmitEditing={this._login.bind(this)}
          secureTextEntry={true} />

        <TouchableOpacity onPress={this._login.bind(this)} style={this.renderButton()} activeOpacity={this.renderButtonOpacity()}>
          {this.showButtonLoading()}
        </TouchableOpacity>

        <TouchableOpacity onPress={this._remember.bind(this)} style={styles.buttonClear} activeOpacity={0.9}>
          <Text style={styles.buttonText}>RECORDAR CONTRASEÑA</Text>
        </TouchableOpacity>

      </View>

    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.getList().primary,
    paddingTop: 10,
    padding: 30
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
  textBack: {
    marginTop: 24,
    paddingLeft: 0,
    marginBottom: 30,
  },
  arrowBack: {
    width: 30,
    height: 30
  },
  label: {
    textAlign: 'left',
    fontSize: 25,
    marginBottom: 30,
    color: colors.getList().white
  },
  labelRemember: {
    fontSize: 18,
    marginBottom: 30,
    color: colors.getList().white
  },
  input: {
    minWidth: 300,
    fontSize: 15,
    paddingVertical: 10,
    color: colors.getList().white
  },
  button: {
    marginTop: 30,
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
  buttonClear: {
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
  buttonText: {
    color: colors.getList().app,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14
  },
  buttonTextClear: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14
  }
});
