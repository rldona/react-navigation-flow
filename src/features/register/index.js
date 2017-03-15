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

// import * as firebase from 'firebase';
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

export default class Register extends Component {

  static navigationOptions = {
    header: {
      visible: false
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordRepeat: '',
      showLoading: false
    }
  }

  _register() {
    Keyboard.dismiss();
    this.props.navigation.dispatch(resetHome);
  }

  _goBack() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  showButtonLoading() {
    if (!this.state.showLoading) {
      return <Text style={styles.buttonTextClear}>REGÍSTRO</Text>
    } else {
      return <Loading color="#222" size={19} />
    }
  }

  renderButtonStyle() {
    if (this.state.name !== '' && this.state.email !== '' && this.state.password !== '' && this.state.password.length > 5 && this.state.passwordRepeat !== '' && this.state.password === this.state.passwordRepeat) {
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
        marginBottom: 20,
        minWidth: 300,
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
        marginBottom: 20,
        minWidth: 300
      }
    }
  }

  renderButtonOpacity() {
    if (this.state.name !== '' && this.state.email !== '' && this.state.password !== '' && this.state.password.length > 5 && this.state.passwordRepeat !== '' && this.state.password === this.state.passwordRepeat) {
      return 0.8;
    } else {
      return 1;
    }
  }

  render() {
    return(

      <View style={styles.container} renderToHardwareTextureAndroid={true}>

        <Text onPress={this._goBack.bind(this)} style={styles.textBack}>
          <Icon name="arrow-back" size={30} color={colors.getList().white} />
        </Text>

        <Text style={styles.label}>Hola, regístrate en Filmist</Text>

        <TextInput
          style={styles.input}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          placeholder="Name"
          returnKeyType="next"
          underlineColorAndroid='#FFF'
          placeholderTextColor="#666"
          autoFocus={false} />

        <TextInput
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          returnKeyType="next"
          underlineColorAndroid='#FFF'
          placeholderTextColor="#666"
          placeholder="Email" />

        <TextInput
          style={styles.input}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder="Contraseña"
          returnKeyType="next"
          underlineColorAndroid='#FFF'
          placeholderTextColor="#666"
          secureTextEntry={true} />

        <TextInput
          style={styles.input}
          onChangeText={(passwordRepeat) => this.setState({passwordRepeat})}
          value={this.state.passwordRepeat}
          placeholder="Confirmar contraseña"
          returnKeyType="done"
          underlineColorAndroid='#FFF'
          placeholderTextColor="#666"
          onSubmitEditing={this._register.bind(this)}
          secureTextEntry={true} />

        <TouchableOpacity onPress={this._register.bind(this)} style={this.renderButtonStyle()} activeOpacity={this.renderButtonOpacity()}>
          {this.showButtonLoading()}
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
    marginTop: 34,
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
  input: {
    paddingVertical: 10,
    minWidth: 300,
    fontSize: 15,
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
    marginBottom: 20,
    minWidth: 300,
  },
  buttonText: {
    color: colors.getList().white,
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
