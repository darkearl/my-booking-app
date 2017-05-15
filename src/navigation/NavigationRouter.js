import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { connect } from 'react-redux'
import NavigationDrawer from './NavigationDrawer'
import CustomNavbar from './CustomNavbar'
import TabIcon from '../components/TabIcon'

// screens identified by the router
import Home from '../containers/Home'
import Login from '../containers/Auth/Login'
import LaunchScreen from '../containers/LaunchScreen';

import Styles from './styles';
/* **************************
 * Documentation: https://github.com/aksonov/react-native-router-flux
 ***************************/
const RouterWithRedux = connect()(Router);
class NavigationRouter extends Component {
  render () {
    return (
      <RouterWithRedux navBar={CustomNavbar}>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' tabs>
            <Scene initial key="launchScreen" title='LaunchScreen' component={LaunchScreen} hideNavBar />
            <Scene key="login" component={Login} hideNavBar />
            <Scene key="main" tabs tabBarStyle={Styles.tabBar}>
              <Scene key="home"
                     icon={TabIcon}
                     tabIcon="ios-home-outline"
                     title='HomeScreen'
                     component={Home} />
              <Scene key="home2"
                     title='HomeScreen2'
                     icon={TabIcon}
                     tabIcon="ios-alarm-outline"
                     component={Home} />
            </Scene>
          </Scene>
        </Scene>
      </RouterWithRedux>
    )
  }
}

export default NavigationRouter
