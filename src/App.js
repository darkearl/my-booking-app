import React, { Component } from 'react';
import { StyleSheet,StatusBar } from 'react-native';
import { Router } from 'react-native-router-flux'
import { Container } from 'native-base';
import { loginUserByToken } from './actions/Auth/login';
import { connect } from 'react-redux';
import { scenes } from './scenes';

const RouterWithRedux = connect()(Router);

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
      <Container>
        <StatusBar barStyle="light-content"/>
        <RouterWithRedux scenes={scenes} />
      </Container>
    );
  }

}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);