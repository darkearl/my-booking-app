import React, { Component } from 'react';
import { View,StatusBar } from 'react-native';
import NavigationRouter from './navigation/NavigationRouter';

class App extends Component {

  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle="light-content"/>
        <NavigationRouter />
      </View>
    );
  }

}

export default App