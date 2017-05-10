import React, { Component } from 'react';
import { View,StatusBar } from 'react-native';
import { loginUserByToken } from './actions/Auth/login';
import { connect } from 'react-redux';
import NavigationRouter from './navigation/NavigationRouter';

class App extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(loginUserByToken());
  }

  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle="light-content"/>
        <NavigationRouter />
      </View>
    );
  }

}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);