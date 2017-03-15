import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import * as colors from '../../common/colors';

import Header from '../../common/header';

const { width, height } = Dimensions.get('window');

class Search extends Component {

  static navigationOptions = {
    header: {
      visible: false
    }
  }

  constructor(props, context) {
    super(props, context);
  }

  _onActionSelected = (action) => {
    switch (action) {
      case 'left':
        const { goBack } = this.props.navigation;
        goBack();
        break;
      case 'right':

        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Header
          isTransparent={false}
          title="Search"
          actions={{ left: { icon: 'arrow-back' }, right: { icon: 'share' } }}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default Search;