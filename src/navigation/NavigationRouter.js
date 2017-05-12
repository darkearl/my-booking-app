import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { connect } from 'react-redux'
import NavigationDrawer from './NavigationDrawer'

// screens identified by the router
import Main from '../containers/Main'
import Login from '../containers/Auth/Login'
import LaunchScreen from '../containers/LaunchScreen';

/* **************************
 * Documentation: https://github.com/aksonov/react-native-router-flux
 ***************************/
const RouterWithRedux = connect()(Router);
class NavigationRouter extends Component {
  render () {
    return (
      <RouterWithRedux>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper'>
            <Scene initial key="launchScreen" title='LaunchScreen' component={LaunchScreen} hideNavBar />
            <Scene key="login" component={Login} hideNavBar />
            <Scene key="main" title='MainScreen' component={Main} />
          </Scene>
        </Scene>
      </RouterWithRedux>
    )
  }
}

export default NavigationRouter
